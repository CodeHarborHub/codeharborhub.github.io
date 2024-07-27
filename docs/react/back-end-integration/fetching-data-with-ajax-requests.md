---
id: fetching-data-with-ajax-requests
title: Fetching Data with AJAX Requests in React
sidebar_label: Fetching Data
sidebar_position: 2
tags: [React, AJAX, Data Fetching, API, Asynchronous]
keywords: [fetching data in react, ajax requests in react, data fetching in react, react ajax, react fetch, react data fetching, react api]
description: "Learn how to fetch data with AJAX requests in a React application using the `fetch()` API and the `axios` library."
---

import '../css/style.css';

In modern web development, retrieving data from a server and displaying it on a web page is a common task. To achieve this in React, we use AJAX (Asynchronous JavaScript and XML) requests. AJAX allows us to fetch data from a server without needing to reload the entire page.


## Prerequisites

Before we begin, make sure you have the following:

1. Basic knowledge of HTML, CSS, and JavaScript.
2. Node.js and npm (Node Package Manager) installed on your machine.
3. A code editor of your choice, such as Visual Studio Code or Sublime Text.


## Introduction to Fetching Data in React

When building React applications, data fetching is a common requirement to interact with APIs and display dynamic content on web pages. While React doesn't enforce a specific data fetching approach, developers often use libraries like [axios](https://github.com/axios/axios) or utilize the native [`fetch()` API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) provided by modern browsers.

In this guide, we'll explore how to fetch data with AJAX requests in React, and we'll focus on using the `fetch()` API as it's built into browsers, making it readily accessible.

## Understanding the `fetch()` API

The `fetch()` function is a powerful tool for making AJAX requests in modern web applications. It takes a URL as an input and returns a `Promise` that resolves to a `Response` object. If the request is successful, the `Response` object contains the data returned by the server.

Here's a basic example of how the `fetch()` API works:

```js
fetch('https://api.github.com/users/Ajay-Dhangar')
  .then((response) => response.json())
  .then((data) => {
    // Process the data here
    console.log(data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
```

In this example, we use the `fetch()` function to make a GET request to the URL `https://api.github.com/users/Ajay-Dhangar`. We then use the `then()` method to handle the response. The `response.json()` method reads the response data and parses it as JSON. Finally, we handle the parsed data or catch any errors that occurred during the request.

## Using `async / await` for a Cleaner Code

While chaining `.then()` methods works well, it can lead to callback hell when dealing with multiple requests. To make the code cleaner and more readable, you can use the `async / await` syntax with `try / catch` blocks:

```js
async function fetchData() {
  try {
    const response = await fetch('https://api.github.com/users/Ajay-Dhangar');
    const data = await response.json();
    // Process the data here
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the fetchData function
fetchData();
```

Using `async / await`, we can write asynchronous code in a more synchronous style, making it easier to understand, especially for beginners.

## Compatibility Considerations

Before solely relying on the `fetch()` API, ensure it's supported in your target audience's browsers. Older browsers like Internet Explorer require a [polyfill](https://github.com/facebook/create-react-app/blob/main/packages/react-app-polyfill/README.md) to use the `fetch()` API.

## React and AJAX Data Fetching

In a React application, you can use the `fetch()` API within components or custom hooks to fetch data from APIs. It's common to use the `useState` and `useEffect` hooks to manage the data state and trigger the data fetching process when the component mounts or when specific dependencies change.

To learn more about integrating AJAX requests with React components and handling data effectively, refer to the [FAQ entry on the React website](https://reactjs.org/docs/faq-ajax.html).

Remember, AJAX requests may take time to complete, so it's essential to provide proper loading indicators and error handling to create a smooth user experience.


## For Example:
In this guide, we'll walk you through the process of making AJAX requests in a React application using the popular tool "Create React App."

### Step 1: Set Up a New React Project

If you don't have a React project yet, you can create one using Create React App. Open your terminal and run the following command:

```bash
npx create-react-app my-ajax-app
cd my-ajax-app
```

This will create a new React project called "my-ajax-app" and navigate you into its directory.

### Step 2: Install Axios

To make AJAX requests, we'll use Axios, a popular JavaScript library that simplifies the process of sending HTTP requests. In your terminal, run the following command to install Axios:

```bash
npm install axios
```

### Step 3: Create a Component for Fetching Data

Now, let's create a new component that will handle the AJAX request. In the "src" folder of your project, create a new file called "DataFetcher.js." Open the file and add the following code:

```jsx title="DataFetcher.js"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Ajay-Dhangar'); // Replace with your API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
```

In this component, we use the `useEffect` hook to fetch data from the API when the component mounts. We store the fetched data in the `data` state variable using the `useState` hook.

### Step 4: Using the DataFetcher Component

Now that we have our `DataFetcher` component, we can use it in our main application. Open the "src/App.js" file and replace its content with the following:

```jsx
import React from 'react';
import DataFetcher from './DataFetcher';

function App() {
  return (
    <div>
      <h1>My Awesome App</h1>
      <DataFetcher />
    </div>
  );
}

export default App;
```

Here, we import and render the `DataFetcher` component within the `App` component.

### Step 5: Start the Development Server

Finally, start the development server to see your app in action. Run the following command in your terminal:

```bash
npm start
```

Your app will open in a new browser tab at "http://localhost:3000," showing the fetched data from the API.

Congratulations! You've successfully implemented AJAX requests in your React app using Axios.

## Conclusion

Fetching data with AJAX requests is an integral part of building dynamic and interactive React applications. By using the `fetch()` API or libraries like axios, you can easily communicate with APIs and display data on your web pages. Additionally, leveraging `async / await` can improve the readability of your code and help manage multiple asynchronous requests more efficiently.

Always keep compatibility in mind when using modern features like the `fetch()` API, and consider using polyfills for older browsers. With the knowledge of data fetching in React, you're equipped to create responsive and data-driven web applications.

Happy coding and exploring the possibilities of data integration in your React journey!
