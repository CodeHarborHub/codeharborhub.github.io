---
id: lesson-1
title: "Styling Form Elements"
sidebar_label: Forms and Inputs
sidebar_position: 1
description: "Styling Form Elements"
tags: [courses,tailwind,Form Elements,intermediate-level,Introduction]
--- 
 
 
Tailwind CSS provides a range of utilities to style form elements, making them look consistent and visually appealing.

##### Basic Input Styling
You can easily style input fields using Tailwind's utility classes.

```html
<input type="text" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-500" placeholder="Enter text" />
```

##### Textarea Styling
Textareas can also be styled similarly.

```html
<textarea class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-500" rows="4" placeholder="Enter your message"></textarea>
```

##### Select Styling
Style select dropdowns with Tailwind CSS.

```html
<select class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-500">
  <option>Select an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```