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
}

var cursors;

function create () {
    
    cursors = this.input.keyboard.createCursorKeys();
    
    this.add.image(0, 0, 'field').setOrigin(0, 0);
}

function update (){
}
