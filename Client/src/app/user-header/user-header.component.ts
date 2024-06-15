import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Student } from '../models/IStudent';
import { StudentService } from '../api-service/api.service';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../models/ITeacher';

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
  teachers: Teacher[] = [];
  student: Student | undefined;
  teacher: Teacher | undefined;
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

    this.studentService.getTeachers().subscribe((teachers) => {
      this.teachers = teachers;
      this.teacher = this.getTeacherEmail();
    });
  }

  getStudentEmail(): Student | undefined {
    this.emailFromStorage = localStorage.getItem('userEmail');
    return this.students.find(student => student.email === this.emailFromStorage);
  }

  getTeacherEmail(): Teacher | undefined {
    this.emailFromStorage = localStorage.getItem('userEmail');
    return this.teachers.find(teacher => teacher.email === this.emailFromStorage);
  }
}
