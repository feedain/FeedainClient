import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

import { Work } from "../work";
import { Feedback } from "../feedback";

@Component({
  selector: "app-check-submission",
  templateUrl: "./check-submission.component.html",
  styleUrls: ["./check-submission.component.css"]
})
export class CheckSubmissionComponent implements OnInit {
  keyContent = new FormControl("");
  work: Work = {
    id: 0,
    published: new Date(),
    content: "Donec at urna a sem finibus lacinia. Duis mollis pharetra sollicitudin. Maecenas maximus urna id vestibulum varius. Nulla id"
      + " ipsum feugiat, mattis ex vel, consequat arcu. Vivamus sit amet rhoncus sem. Nam non elit commodo, eleifend nisi id, finibus veli"
      + "t. Praesent condimentum semper velit, ut viverra nisl rhoncus at. Suspendisse luctus augue id libero pharetra dapibus. Mauris imp"
      + "erdiet semper urna eget dictum. Praesent vehicula nunc tortor, at mattis nulla tempor eget. Nulla blandit orci vitae nunc lacinia"
      + ", eget mollis urna posuere. Duis congue mauris dui, sed fermentum lacus fermentum vitae. Nunc eu fringilla eros. Sed semper eros "
      + "metus, porttitor facilisis quam laoreet sed. Praesent quis turpis id urna auctor laoreet. ",
    feedback: [
      {submitted: new Date(), content: "test"},
      {submitted: new Date(), content: "That's shit"}
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
