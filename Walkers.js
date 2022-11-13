class zombie_Man
{
    current_x = 200;
    current_y = 100;
    this_Exact_Zombie;
    health = 10;
    constructor()
    {
        
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
        }
        if(spells_Pressed[1] && game.overlap(this.this_Exact_Zombie, mySpells.fireSpell.entity))
        {
            game.add.collider(this.this_Exact_Zombie, mySpells.fireSpell.entity);
            mySpells.fireSpell.entity.destroy(true);
            console.log("hello");
        }
        if(spells_Pressed[2] && game.overlap(this.this_Exact_Zombie, mySpells.electricSpell.entity))
        {
            game.add.collider(this.this_Exact_Zombie, mySpells.electricSpell.entity);
            mySpells.electricSpell.entity.destroy(true);
            console.log("hello");
        }
        if(spells_Pressed[3] && game.overlap(this.this_Exact_Zombie, mySpells.earthSpell.entity))
        {
            game.add.collider(this.this_Exact_Zombie, mySpells.earthSpell.entity);
            mySpells.earthSpell.entity.destroy(true);
            console.log("hello");
        }

    }
}