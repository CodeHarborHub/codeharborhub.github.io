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
<BrowserWindow>
  <div id="showing_results_window">
    <input type="text" placeholder="search" onChange={(e) => {
      let target_ele = document.getElementById("showing_results");
      let showing_results_window = document.getElementById("showing_results_window"); 
      if (target_ele) {
        showing_results_window.removeChild(target_ele);
      } 
      if(e.target.value?.length>0){
      let target = document.createElement("div");
      target.setAttribute("id", "showing_results"); 
      let data = [
        {"id": 1, "name": "Ajith Kumar"},
        {"id": 2, "name": "Brad Pitt"},
        {"id": 3, "name": "Chris Hemsworth"},
        {"id": 4, "name": "Denzel Washington"},
        {"id": 5, "name": "Emma Watson"},
        {"id": 6, "name": "Fahadh Faasil"},
        {"id": 7, "name": "George Clooney"},
        {"id": 8, "name": "Hugh Jackman"},
        {"id": 9, "name": "Idris Elba"},
        {"id": 10, "name": "Johnny Depp"},
        {"id": 11, "name": "Keanu Reeves"},
        {"id": 12, "name": "Leonardo DiCaprio"},
        {"id": 13, "name": "Morgan Freeman"},
        {"id": 14, "name": "Nicolas Cage"},
        {"id": 15, "name": "Orlando Bloom"},
        {"id": 16, "name": "Priyanka Chopra"},
        {"id": 17, "name": "Quentin Tarantino"},
        {"id": 18, "name": "Robert Downey Jr."},
        {"id": 19, "name": "Scarlett Johansson"},
        {"id": 20, "name": "Tom Hanks"},
        {"id": 21, "name": "Uma Thurman"},
        {"id": 22, "name": "Viggo Mortensen"},
        {"id": 23, "name": "Will Smith"},
        {"id": 24, "name": "Xavier Samuel"},
        {"id": 25, "name": "Yvonne Strahovski"},
        {"id": 26, "name": "Zendaya"}
      ];
      let values = [];
      data.forEach((item) => {
        if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
          values.push(item.name);
        }
      });
      if (values.length > 0) {
        values.forEach((item) => {
          let p = document.createElement("p");
          p.textContent = item;
          target.appendChild(p);
        });
        document.getElementById("no_results").style.display = "none";
      } else {
        document.getElementById("no_results").style.display = "block";
      }
      showing_results_window.appendChild(target);
      }
      else{
        document.getElementById("no_results").style.display = "block";
      }
    }} />
    <p id="no_results" style={{display:"none"}}>No Results Found</p>
  </div>
</BrowserWindow>


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