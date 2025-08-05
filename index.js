// 1. Replace var with let and const
const name = "Alice";
const age = 25;
const isStudent = true;

// 2. Arrow Function to Calculate Sum
const sum = (a, b) => a + b;

// 3. Use Arrow Function for String Concatenation
const concatenateStrings = (str1, str2) => str1 + str2;

// 4. Convert Callback to Arrow Function
const greet = name => console.log("Hello, " + name);

// 5. Use let and const in Loops
for (let i = 0; i < 5; i++) {
console.log(i);
}

// 6. Create a Simple Class with Constructor
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
console.log(`Name: ${this.name}, Age: ${this.age}`);
}
}
const person1 = new Person("Amr", 20);

// 7. Inheritance in JavaScript
class Vehicle {
constructor(make, model){
this.make = make;
this.model = model;
}

drive(){
console.log("Driving...");
}
}

class Car extends Vehicle {
honk(){
console.log("Honk!");
}

}
const myCar = new Car("Toyota", "Corolla");
myCar.drive();
myCar.honk();   

// 8. Destructuring Assignment for Arrays
const numbers = [10, 20, 30];
const [first, second] = numbers;

// 9. Destructuring Assignment for Objects
const person = { name: "waleed", age: 21, city: "Qalqilia" };
const { name: name2, age: age2 } = person;

// 10. Template Literals for Dynamic Strings
const describePerson = (name, age) => `My name is ${name} and I am ${age} years old.`;
console.log(describePerson("waleed", 21));
