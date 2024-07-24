---
id: lesson-2
title: "Combining Utility Classes"
sidebar_label: Combining Utility Classes
sidebar_position: 2
description: "Combining utility classes allows you to create complex styles directly in your HTML without writing custom CSS"
tags: [courses,tailwind,utility classes,beginner-level,Introduction]
---
 
Combining utility classes allows you to create complex styles directly in your HTML without writing custom CSS. Here's how you can combine utility classes for various effects:

1. **Button Styling**:
   ```html
   <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
     Click Me
   </button>
   ```

2. **Card Component**:
   ```html
   <div class="max-w-sm rounded overflow-hidden shadow-lg">
     <img class="w-full" src="image.jpg" alt="Sunset in the mountains">
     <div class="px-6 py-4">
       <div class="font-bold text-xl mb-2">Card Title</div>
       <p class="text-gray-700 text-base">
         Card content goes here. This is a brief description of the card.
       </p>
     </div>
     <div class="px-6 pt-4 pb-2">
       <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
       <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
       <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>
     </div>
   </div>
   ```

3. **Responsive Layout**:
   ```html
   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
     <div class="bg-red-500 p-4">Responsive item 1</div>
     <div class="bg-green-500 p-4">Responsive item 2</div>
     <div class="bg-blue-500 p-4">Responsive item 3</div>
     <div class="bg-yellow-500 p-4">Responsive item 4</div>
   </div>
   ```

By understanding and effectively using utility classes, you can create efficient, maintainable, and scalable designs. Tailwind CSS's utility-first approach encourages a modular way of styling that simplifies the process of building custom designs.