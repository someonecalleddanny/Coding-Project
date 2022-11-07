//global changeable speed of x and y for the mc
let xMovement = 80;
let yMovement = 80;

function moveTheLad(player)
        {    
                   
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
                if(cursors.up.isDown || keyW.isDown)
                {
                    player.setVelocityY(-yMovement);
                    check_For_Opposite_Buttons(player)
                }
                else if(cursors.down.isDown || keyS.isDown)
                {
                    player.setVelocityY(yMovement);
                }
                else
                {
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
            if ((cursors.up.isDown || keyW.isDown) && player.body.touching.down)
            {
                return "weirdThing"
            }
        }

        function check_For_Opposite_Buttons(player)
        {
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
