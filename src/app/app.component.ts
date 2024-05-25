import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserHeaderComponent } from './user-header/user-header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SidemenuExpendedComponent } from './sidemenu-expended/sidemenu-expended.component';
import { TasksPageContentComponent } from './tasks-page-content/tasks-page-content.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserHeaderComponent, SidemenuComponent, SidemenuExpendedComponent, TasksPageContentComponent, ProfilePageComponent, ContactPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}