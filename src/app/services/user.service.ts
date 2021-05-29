import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../_models/User';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private users: User[] = [];
private usersUpdated = new Subject<User[]>();


constructor(private http: HttpClient, private router: Router) {
  
}

addUser(firstName: string, lastName: string, email: string, phone: string, nationality: string ){
  const user: User = {
    id: '',
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    nationality: nationality
  };

  this.http.post<{ message: string, userId: string }>("http://localhost:5000/api/users", user)
    .subscribe(responseData => {
      const id = responseData.userId;
      user.id = id;
      this.router.navigate(["/"]);
    })
}

getUsers(){
  this.http.get<{ message:string, users:any }>(
    "http://localhost:5000/api/users"
  ).pipe(map((getData) => {
    return getData.users.map(user => {
      return {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        nationality: user.nationality,
        id: user._id,
      };
    });
  })).subscribe((users) => {
    this.users = users;
    this.usersUpdated.next([...this.users])
  });
}

getUserUpdatedListner() {
  return this.usersUpdated.asObservable();
}

}
