---
id: welcome-css
title: Welcome to the CSS
sidebar_label: Welcome To CSS
sidebar_position: 3
tags: [css]
---

## Topics Covered in CSS

### 1. Basic Syntax
Understanding the structure and syntax of CSS rules, including selectors, properties, and values.

### 2. Selectors
Different types of selectors to target HTML elements for styling, such as element selectors, class selectors, ID selectors, attribute selectors, pseudo-classes, and pseudo-elements.

### 3. Box Model
Understanding the box model, which describes how elements are structured in CSS, including content, padding, border, and margin.

### 4. Typography
Styling text elements with properties like font-family, font-size, font-weight, line-height, text-align, text-decoration, and text-transform.

### 5. Colors and Backgrounds
Applying colors to elements using properties like color, background-color, opacity, gradients, and background images.

### 6. Layout
Creating layouts and positioning elements using properties like display, position, float, flexbox, and grid.

### 7. Responsive Design
Designing web pages that adapt to different screen sizes and devices using techniques like media queries and responsive units (like percentages and ems).

### 8. Transitions and Animations
Adding dynamic effects to elements with properties like transition, animation, and keyframes.

### 9. Transforms
Modifying the appearance of elements in 2D or 3D space using properties like transform, translate, rotate, scale, and skew.

### 10. Pseudo-classes and Pseudo-elements
Understanding and using pseudo-classes (:hover, :focus, :active) and pseudo-elements (::before, ::after) to style elements based on their state or create decorative elements.

### 11. Selectors Specificity and Inheritance
Understanding how CSS specificity affects which styles are applied to elements and how inheritance works in CSS.

### 12. Units
Understanding different units of measurement in CSS, including pixels, percentages, ems, rems, viewport units, and others.



## 13. CSS Grid and Flexbox
Comprehensive knowledge of CSS Grid and Flexbox layout models for creating complex and responsive layouts.


## Basic Syntax

CSS (Cascading Style Sheets) follows a simple syntax for styling HTML elements. Each CSS rule consists of a selector, followed by a set of declarations enclosed in curly braces.

Example CSS rule:

```css
selector {
    property: value;
}


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

