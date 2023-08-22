class Shape {
    constructor (color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {

    }
}

class Triangle extends Shape {
    constructor(points, color) {
        super(color);
        this.points = points;
    }
    render() {
        
    }
}

class Square extends Shape {
    constructor(sideLength, color) {
        super(color);
        this.sideLength = sideLength;
    }
    render() {
        
    }
}

module.exports = { Triangle, Circle, Square };