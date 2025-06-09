import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminNavBarComponent } from '../../components/ui/admin-nav-bar/admin-nav-bar.component';
import { StudentListComponent } from '../../../shared/components/student-list/student-list.component';

@Component({
  selector: 'app-admin-layout',
  imports: [AdminNavBarComponent, RouterOutlet, StudentListComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent {}
