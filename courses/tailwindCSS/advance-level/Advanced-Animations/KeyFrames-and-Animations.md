---
id: lesson-2
title: "Using Keyframes and Animation Utilities"
sidebar_label: Keyframes and Animation
sidebar_position: 2
description: "Using Keyframes and Animation Utilities"
tags: [courses,tailwind,Keyframes and Animation,Advanced-level,Introduction]
--- 


##### Step 1: Define Keyframes
Define keyframes in your Tailwind CSS configuration.

###### Configuration
```javascript
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideIn: 'slideIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
```

##### Step 2: Use Animation Utilities
Apply the custom animations to your elements.

###### HTML
```html
<div class="animate-fadeIn bg-green-500 text-white p-4 rounded-md">
  Fade In Animation
</div>
<div class="animate-slideIn bg-yellow-500 text-white p-4 rounded-md mt-4">
  Slide In Animation
</div>
```
