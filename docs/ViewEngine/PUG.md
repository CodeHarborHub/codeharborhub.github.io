---
id: pug-engine
title: Pug Engine
sidebar_label: Pug Engine
sidebar_position: 1
tags: [Express.js,JavaScript,View Engine Introduction,Pug,Framework]
description: Pug.
---


Pug is a concise and powerful templating engine that simplifies writing HTML templates with a clean and expressive syntax.


### Example using Pug Template Engine


1. **Install Pug**: First, you need to install `pug`:

   ```bash
   npm install pug
   ```

2. **Setup Express App**: Configure your Express.js application to use Pug as the template engine:

   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;

   // Set Pug as the template engine
   app.set('view engine', 'pug');

   // Define a route to render a template
   app.get('/', (req, res) => {
       const data = {
           title: 'Express Pug Example',
           message: 'This is rendered using Pug!'
       };
       // Render 'index' template with the data
       res.render('index', data);
   });

   // Start the server
   app.listen(port, () => {
       console.log(`Server is running on http://localhost:${port}`);
   });
   ```

3. **Create Pug Template**: Create an `index.pug` file in the `views` directory (by convention):

   ```pug
   doctype html
   html
     head
       title= title
     body
       h1= message
   ```

   In this template:
   - `title=` outputs the value of `title` from the `data` object.
   - `h1=` outputs the value of `message` from the `data` object.

4. **Run the Application**: Start your Express application:

   ```bash
   node app.js
   ```

   Visit `http://localhost:3000` in your browser, and you should see the rendered HTML page with the message "This is rendered using Pug!".

### Explanation

- **Setting the Template Engine**: `app.set('view engine', 'pug');` sets Pug as the template engine for your Express application.

- **Rendering a Template**: `res.render('index', data);` renders the `index.pug` template and replaces placeholders (`=` tags) with data from the `data` object.

- **Pug Template Syntax**:
  - Pug uses indentation to define the structure of the HTML, which makes it more concise compared to traditional HTML.
  - Variables and expressions are embedded directly within the template using `=` for outputting values.
  
This example demonstrates how to integrate Pug as the template engine in an Express.js application. Pug's syntax reduces boilerplate and makes it easier to create HTML templates with dynamic content, maintaining the separation of presentation and application logic.