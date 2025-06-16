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
  // @ViewChild('modalElement2') modalElement2!: ElementRef;
  // @Input() examId!: number;
  dataError: boolean = false;
  isLoading: boolean = false;
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

  @ViewChild('modalB') modalRef!: ElementRef;

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
}
