class GameObject {
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

  // objへの着地
  land(obj) {
    this.dy = 0;
    this.y = obj.topY;
  }

  static collision(obj, stage) {
    for (let i = 0; i < stage.objs.length; i++) {
      if (GameObject.isLanding(obj, stage.objs[i])) {
        obj.land(stage.objs[i]);
      }
    }
  }

  // 着地判定
  // aがbに着地しているときtrue
  static isLanding(a, b) {
    return (
      (
        (a.leftX > b.leftX && a.leftX < b.rightX)
        || (a.rightX > b.leftX && a.rightX < b.rightX)
      )
      && (a.bottomY <= b.topY)
    );
  }
}