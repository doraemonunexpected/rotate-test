import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../rotate-page/widget';

@Component({
  selector: 'app-rotated-wrapper',
  templateUrl: './rotated-wrapper.component.html',
  styleUrls: ['./rotated-wrapper.component.less']
})
export class RotatedWrapperComponent implements OnInit {
  @Input() widget: Widget;

  diff: number;

  getWrapperStyle() {
    return {
      width: `${this.widget.width}px`,
      height: `${this.widget.height}px`
    };
  }

  getStyle() {
    return {
      top: `${this.diff / 2}px`,
      left: `${-this.diff / 2}px`,
      width: `${this.widget.height}px`,
      height: `${this.widget.width}px`
    };
  }

  ngOnInit(): void {
    this.diff = Math.abs(this.widget.height - this.widget.width);
  }

}
