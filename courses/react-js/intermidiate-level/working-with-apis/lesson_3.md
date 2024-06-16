---
id: lesson-3
title: "Rendering fetched data from APIs"
sidebar_label: Lesson - 3
sidebar_position: 3
description: "Learn how to render data fetched from external APIs in React components. Rendering fetched data is a common task in web development, and React provides a way to update your application's UI with the data retrieved from API calls."
tags: [courses, react-js, intermediate-level, api-calls, fetch, axios, state-management, rendering-data]
---

import FetchDataExample from "./FetchDataExample";

In React applications, rendering data fetched from external APIs is a common task that allows you to display dynamic content in your components. You can use the data retrieved from API calls to update your application's state and render the content in your UI. This lesson will show you how to render data fetched from APIs in React components and handle loading and error states when fetching data.

## Rendering fetched data in React components

Rendering data fetched from external APIs in React components involves making API calls to fetch the data and updating the component's state with the response. Once the data is available, you can render it in your component's UI using JSX and JavaScript expressions. 

Here's an example of rendering fetched data in a React component:

```jsx title="/src/components/FetchDataExample.js"
import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchDataExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Fetch Data Example</h2>
      {loading ? <p>Loading...</p> : (
        error ? <p>Error: {error}</p> : (
          <ul>
            {data && data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}

export default FetchDataExample;
```

<BrowserWindow>
  <FetchDataExample />
</BrowserWindow>

In this example, the `FetchDataExample` component uses the `axios` library to make a GET request to an external API and fetch a list of items. The component's state includes variables to store the fetched data, loading state, and error message. The `useEffect` hook is used to fetch the data when the component mounts, and the component's UI is updated based on the loading and error states.

## Key points to remember

- Use the `fetch` API or libraries like `axios` to make API calls in React components.
- Update the component's state with the fetched data, loading state, and error state.
- Render the fetched data in your component's UI using JSX and JavaScript expressions.
- Handle loading and error states when fetching data to provide a better user experience.
- Use the `useEffect` hook to fetch data when the component mounts or when dependencies change.
- Consider using async/await for handling asynchronous operations in your React components.
- Test your components to ensure they render the fetched data correctly and handle loading and error states.
- Use conditional rendering to display loading indicators or error messages based on the component's state.
- Implement error handling to catch and display errors that occur during API calls.
- Update the component's state with the fetched data to trigger a re-render of the component.
- Use the `map` method to iterate over the fetched data and render it in your component's UI.
- Provide feedback to users when data is being fetched or an error occurs to improve the user experience.
- Use CSS styles or loading spinners to indicate loading states in your components.
- Consider using placeholders or skeleton screens to improve the perceived performance of your application.
- Optimize API calls by debouncing or throttling requests to prevent excessive requests to the server.

In the next lesson, you will learn how to handle user input and update the component's state based on user interactions in React components.

:::info Challenge🚀

Modify the `FetchDataExample` component to display a loading spinner while fetching data from the API. You can use CSS styles or a library like `react-spinners` to create a loading indicator.

:::

## Conclusion

Rendering fetched data from APIs in React components is a common task that allows you to display dynamic content in your application. By making API calls, updating the component's state, and rendering the data in your UI, you can create interactive and data-driven components in React. Handling loading and error states when fetching data is essential to provide a better user experience and improve the performance of your application.