class GameManager
{
    spawning_And_Killing_Zombos(physics)
    {
        if(all_Zombies_Dead)
    {
        //creating zombies
        for(let i = 0; i < max_Zombies ; i++)
        {
            //instantiating the class within Walkers.js
            let placement_Zombie = new zombie_Man();
            //push the class into the zombies array
            zombies.push(placement_Zombie);
        }
        
        let start_x = 200;
        let start_y = 400;
        //adding a sprite for each zombie
        for(let i = 0 ; i < zombies.length; i++)
        {
            //setting the x and y coordinates for each zombies
            zombies[i].current_x = start_x;
            zombies[i].current_y = start_y;
            //adds a sprite for each instance of the zombie
            zombies[i].this_Exact_Zombie = physics.add.sprite(zombies[i].current_x ,zombies[i].current_y ,"zombie").setScale(2.5,2);
            start_x += 90;
        }
        all_Zombies_Dead = false;
        alive_Zombies = max_Zombies;
    }
    else
    {
        for(let i = 0; i < zombies.length ; i++)
        {
            //play the animation for the zombie
            //the zombies variable is an array of the class within Walkers.js
            zombies[i].this_Exact_Zombie.anims.play("move_Mate", true);

            //this function checks if the spell collides with the correct zombie to lose health as well as other things
            zombies[i].lose_Health(physics)

            if(zombies[i].dead)
            {
                zombies[i].this_Exact_Zombie.destroy(true);
                zombies.splice(i,1);
            }
        }
        alive_Zombies = zombies.length;
        //console.log(alive_Zombies);
        if(alive_Zombies == 0)
        {
            //console.log("hello");
            all_Zombies_Dead = true;
        }
    }
    }
}

