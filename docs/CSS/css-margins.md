# CSS Margins

Margins are used to create space around elements, outside of any defined borders.

This element has a margin of 70px.

The CSS margin properties are used to create space around elements, outside of any defined borders.

With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).

## Margin - Individual Sides

CSS has properties for specifying the margin for each side of an element:

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

All the margin properties can have the following values:

- `auto` - the browser calculates the margin
- `length` - specifies a margin in px, pt, cm, etc.
- `%` - specifies a margin in % of the width of the containing element
- `inherit` - specifies that the margin should be inherited from the parent element

Tip: Negative values are allowed.

### Example

Set different margins for all four sides of a `<p>` element:

```css
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}
```

#### Output

<p style={{marginTop: "100px", marginBottom: "100px", marginRight: "150px", marginLeft: "80px", border: "1px solid blue"}}>
  This paragraph has different margins for all four sides.
</p>

## Margin - Shorthand Property

To shorten the code, it is possible to specify all the margin properties in one property.

The `margin` property is a shorthand property for the following individual margin properties:

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

### If the margin property has four values:

```css
margin: 25px 50px 75px 100px;
```

- `top` margin is 25px
- `right` margin is 50px
- `bottom` margin is 75px
- `left` margin is 100px

### Example

Use the margin shorthand property with four values:

```css
p {
  margin: 25px 50px 75px 100px;
}
```

#### Output

<p style={{margin: "25px 50px 75px 100px", border: "1px solid green"}}>
  This paragraph uses the margin shorthand with four values.
</p>

### If the margin property has three values:

```css
margin: 25px 50px 75px;
```

- `top` margin is 25px
- `right` and `left` margins are 50px
- `bottom` margin is 75px

### Example

Use the margin shorthand property with three values:

```css
p {
  margin: 25px 50px 75px;
}
```

#### Output

<p style={{margin: "25px 50px 75px", border: "1px solid red"}}>
  This paragraph uses the margin shorthand with three values.
</p>

### If the margin property has two values:

```css
margin: 25px 50px;
```

- `top` and `bottom` margins are 25px
- `right` and `left` margins are 50px

### Example

Use the margin shorthand property with two values:

```css
p {
  margin: 25px 50px;
}
```

#### Output

<p style={{margin: "25px 50px", border: "1px solid purple"}}>
  This paragraph uses the margin shorthand with two values.
</p>

### If the margin property has one value:

```css
margin: 25px;
```

- all four margins are 25px

### Example

Use the margin shorthand property with one value:

```css
p {
  margin: 25px;
}
```

#### Output

<p style={{margin: "25px", border: "1px solid orange"}}>
  This paragraph uses the margin shorthand with one value.
</p>

## The `auto` Value

You can set the `margin` property to `auto` to horizontally center the element within its container.

The element will then take up the specified width, and the remaining space will be split equally between the left and right margins.

### Example

Use `margin: auto`:

```css
div {
  width: 300px;
  margin: auto;
  border: 1px solid red;
}
```

#### Output

<div style={{width: "300px", margin: "auto", border: "1px solid red"}}>
  This div is centered horizontally with `margin: auto`.
</div>

## The `inherit` Value

This example lets the left margin of the `<p class="ex1">` element be inherited from the parent element (`<div>`):

### Example

Use of the `inherit` value:

```css
div {
  border: 1px solid red;
  margin-left: 100px;
}

p.ex1 {
  margin-left: inherit;
}
```

#### Output

<div style={{border: "1px solid red", marginLeft: "100px"}}>
  <p className="ex1" style={{marginLeft: "inherit", border: "1px solid blue"}}>
    This paragraph inherits its left margin from the parent div.
  </p>
</div>

## All CSS Margin Properties

| Property      | Description                                                       |
| ------------- | ----------------------------------------------------------------- |
| `margin`      | A shorthand property for setting all the margin properties in one declaration |
| `margin-bottom` | Sets the bottom margin of an element                             |
| `margin-left` | Sets the left margin of an element                                 |
| `margin-right` | Sets the right margin of an element                               |
| `margin-top`  | Sets the top margin of an element                                  |