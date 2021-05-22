// ステージ上のオブジェクトのクラス
// 適宜継承して使う
class StageObj {
    constructor(x = 0, y = 0, w = 0, h = 0) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    // 左右の端のx座標，上下の端のy座標
    get leftX() { return this.x - this.w/2; }
    get rightX() { return this.x + this.w/2; }
    get topY() { return this.y + this.h/2; }
    get bottomY() { return this.y - this.h/2; }

    display() {}
}

// 足場等
class Block extends StageObj {
    display() {
        fill(200);
        rect(this.x, this.y, this.w, this.h);
    }
}