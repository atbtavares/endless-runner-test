"use strict"; 

var GameState = function(game) {};

GameState.prototype.preload = function() {

   game.load.image('field', '../assets/field2.png');
   game.load.image('player', '../assets/itali.png');
   game.load.image('enemy1', '../assets/schoolbus.png');

}

var field;
var player;
var cursors;
var enemies;
var enemy1;
var livingEnemies = [];


GameState.prototype.create = function() {

   game.physics.startSystem(Phaser.Physics.ARCADE);

   game.world.setBounds(0, 0, 1200, 600);
   //game.add.sprite(0, 0, 'field');


// The scrolling field background
   field = game.add.tileSprite(0, 0, 1200, 600, 'field');

   player = game.add.sprite(600, 500, 'player');
   player.anchor.setTo(0.5, 0.5);
   player.angle = -90;
   game.camera.follow(player);
   game.physics.enable(player, Phaser.Physics.ARCADE);

   //  The baddies!
   enemies = game.add.group();
   enemies.enableBody = true;
   enemies.physicsBodyType = Phaser.Physics.ARCADE;
   enemy1= enemies.create(game.world.randomX, 90, 'enemy1');
   enemy1.anchor.setTo(0.5, 0.5);
   enemy1.body.moves = true;
   enemy1.angle = 90;

   // And some controls to play the game with
   cursors = game.input.keyboard.createCursorKeys();
   //fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}


GameState.prototype.update = function() {

//  Scroll the background
   field.tilePosition.y += 3;

   if (enemy1.alive)
   {
      enemy1.body.velocity.y += 6;
   }

   if (player.alive)
   {
//    Reset the player, then check for movement keys
      player.body.velocity.setTo(0, 0);

      if (cursors.left.isDown) {
	player.x -=4;
      }
      else if (cursors.right.isDown) {
	player.x +=4;
      }

      if (cursors.up.isDown)
      {
        player.y -= 4;
      }
      else if (cursors.down.isDown)
      {
        player.y += 4;
      }
//  Firing?
/*
      if (fireButton.isDown) {
        fireBullet();
      }

      if (game.time.now > firingTimer) {
        enemyFires();
      }

//  Run collision
      game.physics.arcade.overlap(bullets, enemies, collisionHandler, null, this);
      game.physics.arcade.overlap(enemyBullets, player, enemyHitsPlayer, null, this);
*/
  }
}

function render() {
    game.debug.cameraInfo(game.camera, 280, 32);
    game.debug.spriteCoords(player, 32, 32);
}

