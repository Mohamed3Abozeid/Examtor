import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl, InstractorEndPoints } from '../../core/environments/baseUrl';
import { Instructor, InstructorsApiRes } from './../interfaces/instractor';

@Injectable({
  providedIn: 'root',
})
export class InstractorService {
  private readonly _HttpClient = inject(HttpClient);

  constructor() {}

  getIntsractor(instractorId: string): Observable<InstructorsApiRes> {
    return this._HttpClient.get<InstructorsApiRes>(
      InstractorEndPoints.getInstractor + instractorId
    );
  }
  getAllInstractors(): Observable<InstructorsApiRes> {
    return this._HttpClient.get<InstructorsApiRes>(
      InstractorEndPoints.getInstractor
    );
  }
  deletInstractors(instractorId: number): Observable<Instructor> {
    return this._HttpClient.delete<Instructor>(
      InstractorEndPoints.deleteInstractor + instractorId
    );
  }
}
