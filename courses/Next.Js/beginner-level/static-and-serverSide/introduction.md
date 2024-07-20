---
id: lesson-2
title: "Static and Server-Side Rendering in Next.js"
sidebar_label: Static and Server-Side Rendering 
sidebar_position: 2
description: "Static and Server-Side Rendering in Next.js"
tags: [courses,beginner-level,FramWorks,Introduction]
---
 

#### Difference Between Static and Server-Side Rendering

**Static Rendering (Static Site Generation - SSG)**:
- **Pre-rendering**: Pages are generated at build time, and the HTML is created once and reused for each request.
- **Performance**: Faster since the content is pre-rendered and served as static files.
- **Use Cases**: Ideal for pages that do not require frequent updates, such as blogs, documentation, and marketing pages.

**Server-Side Rendering (SSR)**:
- **On-Demand Rendering**: Pages are generated on each request, fetching data and rendering HTML dynamically.
- **Performance**: Slower compared to static rendering because the server must generate the HTML for each request.
- **Use Cases**: Suitable for pages that require real-time data or frequent updates, such as dashboards, user profiles, and dynamic content.
