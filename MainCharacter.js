const max_Mana = 200;
const max_Health = 100;
class MainMan
{
    extraStats = 
    {
        health : max_Health,
        mana : max_Mana,
        dead : false,
    }
}

function rechargeHealth(mc)
{
    mc.extraStats.health += 15;
    if(mc.extraStats.health > 100)
    {
        mc.extraStats.health = 100;
    }
    console.log(mc.extraStats.health);
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

