import { Component } from '@angular/core';
import { NgrxJsonApiService } from '../app/ngrx-json-api-master';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  queryResults;
  constructor(private jsonApiService: NgrxJsonApiService) {
    this.queryResults = this.jsonApiService
      .findMany({
        query: {
          type: 'User'
        }
      })
      .map(results => {
        console.log(results);
        return results.data;
      });
  }
}
