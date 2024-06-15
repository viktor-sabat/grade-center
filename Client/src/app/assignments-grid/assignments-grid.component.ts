import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AssignmentCardComponent } from '../assignment-card/assignment-card.component';
import { StudentService } from '../api-service/api.service';
import { Assignment } from '../models/IAssignment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'tlr-assignments-grid',
  standalone: true,
  imports: [AssignmentCardComponent],
  templateUrl: './assignments-grid.component.html',
  styleUrl: './assignments-grid.component.css',
  providers: [HttpClient]
})

export class AssignmentsGridComponent implements OnInit {

// Emits the total number of assignments to the parent component.
@Output() assignmentsLength = new EventEmitter<number>();

// Emits the number of reviewed assignments to the parent component.
@Output() reviewedAssignmentsLength = new EventEmitter<number>();


  // An array of assignments
  assignments: Assignment[] = [];

  // Injecting the student service
  constructor(private studentService: StudentService) {}

   /*
   * Fetches assignments from the student service when the component initializes.
   * Subscribes to assignment data and updates the local assignments array.
   * Emits assignment counts after updating assignments.
   */
  ngOnInit() {
    this.studentService.getAssignments().subscribe((assignments) => {
      this.assignments = assignments;
      this.emitAssignmentCounts();
    });
  }

  /*
   * Emits the current counts of all assignments and reviewed assignments
   * using the assignmentsLength and reviewedAssignmentsLength event emitters.
   */
  emitAssignmentCounts() {
    this.assignmentsLength.emit(this.getAllAssignmentsCount());
    this.reviewedAssignmentsLength.emit(this.getReviewedAssignmentsCount());
  }

  /*
   * Returns the total number of assignments in the assignments array.
   */
  getAllAssignmentsCount(): number {
    return this.assignments.length;
  }

  /*
   * Returns the number of assignments that have been reviewed (where reviewed is true).
   */
  getReviewedAssignmentsCount(): number {
    return this.assignments.filter(assignment => assignment.reviewed).length;
  }
}