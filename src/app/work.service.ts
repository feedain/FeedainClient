import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";

import { Work } from "./work";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjA1MzMyMzYsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYX"
    + "QiOjE1NjA0OTcyMzZ9.jBpJQ5NB9GeeqG7odAzWFe6LubYdswp7ugrWCPHh1mg"
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
}
