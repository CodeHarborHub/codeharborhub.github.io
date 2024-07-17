---
id: lesson-1
title: "Enabling Dark Mode"
sidebar_label: Dark Mode
sidebar_position: 1
description: "Enabling Dark Mode"
tags: [courses,tailwind,Dark Mode,intermediate-level,Introduction]
--- 
  
Tailwind CSS makes it easy to implement dark mode using the `dark` variant.

##### Step 1: Enable Dark Mode
In your `tailwind.config.js`, set the `darkMode` option. You can choose either `media` or `class` strategy.

```javascript
module.exports = {
  darkMode: 'class', // or 'media'
  // other configurations...
}
```

##### Step 2: Applying Dark Mode Styles
Use the `dark:` variant to specify styles for dark mode.

```html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6">
  <h1 class="text-xl">Hello, World!</h1>
</div>
```
