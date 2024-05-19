import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserInfo } from '../user-info';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'tlr-user-login-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userInfo: UserInfo = {
    username: '',
    password: ''
  }

  onLogin(form: NgForm){
    console.log("you have just logged in!", form.value);
    this.userInfo = {
      username: '',
      password: ''
    }
  }
}
