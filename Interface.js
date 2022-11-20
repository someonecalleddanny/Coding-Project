class Interface
{
    displayManaBar(game)
    {
        manaBar = game.add.text(0, 36, 'Mana: ', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'});
        manaBar.setFill("blue");
        manaBar.setScale(2,2);
        manaBar.setAlign("center");
        manaBar.setBackgroundColor("white");
    }
    updateManaBar()
    {
        manaBar.setText("Mana: " + myMainMan.extraStats.mana)
        if(myMainMan.extraStats.mana < 0)
        {
            manaBar.setText("Mana: " + "0")
        }
    }

    displayHealthBar(game)
    {
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
        zombieBar.setText("Zombies: " + myGameManager.managingZombies.alive_Zombies);
    }
}