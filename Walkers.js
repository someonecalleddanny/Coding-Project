class zombie_Man
{
    current_x = 200;
    current_y = 100;
    this_Exact_Zombie;
    health = 10;
    constructor(game)
    {
        
    }

    create_A_Zombie(game)
    {
        game.physics.add.sprite(this.starting_x,this.starting_y,"zombie").setScale(2.5,2);
        zombie_Movement(game);
    }

    running_Towards_Player(player_X, player_Y)
    {
        
    }

    hit_Player()
    {
        //if hit player == return true

        //if not hit player == return false;
    }
}