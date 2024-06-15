import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignment } from '../models/IAssignment';
import { Subjects } from '../models/ISubjects';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) { }

  private assignmentApiUrl = 'http://localhost:2024/student/assignments';
  private subjectApiUrl = 'http://localhost:2024/student/subjects';


  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.assignmentApiUrl);
  }

  getSubjects(): Observable<Subjects[]> {
    return this.http.get<Subjects[]>(this.subjectApiUrl);
  }
}