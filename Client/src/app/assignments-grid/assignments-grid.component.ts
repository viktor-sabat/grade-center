import { Component, OnInit } from '@angular/core';
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

export class AssignmentsGridComponent implements OnInit{
  // Represents an array with a set of three boolean variables to define the card status
  AssignmentStatusParameters: undefined | boolean[][] = [
    [false, false, false],
    [false, false, false],
    [true, true, false],
    [true, false, false],
    [true, false, false],
    [true, true, false],
    [true, true, false],
    [true, false, false],
    [false, false, false],
    [true, false, false],
    [true, true, false],
    [true, false, false],
    [false, false, true],
    [false, false, false],
    [true, true, false],
    [true, true, false],
    [false, false, false],
    [true, false, false],
    [true, true, false],
    [false, false, false],
    [false, false, false],
    [true, true, false],
    [true, false, false],
    [false, false, true],
    [true, true, false],
    [true, false, false],
    [true, true, false],
    [true, true, false],
    [false, false, false],
    [true, true, false],
    [true, false, false],
    [false, false, true],
    [true, true, false],
    [true, true, false],
    [true, true, false],
  ];  

  // An array of assignments
  assignments: Assignment[] = [];

  // Injecting the student service
  constructor(private studentService: StudentService){
   }


  ngOnInit() {
    this.studentService.getAssignments().subscribe((assignments) => {
      this.assignments = assignments;
    });
  }
}
