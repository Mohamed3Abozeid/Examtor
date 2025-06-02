import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstractorEndPoints } from '../../core/environments/baseUrl';
import { Instructor } from './../interfaces/instractor';

@Injectable({
  providedIn: 'root',
})
export class InstractorService {
  private readonly _HttpClient = inject(HttpClient);

  constructor() {}

  getIntsractor(instractorId: string): Observable<Instructor> {
    return this._HttpClient.get<Instructor>(
      InstractorEndPoints.getInstractor + instractorId
    );
  }
}
