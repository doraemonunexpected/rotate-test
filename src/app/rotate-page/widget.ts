export class Widget {
  constructor(
    public type: 'normal' | 'rotated',
    public width: number,   // 像素
    public height: number   // 像素
  ) {
  }
}

export const widgetArr: Widget[] = [
  new Widget('rotated', 400, 500),
  new Widget('normal', 400, 200)
];
