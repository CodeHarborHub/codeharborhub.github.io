---
id: lesson-2
title: "Custom Elements"
sidebar_label: Custom Elements
sidebar_position: 2
description: "Learn to Custom Elements."
tags: [courses,advance-level,Custom Elements,Introduction]
---   
  

Custom Elements are a fundamental part of Web Components, allowing developers to define their own HTML tags and behaviors.

**Defining a Custom Element:**
1. **Create a Class:**
   - Define a JavaScript class that extends `HTMLElement`.
   ```javascript
   class MyElement extends HTMLElement {
     constructor() {
       super();
       this.attachShadow({ mode: 'open' });
       this.shadowRoot.innerHTML = `<p>Hello, World!</p>`;
     }
   }
   ```

2. **Register the Custom Element:**
   - Use `customElements.define` to register the element with a unique name (must include a hyphen).
   ```javascript
   customElements.define('my-element', MyElement);
   ```

3. **Using the Custom Element:**
   ```html
   <my-element></my-element>
   ```
