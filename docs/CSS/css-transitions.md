# CSS Transitions

## Introduction
CSS transitions provide a way to control the speed of animation changes to CSS properties. This can enhance the user experience by making the changes appear smooth and visually appealing.

## Basic Concepts

### What is a Transition?
A transition is a way to animate a property change over a given duration.

```css
.element {
  transition: property duration timing-function delay;
}
```
## Transition Properties
### transition-property

Specifies the name of the CSS property the transition effect is for.
Example: width, height, background-color, etc

```css
.element {
  transition-property: background-color;
}
```

### transition-duration

Specifies the duration over which the transition should occur.
Example: 1s, 200ms, etc

```css
.element {
  transition-duration: 1s;
}
```

### transition-timing-function

Specifies the speed curve of the transition effect.
Example: ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier(n,n,n,n)

```css
.element {
  transition-timing-function: ease-in-out;
}
```

### transition-delay

Specifies when the transition effect will start.
Example: 0s, 1s, etc.

```css
.element {
  transition-delay: 0.5s;
}
```


## Shorthand Property
You can combine all the individual transition properties into one shorthand property.

```css
.element {
  transition: background-color 1s ease-in-out 0.5s;
}
```

# Basic Transition
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: blue;
      transition: background-color 1s ease;
    }
    .box:hover {
      background-color: red;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
```

# Transition Multiple Properties

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: blue;
      margin: 50px;
      transition: width 2s, height 2s, transform 2s;
    }
    .box:hover {
      width: 200px;
      height: 200px;
      transform: rotate(45deg);
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
```

# Delayed Transition
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: blue;
      transition: background-color 1s ease 2s; /* Delay of 2s */
    }
    .box:hover {
      background-color: red;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
```

# Conclusion
CSS transitions provide a simple way to create smooth animations and improve the user experience. By using the various transition properties, you can control the timing, speed, and behavior of your animations to create visually appealing effects.

```bash

This guide covers the essential properties, concepts, and examples to help users understand and apply CSS transitions in their projects.
```
