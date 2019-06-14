import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";

import { Work } from "./work";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
// tslint:disable-next-line: max-line-length
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjA1MzYwOTgsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1NjA1MDAwOTh9.EfUOnudA-bf2UElU94FWoawLIfkoxbWD36ta-8g3wIU"
  })
};

@Injectable({
  providedIn: "root"
})
export class WorkService {
  // workUrl = "api/works";
  workUrl = "http://145.93.92.252:4000/channels/mychannel/chaincodes/mycc";

  constructor(private http: HttpClient) { }

  // TODO: add work not found message
  getWork(id: number): Observable<Work> {
    return this.http.get<Work>(this.workUrl + `?peer=peer0.org1.example.com&fcn=query&args=[\"${id}\"]`, httpOptions);
  }

  addWork(work: Work): Observable<Work> {
    work.published = new Date();
    return this.http.post<Work>(this.workUrl, work, httpOptions);
  }

  submitFeedback(work: Work): Observable<any> {
    return this.http.put<Work>(this.workUrl, work, httpOptions);
  }
}
