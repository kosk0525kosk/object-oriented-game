// ステージ上のオブジェクトのクラス
// 適宜継承して使う
class StageObj {
    constructor() {}
    display() {}

    // 左右の端のx座標，上下の端のy座標を計算
    updateEdgeXY() {
        this.leftX = this.x - this.w/2;
        this.rightX = this.x + this.w/2;
        this.topY = this.y + this.h/2;
        this.bottomY = this.y - this.h/2;
    }
}

// 地面のオブジェクト
class Ground extends StageObj {
    constructor() {
        super();
        this.h = height/8;
        this.x = 0;
        this.y = this.h/2 - height/2;
        this.w = width;

        this.updateEdgeXY();
    }
    
    display() {
        fill(200);
        rect(this.x, this.y, this.w, this.h);
    }
}