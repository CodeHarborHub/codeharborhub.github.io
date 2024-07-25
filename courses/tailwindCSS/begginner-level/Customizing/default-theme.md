---
id: lesson-2
title: "Extending the Default Theme"
sidebar_label: Default Theme
sidebar_position: 2
description: "Extending the Default Theme"
tags: [courses,tailwind,Default Theme,beginner-level,Introduction]
--- 
 
You can extend Tailwind's default theme to add custom styles without completely overriding the default settings. This is useful for adding custom colors, fonts, spacing, and other utilities.

1. **Adding Custom Colors**:
   - Extend the color palette by adding custom colors under the `theme.extend.colors` section.
     ```js
     module.exports = {
       theme: {
         extend: {
           colors: {
             customBlue: '#1e3a8a',
             customGreen: '#10b981',
           },
         },
       },
     }
     ```

2. **Adding Custom Fonts**:
   - Extend the font family by adding custom fonts under the `theme.extend.fontFamily` section.
     ```js
     module.exports = {
       theme: {
         extend: {
           fontFamily: {
             sans: ['Inter', 'sans-serif'],
             serif: ['Merriweather', 'serif'],
           },
         },
       },
     }
     ```

3. **Adding Custom Spacing**:
   - Extend the spacing scale by adding custom values under the `theme.extend.spacing` section.
     ```js
     module.exports = {
       theme: {
         extend: {
           spacing: {
             '72': '18rem',
             '84': '21rem',
             '96': '24rem',
           },
         },
       },
     }
     ```
