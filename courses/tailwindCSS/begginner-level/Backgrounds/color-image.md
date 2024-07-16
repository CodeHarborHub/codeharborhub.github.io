---
id: lesson-1
title: "Background Colors and Images"
sidebar_label: Background Colors and Images
sidebar_position: 1
description: "Background Colors and Images"
tags: [courses,tailwind,Background,color,beginner-level,Introduction]
--- 

1. **Background Colors**:
   - Tailwind CSS provides a range of background color classes using the `bg-{color}` syntax.
   ```html
   <div class="bg-blue-500">Blue background</div>
   <div class="bg-red-500">Red background</div>
   <div class="bg-green-500">Green background</div>
   ```

2. **Background Images**:
   - You can set background images using the `bg-[url('path/to/image')]` class and control their properties with additional utilities.
   ```html
   <div class="bg-[url('https://via.placeholder.com/150')] bg-cover bg-center h-64">
     Background image with cover and center positioning
   </div>
   ```

