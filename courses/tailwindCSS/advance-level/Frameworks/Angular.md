---
id: lesson-3
title: "Using Tailwind CSS with Angular"
sidebar_label: Tailwind CSS with Angular
sidebar_position: 3
description: "Using Tailwind CSS with Angular"
tags: [courses,tailwind,Angular,Advanced-level,Introduction]
---  

##### Step 1: Install Tailwind CSS
Install Tailwind CSS in your Angular project.

```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

##### Step 2: Configure Tailwind
Set up your `tailwind.config.js` file.

```javascript
module.exports = {
  purge: ['./src/**/*.{html,ts}', './src/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

##### Step 3: Import Tailwind CSS
Add Tailwind directives to your global stylesheet (e.g., `styles.css`).

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

##### Step 4: Use Tailwind in Angular Components
Apply Tailwind CSS classes in your Angular components.

```html
<div class="bg-gray-100 min-h-screen flex items-center justify-center">
  <h1 class="text-3xl font-bold">Hello, Angular with Tailwind!</h1>
</div>
```
 