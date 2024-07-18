---
id: lesson-3
title: "Basic Structure and Syntax"
sidebar_label: Structure and Syntax
sidebar_position: 3
description: "Basic Structure and Syntax"
tags: [courses,tailwind,Structure,Syntax,beginner-level,Introduction]
---
 
Tailwind CSS provides a set of predefined classes to help you style your elements directly in your HTML. Here are some examples:

1. **Typography**:
   ```html
   <h1 class="text-2xl font-bold">Hello, World!</h1>
   <p class="text-base text-gray-700">This is a paragraph.</p>
   ```

2. **Layout**:
   ```html
   <div class="flex items-center justify-center h-screen">
     <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
       <h2 class="text-xl">Card Title</h2>
       <p class="text-gray-500">Card description.</p>
     </div>
   </div>
   ```

3. **Spacing**:
   ```html
   <div class="m-4 p-4">
     <p class="mb-2">This is a paragraph with margin-bottom.</p>
     <p class="p-2 bg-gray-200">This is a paragraph with padding.</p>
   </div>
   ```

By using these utility classes, you can build complex designs without writing custom CSS, making your development process faster and more efficient.