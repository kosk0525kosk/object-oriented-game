const gameManager = new GameManager();

function setup() {
  createCanvas(600, 400);
  gameManager.initGame();
}

function draw() {
  // 座標系の変換
  gameManager.transformCanvas();

  // データの処理
  gameManager.updateStatus();

  // 描画
  gameManager.display();
}

function keyPressed() {
  gameManager.keyPressed();
}