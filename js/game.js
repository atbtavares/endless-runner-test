"use strict"; 

var GameState = function(game) {};

GameState.prototype.preload = function() {

   game.load.image('field', '../assets/field2.png');
   game.load.spritesheet('player', '../assets/sprite.png',150,150,10);
   game.load.spritesheet('enemy', '../assets/sprite.png',150,150,10);

}

var gameon = false;
var field;
var player;
var cursors;
var enemy;
var livingEnemies = [];
var score = 0;
var lives = 1;
var scoreText;
var escKey;

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
   player.animations.add('run',[0,1,2,3,4,5,6,7,8,9],10,true);
   player.animations.play('run');
   player.body.enabled = true;
   player.body.collideWorldBounds = true;
   game.camera.follow(player);


   enemy = game.add.sprite(game.world.randomX, 90, 'enemy');

   game.physics.enable(enemy, Phaser.Physics.ARCADE);

   enemy.anchor.setTo(0.5, 0.5);
   enemy.scale.setTo(0.7, 0.7);
   enemy.animations.add('run',[0,1,2,3,4,5,6,7,8,9],10,true);
   enemy.animations.play('run');
   enemy.body.enabled = true;
   enemy.angle = 180;

   // And some controls to play the game with
   cursors = game.input.keyboard.createCursorKeys();
   escKey = game.input.keyboard.addKey(Phaser.Keyboard.ESCAPE);
   //
   scoreText = game.add.text(32, 550, '0 m', { font: "20px Arial", fill: "#ffffff", align: "left" });
   scoreText.fixedToCamera = true;

}


GameState.prototype.update = function() {

//  Scroll the background
   field.tilePosition.y += 3;
   if (escKey.isDown)
   {
       this.game.state.start('startscreen');
   }

   game.physics.arcade.collide(player,enemy);

   enemy.body.velocity.y = 300;

   if (enemy.y > game.world.height)
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

