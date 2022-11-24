var currentBackground;

//preloads all the assets. Called in the preload function in the runner
function preLoadAllStuff(game)
{
    //currentBackground = 'grass';
    game.load.image("grass", 'assets/grass_background.png');


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

    //loading the mana star
    game.load.image("manaStar", 'assets/manaStar.png');

    //loading funny game over 
    game.load.spritesheet("l", "assets/take-the-l.png", { frameWidth: 220 , frameHeight: 215});

}
//Create the relevant background for the player to liven up the place
function createTheBackground(game)
{
    game.add.image(0, 0, 'grass').setScale(2.5,2);
}

//show zombies on the title screen as well as the instruction screen
function show_Funny_Zombies(game, showing_Title_Zombies)
{
    if(showing_Title_Zombies)
    {
        itzame = game.add.image(60,75, "firezombie").setScale(2.5,2);
        mario = game.add.image(740,75, "earthzombie").setScale(2.5,2);
    }
    else
    {
        waaaa = game.add.image(740,550, "firezombie").setScale(2.5,2);
    }
}

//create the relevant sprite object for the game over screen
function lDance(game)
{
    skullTrooper = game.physics.add.sprite(395 ,230 ,"l")
}
