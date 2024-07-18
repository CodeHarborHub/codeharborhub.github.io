---
id: lesson-1
title: "Drawing Graphics"
sidebar_label:  Drawing Graphics
sidebar_position: 1
description: "Learn to Drawing Graphics"
tags: [courses,intermediate-level, Drawing Graphics,Introduction]
---   

The `<canvas>` element in HTML5 is used to draw graphics on a web page via scripting, usually JavaScript. It provides a drawable region defined in HTML code with attributes like width and height. The actual drawing is done using a JavaScript API.

**Example:**
```html
<canvas id="myCanvas" width="400" height="300"></canvas>
<script>
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(20, 20, 150, 100);
</script>
```

In this example, a red rectangle is drawn on the canvas.

