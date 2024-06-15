import { Component, Output } from '@angular/core';
import { AssignmentsGridComponent } from '../assignments-grid/assignments-grid.component';
import { TaskFiltersComponent } from '../task-filters/task-filters.component';
import { Error404Component } from '../error-404/error-404.component';

@Component({
  selector: 'tlr-tasks-page-content',
  standalone: true,
  imports: [AssignmentsGridComponent, TaskFiltersComponent, Error404Component],
  templateUrl: './tasks-page-content.component.html',
  styleUrl: './tasks-page-content.component.css'
})
export class TasksPageContentComponent {
  assignmentsTotal: number = 0;
  assignmentsReviewed: number = 0;
  userRole: string | null = localStorage.getItem('userRole');

  updateAssignmentsTotal(count: number) {
    this.assignmentsTotal = count;
  }

  updateAssignmentsReviewed(count: number) {
    this.assignmentsReviewed = count;
  }
}
