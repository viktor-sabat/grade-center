import { Routes } from '@angular/router';
import { AssignmentsGridComponent } from './assignments-grid/assignments-grid.component';
import { TaskFiltersComponent } from './task-filters/task-filters.component';
import { TasksPageContentComponent } from './tasks-page-content/tasks-page-content.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    {path: '', component: AssignmentsGridComponent},
    {path: 'Tasks', component: TasksPageContentComponent},
    {path: 'Profile', component: ProfilePageComponent},
    {path: 'Contact', component: ContactPageComponent}
];
