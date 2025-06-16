import { Choice } from './../../interfaces/exam';
import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { ExamApiService } from '../../services/exam-api.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-choices-modal',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './choices-modal.component.html',
  styleUrl: './choices-modal.component.scss',
})
export class ChoicesModalComponent {
  private readonly _examApis = inject(ExamApiService);
  @ViewChild('modalB') modalRef!: ElementRef;
  @Input() examId!: number;
  dataError: boolean = false;
  isLoading: boolean = false;
  numberOfQuestions!: number;
  modalInstance: any;
  numQuestions!: number;
  questionId!: number;
  questionNumberForms: FormGroup = new FormGroup({
    numberOfQuestion: new FormControl('', [Validators.required]),
  });
  questionForm: FormGroup = new FormGroup({
    exam: new FormControl(Number(localStorage.getItem('ExamId')), [
      Validators.required,
    ]),
    text: new FormControl('', [Validators.required]),
  });
  choice1Form: FormGroup = new FormGroup({
    question: new FormControl(Number(localStorage.getItem('QuestionId')), [
      Validators.required,
    ]),
    text: new FormControl('', [Validators.required]),
    is_correct: new FormControl(true, [Validators.required]),
  });
  choice2Form: FormGroup = new FormGroup({
    question: new FormControl(Number(localStorage.getItem('QuestionId')), [
      Validators.required,
    ]),
    text: new FormControl('', [Validators.required]),
    is_correct: new FormControl(false, [Validators.required]),
  });
  choice3Form: FormGroup = new FormGroup({
    question: new FormControl(Number(localStorage.getItem('QuestionId')), [
      Validators.required,
    ]),
    text: new FormControl('', [Validators.required]),
    is_correct: new FormControl(false, [Validators.required]),
  });
  choice4Form: FormGroup = new FormGroup({
    question: new FormControl(Number(localStorage.getItem('QuestionId')), [
      Validators.required,
    ]),
    text: new FormControl('', [Validators.required]),
    is_correct: new FormControl(false, [Validators.required]),
  });

  ngAfterViewInit() {
    this.modalInstance = new bootstrap.Modal(this.modalRef.nativeElement);
  }

  open() {
    this.modalInstance?.show();
  }

  close() {
    this.modalInstance?.hide();
  }

  // addQuestion
  getNumberOfQuestion() {
    this.numberOfQuestions = Number(
      this.questionNumberForms.value.numberOfQuestion
    );
  }
  submitQuestion() {
    // console.log(this.numberOfQuestions);
    console.log('question form', this.questionForm.value);

    if (this.numberOfQuestions > 0) {
      this._examApis.addQuestion(this.questionForm.value).subscribe({
        next: (res) => {
          console.log('true', res);
          this.questionId = res.id;
          console.log(this.questionId);

          localStorage.setItem('QuestionId', JSON.stringify(res.id));
        },
        error: (err) => {
          console.error('Error adding question:', err);
        },
      });
    }
  }

  // questions choice

  addChoice(formNumber: FormGroup) {
    console.log(formNumber.value);

    this._examApis.addChoices(formNumber.value).subscribe({
      next: (res) => {
        console.log('Choice added successfully:', res);
        formNumber.reset();
      },
      error: (err) => {
        console.error('Error adding choice:', err);
        this.dataError = true;
      },
    });
  }

  nextAndEnd() {
    if (this.numberOfQuestions > 0) {
      this.numberOfQuestions -= 1;
    } else {
      this.modalInstance?.hide();

      this.close();
    }
  }
}
