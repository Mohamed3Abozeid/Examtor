import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CourseEndPoints,
  DepartmentEndPoints,
  LevelEndPoints,
  studentEndPoints,
} from '../../core/environments/baseUrl';
import {
  Allstudents,
  CourseApiRes,
  departmentApiRes,
  levelApiRes,
  StudentApi,
  StudentData,
} from '../interfaces/student-data';

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
  addStudent(studentData: StudentData): Observable<StudentApi> {
    return this._HttpClient.post<StudentApi>(
      studentEndPoints.addStudent,
      studentData
    );
  }
  deletStudent(studentId: number): Observable<Allstudents> {
    return this._HttpClient.delete<Allstudents>(
      studentEndPoints.deleteStudent + studentId
    );
  }

  getDepartments(): Observable<departmentApiRes> {
    return this._HttpClient.get<departmentApiRes>(
      DepartmentEndPoints.getDepartment
    );
  }
  getLevels(): Observable<levelApiRes> {
    return this._HttpClient.get<levelApiRes>(LevelEndPoints.getLevel);
  }
  getCourse(): Observable<CourseApiRes> {
    return this._HttpClient.get<CourseApiRes>(CourseEndPoints.getCourse);
  }
}
