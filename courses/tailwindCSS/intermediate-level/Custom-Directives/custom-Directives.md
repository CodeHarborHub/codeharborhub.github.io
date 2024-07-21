---
id: lesson-1
title: "Creating Custom Directives"
sidebar_label: Custom Directives
sidebar_position: 1
description: "Creating Custom Directives"
tags: [courses,tailwind,Custom Directives,intermediate-level,Introduction]
--- 
 
Tailwind CSS allows you to create custom utilities by combining existing utility classes using the `@apply` directive.

##### Step 1: Create a Custom CSS File
Create a new CSS file (e.g., `styles.css`) and include your custom styles.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.btn {
  @apply bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200;
}
```

##### Step 2: Use the Custom Utility
Now you can use your custom utility class in your HTML.

```html
<button class="btn">Click Me</button>
```
