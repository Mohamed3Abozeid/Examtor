import { Component, inject, OnInit } from '@angular/core';
import { StudentApiService } from '../../../services/student-api.service';
import { Course, Department, Level } from '../../../interfaces/student-data';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  imports: [ReactiveFormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss',
})
export class AddStudentComponent implements OnInit {
  private readonly _studentApis = inject(StudentApiService);
  private readonly _router = inject(Router);
  departments: Department[] = [];
  levels: Level[] = [];
  courses: Course[] = [];
  isLoading: boolean = false;
  studentDataError: string = '';

  addStudentForm: FormGroup = new FormGroup({
    // Required Fields
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    first_name: new FormControl('', Validators.required),
    second_name: new FormControl('', Validators.required),
    gender: new FormControl('m', Validators.required),
    birth_date: new FormControl('', Validators.required),
    user_type: new FormControl(2, Validators.required),
    department: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    courses: new FormControl([], Validators.required),

    // Optional Fields
    third_name: new FormControl(''),
    fourth_name: new FormControl(''),
    last_name: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    is_active: new FormControl(true),
    is_staff: new FormControl(false),
    is_superuser: new FormControl(true),
  });

  ngOnInit(): void {
    this.getDepartments();
    this.getLevels();
    this.getCourse();
  }

  getDepartments() {
    this._studentApis.getDepartments().subscribe({
      next: (data) => {
        this.departments = data.results;
        console.log(data);
      },
      error: (error) => {
        console.error('Error fetching departments:', error);
      },
    });
  }

  getCourse() {
    this._studentApis.getCourse().subscribe({
      next: (data) => {
        this.courses = data.results;
        console.log(data);
      },
      error: (error) => {
        console.error('Error fetching cources:', error);
      },
    });
  }
  getLevels() {
    this._studentApis.getLevels().subscribe({
      next: (data) => {
        this.levels = data.results;
        console.log(data);
      },
      error: (error) => {
        console.error('Error fetching levels:', error);
      },
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.studentDataError = '';
    this._studentApis.addStudent(this.addStudentForm.value).subscribe({
      next: (data) => {
        this.isLoading = false;
        console.log('Student added successfully:', data);
        this._router.navigate(['/admin/student']);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error adding student:', error);
        this.studentDataError = 'Invalid Data';
      },
    });
  }

  onCourseCheckboxChange(event: any, courseId: number) {
    const courses = this.addStudentForm.get('courses');
    if (!courses) return;
    let selectedCourses = courses.value || [];
    if (event.target.checked) {
      if (!selectedCourses.includes(courseId)) {
        selectedCourses.push(courseId);
      }
    } else {
      selectedCourses = selectedCourses.filter((id: number) => id !== courseId);
    }
    courses.setValue(selectedCourses);
    courses.markAsDirty();
  }
}
