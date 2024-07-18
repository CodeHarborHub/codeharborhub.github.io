---
id: lesson-2
title: "Gradient Backgrounds"
sidebar_label: Gradient Backgrounds
sidebar_position: 2
description: "Gradient Backgrounds"
tags: [courses,tailwind,Gradient Backgrounds,beginner-level,Introduction]
--- 
 
Tailwind CSS supports gradient backgrounds using the `bg-gradient-to-{direction}` classes along with `from-{color}`, `via-{color}`, and `to-{color}` for the gradient stops.

```html
<div class="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 h-64">
  Gradient background from green to purple
</div>
<div class="bg-gradient-to-t from-yellow-400 via-red-500 to-pink-600 h-64">
  Gradient background from yellow to pink
</div>
```