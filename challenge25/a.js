import { sayHiFromB } from './b.js';

export function sayHiFromA() {
  console.log("Hello from Module A");
}

export function callB() {
  console.log("A is calling B:");
  sayHiFromB(); 
}
