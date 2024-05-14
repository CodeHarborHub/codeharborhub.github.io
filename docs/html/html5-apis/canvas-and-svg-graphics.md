---
id: canvas-and-svg-graphics
title: Canvas and SVG Graphics in HTML
sidebar_label: Canvas and SVG Graphics
sidebar_position: 3
tags: [html, web-development, canvas, svg, graphics]
description: In this tutorial, you will learn how to use the Canvas and SVG graphics APIs in HTML to draw shapes, images, and animations on a web page.
---

# Canvas and SVG Graphics in HTML

## Introduction
In this tutorial, you will learn how to use the Canvas and SVG graphics APIs in HTML to draw shapes, images, and animations on a web page. Both Canvas and SVG offer powerful tools for creating rich web graphics, but they serve slightly different purposes. Canvas is ideal for dynamic, pixel-based graphics, while SVG is best suited for static or interactive vector graphics.

## Using Canvas
The HTML `<canvas>` element is used to draw graphics on a web page. The actual drawing is done with JavaScript. Here's a basic example that draws a rectangle:
```html
<html>
    <body>
        <canvas id="myCanvas" width="200" height="100">
        </canvas>
        <script>
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(0, 0, 150, 75);
        </script>
     </body>
</html>
```

### Example Explained
- The `<canvas>` element creates a drawing surface.
- JavaScript is used to access the drawing context and perform the drawing.
- The `getContext("2d")` method gets the 2D drawing context.
- Various methods are used to draw on the canvas.

## Using SVG
SVG (Scalable Vector Graphics) is used to define vector-based graphics for the Web. Here's a basic example that draws a circle:

```html
<html>
<body>
    <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>
</body>
</html>
```

### Example Explained
- The `<svg>` element defines a container for SVG graphics.
- The `<circle>` element is used to draw a circle.
- Attributes of the `<circle>` element define the shape's properties.

## Differences Between Canvas and SVG
- **Canvas** is pixel-based, whereas **SVG** is vector-based.
- Canvas is better for dynamic graphics and intense computational tasks.
- SVG is better for high-quality static graphics, and it supports interactivity and animation.

## Comparison of SVG and Canvas
The table below shows some important differences between Canvas and SVG:
<table>
    <tbody>
        <tr>
            <th>SVG</th>
            <th>Canvas</th>
        </tr>
        <tr>
            <td>
                <ul>
                    <li>Resolution independent</li>
                    <li>Support for event handlers</li>
                    <li>Good text rendering capabilities</li>
                    <li>Slow rendering if complex</li>
                    <li>Not suited for game applications</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Resolution dependent</li>
                    <li>No support for event handlers</li>
                    <li>Poor text rendering capabilities</li>
                    <li>You can save the resulting image as .png or .jpg</li>
                    <li>Well suited for graphic-intensive games</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## Conclusion
Both Canvas and SVG graphics play important roles in modern web development. Choosing between them depends on the specific needs of your project. Canvas offers a flexible pixel-based approach for dynamic graphics, while SVG provides a scalable, interactive solution for vector graphics. Understanding how to use both technologies allows you to take full advantage of their capabilities to create engaging and visually appealing web pages.

Remember to consider the performance implications of each approach and test across different browsers to ensure compatibility and optimal user experience.