function player () {
    zeBest = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 3 1 . . . . 
. . . . . . . 3 3 1 3 1 3 3 . . 
. . . . . 3 1 1 3 1 3 1 3 3 . . 
. . . 3 1 3 3 1 3 1 3 1 3 3 3 . 
. . 1 3 1 1 3 1 3 1 3 1 3 3 3 . 
. 3 1 3 3 1 3 1 3 1 3 1 3 3 3 . 
. 3 1 1 3 1 3 1 3 1 3 1 3 3 . . 
. 3 3 1 e e e e e 1 3 1 3 3 . . 
. 3 3 3 e e 3 e e 1 3 1 . . . . 
. . . 3 e 3 e 3 e . . . . . . . 
. . . . e e 1 e e . . . . . . . 
. . . . e e e e e . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    zeBest.setPosition(78, 101)
    controller.moveSprite(zeBest, 100, 100)
    info.changeScoreBy(1)
}
function projectile () {
    projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . 8 8 8 8 8 8 8 8 . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 . . . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
. . . 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, zeBest, 0, 50)
    projectile2.setPosition(0, Math.randomRange(0, 120))
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
	
})
let projectile2: Sprite = null
let zeBest: Sprite = null
player()
projectile()
game.onUpdate(function () {
	
})
