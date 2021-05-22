let stageWidth, stageHeight;
let groundHeight;
let player;
let stage;

// インプットに対するオブジェクトの操作
// オブジェクト同士の処理
class GameManager {
    // 初期化
    initPlayer() {
        player = new Player();
    }
    
    initStage() {
        stage = new Stage1();
    }

    setStageWH() {
        groundHeight = height/8;
        stageHeight = height - groundHeight;
        stageWidth = width;
    }

    // 座標系の変換
    transformCanvas() {
        // rectの原点を中心に
        rectMode(CENTER);
        // キャンバスの原点
        translate(width/2, height - groundHeight);
        // y軸の正の方向が上方向となるようにする
        scale(1, -1); 
    }

    // 描画
    display() {
        // 背景・外枠
        fill(255);
        rect(0, height/2 - groundHeight, width, height);

        // ステージ
        for(let i = 0; i < stage.objs.length; i++) {
            stage.objs[i].display();
        }

        // プレイヤー
        player.display();
    }

    // 状態を更新
    updateStatus() {
        // プレイヤー
        // aと左矢印で左に移動
        if(keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
            player.walkLeft();
        }
        // dと右矢印で右に移動
        if(keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
            player.walkRight();
        }

        player.move();

        this.collision();
    }

    // 衝突判定
    collision() {
        // 
        for(let i = 0; i < stage.objs.length; i++) {
            if(this.isLanding(player, stage.objs[i])) {
                player.land(stage.objs[i]);
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
        // スペースかwでジャンプ
        if(keyCode === 32 || keyCode === 87 || keyCode == UP_ARROW) {
            player.jump();
        }
    }
}