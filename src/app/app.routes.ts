import { Routes } from '@angular/router';
import { AssignmentsGridComponent } from './assignments-grid/assignments-grid.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    {path: '', component: AssignmentsGridComponent},
    {path: 'Tasks', component: AssignmentsGridComponent},
    {path: 'Contact', component: ContactPageComponent}
];
