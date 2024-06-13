---
title: 'Chrome Extension Using ReactJS and MongoDB'
sidebar_label: Chrome Extension Using ReactJS and MongoDB
authors: [khushi-kalra]
tags: [chrome extension, ReactJS, MongoDB]
date: 2024-06-13 23:23:23
hide_table_of_contents: true
---

# Chrome Extension Using ReactJS and MongoDB

Creating a Chrome extension can seem like a daunting task, especially when you're trying to combine it with technologies like ReactJS and MongoDB. When I first set out to build my extension, I found it challenging to find a perfect YouTube tutorial or blog post that covered everything I needed. So, I turned to StackOverflow and other resources to piece together my project.

Here's a step-by-step guide based on my experience:

## Step 1: Create a React App
First, you'll need to set up a basic React application. You can do this using Create React App:
``bash
npx create-react-app my-chrome-extension
cd my-chrome-extension
```
Step 2: Change the Manifest JSON File
The manifest.json file is crucial for Chrome extensions as it contains metadata about your extension. Create a manifest.json file in the public folder with the following content:

```json
{
  "manifest_version": 3,
  "name": "My Chrome Extension",
  "version": "1.0",
  "description": "A simple Chrome extension built with React.",
  "action": {
    "default_popup": "index.html",
    "default_icon": "icon.png"
  },
  "permissions": []
}
```
Step 3: Add Height and Width to index.css
To ensure your extension has the proper dimensions, update the index.css file in the src folder:

```css
html, body, #root {
  height: 600px;
  width: 400px;
  margin: 0;
  padding: 0;
}
```
Step 4: Change Rendering to BrowserRoute in App.js and Add Routes
To manage different views in your extension, you can use React Router. Install React Router:

```bash
npm install react-router-dom
```
Then, update App.js to include routes:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```
Step 5: Run npm build and Load the Build Folder in Chrome Extensions
Finally, build your React app:

```bash
npm run build
```
Load the build folder as an unpacked extension in Chrome:

Open Chrome and go to chrome://extensions/.
Enable "Developer mode" in the top right corner.
Click "Load unpacked" and select the build folder from your React app.
Adding a Backend
If you want to add a backend using Node.js and MongoDB, follow these steps:

Step 1: Create a Backend Folder Within the App
In your project root, create a new folder called backend:

```bash
mkdir backend
cd backend
```
Step 2: Add server.js
Create a server.js file in the backend folder:

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
Add a .env file in the backend folder with your MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string
```

## Final Thoughts
Building a Chrome extension with ReactJS and MongoDB was a learning experience filled with challenges and triumphs. While finding the perfect tutorial was tough, the process of solving problems using StackOverflow and other resources was incredibly rewarding. I hope this guide helps you in your journey to create your own Chrome extension.

Feel free to leave any questions or comments below, and happy coding!