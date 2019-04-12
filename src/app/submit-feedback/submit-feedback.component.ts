import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-submit-feedback',
  templateUrl: './submit-feedback.component.html',
  styleUrls: ['./submit-feedback.component.css']
})
export class SubmitFeedbackComponent implements OnInit {
  feedbacks: Feedback[];

  constructor(private feedbackService: FeedbackService) { }

  addFeedback(author: string, recipient: string, content: string): void {
    this.feedbackService.add({author, recipient, content} as Feedback)
      .subscribe(feedback => {
          this.feedbacks.push(feedback);
        });
  }

  getFeedback(): void {
    this.feedbackService.get().subscribe(feedbacks => this.feedbacks = feedbacks);
  }

  ngOnInit() {
    this.getFeedback();
  }
}
