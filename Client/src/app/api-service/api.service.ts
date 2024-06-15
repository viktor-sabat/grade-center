import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignment } from '../models/IAssignment';
import {Student} from '../models/IStudent'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) { }

  private apiUrlStudent = 'http://localhost:2024/student';
  private apiUrlAssignment = 'http://localhost:2024/student/assignments';

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.apiUrlAssignment);
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrlStudent);
  }
}
