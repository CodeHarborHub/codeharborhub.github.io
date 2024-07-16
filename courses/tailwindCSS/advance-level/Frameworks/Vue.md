---
id: lesson-2
title: "Using Tailwind CSS with Vue"
sidebar_label: Tailwind CSS with Vue
sidebar_position: 2
description: "Using Tailwind CSS with Vue"
tags: [courses,tailwind,Vue,Advanced-level,Introduction]
---  
 

##### Step 1: Install Tailwind CSS
Install Tailwind CSS in your Vue project.

```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

##### Step 2: Configure Tailwind
Set up your `tailwind.config.js` file similarly to React.

```javascript
module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/index.html'],
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
Include Tailwind directives in your main CSS file (e.g., `main.css`).

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

##### Step 4: Use Tailwind in Vue Components
Utilize Tailwind CSS classes in your Vue components.

```vue
<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <h1 class="text-3xl font-bold">Hello, Vue with Tailwind!</h1>
  </div>
</template>
```
 
