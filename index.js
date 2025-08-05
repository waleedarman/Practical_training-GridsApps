// 1. Create a Promise
let my_Promise = new Promise((resolve) => {
setTimeout(() => {
resolve("Success");
}, 2000); 
});
my_Promise.then((message) => {
console.log(message);
});

// 2. Handle Promise Rejection
let Rejected_Promise = new Promise((resolve, reject) => { 
setTimeout(() => {
reject("Something went wrong");
}, 1000); 
});

Rejected_Promise.catch((errorMessage) => {
console.log("Error: " + errorMessage);
});

// 3. Chain Multiple Promises
const first = Promise.resolve("First");
const second = Promise.resolve("Second");

first.then(result1 => {
console.log(result1);
return second;
})
.then(result2 => {
console.log(result2);
});

// 4. Promise with finally() 
const promise = Promise.resolve("Done");
promise.then(result => console.log(result))
.finally(() => console.log("Promise settled"));

// 5. Promise.all() to Fetch Multiple APIs 
const api1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
const api2 = fetch("https://jsonplaceholder.typicode.com/posts/2");
Promise.all([api1, api2])
.then(responses => Promise.all(responses.map(res => res.json())))
.then(data => console.log(data))
.catch(error => console.error(error));
// 6. Basic Async/Await Example
async function getUser() {
const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
const data = await res.json();
console.log(data);
}
getUser();

// 7. Async Function with Error Handling
async function fetchData() {
try {
const res = await fetch("https://jsonplaaaaaaaaaaaaaaceholder.typicode.com/users/1");
const data = await res.json();
console.log(data);
} catch (error) {
console.log("Fetch failed");
}
}
fetchData();

// 8. Convert Callback-based Function to Async/Await 
function delayedCallback(ms) {
return new Promise(resolve => {
setTimeout(() => resolve("Done"), ms);
});
}
async function run() {
const result = await delayedCallback(1000);
console.log(result);
}
run();

// 9. Parallel Async Calls with Promise.all() and await
async function fetchMultiple() {
const [res1, res2] = await Promise.all([
fetch("https://jsonplaceholder.typicode.com/posts/1"),
fetch("https://jsonplaceholder.typicode.com/posts/2")
]);
const data1 = await res1.json();
const data2 = await res2.json();
console.log(data1, data2);
}
fetchMultiple();

// 10. Async/Await with Error Handling
async function fetchData() {
try {
const res1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
const res2 = await fetch("https://jsonplaceholder.typicode.com/posts/2");
const data1 = await res1.json();
const data2 = await res2.json();
console.log(data1, data2);
} catch (error) {
console.error("API call failed");
}
}
fetchData();

// 11. Callback Example
function readFromDB(callback) {
setTimeout(() => {
const data = { id: 1, name: "Waleed" };
callback(data);
}, 1000);
}

readFromDB(data => console.log(data));

// 12. Nested Callbacks
function fetchData(callback) {
setTimeout(() => {
const data = [1, 2, 3];
callback(data);
}, 1000);
}

function processData(data, callback) {
const result = data.map(x => x * 2);
callback(result);
}

fetchData(data => {
processData(data, result => {
console.log(result);
});
});

// 13. Callback Hell
setTimeout(() => {
console.log("First");
setTimeout(() => {
console.log("Second");
setTimeout(() => {
console.log("Third");
}, 1000);
}, 1000);
}, 1000);
function delay(message, ms) {
return new Promise(resolve => {
setTimeout(() => {
console.log(message);
resolve();
}, ms);
});
}
delay("First", 1000)
.then(() => delay("Second", 1000))
.then(() => delay("Third", 1000));

// 14. Using Callbacks with setTimeout
function waitAndRun(callback) {
setTimeout(() => {
callback("Done after 1s");
}, 1000);
}
waitAndRun(message => console.log(message));

// 15. Handle Multiple Callbacks
function executeCallbacks(...callbacks) {
callbacks.forEach((cb, index) => {
cb(index + 1);
});
}
function cb1(num) {
console.log(`Callback ${num} executed`);
}
executeCallbacks(cb1, cb1, cb1);

// 16. Create a Class and Object
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}
}

const user = new Person("Waleed", 25);
console.log(user.name, user.age);

// 17. Class with Methods
class Car {
constructor(make, model) {
this.make = make;
this.model = model;
}
start() {
console.log("Car started");
}
}

const myCar = new Car("Toyota", "Corolla");
myCar.start();

// 18. Inheritance in OOP
class Animal {
speak() {
console.log("Animal speaks");
}
}

class Dog extends Animal {
speak() {
console.log("Dog barks");
}
}

const d = new Dog();
d.speak();

// 19. Encapsulation Example
class BankAccount {
#balance = 0;
deposit(amount) {
this.#balance += amount;
}
withdraw(amount) {
if (amount <= this.#balance) {
this.#balance -= amount;
} 
else {
console.log("Insufficient funds");
    }
}
getBalance() {
return this.#balance;
}
}

const acc = new BankAccount();
acc.deposit(100);
acc.withdraw(30);
console.log(acc.getBalance()); 

// 20. Abstraction in OOP
class Shape {
area() {
throw new Error("Method area() must be implemented");
}
}

class Circle extends Shape {
constructor(radius) {
super();
this.radius = radius;
}

area() {
 return Math.PI * this.radius ** 2;
}

}

class Rectangle extends Shape {
constructor(width, height) {
super();
this.width = width;
this.height = height;
}
area() {
return this.width * this.height;
}
}
const circle = new Circle(5);
const rect = new Rectangle(4, 6);
console.log(circle.area()); 
console.log(rect.area());  
