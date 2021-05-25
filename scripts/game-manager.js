// インプットに対するオブジェクトの操作
// オブジェクト同士の処理
class GameManager {
  get groundW() { return width; }
  get groundH() { return height / 8; }
  get stageH() { return height - height/8; }
  get stageW() { return width; }

  // 初期化
  createPlayer() {
    return new Player(0, 0);
  }

  createStage() {
    return new Stage1();
  }

  initGame() {
    this.player = this.createPlayer();
    this.stage = this.createStage();
  }

  // 座標系の変換
  transformCanvas() {
    // キャンバスの原点
    translate(0, height - this.groundH);
    // y軸の正の方向が上方向となるようにする
    scale(1, -1);
  }

  // 描画
  display() {
    // 背景・外枠
    background(255);
    noFill();
    rect(0, -this.groundH, width, height);

    // ステージ
    for (let i = 0; i < this.stage.objs.length; i++) {
      this.stage.objs[i].display();
    }

    // プレイヤー
    this.player.display();
  }

  // 状態を更新
  updateStatus() {
    // プレイヤー
    this.player.move();

    this.collision();
  }

  // 衝突判定
  collision() {
    // 
    for (let i = 0; i < this.stage.objs.length; i++) {
      if (this.isLanding(this.player, this.stage.objs[i])) {
        this.player.land(this.stage.objs[i]);
      }
    }
  }

  // 着地判定
  // aがbに着地しているときtrue
  isLanding(a, b) {
    return (
      (
        (a.leftX > b.leftX && a.leftX < b.rightX)
        || (a.rightX > b.leftX && a.rightX < b.rightX)
      )
      && (a.bottomY <= b.topY)
    );
  }

  // p5jsに認識させるkeyPressedメソッド
  keyPressed() {
    this.player.keyPressed();
  }
}