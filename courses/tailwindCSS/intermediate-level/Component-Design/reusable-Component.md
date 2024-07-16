---
id: lesson-1
title: "Building Reusable Components with Tailwind CSS"
sidebar_label: Reusable Component
sidebar_position: 1
description: "Building Reusable Components with Tailwind CSS"
tags: [courses,tailwind,Reusable Component,intermediate-level,Introduction]
--- 
 
Creating reusable components is essential for maintaining a consistent design throughout your application. Here’s how to build components using Tailwind CSS.

##### Example: Button Component
You can create a reusable button component with Tailwind CSS classes to ensure consistent styling.

```html
<button class="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
  Click Me
</button>
```

**Creating Variants**:
You can also create different variants of the button by adding more classes.

```html
<button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
  Primary Button
</button>

<button class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-200">
  Secondary Button
</button>
```

##### Example: Card Component
Here’s how to create a card component that can be reused throughout your application.

```html
<div class="bg-white shadow-md rounded-lg p-6 max-w-sm">
  <h2 class="text-xl font-bold mb-2">Card Title</h2>
  <p class="text-gray-700 mb-4">This is a simple card component using Tailwind CSS.</p>
  <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
    Learn More
  </button>
</div>
```