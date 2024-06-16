---
id: lesson-1
title: "Making API calls using fetch() or axios"
sidebar_label: Lesson - 1
sidebar_position: 1
description: "Learn how to make API calls in React using the fetch() method or the axios library. Making API calls is a common task in web development, and React provides several ways to fetch data from external APIs and update your application's state with the response."
tags: [courses, react-js, intermediate-level, api-calls, fetch, axios, state-management]
---

import UserList from './UserList';

In React applications, making API calls to fetch data from external services is a common task. You can use the `fetch()` method or the `axios` library to make HTTP requests and handle the response data in your React components. This lesson will show you how to make API calls using `fetch()` and `axios` and update your application's state with the fetched data.

## Making API calls with fetch()

The `fetch()` method is a built-in browser API that allows you to make HTTP requests to external services and fetch data asynchronously. You can use `fetch()` to make GET, POST, PUT, DELETE, and other types of requests to interact with RESTful APIs and retrieve data in JSON, XML, or other formats. 

Here's an example of making an API call using `fetch()` in a React component:

```jsx title="/src/components/UserList.js"
import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
```

<BrowserWindow>
  <UserList />
</BrowserWindow>

In this example, the `UserList` component uses the `fetch()` method to make a GET request to the JSONPlaceholder API and fetch a list of users. The fetched data is stored in the `users` state using the `setUsers` function, and the list of users is rendered in the component's UI.

## Making API calls with axios 

Axios is a popular JavaScript library that provides a simple and easy-to-use API for making HTTP requests in the browser and Node.js environments. You can use axios to make GET, POST, PUT, DELETE, and other types of requests to interact with RESTful APIs and handle the response data in your React components.

Here's an example of making an API call using axios in a React component:

```jsx title="/src/components/UserList.js"
import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
```

<BrowserWindow>
  <UserList />
</BrowserWindow>

In this example, the `UserList` component uses the `axios.get()` method to make a GET request to the JSONPlaceholder API and fetch a list of users. The fetched data is stored in the `users` state using the `setUsers` function, and the list of users is rendered in the component's UI.

:::info

To use axios in your React application, you need to install the axios library by running the following command:

```bash title="terminal"
npm install axios
```

:::

## When to use fetch() vs. axios

Both `fetch()` and axios are powerful tools for making API calls in React applications. Here are some considerations to help you decide which method to use:

- **fetch()**: The `fetch()` method is built into modern browsers and provides a simple and lightweight way to make HTTP requests. It is suitable for basic API calls and can be used without additional dependencies. However, `fetch()` has a lower-level API compared to axios and may require more code to handle common use cases like error handling and request cancellation.

- **axios**: The axios library provides a more feature-rich and user-friendly API for making HTTP requests. It supports features like request and response interceptors, automatic JSON parsing, and error handling out of the box. If you need advanced functionality or want a more convenient API for working with APIs, axios is a good choice.

You can choose the method that best fits your project requirements and preferences when working with API calls in React.

## Differences between fetch() and axios

Here are some key differences between `fetch()` and axios:

|No. | Feature          | fetch() | axios |
|:---|:-----------------|:--------|:------|
|1.  | Browser support  | Modern browsers | All browsers |
|2.  | API simplicity   | Low-level API | High-level API |
|3.  | Error handling   | Manual handling | Automatic handling |
|4.  | Request headers  | Manual configuration | Automatic configuration |
|5.  | Interceptors     | Not supported | Supported |
|6.  | JSON parsing     | Manual parsing | Automatic parsing |
|7.  | Request cancellation | Manual handling | Automatic handling |
|8.  | File uploads     | Supported | Supported |
|9.  | Custom instances | Not supported | Supported |
|10. | Promise chaining | Yes | Yes |

Both `fetch()` and axios have their strengths and weaknesses, and you can choose the method that best fits your project requirements and development workflow when working with API calls in React.


## Conclusion

In this lesson, you learned how to make API calls in React using the `fetch()` method and the axios library. Both `fetch()` and axios are powerful tools for fetching data from external APIs and updating your application's state with the response. You can choose the method that best fits your project requirements and preferences when working with API calls in React.