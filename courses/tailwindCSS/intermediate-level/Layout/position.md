---
id: lesson-3
title: "Positioning Utilities"
sidebar_label: Positions
sidebar_position: 3
description: "Positioning Utilities"
tags: [courses,tailwind,Positions,beginner-level,Introduction]
--- 


Tailwind CSS includes utilities for positioning elements using the `position` property.

##### Static, Relative, Absolute, Fixed, and Sticky
- `static`, `relative`, `absolute`, `fixed`, `sticky`

```html
<div class="relative">
  <div class="absolute top-0 left-0">
    Absolutely positioned
  </div>
</div>
```

##### Z-Index
Control the stacking order of elements using the `z-{index}` classes.
- `z-0`, `z-10`, `z-20`, `z-30`, `z-40`, `z-50`, `z-auto`

```html
<div class="relative z-10">
  <div class="absolute z-20">
    Higher stacking order
  </div>
</div>
```

##### Inset
Set the top, right, bottom, and left properties using the `inset-{size}`, `inset-x-{size}`, `inset-y-{size}`, `top-{size}`, `right-{size}`, `bottom-{size}`, `left-{size}` classes.

```html
<div class="relative">
  <div class="absolute inset-0">
    Inset on all sides
  </div>
  <div class="absolute inset-x-0 bottom-0">
    Inset horizontally and at the bottom
  </div>
</div>
```

#### Practical Example: Advanced Layout
Here’s an example combining advanced flexbox, grid, and positioning utilities:

```html
<div class="flex flex-col lg:flex-row h-screen">
  <div class="flex-1 bg-blue-500 p-4">
    Sidebar
  </div>
  <div class="flex-1 grid grid-cols-3 grid-rows-2 gap-4 p-4 relative">
    <div class="col-span-3 bg-green-500">Header</div>
    <div class="row-span-2 bg-red-500">Main Content</div>
    <div class="bg-yellow-500">Sidebar Item 1</div>
    <div class="bg-yellow-500">Sidebar Item 2</div>
    <div class="absolute bottom-0 right-0 bg-purple-500 p-4 z-20">
      Footer
    </div>
  </div>
</div>
```

In this example:
- The layout uses a combination of flexbox and grid to create a responsive design.
- The sidebar adjusts based on the screen size (`flex-col lg:flex-row`).
- The main content area utilizes a grid with spanning items (`col-span-3`, `row-span-2`).
- The footer is positioned absolutely within the main content area.
 