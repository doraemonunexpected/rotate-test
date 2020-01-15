import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-normal-table',
  templateUrl: './normal-table.component.html',
  styleUrls: ['./normal-table.component.less']
})
export class NormalTableComponent implements OnInit {
  data: number[][] = [];

  constructor() {
    for (let row = 1; row <= 23; ++row) {
      const arr = [];
      for (let col = 1; col < 5; ++col) {
        arr.push(row * 10 + col);
      }
      this.data.push(arr);
    }
  }

  ngOnInit() {
  }

}
