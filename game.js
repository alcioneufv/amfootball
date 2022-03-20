var config = {
  type: Phaser.AUTO,   parent: 'phaser-example',
  width: 1024,
  height: 494,
  physics: {  default: 'arcade',   arcade: {
      debug: false,       gravity: { y: 0 }
    }
  },
  scene: {  preload: preload,   create: create, update: update  } 
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image('field', 'assets/field.png');
  this.load.spritesheet('PA', 'assets/playerA.png', { frameWidth: 90, frameHeight: 90 });
}

var cursors;
var meio = (494 - (90/2))/2

function create () {
    
    cursors = this.input.keyboard.createCursorKeys();
    
    this.add.image(0, 0, 'field').setOrigin(0, 0);
  
    pA = this.physics.add.sprite(30, meio, 'PA').setScale(0.5,0.5).setOrigin(0, 0);
    pA.setCollideWorldBounds(true);
}

function update (){
}
