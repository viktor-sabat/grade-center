import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'tlr-task-filters',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './task-filters.component.html',
  styleUrl: './task-filters.component.css'
})
export class TaskFiltersComponent {

  
}
