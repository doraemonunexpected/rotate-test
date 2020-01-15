import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Widget, widgetArr} from './widget';

@Component({
  selector: 'app-rotate-page',
  templateUrl: './rotate-page.component.html',
  styleUrls: ['./rotate-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RotatePageComponent {
  widgets: Widget[] = widgetArr;

  getWidgetStyle(widget: Widget) {
    return {
      width: `${widget.width}px`,
      height: `${widget.height}px`
    };
  }

  constructor() {
  }

}
