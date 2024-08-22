---
title: "DOM manipulation in JavaScript"
sidebar_label: DOM-manipulation-in-JavaScript
authors: [dharshibalasubramaniyam]
tags: [dom, javascript]
date: 2024-06-25
hide_table_of_contents: true
---

In web development, the Document Object Model (DOM) is a crucial aspect of creating dynamic and interactive web pages. The DOM represents the structure of a web document as a tree of nodes, allowing developers to access, modify, and interact with the content and elements of a web page using JavaScript.

<!-- truncate -->

## 1. Understanding DOM

- The Document Object Model (DOM) is a programming interface for web documents.

- This model allows developers to interact with the document programmatically via scripting languages like JavaScript.

- When a web page is loaded, the browser parses the HTML and creates the DOM.

- The DOM represents the document as a tree of nodes, where each node is an object representing a part of the document:

_Document Node_: Represents the entire document.

_Element Nodes_: Represent HTML elements like `<div>`, `<p>`, `<a>`, etc.

_Text Nodes_: Contain the text content within elements.

_Attribute Nodes_: Represent the attributes of HTML elements (`class`, `id`, `src` etc.).

For example, consider the following HTML:

```html
<!doctype html>
<html>
  <head>
    <title>Example with Attributes</title>
  </head>
  <body>
    <h1 class="header" id="main-title" data-info="example">Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

For this document, the DOM tree would look like this:

```graphql
Document
  ├── html
  │   ├── head
  │   │   └── title
  │   │       └── "Example with Attributes"
  │   └── body
  │       ├── h1
  │       │   ├── @class="header"
  │       │   ├── @id="main-title"
  │       │   ├── @data-info="example"
  │       │   └── "Hello, World!"
  │       └── p
  │           └── "This is a paragraph."
```

The DOM plays a central role in web development by enabling developers to create dynamic and interactive web pages.

- Access and manipulate elements: Developers can use JavaScript to select, modify, and create HTML elements.

- Handle events: The DOM allows developers to listen for and respond to user events, such as clicks, keypresses, and form submissions.

- Modify styles: Through the DOM, developers can change the CSS styles of elements dynamically.

## 2. DOM Manipulation

### 2.1. Accessing Elements

- To get an element by its ID in JavaScript, you can use the `getElementById` method.

```html
<div id="title">Hello, World!</div>
```

```js
// Get the element with the ID 'myElement'
const element = document.getElementById("myElement");

// Log the element to the console
console.log(element);
```

- To get elements by their class, we can use the `getElementsByClassName` method. This method returns a live HTMLCollection of elements with the specified class name.

```html
<div class="myClass">First Element</div>
<div class="myClass">Second Element</div>
<div class="myClass">Third Element</div>
```

```js
// Get the elements with the class name 'myClass'
const elements = document.getElementsByClassName("myClass");

// Log the elements to the console
console.log(elements);

// Optionally, you can iterate over the elements as well
for (let i = 0; i < elements.length; i++) {
  console.log(elements[i]);
}
```

- To get elements by tag name in the Document Object Model (DOM), we can use the `getElementsByTagName` method. This method allows you to retrieve a collection of elements that match a specified tag name.

```html
<h1>Hello, World!</h1>
<p>This is a paragraph.</p>
<div>
  <p>Another paragraph inside a div.</p>
  <p>Second paragraph inside a div.</p>
</div>
```

```js
// Get all <p> elements in the document
const paragraphs = document.getElementsByTagName("p");

// Loop through and log the text content of each <p> element
for (let i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i].textContent);
}
```

- The `querySelector` method in JavaScript allows you to select and retrieve the first element that matches a specified CSS selector within the document or within a specific element,

```js
// Select the first <p> element in the document
const firstParagraph = document.querySelector("p");

// Select the element with id="main-title"
const titleElement = document.querySelector("#main-title");

// Select the first element with class="intro"
const introParagraph = document.querySelector(".intro");

// Select the first <p> element inside the <div>
const paragraphInDiv = document.querySelector("div p");
```

- The `querySelectorAll` method in JavaScript allows you to select and retrieve a list (or NodeList) of all elements that match a specified CSS selector within the document or within a specific element. Unlike `querySelector`, which returns only the first matching element, `querySelectorAll` returns a NodeList containing all matching elements.

```js
// Select all <p> elements in the document
const paragraphs = document.querySelectorAll("p");

// Log the number of <p> elements found
console.log("Number of <p> elements:", paragraphs.length);

// Select all elements with class="intro"
const introElements = document.querySelectorAll(".intro");

// Select all <li> elements inside the <ul>
const listItems = document.querySelectorAll("ul li");
```

### 2.2. Modifying Content

- `innerHTML` allows you to get or set the HTML markup inside an element.

```js
// HTML element
const divElement = document.getElementById("myDiv");

// Get inner HTML content of divElement
const htmlContent = divElement.innerHTML;
console.log("Inner HTML:", htmlContent);

// Set inner HTML content of divElement
divElement.innerHTML = "<p>New content with <strong>bold</strong> text.</p>";
```

- `textContent` allows you to get or set the text content inside an element.

```js
// HTML element
const paragraphElement = document.getElementById("myParagraph");

// Get text content
const textContent = paragraphElement.textContent;
console.log("Text content:", textContent);

// Set text content
paragraphElement.textContent = "Updated text content.";
```

- `innerText` allows you to get or set the visible text content inside an element.

```js
// HTML element
const spanElement = document.getElementById("mySpan");

// Get inner text
// Retrieves the visible text content inside an element, excluding hidden elements or elements with CSS display: none.
const innerText = spanElement.innerText;
console.log("Inner text:", innerText);

// Set inner text
spanElement.innerText = "Updated inner text.";
```

### 2.3. Modifying Attributes

- Use `getAttribute()` to get the value of an attribute.
- Use `setAttribute()` to set a new value for an attribute.
- Use `removeAttribute()` to remove an attribute.

```html
<div class="myClass">First Element</div>
```

```js
// Get the element with the ID 'myElement'
const element = document.getElementById("myElement");

// Get the value of an attribute
const classValue = element.getAttribute("class");
console.log("Class:", classValue); // Output: Class: myClass

// Set a new value for an attribute
element.setAttribute("class", "newClass");
console.log("Updated Class:", element.getAttribute("class")); // Output: Updated Class: newClass

// Remove an attribute
element.removeAttribute("class");
console.log(element.hasAttribute("class")); // Output: false
```

### 2.4. Creating and Inserting Elements

- `createElement()` method creates a new HTML element.
- `appendChild()` method appends a node as the last child of a parent node.
- `insertBefore()` method inserts a node before an existing element within a a specified parent node.
- `append()` method appends node to the end of a parent node.
- `prepend()` method inserts node to the beginning of a parent node.

```html
<body>
    <div id="container">
        <ul class="todo-list"></ul>
    <div>
</body>
```

```js
const container = document.getElementById("container");
const todolist = document.querySelector(".todo-list");

// Create a new element
const newToDo = document.createElement("li");
newToDo.setAttribute("class", "todo-item");
newToDo.textContent = "Buy fruits.";

// Append the new element as the last child
todolist.appendChild(newToDo);

// Create another new element
const title = document.createElement("h2");
newToDo.textContent = "My tasks";

// Insert the title before the list
container.insertBefore(title, todolist);

// Create yet another new element
const lastElement = document.createElement("div");
lastElement.textContent = "Last Element";

// Append yet another element as the last child
container.append(lastElement);

// Create and prepend a new element
const firstElement = document.createElement("div");
firstElement.textContent = "First Element";

// Prepend the new element as the first child
container.prepend(firstElement);
```

### 2.5. Removing Elements

- `removeChild()` method removes a specified child node from the parent node. The removed child node is returned.

- `remove()` method removes the element from the DOM.

```html
<div id="container">
  <div id="childElement">Child Element</div>
  <div id="anotherChildElement">Another Child Element</div>
</div>
```

```js
// Get the container element
const container = document.getElementById("container");

// Get the child element to be removed
const childElement = document.getElementById("childElement");

// Remove the child element using removeChild
container.removeChild(childElement);

// Get another child element to be removed
const anotherChildElement = document.getElementById("anotherChildElement");

// Remove the element using remove()
anotherChildElement.remove();
```

### 2.6. Modifying Styles

- The `style` property allows to set or get inline styles for an element. This directly modifies the style attribute of the element in the DOM.

```html
<div id="myElement">Hello world!</div>
```

```js
// Get the element
const element = document.getElementById("myElement");

// Change the background color and font size using the style property
element.style.backgroundColor = "blue";
element.style.fontSize = "20px";
```

- The `classList` property provides methods to add, remove, and toggle CSS classes on an element. This is a more flexible way to manage an element's classes compared to directly setting the `class` attribute.

```js
// Get the element
const element = document.getElementById("myElement");

// Add a new class to the element
element.classList.add("newClass");

// Remove an existing class from the element
element.classList.remove("initialClass");

// Toggle a class on the element (add it if it doesn't exist, remove it if it does)
element.classList.toggle("toggledClass");
```

### 2.7. Event Handling

- The `addEventListener()` method attaches an event handler to an element. It allows multiple event listeners to be added to a single element for the same event type.

```html
<button id="myButton">Click Me</button>
```

```js
// Define the event handler function
function handleClick() {
  alert("Button was clicked!");
}

// Get the button element
const button = document.getElementById("myButton");

// Add a click event listener
button.addEventListener("click", handleClick);
```

- The `removeEventListener()` method removes an event handler that was added with `addEventListener()`.

```js
button.removeEventListener("click", handleClick);
```

## Conclusion

Mastering DOM manipulation is crucial for creating dynamic, interactive web pages. The ability to access, modify, and interact with the DOM using JavaScript allows developers to build responsive and engaging user experiences.

- **Understanding the DOM**: By understanding the structure and representation of a web document through the DOM, developers can effectively interact with and manipulate web pages.

- **Accessing Elements**: Methods like `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()`, `querySelector()`, and `querySelectorAll()` enable precise selection of elements within the DOM, facilitating targeted manipulations.

- **Modifying Content and Attributes**: Techniques such as using `innerHTML`, `textContent`, and `innerText` for content modification, alongside `getAttribute()`, `setAttribute()`, and `removeAttribute()` for attribute management, provide powerful ways to dynamically change the document's content and properties.

- **Creating and Inserting Elements**: Methods like `createElement()`, `appendChild()`, `insertBefore()`, `append()`, and `prepend()` allow developers to construct and integrate new elements into the DOM, enabling the dynamic construction of web pages.

- **Removing Elements**: Using `removeChild()` and `remove()` methods facilitates the removal of elements from the DOM, which is essential for maintaining clean and efficient document structures.

- **Modifying Styles**: Direct manipulation of inline styles via the `style` property and managing classes with classList methods (`add()`, `remove()`, `toggle()`) offer flexible control over the appearance and styling of elements.

- **Event Handling**: The ability to attach and remove event listeners using `addEventListener()` and `removeEventListener()` empowers developers to create interactive elements that respond to user actions, enhancing the user experience.

By leveraging these DOM manipulation techniques, developers can create rich, interactive web applications that provide a seamless and dynamic user experience. Understanding and utilizing these tools effectively is key to modern web development.
