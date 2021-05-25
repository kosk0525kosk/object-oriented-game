class Block extends StageObject {
  constructor(x, y) {
    super(x, y);
    this.w = 50;
    this.h = 50;
  }

  display() {
    fill(200);
    rect(this.x, this.y, this.w, this.h);
  }
}