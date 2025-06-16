import { Component, inject } from '@angular/core';
import { ExamApiService } from '../../services/exam-api.service';
import { Exam } from '../../interfaces/exam';
import { DatePipe } from '@angular/common';
import { AddExamComponent } from '../add-exam/add-exam.component';
import { FakeExamService } from '../../services/fake-exam.service';

@Component({
  selector: 'app-exam-list',
  standalone: true,
  imports: [DatePipe, AddExamComponent],
  templateUrl: './exam-list.component.html',
  styleUrl: './exam-list.component.scss',
})
export class ExamListComponent {
  private readonly _examApis = inject(ExamApiService);
  private readonly _FakeexamApis = inject(FakeExamService);
  exams: Exam[] = [];

  constructor() {
    this.getExams();
    this.fakeExam();
  }

  fakeExam() {
    this._FakeexamApis.getExams().subscribe({
      next: (data) => {
        // this.exams = data;
        console.log(data);
      },
      error: (error) => {
        console.error('Error fetching exams:', error);
      },
    });
  }
  private getExams(): void {
    this._examApis.getExams().subscribe({
      next: (data) => {
        this.exams = data.results;
      },
      error: (error) => {
        console.error('Error fetching exams:', error);
      },
    });
  }
}
