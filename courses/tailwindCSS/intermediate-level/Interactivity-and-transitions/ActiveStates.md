---
id: lesson-1
title: "Adding Hover, Focus, and Active States"
sidebar_label: Active States
sidebar_position: 1
description: "Adding Hover, Focus, and Active States"
tags: [courses,tailwind,Active States,intermediate-level,Introduction]
--- 
 
Tailwind CSS allows you to easily add interactivity to your components using state variants.

##### Hover States
Use `hover:` prefix to change styles on hover.

```html
<button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
  Hover Me
</button>
```

##### Focus States
Use `focus:` prefix to style elements when they are focused.

```html
<input type="text" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-500" placeholder="Focus on me" />
```

##### Active States
Use `active:` prefix to change styles when an element is actively pressed.

```html
<button class="bg-blue-500 text-white py-2 px-4 rounded active:bg-blue-800 transition duration-200">
  Active State
</button>
```
