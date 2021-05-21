// ステージ上のオブジェクトのクラス
// 適宜継承して使う
class StageObj {
    constructor() {}
    display() {}

    // 左右の端のx座標，上下の端のy座標
    get leftX() {
        return this.x - this.w/2;
    }
    get rightX() {
        return this.x + this.w/2;
    }
    get topY() {
        return this.y + this.h/2;
    }
    get bottomY() {
        return this.y - this.h/2;
    }
}

// 地面のオブジェクト
class Ground extends StageObj {
    init() {
        this.h = height/8;
        this.x = 0;
        this.y = this.h/2 - height/2;
        this.w = width;
    }
    
    display() {
        fill(200);
        rect(this.x, this.y, this.w, this.h);
    }
}