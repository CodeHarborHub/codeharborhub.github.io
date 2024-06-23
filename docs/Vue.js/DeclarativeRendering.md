---
id: Vue.js Declarative Rendering
title: Declarative Rendering in Vue.Js
sidebar_label: Declarative Rendering in Vue.Js
sidebar_position: 2
tags: [Vue.js,JavaScript,Vue.js Introduction,Declarative Rendering,Framework,Vue.Js Concepts]
description:  Vue.Js Declarative Rendering.
---

# Declarative Rendering
Declarative rendering is a core concept in Vue.js that simplifies how you specify what you want to display in your web application's user interface (UI). Instead of manually manipulating the DOM (Document Object Model) to update the UI based on changes in data, Vue.js allows you to declare what should be rendered based on the current state of your data.

### Example 1: Basic Data Binding

Consider a simple Vue.js component that displays a user's name:

```html
<div id="app">
  <p>{{ message }}</p>
</div>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello, Vue.js!'
    }
  });
</script>
```

In this example:
- The `{{ message }}` syntax in the `<p>` tag is a template syntax in Vue.js.
- Vue.js automatically binds the `message` data property to the text content of the `<p>` tag.
- When `message` changes (for example, through user interaction or data updates), Vue.js will automatically update the DOM to reflect the new value.

This approach is declarative because you declare what content should be displayed (`{{ message }}`), and Vue.js handles updating the DOM for you based on changes in the `message` data property.

### Example 2: Conditional Rendering

You can also use declarative rendering to conditionally display elements based on the state of your data:

```html
<div id="app">
  <p v-if="seen">Now you see me</p>
</div>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      seen: true
    }
  });
</script>
```

Here:
- The `v-if` directive in Vue.js conditionally renders the `<p>` element based on the `seen` data property.
- When `seen` is `true`, Vue.js will include the `<p>` element in the DOM. If `seen` changes to `false`, Vue.js will remove the element from the DOM.

This declarative approach makes it easier to manage UI state and logic in your Vue.js components. Instead of manually adding or removing elements from the DOM based on conditions, you declare the conditions directly in your template with directives like `v-if`, `v-show`, or `v-for`, and Vue.js takes care of the rest.

In summary, declarative rendering in Vue.js simplifies UI development by allowing you to focus on describing the desired UI state based on your data, rather than writing imperative DOM manipulation code. This approach enhances code readability, maintainability, and reduces the likelihood of bugs related to UI updates.