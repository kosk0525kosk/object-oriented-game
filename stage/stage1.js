class Stage1 {
    constructor() {
        this.ground = new Block(0, -groundHeight/2, stageWidth, groundHeight);

        this.objs = [this.ground];
    }
}