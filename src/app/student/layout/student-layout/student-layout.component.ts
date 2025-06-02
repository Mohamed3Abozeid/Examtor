import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { StudentNavComponent } from '../../components/ui/student-nav/student-nav.component';

@Component({
  selector: 'app-student-layout',
  imports: [StudentNavComponent, RouterOutlet],
  templateUrl: './student-layout.component.html',
  styleUrl: './student-layout.component.scss',
})
export class StudentLayoutComponent {}
