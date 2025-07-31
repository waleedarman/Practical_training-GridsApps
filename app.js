// 1- parse json sting into object
const jsonString = '{"name":"waleed","age":21 ,"city":"qalqilia"}';
const obj = JSON.parse(jsonString);
console.log(obj);

// 2- stringify javascript object into json
function ConvertToJSON(obj) {
return JSON.stringify(obj);
}
console.log(ConvertToJSON({ name: "waleed", age: 21 ,city:"qalqilia"}));

// 3- Display User Data Using json
const user_JSON = '{"name":"waleed","age":21,"email":"armanwaleed89@gmail.com"}';
const user = JSON.parse(user_JSON);
console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`);

// 4- Parse json and modify data
let product_JSON = '{"name":"Phone","price":1200}';
let product = JSON.parse(product_JSON);
product.price = 1500;
console.log(product);

// 5-Convert Javascript array to json
function ArrayToJSON(array) {
return JSON.stringify(array);
}
const Employees = [{ id: 1, name: "waleed" }, { id: 2, name: "ahmad" },{ id: 3, name: "Amr" }];
console.log(ArrayToJSON(Employees));

// 6-Json validation
function isValidJSON(str) {
try {
JSON.parse(str);
return true;
} 
catch (e)
{
return false;
}
}
console.log(isValidJSON('{"valid":true}')); 
console.log(isValidJSON('invalid'));  

// 7-Handle Api Response with JSON
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => console.log(data[0].name))
.catch(err => console.error("Error:", err));

// 8- Using XmlHttpRequest Api
function fetchWithXHR() {
const myRequest1 = new XMLHttpRequest();
myRequest1.open("GET", "https://jsonplaceholder.typicode.com/users/1");
myRequest1.onload = function () {
if (myRequest1.status === 200)
{
const data = JSON.parse(myRequest1.responseText);
console.log(data);
}
};
myRequest1.send();
}
fetchWithXHR();

// 9- Create Json Object from Data
function createJSON()
{
const data = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
message: document.getElementById("message").value
};
console.log(JSON.stringify(data));
}

// 10-Fetch JSON Data and Display in HTML
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(res => res.json())
.then(data => {
document.getElementById("userList").innerHTML = `<li>${data.name}</li>`;
});


// 11- Display Multiple User Data From Api
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(users => {
let html = users.map(u => `<tr><td>${u.name}</td><td>${u.email}</td></tr>`).join("");
document.getElementById("userTable").innerHTML = html;
});


// 12-AJAX Request to Send JSON Data
let myRequest2 = new XMLHttpRequest();
myRequest2.open("POST", "https://jsonplaceholder.typicode.com/posts");
myRequest2.setRequestHeader("Content-Type", "application/json");
myRequest2.onload = () => {
console.log(JSON.parse(myRequest2.responseText));
};
let data = JSON.stringify({
name:"Waleed",
email:"armanwaleed89@gmail.com"
});
myRequest2.send(data);

// 13-Handling Asynchronous Data with Promises
function get_Data() {
return new Promise(resolve => {
setTimeout(() => {
resolve({ name: "waleed", age: 21 });
}, 1000);
});
}

get_Data().then(data => console.log(data));

// 14-Async-Await with Fetch API
async function fetchUser() {
try {
const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
const user = await response.json();
console.log("Async User:", user);
} catch (error) {
console.error("Error:", error);
  }
}
fetchUser();

// 15- Convert Nested Object to JSON
const user1 = {
name: "waleed",
address: { city: "Qalqilia", street: "Jit" },
contact: { phone: "0569287748", email: "armanwaleed@gmail.com" }
};
const jsonString1 = JSON.stringify(user1);
console.log(jsonString1);

// 16-Send JSON Data via Fetch POST Request
fetch("https://jsonplaceholder.typicode.com/posts", {
method: "POST",
headers: {
    "Content-Type": "application/json"
},
body: JSON.stringify({ name: "waleed", email: "armanwaleed89@gmail.com" })
})
.then(response => response.json())
.then(data => console.log("POST Response:", data));

// 17- Use Fetch API with Query Parameters
fetch('https://jsonplaceholder.typicode.com/users?id=1')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

// 18-Use XMLHttpRequest to Get JSON Data
const myRequest3 = new XMLHttpRequest();
myRequest3.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
myRequest3.onload = function () {
if (myRequest3.status === 200)
{
const data = JSON.parse(myRequest3.responseText);
console.log(data);
}
};
myRequest3.send();

// 19-Asynchronous Data Fetching with Callback
function fetch_Data(url, callback) {
const myRequest4 = new XMLHttpRequest();
myRequest4.open('GET', url);
myRequest4.onload = () => {
if (myRequest4.status === 200) {
callback(JSON.parse(myRequest4.responseText));
}
};
myRequest4.send();
}
fetch_Data('https://jsonplaceholder.typicode.com/posts/2', data => {
console.log("Callback post:", data);
    });

// 20-Error Handling with Fetch and JSON
fetch('https://jsonplaceholder.typicode.com/posts/3')
.then(res => {
if (!res.ok) throw new Error('Data not found');
return res.json();
})
.then(data => console.log(data))
.catch(err => console.error('Error:', err.message));













