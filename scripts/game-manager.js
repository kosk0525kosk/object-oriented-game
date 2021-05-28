class GameManager {
  // ゲッター
  // 例えば get a() {return b} と設定すると this.a で b が帰ってくるようになる
  get groundW() { return width; }
  get groundH() { return height / 8; }
  get stageH() { return height - this.groundH; }
  get stageW() { return width; }

  // 初期化
  initGame() {
    this.player = new Player(0, 0);
    this.stage = new Stage1();
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
    // ステージ
    this.stage.display();

    // プレイヤー
    this.player.display();
  }

  // 状態を更新
  updateStatus() {
    // プレイヤー
    this.player.move();

    GameObject.collision(this.player, this.stage);
  }

  // 衝突判定
  collision() {
    // 
    for (let i = 0; i < this.stage.objs.length; i++) {
      if (GameObject.isLanding(this.player, this.stage.objs[i])) {
        this.player.land(this.stage.objs[i]);
      }
    }
  }

  // p5jsに認識させるkeyPressedメソッド
  keyPressed() {
    this.player.keyPressed();
  }
}