class MainMan
{
    extraStats = 
    {
        health : 100,
        mana : 40,
        dead : false,
    }

    rechargeMana()
    {
        this.stats.mana += 10;
        console.log(this.stats.mana);
    }

    lose_health()
    {

    }
}