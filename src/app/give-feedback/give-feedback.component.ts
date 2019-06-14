import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

import { Work } from "../work";
import { WorkService } from "../work.service";
import { Feedback } from "../feedback";

@Component({
  selector: "app-give-feedback",
  templateUrl: "./give-feedback.component.html",
  styleUrls: ["./give-feedback.component.css"]
})
export class GiveFeedbackComponent implements OnInit {
  feedbackContent = new FormControl("");
  work: Work;
  workId = 0;
  feedback: Feedback;

  constructor(private workService: WorkService) { }

  ngOnInit() {
    this.getWork();
  }

  getWork() {
    this.workService.getWork(this.workId).subscribe(work => this.work = work);
    this.workId++;
  }

  submitFeedback() {
    this.feedback = {
      submitted: new Date(),
      content: this.feedbackContent.value
    };
    this.work.feedback.push(this.feedback);
    this.workService.submitFeedback(this.work).subscribe();
  }
}
