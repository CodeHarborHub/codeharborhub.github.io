---
id: lesson-3
title: "Shadow DOM"
sidebar_label:  Shadow DOM
sidebar_position: 3
description: "Learn to Shadow DOM."
tags: [courses,advance-level,Shadow DOM,Introduction]
---   
   

Shadow DOM is a powerful feature of Web Components that allows developers to encapsulate styles and markup for custom elements, creating a separate DOM tree that is isolated from the main document.

**Key Features:**
- **Encapsulation:** Styles defined within the shadow DOM do not affect the global styles and vice versa.
- **Composition:** Shadow DOM enables the creation of complex components by composing multiple elements together.

**Creating a Shadow DOM:**
```javascript
class MyShadowElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        p { color: blue; }
      </style>
      <p>Hello from the Shadow DOM!</p>
    `;
  }
}

customElements.define('my-shadow-element', MyShadowElement);
```

**Using the Shadow DOM:**
```html
<my-shadow-element></my-shadow-element>
```
