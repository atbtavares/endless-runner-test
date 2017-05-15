"use strict"; 

var StartState = function(game) {};

StartState.prototype.preload = function() 
{
   game.load.image('bg', 'assets/bg-de-fundo.png');
   game.load.image('more_img', 'assets/tela-de-info.png');
   game.load.spritesheet('start', 'assets/start.png',283,118);
   game.load.spritesheet('more_btn', 'assets/mais-opcoes.png',96,75);
   game.load.spritesheet('close', 'assets/fechar.png',96,75);
   game.load.spritesheet('uea', 'assets/uea_horizontal.png',200,61);
}

var more_img;
var start_btn;
var more_btn;
var close_btn;
var uea;

var cursors;
var enterKey;

StartState.prototype.create = function() 
{
   field = game.add.tileSprite(0, 0, 800, 600, 'bg');

   cursors = game.input.keyboard.createCursorKeys();
   enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

   more_img = game.add.sprite(30,30,'more_img');
   more_img.visible = false;

   start_btn = game.add.button(250, 400, 'start', this.startGame, this, 2, 1, 0);
   more_btn = game.add.button(650, 50, 'more_btn', this.showTeam, this, 2, 1, 0);
   close_btn = game.add.button(650, 50, 'close', this.hideTeam, this, 2, 1, 0);
   close_btn.visible = false;
   uea = game.add.sprite(30,30,'uea');
}


StartState.prototype.update = function() 
{
   if (enterKey.isDown)
   {
       this.game.state.start('game');
   }
}

StartState.prototype.startGame= function()
{
   this.game.state.start('game');
}

StartState.prototype.showTeam= function()
{
   start_btn.visible = false;
   more_btn.visible = false;
   close_btn.visible = true;
   more_img.visible = true;
   uea.visible = false;
}

StartState.prototype.hideTeam= function()
{
   start_btn.visible = true;
   more_btn.visible = true;
   close_btn.visible = false;
   more_img.visible = false;
   uea.visible = true;
}

