import { Routes } from '@angular/router';
import { AssignmentsGridComponent } from './assignments-grid/assignments-grid.component';
import { TaskFiltersComponent } from './task-filters/task-filters.component';
import { TasksPageContentComponent } from './tasks-page-content/tasks-page-content.component';

export const routes: Routes = [
    {path: '', component: AssignmentsGridComponent},
    {path: 'Tasks', component: TasksPageContentComponent}
];
