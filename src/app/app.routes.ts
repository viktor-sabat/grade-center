import { Routes } from '@angular/router';
import { AssignmentsGridComponent } from './assignments-grid/assignments-grid.component';
import { TaskFiltersComponent } from './task-filters/task-filters.component';
import { TasksPageContentComponent } from './tasks-page-content/tasks-page-content.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    {path: 'Tasks', component: TasksPageContentComponent},
    {path: 'Contact', component: ContactPageComponent}
];
