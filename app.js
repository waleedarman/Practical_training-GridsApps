// 1. Select an Element by ID
let element = document.getElementById("myElement");
console.log(element);

// 2. Select Multiple Elements by Class
let elements = document.getElementsByClassName("myClass");
for (let i = 0; i < elements.length; i++) {
 console.log(elements[i].textContent);
}

// 3. Change Text of an Element
const myParagraph = document.getElementById('myParagraph');
myParagraph.textContent = 'Hello, JavaScript!';

// 4. Change Background Color of an Element
function changeBackgroundColor(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.backgroundColor = 'blue';
  }
}

// 5. Add Event Listener for Click
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
 alert("Button clicked!");
});

// 6. Remove an Element from the DOM
const elementToRemove = document.getElementById('myImage');
if (elementToRemove) {
  elementToRemove.remove();
  console.log('Element with ID "myImage" has been removed.');
}
// 7. Create a New Element and Append it to the Body
function createAndAppendDiv() {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'This is a new div added to the body.';
  document.body.appendChild(newDiv);
}
createAndAppendDiv();

// 8. Toggle a Class on an Element
let button1 = document.getElementById("myButton");
button1.addEventListener("click", function () {
  alert("Button clicked!");
  button.classList.toggle("active");
});

// 9. Change the Style of an Element Dynamically
document.getElementById("myButton").addEventListener("click", function () {
  const element = document.getElementById("myElement");
  element.style.fontSize = "24px";
});

// 10. Handle Mouse Hover Event
const myElement = document.getElementById("myElement");
myElement.addEventListener("mouseover", function () {
  myElement.style.color = "#FF5722"; 
});
myElement.addEventListener("mouseout", function () {
  myElement.style.color = "#333"; 
});

// 11. Change the Text of a Paragraph When a Button is Clicked
document.getElementById("myButton").addEventListener("click", function () {
  const paragraph = document.getElementById("myParagraph");
  paragraph.textContent = "The paragraph text was changed when the button was pressed!";
});

// 12. Find and Change Parent Element’s Text
const elements2 = document.querySelectorAll(".myClass");
elements2.forEach(el => {
  el.addEventListener("click", function () {
    this.parentElement.textContent = "The parent element text has been changed!";
  });
});

// 13. Loop Through All Elements with a Class and Change Their Style
const elementsWithMyClass = document.querySelectorAll('.myClass');
elementsWithMyClass.forEach(el => {
  el.style.backgroundColor = '#e0f7fa';
  el.style.borderColor = '#00acc1';
});

// 14. Create an Image Element Dynamically
const newImage = document.createElement('img');
newImage.src = 'https://via.placeholder.com/100';
newImage.alt = 'Dynamically Created Image';
newImage.style.marginTop = '10px';
newImage.style.border = '2px dashed #999';
document.body.appendChild(newImage);

// 15. Add Multiple Event Listeners to a Single Element
const button3 = document.getElementById('myButton');
button3.addEventListener('click', () => {
  alert('Button clicked!');
});
button.addEventListener('mouseover', () => {
  console.log('Mouse is over the button');
});

// 16. Create a List of Items Dynamically
const list = document.createElement('ul');
const items = ['Item 1', 'Item 2', 'Item 3'];
items.forEach(itemText => {
  const li = document.createElement('li');
  li.textContent = itemText;
  list.appendChild(li);
});
document.body.appendChild(list);

// 17. Select the First Child of an Element
const firstMyClass = document.querySelector('.myClass');
firstMyClass.style.fontStyle = 'italic';

// 18. Change the Text of All Paragraphs
const allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(p => {
  p.textContent = 'This paragraph has been changed!';
});

// 19. Create a Table Dynamically
const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.marginTop = '20px';
for (let i = 0; i < 3; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j < 3; j++) {
    const cell = document.createElement('td');
    cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
    cell.style.border = '1px solid #666';
    cell.style.padding = '8px';
    row.appendChild(cell);
  }
  table.appendChild(row);
}
document.body.appendChild(table);

// 20. Use querySelector to Select an Element and Modify Its Content
const paragraph = document.querySelector('#myParagraph');
paragraph.innerHTML = '<strong>Modified content using querySelector!</strong>';



