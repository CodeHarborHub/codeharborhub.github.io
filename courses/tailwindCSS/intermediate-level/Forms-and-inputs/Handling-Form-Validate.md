---
id: lesson-3
title: "Handling Form Validation States"
sidebar_label: Form Validation
sidebar_position: 3
description: "Handling Form Validation States"
tags: [courses,tailwind,Form Elements,intermediate-level,Introduction]
--- 
 
 
Using Tailwind CSS, you can indicate validation states for form controls to improve user experience.

##### Default State
Set the default state of form elements.

```html
<input type="text" class="border border-gray-300 rounded-md py-2 px-4" placeholder="Enter text" />
```

##### Success State
Indicate successful validation with specific classes.

```html
<input type="text" class="border border-green-500 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-green-500" placeholder="Valid input" />
```

##### Error State
Indicate errors with a different color scheme.

```html
<input type="text" class="border border-red-500 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-red-500" placeholder="Invalid input" />
```

##### Example: Complete Form with Validation States
Here’s a practical example that combines all the components together in a simple form.

```html
<form class="space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700">Name</label>
    <input type="text" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-500" placeholder="Enter your name" />
  </div>
  
  <div>
    <label class="block text-sm font-medium text-gray-700">Email</label>
    <input type="email" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-500" placeholder="Enter your email" />
  </div>

  <div>
    <label class="block text-sm font-medium text-gray-700">Password</label>
    <input type="password" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-500" placeholder="Enter your password" />
  </div>

  <div class="flex items-center">
    <input type="checkbox" class="form-checkbox text-blue-500 h-5 w-5" />
    <span class="ml-2">Accept terms and conditions</span>
  </div>

  <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
    Submit
  </button>
</form>
```
 