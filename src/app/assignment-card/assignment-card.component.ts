import { Component } from '@angular/core';

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
  isAssignmentUploaded: boolean = false;
  isAssignmentReviewed: boolean = false;
  isAssignmentExpired: boolean = true;

  // Date for deadlines in assignment card
  deadlineDate: string = "20.04.2024";

  // Represents the title of the assignment card
  assignmentTitle: string = "Assignment Title..."

  // Represents the status of the assignment card
  assignmentStatusTitle: string = "Uploaded"
  
  // Represents the upload date on the assignment card
  uploadDate: string = "19.04.2024"

}
