import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Instructor } from './../../../interfaces/instractor';
import { InstractorService } from '../../../services/instractor.service';

@Component({
  selector: 'app-instractor-data',
  imports: [DatePipe],
  templateUrl: './instractor-data.component.html',
  styleUrl: './instractor-data.component.scss',
})
export class InstractorDataComponent {
  private readonly _InstractorService = inject(InstractorService);
  instractor!: Instructor;
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

  getStudentData(instractorId: string) {
    this._InstractorService.getIntsractor(instractorId).subscribe({
      next: (data) => {
        this.instractor = data;
        console.log(data);
      },
      error: (err) => {
        console.log('have an error here', err);
      },
    });
  }
}
