import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppComponent } from "./app.component";
import { InMemoryDataService } from "./in-memory-data.service";
import { GiveFeedbackComponent } from "./give-feedback/give-feedback.component";
import { SubmitWorkComponent } from "./submit-work/submit-work.component";
import { CheckSubmissionComponent } from "./check-submission/check-submission.component";

const appRoutes: Routes = [
  { path: "giveFeedback", component: GiveFeedbackComponent },
  { path: "submitWork", component: SubmitWorkComponent },
  { path: "checkSubmission", component: CheckSubmissionComponent },
  { path: "",
    redirectTo: "/giveFeedback",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GiveFeedbackComponent,
    SubmitWorkComponent,
    CheckSubmissionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
