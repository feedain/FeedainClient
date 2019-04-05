import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-submit-feedback',
  templateUrl: './submit-feedback.component.html',
  styleUrls: ['./submit-feedback.component.css']
})
export class SubmitFeedbackComponent implements OnInit {
  feedback: Feedback;

  constructor() { }

  addRecipient(author: string, recipient: string, content: string): void {
    this.feedback = { author, recipient, content };
  }

  ngOnInit() { }

}
