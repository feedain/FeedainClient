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
  workUrl = "api/work";

  constructor(private http: HttpClient) { }

  addWork(work: Work): Observable<Work> {
    return this.http.post<Work>(this.workUrl, work, httpOptions);
  }
}
