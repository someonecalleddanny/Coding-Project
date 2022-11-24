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

//This function keeps getting called by the timer that is held within the play_scene. Essentially recharges health every 10 secs
function rechargeHealth(mc)
{
    mc.extraStats.health += 15;
    if(mc.extraStats.health > 100)
    {
        mc.extraStats.health = 100;
    }
    console.log(mc.extraStats.health);
}

//same as above but different interval 
function rechargeMana(mc)
{
    mc.extraStats.mana += 10;
    if(mc.extraStats.mana > 200)
    {
        mc.extraStats.mana = 200;
    }
    console.log(mc.extraStats.mana);
}

