// インプットに対するオブジェクトの操作
// オブジェクト同士の処理
class GameManager {
    // 初期化
    static initObjects(array) {
        for(let i = 0; i < array.length; i++) {
            array[i].init();
        }
    }

    // 描画
    static display() {
        // 背景・外枠
        fill(255);
        rect(0, 0, width, height);

        // 地面
        ground.display();

        // プレイヤー
        player.display();
    }

    // 状態を更新
    static updateStatus() {
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
    static collision() {
        player.crash(ground);
    }

    // p5jsに認識させるkeyPressedメソッド
    static keyPressed() {
        // スペースかwでジャンプ
        if(keyCode === 32 || keyCode === 87 || keyCode == UP_ARROW) {
            player.jump();
        }
    }
}