import * as A from './a.js';

export function sayHiFromB() {
  console.log("Hello from Module B");
}

export function callA() {
  console.log("B is calling A:");
  A.sayHiFromA();
}
