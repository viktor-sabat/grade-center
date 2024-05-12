import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserHeaderComponent } from './user-header/user-header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AssignmentsGridComponent } from './assignments-grid/assignments-grid.component';
import { TaskFiltersComponent } from './task-filters/task-filters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserHeaderComponent, SidemenuComponent, AssignmentsGridComponent, TaskFiltersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
