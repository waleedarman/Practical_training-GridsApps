// 1. Closure Example with Counter
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());

// 2. Simple Closure with Private Variable
function privateCounter() {
  let value = 0;
  return {
    increment: () => ++value,
    getValue: () => value
  };
}

const count = privateCounter();
console.log(count.increment());
console.log(count.getValue());

// 3. Use Closure to Create a Function That Adds a Number
function createAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = createAdder(5);
console.log(add5(10));

// 4. Callback with Closure
function delayedGreeting(message, delay) {
  setTimeout(function () {
    console.log(message);
  }, delay);
}

delayedGreeting("Hello after 2 seconds", 2000);

// 5. Function with Closure Storing Values
function createList() {
  const list = [];
  return function (item) {
    list.push(item);
    return list;
  };
}

const addToList = createList();
console.log(addToList("Apple"));
console.log(addToList("Banana"));

// 6. Using Closure for Memoization
function fibonacciMemo() {
  const memo = {};
  return function fib(n) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  };
}

const fib = fibonacciMemo();
console.log(fib(10));

// 7. Create a Closure for User Authentication
function authenticate(password) {
  return function (inputPassword) {
    return inputPassword === password;
  };
}

const checkPassword = authenticate("secret123");
console.log(checkPassword("secret123"));
console.log(checkPassword("wrong"));

// 8. Closure for Setting Multiple Properties
function createPerson(name, age) {
  return {
    getName: () => name,
    setName: (newName) => name = newName,
    getAge: () => age,
    setAge: (newAge) => age = newAge
  };
}

const person = createPerson("Waleed", 25);
console.log(person.getName());
person.setAge(26);
console.log(person.getAge());

// 9. Closure for Counting Function Calls
function callCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(`Called ${count} times`);
  };
}

const counter2 = callCounter();
counter2();
counter2();

// 10. Closure for Event Handlers
function buttonClickHandler() {
  let clicks = 0;
  return function () {
    clicks++;
    console.log(`Button clicked ${clicks} times`);
  };
}

const handleClick = buttonClickHandler();

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");
  if (button) {
    button.addEventListener("click", handleClick);
  } else {
    console.warn("Button with ID 'myButton' not found.");
  }
});
