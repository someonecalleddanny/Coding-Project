class MainMan
{
    extraStats = 
    {
        health : 100,
        mana : 200,
        dead : false,
    }

    lose_health()
    {

    }
}

function rechargeMana(mc)
{
    mc.extraStats.mana += 10;
    if(mc.extraStats.mana > 200)
    {
        mc.extraStats.mana = 200;
    }
    console.log(mc.extraStats.mana);
}