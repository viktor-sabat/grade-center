import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Student } from '../models/IStudent';
import { StudentService } from '../api-service/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'tlr-user-header',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css',
  providers: [HttpClient]
})

export class UserHeaderComponent implements OnInit {
  students: Student[] = [];
  student: Student | undefined;
  emailFromStorage: string | null = '';
  
  @Output()
  isSuccessfullyLoggedOut = new EventEmitter();

  constructor(private studentService: StudentService){
  }

  onLogout(){
    this.isSuccessfullyLoggedOut.emit();
  }

  ngOnInit(){
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
      this.student = this.getStudentEmail();
    });
  }

  getStudentEmail(): Student | undefined {
    this.emailFromStorage = localStorage.getItem('userEmail');
    return this.students.find(student => student.email === this.emailFromStorage);
  }
}
