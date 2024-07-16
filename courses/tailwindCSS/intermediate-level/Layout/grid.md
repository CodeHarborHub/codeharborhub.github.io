---
id: lesson-2
title: "Advanced Grid Layout Techniques"
sidebar_label: Grid Layout
sidebar_position: 2
description: "Advanced Grid Layout Techniques"
tags: [courses,tailwind,Grid Layout,beginner-level,Introduction]
--- 


Tailwind CSS's grid utilities can be used to create complex, responsive layouts.

##### Grid Template Columns and Rows
Define custom column and row configurations using the `grid-cols-{number}` and `grid-rows-{number}` classes.
```html
<div class="grid grid-cols-3 grid-rows-2 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
```

##### Span Columns and Rows
Span grid items across multiple columns or rows using the `col-span-{number}` and `row-span-{number}` classes.
```html
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">Span 2 columns</div>
  <div>Item</div>
  <div class="row-span-2">Span 2 rows</div>
  <div>Item</div>
  <div>Item</div>
</div>
```

##### Grid Auto Flow
Control how items are automatically placed within the grid using the `grid-flow-{value}` classes.
- `grid-flow-row`, `grid-flow-col`, `grid-flow-row-dense`, `grid-flow-col-dense`

```html
<div class="grid grid-cols-3 grid-flow-col">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
```

##### Align Content
Adjust the alignment of the entire grid within its container using the `content-{value}` classes.
- `content-start`, `content-center`, `content-end`, `content-between`, `content-around`, `content-evenly`

```html
<div class="grid grid-cols-3 content-center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

##### Justify Items and Align Items
Control the alignment of grid items using the `justify-items-{value}` and `items-{value}` classes.
- `justify-items-start`, `justify-items-center`, `justify-items-end`, `justify-items-stretch`
- `items-start`, `items-center`, `items-end`, `items-stretch`

```html
<div class="grid grid-cols-3 justify-items-center items-center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```