var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-canvas');

game.state.add('startscreen', StartState);
game.state.add('game', GameState);
game.state.start('startscreen');
