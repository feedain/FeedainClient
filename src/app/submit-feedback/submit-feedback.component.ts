import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-submit-feedback',
  templateUrl: './submit-feedback.component.html',
  styleUrls: ['./submit-feedback.component.css']
})
export class SubmitFeedbackComponent implements OnInit {
  currentFeedback: Feedback = {
    recipient: 'test'
  };
  feedbacks: Feedback[];

  constructor(private feedbackService: FeedbackService) { }

  getFeedbacks(): void {
    this.feedbacks = this.feedbackService.getFeedbacks();
  }

  add(): void {
    this.feedbackService.add(this.currentFeedback);
  }

  ngOnInit() {
    this.getFeedbacks();
  }

}
