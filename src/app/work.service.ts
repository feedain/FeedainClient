import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";

import { Work } from "./work";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjA0NTMwNTMsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYX"
      + "QiOjE1NjA0MTcwNTN9.YWYGsmiG-ul0ciGoUgmtAlvqMu75Xxk7TAErE9LlUEk"
  })
};

@Injectable({
  providedIn: "root"
})
export class WorkService {
  // workUrl = "api/works";
  workUrl = "http://145.93.92.181:4000/channels/mychannel/chaincodes/mycc";

  constructor(private http: HttpClient) { }

  getWork(): Observable<string> {
    // return this.http.get<string>(this.workUrl + "/0");
    return this.http.get<string>(this.workUrl + "?peer=peer0.org1.example.com&fcn=query&args=[\"a\"]", httpOptions);
  }

  addWork(work: Work): Observable<Work> {
    work.published = new Date();
    return this.http.post<Work>(this.workUrl, work, httpOptions);
  }
}
