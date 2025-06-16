import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  inject,
  OnInit,
} from '@angular/core';
import { ExamApiService } from '../../services/exam-api.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StudentApiService } from '../../../student/services/student-api.service';
import { Course } from '../../interfaces/exam';
import { ChoicesModalComponent } from '../choices-modal/choices-modal.component';
declare var bootstrap: any;

@Component({
  selector: 'app-add-exam',
  imports: [ReactiveFormsModule, ChoicesModalComponent],
  templateUrl: './add-exam.component.html',
  styleUrl: './add-exam.component.scss',
})
export class AddExamComponent implements AfterViewInit, OnInit {
  private readonly _examApi = inject(ExamApiService);
  private readonly _studentApi = inject(StudentApiService);
  @ViewChild('modalA') modalARef!: ElementRef;
  @ViewChild('modalBComp') modalBComp!: ChoicesModalComponent;
  modalInstance: any;
  cources: Course[] = [];
  examId!: number;
  addExamForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    instructor: new FormControl(localStorage.getItem('userId'), [
      Validators.required,
    ]),
    start_date: new FormControl('', [Validators.required]),
    end_date: new FormControl('', [Validators.required]),
    course: new FormControl('', [Validators.required]),
    exam_score: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    this.getCources();
  }

  modalAInstance: any;

  ngAfterViewInit() {
    this.modalAInstance = new bootstrap.Modal(this.modalARef.nativeElement);
  }
  open() {
    this.modalAInstance.show();
  }

  closeAndOpenB() {
    this.modalAInstance.hide();
    // Wait for A to close, then show B
    setTimeout(() => {
      this.modalBComp.open();
    }, 300); // match Bootstrap fade transition
  }

  // Add Exam Logic

  getCources() {
    this._studentApi.getCourse().subscribe({
      next: (response) => {
        console.log('cources', response);
        this.cources = response.results;
      },
      error: (error) => {
        console.error('Error fetching courses:', error);
      },
    });
  }

  addExam() {
    this.closeAndOpenB();
    this._examApi.addExam(this.addExamForm.value).subscribe({
      next: (response) => {
        console.log('Exam added successfully:', response);
        this.examId = response.id;
        localStorage.setItem('ExamId', JSON.stringify(response.id));
        console.log('examId', this.examId);
        console.log('examId');
      },
      error: (error) => {
        console.error('Error adding exam:', error);
      },
    });
  }
}
