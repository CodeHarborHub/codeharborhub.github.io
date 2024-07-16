---
id: lesson-2
title: "Group, peer, and sibling variants"
sidebar_label: Type of Varients
sidebar_position: 2
description: "Group, peer, and sibling variants"
tags: [courses,tailwind,Type of variants,Advanced-level,Introduction]
---  

 

##### Group Variants
The `group` variant allows you to style child elements based on the state of a parent element.

###### Example
```html
<div class="group">
  <div class="p-4 bg-white rounded-md group-hover:bg-gray-200 transition">
    Group Hover Effect
  </div>
</div>
```

##### Peer Variants
The `peer` variant allows you to style an element based on the state of its sibling.

###### Example
```html
<div class="peer">
  <input type="checkbox" class="hidden peer-checked:bg-blue-500" />
  <label class="block bg-gray-300 p-4 rounded-md peer-checked:bg-blue-500">
    Peer Checked Effect
  </label>
</div>
```

##### Sibling Variants
You can also create sibling variants to style adjacent elements.

###### Example
```html
<div class="flex items-center">
  <input type="checkbox" id="sibling-toggle" class="hidden" />
  <label for="sibling-toggle" class="bg-gray-300 p-4 rounded-md cursor-pointer">
    Toggle
  </label>
  <div class="ml-4 p-4 bg-white rounded-md sibling-checked:bg-gray-200 transition">
    Sibling Checked Effect
  </div>
</div>
```
