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