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
  Assignments: Array<Assignment> = [
    {
      title: "Philosophy Essay Revision",
      isUploaded: true,
      isReviewed: true,
      isExpired: false,
      deadlineDate: "12.03.2024",
      statusTitle: "Uploaded",
      uploadDate: "14.05.2024",
      grade: 90,
    },
    {
      title: "Philosophy Essay Revision",
      isUploaded: true,
      isReviewed: false,
      isExpired: false,
      deadlineDate: "29.03.2024",
      statusTitle: "Uploaded",
      uploadDate: "22.03.2024",
      grade: 17,
    },
    {
      title: "Philosophy Essay Revision",
      isUploaded: false,
      isReviewed: false,
      isExpired: false,
      deadlineDate: "12.03.2024",
      statusTitle: "Uploaded",
      uploadDate: "14.05.2024",
      grade: 0,
    },
    {
      title: "Philosophy Essay Revision",
      isUploaded: false,
      isReviewed: false,
      isExpired: true,
      deadlineDate: "12.03.2024",
      statusTitle: "Expired",
      uploadDate: "14.05.2024",
      grade: 0,
    }
  ]

}
