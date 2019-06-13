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
  // work: Work;

  constructor(private workService: WorkService) { }

  ngOnInit() {
  }

  submitWork() {
    this.workService.addWork({content: this.workContent.value} as Work)
      .subscribe(/* work => this.getSubmittedWork() */);
  }

  // getSubmittedWork() {
  //   this.workService.getWork().subscribe(work => this.work = work);
  // }
}
