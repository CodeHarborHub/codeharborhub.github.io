---
id: ejs-engine
title: Ejs Engine
sidebar_label: Ejs Engine
sidebar_position: 3
tags: [Express.js,JavaScript,View Engine Introduction,Ejs,Framework]
description: Ejs.
---

EJS is a popular template engine that lets you embed JavaScript code directly into your HTML templates.

### Example using EJS (Embedded JavaScript)

1. **Install EJS**: First, you need to install EJS using npm if you haven't already:

   ```bash
   npm install ejs
   ```

2. **Setup Express App**: Set up your Express.js application to use EJS as the template engine:

   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;

   // Set EJS as the template engine
   app.set('view engine', 'ejs');

   // Define a route to render a template
   app.get('/', (req, res) => {
       const data = {
           title: 'Express Template Engine Example',
           message: 'This is rendered using EJS!'
       };
       // Render 'index.ejs' template with the data
       res.render('index', data);
   });

   // Start the server
   app.listen(port, () => {
       console.log(`Server is running on http://localhost:${port}`);
   });
   ```

3. **Create EJS Template**: Create an `index.ejs` file in the `views` directory (by default, Express looks for templates in the `views` directory) with the following content:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title><%= title %></title>
   </head>
   <body>
       <h1><%= message %></h1>
   </body>
   </html>
   ```

   In this template:
   - `<%= title %>` and `<%= message %>` are placeholders that will be replaced with the actual data (`data.title` and `data.message`) when rendered by Express.

4. **Run the Application**: Start your Express application:

   ```bash
   node app.js
   ```

   Visit `http://localhost:3000` in your browser, and you should see the rendered HTML page with the message "This is rendered using EJS!".

### Explanation

- **Setting the Template Engine**: `app.set('view engine', 'ejs');` sets EJS as the template engine for your Express application.
  
- **Rendering a Template**: `res.render('index', data);` renders the `index.ejs` template and replaces placeholders (`<%= %>` tags) with data from the `data` object.
  
- **EJS Template Syntax**: In the EJS template (`index.ejs`), `<%= %>` is used to output the value of a variable or expression.

This example demonstrates the basics of using a template engine (EJS in this case) with Express.js to generate HTML dynamically based on data fetched or processed on the server-side. Template engines are powerful tools for building dynamic web applications efficiently and maintaining clean separation of concerns between server-side logic and presentation.