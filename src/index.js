import { init, GameLoop, Sprite, initKeys, initPointer, pointerPressed } from 'kontra';
import { Player } from './app/player'

init();

var p = Sprite(new Player(50, 50))
var s = []

initKeys()
initPointer()

GameLoop({
    update: () => {
        s.forEach(e => e.update())
        p.update()

        if (pointerPressed("left")) {
            var b = p.shoot()
            if (b) s.push(Sprite(b))
        }

        s = s.filter(e => e.ttl > 0)
    },

    render: function () {
        s.forEach(e => e.r())
        p.r();
    }
}).start()
