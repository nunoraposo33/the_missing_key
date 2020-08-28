import { PLAYER_RADIUS, PLAYER_SPEED, MAP_WIDTH, MAP_HEIGTH, PLAYER_FIRE_SPEED } from './config'
import { getPointer, degToRad, keyPressed } from './kontra';
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
            this.lookAtMouse()

            if (keyPressed('right') || keyPressed('d')) {
                this.moveRight()
            }

            if (keyPressed('left') || keyPressed('a')) {
                this.moveLeft()
            }

            if (keyPressed('top') || keyPressed('w')) {
                this.moveUp()
            }

            if (keyPressed('down') || keyPressed('s')) {
                this.moveDown()
            }
        }

        /** Validations */
        this.canMoveRight = function () {
            return this.x + PLAYER_SPEED + PLAYER_RADIUS < MAP_WIDTH
        }

        this.canMoveLeft = function () {
            return this.x - PLAYER_RADIUS - PLAYER_SPEED > 0
        }

        this.canMoveUp = function () {
            return this.y - PLAYER_RADIUS - PLAYER_SPEED > 0
        }

        this.canMoveDown = function () {
            return this.y + PLAYER_SPEED + PLAYER_RADIUS < MAP_HEIGTH
        }

        /** Movement */
        this.moveRight = function () {
            if (this.canMoveRight()) {
                this.x += PLAYER_SPEED
            }
        }

        this.moveLeft = function () {
            if (this.canMoveLeft()) {
                this.x -= PLAYER_SPEED
            }
        }

        this.moveUp = function () {
            if (this.canMoveUp()) {
                this.y -= PLAYER_SPEED
            }
        }

        this.moveDown = function () {
            if (this.canMoveDown()) {
                this.y += PLAYER_SPEED
            }
        }

        this.shoot = function () {
            if (!this.gunTimeout) {
                this.gunTimeout = setTimeout(() => {
                    this.gunTimeout = null
                }, PLAYER_FIRE_SPEED)
                return new Bullet(this.x, this.y, this.rotation)
            } else {
                return null
            }
        }

        this.lookAtMouse = function () {
            const { x, y } = getPointer()
            this.rotation = degToRad(Math.atan2(y - this.y, x - this.x) * 180 / Math.PI)
        }
    }
}