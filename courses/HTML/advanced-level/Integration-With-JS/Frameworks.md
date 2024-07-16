---
id: lesson-3
title: "Using HTML with JavaScript Frameworks (e.g., React.js)"
sidebar_label: HTML with Frameworks
sidebar_position: 3
description: "Learn to Using HTML with JavaScript Frameworks (e.g., React.js)."
tags: [courses,advance-level,Frameworks,Introduction]
---  
  
  

JavaScript frameworks like React.js enable developers to build complex user interfaces using HTML-like syntax (JSX). React components encapsulate HTML and JavaScript, promoting a component-based architecture.

**Basic React Component:**
```javascript
import React from 'react';

function Greeting() {
    return <h1>Hello, World!</h1>;
}

export default Greeting;
```

**Rendering a React Component:**
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';

ReactDOM.render(<Greeting />, document.getElementById('root'));
```

**HTML File:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React Example</title>
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="path/to/your/bundle.js" type="text/babel"></script>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```