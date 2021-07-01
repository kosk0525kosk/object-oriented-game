class Block extends GameObject {
  constructor(x, y, w, h) {
    super(x, y);
    this.w = w;
    this.h = h;
  }

  display() {
    fill(200);
    rect(this.x, this.y, this.w, this.h);
  }
}

class MoveBlock extends Block {
  constructor(x, y, moveW, moveH, limit, judge) {
    super(x, y);
    this.moveW = moveW;
    this.moveH = moveH;

    this.mx = x;
    this.my = y;

    //動く範囲
    this.limit = limit;

    //動く速さ
    this.step = 1;

    //x,yどちらに動くかの判定
    this.judge = judge;
  }

  display() {
    fill(100);
    rect(this.x, this.y, this.moveW, this.moveH);
    if(this.judge == 1) {
      this.moveX();
    } else {
      this.moveY();
    }
  }

  moveX() {
    if(this.x >= this.mx + this.limit || this.x <= this.mx - this.limit) {
      this.step = this.step * -1;
    }
    this.x += this.step;
  }

  moveY() {
    if(this.y >= this.my + this.limit || this.y <= this.my - this.limit) {
      this.step *= -1;
    }
    this.y += this.step;
  }
}

class Spike extends GameObject {
  constructor(x, y, rx, ry) {
    super();
    //とげの頂点
    this.x = x;
    this.y = y;

    //頂点からの差
    this.rx = rx;
    this.ry = ry;
  }

  display() {
    fill(200);
    triangle(this.x, this.y, this.x-this.rx, this.y-this.ry, this.x + this.rx, this.y + this.ry);
  }
}