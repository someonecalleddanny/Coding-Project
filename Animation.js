//animation for the main character
function mcAnim(mcAnim)
{
    mcAnim.anims.create({
        key: 'left',
        frames: mcAnim.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    mcAnim.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    mcAnim.anims.create({
        key: 'right',
        frames: mcAnim.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
}
//animation for the zombie man
function zombie_Movement(zomAnim)
{
    zomAnim.anims.create({
        key: 'move_Mate',
        frames: zomAnim.anims.generateFrameNumbers('zombie', { start: 0, end: 4 }),
        frameRate: 12,
        repeat: 1
    });

    zomAnim.anims.create({
        key: 'move_Basic_Mate',
        frames: zomAnim.anims.generateFrameNumbers('basiczombie', { start: 0, end: 4 }),
        frameRate: 12,
        repeat: 1
    });
    zomAnim.anims.create({
        key: 'move_Fire_Mate',
        frames: zomAnim.anims.generateFrameNumbers('firezombie', { start: 0, end: 4 }),
        frameRate: 12,
        repeat: 1
    });
    zomAnim.anims.create({
        key: 'move_Electric_Mate',
        frames: zomAnim.anims.generateFrameNumbers('electriczombie', { start: 0, end: 4 }),
        frameRate: 12,
        repeat: 1
    });
    zomAnim.anims.create({
        key: 'move_Earth_Mate',
        frames: zomAnim.anims.generateFrameNumbers('earthzombie', { start: 0, end: 4 }),
        frameRate: 12,
        repeat: 1
    });

}

function skill_Issue(noSkillAnim)
{
    noSkillAnim.anims.create({
        key: 'takel',
        frames: noSkillAnim.anims.generateFrameNumbers('l', { start: 0, end: 7 }),
        frameRate: 12,
        repeat: 1
    });
}
