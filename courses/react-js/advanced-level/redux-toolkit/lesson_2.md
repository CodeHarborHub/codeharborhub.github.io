---
id: lesson-2
title: "Advanced State Management with Redux Toolkit"
sidebar_label: Lesson - 2
sidebar_position: 2
description: "In this lesson, you will learn advanced state management techniques using Redux Toolkit, including handling asynchronous actions with createAsyncThunk and managing complex state logic."
tags:
  [
    courses,
    redux-toolkit,
    react-js,
    state-management,
    redux,
    advanced,
  ]
---

## Introduction

Creating an API utility for your application is an essential step to manage and separate concerns effectively. By centralizing your API calls, you simplify the process of managing data retrieval, error handling, and side effects, resulting in cleaner and more maintainable code. This lesson will guide you through creating an API utility and using it with Redux Toolkit to manage state in a structured and efficient way.

## Steps to Create an API Utility

### 1. Creating an API Utility

You'll often want to separate your API calls into a dedicated utility file. This approach allows you to centralize the logic for making HTTP requests, making your code more modular and easier to maintain. 

```javascript title = "src/features/posts/postsAPI.js"
import axios from 'axios';

export const fetchPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
};
```

*Description:* The above code creates an API utility using Axios to fetch posts from a placeholder API. This utility function can be reused across different parts of your application wherever you need to fetch posts data.

### 2. Using Thunks in a Component

With the API utility created, you can now use it in your Redux slices to handle asynchronous actions. Redux Toolkit provides `createAsyncThunk` to simplify this process.

```javascript title = "src/features/posts/Posts.js"
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsAsync } from './postsSlice';

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPostsAsync());
    }
  }, [status, dispatch]);

  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'succeeded' && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
      {status === 'failed' && <div>{error}</div>}
    </div>
  );
}

export default Posts;
```

*Description:* This component uses the `fetchPostsAsync` thunk to fetch posts data when the component mounts. It leverages the Redux state to manage loading, success, and error states, providing a responsive user experience.

![Redux Toolkit Thunks](https://i.ytimg.com/vi/e0pw9j4pi2A/maxresdefault.jpg)

*Description:* The image above provides a visual representation of how Redux Toolkit thunks can be used to manage asynchronous operations in your Redux state management.

## Managing Complex State Logic

For complex applications, it's important to structure your state effectively to avoid deeply nested structures. Normalizing state makes it easier to update and manage, reducing the likelihood of bugs and improving performance.

### 1. Normalizing State Structure

```javascript title = "src/features/entities/entitiesSlice.js" 
import { createSlice } from '@reduxjs/toolkit';

const entitiesSlice = createSlice({
  name: 'entities',
  initialState: {
    users: {},
    posts: {},
    comments: {},
  },
  reducers: {
    addUser: (state, action) => {
      const user = action.payload;
      state.users[user.id] = user;
    },
    addPost: (state, action) => {
      const post = action.payload;
      state.posts[post.id] = post;
    },
    addComment: (state, action) => {
      const comment = action.payload;
      state.comments[comment.id] = comment;
    },
  },
});

export const { addUser, addPost, addComment } = entitiesSlice.actions;
export default entitiesSlice.reducer;
```

*Description:* This slice normalizes the state structure by storing users, posts, and comments in separate dictionaries indexed by their IDs. This approach allows for efficient state updates and access.

### 2. Using Entity Adapter

Redux Toolkit provides `createEntityAdapter` to manage normalized state more efficiently. It includes helpers for common operations like adding, updating, and removing entities.

```javascript title="src/features/posts/postsSlice.js"
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchPosts } from './postsAPI';

const postsAdapter = createEntityAdapter();

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState({
    status: 'idle',
    error: null,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        postsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectAll: selectAllPosts } = postsAdapter.getSelectors(
  (state) => state.posts
);

export default postsSlice.reducer;
```

*Description:* The `postsAdapter` provides a set of pre-built reducers and selectors to manage the posts state. This approach simplifies the implementation of common CRUD operations and ensures consistent state structure.

## Conclusion

In this lesson, you learned how to create an API utility and integrate it with Redux Toolkit to manage asynchronous actions. You also explored advanced state management techniques, including normalizing state structures and using entity adapters for efficient state updates. By following these practices, you can build more robust and maintainable Redux applications.

---

This approach to advanced state management with Redux Toolkit ensures your application remains scalable and maintainable as it grows in complexity.