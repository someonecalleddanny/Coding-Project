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
                break;
            //this is the basic zombie that resists the basic spell
            case 1:
                this.spriteName = "basiczombie";
                this.animationName = "move_Basic_Mate";
                this.resistance = 1;
                break;
            //this is the fire zombie that resists the fire spell
            case 2:
                this.spriteName = "firezombie";
                this.animationName = "move_Fire_Mate";
                this.resistance = 2;
                break;
            //this is the electric zombie that will resist the electric spell
            case 3:
                this.spriteName = "electriczombie";
                this.animationName = "move_Electric_Mate";
                this.resistance = 4;
                break;
            //this is the earth zombie that will resist earth spells
            case 4:
                this.spriteName = "earthzombie";
                this.animationName = "move_Earth_Mate";
                this.resistance = 8;
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

    running_Towards_Player(player_X, player_Y)
    {
        
    }

    hit_Player()
    {
        //if hit player == return true

        //if not hit player == return false;
    }

    colliding_With_Something(game)
    {
        if(game.overlap(this.this_Exact_Zombie, mySpells.basicSpell.entity))
        {
            console.log("jello");
            game.add.collider(this.this_Exact_Zombie, mySpells.basicSpell.entity);
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
        for(let i = 0; i < this.hit_With_Stuff.length ; i++)
        {
            if(!this.resisting_Attack(this.hit_With_Stuff[i]))
            {
                this.health -= mySpells.basicSpell.damage;
                console.log(this.health);
            }
            else
            {
                console.log("resisted attack")
            }
        }
        this.hit_With_Stuff = [];
        
        if(this.health < 1)
        {
            this.dead = true;
        }

    }
}