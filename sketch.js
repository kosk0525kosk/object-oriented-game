let player, ground;

function setup() {
    createCanvas(800, 600);

    player = new Player();
    ground = new Ground();
}

function draw(){ 
    // 背景: 白
    background(255);

    // 座標系の変換
    rectMode(CENTER);
    translate(width/2, height/2);
    scale(1, -1);

    // プレイヤー移動
    player.move();

    // 衝突判定
    player.crash(ground);

    // 描画
    // 外枠
    noFill();
    rect(0, 0, width, height);
    // 他
    ground.display();
    player.display();
}

function keyPressed() {
    player.keyPressed();
}