import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const feedbacks = [
      { author: 'test', recipient: 'test', content: 'test' }
    ];
    return { feedbacks };
  }
}
