//Imports circle, triangle, and square classes
const { Circle, Triangle, Square } = require('./shapes');
//Tests shape classes
describe('Shape Classes', () => {
    //Ensures image code rendered by circle selection contains <circle> element
    describe('Circle', () => {
        test('should render a circle SVG element', () => {
            const circle = new Circle('blue');
            expect(circle.render()).toContain('<circle');
        });
    });
    //Ensures image code rendered by triangle selection contains <polygon> element
    describe('Triangle', () => {
        test('should render a triangle SVG element', () => {
            const triangle = new Triangle('green');
            expect(triangle.render()).toContain('<polygon');
        });
    });
//Ensures image code rendered by square selection contains <rect> element
    describe('Square', () => {
        test('should render a square SVG element', () => {
            const square = new Square('red');
            expect(square.render()).toContain('<rect');
        });
    });
});