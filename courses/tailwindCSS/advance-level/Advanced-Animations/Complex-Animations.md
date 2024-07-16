---
id: lesson-1
title: "Creating Complex Animations"
sidebar_label: Complex Animations
sidebar_position: 1
description: "Creating Complex Animations"
tags: [courses,tailwind,Creating Complex Animations,Advanced-level,Introduction]
--- 
 
Tailwind CSS provides utilities for creating complex animations, but you can also define custom animations using keyframes and utility classes.

##### Example: Basic Animation
###### HTML
```html
<div class="animate-bounce bg-blue-500 text-white p-4 rounded-md">
  Bouncing Animation
</div>
```

##### Custom Keyframes
You can define custom keyframes in your `tailwind.config.js` file.

###### Configuration
```javascript
module.exports = {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
```

###### HTML
```html
<div class="animate-wiggle bg-red-500 text-white p-4 rounded-md">
  Custom Wiggle Animation
</div>
```
