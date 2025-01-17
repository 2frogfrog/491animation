class NPC {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./npc.png"), 0,0, 32,32,4,0.2);
        this.speed = 50;
        this.x = 0;
        this.y = 0;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick,ctx,this.x,this.y);
    };
        
}