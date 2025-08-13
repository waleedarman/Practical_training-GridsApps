// 1. Print "Hello, World!"
console.log("Hello, World!");

// 2. Add Two Numbers
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(10, 5));

// 3. Calculate Square Root
function calculateSquareRoot(number) {
  return Math.sqrt(number);
}
console.log(calculateSquareRoot(16));

// 4. Calculate the Area of a Triangle
function areaOfTriangle(base, height) {
  return 0.5 * base * height;
}
console.log(areaOfTriangle(10, 5));

// 5. Swap Two Variables
let a = 4;
let b = 7;
[a, b] = [b, a];
console.log("a =", a);
console.log("b =", b);

// 6. Solve a Quadratic Equation
function solveQuadratic(a, b, c) {
  const discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return `Two real roots: ${root1}, ${root2}`;
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return `One real root: ${root}`;
  } else {
    return "No real roots";
  }
}
console.log(solveQuadratic(1, -3, 2));

// 7. Convert Kilometers to Miles
function kilometersToMiles(km) {
  return km * 0.621371;
}
console.log(kilometersToMiles(10));

// 8. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(30));

// 9. Generate a Random Number
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
console.log(generateRandomNumber());

// 10. Check If a Number is Positive, Negative, or Zero
function checkNumber(num) {
  if (num > 0) return "Positive";
  else if (num < 0) return "Negative";
  else return "Zero";
}
console.log(checkNumber(-8));
console.log(checkNumber(7));
console.log(checkNumber(0));

// 11. Check If a Number is Odd or Even
function isOddOrEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(isOddOrEven(4));

// 12. Find the Largest Among Three Numbers
function findLargest(a, b, c) {
  return Math.max(a, b, c);
}
console.log(findLargest(10, 25, 15));

// 13. Check If a Number is Prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));

// 14. Print All Prime Numbers in an Interval
function printPrimesInRange(start, end) {
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) console.log(i);
  }
}
printPrimesInRange(10, 30);

// 15. Find the Factorial of a Number
function factorial(n) {
  if (n < 0) return "Invalid input";
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// 16. Display the Multiplication Table
function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
multiplicationTable(5);

// 17. Print Fibonacci Sequence
function printFibonacci(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    console.log(a);
    [a, b] = [b, a + b];
  }
}
printFibonacci(10);

// 18. Check Armstrong Number
function isArmstrong(num) {
  const digits = num.toString().split('');
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
  return sum === num;
}
console.log(isArmstrong(153));

// 19. Find Armstrong Number in an Interval
function findArmstrongInRange(start, end) {
  for (let i = start; i <= end; i++) {
    if (isArmstrong(i)) console.log(i);
  }
}
findArmstrongInRange(100, 999);

// 20. Create a Simple Calculator
function calculator(a, b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : "Cannot divide by zero";
    default: return "Invalid operator";
  }
}
console.log(calculator(10, 5, '+'));

// 21. Find the Sum of Natural Numbers
function sumOfNaturalNumbers(n) {
  if (!Number.isInteger(n) || n < 0) return "Invalid input";
  return (n * (n + 1)) / 2;
}
console.log(sumOfNaturalNumbers(10)); 

// 22. Check If Two Numbers Have Same Last Digit
function sameLastDigit(a, b) {
  return Math.abs(a) % 10 === Math.abs(b) % 10;
}
console.log(sameLastDigit(27, 137)); 

// 23. Find HCF (Greatest Common Divisor)
function findHCF(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}
console.log(findHCF(20, 28)); 

// 24. Find LCM (Least Common Multiple)
function findLCM(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / findHCF(a, b);
}
console.log(findLCM(4, 6));

// 25. Find the Factors of a Number
function findFactors(n) {
  if (!Number.isInteger(n) || n <= 0) return "Invalid input";
  const small = [], large = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      small.push(i);
      if (i !== n / i) large.push(n / i);
    }
  }
  return small.concat(large.reverse());
}
console.log(findFactors(12)); 

// 26. Find Sum of Natural Numbers Using Recursion
function sumNaturalRecursion(n) {
  if (!Number.isInteger(n) || n < 0) return "Invalid input";
  if (n <= 1) return n;
  return n + sumNaturalRecursion(n - 1);
}
console.log(sumNaturalRecursion(5)); 

// 27. Guess a Random Number
let targetNumber = Math.floor(Math.random() * 100) + 1;
function guessNumber(userGuess) {
  if (!Number.isInteger(userGuess) || userGuess < 1 || userGuess > 100) {
    return "Enter a number between 1 and 100";
  }
  return userGuess === targetNumber
    ? "Correct!"
    : `Wrong! The number was ${targetNumber}`;
}
console.log(guessNumber(50)); 

// 28. Shuffle Deck of Cards
function shuffleDeck(deck) {
  const arr = [...deck];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
const deck = ['A', '2', '3', '4', '5', '6'];
console.log(shuffleDeck(deck)); 

// 29. Display Fibonacci Sequence Using Recursion
function fibonacciRec(n) {
  if (n < 2) return n;
  return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}
for (let i = 0; i < 10; i++) {
  console.log(fibonacciRec(i));
}

// 30. Find Factorial of a Number Using Recursion
function factorialRec(n) {
  if (n <= 1) return 1;
  return n * factorialRec(n - 1);
}
console.log(factorialRec(5)); 

// 31. Convert Decimal to Binary
function decimalToBinary(num) {
  return num.toString(2);
}
console.log(decimalToBinary(10)); 

// 32. Find ASCII Value of Character
function getASCII(char) {
  return char.charCodeAt(0);
}
console.log(getASCII('A')); 

// 33. Check Whether a String is Palindrome
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome("madam")); 

// 34. Sort Words in Alphabetical Order
function sortWords(sentence) {
  return sentence.split(' ').sort().join(' ');
}
console.log(sortWords("banana apple cherry"));

// 35. Replace Characters in a String
function replaceChar(str, oldChar, newChar) {
  return str.split(oldChar).join(newChar);
}
console.log(replaceChar("hello world", "o", "0")); 

// 36. Reverse a String
function reverseString(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
console.log(reverseString("hello")); 

// 37. Create Objects in Different Ways
const obj1 = { name: "John" };
function Person(name) {
  this.name = name;
}
const obj2 = new Person("Jane");
const proto = { greet: function() { console.log("Hello"); } };
const obj3 = Object.create(proto);
console.log(obj1, obj2, obj3);

// 38. Count the Occurrences of a Character in a String
function countChar(str, char) {
  return str.split(char).length - 1;
}
console.log(countChar("banana", "a"));

// 39. Convert First Letter of a String to Uppercase
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirst("hello")); 

// 40. Count the Number of Vowels in a String
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log(countVowels("hello world")); 

// 41. Remove a Property from an Object
const user = { name: "John", age: 30 };
delete user.age;
console.log(user);

// 42. Check Whether a String Starts and Ends with Certain Characters
function startsAndEndsWith(str, startChar, endChar) {
  return str.startsWith(startChar) && str.endsWith(endChar);
}
console.log(startsAndEndsWith("JavaScript", "J", "t"));

// 43. Check If a Key Exists in an Object
function keyExists(obj, key) {
  return key in obj;
}
console.log(keyExists({ name: "John" }, "name"));

// 44. Clone a JavaScript Object
function cloneObject(obj) {
  return { ...obj }; 
}
console.log(cloneObject({ a: 1, b: 2 }));

// 45. Loop Through an Object
const person = { name: "John", age: 30 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 46. Merge Properties of Two Objects
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log(mergeObjects({ a: 1 }, { b: 2 }));

// 47. Count the Number of Keys/Properties in an Object
function countKeys(obj) {
  return Object.keys(obj).length;
}
console.log(countKeys({ a: 1, b: 2, c: 3 })); 

// 48. Add Key/Value Pair to an Object
function addKeyValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
console.log(addKeyValue({}, "name", "John"));

// 49. Replace All Occurrences of a String
function replaceAll(str, find, replace) {
  return str.split(find).join(replace);
}
console.log(replaceAll("Hello World", "o", "0"));

// 50. Create Multiline Strings
const multiline = `This is line 1
This is line 2
This is line 3`;

console.log(multiline);

// 51. Format Numbers as Currency Strings
function formatCurrency(amount) {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

console.log(formatCurrency(1234.56)); 

// 52. Generate a Random String
function randomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

console.log(randomString(8));

// 53. Check If a String Starts with Another String
function startsWith(str, sub) {
  return str.startsWith(sub);
}

console.log(startsWith("JavaScript", "Java")); 

// 54. Trim a String
function trimString(str) {
  return str.trim();
}

console.log(trimString("   Hello   ")); 

// 55. Convert Objects to Strings
function objectToString(obj) {
  return JSON.stringify(obj);
}

console.log(objectToString({ name: "John" }));

// 56. Check Whether a String Contains a Substring
function containsSubstring(str, sub) {
  return str.includes(sub);
}

console.log(containsSubstring("Hello World", "World")); 

// 57. Compare Two Strings
function compareStrings(str1, str2) {
  return str1 === str2;
}

console.log(compareStrings("test", "test")); 

// 58. Encode a String to Base64
function toBase64(str) {
  return btoa(str);
}

console.log(toBase64("Hello")); 

// 59. Replace All Instances of a Character in a String
function replaceAllChar(str, char, newChar) {
  return str.split(char).join(newChar);
}

console.log(replaceAllChar("banana", "a", "@")); 

// 60. Replace All Line Breaks with <br>
function replaceLineBreaks(str) {
  return str.replace(/\n/g, "<br>");
}
console.log(replaceLineBreaks("Line1\nLine2\nLine3"));

// 61. Display Date and Time
function displayDateTime() {
  const now = new Date();
  return now.toString();
}

console.log(displayDateTime());

// 62. Check Leap Year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024)); 

// 63. Format the Date
function formatDate(date) {
  let mm = String(date.getMonth() + 1).padStart(2, '0');
  let dd = String(date.getDate()).padStart(2, '0');
  let yyyy = date.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
}
console.log(formatDate(new Date()));

// 64. Display Current Date
console.log(new Date().toLocaleDateString());

// 65. Compare the Value of Two Dates
function compareDates(date1, date2) {
  if (date1.getTime() === date2.getTime()) return "Equal";
  return date1 < date2 ? "Before" : "After";
}
console.log(compareDates(new Date('2025-01-01'), new Date('2025-01-02')));

// 66. Create a Countdown Timer
function countdown(seconds) {
  let timer = setInterval(() => {
    console.log(seconds);
    seconds--;
    if (seconds < 0) {
      clearInterval(timer);
      console.log("Time's up!");
    }
  }, 1000);
}
countdown(5);

// 67. Remove Specific Item from an Array
function removeItem(arr, value) {
  return arr.filter(item => item !== value);
}
console.log(removeItem([1, 2, 3, 2], 2));

// 68. Check if an Array Contains a Specified Value
function containsValue(arr, value) {
  return arr.includes(value);
}
console.log(containsValue([1, 2, 3], 2));

// 69. Insert Item in an Array
function insertAt(arr, index, item) {
  arr.splice(index, 0, item);
  return arr;
}
console.log(insertAt([1, 2, 4], 2, 3));

// 70. Append an Object to an Array
function appendObject(arr, obj) {
  arr.push(obj);
  return arr;
}
console.log(appendObject([{ a: 1 }], { b: 2 }));

// 71. Check If an Object is an Array
function isArray(obj) {
  return Array.isArray(obj);
}
console.log(isArray([1, 2, 3]));

// 72. Empty an Array
function emptyArray(arr) {
  arr.length = 0;
}
let nums = [1, 2, 3];
emptyArray(nums);
console.log(nums);

// 73. Add Element to Start of an Array
function addToStart(arr, item) {
  arr.unshift(item);
  return arr;
}
console.log(addToStart([2, 3], 1));

// 74. Remove Duplicates from an Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));

// 75. Merge Two Arrays and Remove Duplicate Items
function mergeUnique(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
console.log(mergeUnique([1, 2, 3], [3, 4, 5]));

// 76. Sort Array of Objects by Property Values
function sortByProperty(arr, prop) {
  return arr.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
}
console.log(sortByProperty([{ name: "John" }, { name: "Alice" }], "name"));

// 77. Create Two Dimensional Array
function createMatrix(rows, cols) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
}
console.log(createMatrix(3, 3));

// 78. Extract Given Property Values from Objects as Array
function extractProperty(arr, prop) {
  return arr.map(obj => obj[prop]);
}
console.log(extractProperty([{ name: "John" }, { name: "Alice" }], "name"));

// 79. Compare Elements of Two Arrays
function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((val, i) => val === arr2[i]);
}
console.log(arraysEqual([1, 2, 3], [1, 2, 3]));

// 80. Get Random Item from an Array
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRandomItem([1, 2, 3, 4, 5]));

// 81. Perform Intersection Between Two Arrays
function intersection(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}
console.log(intersection([1, 2, 3], [2, 3, 4]));


// 82. Split Array into Smaller Chunks
function chunkArray(arr, size) {
  let chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
console.log(chunkArray([1, 2, 3, 4, 5], 2));

// 84. Get File Extension
function getFileExtension(filename) {
  return filename.split('.').pop();
}
console.log(getFileExtension("document.pdf"));

// 85. Check if a Variable is Undefined or Null
function isNullOrUndefined(value) {
  return value === null || value === undefined;
}
console.log(isNullOrUndefined(null));

// 86. Set a Default Parameter Value for a Function
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet();
greet("John");

// 87. Illustrate Different Set Operations
let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);
let union = new Set([...setA, ...setB]);
let intersectionSet = new Set([...setA].filter(x => setB.has(x)));
let differenceSet = new Set([...setA].filter(x => !setB.has(x)));
console.log(union, intersectionSet, differenceSet);

// 88. Generate a Random Number Between Two Numbers
function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(randomBetween(5, 10));

// 89. Get the Current URL
console.log(window.location.href);

// 90. Validate an Email Address
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
console.log(isValidEmail("test@example.com"));

// 91. Check if a Variable is a Function
function isFunction(value) {
  return typeof value === "function";
}
console.log(isFunction(() => {}));

// 92. Work With Constants
const PI = 3.14159;
console.log("PI:", PI);

// 93. Pass Parameter to a setTimeout() Function
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}
setTimeout(greetUser, 2000, "Waleed");

// 94. Generate a Range of Numbers and Characters
function range(start, end) {
  let result = [];
  if (typeof start === "number" && typeof end === "number") {
    for (let i = start; i <= end; i++) result.push(i);
  } else if (typeof start === "string" && typeof end === "string") {
    let startCode = start.charCodeAt(0);
    let endCode = end.charCodeAt(0);
    for (let i = startCode; i <= endCode; i++) result.push(String.fromCharCode(i));
  }
  return result;
}
console.log(range(1, 5));
console.log(range('a', 'e'));

// 95. Perform Function Overloading
function calculate(a, b) {
  if (a !== undefined && b !== undefined) return a + b;
  if (a !== undefined) return a * a;
  return 0;
}
console.log(calculate(5, 3));
console.log(calculate(4));
console.log(calculate());

// 96. Implement a Stack
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek());
console.log(stack.pop());

// 97. Implement a Queue
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
}
let queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
console.log(queue.peek());
console.log(queue.dequeue());

// 98. Check if a Number is Float or Integer
function checkNumberType(num) {
  return Number.isInteger(num) ? "Integer" : "Float";
}
console.log(checkNumberType(5));
console.log(checkNumberType(5.5));

// 99. Pass a Function as a Parameter
function executeFunction(fn) {
  fn();
}
executeFunction(() => console.log("Function called!"));

// 100. Get the Dimensions of an Image
let img = document.querySelector("img");
if (img) {
  img.onload = function () {
    console.log(`Width: ${img.width}, Height: ${img.height}`);
  };
} else {
  console.log("No image found in the document.");
}
