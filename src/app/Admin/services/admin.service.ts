import { inject, Injectable } from '@angular/core';
import { Admin } from '../interfaces/admin';
import { AdminEndPoints } from '../../core/environments/baseUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private readonly _HttpClient = inject(HttpClient);

  constructor() {}

  getAdmin(AdminId: string): Observable<Admin> {
    return this._HttpClient.get<Admin>(AdminEndPoints.getAdmin + AdminId);
  }
}
