class Stage {
  constructor() {
    this.objs = new Array();
  }

  display() {
    // 背景・外枠
    background(255);
    noFill();
    rect(0, -gameManager.groundH, width, height);

    for(let i = 0; i < this.objs.length; i++) {
      this.objs[i].display();
    }
  }
}