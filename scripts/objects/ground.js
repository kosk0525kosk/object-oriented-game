class Ground extends StageObject {
  constructor(x, y) {
    super(x, y);
    this.w = gameManager.groundW;
    this.h = gameManager.groundH;
  }

  display() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }
}