---
id: lesson-2
title: "Handling asynchronous operations (promises, async/await)"
sidebar_label: Lesson - 2
sidebar_position: 2
description: "Learn how to handle asynchronous operations in React using promises, async/await, and the useEffect hook. Asynchronous operations are common in web development, and React provides several ways to manage asynchronous code and update your application's state with the results."
tags:
  [
    courses,
    react-js,
    intermediate-level,
    asynchronous-operations,
    promises,
    async-await,
    useEffect-hook,
  ]
---

In React applications, handling asynchronous operations like fetching data from external APIs, reading/writing to a database, or performing time-consuming tasks is a common requirement. Asynchronous operations are tasks that don't block the main thread and allow your application to continue running while waiting for the operation to complete. React provides several ways to handle asynchronous code, including promises, async/await, and the `useEffect` hook.

This lesson will introduce you to handling asynchronous operations in React using promises, async/await, and the `useEffect` hook. You'll learn how to fetch data from an external API, update your application's state with the fetched data, and handle loading and error states in your components.

## What are asynchronous operations?

Asynchronous operations in JavaScript are tasks that run independently of the main thread and don't block the execution of other code. Common examples of asynchronous operations include fetching data from an external API, reading/writing to a database, and handling user input events. Asynchronous code is essential for building responsive and interactive web applications that can perform multiple tasks concurrently.

Here's an example of an asynchronous operation in React using a `setTimeout` function:

<Tabs>
  <TabItem value="Source code" label="Source code">
   ```jsx title="/src/components/AsyncOperationExample.js"
    import React, { useState, useEffect } from "react";

    function AsyncOperationExample() {
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, []);

      return (
        <div>
          <h2>Async Operation Example</h2>
          {loading ? <p>Loading...</p> : <p>Async operation completed!</p>}
        </div>
      );
    }

    export default AsyncOperationExample;
    ```

  </TabItem>
  <TabItem value="Live demo" label="Live demo">
    ```jsx live
    function AsyncOperationExample() {
      const [loading, setLoading] = useState(true);

      setTimeout(() => {
        setLoading(false);
      }, 3000);

      return (
        <div>
          {loading ? <p>Loading...</p> : <p>Async operation completed!</p>}
        </div>
      );
    }
    ```

  </TabItem>
</Tabs>

In this example, the `AsyncOperationExample` component uses a `setTimeout` function to simulate an asynchronous operation that takes 3 seconds to complete. The `loading` state is initially set to `true`, and after 3 seconds, it's updated to `false`, indicating that the asynchronous operation has completed.

## Handling asynchronous operations with promises

Promises are a built-in JavaScript feature that allows you to work with asynchronous code in a more readable and manageable way. Promises represent the eventual completion (or failure) of an asynchronous operation and provide a clean syntax for handling asynchronous tasks. You can use promises to fetch data from an external API, read/write to a database, or perform other asynchronous operations in your React components.

Here's an example of fetching data from an external API using promises in a React component:

<Tabs>
  <TabItem value="Source code" label="Source code">
    ```jsx title="/src/components/UserList.js"
    import React, { useState, useEffect } from "react";

    function UserList() {
      const [users, setUsers] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => {
            setUsers(data);
            setLoading(false);
          })
          .catch((error) => console.error("Error fetching data:", error));
      }, []);

      return (
        <div>
          <h2>User List</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    export default UserList;
    ```

  </TabItem>
  <TabItem value="Live demo" label="Live demo">
    ```jsx live
    function UserList() {
      const [users, setUsers] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => {
            setUsers(data);
            setLoading(false);
          })
          .catch((error) => console.error("Error fetching data:", error));
      }, []);

      return (
        <div>
          <h2>User List</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )}
        </div>
      );
    }
    ```

  </TabItem>
</Tabs>

In this example, the `UserList` component uses the `fetch` API to make a GET request to the JSONPlaceholder API and fetch a list of users. The `fetch` function returns a promise that resolves with the response to the request. You can use the `then` method to handle the response data and update the component's state with the fetched users.

## Handling asynchronous operations with async/await

Async/await is a modern JavaScript feature that provides a more concise and readable way to work with asynchronous code. Async functions return a promise that resolves with the function's return value, allowing you to use the `await` keyword to pause the execution of the function until the promise is resolved. You can use async/await to fetch data from an external API, read/write to a database, or perform other asynchronous tasks in your React components.

Here's an example of fetching data from an external API using async/await in a React component:

<Tabs>
  <TabItem value="Source code" label="Source code">
    ```jsx title="/src/components/UserList.js"
    import React, { useState, useEffect } from "react";

    function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
      };

        fetchData();
    }, []);

    return (
      <div>
        <h2>User List</h2>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
            </ul>
        )}
      </div>
    );
    }

    export default UserList;
    ```
  </TabItem>
  <TabItem value="Live demo" label="Live demo">
    ```jsx live
    function UserList() {
     const [users, setUsers] = useState([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };
         fetchData();
     }, []);

     return (
        <div>
        <h2>User List</h2>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
            </ul>
        )}
        </div>
     );
    }
    ```
  </TabItem>
</Tabs>

In this example, the `UserList` component uses an async function to fetch data from the JSONPlaceholder API using the `fetch` API and the `await` keyword. The `fetchData` function is defined as an async function that makes an API call to fetch a list of users. The `await` keyword pauses the execution of the function until the promise is resolved, allowing you to handle the response data and update the component's state with the fetched users.

:::info
When using async/await in React components, make sure to handle errors using a `try/catch` block to gracefully handle any exceptions that may occur during the asynchronous operation.
:::

## Conclusion

Handling asynchronous operations in React is a crucial skill for building modern web applications that interact with external APIs, databases, and other services. By using promises, async/await, and the `useEffect` hook, you can manage asynchronous code effectively and update your application's state with the results of asynchronous tasks. Practice working with asynchronous operations in React to build responsive and interactive applications that provide a seamless user experience.