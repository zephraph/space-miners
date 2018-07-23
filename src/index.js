import "phaser";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("logo", "assets/logo.png");
}

function create() {
  let graphics = this.add.graphics(0, 0);
  graphics.lineStyle(0xfff000, 1);
  graphics.fillCircle(0, 0, 360);
}
