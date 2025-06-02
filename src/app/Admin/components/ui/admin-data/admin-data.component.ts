import { Component, inject } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Admin } from '../../../interfaces/admin';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-data',
  imports: [DatePipe],
  templateUrl: './admin-data.component.html',
  styleUrl: './admin-data.component.scss',
})
export class AdminDataComponent {
  private readonly _adminService = inject(AdminService);
  admin!: Admin;
  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const token = localStorage.getItem('token');
      if (token) {
        this.getAdminData(userId);
      } else {
        console.error('No token found in localStorage');
      }
    } else {
      console.error('No userId found in localStorage');
    }
  }

  getAdminData(adminId: string) {
    this._adminService.getAdmin(adminId).subscribe({
      next: (data) => {
        this.admin = data;
        console.log(data);
      },
      error: (err) => {
        console.log('have an error here', err);
      },
    });
  }
}
