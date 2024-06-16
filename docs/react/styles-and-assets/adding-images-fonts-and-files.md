---
id: adding-images-fonts-and-files
title: Adding Images, Fonts, and Files in a React App
sidebar_label: Images Fonts and Files
sidebar_position: 6
tags: [react, create-react-app, images, fonts, files, assets, react-scripts, react-dom, react-app]
description: "Learn how to work with images, fonts, and files in a React application. Manage and utilize these assets effectively to create visually appealing and interactive web experiences."
---

In this guide, we'll explore how to work with images, fonts, and files in a React application. These assets are essential for creating visually appealing and interactive web experiences. We'll cover everything you need to know to manage and utilize these assets effectively.

## Table of Contents

1. [Adding Images](#1-adding-images)
2. [Using Fonts](#2-using-fonts)
3. [Handling Files](#3-handling-files)

## 1. Adding Images

To include images in your React app, follow these simple steps:

### Step 1: Prepare Your Image

Before adding an image, make sure you have it in a suitable format like JPEG, PNG, or GIF. Also, consider resizing or compressing images to optimize your app's performance.

### Step 2: Import the Image

In your component file, import the image using ES6's `import` statement:

```jsx title="App.js"
import React from 'react';
import logo from './path/to/your/logo.png';

function App() {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default App;
```

**Live Preview:**

<BrowserWindow>
      
    <div>
      <img src="https://codemastermindhq.vercel.app/img/logo.png" alt="Logo" />
    </div>
      
 </BrowserWindow>


### Step 3: Display the Image

Now, you can display the imported image using the `img` tag as shown above. Don't forget to add an informative `alt` attribute for accessibility purposes.

## 2. Using Fonts

Custom fonts can greatly enhance the visual appeal of your React app. Here's how you can include them:

### Step 1: Obtain the Font Files

Find or download the font files (usually in `.ttf`, `.woff`, or `.woff2` formats) you want to use and place them in a directory within your project, such as `src/fonts/`.

### Step 2: Create a CSS File

Create a new CSS file, e.g., `fonts.css`, in the `src` directory and define the font-face:

```css title="fonts.css"
/* src/fonts/fonts.css */

@font-face {
  font-family: 'YourFontName';
  src: url('./path/to/your/font.woff2') format('woff2'),
       url('./path/to/your/font.woff') format('woff');
  /* Add more formats for compatibility if necessary */
  font-weight: normal;
  font-style: normal;
}
```

### Step 3: Import and Apply the Font

In your main `index.js` file, import the `fonts.css`:

```js title="index.js"
import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/fonts.css'; // Import the CSS file

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Now, you can apply the font to specific elements in your components:

```jsx title="App.js"
import React from 'react';

function App() {
  return (
    <div>
      <h1 style={{ fontFamily: 'sans-serif', fontSize: '24px' }}>Welcome to My App!</h1>
      <p style={{ fontFamily: 'cursive', fontSize: '16px' }}>Enjoy your stay!</p>
    </div>
  );
}

export default App;
```

**Live Preview:**

<BrowserWindow>
      
    <div>
      <h1 style={{ fontFamily: 'sans-serif', fontSize: '24px' }}>Welcome to My App!</h1>
      <p style={{ fontFamily: 'cursive', fontSize: '16px' }}>Enjoy your stay!</p>
    </div>
      
 </BrowserWindow>

## 3. Handling Files

React allows you to work with various file types easily, such as PDFs, documents, or audio files. You can handle files by providing download links or embedding media players in your app.

To link to a file for download:

```jsx title="App.js"
import React from 'react';

function App() {
  return (
    <div>
      <a href="../../assets/ReactJS-Guide.pdf" download>Download PDF</a>
    </div>
  );
}

export default App;
```

**Live Preview:**

<BrowserWindow>
      
    <div>
      <a href="https://attachments.convertkitcdnn2.com/775726/2b060dc0-6e83-41a1-b0f2-867ff6a49a8e/ReactJS-Guide.pdf?ck_subscriber_id=1951899117&utm_campaign=Landing%20Page%20or%20Form%20-%203032568&utm_medium=email&utm_source=convertkit" download>Download PDF</a>
    </div>
      
 </BrowserWindow>

To embed media, like audio:

```jsx title="App.js"
import React from 'react';

function App() {
  return (
    <div>
      <audio controls>
        <source src="./path/to/your/audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default App;
```

## Live coding

```jsx live
function App() {
  return (
    <div>
      <h1 style={{ fontFamily: 'sans-serif', fontSize: '24px' }}>Welcome to My App!</h1>
      <p style={{ fontFamily: 'cursive', fontSize: '16px' }}>Enjoy your stay!</p>
    </div>
  );
}
```

With this knowledge, you're ready to manage images, fonts, and files effectively in your React app. Have fun experimenting and enhancing your web projects!

Remember, continuous learning is the key to becoming a mastermind developer! 

If you have any questions or need further assistance, don't hesitate to reach out to the React community for support. Happy coding!