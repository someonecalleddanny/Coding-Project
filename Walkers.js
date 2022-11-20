class zombie_Man
{
    current_x = 200;
    current_y = 100;

    this_Exact_Zombie;
    spriteName;
    animationName;
    hit_With_Stuff = [];
    resistance;
    speed;
    damage;
    isHit = false;
    

    health = 6;
    dead = false;

    type_Of_Zombie(picking_Zombie)
    {
        switch(picking_Zombie)
        {
            //The specific zombie will be made with the appropriate animation and sprite names among other things

            //this will be the normal zombie with no resistances
            case 0:
                this.spriteName = "zombie";
                this.animationName = "move_Mate";
                this.resistance = 0;
                this.damage = 10;
                this.speed = 50;
                this.health = 5;
                break;
            //this is the basic zombie that resists the basic spell
            case 1:
                this.spriteName = "basiczombie";
                this.animationName = "move_Basic_Mate";
                this.resistance = 1;
                this.damage = 15;
                this.health = 6;
                this.speed = 60;
                break;
            //this is the fire zombie that resists the fire spell
            case 2:
                this.spriteName = "firezombie";
                this.animationName = "move_Fire_Mate";
                this.resistance = 2;
                this.damage = 20;
                this.health = 6;
                this.speed = 60;
                break;
            //this is the electric zombie that will resist the electric spell
            case 3:
                this.spriteName = "electriczombie";
                this.animationName = "move_Electric_Mate";
                this.resistance = 4;
                this.damage = 15;
                this.health = 4;
                this.speed = 90;
                break;
            //this is the earth zombie that will resist earth spells
            case 4:
                this.spriteName = "earthzombie";
                this.animationName = "move_Earth_Mate";
                this.resistance = 8;
                this.damage = 30;
                this.health = 10;
                this.speed = 40;
                break;
            default:
                console.log("ERROR: INPUTTED WRONG NUMBER TO PICK ZOMBIE. PICK NUMBER FROM 1-4");
        }
    }

    resisting_Attack(spell_hit)
    {
        /*for future reference: i am using bit flags. It goes like this. 1 = basic spell, 2 = fire spell, 4 = electric spell
        , 8 = earth spell*/
        /*Currently in future, it works. If the specific instance of a zombie is the basic zombie (which has the resistance value of 1),
        the binary value will be and gated with the spell that is hit on the zombie. 1 = 0001, if and gated, it will return a value 
        of 1 with anything that has a 1. Thus, it will return true or, if not, it will return false. */
        if(spell_hit & this.resistance)
        {
            return true;
        }
        else
        {
            return false;
        }

    }

    running_Towards_Player(player, physics)
    {
        physics.moveTo(this.this_Exact_Zombie, player.x, player.y, this.speed);
        //this.this_Exact_Zombie.setVelocity(player.x,player.y);
    }

    hit_Player(physics)
    {
        if(physics.collide(this.this_Exact_Zombie, player))
        {
            //physics.add.collider(this.this_Exact_Zombie, player);
            //myMainMan.extraStats.health -= this.damage;
            player.setBounce(70,70);
            return true;
        }
        else
        {
            return false;
        }
        //if hit player == return true

        //if not hit player == return false;
    }

    colliding_With_Something(game)
    {
        /*These if statements check if a specific entity overlaps with the zombie. Currently, this holds only spells. If this is
        updated hopefully I don't forget to update this explanation. Basically, the if statements will also push a denary value
        to represent a bit value in order to accomplish a bit flag. e.g if fire zombie has a resistance of 2, 2 & 2 returns true as
        it is true a 1 will be passed through. The and gate is not stored here but in the "resisting_Attack" method.*/
        if(game.overlap(this.this_Exact_Zombie, mySpells.basicSpell.entity))
        {
            console.log("jello");
            game.add.collider(this.this_Exact_Zombie, mySpells.basicSpell.entity);
            //This is an array to essentially be checked in other methods to see what the zombie has overlapped with
            this.hit_With_Stuff.push(1);
        }
        if(game.overlap(this.this_Exact_Zombie, mySpells.fireSpell.entity))
        {
            console.log("hello");
            game.add.collider(this.this_Exact_Zombie, mySpells.fireSpell.entity);
            this.hit_With_Stuff.push(2);
        }

        if(game.overlap(this.this_Exact_Zombie, mySpells.electricSpell.entity))
        {
            game.add.collider(this.this_Exact_Zombie, mySpells.electricSpell.entity);
            console.log("hello");
            this.hit_With_Stuff.push(4);
        }

        if(game.overlap(this.this_Exact_Zombie, mySpells.earthSpell.entity))
        {
            game.add.collider(this.this_Exact_Zombie, mySpells.earthSpell.entity);
            console.log("hello");
            this.hit_With_Stuff.push(8);
        }
    }

    lose_Health()
    {
        //Checks to see how many objects have collided with the zombie.
        for(let i = 0; i < this.hit_With_Stuff.length ; i++)
        {
            /*The method used in the if uses an and gate to represent a bit flag. If the bit flag returns not true, The zombie
            will lose health appropriate to what spell hit it. */
            if(!this.resisting_Attack(this.hit_With_Stuff[i]))
            {
                switch (this.hit_With_Stuff[i])
                {
                    case 1:
                        this.health -= mySpells.basicSpell.damage;
                        console.log(this.health);
                        break;
                    case 2:
                        this.health -= mySpells.fireSpell.damage;
                        console.log(this.health);
                        break;
                    case 4:
                        this.health -= mySpells.electricSpell.damage;
                        console.log(this.health);
                        break;
                    case 8:
                        this.health -= mySpells.earthSpell.damage;
                        console.log(this.health);
                        break;
                    default:
                        console.log("Something went wrong sir!");
                        break;
                }
                
            }
            else
            {
                console.log("resisted attack")
            }
        }
        //Need to reinitialse the array variable in order not to get repeated attacks on the zombie.
        this.hit_With_Stuff = [];
        
        //This sets the zombie as dead dead
        if(this.health < 1)
        {
            this.dead = true;
        }

    }
}