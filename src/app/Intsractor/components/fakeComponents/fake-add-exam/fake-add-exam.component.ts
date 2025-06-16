import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FakeExamService } from '../../../../shared/services/fake-exam.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fake-add-exam',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './fake-add-exam.component.html',
  styleUrl: './fake-add-exam.component.scss',
})
export class FakeAddExamComponent {
  private readonly _examApis = inject(FakeExamService);
  private readonly _router = inject(Router);

  firstStep: boolean = false;

  examFakeForm: FormGroup = new FormGroup({
    id: new FormControl(Math.floor(Math.random() * 1000000), [
      Validators.required,
    ]),
    numberOfQuestions: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
  });
  questionsForm!: FormGroup;

  ngOnInit() {}

  onSubmit() {
    if (this.examFakeForm.valid) {
      this.firstStep = true;
      // this._router.navigate(['/fakeQuestions', this.examFakeForm.value]);
    }
  }

  onQuestionsSubmit() {}
}
