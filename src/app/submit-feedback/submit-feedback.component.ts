import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../feedback';
import { Response } from '../response';

@Component({
  selector: 'app-submit-feedback',
  templateUrl: './submit-feedback.component.html',
  styleUrls: ['./submit-feedback.component.css']
})
export class SubmitFeedbackComponent implements OnInit {
  response: Response;

  constructor(private feedbackService: FeedbackService) { }

  // addFeedback(author: string, recipient: string, content: string): void {
  //   this.feedbackService.add({author, recipient, content} as Feedback)
  //     .subscribe(feedback => {
  //         this.feedbacks.push(feedback);
  //       });
  // }

  getFeedback(): void {
    this.feedbackService.get().subscribe(response => {
      this.response = response;
    });
  }

  ngOnInit() {
    this.getFeedback();
  }
}
