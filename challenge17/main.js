import { Circle, Square } from './shapes.js';

const circle = new Circle(5);
const square = new Square(4);

console.log(`Circle area: ${circle.area().toFixed(2)}`);
console.log(`Square area: ${square.area()}`);