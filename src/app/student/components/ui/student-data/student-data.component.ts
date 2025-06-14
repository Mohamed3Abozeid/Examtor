import { Component, inject, OnInit } from '@angular/core';
import { StudentApiService } from '../../../services/student-api.service';
import { StudentApi } from '../../../interfaces/student-data';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-data',
  imports: [DatePipe],
  templateUrl: './student-data.component.html',
  styleUrl: './student-data.component.scss',
})
export class StudentDataComponent implements OnInit {
  private readonly _StudentApiService = inject(StudentApiService);
  student!: StudentApi;
  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const token = localStorage.getItem('token');
      if (token) {
        this.getStudentData(userId);
      } else {
        console.error('No token found in localStorage');
      }
    } else {
      console.error('No userId found in localStorage');
    }
  }

  getStudentData(studentId: string) {
    this._StudentApiService.getStudent(studentId).subscribe({
      next: (data) => {
        this.student = data;
        console.log(data);
      },
      error: (err) => {
        console.log('have an error here', err);
      },
    });
  }
}
