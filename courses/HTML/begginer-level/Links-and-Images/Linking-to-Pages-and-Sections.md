---
id: lesson-2
title: "Linking to Different Pages and Sections"
sidebar_label: Linking to Pages and Sections
sidebar_position: 2
description: "Learn Linking to Different Pages and Sections"
tags: [courses,beginner-level,Linking Pages,Linking Sections,Introduction]
---
### 

**Linking to Different Pages:**
You can link to other pages on the same website by using relative URLs.

**Example:**
```html
<a href="about.html">About Us</a>
<a href="/contact">Contact Us</a>
```
In this example, `about.html` is a relative URL that points to the "About Us" page within the same directory, and `/contact` is an absolute path starting from the root directory.

**Linking to Sections within the Same Page:**
You can link to a specific section within the same page by using the `id` attribute to create anchor points.

**Example:**
```html
<!-- Create the anchor point -->
<h2 id="section1">Section 1</h2>
<p>Content for section 1...</p>

<!-- Create the link to the anchor point -->
<a href="#section1">Go to Section 1</a>
```
In this example, clicking the link "Go to Section 1" scrolls the page to the section with the `id="section1"`.
