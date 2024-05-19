import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserHeaderComponent } from './user-header/user-header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TasksPageContentComponent } from './tasks-page-content/tasks-page-content.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
   imports: [RouterOutlet, UserHeaderComponent, SidemenuComponent, TasksPageContentComponent, ContactPageComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  // Variable indicating the user's login status
  isLoggedIn: boolean = false;

  // Variable that indicates whether the login state has been retrieved from the local storage
  isLoggedInFromStorage: boolean = false;

  ngOnInit() {
    // Check for login state stored in local storage
    this.isLoggedInFromStorage = localStorage.getItem('isLoggedIn') === 'true';

    // If the login state has been retrieved from local storage
    // the user is automatically logged in
    if (this.isLoggedInFromStorage) {
      this.isLoggedIn = true;
    }
  }

  // Handles the successful login event
  // Updates the isLoggedIn variable and saves the state in local storage
  handleLogin() {
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
  }

  // Handles the successful logout event
  // Updates the isLoggedIn variable and saves the state in local storage
  handleLogout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }
}
