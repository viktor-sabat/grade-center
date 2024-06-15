import { Component, Input } from '@angular/core';
import { Assignment } from '../models/IAssignment';
import { StudentService } from '../api-service/api.service';

@Component({
  selector: 'tlr-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  // Represents the number of all assignments
  allAssignments: number = 0;

  // Represents the number of assignments that have been reviewed
  reviewedAssignments: number = 0;

  // Represents the number of assignments that are under review
  underReviewAssignments: number = 0;

  // Represents the number of assignments that are overdue
  overdueAssignments: number = 0;

  // An array of assignments
  assignments: Assignment[] = [];

  // Injecting the student service
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getAssignments().subscribe((assignments) => {
      this.assignments = assignments;

      this.allAssignments = this.getAllAssignmentsCount();
      this.reviewedAssignments = this.getReviewedAssignmentsCount();
      this.underReviewAssignments = this.getUploadedAssignmentsCount();
      this.overdueAssignments = this.getExpiredAssignmentsCount();
    });
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

  /*
   * Returns the number of assignments that have been reviewed (where reviewed is true).
   */
  getUploadedAssignmentsCount(): number {
    return this.assignments.filter(assignment => assignment.uploaded && !assignment.reviewed).length;
  }

  /*
  * Returns the number of assignments that have expired.
  */
  getExpiredAssignmentsCount(): number {
    return this.assignments.filter(assignment => assignment.expired).length;
  }

}