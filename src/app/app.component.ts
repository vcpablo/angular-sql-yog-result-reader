import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public results: Array<any> = [];

  setOutput(results) {
    this.results = results;
  }

  clear() {
    this.results = [];
  }
}
