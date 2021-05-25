class StageObject {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.w = 0;
    this.h = 0;
  }

  // 左右の端のx座標，上下の端のy座標
  get leftX() { return this.x; }
  get rightX() { return this.x + this.w; }
  get topY() { return this.y + this.h; }
  get bottomY() { return this.y; }
}