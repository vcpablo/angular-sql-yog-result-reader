import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  @Input() public results: Array<any> = [];
  constructor() {
  }

  ngOnInit() {
    console.log(this.results);
  }

}
