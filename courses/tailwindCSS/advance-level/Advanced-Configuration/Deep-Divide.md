---
id: lesson-1
title: "Deep Dive into the Tailwind Configuration File"
sidebar_label: Deep Dive Configure File
sidebar_position: 1
description: "Deep Dive into the Tailwind Configuration File"
tags: [courses,tailwind,Custom Classes,Advanced-level,Introduction]
--- 

 
The `tailwind.config.js` file is the heart of your Tailwind setup, allowing for extensive customization.

##### Basic Structure
Here’s a basic structure of the configuration file:

```javascript
module.exports = {
  mode: 'jit', // Just-in-Time mode for faster builds
  purge: ['./src/**/*.html', './src/**/*.js'], // Specify paths to purge unused styles
  darkMode: 'class', // Enable dark mode based on class
  theme: {
    extend: {}, // Extend default theme
  },
  variants: {
    extend: {}, // Extend variants
  },
  plugins: [],
}
```

##### Important Sections
1. **`mode`**: Set to `jit` for better performance and features.
2. **`purge`**: Specify files to scan for class usage, helping reduce CSS size.
3. **`theme`**: Customize default Tailwind settings like colors, spacing, etc.
4. **`variants`**: Control which variants are generated for utilities.
5. **`plugins`**: Include plugins to extend Tailwind's functionality.
