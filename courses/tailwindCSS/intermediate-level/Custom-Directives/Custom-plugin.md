---
id: lesson-3
title: "Writing Custom Plugins"
sidebar_label: Custom Plugins
sidebar_position: 3
description: "Writing Custom Plugins"
tags: [courses,tailwind,Custom Plugins,intermediate-level,Introduction]
--- 


You can create your own Tailwind CSS plugins to extend its capabilities.

##### Step 1: Create a Custom Plugin
Define a custom plugin in your `tailwind.config.js` file.

```javascript
const plugin = require('tailwindcss/plugin');

module.exports = {
  // other configurations...
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.bg-gradient': {
          backgroundImage: 'linear-gradient(to right, #4f46e5, #3b82f6)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
}
```

##### Step 2: Use the Custom Plugin
Now you can use your custom utility in your HTML.

```html
<div class="bg-gradient text-white p-6 rounded-md">
  Custom Gradient Background
</div>
```
 