---
id: lesson-2
title: "Reducing Render-blocking Resources"
sidebar_label: Reducing Render-blocking
sidebar_position: 2
description: "Learn to Reducing Render-blocking Resources."
tags: [courses,advance-level,Render-blocking,Introduction]
---  


Render-blocking resources can significantly slow down the rendering of a webpage. Here are strategies to minimize their impact:

1. **Defer Loading of JavaScript:**
   - Use the `defer` or `async` attributes for script tags to prevent blocking the rendering of the page.
   ```html
   <script src="script.js" defer></script>
   ```

2. **Optimize CSS Delivery:**
   - Combine multiple CSS files into one to reduce HTTP requests and load time.
   - Use critical CSS to inline essential styles needed for the initial render.
   ```html
   <style>
     /* Critical CSS here */
   </style>
   ```

3. **Load Non-critical CSS Asynchronously:**
   - Load non-essential stylesheets after the main content has loaded.
   ```html
   <link rel="stylesheet" href="non-critical.css" media="print" onload="this.media='all'">
   ```

4. **Reduce the Number of HTTP Requests:**
   - Combine CSS and JavaScript files where possible to minimize the number of requests.