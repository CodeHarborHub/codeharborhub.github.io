---
id: vue.js-computed-properties-and-watchers
title: Computed Properties and Watchers in Vue.Js
sidebar_label: Computed Properties and Watchers in Vue.Js
sidebar_position: 6
tags: [Vue.js,JavaScript,Vue.js Introduction,Computed Properties and Watchers,Framework,Vue.Js Concepts]
description:  Vue.Js Computed Properties and Watchers.
--- 

Computed properties and watchers are advanced features in Vue.js that allow you to perform reactive computations and respond to changes in data. They are crucial for handling complex logic and maintaining the reactivity of your application.

### Computed Properties:

Computed properties are functions defined in Vue components that compute a value based on other data properties. They are cached based on their dependencies and only re-evaluate when one of those dependencies changes. Computed properties are especially useful when you need to derive one value from another or perform complex calculations.

#### Syntax and Usage:

```html
<template>
  <div>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
};
</script>
```

In this example:
- The `fullName` computed property concatenates `firstName` and `lastName`.
- It is accessed in the template as `{{ fullName }}`.
- Vue.js automatically handles updating `fullName` whenever `firstName` or `lastName` changes.

**Key Features of Computed Properties:**
- **Caching**: Computed properties are cached based on their reactive dependencies. They only recompute when necessary, optimizing performance.
- **Dependency Tracking**: Vue.js automatically tracks dependencies (like `this.firstName` and `this.lastName` in the example) and updates the computed property when these dependencies change.

### Watchers:

Watchers are functions that Vue.js provides to watch for changes in data properties and perform asynchronous or expensive operations in response. Unlike computed properties, watchers do not return a value but allow you to perform side effects, such as making Ajax requests or performing animations.

#### Syntax and Usage:

```html
<template>
  <div>
    <input type="text" v-model="searchQuery">
    <p v-if="searchResults.length">Results: {{ searchResults }}</p>
    <p v-else>No results found.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      searchResults: []
    };
  },
  watch: {
    searchQuery(newQuery, oldQuery) {
      // Perform search operation or API call
      this.fetchSearchResults(newQuery);
    }
  },
  methods: {
    fetchSearchResults(query) {
      // Simulated API call
      setTimeout(() => {
        this.searchResults = ['Result 1', 'Result 2']; // Update search results
      }, 500);
    }
  }
};
</script>
```

In this example:
- The `watch` option is used to define a watcher for `searchQuery`.
- When `searchQuery` changes, the `searchQuery` watcher function is triggered.
- Inside the watcher function, we call `fetchSearchResults(newQuery)` to update `searchResults` based on the new query.

**Key Features of Watchers:**
- **Imperative Logic**: Watchers allow you to perform asynchronous operations, such as API calls or data manipulation, in response to data changes.
- **Access to Previous Value**: Watchers provide access to both the new and old values of the watched property (`newQuery` and `oldQuery` in the example).

### When to Use Computed Properties vs Watchers:

- **Computed Properties**: Use computed properties when you need to derive a new value based on existing data properties or when you want to perform calculations that should be cached and reactive.
  
- **Watchers**: Use watchers when you need to perform more complex or asynchronous operations in response to changes in data properties. Watchers are also useful for responding to changes that cannot be expressed declaratively with computed properties.

By leveraging computed properties and watchers effectively, you can build more reactive and performant Vue.js applications that handle complex state management and dynamic behavior seamlessly.