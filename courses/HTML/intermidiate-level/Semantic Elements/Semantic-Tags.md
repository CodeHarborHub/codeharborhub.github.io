---
id: lesson-2
title: "Using Semantic Tags: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`"
sidebar_label: Semantic Tags
sidebar_position: 2
description: "Learn to Semantic Tags."
tags: [courses,beginner-level,Semantic Tags,Introduction]
---  


**`<header>`**: Represents a container for introductory content or navigational links. It typically contains headings, logos, and other introductory elements.

**Example:**
```html
<header>
  <h1>Website Title</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```
In this example, the `<header>` element contains a heading and a navigation menu, representing the top section of a webpage.

**`<nav>`**: Defines a set of navigational links. It is used for sections of a page intended for navigation.

**Example:**
```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```
In this example, the `<nav>` element contains an unordered list of links, representing a navigation menu.

**`<section>`**: Represents a standalone section of content, typically with its own heading. It is used to group related content together.

**Example:**
```html
<section>
  <h2>About Us</h2>
  <p>We are a company dedicated to providing the best services in the industry.</p>
</section>
```
In this example, the `<section>` element contains a heading and a paragraph, representing a distinct section of content on a webpage.

**`<article>`**: Represents an independent piece of content, such as a blog post, news article, or forum post. It is used for content that could be distributed or syndicated independently.

**Example:**
```html
<article>
  <h2>Latest News</h2>
  <p>Today we launched our new product line...</p>
</article>
```
In this example, the `<article>` element contains a heading and a paragraph, representing an independent article.

**`<footer>`**: Represents the footer of a document or section. It typically contains metadata, such as the author, copyright information, and links to related documents.

**Example:**
```html
<footer>
  <p>&copy; 2024 Your Company. All rights reserved.</p>
  <nav>
    <ul>
      <li><a href="#privacy">Privacy Policy</a></li>
      <li><a href="#terms">Terms of Service</a></li>
    </ul>
  </nav>
</footer>
```
In this example, the `<footer>` element contains a paragraph and a navigation menu, representing the bottom section of a webpage.

### Practical Example

Combining all the semantic elements to create a structured HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Semantic HTML Example</title>
</head>
<body>

<header>
  <h1>Website Title</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<section id="home">
  <h2>Welcome to Our Website</h2>
  <p>We offer a wide range of services to meet your needs.</p>
</section>

<section id="about">
  <h2>About Us</h2>
  <p>We are a company dedicated to providing the best services in the industry.</p>
</section>

<section id="services">
  <h2>Our Services</h2>
  <article>
    <h3>Service One</h3>
    <p>Description of Service One.</p>
  </article>
  <article>
    <h3>Service Two</h3>
    <p>Description of Service Two.</p>
  </article>
</section>

<footer>
  <p>&copy; 2024 Your Company. All rights reserved.</p>
  <nav>
    <ul>
      <li><a href="#privacy">Privacy Policy</a></li>
      <li><a href="#terms">Terms of Service</a></li>
    </ul>
  </nav>
</footer>

</body>
</html>
```

In this practical example, semantic elements are used to create a well-structured HTML document that is easy to read and understand. The use of `<header>`, `<nav>`, `<section>`, `<article>`, and `<footer>` elements improves the overall structure and accessibility of the webpage.