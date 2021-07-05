import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/_models/User';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User;
  form: FormGroup;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(null, {
        validators: [Validators.required]
      }),
      lastName: new FormControl(null, {
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        validators: [Validators.required]
      }),
      phone: new FormControl(null, {
        validators: [Validators.required]
      }),
      nationality: new FormControl(null, {
        validators: [Validators.required]
      }),
    });
  }

  onCreateUser() {
    debugger;
    if (this.form.invalid){
      return;
    }
    this.userService.addUser(this.form.value.firstName, this.form.value.lastName, this.form.value.email, this.form.value.phone, this.form.value.nationality)

    this.form.reset();
  }
}
