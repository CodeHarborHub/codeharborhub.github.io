---
id: loading-graphql-files
title: How to Load GraphQL Files in React
sidebar_label: Loading GraphQL Files
sidebar_position: 7
tags: [react, create-react-app, graphql, apollo-client, graphql-code-generator, react-apollo, react-apollo-hooks]
description: Learn how to load GraphQL files in a Create React App project. Use Apollo Client or GraphQL Code Generator to fetch data from your GraphQL server and simplify your React application development.
---

## Introduction

GraphQL is a powerful query language for APIs that allows you to efficiently request only the data you need from your server. If you are using GraphQL in your React application created with Create React App, you might wonder how to load your GraphQL files effectively.

In this guide, we'll walk you through the process of loading GraphQL files in a Create React App project. We'll cover two popular approaches: using Apollo Client and using GraphQL Code Generator. Buckle up, and let's dive into the world of GraphQL!

## Prerequisites

Before we proceed, make sure you have the following installed in your development environment:

1. [Node.js](https://nodejs.org) - JavaScript runtime environment.
2. [Create React App](../getting-started/getting-started.md) - Get Started to Create React app.
3. [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) - The official tool to create React applications.

## Method 1: Using Apollo Client

[Apollo Client](https://www.apollographql.com/docs/react/) is a widely-used GraphQL client that simplifies the process of fetching data from a GraphQL server in your React application. Let's see how you can set up Apollo Client in your Create React App project:

**1. Install Dependencies**

Open your terminal and navigate to your project directory. Run the following command to install the required packages:

```bash
npm install @apollo/client graphql
```

**2. Set up Apollo Client**

Create a new file called `apolloClient.js` in the `src` directory and add the following code:

```javascript title="apolloClient.js"
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://your-graphql-server.com/graphql', // Replace this with your GraphQL server URL
  cache: new InMemoryCache(),
});

export default client;
```

**3. Wrap your App with Apollo Provider**

Open the `index.js` file in the `src` directory, and modify it as follows:

```javascript title="index.js"
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import App from './App';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
```

Now, your React application is equipped with Apollo Client, and you can start making GraphQL queries and mutations!

## Method 2: Using GraphQL Code Generator

[GraphQL Code Generator](https://graphql-code-generator.com/) is a fantastic tool that generates TypeScript types and React hooks based on your GraphQL schema and operations. It simplifies working with GraphQL in React by providing type safety and autocompletion for your queries and mutations. Let's get started:

**1. Install Dependencies**

Run the following command in your terminal to install the required packages:

```bash
npm install -g graphql-codegen
```

**2. Set up GraphQL Code Generator**

Create a `codegen.yml` file in the root of your project and add the following configuration:

```yaml
overwrite: true
schema: https://your-graphql-server.com/graphql # Replace this with your GraphQL schema URL
documents: src/**/*.graphql
generates:
  src/generated/graphql.tsx:
    plugins:
      - 'typescript'
      - 'typescript-operations'
      - 'typescript-react-apollo'
```

**3. Create GraphQL Operations**

In the `src` directory, create a folder called `graphql` and add your GraphQL query or mutation files with the `.graphql` extension. For example, `query.graphql`.

**4. Generate Code**

Now, run the following command to generate TypeScript types and React hooks based on your GraphQL operations:

```bash
graphql-codegen
```

You will see a new file `graphql.tsx` in the `generated` folder inside `src`, containing the generated code.

**5. Use Generated Code in your Components**

You can now import and use the generated hooks in your React components:

```javascript
import { useMyQuery } from '../generated/graphql';

const MyComponent = () => {
  const { data, loading, error } = useMyQuery();

  // Your component logic here
};
```

## Conclusion

In this guide, you learned how to load GraphQL files in a Create React App project using two popular approaches: Apollo Client and GraphQL Code Generator. You can choose the method that best suits your project requirements and start building powerful React applications with GraphQL. Happy coding!