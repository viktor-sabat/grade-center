import { Component, Output } from '@angular/core';
import { subjectGridComponent } from '../subject-grid/subject-grid.component';
import { SubjectFiltersComponent } from '../subject-filters/subject-filters.component';
import { Error404Component } from '../error-404/error-404.component';

@Component({
  selector: 'tlr-subject-page-content',
  standalone: true,
  imports: [subjectGridComponent, SubjectFiltersComponent, Error404Component],
  templateUrl: './subject-page-content.component.html',
  styleUrl: './subject-page-content.component.css',
})
export class SubjectPageContentComponent {
  subjectsTotal: number = 0;
  userRole: string | null = localStorage.getItem('userRole');

  updateSubjectsTotal(count: number) {
    this.subjectsTotal = count;
  }

}
