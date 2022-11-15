class zombie_Man
{
    current_x = 200;
    current_y = 100;

    this_Exact_Zombie;
    spriteName;
    animationName;
    resistance;
    speed;
    

    health = 6;
    dead = false;
    constructor()
    {
        
    }

    type_Of_Zombie(picking_Zombie)
    {
        switch(picking_Zombie)
        {
            //this will be the normal zombie with no resistances
            case 0:
                this.spriteName = "zombie";
                this.animationName = "move_Mate";
                this.resistance = 0;
                break;
            case 1:
                this.spriteName = "basiczombie";
                this.animationName = "move_Basic_Mate";
                this.resistance = 1;
                break;
            case 2:
                this.spriteName = "firezombie";
                this.animationName = "move_Fire_Mate";
                this.resistance = 2;
                break;
            case 3:
                this.spriteName = "electriczombie";
                this.animationName = "move_Electric_Mate";
                this.resistance = 4;
                break;
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
        if(spell_hit & resistance)
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

    lose_Health(game)
    {
        
        //this.this_Exact_Zombie.setVelocityX(-50).setBounce(1,1);
        //mySpells.basicSpell.entity.destroy(true);
        if(spells_Pressed[0] && game.overlap(this.this_Exact_Zombie, mySpells.basicSpell.entity))
        {
            game.add.collider(this.this_Exact_Zombie, mySpells.basicSpell.entity);
            mySpells.basicSpell.entity.destroy(true);
            console.log("hello");
            this.health -= mySpells.basicSpell.damage;
            console.log(this.health);
        }
        if(spells_Pressed[1] && game.overlap(this.this_Exact_Zombie, mySpells.fireSpell.entity))
        {
            game.add.collider(this.this_Exact_Zombie, mySpells.fireSpell.entity);
            mySpells.fireSpell.entity.destroy(true);
            console.log("hello");
            this.health -= mySpells.fireSpell.damage;
            console.log(this.health);
        }
        if(spells_Pressed[2] && game.overlap(this.this_Exact_Zombie, mySpells.electricSpell.entity))
        {
            game.add.collider(this.this_Exact_Zombie, mySpells.electricSpell.entity);
            mySpells.electricSpell.entity.destroy(true);
            console.log("hello");
            this.health -= mySpells.electricSpell.damage;
            console.log(this.health);
        }
        if(spells_Pressed[3] && game.overlap(this.this_Exact_Zombie, mySpells.earthSpell.entity))
        {
            game.add.collider(this.this_Exact_Zombie, mySpells.earthSpell.entity);
            mySpells.earthSpell.entity.destroy(true);
            console.log("hello");
            this.health -= mySpells.earthSpell.damage;
            console.log(this.health);
        }

        if(this.health < 1)
        {
            this.dead = true;
        }

    }
}