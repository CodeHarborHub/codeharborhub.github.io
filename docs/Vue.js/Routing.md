---
id: vue.js-routing
title: Routing in Vue.Js
sidebar_label: Routing in Vue.Js
sidebar_position: 7
tags: [Vue.js,JavaScript,Vue.js Introduction,Routing,Framework,Vue.Js Concepts]
description:  Vue.Js Routing.
---

## Routing

Routing in Vue.js refers to the mechanism of navigating between different pages or views in a single-page application (SPA) without a full page reload. Vue Router is the official routing library for Vue.js, providing a seamless way to manage application state and handle navigation.

### Setting Up Vue Router:

To use Vue Router in your Vue.js application, you typically follow these steps:

1. **Install Vue Router**:
   You can install Vue Router via npm or yarn:

   ```bash
   npm install vue-router
   ```

   or

   ```bash
   yarn add vue-router
   ```

2. **Configure Vue Router**:
   Once installed, you need to configure Vue Router in your main application file (`main.js` or `main.ts`):

   ```javascript
   import Vue from 'vue';
   import VueRouter from 'vue-router';
   import Home from './components/Home.vue';
   import About from './components/About.vue';

   Vue.use(VueRouter);

   const routes = [
     { path: '/', component: Home },
     { path: '/about', component: About }
   ];

   const router = new VueRouter({
     routes // short for `routes: routes`
   });

   new Vue({
     router,
     render: h => h(App)
   }).$mount('#app');
   ```

   - **Vue.use(VueRouter)**: This line installs Vue Router into Vue.
   - **routes**: An array of route configurations, where each route maps a URL path to a Vue component.
   - **VueRouter instance**: Created with the configured routes and then passed to the Vue instance.

3. **Router View and Links**:
   In your Vue components, you use `<router-view>` to display the component corresponding to the current route, and `<router-link>` for navigation links:

   ```html
   <!-- App.vue -->
   <template>
     <div id="app">
       <router-link to="/">Home</router-link>
       <router-link to="/about">About</router-link>

       <router-view></router-view>
     </div>
   </template>
   ```

   - **`<router-link>`**: Renders an anchor tag (`<a>`) that triggers navigation to a specified route.

4. **Route Matching and Navigation**:
   - **Dynamic Routes**: You can define dynamic segments in routes using `:paramName` syntax.
   - **Programmatic Navigation**: Use `this.$router.push()` to navigate imperatively in JavaScript code.

### Route Configuration:

Routes in Vue Router can have additional configurations beyond basic path and component mappings:

- **Nested Routes**: Define child routes under a parent route using the `children` option.
- **Named Routes**: Assign names to routes for easier navigation and programmatic linking.
- **Route Guards**: Implement navigation guards (`beforeEach`, `beforeResolve`, `afterEach`) to control access to routes or perform actions before and after navigation.

### Navigation Guards:

Vue Router provides navigation guards that allow you to control access to routes or execute code before and after navigation events. For example:

```javascript
router.beforeEach((to, from, next) => {
  // Check if user is authenticated or other conditions
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Redirect to login if not authenticated
    if (!auth.isAuthenticated()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // Continue navigation
  }
});
```

### Summary:

Vue Router is a powerful tool for managing navigation and state in Vue.js SPAs. It allows you to define routes, navigate between views, pass parameters dynamically, and implement navigation guards for more control over your application's flow. Understanding Vue Router is essential for building robust single-page applications with Vue.js.