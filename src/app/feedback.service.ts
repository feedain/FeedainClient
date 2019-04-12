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
  private feedbacksUrl = 'api/feedbacks';

  constructor(private http: HttpClient) { }

  add(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(this.feedbacksUrl, feedback, httpOptions);
  }

  get(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.feedbacksUrl);
  }
}
