class GameManager
{
    //This object contains informations that is key for managing the zombies within this class
    managingZombies = 
    {
        all_Zombies_Dead : true,
        max_Zombies : 3,
        //This is entirely a placement so this doesn't get caught as an undefined
        alive_Zombies : "yo mama"
    }

    //object involved with keeping in check what happens with the spells
    managingSpells = 
    {
        //There Are currently 4 spells in the game so should have 4 booleans
        destroyingSpells : [false,false,false,false]
    }
    
    //main method for the zombies
    spawning_And_Killing_Zombos(physics,math)
    {
        //this = if all the zombies are currently dead
        if(this.managingZombies.all_Zombies_Dead)
        {
            let start_x = 200;
            let start_y = 400;
            //creating zombies
            for(let i = 0; i < this.managingZombies.max_Zombies ; i++)
            {
                //instantiating the class within Walkers.js
                let placement_Zombie = new zombie_Man();
                //push the class into the zombies array + the function is shown below
                zombies.push(makingZombies(placement_Zombie));
            }

            //Not to get confused, this function is used above in 2 lines
            function makingZombies(myZombie)
            {
                //chooses a random number from 0 to 4. This is relevant because it will determine the type of zombie
                let randInt = math.between(0,4)
                console.log(randInt);
                //determines the type of zombie
                myZombie.type_Of_Zombie(randInt);
                 //setting the x and y coordinates for each zombies
                 myZombie.current_x = start_x;
                 myZombie.current_y = start_y;
                 //adds a sprite for each instance of the zombie. Has the relevant properties from the zombie_Man classes
                 myZombie.this_Exact_Zombie = physics.add.sprite(myZombie.current_x ,myZombie.current_y ,myZombie.spriteName).setScale(2.5,2);
                 start_x += 90;

                 return myZombie;
            }
            //These variables being set ensure that all the zombies are alive and well
            this.managingZombies.all_Zombies_Dead = false;
            this.managingZombies.alive_Zombies = this.managingZombies.max_Zombies;
        }
        //essentilly = if all the zombies aren't dead
        else
        {
            //this for loop is mainly for checking stuff for each zombie
            for(let i = 0; i < zombies.length ; i++)
            {
                //play the animation for the zombie
                //the zombies variable is an array of the class within Walkers.js called zombie_Man
                zombies[i].this_Exact_Zombie.anims.play(zombies[i].animationName, true);

                //This checks if the zombies are colliding with something, for now it only accepts spells but might add the player as
                //a possible something
                zombies[i].colliding_With_Something(physics);

                /*this calls the function below in 2 lines
                passes through the specific zombie within the array and passes through this whole class in order to stay within scope*/
                check_Hit_Stuff_With_Specific_Zombie(zombies[i], this);

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



                //this function checks if the spell collides with the correct zombie to lose health as well as other things
                //zombies[i].lose_Health(physics)

                //checks if the specific zombie is dead, if the Boolean value is true, then it will destroy the zombie sprite
                //and remove it out of the array of the zombie_Man classes
                if(zombies[i].dead)
                {
                    zombies[i].this_Exact_Zombie.destroy(true);
                    zombies.splice(i,1);
                }
            }
            //this for loop is mainly for committing to stuff for each zombie
            for(let i = 0; i < zombies.length; i++)
            {
                zombies[i].lose_Health();
            }
            /*The full function is shown below in 2 lines. Passes this class as an argument. */
            deleting_Unwanted_Spells(this);
            
            //The call to this function is literally a line above
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
            


            
            //sets the alive_Zombies value to the length of the array
            this.managingZombies.alive_Zombies = zombies.length;
            //if all the zombies are dead
            if(this.managingZombies.alive_Zombies == 0)
            {
                //alerts the Game Manager that all the zombies are dead
                this.managingZombies.all_Zombies_Dead = true;
                //This function is responsible for getting things ready for the next round
                this.next_Round();
            }
        }
    }

    next_Round()
    {
        this.managingZombies.max_Zombies += 2;
    }

}

