//Universal class 'Shape' that takes color as an argument and passes it to all inheriting classes. Also passes the setColorMethod.
class Shape {
    constructor (color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
}
//Circle inherits its handling of the color argument and returns html text with the proper color fill
class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<circle cx='150' cy='100' r='80' fill='${this.color}' />`

    }
}
//Triangle inherits its handling of the color argument and returns html text with shape parameters necessary for a triangle + the proper color fill
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
//Square inherits its handling of the color argument and returns html text with the proper color fill
class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<rect x='90' y='40' width='120' height='120' fill='${this.color}' />`; 
    }
}
//Exports the classes of Triangle, Circle, and Square
module.exports = { Triangle, Circle, Square };