---
id: lesson-1
title: "FlexBox"
sidebar_label: FlexBox
sidebar_position: 1
description: "Understanding flexBox Layout"
tags: [courses,tailwind,Responsive Design,Layouts,flexBox,beginner-level,Introduction]
--- 
 
Tailwind CSS provides a set of utilities for creating flexible layouts using the Flexbox model. These utilities allow you to easily align, justify, and distribute space among items within a container.

##### Flexbox Container
To use Flexbox, you first need to make an element a flex container using the `flex` class.
```html
<div class="flex">
  <!-- Flex items go here -->
</div>
```

##### Direction
You can set the direction of the flex items using the `flex-row`, `flex-row-reverse`, `flex-col`, and `flex-col-reverse` classes.
```html
<div class="flex flex-row">
  <!-- Items are arranged in a row -->
</div>
<div class="flex flex-col">
  <!-- Items are arranged in a column -->
</div>
```

##### Alignment
Align items along the main axis using the `justify-{value}` classes:
- `justify-start`
- `justify-center`
- `justify-end`
- `justify-between`
- `justify-around`
- `justify-evenly`

```html
<div class="flex justify-center">
  <!-- Items are centered along the main axis -->
</div>
```

Align items along the cross axis using the `items-{value}` classes:
- `items-start`
- `items-center`
- `items-end`
- `items-baseline`
- `items-stretch`

```html
<div class="flex items-center">
  <!-- Items are centered along the cross axis -->
</div>
```

##### Flex Grow, Shrink, and Basis
Control the flex-grow, flex-shrink, and flex-basis properties of flex items using the `flex-{value}`, `flex-grow`, and `flex-shrink` classes.
```html
<div class="flex">
  <div class="flex-grow">I grow</div>
  <div class="flex-shrink">I shrink</div>
  <div class="flex-initial">I don't grow or shrink</div>
</div>
```

#### Building Layouts with Flexbox

Here’s an example of a basic layout using Flexbox:

```html
<div class="flex flex-col md:flex-row">
  <div class="flex-1 bg-blue-500 p-4">Column 1</div>
  <div class="flex-1 bg-green-500 p-4">Column 2</div>
  <div class="flex-1 bg-red-500 p-4">Column 3</div>
</div>
```

In this example:
- On small screens, items are arranged in a column (`flex-col`).
- On medium screens and larger, items are arranged in a row (`md:flex-row`).
- Each item grows to take up equal space (`flex-1`).

