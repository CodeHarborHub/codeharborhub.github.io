---
id: lesson-1
title: "Creating Hyperlinks"
sidebar_label: Creating Hyperlinks
sidebar_position: 1
description: "Learn to Hyperlinks and basic example"
tags: [courses,beginner-level,Creating Hyperlinks,Introduction]
---
  

Hyperlinks are essential in HTML as they allow users to navigate between different web pages and sections of a document. The `<a>` (anchor) tag is used to create hyperlinks. The `href` attribute specifies the URL of the page the link goes to.

**Basic Hyperlink Example:**
```html
<a href="https://www.example.com">Visit Example.com</a>
```
In this example, the text "Visit Example.com" becomes a clickable link that directs the user to `https://www.example.com`.

**Link Attributes:**
- `href`: The URL the link points to.
- `target`: Specifies where to open the linked document (e.g., `_blank` to open in a new tab).
- `title`: Provides additional information about the link, usually displayed as a tooltip when the mouse hovers over the link.

**Example with Attributes:**
```html
<a href="https://www.example.com" target="_blank" title="Visit Example.com">Visit Example.com</a>
```
Here, the link opens in a new tab, and a tooltip appears when the user hovers over the link.

