import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Feedback } from './feedback';
import { Response } from './response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private serverAddress = 'http://localhost:8090';
  private feedbackPath = '/feedback';
  private allFeedbacksPathSuffix = '/all';

  constructor(private http: HttpClient) { }

  add(feedback: Feedback): Observable<Feedback> {
    const addFeedbackUrl = this.serverAddress + this.feedbackPath;
    return this.http.post<Feedback>(addFeedbackUrl, feedback, httpOptions);
  }

  get(): Observable<Response> {
    const allFeedbacksUrl = this.serverAddress + this.feedbackPath + this.allFeedbacksPathSuffix;
    return this.http.get<Response>(allFeedbacksUrl);
  }
}
