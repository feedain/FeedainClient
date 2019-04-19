import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../feedback';
import { Response } from '../response';
import { UserBase } from '../user-base';

@Component({
  selector: 'app-submit-feedback',
  templateUrl: './submit-feedback.component.html',
  styleUrls: ['./submit-feedback.component.css']
})
export class SubmitFeedbackComponent implements OnInit {
  response: Response;
  feedbacks: Feedback[];

  constructor(private feedbackService: FeedbackService) { }

  addFeedback(author: string, recipient: string, content: string): void {
    const feedbackGiver: UserBase = {
      username: author
    };
    const feedbackTaker: UserBase = {
      username: recipient
    };
    this.feedbackService.add({feedbackGiver, feedbackTaker, feedbackText: content} as Feedback)
      .subscribe(response => {
          this.response = response;
          this.feedbacks.push(response.entity as Feedback);
        });
  }

  getFeedback(): void {
    this.feedbackService.get().subscribe(response => {
      this.response = response;
      this.feedbacks = response.entity as Feedback[];
    });
  }

  ngOnInit() {
    this.getFeedback();
  }
}
