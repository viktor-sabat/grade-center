import { Component, Output } from '@angular/core';
import { subjectGridComponent } from '../subject-grid/subject-grid.component';
import { SubjectFiltersComponent } from '../subject-filters/subject-filters.component';

@Component({
  selector: 'tlr-subject-page-content',
  standalone: true,
  imports: [subjectGridComponent, SubjectFiltersComponent],
  templateUrl: './subject-page-content.component.html',
  styleUrl: './subject-page-content.component.css',
})
export class SubjectPageContentComponent {
  subjectsTotal: number = 0;

  updateSubjectsTotal(count: number) {
    this.subjectsTotal = count;
  }

}
