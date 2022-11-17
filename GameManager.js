class GameManager
{
    //This object contains informations that is key for managing the zombies within this class
    managingZombies = 
    {
        all_Zombies_Dead : true,
        max_Zombies : 3,
        //This is entirely a placement so this doesn't get caught as an undefined
        alive_Zombies : "yo mama",
        all_Zombies : []
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
                this.managingZombies.all_Zombies.push(makingZombies(placement_Zombie));
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
            for(let i = 0; i < this.managingZombies.all_Zombies.length ; i++)
            {
                //play the animation for the zombie
                //the zombies variable is an array of the class within Walkers.js called zombie_Man
                this.managingZombies.all_Zombies[i].this_Exact_Zombie.anims.play(this.managingZombies.all_Zombies[i].animationName, true);

                //this function checks if the spell collides with the correct zombie to lose health as well as other things
                //zombies[i].lose_Health(physics)

                //checks if the specific zombie is dead, if the Boolean value is true, then it will destroy the zombie sprite
                //and remove it out of the array of the zombie_Man classes
                if(this.managingZombies.all_Zombies[i].dead)
                {
                    this.managingZombies.all_Zombies[i].this_Exact_Zombie.destroy(true);
                    this.managingZombies.all_Zombies.splice(i,1);
                }
            }
            
            //sets the alive_Zombies value to the length of the array
            this.managingZombies.alive_Zombies = this.managingZombies.all_Zombies.length;
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

    zombie_Stuff(physics)
    {
        for(let i = 0; i < this.managingZombies.all_Zombies.length ; i++)
        {
            
                //This checks if the zombies are colliding with something, for now it only accepts spells but might add the player as
                //a possible something
                this.managingZombies.all_Zombies[i].colliding_With_Something(physics);

                /*this calls the function below in 2 lines
                passes through the specific zombie within the array and passes through this whole class in order to stay within scope*/
                check_Hit_Stuff_With_Specific_Zombie(this.managingZombies.all_Zombies[i], this);
        }
        

        //this for loop is mainly for committing to stuff for each zombie
        for(let i = 0; i < this.managingZombies.all_Zombies.length; i++)
        {
            this.managingZombies.all_Zombies[i].lose_Health();

            //this.managingZombies.all_Zombies[i].running_Towards_Player(player, physics);
        }
        cant_Overlap_With_Each_Other(this.managingZombies.all_Zombies, physics);
        /*The full function is shown below this class. Passes this class as an argument. */
        deleting_Unwanted_Spells(this);
    }

    next_Round()
    {
        this.managingZombies.max_Zombies += 2;
    }
}

//When I referenced in text that the functions would be below the class, They are held now in GameManagerFunctions.js




