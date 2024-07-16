---
id: lesson-2
title: "Creating Custom Themes"
sidebar_label: Custom Themes
sidebar_position: 2
description: "Creating Custom Themes"
tags: [courses,tailwind,Custom Themes,intermediate-level,Introduction]
--- 
 
 
You can customize your theme in `tailwind.config.js` to create a consistent design across your application.

##### Step 1: Extend the Default Theme
Add custom colors and styles to your theme.

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6',
          DEFAULT: '#1D4ED8',
          dark: '#1E40AF',
        },
        // Add other custom colors...
      },
    },
  },
}
```

##### Step 2: Using Custom Colors
Use your custom theme in your components.

```html
<div class="bg-primary-light dark:bg-primary-dark text-white p-6">
  <h1 class="text-xl">Themed Component</h1>
</div>
```
