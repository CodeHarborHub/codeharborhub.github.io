---
title: "Getting started with MERN"
authors: [abhijith-m-s, ajay-dhangar]
tags:
  - MERN Stack
  - MongoDB
  - Express.js
  - React
  - Node.js
  - Web Development
  - API
  - Frontend Development
  - Backend Development
date: 2024-06-10 09:32:00
description: Learn the basics of the MERN stack, from building an API with Express.js to creating a React app. This guide covers prerequisites, configuring MongoDB Atlas, styling, and more.
draft: false
canonical_url: https://codeharborhub.github.io/blog/getting-started-with-mern
meta:
  - name: "robots"
    content: "index, follow"
  - property: "og:title"
    content: "Getting started with MERN"
  - property: "og:description"
    content: "Learn the basics of the MERN stack, from building an API with Express.js to creating a React app. This guide covers prerequisites, configuring MongoDB Atlas, styling, and more."
  - property: "og:type"
    content: "article"
  - property: "og:url"
    content: "https://codeharborhub.github.io/blog/getting-started-with-mern"
  - property: "og:image"
    content: "https://codeharborhub.github.io/assets/images/mern-8a27add30515e58f789f89a4c9072818.jpg"
  - name: "twitter:card"
    content: "summary_large_image"
  - name: "twitter:title"
    content: "A Comprehensive Guide to Get You Started with MERN Stack"
  - name: "twitter:description"
    content: "Learn the basics of the MERN stack, from building an API with Express.js to creating a React app. This guide covers prerequisites, configuring MongoDB Atlas, styling, and more."
  - name: "twitter:image"
    content: "https://codeharborhub.github.io/assets/images/mern-8a27add30515e58f789f89a4c9072818.jpg"
---

A comprehensive guide to get you started with MERN stack. From building an API with Express.js to creating a React app, this guide covers all the basics of the MERN stack.

<!-- truncate -->

![Getting started with MERN](./mern.jpg)

:::caution
This article assumes you have a basic understanding of web development concepts and technologies. If you are new to web development, you might want to familiarize yourself with HTML, CSS, JavaScript, and Node.js before diving into the MERN stack.

:::

Have you ever heard of the MERN stack? If you are a web developer or aspiring to become one, you might have come across this term. The MERN stack is a popular web development stack that consists of four key technologies: MongoDB, Express.js, React.js, and Node.js. Each of these technologies plays a crucial role in building modern web applications.

In this blog post, we will cover the basics of the MERN stack and walk you through the process of building a simple MERN application. We will start by setting up a MongoDB Atlas cluster, building an API with Express.js, creating a React app, and connecting the frontend to the backend. We will also cover styling and making requests from the frontend.

:::info
If you prefer to jump straight to the code, you can find the GitHub repository for this project [here](https://github.com/AMS003010/SimpleMernApp) and star the repo to show your support. Feel free to fork the repository and experiment with the code.
:::

**What we’re covering**

- Prerequisites
- What a Web Framework is?
- Configuring a _MongoDB Atlas_ Cluster
- Building a API with _Express.js_
- Creating a React App
- Setting a Proxy from your Backend API server to the Frontend React App
- Styling and making Requests from the frontend

## Prerequisites

Before we get started, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)
- [MongoDB Compass](https://www.mongodb.com/try/download/compass) (optional, for local MongoDB)
- [Postman](https://www.postman.com/downloads/) (optional, for testing API endpoints)
- [Visual Studio Code](https://code.visualstudio.com/download) (or any code editor of your choice)
- A basic understanding of HTML, CSS, JavaScript, and Node.js
- A GitHub account (optional, for version control)
- A MongoDB Atlas account (optional, for cloud-based MongoDB)
- A basic understanding of web development concepts and technologies
- A cup of coffee ☕️ (optional, but highly recommended)
- A pinch of curiosity 🧐

## What is a Web Framework?

A web framework is a software framework designed to support the development of web applications, including web services, web resources, and web APIs. Web frameworks provide a standard way to build and deploy web applications by providing libraries, APIs, and tools to streamline the development process.

In the context of the MERN stack, each technology plays a specific role:

- **MongoDB**: A NoSQL database that stores data in a flexible, JSON-like format.
- **Express.js**: A Node.js web application framework that provides a robust set of features for building web applications and APIs.
- **React.js**: A JavaScript library for building user interfaces and single-page applications.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript code outside of a web browser.
- **MERN**: A full-stack development framework that combines MongoDB, Express.js, React.js, and Node.js to build modern web applications.
- **MongoDB Atlas**: A cloud-based database service that allows you to store your data in a serverless environment.
- **API**: An Application Programming Interface that defines how two services can communicate and interact with each other through requests and responses.
- **React Router**: A routing library for React that allows you to define routes and navigate between different components in a single-page application.
- **CSS**: Cascading Style Sheets that define the visual presentation of a web page, including layout, colors, fonts, and animations.
- **HTML**: Hypertext Markup Language that defines the structure and content of a web page.
- **JavaScript**: A programming language that enables interactive and dynamic web content.
- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript code outside of a web browser.
- **npm**: A package manager for Node.js that allows you to install, manage, and share JavaScript packages.
- **React**: A JavaScript library for building user interfaces and single-page applications.

You might have heard of Unintelligible acronyms like MERN, MEVN, MEAN, LAMP, PERN etc. These are examples of some of the most popular web frameworks. Each of these frameworks has its own set of technologies and tools that work together to build web applications.

| Framework | Technologies                              | Description                                                                                                                                                                  |
| :-------- | :---------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MERN      | MongoDB, Express.js, React.js, Node.js    | A full-stack development framework for building modern web applications.                                                                                                     |
| MEVN      | MongoDB, Express.js, Vue.js, Node.js      | A full-stack development framework similar to MERN, but with Vue.js instead of React.js.                                                                                     |
| MEAN      | MongoDB, Express.js, Angular, Node.js     | A full-stack development framework with Angular instead of React.js or Vue.js.                                                                                               |
| LAMP      | Linux, Apache, MySQL, PHP                 | A traditional web development stack that uses Linux as the operating system, Apache as the web server, MySQL as the database, and PHP as the server-side scripting language. |
| PERN      | PostgreSQL, Express.js, React.js, Node.js | A full-stack development framework similar to MERN, but with PostgreSQL instead of MongoDB.                                                                                  |

:::info
**Fun fact:** HTMX has been making waves in the community due to its ability to be written in a hypertext format (that is what HTML is 😌) and being able to give you access to AJAX, CSS Transitions, WebSockets, and Server-Sent Events directly in HTML, using attributes.
:::

## Configuring a MongoDB Atlas Cluster

> MongoDB Atlas is a cloud-based database service that allows you to store your data in a serverless environment. It provides a fully managed database solution that eliminates the need for manual configuration, maintenance, and scaling of databases.

To get started with MongoDB Atlas, follow these steps:

1. **Create an Account**: Sign up for a MongoDB Atlas account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. **Create a New Cluster**: Click on the "Build a Cluster" button to create a new cluster.
3. **Choose a Configuration**: Select a configuration of your liking (e.g., M0, which is free and suitable for small applications).
4. **Choose a Provider**: Choose your preferred cloud provider (e.g., AWS, Azure, Google Cloud).
5. **Create Deployment**: Click on the "Create Deployment" button to create your cluster.
6. **Connect to Your Cluster**: Once your cluster is created, click on the "Connect" button.
7. **Add Your IP Address**: Click on the "Add Your Current IP Address" button to allow your IP address to access the cluster.
8. **Create a Database User**: Click on the "Create a Database User" button to create a new user for your database. Make sure to note down the username and password.
9. **Choose a Connection Method**: Choose the "Connect Your Application" option to get the connection string for your application.
10. **Copy the Connection String**: Copy the connection string and replace the username and password with the ones you created earlier. The connection string should look something like this:

    ```plaintext
    mongodb+srv://<username>:<password>@cluster0.tpgdder.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    ```

    :::info
    Make sure to replace `<username>` and `<password>` with the username and password you created for your database user.
    :::

11. **Connect to Your Cluster**: Use the connection string to connect to your MongoDB Atlas cluster from your application. You can use the MongoDB Node.js driver to connect to your cluster and perform database operations. Here is an example of how you can connect to your cluster using the Node.js driver:

    ```js title="app.js"
    const { MongoClient } = require("mongodb");

    const uri =
      "mongodb+srv://<username>:<password>@cluster0.tpgdder.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    const client = new MongoClient(uri);

    async function run() {
      try {
        await client.connect();

        const database = client.db("mydatabase");
        const collection = database.collection("mycollection");

        // Perform database operations here
      } finally {
        await client.close();
      }
    }

    run().catch(console.dir);
    ```

Congratulations! You have successfully configured a MongoDB Atlas cluster and connected to it using the Node.js driver. You are now ready to build your MERN application.

## Building a API with Express.js

> Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web applications and APIs. It is widely used in the industry due to its simplicity and scalability.

Let's get to building an API with Express.js. Follow these steps to create a simple API:

1. **Create a Project Folder**: Create a new folder for your project and navigate to it in your terminal.

   ```bash
   mkdir SimpleMernApp
   cd SimpleMernApp
   ```

2. **Initialize a New Node.js Project**: Run `npm init -y` to initialize a new Node.js project with default settings.

   ```bash
   npm init -y
   ```

3. **Install Express.js**: Run `npm install express` to install Express.js as a dependency for your project.

   ```bash
   npm install express
   ```

4. **Create an `app.js` File**: Create a new file called `app.js` in your project folder and add the following code to create a simple Express.js server.

   ```js title="app.js"
   const express = require("express");
   const app = express();
   const PORT = process.env.PORT || 4000;

   app.get("/", (req, res) => {
     res.send("Hello, World!");
   });

   app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

5. **Start the Express.js Server**: Run `node app.js` to start the Express.js server.

   ```bash
   node app.js
   ```

6. **Test the API Endpoint**: Open [http://localhost:4000/](http://localhost:4000/) in your browser to see the message "Hello, World!" displayed. This confirms that your Express.js server is running successfully.
7. **Create Additional Routes**: You can create additional routes and API endpoints by adding more `app.get()` or `app.post()` methods to handle different requests.

   ```js title="app.js"
   app.get("/api/books", (req, res) => {
     res.json({ message: "Get all books" });
   });

   app.post("/api/books", (req, res) => {
     res.json({ message: "Add a new book" });
   });

   app.put("/api/books/:id", (req, res) => {
     res.json({ message: "Update a book" });
   });

   app.delete("/api/books/:id", (req, res) => {
     res.json({ message: "Delete a book" });
   });
   ```

8. **Install Additional Dependencies**: You can install additional dependencies like `mongoose` for MongoDB integration, `cors` for enabling CORS, and `dotenv` for managing environment variables.

   ```bash
   npm install mongoose cors dotenv
   ```

9. **Create a `.env` File**: Create a new file called `.env` in your project folder and add your environment variables.

   ```plaintext
   PORT=4000
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.tpgdder.mongodb.net/mydatabase
   ```

10. **Update the `app.js` File**: Update your `app.js` file to use the environment variables from the `.env` file.

    ```js title="app.js"
    require("dotenv").config();
    const express = require("express");
    const mongoose = require("mongoose");
    const cors = require("cors");
    const app = express();
    const PORT = process.env.PORT || 4000;
    const MONGODB_URI = process.env.MONGODB_URI;

    mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      mongoose.connection.on("connected", () => {
        console.log("Connected to MongoDB");
      });
    } catch (error) {
      console.log("Error connecting to MongoDB:", error);
    }

    app.use(cors());
    app.use(express.json());

    app.get("/", (req, res) => {
      res.send("Hello, World!");
    });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
    ```

11. **Create a `models` Folder**: Create a new folder called `models` in your project folder to store your MongoDB models.

    ```bash
    mkdir models
    ```

12. **Create a `Book` Model**: Create a new file called `Book.js` in the `models` folder and define your MongoDB model.

    ```js title="models/Book.js"
    const mongoose = require("mongoose");

    const bookSchema = new mongoose.Schema({
      name: { type: String, required: true },
    });

    const Book = mongoose.model("Book", bookSchema);

    module.exports = Book;
    ```

13. **Update the `app.js` File**: Update your `app.js` file to use the `Book` model.

    ```js title="app.js"
    const express = require("express");
    const mongoose = require("mongoose");
    const cors = require("cors");
    const Book = require("./models/Book");
    const app = express();
    const PORT = process.env.PORT || 4000;
    const MONGODB_URI = process.env.MONGODB_URI;

    mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      mongoose.connection.on("connected", () => {
        console.log("Connected to MongoDB");
      });
    } catch (error) {
      console.log("Error connecting to MongoDB:", error);
    }

    app.use(cors());
    app.use(express.json());

    app.get("/", (req, res) => {
      res.send("Hello, World!");
    });

    app.get("/api/books", async (req, res) => {
      try {
        const books = await Book.find();
        res.json(books);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    app.post("/api/books", async (req, res) => {
      const book = new Book({
        name: req.body.name,
      });

      try {
        const newBook = await book.save();
        res.status(201).json(newBook);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
    ```

14. **Test the API Endpoints**: Use Postman or a similar tool to test your API endpoints. You can send GET and POST requests to `/api/books` to get all books and add a new book, respectively. Make sure to check the response status codes and messages to ensure that your API is working correctly.
15. **Create Additional Models and Routes**: You can create additional models and routes for your API by following the same steps as above. Make sure to define your models, create routes to handle different requests, and test your API endpoints to ensure they are working as expected.
16. **Deploy Your API**: You can deploy your Express.js API to a cloud platform like Heroku, AWS, or Google Cloud Platform to make it accessible to the public. Make sure to configure your deployment settings, set up environment variables, and test your API in a production environment.

:::note

**Top Free Hosting Platforms for Node.js**

- [Heroku](https://www.heroku.com/) _(Free tier available)_
- [Glitch](https://glitch.com/) _(Free tier available)_
- [Vercel](https://vercel.com/) _(Free tier available)_
- [Netlify](https://www.netlify.com/) _(Free tier available)_
- [GitHub Pages](https://pages.github.com/) _(Free for static sites)_
- [Render](https://render.com/) _(Free for static sites)_

If you are new to Express.js, MongoDB, or Mongoose, I recommend checking out the official documentation for each technology to learn more about their features, capabilities, and best practices.

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [npm Documentation](https://docs.npmjs.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Postman Documentation](https://learning.postman.com/docs/getting-started/introduction/)
- [Visual Studio Code Documentation](https://code.visualstudio.com/docs)
- [GitHub Documentation](https://docs.github.com/)
- [Heroku Documentation](https://devcenter.heroku.com/categories/reference)
- [AWS Documentation](https://docs.aws.amazon.com/)
- [Google Cloud Platform Documentation](https://cloud.google.com/docs)
- [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Web Development Documentation](https://developer.mozilla.org/en-US/docs/Web)
- [Web Frameworks Documentation](https://developer.mozilla.org/en-US/docs/Web/Frameworks)

:::

Congratulations! You have successfully built an API with Express.js and connected it to a MongoDB database. You are now ready to create a frontend application using React.js.

## Creating a React App

> React.js is a JavaScript library for building user interfaces and single-page applications. It is widely used in the industry due to its component-based architecture, virtual DOM, and declarative syntax.

Let's get started with creating a React app. Follow these steps to create a simple React app:

1. **Create a New React App**: Run `npx create-react-app frontend` to create a new React app named `frontend`.

   ```bash
   npx create-react-app frontend
   ```

2. **Navigate to the React App**: Run `cd frontend` to navigate to the React app folder.

   ```bash
   cd frontend
   ```

3. **Start the React App**: Run `npm start` to start the React app in development mode.

   ```bash
   npm start
   ```

4. **Open the React App**: Open [http://localhost:3000/](http://localhost:3000/) in your browser to see the React app running.

<BrowserWindow>
    <div style={{textAlign: 'center'}}>
      <header style={{display:' flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: 'calc(10px + 2vmin)'}}>
        <img src='/img/docs/react/logo.svg' className="App-logo" alt="logo" />
        <br/>
        <p>
          Edit src/App.js and save to reload.
        </p>
        <a
          style={{color: '#61dafb'}}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
</BrowserWindow>

5. **Create Additional Components**: You can create additional components in the `src/components` folder to organize your code and reuse components across your app.

   ```bash
   mkdir src/components
   ```

6. Now, create a new file called `Home.js` in the `src/components` folder and add the following code to create a simple home component.

   ```js title="src/components/Home.js"
   import React from "react";

   const Home = () => {
     return (
       <div>
         <h2>Welcome to the Home Page</h2>
       </div>
     );
   };

   export default Home;
   ```

7. **Update the `App.js` File**: Update your `App.js` file to use the `Home` component.

   ```js title="src/App.js"
   import React from "react";
   import Home from "./components/Home";

   function App() {
     return (
       <div>
         <Home />
       </div>
     );
   }

   export default App;
   ```

8. Now, you can see the `Home` component displayed on browser window.

<BrowserWindow minHeight={200}>
    <div>
      <h2>Welcome to the Home Page</h2>
    </div>
</BrowserWindow>

## Setting a Proxy from your Backend API server to the Frontend React App

> When you are developing a full-stack application with a separate frontend and backend, you might run into issues related to cross-origin requests. To avoid these issues during development, you can set up a proxy from your backend API server to your frontend React app.

To set up a proxy, follow these steps:

1. **Update the `package.json` File**: Update the `package.json` file in your React app to include a proxy setting that points to your backend API server.

   ```json title="frontend/package.json"
   {
     "name": "frontend",
     "version": "0.1.0",
     "private": true,
     "proxy": "http://localhost:4000"
   }
   ```

2. **Restart the React App**: Run `npm start` to restart the React app with the new proxy setting.

   ```bash
   npm start
   ```

3. **Test the Proxy**: Make a request to your backend API server from your frontend React app using the proxy setting.

   ```js title="src/components/Home.js"
   import React, { useEffect } from "react";

   const Home = () => {
     useEffect(() => {
       fetch("/api/books")
         .then((response) => response.json())
         .then((data) => console.log(data))
         .catch((error) => console.error(error));
     }, []);

     return (
       <div>
         <h2>Welcome to the Home Page</h2>
       </div>
     );
   };

   export default Home;
   ```

4. **Check the Console**: Open the browser console to see the data fetched from your backend API server. This confirms that the proxy is working correctly.

   ```plaintext
   [ { id: 1, title: 'Book 1' }, { id: 2, title: 'Book 2' }, { id: 3, title: 'Book 3' } ]
   ```

5. **Update the API Endpoints**: Update your API endpoints in the Express.js server to return data in JSON format.

   ```js title="app.js"
   app.get("/api/books", async (req, res) => {
     try {
       const books = [
         { id: 1, title: "Book 1" },
         { id: 2, title: "Book 2" },
         { id: 3, title: "Book 3" },
       ];
       res.json(books);
     } catch (error) {
       res.status(500).json({ message: error.message });
     }
   });
   ```

6. **Test the API Endpoints**: Make a request to the `/api/books` endpoint from your frontend React app to fetch the data and display it on the browser window.

   ```js title="src/components/Home.js"
   import React, { useEffect, useState } from "react";

   const Home = () => {
     const [books, setBooks] = useState([]);

     useEffect(() => {
       fetch("/api/books")
         .then((response) => response.json())
         .then((data) => setBooks(data))
         .catch((error) => console.error(error));
     }, []);

     return (
       <div>
         <h2>Welcome to the Home Page</h2>
         <ul>
           {books.map((book) => (
             <li key={book.id}>{book.title}</li>
           ))}
         </ul>
       </div>
     );
   };

   export default Home;
   ```

7. **Check the Browser Window**: Open the browser window to see the list of books fetched from your backend API server and displayed on the screen.

<BrowserWindow minHeight={200}>
    <div>
      <h2>Welcome to the Home Page</h2>
      <ul>
        <li>Book 1</li>
        <li>Book 2</li>
        <li>Book 3</li>
      </ul>
    </div>
</BrowserWindow>

By setting up a proxy from your backend API server to your frontend React app, you can avoid issues related to cross-origin requests during development. This allows you to focus on building your application without worrying about the underlying infrastructure.

## Styling and making Requests from the frontend

> Now that you have set up your backend API server and connected it to your frontend React app, it's time to style your app and make requests to the API endpoints. You can use CSS for styling and fetch API for making requests from the frontend.

Here is a simple guide to styling and making requests from the frontend:

1. **Create a `styles.css` File**: Create a new file called `styles.css` in the `src` folder of your React app to add custom styles.

   ```css title="src/styles.css"
   body {
     font-family: "Arial", sans-serif;
     background-color: #f0f0f0;
     margin: 0;
     padding: 0;
   }

   .container {
     max-width: 800px;
     margin: 0 auto;
     padding: 20px;
   }

   .heading {
     font-size: 24px;
     font-weight: bold;
     margin-bottom: 20px;
   }

   .list {
     list-style-type: none;
     padding: 0;
   }

   .item {
     background-color: #fff;
     border: 1px solid #ccc;
     margin-bottom: 10px;
     padding: 10px;
   }
   ```

2. **Update the `App.js` File**: Update your `App.js` file to include the custom styles.

   ```js title="src/App.js"
   import React, { useEffect, useState } from "react";
   import "./styles.css";

   const App = () => {
     const [books, setBooks] = useState([]);

     useEffect(() => {
       fetch("/api/books")
         .then((response) => response.json())
         .then((data) => setBooks(data))
         .catch((error) => console.error(error));
     }, []);

     return (
       <div className="container">
         <h1 className="heading">Book List</h1>
         <ul className="list">
           {books.map((book) => (
             <li key={book.id} className="item">
               {book.title}
             </li>
           ))}
         </ul>
       </div>
     );
   };

   export default App;
   ```

3. **Check the Browser Window**: Open the browser window to see the list of books displayed with the custom styles applied.

<BrowserWindow minHeight={200}>
    <div style={{maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
      <h1 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px'}}>Book List</h1>
      <ul style={{listStyleType: 'none', padding: '0'}}>
        <li style={{backgroundColor: '#fff', border: '1px solid #ccc', marginBottom: '10px', padding: '10px', color: '#000'}}>Book 1</li>
        <li style={{backgroundColor: '#fff', border: '1px solid #ccc', marginBottom: '10px', padding: '10px', color: '#000'}}>Book 2</li>
        <li style={{backgroundColor: '#fff', border: '1px solid #ccc', marginBottom: '10px', padding: '10px', color: '#000'}}>Book 3</li>
      </ul>
    </div>
</BrowserWindow>

By adding custom styles to your React app and making requests to the API endpoints, you can create a visually appealing and interactive user interface. You can experiment with different styles, layouts, and components to enhance the user experience and make your app more engaging.

Once you have styled your app and made requests to the API endpoints, you can continue to add more features, functionality, and components to build a full-fledged web application. You can also explore other libraries, frameworks, and tools to further enhance your app and take it to the next level.

:::tip
**Key Takeaways**

- The MERN stack consists of MongoDB, Express.js, React.js, and Node.js, which work together to build modern web applications.
- Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web applications and APIs.
- React.js is a JavaScript library for building user interfaces and single-page applications using a component-based architecture.
- By setting up a MongoDB Atlas cluster, building an API with Express.js, creating a React app, and connecting the frontend to the backend, you can build a simple MERN application.
- You can use CSS for styling your app and fetch API for making requests from the frontend to the backend.
- By following best practices, experimenting with different technologies, and continuously learning and improving your skills, you can become a proficient full-stack developer and build amazing web applications.
- Remember to have fun, stay curious, and keep exploring new ideas and technologies to expand your knowledge and grow as a developer.
- If you have any questions, feedback, or suggestions, feel free to reach out to the authors or the community for help and [support](https://codeharborhub.github.io/community/supports#-how-to-get-support). Happy coding! 🚀

:::

## Conclusion

In this blog post, we covered the basics of the MERN stack and walked you through the process of building a simple MERN application. We started by setting up a MongoDB Atlas cluster, building an API with Express.js, creating a React app, and connecting the frontend to the backend. We also covered styling and making requests from the frontend to the backend API server.
