import { Injectable } from '@angular/core';

import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedback: Feedback;

  constructor() { }

  add(feedback: Feedback): void {
    this.feedback = feedback;
  }

  get(): Feedback {
    return this.feedback;
  }
}
