const player = new Player();
const ground = new Ground();

function setup() {
    createCanvas(800, 600);
    GameManager.initObjects([player, ground]);
}

function draw(){ 
    // 座標系の変換
    rectMode(CENTER);
    translate(width/2, height/2); // 原点をキャンバスの中心にする
    scale(1, -1); // y軸の正の方向が上方向となるようにする

    // データの処理
    GameManager.updateStatus();

    // 描画
    GameManager.display();
}

function keyPressed() {
    GameManager.keyPressed();
}