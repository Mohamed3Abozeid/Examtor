import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { StudentApiService } from '../../../student/services/student-api.service';
import {
  Allstudents,
  StudentApi,
} from './../../../student/interfaces/student-data';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  imports: [RouterLink],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss',
})
export class StudentListComponent implements OnInit, OnDestroy {
  private readonly _StudentApiService = inject(StudentApiService);
  sub!: Subscription;
  students!: StudentApi[];
  ngOnInit(): void {
    this.getAllstudents();
  }

  getAllstudents() {
    this.sub = this._StudentApiService.getAllStudent().subscribe({
      next: (data) => {
        this.students = data.results;
        console.log(data);

        console.log(this.students);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deletStudent(studentId: number) {
    this._StudentApiService.deletStudent(studentId).subscribe({
      next: (data) => {
        location.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
