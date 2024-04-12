---
id: adding-relay
title: Adding Relay
sidebar_position: 7
tags: [ react, relay, graphql, create react app, data fetching, data management, efficient, performance, batching, coalescing, over-fetching, server, client, network, environment, store, query, fragment, component, routing, react-router-dom, react-router, react-router-config, react-relay, graphql, relay-runtime, relay-environment-provider, relay-environment, relay-query, relay-fragment, relay-component, relay-routing, relay-graphql, relay-optimization, relay-performance, relay-batching, relay-coalescing, relay-over-fetching, relay-server, relay-client, relay-network, relay-environment, relay-store, relay-query, relay-fragment, relay-component, relay-routing, relay-graphql, relay-optimization, relay-performance, relay-batching, relay-coalescing, relay-over-fetching, relay-server, relay-client, relay-network, relay-environment, relay-store, relay-query, relay-fragment, relay-component, relay-routing, relay-graphql, relay-optimization, relay-performance, relay-batching, relay-coalescing, relay-over-fetching, relay-server, relay-client, relay-network, relay-environment, relay-store, relay-query, relay-fragment, relay-component, relay-routing, relay-graphql, relay-optimization, relay-performance, relay-batching, relay-coalescing, relay-over-fetching, relay-server, relay-client, relay-network, relay-environment, relay-store, relay-query, relay-fragment, relay-component, relay-routing, relay-graphql, relay-optimization, relay-performance, relay-batching, relay-coalescing, relay-over-fetching, relay-server, relay-client, relay-network, relay-environment, relay-store, relay-query, relay-fragment, relay-component, relay-routing, relay-graphql, relay-optimization, relay-performance, relay-batching, relay-coalescing, relay-over-fetching, relay-server, relay-client, relay-network, relay-environment, relay-store, relay-query, relay-fragment, relay-component, relay-routing, relay-graphql, relay-optimization, relay-performance, relay-batching, relay-coalescing, relay-over-fetching, relay-server, relay-client, relay-network, relay-environment, relay-store, relay-query, relay-fragment, relay-component, relay-routing, relay-graphql, relay-optimization, relay-performance, relay-batching, relay-coalescing, relay-over-fetching]
description: Learn how to integrate Relay into your Create React App, enabling efficient data fetching and management from a GraphQL server in your React applications.
---

## Introduction to Relay

Relay is a powerful GraphQL client framework developed by Facebook. It allows you to efficiently fetch and manage data from a GraphQL server in your React applications. Relay optimizes data fetching by batching and coalescing requests, reducing over-fetching and making your app more performant.

## Prerequisites

Before we begin, make sure you have the following installed:

1. Node.js and npm (Node Package Manager) - You can download it from the official website: https://nodejs.org/

2. Create React App - You can create a new React application using Create React App with the following command in your terminal:

    ```bash
    npx create-react-app my-relay-app
    cd my-relay-app
    ```

3. Basic knowledge of React and GraphQL will be helpful, but we'll try to explain everything in a beginner-friendly way.

## Adding Relay to Your Create React App

Let's integrate Relay into your Create React App project.

### Step 1: Install Dependencies

Open your terminal, navigate to your project directory, and install the necessary packages:

```bash
npm install relay react-relay
```

### Step 2: Setup Relay Environment

Relay requires a network layer to communicate with your GraphQL server. For this example, we'll use the GitHub GraphQL API. Open your `src` folder and create a new file named `relay-environment.js`:

```javascript title="src/relay-environment.js" 

import { Environment, Network, RecordSource, Store } from 'relay-runtime';

async function fetchGraphQL(operation, variables) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer YOUR_GITHUB_ACCESS_TOKEN', // Replace with your GitHub access token
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });
  return await response.json();
}

const environment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});
export default environment;
```

Replace `YOUR_GITHUB_ACCESS_TOKEN` with a valid GitHub Personal Access Token. You can create one by following the steps in this guide: https://docs.github.com/en/authentication/creating-a-personal-access-token.

### Step 3: Update index.js

Now, let's make sure our app uses the Relay environment. Open `src/index.js` and update it as follows:

```javascript title="src/index.js"

import React from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'react-relay';
import environment from './relay-environment';
import App from './App';

ReactDOM.render(
  <RelayEnvironmentProvider environment={environment}>
    <App />
  </RelayEnvironmentProvider>,
  document.getElementById('root')
);
```

### Step 4: Writing Your First Relay Query

In this example, we'll fetch a user's details from the GitHub API using Relay. Create a new file named `User.js` inside the `src` folder:

```javascript title"src/User.js"

import React from 'react';
import { graphql, useFragment } from 'react-relay';

const userFragment = graphql`
  fragment User_user on User {
    name
    login
    avatarUrl
  }
`;

function User(props) {
  const user = useFragment(userFragment, props.user);
  return (
    <div>
      <img src={user.avatarUrl} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.login}</p>
    </div>
  );
}

export default User;
```

### Step 5: Create a Relay Query Component

Now, let's create a component that uses the `User` component and fetches the data using Relay. Create a new file named `Profile.js` inside the `src` folder:

```javascript title="src/Profile.js"

import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';

const profileQuery = graphql`
  query ProfileQuery {
    viewer {
      ...User_user
    }
  }
`;

function Profile() {
  const data = useLazyLoadQuery(profileQuery, {});
  return <User user={data.viewer} />;
}

export default Profile;
```

### Step 6: Add Routing (Optional)

To view the user profile, we'll add routing to your app using `react-router-dom`. First, install the package:

```bash
npm install react-router-dom
```

Then, update `src/App.js`:

```javascript title="src/App.js"

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <h1>Welcome to My Relay App</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```

### Step 7: Start Your App

Now, you're all set! Save your changes and start your app:

```bash
npm start
```

Visit `http://localhost:3000/profile` to see your Relay-powered user profile page!

## Conclusion

Congratulations! You've successfully integrated Relay into your Create React App and fetched data from the GitHub API. This is just the beginning of what Relay can do for your React applications. Continue exploring Relay's documentation and its powerful features to take your app to the next level.

:::tip Info
Remember to replace the GitHub API with your own GraphQL API to experiment further with Relay. Happy coding!
:::