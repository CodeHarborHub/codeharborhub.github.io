---
id: lesson-3
title: "Embedding Images and Image Attributess"
sidebar_label: Embedding Images Attributes
sidebar_position: 3
description: "Learn to Embedding Images and Image Attributes"
tags: [courses,beginner-level,Embedding Images,Introduction]
---
   

Images enhance the visual appeal of a web page. The `<img>` tag is used to embed images in HTML. The `src` attribute specifies the path to the image file.

**Basic Image Example:**
```html
<img src="image.jpg" alt="Description of the image">
```
In this example, `src="image.jpg"` points to the image file, and `alt="Description of the image"` provides alternative text for the image.

**Important Image Attributes:**
- `src`: The path to the image file.
- `alt`: Alternative text for the image, important for accessibility and SEO.
- `width` and `height`: Specifies the size of the image in pixels.
- `title`: Provides additional information about the image, often displayed as a tooltip.

**Example with Attributes:**
```html
<img src="logo.png" alt="Company Logo" width="200" height="100" title="Company Logo">
```
Here, the image is resized to 200 pixels wide and 100 pixels high, and a tooltip with the text "Company Logo" appears when the user hovers over the image.

**Image Path Types:**
- **Absolute Path**: Specifies the full URL of the image file.
  ```html
  <img src="https://www.example.com/images/logo.png" alt="Logo">
  ```
- **Relative Path**: Specifies the image file relative to the current page.
  ```html
  <img src="images/logo.png" alt="Logo">
  ```

**Using Images as Links:**
Images can also be used as clickable links by wrapping the `<img>` tag with an `<a>` tag.

**Example:**
```html
<a href="https://www.example.com">
  <img src="logo.png" alt="Company Logo">
</a>
```
In this example, clicking the image will navigate the user to `https://www.example.com`.

By mastering these techniques for creating hyperlinks and embedding images, you can enhance the interactivity and visual appeal of your web pages, providing a better user experience.