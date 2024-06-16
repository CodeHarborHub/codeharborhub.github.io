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

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<div style={{width: "300px", padding: "25px", boxSizing: "border-box", border: "1px solid black"}}>
  This div's total width remains 300px due to box-sizing.
</div>
</BrowserWindow>