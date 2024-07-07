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
```

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

# CSS Padding

Padding is used to create space around an element's content, inside of any defined borders. The CSS padding properties are used to generate space around an element's content, inside of any defined borders.

With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).

## Padding - Individual Sides

CSS has properties for specifying the padding for each side of an element:

- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`

All the padding properties can have the following values:

- `length` - specifies a padding in px, pt, cm, etc.
- `%` - specifies a padding in % of the width of the containing element
- `inherit` - specifies that the padding should be inherited from the parent element

Note: Negative values are not allowed.

### Example

Set different padding for all four sides of a `<div>` element:

```css
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<div style={{paddingTop: "50px", paddingRight: "30px", paddingBottom: "50px", paddingLeft: "80px", border: "1px solid blue"}}>
  This div has different padding for all four sides.
</div>
</BrowserWindow>
## Padding - Shorthand Property

To shorten the code, it is possible to specify all the padding properties in one property.

The `padding` property is a shorthand property for the following individual padding properties:

- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`

### If the padding property has four values:

```css
padding: 25px 50px 75px 100px;
```

- `top` padding is 25px
- `right` padding is 50px
- `bottom` padding is 75px
- `left` padding is 100px

### Example

Use the padding shorthand property with four values:

```css
div {
  padding: 25px 50px 75px 100px;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<div style={{padding: "25px 50px 75px 100px", border: "1px solid green"}}>
  This div uses the padding shorthand with four values.
</div>
</BrowserWindow>
### If the padding property has three values:

```css
padding: 25px 50px 75px;
```

- `top` padding is 25px
- `right` and `left` paddings are 50px
- `bottom` padding is 75px

### Example

Use the padding shorthand property with three values:

```css
div {
  padding: 25px 50px 75px;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<div style={{padding: "25px 50px 75px", border: "1px solid red"}}>
  This div uses the padding shorthand with three values.
</div>
</BrowserWindow>
### If the padding property has two values:

```css
padding: 25px 50px;
```

- `top` and `bottom` paddings are 25px
- `right` and `left` paddings are 50px

### Example

Use the padding shorthand property with two values:

```css
div {
  padding: 25px 50px;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<div style={{padding: "25px 50px", border: "1px solid purple"}}>
  This div uses the padding shorthand with two values.
</div>
</BrowserWindow>
### If the padding property has one value:

```css
padding: 25px;
```

- all four paddings are 25px

### Example

Use the padding shorthand property with one value:

```css
div {
  padding: 25px;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<div style={{padding: "25px", border: "1px solid orange"}}>
  This div uses the padding shorthand with one value.
</div>
</BrowserWindow>
## Padding and Element Width

The CSS `width` property specifies the width of the element's content area. The content area is the portion inside the padding, border, and margin of an element (the box model).

So, if an element has a specified width, the padding added to that element will be added to the total width of the element. This is often an undesirable result.

### Example

Here, the `<div>` element is given a width of 300px. However, the actual width of the `<div>` element will be 350px (300px + 25px of left padding + 25px of right padding):

```css
div {
  width: 300px;
  padding: 25px;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<div style={{width: "300px", padding: "25px", border: "1px solid brown"}}>
  This div's total width is 350px due to padding.
</div>
</BrowserWindow>
To keep the width at 300px, no matter the amount of padding, you can use the `box-sizing` property. This causes the element to maintain its actual width; if you increase the padding, the available content space will decrease.

### Example

Use the `box-sizing` property to keep the width at 300px, no matter the amount of padding:

```css
div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}
```

# CSS Outlines

An outline is a line drawn outside the element's border.
An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element "stand out".

CSS has the following outline properties:

- `outline-style`
- `outline-color`
- `outline-width`
- `outline-offset`
- `outline`

Note: Outline differs from borders! Unlike border, the outline is drawn outside the element's border, and may overlap other content. Also, the outline is NOT a part of the element's dimensions; the element's total width and height are not affected by the width of the outline.

## CSS Outline Style

The `outline-style` property specifies the style of the outline, and can have one of the following values:

- `dotted` - Defines a dotted outline
- `dashed` - Defines a dashed outline
- `solid` - Defines a solid outline
- `double` - Defines a double outline
- `groove` - Defines a 3D grooved outline
- `ridge` - Defines a 3D ridged outline
- `inset` - Defines a 3D inset outline
- `outset` - Defines a 3D outset outline
- `none` - Defines no outline
- `hidden` - Defines a hidden outline

The following example shows the different outline-style values:

```css
p.dotted {outline-style: dotted;}
p.dashed {outline-style: dashed;}
p.solid {outline-style: solid;}
p.double {outline-style: double;}
p.groove {outline-style: groove;}
p.ridge {outline-style: ridge;}
p.inset {outline-style: inset;}
p.outset {outline-style: outset;}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p class="dotted" style={{outlineStyle: 'dotted'}}>A dotted outline.</p>
<p class="dashed" style={{outlineStyle: 'dashed'}}>A dashed outline.</p>
<p class="solid" style={{outlineStyle: 'solid'}}>A solid outline.</p>
<p class="double" style={{outlineStyle: 'double'}}>A double outline.</p>
<p class="groove" style={{outlineStyle: 'groove'}}>A groove outline. The effect depends on the outline-color value.</p>
<p class="ridge" style={{outlineStyle: 'ridge'}}>A ridge outline. The effect depends on the outline-color value.</p>
<p class="inset" style={{outlineStyle: 'inset'}}>An inset outline. The effect depends on the outline-color value.</p>
<p class="outset" style={{outlineStyle: 'outset'}}>An outset outline. The effect depends on the outline-color value.</p>
</BrowserWindow>
## CSS Outline Width

The `outline-width` property specifies the width of the outline, and can have one of the following values:

- `thin` (typically 1px)
- `medium` (typically 3px)
- `thick` (typically 5px)
- A specific size (in px, pt, cm, em, etc)

The following example shows some outlines with different widths:

```css
p.ex1 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
  outline-width: thin;
}

p.ex2 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
  outline-width: medium;
}

p.ex3 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
  outline-width: thick;
}

p.ex4 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
  outline-width: 4px;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p class="ex1" style={{border: '1px solid black', outlineStyle: 'solid', outlineColor: 'red', outlineWidth: 'thin'}}>A thin outline.</p>
<p class="ex2" style={{border: '1px solid black', outlineStyle: 'solid', outlineColor: 'red', outlineWidth: 'medium'}}>A medium outline.</p>
<p class="ex3" style={{border: '1px solid black', outlineStyle: 'solid', outlineColor: 'red', outlineWidth: 'thick'}}>A thick outline.</p>
<p class="ex4" style={{border: '1px solid black', outlineStyle: 'solid', outlineColor: 'red', outlineWidth: '4px'}}>A 4px thick outline.</p>
</BrowserWindow>
## CSS Outline Color

The `outline-color` property is used to set the color of the outline.

The color can be set by:

- Name - specify a color name, like "red"
- HEX - specify a hex value, like "#ff0000"
- RGB - specify an RGB value, like "rgb(255,0,0)"
- HSL - specify an HSL value, like "hsl(0, 100%, 50%)"
- invert - performs a color inversion (which ensures that the outline is visible, regardless of color background)

The following example shows some different outlines with different colors. Also notice that these elements also have a thin black border inside the outline:

```css
p.ex1 {
  border: 2px solid black;
  outline-style: solid;
  outline-color: red;
}

p.ex2 {
  border: 2px solid black;
  outline-style: dotted;
  outline-color: blue;
}

p.ex3 {
  border: 2px solid black;
  outline-style: outset;
  outline-color: grey;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p class="ex1" style={{border: '2px solid black', outlineStyle: 'solid', outlineColor: 'red'}}>A solid red outline.</p>
<p class="ex2" style={{border: '2px solid black', outlineStyle: 'dotted', outlineColor: 'blue'}}>A dotted blue outline.</p>
<p class="ex3" style={{border: '2px solid black', outlineStyle: 'outset', outlineColor: 'grey'}}>An outset grey outline.</p>
</BrowserWindow>
## CSS Outline - Shorthand property

The `outline` property is a shorthand property for setting the following individual outline properties:

- `outline-width`
- `outline-style` (required)
- `outline-color`

The outline property is specified as one, two, or three values from the list above. The order of the values does not matter.

The following example shows some outlines specified with the shorthand outline property:

```css
p.ex1 {outline: dashed;}
p.ex2 {outline: dotted red;}
p.ex3 {outline: 5px solid yellow;}
p.ex4 {outline: thick ridge pink;}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p class="ex1" style={{outline: 'dashed'}}>A dashed outline.</p>
<p class="ex2" style={{outline: 'dotted red'}}>A dotted red outline.</p>
<p class="ex3" style={{outline: '5px solid yellow'}}>A 5px solid yellow outline.</p>
<p class="ex4" style={{outline: 'thick ridge pink'}}>A thick ridge pink outline.</p>
</BrowserWindow>



#### Output

<BrowserWindow url="http://127.0.0.1:5500/index.html">
<div style={{width: "300px", padding: "25px", boxSizing: "border-box", border: "1px solid black"}}>
  This div's total width remains 300px due to box-sizing.
</div>
</BrowserWindow>


