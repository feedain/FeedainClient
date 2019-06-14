import { Component, OnInit } from "@angular/core";

import { Work } from "../work";
import { WorkService } from "../work.service";

@Component({
  selector: "app-give-feedback",
  templateUrl: "./give-feedback.component.html",
  styleUrls: ["./give-feedback.component.css"]
})
export class GiveFeedbackComponent implements OnInit {
  work: Work;
  workId = 0;

  constructor(private workService: WorkService) { }

  ngOnInit() {
    this.getWork();
  }

  getWork() {
    this.workService.getWork(this.workId).subscribe(work => this.work = work);
    this.workId++;
  }
}
