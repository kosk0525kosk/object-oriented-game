class Player {
    constructor() {
        this.x = 0; // x座標
        this.y = 0; // y座標
        this.w = 50; // 幅
        this.h = this.w/3*4; // 高さ
        this.dx = 0; // x方向の速さ
        this.dy = 0; // y方向の速さ
        this.g = 1; // 重力加速度

        // 端の座標
        this.updateEdgeXY();
    }

    // 描画
    display() {
        fill(255);
        rect(this.x, this.y, this.w, this.h);
    }

    // 移動
    move() {
        // x座標
        if(keyIsDown(65)) { // aで左方向に移動
            this.x -= 2;
        }
        if(keyIsDown(68)) { // dで右方向に移動
            this.x += 2;
        }

        // y座標
        this.dy -= this.g;
        this.y += this.dy;

        // 端の座標を更新
        this.updateEdgeXY();
    }

    keyPressed() {
        // スペースかwでジャンプ
        if(keyCode === 32 || keyCode === 87) {
            this.dy += 20;
        }
    }

    // 衝突判定
    // 引数に判定するオブジェクトを渡す
    crash(obj) {
        // stageObj以外を弾く
        if(!obj instanceof StageObj) { return; }

        // x座標が重なっているとき
        if(
            (this.leftX > obj.leftX && this.leftX < obj.rightX) ||
            (this.rightX > obj.leftX && this.rightX < obj.rightX)
        ) {
            // 下端
            if(this.bottomY <= obj.topY) {
                this.dy = 0;
                this.y = obj.topY + this.h/2;
            }
        }
    }

    // 左右の端のx座標，上下の端のy座標を計算
    updateEdgeXY() {
        this.leftX = this.x - this.w/2;
        this.rightX = this.x + this.w/2;
        this.topY = this.y + this.h/2;
        this.bottomY = this.y - this.h/2;
    }
}