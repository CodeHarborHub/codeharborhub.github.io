---
id: lesson-2
title: "Basic Shapes"
sidebar_label:  Basic Shapes
sidebar_position: 2
description: "Learn to Basic Shapes and Text"
tags: [courses,intermediate-level, Basic Shapes,Introduction]
---  

 

**Drawing Basic Shapes:**
- Rectangles: `fillRect(x, y, width, height)` and `strokeRect(x, y, width, height)`
- Paths: `beginPath()`, `moveTo(x, y)`, `lineTo(x, y)`, `closePath()`, `stroke()`, and `fill()`

**Example:**
```html
<canvas id="shapeCanvas" width="400" height="300"></canvas>
<script>
  var canvas = document.getElementById('shapeCanvas');
  var ctx = canvas.getContext('2d');

  // Draw a rectangle
  ctx.fillStyle = 'blue';
  ctx.fillRect(50, 50, 100, 50);

  // Draw a circle
  ctx.beginPath();
  ctx.arc(200, 75, 50, 0, Math.PI * 2, true);
  ctx.fillStyle = 'green';
  ctx.fill();

  // Draw a line
  ctx.beginPath();
  ctx.moveTo(300, 50);
  ctx.lineTo(350, 100);
  ctx.stroke();
</script>
```

**Drawing Text:**
- `fillText(text, x, y)`: Draws filled text at the specified coordinates.
- `strokeText(text, x, y)`: Draws outlined text at the specified coordinates.

**Example:**
```html
<canvas id="textCanvas" width="400" height="200"></canvas>
<script>
  var canvas = document.getElementById('textCanvas');
  var ctx = canvas.getContext('2d');

  ctx.font = '30px Arial';
  ctx.fillText('Hello Canvas', 50, 50);
  ctx.strokeText('Hello Canvas', 50, 100);
</script>
```
