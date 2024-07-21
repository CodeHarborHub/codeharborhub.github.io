---
id: lesson-3
title: "Combining multiple state variants"
sidebar_label: multiple state variants
sidebar_position: 3
description: "Combining multiple state variants"
tags: [courses,tailwind,multiple state variants,Advanced-level,Introduction]
---  
 
You can combine multiple state variants for more complex interactions.

###### Example
```html
<button class="bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded">
  Combined State Variants Button
</button>
```

##### Group and Hover Combination
```html
<div class="group">
  <div class="p-4 bg-white rounded-md transition group-hover:bg-gray-200 group-focus:bg-gray-300">
    Group Hover and Focus Effect
  </div>
</div>
```

##### Peer and Focus Combination
```html
<div>
  <input type="checkbox" id="peer-toggle" class="hidden peer" />
  <label for="peer-toggle" class="block bg-gray-300 p-4 rounded-md cursor-pointer peer-checked:bg-blue-500">
    Peer Checked Effect
  </label>
  <input type="text" class="peer mt-4 p-2 border border-gray-300 rounded-md peer-focus:border-blue-500" placeholder="Focus to change border color" />
</div>
```

##### Sibling and Active Combination
```html
<div class="flex items-center">
  <input type="checkbox" id="sibling-active-toggle" class="hidden" />
  <label for="sibling-active-toggle" class="bg-gray-300 p-4 rounded-md cursor-pointer">
    Toggle
  </label>
  <div class="ml-4 p-4 bg-white rounded-md transition sibling-checked:bg-gray-200 sibling-active:bg-gray-400">
    Sibling Checked and Active Effect
  </div>
</div>
```