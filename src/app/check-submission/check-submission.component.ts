import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

import { Work } from "../work";
import { Feedback } from "../feedback";
import { WorkService } from "../work.service";

@Component({
  selector: "app-check-submission",
  templateUrl: "./check-submission.component.html",
  styleUrls: ["./check-submission.component.css"]
})
export class CheckSubmissionComponent implements OnInit {
  keyContent = new FormControl("");
  work: Work;

  constructor(private workService: WorkService) { }

  ngOnInit() {
  }

  getWork() {
    this.workService.getWork().subscribe(work => this.work = work);
  }
}
