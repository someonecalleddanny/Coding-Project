class Spells
{
    constructor()
    {

    }

    basicSpell()
    {

    }

    fireSpell()
    {

    }

    electricSpell()
    {

    }

    earthSpell()
    {

    }
}

function casting_Spells(game)
{
        //Explanation 1:
        /*I have to wrap the creation of a spell sprite in an array of booleans due to the fact that phaser and JS have different
        ways of destroying an object. From my understanding, new references are made each time a new spell game object is created.
        Then, when I try to destroy that object, it leaves a silent error when the update function goes onto its next cycle. By
        returning these booleans with a false, it ensures that no new spell objects have new references. By having this thought process,
        the spells do disappear when I stop pressing the number keys.
         */
        //Explanation 2:
        /*By setting the elements in the boolean array to true, it ensures what the explanation above explains. To reiterate, If the
        relevent key is pressed, the associated boolean value (e.g 0 represents the normal spell object) is activated to true which 
        means that no new reference is created for the same game object */
    //1 is pressed
    if(key1.isDown)
    {
        //Go to Explanation 1:
        if(!spells_Pressed[0])
        {
            //adds the normal spell sprite
            normalSpell = game.physics.add.sprite(300, 450, 'normalSpell');
            //Go to Explanation 2:
            spells_Pressed[0] = true;
        }
    }

    //2 is pressed
    if(key2.isDown)
    {
        //Go to Explanation 1:
        if(!spells_Pressed[1])
        {
            //adds the fire spell sprite
            fire = game.physics.add.sprite(500, 450, 'fire');
            //Go to Explanation 2:
            spells_Pressed[1] = true;
        }
    }

    //3 is pressed
    if(key3.isDown)
    {
        //Go to Explanation 1:
        if(!spells_Pressed[2])
        {
            //adds the electric spell sprite
            electric = game.physics.add.sprite(600, 450, 'electric');
            //Go to Explanation 2:
            spells_Pressed[2] = true;
        }
    }

    //4 is pressed
    if(key4.isDown)
    {
        //Go to Explanation 1:
        if(!spells_Pressed[3])
        {
            //adds the earth spell sprite
            earth = game.physics.add.sprite(700, 450, 'earth');
            //Go to Explanation 2:
            spells_Pressed[3] = true;
        }
    }

    /*the if statements above aren't put into else if statements due to the fact that I want the player to be able to press multiple
    at once*/

    check_Keys();

    function check_Keys()
    {
        console.log("i am here");
        if((key1.isUp) && (spells_Pressed[0]))
        {
            console.log("i am here");
            normalSpell.destroy(true);
            spells_Pressed[0] = false;
        }

        if((key2.isUp) && (spells_Pressed[1]))
        {
            fire.destroy(true);
            spells_Pressed[1] = false;
        }

        if((key3.isUp) && (spells_Pressed[2]))
        {
            electric.destroy(true);
            spells_Pressed[2] = false;
        }

        if((key4.isUp) && (spells_Pressed[3]))
        {
            earth.destroy(true);
            spells_Pressed[3] = false;
        }   
    }
    /*if(spells_Pressed[0])
    {
        if(key1.isUp)
        {
            normalSpell.destroy(true);
            spells_Pressed[0] = false;
        }
    }
    else if(spells_Pressed[1])
    {
        if(key2.isUp)
        {
            fire.destroy(true);
            spells_Pressed[1] = false;
        }
    }
    else if(spells_Pressed[2])
    {
        if(key3.isUp)
        {
            electric.destroy(true);
            spells_Pressed[2] = false;
        }
    }
    else if(spells_Pressed[3])
    {
        if(key4.isUp)
        {
            earth.destroy(true);
            spells_Pressed[3] = false;
        }   
    }*/
}