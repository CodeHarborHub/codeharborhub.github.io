---
id: lesson-2
title: "Accessability ARIA"
sidebar_label: ARIA
sidebar_position: 2
description: "Learn to ARIA (Accessible Rich Internet Applications)."
tags: [courses,advance-level,HTML ARIA,Introduction]
---  
 

ARIA (Accessible Rich Internet Applications) is a set of attributes that can be added to HTML to improve accessibility, especially for dynamic content and complex user interface controls.

**Common ARIA Roles and Properties:**

1. **Roles:**
   - `role="button"`: Indicates a clickable button.
   - `role="navigation"`: Defines a navigation section of the page.
   - `role="alert"`: Marks important information that requires user attention.

2. **Properties:**
   - `aria-label`: Provides a label for an element that may not have visible text.
   - `aria-hidden="true"`: Hides an element from screen readers.
   - `aria-expanded`: Indicates whether a control is expanded or collapsed (useful for menus).

**Example Usage:**
```html
<button role="button" aria-label="Close" onclick="closeModal()">X</button>

<nav role="navigation" aria-label="Main navigation">
  <ul>
    <li><a href="#home" aria-current="page">Home</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>
```