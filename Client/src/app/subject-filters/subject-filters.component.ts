import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'tlr-subject-filters',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './subject-filters.component.html',
  styleUrl: './subject-filters.component.css'
})
export class SubjectFiltersComponent {

}
