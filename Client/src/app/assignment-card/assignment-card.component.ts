import { Component, Input, SimpleChanges } from '@angular/core';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'tlr-assignment-card',
  standalone: true,
  imports: [TruncatePipe, MatTooltip],
  templateUrl: './assignment-card.component.html',
  styleUrl: './assignment-card.component.css'
})

export class AssignmentCardComponent {
  // Boolean variables representing different states of the assignment card.
  // Based on these variables, the colour of the card will be determined

  // The unique id of an assignment 
  @Input()
  assignmentId: number = 0;

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

  @Input()
  backgroundBannerUrl: string = '../../assets/Images/assignment-attached-doc.png';

  @Input()
  assignmentDescription: string = '';

  /*
   * This method will be triggered every time any of its parent properties is changed 
   */
  ngOnChanges(changes: SimpleChanges) {

    // If the variable that represents the 'expired status' of the card is changed
    if (changes['isAssignmentExpired']) {

      // It is logical to check if its status if 'true' now, meaning that the card is expired
      if(this.isAssignmentExpired){
        
        // If card is expired we need to change its 'uploaded' label
        this.assignmentStatusTitle = "Expired"
      }
    }
  }

  tooltipContent(): string {
    const content = 
      `Title: ${this.assignmentTitle}
      ========================
      ${this.assignmentDescription} `
    ;
    return content;
  }
  
  
}
