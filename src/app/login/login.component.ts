import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserInfo } from '../user-info';

@Component({
  selector: 'tlr-user-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userInfo: UserInfo = {
    username: '',
    password: ''
  }

  // Creating a custom event
  @Output()
  isSuccessfullyLoggedIn = new EventEmitter();

  // This method handles the ngSubmit event (form submission)
  onLogin(form: NgForm){
    // Emitting successful log in event which will be handled inside the app.component 
    this.isSuccessfullyLoggedIn.emit();

    // Resetting the form
    this.userInfo = {
      username: '',
      password: ''
    }
  }
}
