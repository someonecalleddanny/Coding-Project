function check_Hit_Stuff_With_Specific_Zombie(the_Top_Dog, myManager)
{
    /*This whole for loop checks if a specific zombie gets hit with a particular object
    1 through to 8 = the specific spell. This is mainly used to check what spell is needed to be destroyed.
    I did this because before, when 1 spell would collide with 2 zombies, only one zombie would take the hit.
    This is because I would destroy the spell object too easily. This is one ways to check if a spell collides
    with more than just one entity. */
    for(let i = 0 ; i < the_Top_Dog.hit_With_Stuff.length ; i++)
    {
        if(the_Top_Dog.hit_With_Stuff[i] == 1)
        {
            myManager.managingSpells.destroyingSpells[0] = true;
        }
        if(the_Top_Dog.hit_With_Stuff[i] == 2)
        {
            myManager.managingSpells.destroyingSpells[1] = true;
        }
        if(the_Top_Dog.hit_With_Stuff[i] == 4)
        {
            myManager.managingSpells.destroyingSpells[2] = true;
        }
        if(the_Top_Dog.hit_With_Stuff[i] == 8)
        {
            myManager.managingSpells.destroyingSpells[3] = true;
        }
    }
    
}

//The call to this function is in the class above
function deleting_Unwanted_Spells(myManager)
{
    /*All these if statements essentially check if any spell has collided with a zombie. This is set to true with methods
    above. This solves the issue of instantly destroying the spell when the spell would collide with any zombie entity.
    This means that a spell can hit multiple zombies before being destroyed.*/
    if(myManager.managingSpells.destroyingSpells[0])
    {
        mySpells.basicSpell.entity.destroy(true);
        myManager.managingSpells.destroyingSpells[0] = false;
    }

    if(myManager.managingSpells.destroyingSpells[1])
    {
        mySpells.fireSpell.entity.destroy(true);
        myManager.managingSpells.destroyingSpells[1] = false;
    }

    if(myManager.managingSpells.destroyingSpells[2])
    {
        mySpells.electricSpell.entity.destroy(true);
        myManager.managingSpells.destroyingSpells[2] = false;
    }

    if(myManager.managingSpells.destroyingSpells[3])
    {
        mySpells.earthSpell.entity.destroy(true);
        myManager.managingSpells.destroyingSpells[3] = false;
    }
}
//let glitchy_Delinquents = [];
function cant_Overlap_With_Each_Other(myZombie, physics)
{
    for(let i = 0 ; i < myZombie.length - 1 ; i++)
    {
        for(let y = i + 1 ; y < myZombie.length; y++)
        {
            /*The collison detection in Phaser is utter garbage and whoever made it has to re-do years in a game development course
            The problem is, objects can get stuck inside another object due to lag and then, if you want them to stop,
            you can't in time due to the framerate as well as the object dragging the other object inside itself.
            Utter garabage, ruined my day. Second class in this framework that is utterly glitch infested. Obviously, I fixed it after 
            many attempts. Bear witness to the onslaught of green from all my bashing against a brick wall until it falls.
            physics.add.collider(myZombie[i].this_Exact_Zombie, myZombie[y].this_Exact_Zombie);
            /*minXBound_Zom1 <= myZombie[y].this_Exact_Zombie.x && maxXBound_Zom1 >= myZombie[y].this_Exact_Zombie.x  &&
                minYBound_Zom1 >= myZombie[y].this_Exact_Zombie.y && maxYBound_Zom1 <= myZombie[y].this_Exact_Zombie.y*/
            //collision does't work for dynamic objects for some reason so this is why im doing my collison manually
            //!physics.collide(myZombie[i].this_Exact_Zombie,  myZombie[y].this_Exact_Zombie) = if worked properly
            //32x32 /2 = 16x center 16y center
            if(!(physics.overlap(myZombie[i].this_Exact_Zombie,  myZombie[y].this_Exact_Zombie)))
            {
                //console.log("im moving");
                //myZombie[i].running_Towards_Player(player, physics);
                //myZombie[y].running_Towards_Player(player, physics);
                
            }
            else
            {
                //console.log("not moving");
                physics.add.collider(myZombie[i].this_Exact_Zombie, myZombie[y].this_Exact_Zombie);
                myZombie[i].this_Exact_Zombie.setVelocity(0,0);
                //myZombie[i].this_Exact_Zombie.x = 0;
            }
        }
    }
    /*physics.add.collider(myZombie[1].this_Exact_Zombie, myZombie[2].this_Exact_Zombie);
    physics.add.collider(myZombie[0].this_Exact_Zombie, myZombie[1].this_Exact_Zombie);
    physics.add.collider(myZombie[0].this_Exact_Zombie, myZombie[0].this_Exact_Zombie);
    physics.add.collider(myZombie[0].this_Exact_Zombie, myZombie[1].this_Exact_Zombie);
    physics.add.collider(myZombie[0].this_Exact_Zombie, myZombie[2].this_Exact_Zombie);*/
   
}

function damagePlayer(Managing)
{
    //If the player is hit 
    if(Managing.managingPlayer.isHit)
    {
        //subtract the health of the player by the damage specific to the zombie type
        myMainMan.extraStats.health -= Managing.managingPlayer.youve_Been_Hit_By_Youve_Been_Struck_By;
        //Turn this back to false so this doesn't keep repeating
        Managing.managingPlayer.isHit = false;
        //This will turn the damage hit to 0 for the player
        Managing.managingPlayer.youve_Been_Hit_By_Youve_Been_Struck_By = 0;
        console.log("health is " + myMainMan.extraStats.health);
    }
}

function setting_Random_Starting_Positions(math, manager)
{
    //the decider checks if the x or y position will be held in two fixed locations
    let decider = math.between(0,1);
    //the x will be in a fixed location either on the left of the screen or right
    if(decider == 0) 
    {
        manager.managingZombies.start_X = math.pick([-10,810]);
        //The y position can vary
        manager.managingZombies.start_Y = math.between(-5, 605);
    }
    //the y position will either be fixed on the top of the screen or the bottom
    else
    {
        manager.managingZombies.start_Y = math.pick([-10,610]);
        //the x position can vary
        manager.managingZombies.start_X = math.between(-5, 805);
    }
}

//called when a zombie is killed
function spawn_manaStar_On_Body(myZombie, math, physics)
{
    let placement_Star = new manaStar();
    mana_Stars_In_Game.push(placement_Star);
    //This is a faster way of indexing the relevant star as there can be many on screen
    //Picks 1 of three mana values that the player can receive when picking the item up
    mana_Stars_In_Game[mana_Stars_In_Game.length - 1].stuff_Inside.manaHeld = math.pick([10,20,30]);
    mana_Stars_In_Game[mana_Stars_In_Game.length - 1].stuff_Inside.entity = physics.add.sprite(myZombie.x ,myZombie.y, "manaStar");
    //myManager.managingMana.spawned = true;

    //physics.add.collider(player, mana_Stars_In_Game[mana_Stars_In_Game.length - 1].stuff_Inside.entity);
    //physics.add.overlap(player, mana_Stars_In_Game[mana_Stars_In_Game.length - 1].stuff_Inside.entity, collecting_Stars, null, this);
}