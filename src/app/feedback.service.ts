import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedbacks: Feedback[] = [
    {author: 'test', recipient: 'test', content: 'test'}
  ];

  constructor() { }

  add(feedback: Feedback): Observable<Feedback> {
    this.feedbacks.push(feedback);
    return of(feedback);
  }

  get(): Observable<Feedback[]> {
    return of(this.feedbacks);
  }
}
