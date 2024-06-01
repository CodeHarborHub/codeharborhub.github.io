# Cascading Style Sheets

## What is CSS
CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS defines how elements should be rendered on screen, on paper, in speech, or on other media.

## Core Concepts
1. Selectors:
Patterns used to select the elements to style.
Examples include element selectors (p), class selectors (.className), ID selectors (#idName), and attribute selectors ([attribute]).

2. Properties and Values:
Define the styles to apply to selected elements.
Each property has a set of values, e.g., color: red;, font-size: 16px;.

3. Cascade and Inheritance:
Determines which styles are applied when multiple rules match the same element.
Cascade: Refers to the order of precedence based on specificity, source order, and importance.
Inheritance: Certain properties can be inherited from parent elements to children, simplifying styling.

4. Box Model:
Describes the rectangular boxes generated for elements in the document tree.
Components: content, padding, border, and margin.

5. Layouts:
Techniques to arrange elements on the page, such as Flexbox and Grid Layout.
Provides powerful tools for creating complex and responsive designs.

## Usage Examples

1. Inline CSS:

Applied directly to an HTML element using the style attribute.
```html
<p style="color: blue; font-size: 14px;">Hello World</p>
```

2. Internal CSS:

Defined within a `<style>` tag in the HTML document's `<head>` .

```html
<head>
    <style>
        p {
            color: blue;
            font-size: 14px;
        }
    </style>
</head>
```

3. External CSS:

Linked via a separate .css file, using the `<link>`  tag.

```html
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
```

