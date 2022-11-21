class Scene_Play
{
    create_Scene(game)
    {
        createTheBackground(game)
        //const text = game.add.text(350, 270, 'ppoooppp', { font: '16px Courier', fill: '#00ff00' });

        //intialising the interface bars for the player to see
        myInterface.displayManaBar(game);
        myInterface.displayHealthBar(game);
        myInterface.displayRoundBar(game);
        myInterface.displayZombieBar(game)

        //movement keys
        keyA = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        //selection of spells keys
        key1 = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        key2 = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        key3 = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
        key4 = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);
        keyShift = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);

        //dude
        player = game.physics.add.sprite(100, 450, 'dude');
        player.setCollideWorldBounds(true);
        
        //create the animation for the playable character
        mcAnim(game);

        //create the animation for the zombie. game applies to every zombie that i make.
        zombie_Movement(game);
        
        //create the cursors on the keyboard to be able to be inputted
        cursors = game.input.keyboard.createCursorKeys();

        //These are the timed events that keep looping functions every set interval
        //game recharges the mana every 1.5s. Calls the rechargeMana function which is in the "MainCharacter.js" file
        timedEvent = game.time.addEvent({ delay: 1500, callback: rechargeMana,args:[myMainMan], callbackScope: game, loop: true });
        //damages the player when he/she is hit, checks every second. Calls the damagePlayer function in "GameManagerFunctions.js"
        damagingPlayer = game.time.addEvent({ delay: 1000, callback: damagePlayer,args:[myGameManager], callbackScope: game, loop: true });
        /*heals the player every 10 seconds. Calls the rechargeHealth function which is in the "MainCharacter.js" file*/
        Healing_Over_Time = game.time.addEvent({ delay: 10000, callback: rechargeHealth,args:[myMainMan], callbackScope: game, loop: true });
    
    }

    update_Scene(game)
    {
        //move the player with wasd and cursor keys. Check the PlayerMovement.js file for more info on how game works
        moveTheLad(player); 

        //checks if the zombies are dead to respawn them.
        myGameManager.spawning_And_Killing_Zombos(game.physics, Phaser.Math.RND, myGameManager);

        //If all the zombies the zombies are still alive
        if(!myGameManager.managingZombies.all_Zombies_Dead)
        {
            //Does the method in the GameManager class
            myGameManager.zombie_Stuff(game.physics);
        }

        //constantly updates the interface bars 
        myInterface.updateManaBar();
        myInterface.updateHealthBar();
        myInterface.updateRoundBar();
        myInterface.updateZombieBar();
        //myMainMan.rechargeMana();


        myGameManager.collecting_Stars(game.physics);

        //Allows the mc to dash game is in the "PlayerMovement.js" file
        dash_The_Lad();

        //allows the player to cast the spells. game is in "Spells.js"
        casting_Spells(game);

        //the old moving script which is cool and complex but most likely 0.1% less efficient than the moveTheLad()
        //var moveyGroovy = new imNotSeeingEnoughMovement(player);

        if(myMainMan.extraStats.health <= 0)
        {
            //game.paused = true;
            game.scene.pause(game.scene);
            game.scene.restart(game.scene);
            init();
        }
    }
}

class Scene_Title
{
    create_Scene(game)
    {
        myInterface.display_All_Title_Screen_Interface(game);
    }
}