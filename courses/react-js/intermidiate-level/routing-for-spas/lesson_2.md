---
id: lesson-2
title: "Using React Router for navigation between views"
sidebar_label: Lesson - 2
sidebar_position: 2
description: "In this lesson, we will learn how to use React Router to navigate between views in a single-page application."
tags:
  [
    courses,
    react-js,
    intermidiate-level,
    routing-for-spas,
    navigation,
    react-router,
  ]
---

In this lesson, we will learn how to use React Router to navigate between views in a single-page application. React Router is a popular library for routing in React applications. It allows you to define routes and navigate between views using a declarative syntax. 

## Setting up React Router

To get started with React Router, you need to install the `react-router-dom` package. You can do this by running the following command:

```bash
npm install react-router-dom
```

Once you have installed the `react-router-dom` package, you can start using React Router in your application.

## Creating routes with React Router

To define routes in your application, you need to use the `BrowserRouter` and `Route` components provided by React Router. The `BrowserRouter` component is used to wrap your application and provide routing functionality, while the `Route` component is used to define individual routes.

Here's an example of how you can define routes in your application:

<Tabs>
  <TabItem value="app" label="App.js">
    ```jsx title="/src/App.js"
    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Header from './Header';
    import Home from './Home';
    import About from './About';
    import Contact from './Contact';

    function App() {
      return (
        <>
          <h1>My App</h1>
         <Header />
         <Router>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
           </Routes>
          </Router>
        </>
     );
   }

   export default App;
   ```

    In this example, we have defined three routes: `/`, `/about`, and `/contact`. Each route is associated with a component that will be rendered when the route matches the current URL. The `Router` component wraps the `Routes` component and provides the routing functionality to the application. The `Header` component is used to display a navigation menu that allows the user to navigate between the different views. 

  </TabItem>
  <TabItem value="header" label="Header.js">
   ```jsx title="/src/Header.js"
   import React from 'react';
   import { Link } from 'react-router-dom';

   function Header() {
      return (
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
     );
   }

   export default Header;
   ```

    The `Header` component displays a navigation menu with links to the different views in the application. The `Link` component provided by React Router is used to create links that navigate to the specified route when clicked.
  
  </TabItem>
  <TabItem value="home" label="Home.js">
    ```jsx title="/src/Home.js"
    import React from 'react';

    function Home() {
      return (
        <div>
         <h2>Home</h2>
         <p>Welcome to the home page!</p>
        </div>
     );
    }

   export default Home;
   ```

   The `Home` component displays the content for the home page. When the user navigates to the `/` route, this component will be rendered.

  </TabItem>
  <TabItem value="about" label="About.js">
   ```jsx title="/src/About.js"
   import React from 'react';

   function About() {
    return (
      <div>
        <h2>About</h2>
        <p>Welcome to the about page!</p>
      </div>
    );
   }

   export default About;
   ```

    The `About` component displays the content for the about page. When the user navigates to the `/about` route, this component will be rendered.

  </TabItem>
  <TabItem value="contact" label="Contact.js">
    ```jsx title="/src/Contact.js"
    import React from 'react';

    function Contact() {
      return (
        <div>
          <h2>Contact</h2>
          <p>Welcome to the contact page!</p>
        </div>
      );
    }

   export default Contact;
   ```

   The `Contact` component displays the content for the contact page. When the user navigates to the `/contact` route, this component will be rendered.
  </TabItem>
</Tabs>

In this example, we have defined three routes: `/`, `/about`, and `/contact`. Each route is associated with a component that will be rendered when the route matches the current URL. The `Router` component wraps the `Routes` component and provides the routing functionality to the application. The `Header` component is used to display a navigation menu that allows the user to navigate between the different views.

## Navigating between views

To navigate between views in your application, you can use the `Link` component provided by React Router. The `Link` component creates a hyperlink that navigates to the specified route when clicked. 

Here's an example of how you can use the `Link` component to create navigation links in your application:

```jsx title="/src/Header.js"
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
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
  );
}

export default Header;
```

In this example, we have created navigation links for the home, about, and contact views using the `Link` component. When the user clicks on one of these links, they will be navigated to the corresponding route.

:::info

The `Link` component provided by React Router is similar to the `<a>` element in HTML, but it uses the React Router routing system to navigate between views in a single-page application.

:::

## Conclusion

In this lesson, we learned how to use React Router to navigate between views in a single-page application. React Router provides a declarative way to define routes and navigate between views using a simple and intuitive API. By using React Router, you can create complex navigation structures in your application with ease.