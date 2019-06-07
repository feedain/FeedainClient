import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SubmitWorkComponent } from "./submit-work.component";

describe("SubmitWorkComponent", () => {
  let component: SubmitWorkComponent;
  let fixture: ComponentFixture<SubmitWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
