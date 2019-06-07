import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-submit-work',
  templateUrl: './submit-work.component.html',
  styleUrls: ['./submit-work.component.css']
})
export class SubmitWorkComponent implements OnInit {
  workContent = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
