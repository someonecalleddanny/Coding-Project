class Interface
{
    //All of the displaying and updating the bars are similar
    //They first create the text box with the desired characteristics 
    //They then are constantly updated with data from other classes and files
    displayManaBar(game)
    {
        //manaBar is a global varible held within the runner
        manaBar = game.add.text(0, 36, 'Mana: ', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'});
        manaBar.setFill("blue");
        manaBar.setScale(2,2);
        manaBar.setAlign("center");
        manaBar.setBackgroundColor("white");
    }
    updateManaBar()
    {
        //Uses the data held within the extraStats object which is held within "MainCharacter.js"
        manaBar.setText("Mana: " + myMainMan.extraStats.mana)
        if(myMainMan.extraStats.mana < 0)
        {
            manaBar.setText("Mana: " + "0")
        }
    }

    displayHealthBar(game)
    {
        //healthBar is a global variable held within the runner
        healthBar = game.add.text(0, 0, 'Health: ', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'});
        healthBar.setFill("red");
        healthBar.setScale(2,2);
        healthBar.setAlign("center");
        healthBar.setBackgroundColor("black");
    }
    updateHealthBar()
    {
        healthBar.setText("Health: " + myMainMan.extraStats.health)
        if(myMainMan.extraStats.health < 0)
        {
            healthBar.setText("Health: " + "0")
        }
    }

    displayRoundBar(game)
    {
        roundBar = game.add.text(325, 0, 'Round: ', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'});
        roundBar.setFill("black");
        roundBar.setScale(2,2);
        roundBar.setAlign("center");
        roundBar.setBackgroundColor("white");
    }

    updateRoundBar()
    {
        //roundBar is a global variable held within the runner, It is updated in "GameManager.js" with a method called next_Round()
        roundBar.setText("Round: " + currentRound);
    }

    displayZombieBar(game)
    {
        zombieBar = game.add.text(600, 0, 'Zombies: ', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'});
        zombieBar.setFill("black");
        zombieBar.setScale(2,2);
        zombieBar.setAlign("center");
        zombieBar.setBackgroundColor("green");
    }

    updateZombieBar()
    {
        //Holds data held within the managingZombies object which is held within the "GameManager.js"
        zombieBar.setText("Zombies: " + myGameManager.managingZombies.alive_Zombies);
    }

    display_All_Title_Screen_Interface(game)
    {
        titleText = game.add.text(140, 20, ' Zombie Killer \nBOOM BOOM!', {font: "80px comic sans"});

        startGame = game.add.text(220, 300, 'Press: "P" To Kill And Boom ', { font: '30px comic sans'});

        instruction = game.add.text(242, 350, 'Press: "I" For Instructions ', { font: '30px comic sans'});

        funnyJokeText = game.add.text(260, 400, 'Quitting Not Supported', { font: '30px comic sans'});

        helping_Player = game.add.text(20, 20, 
            'Instructions:\nMovement: \"wasd\" OR cursor keys\n\nShooting Spells: Basic = 1, Fire = 2, Electric = 3, Earth = 4'
            +"\n\nHow To Shoot: Aim with Movement\n"
             + "+ Hold down the desired spell \n\n Mage Dash: \"Shift Button\" + aim with Movement" 
            +"", 
            { font: '30px comic sans'});
            
        helping_Player.setVisible(false);
        helping_Player.setAlign("center");

        show_Funny_Zombies(game);

    }

    update_All_Title_Screen_Interface(game, daScene)
    {
        if(!daScene.instructionScreen)
        {
            titleText.setVisible(false);
            startGame.setVisible(false);
            instruction.setVisible(false);
            funnyJokeText.setVisible(false);
            helping_Player.setVisible(true);
            daScene.instructionScreen = true;
        }

        else if(daScene.instructionScreen)
        {
            titleText.setVisible(true);
            startGame.setVisible(true);
            instruction.setVisible(true);
            funnyJokeText.setVisible(true);
            helping_Player.setVisible(false);
            daScene.instructionScreen = false;
            show_Funny_Zombies(game);
        }

    }

        
}