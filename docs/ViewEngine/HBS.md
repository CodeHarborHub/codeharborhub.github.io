---
id: hbs-engine
title: HBS-engine
sidebar_label: Hbs Engine
sidebar_position: 2
tags: [Express.js,JavaScript,View Engine Introduction,Handlebars,Framework]
description: Hbs(Handlebars).
---

Handlebars is a popular templating engine that allows you to create semantic templates with built-in helpers for common tasks. 

### Example using Handlebars (HBS) Template Engine


1. **Install Handlebars**: First, you need to install `express-handlebars`, which is the Handlebars view engine for Express:

   ```bash
   npm install express-handlebars
   ```

2. **Setup Express App**: Configure your Express.js application to use Handlebars as the template engine:

   ```javascript
   const express = require('express');
   const exphbs  = require('express-handlebars');
   const app = express();
   const port = 3000;

   // Set Handlebars as the template engine
   app.engine('.hbs', exphbs({ extname: '.hbs' }));
   app.set('view engine', '.hbs');

   // Define a route to render a template
   app.get('/', (req, res) => {
       const data = {
           title: 'Express Handlebars Example',
           message: 'This is rendered using Handlebars!'
       };
       // Render 'index' template with the data
       res.render('index', data);
   });

   // Start the server
   app.listen(port, () => {
       console.log(`Server is running on http://localhost:${port}`);
   });
   ```

3. **Create Handlebars Template**: Create an `index.hbs` file in the `views` directory (by convention):

   ```handlebars
   <!DOCTYPE html>
   <html>
   <head>
       <title>{{ title }}</title>
   </head>
   <body>
       <h1>{{ message }}</h1>
   </body>
   </html>
   ```

   In this template:
   - `{{ title }}` and `{{ message }}` are Handlebars placeholders that will be replaced with the actual data (`data.title` and `data.message`) when rendered by Express.

4. **Run the Application**: Start your Express application:

   ```bash
   node app.js
   ```

   Navigate to `http://localhost:3000` in your browser, and you should see the rendered HTML page with the message "This is rendered using Handlebars!".

### Explanation

- **Setting the Template Engine**: 
  - `app.engine('.hbs', exphbs({ extname: '.hbs' }));` sets Handlebars as the template engine and configures it to use `.hbs` as the file extension for templates.
  - `app.set('view engine', '.hbs');` sets `.hbs` as the default file extension for views.

- **Rendering a Template**: `res.render('index', data);` renders the `index.hbs` template and replaces placeholders (`{{ }}` tags) with data from the `data` object.

- **Handlebars Template Syntax**: 
  - `{{ }}` is used to output the value of a variable or expression.
  - Handlebars also supports helpers (`{{#if}}, {{#each}}, {{#unless}},` etc.) for more complex logic directly in your templates.

This example demonstrates how to integrate Handlebars as the template engine in an Express.js application. Handlebars simplifies the creation of dynamic HTML pages by allowing you to focus on the structure and content of your templates while keeping your JavaScript code separate.