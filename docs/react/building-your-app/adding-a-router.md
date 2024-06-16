---
id: adding-a-router
title: Adding a Router
sidebar_position: 8
tags: [react, react router, routing, react app, single-page application, spa, create react app, navigation, links, components]
keywords: [react, react router, routing, react app, single-page application, spa, create react app, navigation, links, components]
description: Learn how to add routing capabilities to your React app using React Router, enabling dynamic, multi-page applications without full-page refreshes.
---

## Introduction:
Welcome, fellow Coders! Today, we embark on an exciting journey to enhance our React app by adding routing capabilities. Routing allows us to create dynamic, multi-page applications without the need for full-page refreshes. Buckle up, and let's dive into the world of React Router!

### 1: What is React Router?
React Router is a popular library that enables navigation and routing within a React application. It provides a seamless way to create multiple pages while maintaining a single-page app feel. Think of it as a virtual GPS system for your app, guiding users to different views without reloading the entire page.

### 2: Getting Started
Before we hit the road, let's set up our project! Make sure you have Node.js and npm installed. If not, visit Node.js' official website and follow their easy installation guide.

Once you have everything set up, create your React app using Create React App (CRA). In your terminal, type:

```bash
npx create-react-app my-awesome-app
cd my-awesome-app
```

Now, we're ready to install React Router. Execute the following command:

```bash
npm install react-router-dom
```

### 3: Creating Our Routes
Imagine your app is a fantastic theme park, and each attraction represents a different page. Let's map out our routes accordingly:

1. **Home:** The main entrance to our park, where visitors start their journey.
2. **About:** An information booth to learn more about our park's history.
3. **Contact:** A helpline where visitors can reach out for any queries.
4. **NotFound:** A secret portal to another dimension for lost URLs (404 page).

### 4: Setting Up the Router
Now that we have our routes planned out, let's integrate React Router into our app. Open the `src/App.js` file, and let the routing magic begin:

```jsx title="src/App.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
}
```

### 5: Creating Our Components
To keep our code organized, let's create separate components for each route we defined earlier. For instance, create `Home.js`, `About.js`, `Contact.js`, and `NotFound.js` in the `src/components` folder. Don't forget to sprinkle some code wizardry into each component to make them shine!

### 6: Linking It All Together
Now that we have our routes and components set up, we need navigation links for our visitors to explore the park. Update your `src/components/Home.js` with the following code:

```jsx title="src/components/Home.js"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Code Mastermind Theme Park!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
```
### 7: Celebrate Your Success!
Congratulations, Code Mastermind! You've successfully added React Router to your app, making it dynamic and user-friendly. Now, users can roam freely through your theme park without ever getting lost.

### Apply your Idea's

[Contribution Now](https://github.com/Ajay-Dhangar/react-blog-app/tree/main/)

## Conclusion:
Routing in React is like a thrilling roller coaster ride for developers. We've just scratched the surface of what React Router can do. So keep exploring, experimenting, and creating breathtaking experiences for your users. Until next time, happy coding, Code Masterminds! 🎢
