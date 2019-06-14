import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Work } from "./work";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const works = [
      {
        id: 0,
        published: new Date(),
// tslint:disable-next-line: max-line-length
        content: "Donec at urna a sem finibus lacinia. Duis mollis pharetra sollicitudin. Maecenas maximus urna id vestibulum varius. Nulla id"
// tslint:disable-next-line: max-line-length
          + " ipsum feugiat, mattis ex vel, consequat arcu. Vivamus sit amet rhoncus sem. Nam non elit commodo, eleifend nisi id, finibus veli"
// tslint:disable-next-line: max-line-length
          + "t. Praesent condimentum semper velit, ut viverra nisl rhoncus at. Suspendisse luctus augue id libero pharetra dapibus. Mauris imp"
// tslint:disable-next-line: max-line-length
          + "erdiet semper urna eget dictum. Praesent vehicula nunc tortor, at mattis nulla tempor eget. Nulla blandit orci vitae nunc lacinia"
// tslint:disable-next-line: max-line-length
          + ", eget mollis urna posuere. Duis congue mauris dui, sed fermentum lacus fermentum vitae. Nunc eu fringilla eros. Sed semper eros "
          + "metus, porttitor facilisis quam laoreet sed. Praesent quis turpis id urna auctor laoreet. ",
        feedback: [
          {submitted: new Date(), content: "test"},
          {submitted: new Date(), content: "test2"}
        ]
      },
      {
        id: 1,
        published: new Date(),
        content: "Test3",
        feedback: []
      }
    ];
    return {works};
  }

  genId(works: Work[]): number {
    return works.length > 0 ? Math.max(...works.map(work => work.id)) + 1 : 0;
  }
}
