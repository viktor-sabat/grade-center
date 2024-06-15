import { Component } from '@angular/core';
import { AssignmentCardComponent } from '../assignment-card/assignment-card.component';

@Component({
  selector: 'tlr-assignments-grid',
  standalone: true,
  imports: [AssignmentCardComponent],
  templateUrl: './assignments-grid.component.html',
  styleUrl: './assignments-grid.component.css'
})
export class AssignmentsGridComponent {
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


}
