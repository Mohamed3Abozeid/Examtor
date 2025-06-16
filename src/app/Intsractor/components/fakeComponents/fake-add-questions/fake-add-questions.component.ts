import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fake-add-questions',
  imports: [],
  templateUrl: './fake-add-questions.component.html',
  styleUrl: './fake-add-questions.component.scss',
})
export class FakeAddQuestionsComponent {
  // private readonly _router = inject(Router);
  examData: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      // const examId = params['examId'];
      console.log('from params', params);
    });
  }
}
