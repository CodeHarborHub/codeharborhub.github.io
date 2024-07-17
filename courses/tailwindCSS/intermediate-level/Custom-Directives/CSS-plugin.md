---
id: lesson-2
title: "Using Tailwind CSS Plugins"
sidebar_label: CSS Plugins
sidebar_position: 2
description: "Using Tailwind CSS Plugins"
tags: [courses,tailwind,CSS Plugins,intermediate-level,Introduction]
--- 

Tailwind CSS has a rich ecosystem of plugins that can extend its functionality.

##### Step 1: Install a Plugin
You can install plugins via npm. For example, to install the `@tailwindcss/forms` plugin:

```bash
npm install @tailwindcss/forms
```

##### Step 2: Add the Plugin to Your Tailwind Configuration
Include the plugin in your `tailwind.config.js` file.

```javascript
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    // other plugins...
  ],
}
```

##### Step 3: Use the Plugin
After installing, you can use the plugin's styles directly in your components.

```html
<input type="text" class="form-input" placeholder="Styled Input" />
```