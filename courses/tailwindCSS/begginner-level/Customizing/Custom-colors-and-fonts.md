---
id: lesson-3
title: "Adding Custom Colors and Fonts"
sidebar_label: Custom Colors & Fonts
sidebar_position: 3
description: "Adding Custom Colors and Fonts"
tags: [courses,tailwind,Custom Colors & Fonts,beginner-level,Introduction]
--- 


To add and use custom colors and fonts effectively, follow these steps:

1. **Install Tailwind CSS and Dependencies**:
   - Ensure you have Tailwind CSS installed in your project.
     ```sh
     npm install tailwindcss
     ```

2. **Generate the Configuration File** (if not already done):
   - Run the initialization command:
     ```sh
     npx tailwindcss init
     ```

3. **Update the Configuration File**:
   - Add custom colors and fonts as shown in the examples above.

4. **Import Fonts in Your CSS**:
   - If you're using custom fonts, import them in your CSS file. For example, if you're using Google Fonts:
     ```css
     @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Merriweather:wght@400;700&display=swap');

     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

5. **Use Custom Utilities in Your HTML**:
   - Apply the custom colors, fonts, and spacing in your HTML elements.
     ```html
     <div class="bg-customBlue text-customGreen font-sans p-72">
       <h1 class="font-serif">Custom Tailwind CSS</h1>
       <p>Using custom colors, fonts, and spacing.</p>
     </div>
     ```

#### Example: Complete Configuration and Usage
Here’s a complete example of customizing Tailwind CSS with custom colors and fonts:

**tailwind.config.js**:
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        customBlue: '#1e3a8a',
        customGreen: '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
}
```

**styles.css**:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Merriweather:wght@400;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;
```

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="styles.css" rel="stylesheet">
  <title>Custom Tailwind CSS</title>
</head>
<body>
  <div class="bg-customBlue text-customGreen font-sans p-72">
    <h1 class="font-serif text-4xl">Custom Tailwind CSS</h1>
    <p class="text-xl">Using custom colors, fonts, and spacing.</p>
  </div>
</body>
</html>
```

By following these steps, you can customize Tailwind CSS to fit your project's design requirements, making it a powerful tool for creating unique and consistent styles.