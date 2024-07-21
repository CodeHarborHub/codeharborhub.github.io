---
id: lesson-3
title: "Combining Animations and Transitions"
sidebar_label: Animations and Transitions
sidebar_position: 3
description: "Combining Animations and Transitions"
tags: [courses,tailwind,Animations and Transitions,Advanced-level,Introduction]
--- 


##### Step 1: Define Keyframes and Transitions
You can combine animations with transitions for more dynamic effects.

###### Configuration
```javascript
module.exports = {
  theme: {
    extend: {
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        pulse: 'pulse 2s infinite',
        spin: 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}
```

##### Step 2: Apply Transitions and Animations
Use Tailwind's transition utilities along with custom animations.

###### HTML
```html
<div class="transition duration-500 ease-in-out transform hover:scale-110 animate-pulse bg-purple-500 text-white p-4 rounded-md">
  Pulse Animation with Transition
</div>
<div class="transition duration-1000 ease-in-out transform hover:rotate-45 animate-spin bg-orange-500 text-white p-4 rounded-md mt-4">
  Spin Animation with Transition
</div>
``` 