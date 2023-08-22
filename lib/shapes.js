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
        const radius = 50;
        return `<circle cx='50' cy='100' r= '${radius}' fill='${this.color}' />`

    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        const points = [[150, 30], [240, 170], [60, 170]]; // Uniform points
        const pointsString = points.map(point => point.join(',')).join(' ');
        return `<polygon points='${pointsString}' fill='${this.color}' />`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        const sideLength = 100;
        const x = 150 - sideLength / 2;
        const y = 100 - sideLength / 2;
        
        return `<rect x='${x}' y='${y}' width='${sideLength}' height='${sideLength}' fill='${this.color}' />`; 
        
    }
}

module.exports = { Triangle, Circle, Square };