import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Work } from "./work";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const works = [
    ];
    return {works};
  }

  genId(works: Work[]): number {
    return works.length > 0 ? Math.max(...works.map(work => work.id)) + 1 : 0;
  }
}
