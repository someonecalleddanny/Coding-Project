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
            manaBar.setText("Health: " + "0")
        }
    }
}