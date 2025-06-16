import { Component, inject } from '@angular/core';
import { ExamApiService } from '../../services/exam-api.service';
import { Exam } from '../../interfaces/exam';
import { DatePipe } from '@angular/common';
import { AddExamComponent } from '../add-exam/add-exam.component';

@Component({
  selector: 'app-exam-list',
  standalone: true,
  imports: [DatePipe, AddExamComponent],
  templateUrl: './exam-list.component.html',
  styleUrl: './exam-list.component.scss',
})
export class ExamListComponent {
  private readonly _examApis = inject(ExamApiService);
  exams: Exam[] = [];

  constructor() {
    this.getExams();
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
