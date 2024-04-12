---
id: lesson-3
title: "Implementing nested routes for intricate layouts"
sidebar_label: Lesson - 3
sidebar_position: 3
description: "In this lesson, we will learn how to implement nested routes in React Router to create intricate layouts and nested views in a single-page application."
tags: [courses, react-js, intermidiate-level, routing-for-spas, nested-routes, react-router]
---

In this lesson, we will learn how to implement nested routes in React Router to create intricate layouts and nested views in a single-page application. Nested routes allow you to define routes within routes, enabling you to create complex layouts with multiple levels of nesting.

## Setting up nested routes

To implement nested routes in React Router, you can use the `Routes` and `Route` components to define the nested routes. The `Routes` component is used to group multiple `Route` components together and define the nested routes.

Here's an example of how you can implement nested routes in your application:

<Tabs>
  <TabItem value="app" label="App.js">
    ```jsx title="/src/App.js"
    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Header from './Header';
    import Home from './Home';
    import About from './About';
    import Contact from './Contact';
    import Profile from './Profile';
    import Settings from './Settings';

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
              <Route path="/profile" element={<Profile />}>
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
          </Router>
        </>
      );
    }

    export default App;
    ```
  </TabItem>
  <TabItem value="header" label="Header.js">
    ```jsx title="/src/Header.js"
    import React from 'react';
    import { Link } from 'react-router-dom';

    function Header() {
      return (
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      );
    }

    export default Header;
    ```
  </TabItem>
  <TabItem value="profile" label="Profile.js">
    ```jsx title="/src/Profile.js"
    import React from 'react';
    import { Routes, Route } from 'react-router-dom';

    function Profile() {
      return (
        <div>
          <h2>Profile</h2>
          {/* Nested route for settings */}
          <Routes>
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      );
    }

    export default Profile;
    ```
  </TabItem>
  <TabItem value="settings" label="Settings.js">
    ```jsx title="/src/Settings.js"
    import React from 'react';

    function Settings() {
      return (
        <div>
          <h3>Settings</h3>
          <p>Profile settings go here...</p>
        </div>
      );
    }

    export default Settings;
    ```
  </TabItem>
</Tabs>


In the example above, we have defined a nested route for the `Profile` component. When the user navigates to the `/profile` route, the `Profile` component is rendered, and the nested route for `settings` is also defined within the `Profile` component. This allows us to create a nested view for the settings page within the profile page.

By using nested routes, you can create intricate layouts and nested views in your single-page application, making it easier to manage complex routing scenarios.

In the next lesson, we will learn how to implement route parameters in React Router to handle dynamic routing scenarios.


## Conclusion

In this lesson, we learned how to implement nested routes in React Router to create intricate layouts and nested views in a single-page application. Nested routes allow you to define routes within routes, enabling you to create complex layouts with multiple levels of nesting. By using nested routes, you can manage complex routing scenarios and create a more structured application layout.