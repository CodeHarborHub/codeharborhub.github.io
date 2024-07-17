---
id: lesson-3
title: "Conditional Styling"
sidebar_label: Conditional Styling
sidebar_position: 3
description: "Conditional Styling"
tags: [courses,tailwind,Conditional Styling,Advanced-level,Introduction]
--- 


Conditional styling can be applied using JavaScript to handle more complex scenarios.

##### Example: Changing Styles Based on Input
###### HTML
```html
<input type="text" id="nameInput" class="border p-2 rounded" placeholder="Enter your name">
<p id="greetingMessage" class="mt-4 text-xl"></p>
```

###### JavaScript
```javascript
const nameInput = document.getElementById('nameInput');
const greetingMessage = document.getElementById('greetingMessage');

nameInput.addEventListener('input', () => {
  const name = nameInput.value.trim();
  if (name) {
    greetingMessage.className = 'mt-4 text-xl text-green-500';
    greetingMessage.textContent = `Hello, ${name}!`;
  } else {
    greetingMessage.className = 'mt-4 text-xl text-red-500';
    greetingMessage.textContent = 'Please enter your name.';
  }
});
```

##### Example: Dynamic Form Validation Styles
###### HTML
```html
<form id="signupForm">
  <input type="email" id="emailInput" class="border p-2 rounded" placeholder="Enter your email">
  <span id="emailError" class="text-red-500 mt-2 hidden">Invalid email</span>
  <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">Submit</button>
</form>
```

###### JavaScript
```javascript
const signupForm = document.getElementById('signupForm');
const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  
  if (!validateEmail(email)) {
    emailError.classList.remove('hidden');
    emailInput.classList.add('border-red-500');
    emailInput.classList.remove('border-green-500');
  } else {
    emailError.classList.add('hidden');
    emailInput.classList.add('border-green-500');
    emailInput.classList.remove('border-red-500');
    // Submit form or perform other actions
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
```
 