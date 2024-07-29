# CSS Flexbox

## Introduction
Flexbox, or the Flexible Box Layout, is a CSS layout module designed to make it easier to design flexible and responsive layout structures without using floats or positioning.

## Basic Concepts

### Flex Container
A flex container is an element with `display: flex`. The children of this container become flex items.

```css
.container {
  display: flex;
}
```

-Flex Items:
The direct children of a flex container automatically become flex items.

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

# Flexbox Properties:
## Container Properties:
### flex-direction:

-Defines the direction of the flex items.
-Possible values: row, row-reverse, column, column-reverse.

```css
.container {
  flex-direction: row; /* default */
}
```

### flex-wrap:

-Specifies whether flex items should wrap or not.
-Possible values: nowrap, wrap, wrap-reverse.

```css
.container {
  flex-wrap: wrap;
}
```

### justify-content:
-Defines the alignment along the main axis.
-Possible values: flex-start, flex-end, center, space-between, space-around, space-evenly.

```css
.container {
  justify-content: center;
}
```
### align-items:
-Defines the default behavior for how flex items are laid out along the cross axis.
-Possible values: flex-start, flex-end, center, baseline, stretch

```css
.container {
  align-items: stretch; /* default */
}
```

### align-content:

-Aligns a flex container’s lines within the flex container when there is extra space in the cross-axis.
-Possible values: flex-start, flex-end, center, space-between, space-around, stretch.

```css
.container {
  align-content: stretch; /* default */
}
```

# Item Properties
### order

-Controls the order in which flex items appear in the flex container.
```css
.item {
  order: 1; /* default is 0 */
}
```

### flex-grow

-Defines the ability for a flex item to grow if necessary.

```css
.item {
  flex-grow: 1; /* default is 0 */
}
```

### lex-shrink

-Defines the ability for a flex item to shrink if necessary.
```css
.item {
  flex-shrink: 1; /* default is 1 */
}
```

## Basic Flexbox Layout
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f4f4f4;
    }
    .item {
      background-color: #61dafb;
      padding: 20px;
      margin: 10px;
      font-size: 20px;
      color: white;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
</body>
</html>
```

## Responsive Flexbox Layout
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      background-color: #f4f4f4;
      padding: 20px;
    }
    .item {
      background-color: #61dafb;
      padding: 20px;
      font-size: 20px;
      color: white;
      border-radius: 5px;
      flex: 1 1 200px; /* Grow and shrink with a basis of 200px */
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
  </div>
</body>
</html>
```

## Conclusion:
Flexbox is a powerful layout tool that simplifies the process of creating complex layouts and responsive designs. With its various properties, you can control the arrangement, alignment, and spacing of elements efficiently.
