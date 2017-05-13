"use strict"; 

var StartState = function(game) {};

StartState.prototype.preload = function() {

   game.load.image('field', '../assets/field2.png');
   //game.load.spritesheet('player', '../assets/player_133x109.png',133,109,3);
   game.load.spritesheet('player', '../assets/sprite.png',150,150,10);

}

var player;
var cursors;
var introText;
var enterKey;

StartState.prototype.create = function() {

   game.physics.startSystem(Phaser.Physics.ARCADE);

   game.world.setBounds(0, 0, 1200, 600);

   field = game.add.tileSprite(0, 0, 1200, 600, 'field');
   //game.add.sprite(0, 0, 'field');

   player = game.add.sprite(600, 500, 'player');
   player.anchor.setTo(0.5, 0.5);
   player.scale.setTo(0.7, 0.7);
   player.animations.add('run',[0,1,2,3,4,5,6,7,8,9],10,true);
   player.animations.play('run');
   game.camera.follow(player);

   // And some controls to play the game with
   cursors = game.input.keyboard.createCursorKeys();
   enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

   scoreText = game.add.text(32, 550, '0 m', { font: "30px Arial", fill: "#ffffff", align: "left" });
   scoreText.fixedToCamera = true;
   introText = game.add.text(game.world.centerX,game.world.centerY,'aperte "Enter" para jogar', { font: "40px Arial", fill: "#ffffff", align: "center" });
   introText.anchor.setTo(0.5, 0.5);

}


StartState.prototype.update = function() {

//  Scroll the background
   field.tilePosition.y += 3;
   if (enterKey.isDown)
   {
       this.game.state.start('game');
   }
}

function render() {
    game.debug.cameraInfo(game.camera, 280, 32);
    game.debug.spriteCoords(player, 32, 32);
}

