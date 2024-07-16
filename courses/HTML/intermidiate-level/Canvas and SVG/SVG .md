---
id: lesson-3
title: "SVG"
sidebar_label:  SVG
sidebar_position: 3
description: "Learn to SVG"
tags: [courses,intermediate-level, SVG,Introduction]
---   


### Introduction to SVG (Scalable Vector Graphics)

SVG is an XML-based format for vector graphics that can be scaled to any size without losing quality. SVG images and their behaviors are defined in XML text files. SVG provides a way to describe two-dimensional graphics in XML.

**Basic Example:**
```html
<svg width="400" height="200">
  <rect x="50" y="20" width="150" height="100" fill="blue" />
  <circle cx="250" cy="70" r="50" fill="green" />
  <text x="50" y="150" font-family="Arial" font-size="30" fill="black">Hello SVG</text>
</svg>
```

In this example, a blue rectangle, a green circle, and text are drawn using SVG.

**Key Features of SVG:**
- **Scalability:** SVG graphics retain their quality at any size.
- **Interactivity:** SVG elements can be interactive and styleable with CSS.
- **Animation:** SVG supports animations and transitions.
- **Accessibility:** SVG content is accessible and can be manipulated through the DOM.

**Example with SVG Elements:**
```html
<svg width="500" height="300">
  <!-- Rectangle -->
  <rect x="50" y="50" width="150" height="100" fill="blue" stroke="black" stroke-width="2"/>
  
  <!-- Circle -->
  <circle cx="300" cy="100" r="50" fill="green" stroke="black" stroke-width="2"/>
  
  <!-- Line -->
  <line x1="50" y1="200" x2="450" y2="200" stroke="red" stroke-width="2"/>
  
  <!-- Ellipse -->
  <ellipse cx="150" cy="250" rx="100" ry="50" fill="purple" stroke="black" stroke-width="2"/>
  
  <!-- Polygon -->
  <polygon points="400,150 450,250 350,250" fill="yellow" stroke="black" stroke-width="2"/>
  
  <!-- Text -->
  <text x="50" y="50" font-family="Arial" font-size="24" fill="black">SVG Example</text>
</svg>
```

In this extended example, various SVG shapes such as rectangles, circles, lines, ellipses, polygons, and text are illustrated, showcasing the versatility and power of SVG for creating vector graphics on the web.