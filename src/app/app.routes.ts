import { Routes } from '@angular/router';
import { AssignmentsGridComponent } from './assignments-grid/assignments-grid.component';

export const routes: Routes = [
    {path: '', component: AssignmentsGridComponent},
    {path: 'Tasks', component: AssignmentsGridComponent}
];
