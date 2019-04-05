import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Feedback } from './feedback';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private feedbackUrl = 'api/feedback';
  feedbacks: Feedback[] = [
    { recipient: 'test3' }
  ];

  constructor(private http: HttpClient) { }

  getFeedbacks(): Feedback[] {
    return this.feedbacks;
    // this.http.get<Feedback[]>(this.feedbackUrl);
  }

  add(feedback: Feedback): void {
    this.feedbacks.push(feedback);
  }
}
