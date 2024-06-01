import { Routes } from '@angular/router';
import { TasksPageContentComponent } from './tasks-page-content/tasks-page-content.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    {path: 'Tasks', component: TasksPageContentComponent},
    {path: 'Profile', component: ProfilePageComponent},
    {path: 'Contact', component: ContactPageComponent}
];
