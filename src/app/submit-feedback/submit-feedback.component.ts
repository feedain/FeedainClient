import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-submit-feedback',
  templateUrl: './submit-feedback.component.html',
  styleUrls: ['./submit-feedback.component.css']
})
export class SubmitFeedbackComponent implements OnInit {
  feedback: Feedback;

  constructor(private feedbackService: FeedbackService) { }

  addFeedback(author: string, recipient: string, content: string): void {
    this.feedbackService.add({author, recipient, content}).subscribe(feedback => this.feedback = feedback);
  }

  getFeedback(): void {
    this.feedbackService.get().subscribe(feedback => this.feedback = feedback);
  }

  ngOnInit() {
    this.getFeedback();
  }
}
