---
id: lesson-1
title: "Networking and Data Fetching in React Native"
sidebar_label:  Networking and Data Fetching
sidebar_position: 1
description: "Learn Networking and Data Fetching in React Native"
tags: [courses,beginner-level,React Native,Introduction]
--- 
      

Networking and data fetching are essential for interacting with remote servers and displaying dynamic data in your React Native applications.

#### Fetching Data from APIs Using `fetch`

The `fetch` function is a native JavaScript API for making HTTP requests. It is widely used for its simplicity and native support.

**Example: Fetching Data Using `fetch`**

```jsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default App;
```

In this example, `fetch` is used to retrieve data from a placeholder API. The data is then displayed in a `FlatList`.

#### Using Axios for HTTP Requests

Axios is a popular library for making HTTP requests, providing a more feature-rich API compared to `fetch`.

**Installation:**

```bash
npm install axios
```

**Example: Fetching Data Using Axios**

```jsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default App;
```

#### Handling Responses and Errors

Both `fetch` and Axios allow for handling responses and errors. Here’s how you can manage them effectively.

**Handling Responses and Errors with `fetch`**

```jsx
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(json => {
      setData(json);
      setLoading(false);
    })
    .catch(error => {
      console.error('Fetch error:', error);
      setLoading(false);
    });
}, []);
```

**Handling Responses and Errors with Axios**

```jsx
useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      setData(response.data);
      setLoading(false);
    })
    .catch(error => {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Response error:', error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error('Request error:', error.request);
      } else {
        // Something else happened
        console.error('Axios error:', error.message);
      }
      setLoading(false);
    });
}, []);
```
