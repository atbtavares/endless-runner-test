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
var score = 0;
var life = 1;
var scoreText;
var escKey;
var enterKey;
var stateText;
var timer;

GameState.prototype.create = function() {

   game.physics.startSystem(Phaser.Physics.ARCADE);

   game.time.events.loop(Phaser.Timer.SECOND, updateScore, this);

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
   escKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
   enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
   //
   scoreText = game.add.text(32, 550, '0 m', { font: "30px Arial", fill: "#ffffff", align: "left" });
   scoreText.fixedToCamera = true;
   score = 0;

   stateText = game.add.text(game.width/2, game.height/2, '', { font: "40px Arial", fill: "#ffffff", align: "center" });
   stateText.anchor.setTo(0.5,0.5);
   stateText.visible = false;
   stateText.fixedToCamera = true;


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
      game.physics.arcade.overlap(enemy, player, enemyHitsPlayer, null, this);

      scoreText.text = score + ' m';

  } else {
      stateText.text = 'GAME OVER!\nVoce correu '+score+' m \nAperte ENTER para jogar novamente';
      stateText.visible = true;
      if (enterKey.isDown)
         this.game.state.start('game');
  }

}

function updateScore(){
  if (player.alive){ 
    score = score + 0.875;
  }
}

function render() {
    game.debug.cameraInfo(game.camera, 280, 32);
    game.debug.spriteCoords(player, 32, 32);
}



function enemyHitsPlayer (player,enemy) {
    player.kill();
    enemy.kill();
}
