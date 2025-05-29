import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { authEndPoints, baseUrl } from '../environments/baseUrl';
import { loginApiRes, loginUserData } from '../interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _HttpClient = inject(HttpClient);
  // constructor() { }

  loginHandle(userData: loginUserData): Observable<loginApiRes> {
    return this._HttpClient.post<loginApiRes>(authEndPoints.login, userData);
  }
}
