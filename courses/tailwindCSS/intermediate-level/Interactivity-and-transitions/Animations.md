---
id: lesson-3
title: "Creating Animations with Tailwind CSS"
sidebar_label: Animations
sidebar_position: 3
description: "Creating Animations with Tailwind CSS"
tags: [courses,tailwind,Animations,intermediate-level,Introduction]
--- 


For more complex animations, you can create custom animations using the `@keyframes` rule alongside Tailwind CSS.

##### Example: Simple Bounce Animation
Define a custom animation in your CSS file:

```css
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.bounce {
  animation: bounce 1s infinite;
}
```

Then apply the animation class to an element:

```html
<div class="bg-blue-500 text-white p-4 rounded-md bounce">
  Bouncing Element
</div>
```

##### Example: Using Tailwind's Animation Utilities
Tailwind CSS also includes built-in animation classes for common effects. For instance, you can create a simple fade-in effect.

```html
<div class="opacity-0 transition-opacity duration-500 hover:opacity-100">
  Hover to fade in!
</div>
```

#### Practical Example: Combining All Interactivity and Transitions
Here’s a complete example that combines hover, focus, active states, transitions, and animations.

```html
<div class="flex justify-center items-center h-screen">
  <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 active:bg-blue-800 transition duration-200 transform hover:scale-105">
    Click Me
  </button>

  <div class="bg-gray-300 p-6 rounded-md transition transform hover:scale-105 ml-4">
    <p class="text-center">Hover to scale up!</p>
  </div>

  <div class="bg-green-500 text-white p-4 rounded-md transition-opacity duration-500 opacity-0 hover:opacity-100 ml-4">
    Fade In on Hover
  </div>

  <div class="bg-blue-500 text-white p-4 rounded-md bounce ml-4">
    Bouncing Element
  </div>
</div>
```
 