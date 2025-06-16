import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamFake } from '../interfaces/fake-exam';
// import { Exam } from '../interfaces/exam';

@Injectable({
  providedIn: 'root',
})
export class FakeExamService {
  private apiUrl = 'http://localhost:3000/exams';

  constructor(private http: HttpClient) {}

  getExams(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getExam(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addExam(exam: ExamFake): Observable<any> {
    return this.http.post<any>(this.apiUrl, exam);
  }

  updateExam(id: number, exam: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, exam);
  }

  deleteExam(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
