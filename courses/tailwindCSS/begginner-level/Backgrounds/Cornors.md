---
id: lesson-4
title: "Rounded Corners and Shadows"
sidebar_label: Corner
sidebar_position: 4
description: "Rounded Corners and Shadows"
tags: [courses,tailwind,Rounded Corners,Shadows,beginner-level,Introduction]
--- 
   

1. **Rounded Corners**:
   - Tailwind CSS provides utilities for rounding corners with the `rounded-{size}` class.
   ```html
   <div class="rounded-sm">Small rounded corners</div>
   <div class="rounded-md">Medium rounded corners</div>
   <div class="rounded-lg">Large rounded corners</div>
   <div class="rounded-full">Fully rounded corners</div>
   ```

2. **Shadows**:
   - Apply shadows to elements using the `shadow-{size}` class.
   ```html
   <div class="shadow-sm">Small shadow</div>
   <div class="shadow-md">Medium shadow</div>
   <div class="shadow-lg">Large shadow</div>
   <div class="shadow-xl">Extra large shadow</div>
   <div class="shadow-2xl">2x large shadow</div>
   <div class="shadow-inner">Inner shadow</div>
   <div class="shadow-none">No shadow</div>
   ```

#### Practical Example: Styled Card
Here's a complete example of a styled card using Tailwind CSS background and border utilities:

```html
<div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-300">
  <img class="w-full" src="https://via.placeholder.com/300" alt="Placeholder Image">
  <div class="p-4">
    <h2 class="text-xl font-semibold mb-2">Card Title</h2>
    <p class="text-gray-700">This is a sample card description. It contains some text to illustrate the use of background colors, borders, rounded corners, and shadows in Tailwind CSS.</p>
  </div>
  <div class="px-4 pb-4">
    <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
      Action
    </button>
  </div>
</div>
```

In this example:
- The card has a white background with a gray border (`bg-white border border-gray-300`).
- It has medium rounded corners (`rounded-lg`) and a large shadow (`shadow-lg`).
- The button inside the card has a blue background that changes on hover (`bg-blue-500 hover:bg-blue-700`).
 