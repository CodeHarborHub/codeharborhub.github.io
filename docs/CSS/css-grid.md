# CSS Grid

## Introduction
CSS Grid Layout is a powerful tool for creating two-dimensional layouts on the web. It allows you to design complex web layouts with rows and columns, making it easier to create responsive designs.

## Basic Concepts

### Grid Container
A grid container is an element with `display: grid`. The children of this container become grid items.

```css
.container {
  display: grid;
}
```

### Grid Items
The direct children of a grid container automatically become grid items.

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```
## Grid Properties
### Container Properties
#### grid-template-columns and grid-template-rows

Defines the columns and rows of the grid.

```css
.container {
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-rows: 100px 200px; /* 2 rows with specific heights */
}
```

#### grid-gap

Defines the gaps (gutters) between rows and columns.
```css
.container {
  grid-gap: 10px; /* gap between rows and columns */
}
```

#### grid-template-areas

Defines named grid areas.


```css
.container {
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';
}
```
## Item Properties
#### grid-column and grid-row

Specifies the start and end lines for the item.
```css
.item {
  grid-column: 1 / 3; /* spans from column line 1 to 3 */
  grid-row: 1 / 2; /* spans from row line 1 to 2 */
}
```

#### grid-area

Specifies a grid item’s size and location within the grid by referencing the name of a grid area.

```css
.item {
  grid-area: header;
}
```
# Examples
## Basic Grid Layout
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      grid-gap: 10px;
      background-color: #f4f4f4;
      padding: 20px;
    }
    .item {
      background-color: #61dafb;
      padding: 20px;
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
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
  </div>
</body>
</html>
```

## Grid Layout with Areas

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      display: grid;
      grid-template-areas:
        'header header header'
        'sidebar content content'
        'footer footer footer';
      grid-gap: 10px;
      background-color: #f4f4f4;
      padding: 20px;
    }
    .header {
      grid-area: header;
      background-color: #61dafb;
    }
    .sidebar {
      grid-area: sidebar;
      background-color: #ff6347;
    }
    .content {
      grid-area: content;
      background-color: #ffa500;
    }
    .footer {
      grid-area: footer;
      background-color: #32cd32;
    }
    .item {
      padding: 20px;
      font-size: 20px;
      color: white;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header item">Header</div>
    <div class="sidebar item">Sidebar</div>
    <div class="content item">Content</div>
    <div class="footer item">Footer</div>
  </div>
</body>
</html>
```

# Conclusion
CSS Grid is a powerful tool for creating complex and responsive web layouts. By understanding its various properties, you can design flexible and efficient layouts with ease.


This guide covers the essential properties, concepts, and examples to help users understand and apply CSS Grid in their projects.
