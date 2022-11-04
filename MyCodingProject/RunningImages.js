var currentBackground;

function preLoadTheBackground(game)
{
    //currentBackground = 'grass';
    game.load.image("grass", 'assets/grass_background.png')
}
function createTheBackground(game)
{
    game.add.image(0, 0, 'grass').setScale(2.5,2);
}
