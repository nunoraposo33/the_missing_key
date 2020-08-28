import { Entity } from "./entity"
import { BULLET_TTL, BULLET_SPEED } from "./config"

export class Bullet extends Entity {
    constructor(x, y, rotation) {
        super(x, y, "black", 2, 2)
        this.ttl = BULLET_TTL
        this.dx = Math.cos(rotation) * BULLET_SPEED
        this.dy = Math.sin(rotation) * BULLET_SPEED
    }
}