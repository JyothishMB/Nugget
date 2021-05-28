import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/_models/User';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  onCreateUser(form: NgForm) {
    debugger;
    if (form.invalid){
      return;
    }
    this.userService.addUser(form.value.firstName, form.value.lastName, form.value.email, form.value.phone, form.value.nationality)

    form.resetForm();
  }
}
