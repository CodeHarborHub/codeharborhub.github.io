---
id: lesson-3
title: "Switching Between Light and Dark Modes"
sidebar_label: switch Themes
sidebar_position: 3
description: "Switching Between Light and Dark Modes"
tags: [courses,tailwind,switch Themes,intermediate-level,Introduction]
--- 
  
You can implement a toggle switch to allow users to switch between light and dark modes.

##### Step 1: Create a Toggle Switch
Add a toggle button that switches classes on the `html` or `body` element.

```html
<label class="flex items-center cursor-pointer">
  <input type="checkbox" id="toggle" class="hidden" />
  <div class="relative">
    <div class="block bg-gray-300 w-14 h-8 rounded-full"></div>
    <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
  </div>
  <span class="ml-2">Toggle Dark Mode</span>
</label>
```

##### Step 2: JavaScript to Handle Toggle
Use JavaScript to add or remove the dark mode class when the toggle is switched.

```javascript
const toggle = document.getElementById('toggle');

toggle.addEventListener('change', () => {
  document.documentElement.classList.toggle('dark');
});
```

##### Complete Example
Here’s a full example that combines everything.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <title>Dark Mode Example</title>
</head>
<body class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-3xl">Dark Mode Toggle Example</h1>
    
    <label class="flex items-center cursor-pointer mt-4">
      <input type="checkbox" id="toggle" class="hidden" />
      <div class="relative">
        <div class="block bg-gray-300 w-14 h-8 rounded-full"></div>
        <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
      </div>
      <span class="ml-2">Toggle Dark Mode</span>
    </label>

    <div class="bg-gray-300 dark:bg-gray-700 p-6 rounded-md mt-4 transition">
      <h2 class="text-xl">Hello, World!</h2>
    </div>
  </div>

  <script>
    const toggle = document.getElementById('toggle');
    toggle.addEventListener('change', () => {
      document.documentElement.classList.toggle('dark');
    });
  </script>
</body>
</html>
```
 