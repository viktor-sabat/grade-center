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

}
