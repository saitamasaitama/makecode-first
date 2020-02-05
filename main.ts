controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    index += 1
    index = index % 3
//    imageChange(index)
    // scene.centerCameraAt(pos.x, pos.y)
    // scene.backgroundImage().scroll(0, -10)
    sprite.say(`POS=${sprite.x} ${sprite.y}`)
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
	
})
/*
function imageChange (index: number) {
    scene.setBackgroundImage(img`
        a 6 e 4 a e . a 7 e
    `)
    image.setPalette(photos[index].palette)
}
*/
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {

})


interface palettedimage{
    image: Image,
    palette:Buffer
}


const phots:palettedimage[]=[
    Assets.Images.IMAGE_1,
    Assets.Images.IMAGE_2,
    Assets.Images.IMAGE_3,
];

let sprite: Sprite =sprites.create(Assets.Images.BPImage.image);
image.setPalette(Assets.Images.BPImage.palette)
let index=0
let pos = {x:0,y:0};
let arrow= sprites.create(img`
    c c c c c c c c
    1 1 1 . . 1 1 1
    2 2 2 . . 2 2 2
    3 3 3 . . 3 3 3
    4 4 4 4 4 4 4 4
    5 5 5 f f 5 5 5
    6 6 6 f f 6 6 6
    7 7 7 f f 7 7 7
    8 8 8 f f 8 8 8
`, 0)
sprite.x = sprite.width >> 1;
sprite.y = sprite.height >> 1;
//arrow.say("こんにちは")
// color.setPalette(palette) scene.centerCameraAt(0,0)
sprite.z = 0

game.onUpdate(()=>{
    index++;
    index=index%3
    //sprite.setImage(img)
    sprite = sprites.create(phots[index].image);
    
})


controller.moveSprite(arrow)
scene.cameraFollowSprite(arrow)
scene.setTileMap(img`
    . . . . . . . . . . . . . . . . . . . .
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . .
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . .
    1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . .
    2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . .
    3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . .
    1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . .
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . .
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . .
    9 9 9 9 9 9 9 9 9 9 9 9 . . . . . . . .
    . . . . . . . . . . . . . . . . . . . .
`, TileScale.ThirtyTwo)
