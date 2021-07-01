class Stage1 extends Stage {
  constructor() {
    super();
    this.objs.push(new Ground(0, -gameManager.groundH));
    this.objs.push(new Block(200, 50, 30, 30));
    this.objs.push(new MoveBlock(300, 200, 50, 10, 30, 0));
    this.objs.push(new MoveBlock(150, 200, 50, 10, 30, 1));
    //this.objs.push(new Spike(50, 50, 10, 30));
  }
}