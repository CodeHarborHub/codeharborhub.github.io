---
id: lesson-1
title: "Using Tailwind CSS with React"
sidebar_label: Tailwind CSS with React
sidebar_position: 1
description: "Using Tailwind CSS with React"
tags: [courses,tailwind,React,Advanced-level,Introduction]
---  
 

##### Step 1: Install Tailwind CSS
Install Tailwind CSS in your React project using npm.

```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

##### Step 2: Configure Tailwind
Add Tailwind to your `tailwind.config.js` file.

```javascript
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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
Add Tailwind directives to your main CSS file (e.g., `index.css`).

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

##### Step 4: Use Tailwind in Components
Now you can use Tailwind CSS classes in your React components.

```jsx
function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Hello, React with Tailwind!</h1>
    </div>
  );
}
```
 