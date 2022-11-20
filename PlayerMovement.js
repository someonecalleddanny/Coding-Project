//global changeable speed of x and y for the mc
const defaultMovement = 80;
let xMovement = defaultMovement;
let yMovement = defaultMovement;

//Changeable dash variables
let dashMultiplier = 3;
let dashMinuser = 0.1;
let dashCost = 10;
let currentlyDashing = false;

//global variables to check if a player is moving diagonally
let currentDiagonal = 0;


function moveTheLad(player)
        {    
            /*I used a switch statement here due to the fact that it is more readable and there being a repeated data type being checked
            . This most likely will have a gain in efficency but this is JavaScript not C++.*/  
            if(!check_For_Opposite_Buttons(player))
            {
                switch(direction_Moving())
                {
                    //moving left
                    case "left":
                        player.setVelocityX(-xMovement);
                        //pressing multiple buttons
                        diagonalMovement();
                        player.anims.play('left', true);  
                        break;
                    //moving right
                    case "right":
                        player.setVelocityX(xMovement);
                        //pressing multiple buttons
                        diagonalMovement();
                        player.anims.play('right', true);
                        break;
                    //moving up
                    case "up":
                        player.setVelocityY(-yMovement);
                        player.setVelocityX(0);
                        diagonalMovement();
                        break;
                    //moving down
                    case "down":
                        player.setVelocityY(yMovement);
                        player.setVelocityX(0);
                        diagonalMovement();
                        break;
                    //weird thing
                    case "weirdThing":
                        player.setVelocityY(-330);
                        break;
                    //default to this if no buttons have been inputted
                    default:
                        player.setVelocityX(0);
                        player.setVelocityY(0);
                        player.anims.play('turn');
                        break;
                }

            function diagonalMovement()
            {
                //checks if the player is moving up
                if(cursors.up.isDown || keyW.isDown)
                {
                    player.setVelocityY(-yMovement);
                    currentDiagonal = 1;
                }
                //checks if the player is moving down
                else if(cursors.down.isDown || keyS.isDown)
                {
                    player.setVelocityY(yMovement);
                    currentDiagonal = 2;
                }
                //checks if the player isn't moving diagonally at all
                else
                {
                    currentDiagonal = 0;
                    player.setVelocityY(0);
                }
            }
            }
        }

        function direction_Moving()
        {
            //moving left
            if (cursors.left.isDown || keyA.isDown)
            {
                return "left";
            }
            //moving right
            else if (cursors.right.isDown || keyD.isDown)
            {
                return "right";
            }
            //moving up
            else if(cursors.up.isDown || keyW.isDown)
            {
                return "up";
            }
            //moving down
            else if(cursors.down.isDown || keyS.isDown)
            {
                return "down";
            }
            else
            {
                return "notMoving"
            }
            /*if ((cursors.up.isDown || keyW.isDown) && player.body.touching.down)
            {
                return "weirdThing"
            }*/
        }

        function check_For_Opposite_Buttons(player)
        {
            //This checks if the opposite keys are pressed to eliminate glitchy movement
            if((cursors.left.isDown || keyA.isDown) && (cursors.right.isDown || keyD.isDown))
            {
                player.setVelocityX(0);
                player.setVelocityY(0);
                player.anims.play('turn');
                
                return true;
            }
            else if((cursors.up.isDown || keyW.isDown) && (cursors.down.isDown || keyS.isDown))
            {
                player.setVelocityX(0);
                player.setVelocityY(0);
                player.anims.play('turn');
                
                return true;
            }
            else
            {
                return false;
            }
        }

        function dash_The_Lad()
        {
            /*if(xMovement > defaultMovement)
            {
                xMovement -= dashMinuser;
            }
            if(yMovement > defaultMovement)
            {
                yMovement -= dashMinuser;
            }*/
            

            if (keyShift.isDown && myMainMan.extraStats.mana - dashCost > -1)// Phaser.Input.Keyboard.JustDown(keyShift)
            {
                console.log("Dashing");
                switch(direction_Moving())
                {
                    case "right":
                        player.setVelocityX((xMovement * dashMultiplier))
                        //xMovement = defaultMovement * dashMultiplier;
                        //myMainMan.extraStats.mana -= dashCost;
                        currentlyDashing = true;
                        diagonalDashing();
                        break;

                    case "left":
                        //xMovement = (defaultMovement * dashMultiplier);
                        player.setVelocityX(-(xMovement * dashMultiplier))
                        //myMainMan.extraStats.mana -= dashCost;
                        currentlyDashing = true;
                        diagonalDashing();
                        break;

                    case "up":
                        player.setVelocityY(-(yMovement * dashMultiplier));
                        currentlyDashing = true;
                        //yMovement = (defaultMovement * dashMultiplier);
                        //myMainMan.extraStats.mana -= dashCost;
                        break;

                    case "down":
                        player.setVelocityY((yMovement * dashMultiplier))
                        currentlyDashing = true;
                        //yMovement = defaultMovement * dashMultiplier
                        //myMainMan.extraStats.mana -= dashCost;
                        break;
                }

                if(dashMultiplier > 1)
                {
                    dashMultiplier -= dashMinuser;
                }

                function diagonalDashing()
                {
                    //see the currentDiagonal variable in the PlayerMovement script
                    if(currentDiagonal == 1)
                    {
                        //yMovement = (defaultMovement * dashMultiplier);
                        player.setVelocityY(-(yMovement * dashMultiplier));
                    }
                    else if(currentDiagonal == 2)
                    {
                        //yMovement = (defaultMovement * dashMultiplier);
                        player.setVelocityY((yMovement * dashMultiplier));
                    }
                    else
                    {
                        player.setVelocityY(0);
                    }
                }
                
            }
            else
            {
                if(currentlyDashing)
                {
                    myMainMan.extraStats.mana -= dashCost;
                    currentlyDashing = false;
                }
                dashMultiplier = 3;
            }
        }

    
    //This class does the same thing as above. More complex but not efficient. I guess this is a weird flex.
    //class name references a famous Tyler Fortnite-Ninja Blevins quote
    /*class imNotSeeingEnoughMovement
    {
        //constructor gets the player variable as the argument from the html doc
        constructor(player)
        {
            //checks if the player is currently using the wasd/arrow keys
            if(this.check_For_WASD())
            {
                this.wasdMoving(player)
            }
            else if(this.check_For_Cursors)
            {
                this.moveTheLad(player)
            }
        }

        moveTheLad(player)
        {            
            //moving left
            if (cursors.left.isDown)
            {
                player.setVelocityX(-xMovement);
                //pressing multiple buttons
                diagonalMovement();
                player.anims.play('left', true);
            }
            //moving right
            else if (cursors.right.isDown)
            {
                player.setVelocityX(xMovement);
                //pressing multiple buttons
                diagonalMovement();
                player.anims.play('right', true);
            }
            //moving up
            else if(cursors.up.isDown)
            {
                player.setVelocityY(-yMovement);
                player.setVelocityX(0);
            }
            //moving down
            else if(cursors.down.isDown)
            {
                player.setVelocityY(yMovement);   
                player.setVelocityX(0);
            }

            else
            {
                player.setVelocityX(0);
                player.setVelocityY(0);
                player.anims.play('turn');
            }

            if (cursors.up.isDown && player.body.touching.down)
            {
                player.setVelocityY(-330);
            }

            function diagonalMovement()
            {
                if(cursors.up.isDown)
                {
                    player.setVelocityY(-yMovement);
                }
                else if(cursors.down.isDown)
                {
                    player.setVelocityY(yMovement);
                }
                else
                {
                    player.setVelocityY(0);
                }
            }
        }

        wasdMoving(player)
        {
            //moving left
            if (keyA.isDown)
            {
                player.setVelocityX(-xMovement);
                //pressing multiple buttons
                diagonalMovement();
                player.anims.play('left', true);
            }
            //moving right
            else if (keyD.isDown)
            {
                player.setVelocityX(xMovement);
                //pressing multiple buttons
                diagonalMovement();
                player.anims.play('right', true);
            }
            //moving up
            else if(keyW.isDown)
            {
                player.setVelocityY(-yMovement);
                player.setVelocityX(0);
            }
            //moving down
            else if(keyS.isDown)
            {
                player.setVelocityY(yMovement);   
                player.setVelocityX(0);
            }

            else
            {
                player.setVelocityX(0);
                player.setVelocityY(0);
                player.anims.play('turn');
            }

            if (keyW.isDown && player.body.touching.down)
            {
                player.setVelocityY(-330);
            }

        function diagonalMovement()
        {
            if(keyW.isDown)
            {
                player.setVelocityY(-yMovement);
            }
            else if(keyS.isDown)
            {
                player.setVelocityY(yMovement);
            }
            else
            {
                player.setVelocityY(0);
            }
        }
        }

            check_For_Cursors()
            {
                if((cursors.up.isDown || cursors.down.isDown || cursors.left.isDown || cursors.right.isDown))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }

            check_For_WASD()
            {
                if((keyA.isDown || keyW.isDown || keyD.isDown || keyS.isDown))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }

    }*/

    //the old moving script before using a switch statement
                /*
            //moving left
            if (direction_Moving() == "left")
            {
                player.setVelocityX(-xMovement);
                //pressing multiple buttons
                diagonalMovement();
                player.anims.play('left', true);
            }
            //moving right
            else if (cursors.right.isDown || keyD.isDown)
            {
                player.setVelocityX(xMovement);
                //pressing multiple buttons
                diagonalMovement();
                player.anims.play('right', true);
            }
            //moving up
            else if(cursors.up.isDown || keyW.isDown)
            {
                player.setVelocityY(-yMovement);
                player.setVelocityX(0);
            }
            //moving down
            else if(cursors.down.isDown || keyS.isDown)
            {
                player.setVelocityY(yMovement);   
                player.setVelocityX(0);
            }

            else
            {
                player.setVelocityX(0);
                player.setVelocityY(0);
                player.anims.play('turn');
            }

            if ((cursors.up.isDown || keyW.isDown) && player.body.touching.down)
            {
                player.setVelocityY(-330);
            }*/
