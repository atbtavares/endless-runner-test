"use strict"; 

var GameState = function(game) {};

GameState.prototype.preload = function() {

   game.load.image('field', '../assets/field2.png');
   game.load.spritesheet('player', '../assets/player_133x109.png',133,109,3);
   game.load.spritesheet('enemy', '../assets/player_133x109.png',133,109,3);

}

var field;
var player;
var cursors;
var enemy;
var livingEnemies = [];


GameState.prototype.create = function() {

   game.physics.startSystem(Phaser.Physics.ARCADE);

   game.world.setBounds(0, 0, 1200, 600);


// The scrolling field background
   field = game.add.tileSprite(0, 0, 1200, 600, 'field');
   //game.add.sprite(0, 0, 'field');

   player = game.add.sprite(600, 500, 'player');

   game.physics.enable(player, Phaser.Physics.ARCADE);

   player.anchor.setTo(0.5, 0.5);
   player.scale.setTo(0.7, 0.7);
   player.animations.add('walk',[0,1,0,2],3,true);
   player.animations.play('walk');
   player.body.enabled = true;
   player.body.collideWorldBounds = true;
   game.camera.follow(player);


   enemy = game.add.sprite(game.world.randomX, 90, 'enemy');

   game.physics.enable(enemy, Phaser.Physics.ARCADE);

   enemy.anchor.setTo(0.5, 0.5);
   enemy.scale.setTo(0.7, 0.7);
   enemy.animations.add('walk',[0,1,0,2],3,true);
   enemy.animations.play('walk');
   enemy.body.enabled = true;
   enemy.angle = 180;

   // And some controls to play the game with
   cursors = game.input.keyboard.createCursorKeys();
   //fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}


GameState.prototype.update = function() {

//  Scroll the background
   field.tilePosition.y += 3;

   game.physics.arcade.collide(player,enemy);

   enemy.body.velocity.y = 300;

   if (enemy.y > 600)
   {
      enemy.x = game.world.randomX;
      enemy.y =  -200;
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

