class Stage1 extends Stage {
  constructor() {
    super();
    this.objs.push(new Ground(0, -gameManager.groundH));
    this.objs.push(new Block(200, 50));
  }
}