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
        titleText = game.add.text(120, 20, ' Zombie Killer \nBOOM BOOM!', {font: "80px comic sans"});

        startGame = game.add.text(200, 300, 'Press: "P" To Kill And Boom ', { font: '30px comic sans'});

        instruction = game.add.text(222, 350, 'Press: "I" For Instructions ', { font: '30px comic sans'});

        funnyJokeText = game.add.text(222, 350, 'No Quitting', { font: '30px comic sans'});

    }

        
}