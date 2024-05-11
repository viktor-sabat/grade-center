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
  // Based on these variables, the colour of the card will be determined.
  isAssignmentUploaded: boolean = false;
  isAssignmentReviewed: boolean = false;
  isAssignmentExpired: boolean = true;
}
