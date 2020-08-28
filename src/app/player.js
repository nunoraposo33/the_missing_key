import { getPointer, degToRad, keyPressed } from 'kontra';
import { PLAYER_RADIUS, PLAYER_SPEED, MAP_WIDTH, MAP_HEIGTH, PLAYER_FIRE_SPEED } from './config'
import { Entity } from "./entity";
import { Bullet } from "./bullet";
import { drawHuman } from "./drawHuman";

export class Player extends Entity {
    constructor(x, y) {
        super(x, y, '', 0, 0)
        this.gunTimeout = null
        this.radius = PLAYER_RADIUS
        this.anchor = { x: 0, y: 0 }

        this.render = function () {
            drawHuman(this.context, "green")
        }

        this.update = function () {
            this.look()

            if ((keyPressed('d')) && (this.x + PLAYER_SPEED + PLAYER_RADIUS < MAP_WIDTH)) {
                this.x += PLAYER_SPEED
            }

            if ((keyPressed('a')) && (this.x - PLAYER_RADIUS - PLAYER_SPEED > 0)) {
                this.x -= PLAYER_SPEED
            }

            if ((keyPressed('w')) && (this.y - PLAYER_RADIUS - PLAYER_SPEED > 0)) {
                this.y -= PLAYER_SPEED
            }

            if ((keyPressed('s')) && (this.y + PLAYER_SPEED + PLAYER_RADIUS < MAP_HEIGTH)) {
                this.y += PLAYER_SPEED
            }
        }

        this.shoot = function () {
            if (!this.gunTimeout) {
                this.gunTimeout = setTimeout(() => {
                    this.gunTimeout = null
                }, PLAYER_FIRE_SPEED)
                return new Bullet(this.x, this.y, this.rotation)
            }
            return null
        }

        this.look = function () {
            let p = getPointer()
            this.rotation = degToRad(Math.atan2(p.y - this.y, p.x - this.x) * 180 / Math.PI)
        }
    }
}