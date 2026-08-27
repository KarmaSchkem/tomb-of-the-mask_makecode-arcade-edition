function MainMenu () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Game", img`
        . . . . . . . . . . . . . . . . 
        . . . f f f . . . . f f f . . . 
        . . f c c c f f f f c c c f . . 
        . f c b b b b b b b b b b c f . 
        . f b b 1 b b b b b b 5 b b f . 
        f c b 1 1 1 b b b b 8 b 2 b c f 
        f c b b 1 b b b b b b 7 b b c f 
        f c b b b c c b b c c b b b c f 
        f c b b c 1 1 c c 1 1 c b b c f 
        f c c b c 1 1 f f 1 1 c b c c f 
        f c c b b f f . . f f b b c c f 
        . f c c f . . . . . . f c c f . 
        . . f f . . . . . . . . f f . . 
        . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Mask", img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f f f . . 
        . . . f f f 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f f f 5 5 f 5 5 f 5 f . . 
        . . . f 5 5 5 5 f 5 5 f 5 f . . 
        . . . f f f 5 5 5 5 5 5 5 f . . 
        . . f f 5 f 5 5 f f f 5 5 f . . 
        . . f 5 5 5 f 5 5 5 5 5 f f . . 
        . . f 5 5 5 f f f f f f f . . . 
        . . f 5 5 f 5 5 5 5 5 5 f . . . 
        . . f f 5 f 5 5 5 f 5 5 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Change Level", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f . . . . . f f f . . f f f 
        f 1 f . . . . . f 1 f . . f 1 f 
        f 1 f . . . . . f 1 f . . f 1 f 
        f 1 f . . . . . f 1 f . . f 1 f 
        f 1 f . . . . . f 1 f . . f 1 f 
        f 1 f . . . . . f 1 f . . f 1 f 
        f 1 f f f f f . f d 1 f f 1 d f 
        f 1 1 1 1 1 f . . f d 1 1 d f . 
        f d d d d d f . . . f d d f . . 
        f f f f f f f . . . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Settings", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f f . . . . 
        . f f f f f f f f f f f f f f . 
        . . . . . . . . . . f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . . f f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . . . . . f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Reset", img`
        . . . . f f f f f f f f . . . . 
        . f f f 5 5 5 5 5 5 5 5 f f f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 f f f f f f 5 5 5 f . 
        f 5 f 5 f f f f f f f f 5 5 5 f 
        f 5 f f f f 5 5 5 5 f f f 5 5 f 
        f 5 f f f 5 5 5 5 5 5 f f 5 5 f 
        f 5 f f f f 5 5 5 5 5 f f 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 f f 5 5 f 
        f 5 5 f f 5 5 5 5 5 5 f f 5 5 f 
        f 5 5 f f f 5 5 5 5 f f f 5 5 f 
        f 5 5 5 f f f f f f f f 5 5 5 f 
        . f 5 5 5 f f f f f f 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f f f 5 5 5 5 5 5 5 5 f f f . 
        . . . . f f f f f f f f . . . . 
        `)
    )
    miniMenu.setDimensions(myMenu, 160, 120)
    miniMenu.setTitle(myMenu, "Tomb Of The Mask")
    miniMenu.setFrame(myMenu, img`
        111111111111111111111111
        199999999999999999999991
        191111111111111111111191
        111111111111111111111111
        616996111111111111699616
        616116111111111111611616
        616666111111111111666616
        611111111111111111111116
        611111111111111111111116
        611111111111111111111116
        611111111111111111111116
        611111111111111111111116
        611111111111111111111116
        611111111111111111111116
        611111111111111111111116
        611111111111111111111116
        611111111111111111111116
        611111111111111111111116
        616996111111111111699616
        616116111111111111611616
        616666111111111111666616
        661111111111111111111166
        666666666666666666666666
        666666666666666666666666
        `)
    myMenu.setPosition(80, 60)
    miniMenu.onButtonPressed(myMenu, miniMenu.Button.A, function (selection, selectedIndex) {
        miniMenu.close(myMenu)
        if (selection == "Game") {
            LevelRequirement()
            Level(blockSettings.readNumber("Level Number"))
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (selection == "Reset") {
            game.reset()
        }
    })
}
function LevelRequirement () {
    game.splash("Level", blockSettings.readNumber("Level Number"))
    mySprite = sprites.create(img`
        f . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f f f . . 
        . . . f f f 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f f f 5 5 f 5 5 f 5 f . . 
        . . . f 5 5 5 5 f 5 5 f 5 f . . 
        . . . f f f 5 5 5 5 5 5 5 f . . 
        . . f f 5 f 5 5 f f f 5 5 f . . 
        . . f 5 5 5 f 5 5 5 5 5 f f . . 
        . . f 5 5 5 f f f f f f f . . . 
        . . f 5 5 f 5 5 5 5 5 5 f . . . 
        . . f f 5 f 5 5 5 f 5 5 f . . . 
        . . . f f f f f f f f f f . . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(mySprite)
}
function Level (_1: number) {
    tiles.setCurrentTilemap(tilemap`niveau1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 28))
    controller.moveSprite(mySprite, 10000, 10000)
}
let mySprite: Sprite = null
let myMenu: Sprite = null
MainMenu()
