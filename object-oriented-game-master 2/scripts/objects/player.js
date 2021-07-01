class Player extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.w = 50; // 幅
    this.h = this.w/3*4; // 高さ
    this.dx = 0; // x方向の速さ
    this.dy = 0; // y方向の速さ
    this.g = 1; // 重力加速度
  }

  // 描画
  display() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }

  // 移動
  move() {
    // aと左矢印で左に移動
    if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
      this.moveLeft();
    }
    // dと右矢印で右に移動
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
      this.moveRight();
    }

    // y座標
    this.dy -= this.g;
    this.y += this.dy;
  }

  // 右移動
  moveRight() {
    this.x += 2;
  }

  // 左移動
  moveLeft() {
    this.x -= 2;
  }

  // ジャンプ
  jump() {
    this.dy += 20;
  }

  // p5jsに認識させるkeyPressedメソッド
  keyPressed() {
    // スペースかwでジャンプ
    if (keyCode === 32 || keyCode === 87 || keyCode == UP_ARROW) {
      this.jump();
    }
  }
}