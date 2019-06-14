import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

import { WorkService } from "../work.service";
import { Work } from "../work";

@Component({
  selector: "app-submit-work",
  templateUrl: "./submit-work.component.html",
  styleUrls: ["./submit-work.component.css"]
})
export class SubmitWorkComponent implements OnInit {
  workContent = new FormControl("");
  test: string;

  constructor(private workService: WorkService) { }

  ngOnInit() {
  }

  submitWork() {
    this.workService.addWork({published: new Date(), content: this.workContent.value, feedback: []} as Work)
      .subscribe();
  }
}
