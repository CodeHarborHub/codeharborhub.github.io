---
id: lesson-2
title: "Installation and Setup"
sidebar_label: Installation & Setup
sidebar_position: 2
description: "Installation Tailwind CSS"
tags: [courses,tailwind,Installation,beginner-level,Introduction]
---
 
To get started with Tailwind CSS, follow these steps:

1. **Using a CDN**:
   - Add the following line to the `<head>` section of your HTML file:
     ```html
     <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
     ```

2. **Using npm**:
   - If you prefer to use npm, you can install Tailwind CSS via npm and set it up with a build tool like PostCSS.

     ```bash
     npm install -D tailwindcss
     npx tailwindcss init
     ```

   - This will create a `tailwind.config.js` file in your project. Configure Tailwind to remove unused styles in production by adding the paths to all of your template files in the `purge` option in your `tailwind.config.js` file:

     ```javascript
     module.exports = {
       purge: ['./src/**/*.html', './src/**/*.js'],
       darkMode: false, // or 'media' or 'class'
       theme: {
         extend: {},
       },
       variants: {
         extend: {},
       },
       plugins: [],
     }
     ```

   - Create a `tailwind.css` file and include the Tailwind directives:

     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

   - Add a build script to your `package.json`:

     ```json
     "scripts": {
       "build:css": "tailwindcss build src/tailwind.css -o dist/tailwind.css"
     }
     ```

   - Run the build script to generate your Tailwind CSS file:

     ```bash
     npm run build:css
     ```
