import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  Choice,
  ChoiceApiRes,
  CreateChoice,
  Exam,
  ExamApiRes,
  ExamData,
  Question,
  QuestionApiRes,
} from '../interfaces/exam';
import { Observable } from 'rxjs';
import { baseUrl, ExamEndPoints } from '../../core/environments/baseUrl';

@Injectable({
  providedIn: 'root',
})
export class ExamApiService {
  private readonly _httpClient = inject(HttpClient);
  constructor() {}

  getExams(): Observable<ExamApiRes> {
    return this._httpClient.get<ExamApiRes>(ExamEndPoints.getAllExams);
  }
  getExamById(id: number) {
    return this._httpClient.get<Exam>(`/api/exams/${id}/`);
  }

  addExam(examData: ExamData): Observable<Exam> {
    return this._httpClient.post<Exam>(ExamEndPoints.addExam, examData);
  }
  addQuestion(questionData: Question): Observable<QuestionApiRes> {
    return this._httpClient.post<QuestionApiRes>(
      ExamEndPoints.addquestion,
      questionData
    );
  }
  addChoices(choicesData: CreateChoice): Observable<ChoiceApiRes> {
    return this._httpClient.post<ChoiceApiRes>(
      ExamEndPoints.addChoices,
      choicesData
    );
  }
}
