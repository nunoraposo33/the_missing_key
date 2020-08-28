import { GameLoop, init, Sprite, keyPressed, initKeys, initPointer, pointerPressed } from './kontra';
import { Player } from './player'
import { MAP_HEIGTH, MAP_WIDTH } from "./config";

var element = document.createElement('canvas')
element.height = MAP_HEIGTH
element.width = MAP_WIDTH
document.body.appendChild(element)

init()

var player = Sprite(new Player(50, 50))
var entities = []

initKeys()
initPointer()

let loop = GameLoop({
    update: function () {

        entities.forEach(function (e) {
            e.update()
        })

        player.update()

        if (keyPressed('space') || pointerPressed("left")) {
            var b = player.shoot()
            if (b) {
                entities.push(Sprite(b))
            }
        }

        entities = entities.filter(e => e.ttl > 0)
    },

    render: function () {
        entities.forEach(function (e) {
            e.render()
        })

        player.render();
    }
});

loop.start();    