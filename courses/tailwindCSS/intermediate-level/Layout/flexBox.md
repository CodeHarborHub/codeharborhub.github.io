---
id: lesson-1
title: "Advanced Flexbox Utilities"
sidebar_label: Advanced flexBox
sidebar_position: 1
description: "Advanced Flexbox Utilities"
tags: [courses,tailwind,Advanced Flexbox,beginner-level,Introduction]
--- 
   
Tailwind CSS provides a rich set of utilities for creating complex and responsive layouts using Flexbox.

##### Flex Direction
You can set the direction of flex items with `flex-row` and `flex-col` along with their reverse counterparts.
```html
<div class="flex flex-row-reverse">
  <!-- Items are arranged in a row but in reverse order -->
</div>
<div class="flex flex-col-reverse">
  <!-- Items are arranged in a column but in reverse order -->
</div>
```

##### Justify Content
The `justify-{value}` classes align items along the main axis.
- `justify-start`, `justify-center`, `justify-end`, `justify-between`, `justify-around`, `justify-evenly`

```html
<div class="flex justify-between">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

##### Align Items
The `items-{value}` classes align items along the cross axis.
- `items-start`, `items-center`, `items-end`, `items-baseline`, `items-stretch`

```html
<div class="flex items-center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

##### Flex Wrap
Control wrapping behavior with the `flex-wrap` and `flex-nowrap` classes.
```html
<div class="flex flex-wrap">
  <!-- Items will wrap onto multiple lines -->
</div>
<div class="flex flex-nowrap">
  <!-- Items will not wrap onto multiple lines -->
</div>
```

##### Order
Change the visual order of elements using the `order-{value}` classes.
```html
<div class="flex">
  <div class="order-2">First item (visual)</div>
  <div class="order-1">Second item (visual)</div>
</div>
```

##### Align Self
Adjust alignment for individual flex items using the `self-{value}` classes.
- `self-auto`, `self-start`, `self-center`, `self-end`, `self-stretch`

```html
<div class="flex">
  <div class="self-start">Aligned to start</div>
  <div class="self-center">Aligned to center</div>
  <div class="self-end">Aligned to end</div>
</div>
```