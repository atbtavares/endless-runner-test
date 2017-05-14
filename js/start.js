	"use strict"; 

var StartState = function(game) {};

StartState.prototype.preload = function() 
{
   game.load.image('bg', '../assets/bg-de-fundo.png');
   game.load.spritesheet('startButton', 'assets/start.png',283,118);
}

var startButton;
var cursors;
var enterKey;

StartState.prototype.create = function() 
{
   field = game.add.tileSprite(0, 0, 800, 600, 'bg');
   cursors = game.input.keyboard.createCursorKeys();
   enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
   startButton = game.add.button(250, 400, 'startButton', this.actionOnClick, this, 2, 1, 0);
   //startButton.scale.setTo(0.5,0.5);
   startButton.onInputOver.add(over, this);
   startButton.onInputOut.add(out, this);
}


StartState.prototype.update = function() 
{
   if (enterKey.isDown)
   {
       this.game.state.start('game');
   }
}


StartState.prototype.actionOnClick = function()
{
   this.game.state.start('game');
}

