const { Circle, Triangle, Square } = require('./shapes');

describe('Shape Classes', () => {
    describe('Circle', () => {
        test('should render a circle SVG element', () => {
            const circle = new Circle('blue');
            expect(circle.render()).toContain('<circle');
        });
    });

    describe('Triangle', () => {
        test('should render a triangle SVG element', () => {
            const triangle = new Triangle('green');
            expect(triangle.render()).toContain('<polygon');
        });
    });

    describe('Square', () => {
        test('should render a square SVG element', () => {
            const square = new Square('red');
            expect(square.render()).toContain('<rect');
        });
    });
});