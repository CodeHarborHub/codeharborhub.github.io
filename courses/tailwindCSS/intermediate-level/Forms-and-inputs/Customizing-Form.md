---
id: lesson-2
title: "Customizing Form Controls"
sidebar_label: Form Customizing
sidebar_position: 2
description: "Customizing Form Controls"
tags: [courses,tailwind,Form Controls,intermediate-level,Introduction]
--- 
 
 
You can create custom styles for form controls to enhance their appearance and usability.

##### Custom Checkbox
Use Tailwind to style checkboxes with custom appearances.

```html
<label class="flex items-center">
  <input type="checkbox" class="form-checkbox text-blue-500 h-5 w-5" />
  <span class="ml-2">Accept terms and conditions</span>
</label>
```

##### Custom Radio Buttons
Style radio buttons using Tailwind CSS as well.

```html
<label class="flex items-center">
  <input type="radio" name="option" class="form-radio text-blue-500 h-5 w-5" />
  <span class="ml-2">Option 1</span>
</label>
<label class="flex items-center">
  <input type="radio" name="option" class="form-radio text-blue-500 h-5 w-5" />
  <span class="ml-2">Option 2</span>
</label>
```

##### Custom Switch
Create a toggle switch with Tailwind CSS.

```html
<label class="flex items-center">
  <input type="checkbox" class="hidden" />
  <div class="relative">
    <div class="block bg-gray-300 w-14 h-8 rounded-full"></div>
    <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
  </div>
  <span class="ml-2">Enable notifications</span>
</label>
```