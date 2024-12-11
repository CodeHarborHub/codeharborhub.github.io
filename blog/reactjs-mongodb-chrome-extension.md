---
title: "Chrome Extension Using MERN"
sidebar_label: Chrome Extension Using MERN
authors: [khushi-kalra]
tags: [chrome extension, web dev, React, Express, MongoDB, Node, UI]
date: 2024-06-13
hide_table_of_contents: true
---

Creating a Chrome extension can seem like a daunting task, especially when you're trying to combine it with technologies like ReactJS and MongoDB. When I first set out to build my extension, I found it challenging to find a perfect YouTube tutorial or blog post that covered everything I needed. So, I turned to StackOverflow and other resources to piece together my project.

<!-- truncate -->

You can always take help from my github repository: https://github.com/abckhush/Basic-Chrome-Extension

Here's a step-by-step guide based on my experience:

## Creating Frontend of the Extension

### Step 1: Create a React App

First, you'll need to set up a basic React application. You can do this using Create React App:

```bash
npx create-react-app my-chrome-extension
cd my-chrome-extension
```

### Step 2: Change the Manifest JSON File

The manifest.json file is crucial for Chrome extensions as it contains metadata about your extension. Update the manifest.json file in the public folder with the following content:

```json
{
  "manifest_version": 3,
  "name": "Chrome Extension",
  "version": "1.0.0",
  "description": "My First Chrome Extension Using MERN",
  "action": {
    "default_popup": "index.html",
    "default_title": "Open"
  },
  "permissions": ["scripting"]
}
```

### Step 3: Add Height and Width

To ensure your extension has the proper dimensions, update the index.css file in the src folder and add height and width:

```css
body {
  min-width: 300px;
  min-height: 200px;
}
```

### Check Point

To check if you have followed all the steps properly. You can go try to run the extension in browser.

1. Run `npm build` in the terminal.
2. Open Chrome and go to chrome://extensions/.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the build folder from your React app.
5. See if can see the default React page in the height and width you gave.

### Step 4: Change Rendering to MemoryRouter

This is the most crucial step. BrowserRouter is not supported for the Chrome Extensions, which is default in React applications. We are going to change that too MemoryRouter.

1. Install React Router:

```bash
npm install react-router-dom
```

2. Update index.js to include routes:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { MemoryRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.querySelector("#root"),
);
```

### Step 5: Adding Routing

1. We will make a "Components" folder in src and a Home.jsx.

```jsx
import React from "react";

function Home() {
  return (
    <div>
      <h1>Welcome to My Home Page</h1>
      <p>This is a simple home page.</p>
    </div>
  );
}

export default Home;
```

2. We will update our App.js as:

```js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
```

**Note: You can run "npm build" again and reload the build folder to see the changes made.**

## Adding Backend to the Extension

### Step 1: Create a Backend Folder

In your project root, create a new folder called backend:

```bash
mkdir backend
cd backend
```

### Step 2: Add server.js

Create a server.js file in the backend folder:

```javascript
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### Step 3: Add a .env file

```env
MONGO_URI= your_mongodb_connection_string
PORT= 5000
```

Building a Chrome extension with ReactJS and MongoDB was a learning experience filled with challenges and triumphs. While finding the perfect tutorial was tough, the process of solving problems using StackOverflow and other resources was incredibly rewarding. I hope this guide helps you in your journey to create your own Chrome extension.

Feel free to connect on GitHub, and happy coding!
