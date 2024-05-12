import { Component } from '@angular/core';
import { AssignmentsGridComponent } from '../assignments-grid/assignments-grid.component';
import { TaskFiltersComponent } from '../task-filters/task-filters.component';

@Component({
  selector: 'tlr-tasks-page-content',
  standalone: true,
  imports: [AssignmentsGridComponent, TaskFiltersComponent],
  templateUrl: './tasks-page-content.component.html',
  styleUrl: './tasks-page-content.component.css'
})
export class TasksPageContentComponent {

}
