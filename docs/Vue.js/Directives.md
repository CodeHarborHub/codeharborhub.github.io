---
id: vue.js-Directives
title: Directives in Vue.Js
sidebar_label: Directives in Vue.Js
sidebar_position: 5
tags: [Vue.js,JavaScript,Vue.js Introduction,Directives,Framework,Vue.Js Concepts]
description:  Vue.Js Directives.
---

## Directives

Directives in Vue.js are special attributes prefixed with `v-`, which are used to add dynamic behavior to HTML elements or components. They are fundamental building blocks of Vue.js applications and provide declarative syntax to manipulate the DOM, handle events, conditionally render elements, and more.

### Commonly Used Vue.js Directives:

1. **`v-bind` (Shorthand: `:`)**:
   - Used to bind one or more attributes or props to an element.
   - Example:

     ```html
     <div v-bind:class="{ active: isActive }"></div>
     ```

     This binds the `class` attribute of the `<div>` dynamically based on the `isActive` data property.

2. **`v-if`, `v-else-if`, `v-else`**:
   - Conditional rendering directive. The element will only render if the expression evaluates to true.
   - Example:

     ```html
     <p v-if="loggedIn">Welcome, {{ username }}</p>
     <p v-else>Please log in to continue.</p>
     ```

3. **`v-for`**:
   - Used for rendering a list of items based on an array.
   - Example:

     ```html
     <ul>
       <li v-for="item in items" :key="item.id">{{ item.name }}</li>
     </ul>
     ```

     This renders an `<li>` element for each item in the `items` array.

4. **`v-on` (Shorthand: `@`)**:
   - Used to listen to DOM events and execute JavaScript when they occur.
   - Example:

     ```html
     <button v-on:click="incrementCounter">Increment</button>
     ```

     This executes the `incrementCounter` method in Vue instance when the button is clicked.

5. **`v-model`**:
   - Creates two-way data bindings on form input elements or components.
   - Example:

     ```html
     <input v-model="message" type="text">
     ```

     This binds the `message` data property to the value of the `<input>` element, allowing changes in the input field to automatically update `message` and vice versa.

6. **`v-show`**:
   - Similar to `v-if`, but toggles the display of the element with CSS `display` property (visibility toggle) instead of removing it from the DOM.
   - Example:

     ```html
     <p v-show="isVisible">This paragraph will be shown or hidden based on the isVisible data property.</p>
     ```

### Custom Directives:

In addition to the built-in directives, Vue.js also allows you to create custom directives when you need to encapsulate some low-level DOM manipulation or behavior. Custom directives are registered using `Vue.directive()` global method or locally in components.

### Directive Modifiers:

Directives can also have modifiers that provide additional functionality or behavior to the directive. For example:

- `.prevent`: Prevents the default behavior of an event.
- `.stop`: Stops event propagation.
- `.capture`: Adds an event listener in capture mode.
- `.once`: Trigger the event listener at most once.

### Summary:

Vue.js directives provide a powerful way to add dynamic behavior to your HTML templates. They simplify the interaction between the DOM and Vue instance data, making it easier to build interactive and reactive applications. Understanding and utilizing directives effectively is key to mastering Vue.js development.