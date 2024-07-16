---
id: lesson-2
title: "Using Transition Utilities"
sidebar_label: Transitions
sidebar_position: 2
description: "Using Transition Utilities"
tags: [courses,tailwind,Transitions,intermediate-level,Introduction]
--- 


#### 
Tailwind CSS provides transition utilities to animate changes in properties smoothly.

##### Basic Transition Example
Use `transition` utilities to apply transitions to hover and focus states.

```html
<div class="bg-gray-300 p-6 rounded-md transition transform hover:scale-105">
  <p class="text-center">Hover to scale up!</p>
</div>
```

##### Transition on Specific Properties
You can specify which properties to transition using `transition-{property}` classes.

```html
<button class="bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-700">
  Transition Colors
</button>
```

##### Example: Transitioning Multiple Properties
You can combine transitions for a smoother effect.

```html
<div class="bg-gray-300 p-6 rounded-md transition-all duration-300 hover:bg-gray-400 hover:shadow-lg">
  <p class="text-center">Hover for a smooth transition!</p>
</div>
```