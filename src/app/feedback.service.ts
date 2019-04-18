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

  get(): Observable<Feedback[]> {
    const allFeedbacksUrl = this.serverAddress + this.feedbackPath + this.allFeedbacksPathSuffix;
    // this.http.get<Response>(allFeedbacksUrl)
    //   .subscribe(response => console.log('REST object: ' + response.responseText + '; ' + (response.entity as Feedback[])[0].));
    // return null;
    return this.http.get<Feedback[]>(allFeedbacksUrl);
  }
}
