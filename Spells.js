// Spells
class Spells
{
    /*This needs to be Updated if I add more spells (need to have all same numbers): current spells = 4, GameManager = 4 booleans for 
    spells to destroy
    */
    constructor()
    {

    }

    basicSpell = 
    {
        entity : "placement",
        created : false,
        damage : 1,
        speed : 180,
        manaCost : 5
    }

    fireSpell = 
    {
        entity : "placement",
        created : false,
        damage : 2,
        speed : 100,
        manaCost : 10
    }

    electricSpell = 
    {
        entity : "placement",
        created : false,
        damage : 3,
        speed : 300,
        manaCost : 20
    }

    earthSpell = 
    {
        entity : "placement",
        created : false,
        damage : 2,
        speed : 90,
        manaCost : 7
    }
}

//this is a global variable to be used in remembering the last direction moved it is used right below
var holdingDirection = "right";

function casting_Spells(game)
{

    /*This if statement reads the direction moving in the PlayerMovement script which returns a specific string
    such as "up". This if statement keeps updating the current direction that the player is moving. If the player is not moving,
    It will not read the returned "notMoving" string. This is used for firing a spell when the player has stopped moving. */
    if(direction_Moving() != "notMoving")
    {
        holdingDirection = direction_Moving();
    }

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
        if(!spells_Pressed[0] && checking_Spell_Cost(mySpells.basicSpell.manaCost) > -1)
        {
            //adds the normal spell sprite
            mySpells.basicSpell.entity = game.physics.add.sprite(player.x, player.y, 'normalSpell');
            mySpells.basicSpell.created = true;
            myMainMan.extraStats.mana -= mySpells.basicSpell.manaCost;
            console.log(myMainMan.extraStats.mana);

            shooting_Spell(mySpells.basicSpell.speed, mySpells.basicSpell.entity);
            
            

            //Go to Explanation 2:
            spells_Pressed[0] = true;
        }
    }

    //2 is pressed
    if(key2.isDown)
    {
        //Go to Explanation 1:
        if(!spells_Pressed[1] && checking_Spell_Cost(mySpells.fireSpell.manaCost) > -1)
        {
            //adds the fire spell sprite
            mySpells.fireSpell.entity = game.physics.add.sprite(player.x, player.y, 'fire');
            mySpells.fireSpell.created = true;
            myMainMan.extraStats.mana -= mySpells.fireSpell.manaCost;
            console.log(myMainMan.extraStats.mana);

            shooting_Spell(mySpells.fireSpell.speed,  mySpells.fireSpell.entity);

            //Go to Explanation 2:
            spells_Pressed[1] = true;
        }
    }

    //3 is pressed
    if(key3.isDown)
    {
        //Go to Explanation 1:
        if(!spells_Pressed[2] && checking_Spell_Cost(mySpells.electricSpell.manaCost) > -1)
        {
            //adds the electric spell sprite
            mySpells.electricSpell.entity = game.physics.add.sprite(player.x, player.y, 'electric');
            mySpells.fireSpell.created = true;
            myMainMan.extraStats.mana -= mySpells.electricSpell.manaCost;
            console.log(myMainMan.extraStats.mana);
            shooting_Spell(mySpells.electricSpell.speed, mySpells.electricSpell.entity);

            //Go to Explanation 2:
            spells_Pressed[2] = true;
        }
    }

    //4 is pressed
    if(key4.isDown)
    {
        //Go to Explanation 1:
        if(!spells_Pressed[3] &&  checking_Spell_Cost(mySpells.earthSpell.manaCost) > -1)
        {
            //adds the earth spell sprite
            mySpells.earthSpell.entity = game.physics.add.sprite(player.x, player.y, 'earth');
            mySpells.earthSpell.created = true;
            myMainMan.extraStats.mana -= mySpells.earthSpell.manaCost;
            console.log(myMainMan.extraStats.mana);
            shooting_Spell(mySpells.earthSpell.speed, mySpells.earthSpell.entity);
            
            //Go to Explanation 2:
            spells_Pressed[3] = true;
        }
    }

    /*the if statements above aren't put into else if statements due to the fact that I want the player to be able to press multiple
    at once*/

    //calls the function below
    //timedEvent = game.time.addEvent({ delay: 500, callback: shooting_Spell, callbackScope: this, loop: true });
    
    check_Keys();
    //The function being called
    function check_Keys()
    {
        //console.log("i am here");

        /*if the keys aren't being pressed and the booleans are true for the number keys being pressed which was turned true in the code
        above, these series of if statements will be activated */

        /*These if statements will basically destroy the spell game objects. The appropriate boolean elements in the boolean array will
        be set to false which will ensure that the objects can be created again when the appropriate keys are pressed.
        Also, this ensures that the spells that aren't being pressed actually have a sprite value as the player can
        have the keys up at any point in the game but not necessarily wanting to shoot the spell. This will stop the referencing issues
        from happening. */
        if((key1.isUp) && (spells_Pressed[0]))
        {
            mySpells.basicSpell.entity.destroy(true);
            mySpells.basicSpell.created = false;
            spells_Pressed[0] = false;
        }

        if((key2.isUp) && (spells_Pressed[1]))
        {
            mySpells.fireSpell.entity.destroy(true);
            mySpells.fireSpell.created = false;
            spells_Pressed[1] = false;
        }

        if((key3.isUp) && (spells_Pressed[2]))
        {
            mySpells.electricSpell.entity.destroy(true);
            mySpells.electricSpell.created = false;
            spells_Pressed[2] = false;
        }

        if((key4.isUp) && (spells_Pressed[3]))
        {
            mySpells.earthSpell.entity.destroy(true);
            mySpells.earthSpell.created = false;
            spells_Pressed[3] = false;
        }   
    }
}

function shooting_Spell(desired_Speed, spell)
{   
    //This is similar to the movement script for the main character
    switch(direction_Moving())
    {
        case "right":
            spell.setVelocityX(desired_Speed);
            diagonalShooting()
            break;
        case "left":
            spell.setVelocityX(-desired_Speed);
            diagonalShooting()
            break;
        case "up":
            spell.setVelocityY(-desired_Speed);
            diagonalShooting()
            break;
        case "down":
            spell.setVelocityY(desired_Speed);
            diagonalShooting()
            break;
        default:
            switch(holdingDirection)
            {
                case "right":
                    spell.setVelocityX(desired_Speed);
                    diagonalShooting()
                    break;
                case "left":
                    spell.setVelocityX(-desired_Speed);
                    diagonalShooting()
                    break;
                case "up":
                    spell.setVelocityY(-desired_Speed);
                    diagonalShooting()
                    break;
                case "down":
                    spell.setVelocityY(desired_Speed);
                    diagonalShooting()
                    break;
            }
    }

    /*this function is similar to the "diagonalMovement" function in the "PlayerMovement" script. The difference is that it will get
    the number from the global variable in there. 1 means moving diagonally up. 2 means diagonally down. 0 means no diagonal.*/
    function diagonalShooting()
    {
        //see the currentDiagonal variable in the PlayerMovement script
        if(currentDiagonal == 1)
        {
            spell.setVelocityY(-desired_Speed);
        }
        else if(currentDiagonal == 2)
        {
            spell.setVelocityY(desired_Speed);
        }
        else
        {
            spell.setVelocityY(0);
        }
    }
    
}

function checking_Spell_Cost(spellCost)
{
    return  myMainMan.extraStats.mana - spellCost;
}