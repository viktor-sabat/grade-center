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
  loggedInAccount: string = '';

  userInfo: UserInfo = {
    role: '',
    username: '',
    password: ''
  }

  studentLogin: UserInfo = {
    role: 'student',
    username: 'tester.wesley@gmail.com',
    password: 'student'
  }

  teacherLogin: UserInfo = {
    role: 'teacher',
    username: 'kenny.lacroix@ucll.be',
    password: 'teacher'
  }

  studentTeacherLogin: UserInfo = {
    role: 'studentTeacher',
    username: 'viktor.sabat@gmail.com',
    password: 'studentTeacher'
  }

  userGreeting: string = "Hey there!";
  userCallToAction: string = "Please fill out the form below to get started";
  userError: string = "";

  // Creating a custom event
  @Output()
  isSuccessfullyLoggedIn = new EventEmitter();

  // This method handles the ngSubmit event (form submission)
  onLogin(form: NgForm){
    // Emitting successful log in event which will be handled inside the app.component 
    if(localStorage.getItem('userRole')){
      this.isSuccessfullyLoggedIn.emit();
    } else {
      this.userError = 'Please select a role!';
    }
    

    // Resetting the form
    this.userInfo = {
      role: '',
      username: '',
      password: ''
    }    
  }

/*
 * Handles the account type change.
 * 
 * Parameters:
 *   - event: An event that represents the selection of the account type radio button.
 * 
 * Preconditions:
 *   - Each account type radio button HTML element must have the value property filled in (e.g value="mentor").
 * 
 * Post Conditions:
 *   - The greeting message has been adjusted, so that it contains the selected account type i.e. mentor, mentee or mentor/mentee.
 */
  onAccountTypeChange(event: Event){
    // Represents the selected radio button in an HTML format
    const radioButton = event.target as HTMLInputElement;

    // Represents the selected account type (e.g. mentor, mentee, ...)
    const selectedAccountType = radioButton.value;
    
    // Adjust the greeting message accordingly 
    this.userGreeting = "Hello, " + selectedAccountType + "!"; 

    if(selectedAccountType == 'student'){
      localStorage.setItem('userRole', this.studentLogin.role);
      localStorage.setItem('userEmail', this.studentLogin.username);
    } else if (selectedAccountType == 'teacher'){
      localStorage.setItem('userRole', this.teacherLogin.role);
      localStorage.setItem('userEmail', this.teacherLogin.username);
    } else {
      localStorage.setItem('userRole', this.studentTeacherLogin.role);
      localStorage.setItem('userEmail', this.studentTeacherLogin.username);
    }
  }
}
