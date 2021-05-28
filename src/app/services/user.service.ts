import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

}
