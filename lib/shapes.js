class Shape {
    constructor (color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<circle cx='150' cy='100' r='80' fill='${this.color}' />`

    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        const points = [[150, 30], [240, 170], [60, 170]];
        const pointsString = points.map(point => point.join(',')).join(' ');
        return `<polygon points='${pointsString}' fill='${this.color}' />`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<rect x='90' y='40' width='120' height='120' fill='${this.color}' />`; 
    }
}

module.exports = { Triangle, Circle, Square };