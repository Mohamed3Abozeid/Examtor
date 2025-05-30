import { Component } from '@angular/core';
import { StudentNavComponent } from '../../components/ui/student-nav/student-nav.component';
import { StudentDataComponent } from '../../components/ui/student-data/student-data.component';

@Component({
  selector: 'app-student-layout',
  imports: [StudentNavComponent, StudentDataComponent],
  templateUrl: './student-layout.component.html',
  styleUrl: './student-layout.component.scss',
})
export class StudentLayoutComponent {}
