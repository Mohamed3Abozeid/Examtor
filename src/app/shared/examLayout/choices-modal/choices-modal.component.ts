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
  // @Input() examId!: number;
  dataError: boolean = false;
  isLoading: boolean = false;
  numberOfQuestions: number = 0;
  modalInstance: any;
  numQuestions!: number;
  questionForm: FormGroup = new FormGroup({
    // exam: new FormControl(this.examId, [Validators.required]),
    text: new FormControl('', [Validators.required]),
  });
  choicesForm: FormGroup = new FormGroup({
    question: new FormControl('', [Validators.required]),
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

  submitQuestion() {
    this._examApis.addQuestion(this.questionForm.value).subscribe({
      next: (res) => {
        console.log('true', res);
      },
      error: (err) => {
        console.error('Error adding question:', err);
      },
    });
  }

  // questions choice

  addChoice() {
    console.log(this.choicesForm.value);

    this._examApis.addChoices(this.choicesForm.value).subscribe({
      next: (res) => {
        console.log('Choice added successfully:', res);
        this.choicesForm.reset();
      },
      error: (err) => {
        console.error('Error adding choice:', err);
        this.dataError = true;
      },
    });
  }
}
