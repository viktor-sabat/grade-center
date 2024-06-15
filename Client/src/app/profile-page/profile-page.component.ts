import { Component, OnInit } from '@angular/core';
import { Student } from '../models/IStudent';
import { StudentService } from '../api-service/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
  providers: [HttpClient]
})
export class ProfilePageComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService){
  }

  ngOnInit(){
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });
  }

  getStudentId(): Student | undefined {
    return this.students.find(student => student.id === 1);
  }
}
