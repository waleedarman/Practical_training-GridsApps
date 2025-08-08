export class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

export class Square {
    constructor(side) {
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}