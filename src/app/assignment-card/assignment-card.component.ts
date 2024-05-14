import { Component, Input } from '@angular/core';

@Component({
  selector: 'tlr-assignment-card',
  standalone: true,
  imports: [],
  templateUrl: './assignment-card.component.html',
  styleUrl: './assignment-card.component.css'
})

export class AssignmentCardComponent {
  // Boolean variables representing different states of the assignment card.
  // Based on these variables, the colour of the card will be determined
  @Input()
  isAssignmentUploaded: boolean = false;

  @Input()
  isAssignmentReviewed: boolean = false;

  @Input()
  isAssignmentExpired: boolean = true;

  // Date for deadlines in assignment card
  @Input()
  deadlineDate: string = "20.04.2024";

  // Represents the title of the assignment card
  @Input()
  assignmentTitle: string = "Assignment Title..."

  // Represents the status of the assignment card
  @Input()
  assignmentStatusTitle: string = "Uploaded"
  
  // Represents the upload date on the assignment card
  @Input()
  uploadDate: string = "19.04.2024"

  // Represents the assignment grade
  @Input()
  assignmentGrade: string = "12";
}
