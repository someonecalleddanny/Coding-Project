var currentBackground;

function preLoadAllStuff(game)
{
    //currentBackground = 'grass';
    game.load.image("grass", 'assets/grass_background.png')


    //using the dude from the demo because he is cute/cool looking
    game.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });

    //loading in the zombies 
    game.load.spritesheet("zombie" , "assets/zombie.png" , { frameWidth: 32 , frameHeight: 26});

    game.load.spritesheet("basiczombie" , "assets/zombie_basicSpell.png" , { frameWidth: 32 , frameHeight: 26});

    game.load.spritesheet("firezombie" , "assets/zombie_fireSpell.png" , { frameWidth: 32 , frameHeight: 26});

    game.load.spritesheet("electriczombie" , "assets/zombie_electricSpell.png" , { frameWidth: 32 , frameHeight: 26});

    game.load.spritesheet("earthzombie" , "assets/zombie_earthSpell.png" , { frameWidth: 32 , frameHeight: 26});


    //loading the spells
    game.load.spritesheet("normalSpell", "assets/normal_spell.png", { frameWidth: 32 , frameHeight: 32});

    game.load.spritesheet("fire", "assets/fire.png", { frameWidth: 32 , frameHeight: 32});

    game.load.spritesheet("electric", "assets/electric.png", { frameWidth: 32 , frameHeight: 32});

    game.load.spritesheet("earth", "assets/earth.png", { frameWidth: 32 , frameHeight: 32});
}
function createTheBackground(game)
{
    game.add.image(0, 0, 'grass').setScale(2.5,2);
}
