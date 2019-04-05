import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedback: Feedback;

  constructor() { }

  add(feedback: Feedback): Observable<any> {
    this.feedback = feedback;
    return of(this.feedback);
  }

  get(): Observable<Feedback> {
    return of(this.feedback);
  }
}
