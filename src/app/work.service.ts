import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";

import { Work } from "./work";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class WorkService {
  workUrl = "api/works";

  constructor(private http: HttpClient) { }

  getWork(): Observable<Work> {
    return this.http.get<Work>(this.workUrl + "/0");
  }

  addWork(work: Work): Observable<Work> {
    work.published = new Date();
    return this.http.post<Work>(this.workUrl, work, httpOptions);
  }
}
