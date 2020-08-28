export class Entity {
    constructor(x, y, color, width, height) {
        this.x = x
        this.y = y
        this.anchor = { x: 0.5, y: 0.5 }
        this.color = color
        this.width = width
        this.height = height
        this.r = function () { this.render() }
    }
}