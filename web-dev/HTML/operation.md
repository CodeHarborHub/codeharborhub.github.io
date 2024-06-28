---
id: operations-html
title: HTML Operations
sidebar_label: HTML Operations
sidebar_position: 3
tags: [html, operations]
---

HTML operations involve the creation, structuring, and manipulation of web content using HTML elements. Here are some key operations you can perform with HTML:
HTML operations involve the creation, structuring, and manipulation of web content using HTML elements. Here are some key operations you can perform with HTML:

## 1. **Structuring Content**:
   HTML provides a variety of tags to structure content logically and semantically.

### Headings
   `<h1>` to `<h6>` for different levels of headings.
   ```html
   <h1>This is a heading</h1>
   ```
### Paragraphs
   `<p>` for paragraphs.
   ```html
   <p>This is a paragraph element.</p>
   ```
### Divisions
   `<div>` for block-level elements.
    
```html
<div>
    <h1>This is a heading</h1>
    <p>This is a paragraph element.</p>
</div>
```

### Spans
     The `<span>` element in HTML is an inline container used to group text or other inline elements. Unlike block-level elements (such as `<div>`), `<span>` does not inherently apply any style or layout to its contents. Instead, it is primarily used for applying styles or manipulating specific parts of the content with CSS or JavaScript.

**When to Use `<span>`**

- To apply styles to a part of the text within a larger block of text.
- To target specific text with JavaScript.
- To wrap text or inline elements for CSS styling without affecting the layout.

     
**Example**

1.**Styling Text:**

   ```html
       <p>This is a <span style="color: red;">red</span> word in a paragraph.</p>
   ```

2.**Applying Classes and IDs:**

   ```html
   <p>Here is some <span class="highlight">highlighted</span> text.</p>

   <style>
       .highlight {
           background-color: yellow;
       }
   </style>
   ```

3. **JavaScript Manipulation:**
```html
<p id="text">This is a <span id="word">word</span> in a paragraph.</p>
<button onclick="changeText()">Change Text</button>

<script>
    function changeText() {
        document.getElementById("word").innerText = "changed word";
    }
</script>
```

**Benefits of Using `<span>`**
- **Flexibility**: Allows for styling and manipulation of inline content without disrupting the flow of the text.
- **Target Specific Content**: Helps in applying styles or JavaScript functions to specific parts of the text.
- **Minimal Impact on Layout**: Being an inline element, it does not introduce additional spacing or layout changes.

**Differences from `<div>`**
- `<div>` is a block-level element, meaning it takes up the full width available and starts on a new line.
- `<span>` is an inline element, meaning it takes up only as much width as necessary and does not start on a new line.

By using the `<span>` element effectively, you can enhance the presentation and interactivity of your web content.

### Lists
`<ul>` for unordered lists, `<ol>` for ordered lists, and `<li>` for list items.
   ```html
   <ul>
        <li>Unordered list item 1</li>
        <li>Unordered list item 2</li>
    </ul>

    <ol>
        <li>Ordered list item 1</li>
        <li>Ordered list item 2</li>
    </ol>
   ```
**Nested Lists**
You can also create nested lists by placing one list inside a list item of another list.
```html
<ul>
    <li>Item 1
        <ul>
            <li>Subitem 1.1</li>
            <li>Subitem 1.2</li>
         </ul>
    </li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<ol>
    <li>First item
        <ol>
            <li>Subitem 1.1</li>
            <li>Subitem 1.2</li>
        </ol>
    </li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```
## 2. **Embedding Media**:
   Incorporate images, videos, and audio files into your webpage.

### Images: 
   In HTML, the `<img>` element is used to embed images into web pages. This element is an empty element (meaning it does not have a closing tag) and requires specific attributes to function correctly.

#### Basic Syntax
The basic syntax of the `<img>` tag is as follows:

```html 
<img src="image.jpg" alt="Description of image">
```

#### Attributes
- **`src` (source)**: Specifies the path to the image file. This can be a relative path, an absolute path, or a URL.
- **`alt` (alternative text)**: Provides descriptive text for the image if it cannot be displayed. This is important for accessibility and SEO.

**Example** 
```html
<img src="https://www.example.com/image.jpg" alt="Description of the image">
```

#### Additional Attributes
- **`width` and `height`**: Specify the dimensions of the image in pixels.

  ```html
  <img src="image.jpg" alt="Description" width="300" height="200">
  ```

- **`title`**: Provides additional information about the image, typically displayed as a tooltip when the user hovers over the image.

  ```html
  <img src="image.jpg" alt="Description" title="Tooltip text">
  ```

- **`loading`**: Specifies the loading behavior of the image. Values can be `lazy` (defer loading until the image is near the viewport) or `eager` (load immediately).

  ```html
  <img src="image.jpg" alt="Description" loading="lazy">
  ```

#### Responsive Images
To create responsive images that adjust to different screen sizes, use the `srcset` and `sizes` attributes.

- **`srcset`**: Defines a list of different images for different screen resolutions or sizes.
- **`sizes`**: Defines the size of the image in different viewport conditions.

```html
<img src="small.jpg" 
     srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w" 
     sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 1500px" 
     alt="Description">
```

**Example**
```html
<img src="small.jpg" 
     srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w" 
     sizes="(max-width: 600px) 500px, 
            (max-width: 1200px) 1000px, 
            1500px" 
     alt="Beautiful landscape">
```

- The browser will use `small.jpg` for devices with a screen width up to 500 pixels.
- `medium.jpg` will be used for screen widths up to 1000 pixels.
- `large.jpg` will be used for larger screens.

#### Decorative Images
For purely decorative images that do not convey important content, use the `role="presentation"` attribute to indicate that the image should be ignored by screen readers.

```html
<img src="decorative.jpg" alt="" role="presentation">
```

#### Best Practices
- Always provide an `alt` attribute for accessibility.
- Use descriptive `alt` text for images that convey important information.
- Use `width` and `height` attributes to reserve space for the image and prevent layout shifts.
- Optimize image file sizes to improve page load times.

By understanding and utilizing the `<img>` element and its attributes, you can effectively incorporate images into your web pages, enhancing visual appeal and user experience.