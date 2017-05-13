"use strict"; 

var StartState = function(game) {};

StartState.prototype.preload = function() 
{
   game.load.image('field', '../assets/bg-de-fundo.png');
}

var cursors;
var enterKey;

StartState.prototype.create = function() 
{
   field = game.add.tileSprite(0, 0, 800, 600, 'field');
   cursors = game.input.keyboard.createCursorKeys();
   enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
}


StartState.prototype.update = function() 
{
   if (enterKey.isDown)
   {
       this.game.state.start('game');
   }
}

