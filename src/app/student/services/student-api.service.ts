import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentEndPoints } from '../../core/environments/baseUrl';
import { Allstudents, StudentApi } from '../interfaces/student-data';

@Injectable({
  providedIn: 'root',
})
export class StudentApiService {
  private readonly _HttpClient = inject(HttpClient);
  constructor() {}

  getStudent(studentId: string): Observable<StudentApi> {
    return this._HttpClient.get<StudentApi>(
      studentEndPoints.getStudent + studentId
    );
  }
  getAllStudent(): Observable<Allstudents> {
    return this._HttpClient.get<Allstudents>(studentEndPoints.getAllStudents);
  }
}
