
let pos = {x:0,y:0};
const sprite= sprites.create(img`
    cccccccc
    11111111
    22222222
    33333333
    44444444
    55555555
    66666666
    77777777
    88888888
`);
sprite.x=100;
sprite.y=20;
sprite.say("こんにちは")

scene.centerCameraAt(0,60)

let index=0;
const photos=[
    Assets.Images.IMAGE_2,
    Assets.Images.IMAGE_3,
    Assets.Images.IMAGE_NAME,
];

image.setPalette(Assets.Images.IMAGE_2.palette)
//scene.setBackgroundImage(Assets.Images.IMAGE_2.image)

scene.addBackgroundLayer(Assets.Images.IMAGE_2.image)

function imageChange(index:number){
//    scene.setBackgroundImage(photos[index].image)
    image.setPalette(photos[index].palette)
}

controller.player1.onButtonEvent(
    ControllerButton.Right,
    ControllerButtonEvent.Pressed,()=>{
        index++
        index=(index % 3 )
        imageChange(index)
        pos.x+=10;        
        scene.centerCameraAt(pos.x, pos.y)
        //scene.backgroundImage().scroll(0, -10)
        sprite.say(`INDEX=${index}`)
})

controller.player1.onButtonEvent(
    ControllerButton.Left,
    ControllerButtonEvent.Pressed, () => {
        index--
        if(index<0)index=2
        index = (index % 3)
        sprite.say(`INDEX=${index}`)
        pos.x -= 10;        
        scene.centerCameraAt(pos.x,pos.y)
        imageChange(index)
        //scene.backgroundImage().scroll(0, 10)
        
    })

controller.player1.onButtonEvent(
    ControllerButton.Up,
    ControllerButtonEvent.Pressed, () => scene.backgroundImage().scroll(0, 10)
);

controller.player1.onButtonEvent(
    ControllerButton.Down,
    ControllerButtonEvent.Pressed, () => scene.backgroundImage().scroll(0, -10)
);