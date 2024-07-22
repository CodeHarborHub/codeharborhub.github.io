---
id: lesson-2
title: "Using Meta Tags for Viewport"
sidebar_label:  Meta Tag
sidebar_position: 2
description: "Learn to Using Meta Tags for Viewport"
tags: [courses,intermediate-level,Meta Tag,Introduction]
---   
   

The viewport meta tag controls the layout of web pages on mobile browsers by setting the visible area of the web page. It is essential for responsive design as it tells the browser how to adjust the page's dimensions and scaling.

**Example:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Attributes:**
- `width`: Sets the width of the viewport (e.g., `width=device-width` sets it to the device's width).
- `initial-scale`: Sets the initial zoom level when the page is first loaded.
- `minimum-scale`, `maximum-scale`: Limits the zoom level.
- `user-scalable`: Allows or disallows user scaling (zooming) of the page.

**Explanation:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- `width=device-width`: The width of the viewport will be the width of the device.
- `initial-scale=1.0`: The page will load with a zoom level of 1 (no zoom).

