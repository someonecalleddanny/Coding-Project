class GameManager
{
    managingZombies = 
    {
        all_Zombies_Dead : true,
        max_Zombies : 3,
        alive_Zombies : "yo mama"
    }
    
    spawning_And_Killing_Zombos(physics,math)
    {

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

            function makingZombies(myZombie)
            {
                let randInt = math.between(0,4)
                console.log(randInt);
                myZombie.type_Of_Zombie(randInt);
                 //setting the x and y coordinates for each zombies
                 myZombie.current_x = start_x;
                 myZombie.current_y = start_y;
                 //adds a sprite for each instance of the zombie
                 myZombie.this_Exact_Zombie = physics.add.sprite(myZombie.current_x ,myZombie.current_y ,myZombie.spriteName).setScale(2.5,2);
                 start_x += 90;

                 return myZombie;
            }
            this.managingZombies.all_Zombies_Dead = false;
            this.managingZombies.alive_Zombies = this.managingZombies.max_Zombies;
        }
        else
        {
            for(let i = 0; i < zombies.length ; i++)
            {
                //play the animation for the zombie
                //the zombies variable is an array of the class within Walkers.js
                zombies[i].this_Exact_Zombie.anims.play(zombies[i].animationName, true);

                //this function checks if the spell collides with the correct zombie to lose health as well as other things
                zombies[i].lose_Health(physics)

                if(zombies[i].dead)
                {
                    zombies[i].this_Exact_Zombie.destroy(true);
                    zombies.splice(i,1);
                }
            }
            this.managingZombies.alive_Zombies = zombies.length;
            //console.log(alive_Zombies);
            if(this.managingZombies.alive_Zombies == 0)
            {
                //console.log("hello");
                this.managingZombies.all_Zombies_Dead = true;
                this.next_Round();
            }
        }
    }

    next_Round()
    {
        this.managingZombies.max_Zombies += 2;
    }

}

