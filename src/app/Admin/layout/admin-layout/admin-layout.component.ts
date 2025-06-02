import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminNavBarComponent } from '../../components/ui/admin-nav-bar/admin-nav-bar.component';

@Component({
  selector: 'app-admin-layout',
  imports: [AdminNavBarComponent, RouterOutlet],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent {}
