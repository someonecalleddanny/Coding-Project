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

function cant_Overlap_With_Each_Other(myZombie, physics)
{
    /*for(let i = 0 ; i < myZombie.length-1 ; i++)
    {
        for(let y = i + 1 ; y < myZombie.length; y++)
        {
            if(physics.collide(myZombie[i].this_Exact_Zombie,  myZombie[y].this_Exact_Zombie))
            {
                myZombie[y].this_Exact_Zombie.setBounce(10, 10);
                physics.add.collider(myZombie[i].this_Exact_Zombie, myZombie[y].this_Exact_Zombie);
            }
            
        }
    }*/
    physics.add.collider(myZombie[1].this_Exact_Zombie, myZombie[2].this_Exact_Zombie);
    /*physics.add.collider(myZombie[0].this_Exact_Zombie, myZombie[0].this_Exact_Zombie);
    physics.add.collider(myZombie[0].this_Exact_Zombie, myZombie[1].this_Exact_Zombie);
    physics.add.collider(myZombie[0].this_Exact_Zombie, myZombie[2].this_Exact_Zombie);*/
   
}