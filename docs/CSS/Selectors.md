# CSS Selectors

CSS selectors are patterns used to select and style HTML elements. Selectors target specific elements based on their type, class, ID, attributes, or position in the document. Here are some common types of CSS selectors:

## 1. Element Selector

Selects HTML elements based on their element type.

Example:
```css
p {
    color: blue;
}
```
This will select all `<p>` elements and make their text blue.
## 2. Class Selector

Selects elements with a specific class attribute.

Example:
```css
.my-class {
    font-weight: bold;
}
```
This will select all elements with `class="my-class"` and make their text bold.
## 3. ID Selector

Selects a single element with a specific ID attribute.

Example:
```css
#my-id {
    background-color: yellow;
}
```
This will select the element with `id="my-id"` and give it a yellow background.

## 4. Attribute Selector

Selects elements based on their attribute values.

Example:

```css
input[type="text"] {
    border: 1px solid #ccc;
}
```
This will select all `<input>` elements with `type="text"` and give them a 1px solid border with color #ccc.

## 5. Pseudo-Classes 

Selects elements based on their state or position.

Example:
```css
a:hover {
    color: red;
}
```
This will select all `<a>` elements when hovered over and make their text red.

## 6. Pseudo-elements

Selects and styles a part of an element.
Example:

```css

p::first-line {
    font-weight: bold;
}
```
This will select and make the first line of all `<p>` elements bold.
