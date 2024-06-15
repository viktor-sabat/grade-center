import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { subjectCardsComponent } from '../subject-cards/subject-cards.component';
import { StudentService } from '../api-service/api.service';
import { HttpClient } from '@angular/common/http';
import { Subjects } from '../models/ISubjects';

@Component({
  selector: 'tlr-subjects-grid',
  standalone: true,
  imports: [subjectCardsComponent],
  templateUrl: './subject-grid.component.html',
  styleUrl: './subject-grid.component.css',
  providers: [HttpClient],
})
export class subjectGridComponent implements OnInit {
  subjects: Subjects[] = [];

  // Emits the total number of subjects to the parent component
  @Output() subjectsLength = new EventEmitter<number>();

  // Injecting the student service
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getSubjects().subscribe((subjects) => {
      this.subjects = subjects;
      this.emitSubjectCounts()
    });
  }

  emitSubjectCounts() {
    this.subjectsLength.emit(this.getAllSubjectsCount());
  }

  getAllSubjectsCount(): number {
    return this.subjects.length;
  }
}
