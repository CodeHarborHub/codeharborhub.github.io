# Typography

Typography in CSS is an essential aspect of web design, as it greatly influences the readability, aesthetics, and overall user experience of a website. Here are the key concepts and properties related to typography in CSS:

**1. Font Family**

The `font-family` property specifies the typeface for the text. It can include a specific font name and one or more generic font families.

```css
body {
    font-family: 'Arial', sans-serif;
}
```

**2. Font Size**

The font-size property controls the size of the text. It can be set in various units like pixels (`px`), em units (`em`), rem units (`rem`), percentages (`%`), and more.

```css
p {
    font-size: 16px;
}

h1 {
    font-size: 2em; /* 2 times the current font size */
}
```
You can check the relation between units

| Unit | Description | 
| :--------: | :--------: | 
| `em`   | Calculated relative to the current font size. For example, 2em indicates 2 times larger size than current element's font size. | 
| `px`  | `px` stands for "pixels." It's a unit of measurement commonly used in digital design and web development to define the size of elements on a screen.   | 
| `%` |  Percentage (`%`) is a relative unit of measurement that expresses a value as a fraction of the parent element's size or the viewport's dimensions.For example, 50% of the width of the container. |
| `rem` | Relative to font size of the root-element. |
| `vw` | Viewport width (`vw`) is a relative unit of measurement that expresses a value as a fraction of the width of the browser viewport. `1vw` is equal to 1% of the width of the viewport. |
| `vh` | Viewport height (`vh`) is a relative unit of measurement that expresses a value as a fraction of the height of the browser viewport. `1vh` is equal to 1% of the height of the viewport. |


**3. Font Weight**

The `font-weight` property defines the thickness of the characters. Common values include `normal`, `bold`, `bolder`, `lighter`, or numerical values ranging from 100 to 900.

```css
strong {
    font-weight: bold;
}

p.light {
    font-weight: 300;
}
```

**4. Font Style**

The `font-style` property allows you to italicize the text.

```css
em {
    font-style: italic;
}

p.oblique {
    font-style: oblique;
}
```

**5. Font Variant**

The `font-variant` property is used for small-caps and other typographic features.

```css
p {
    font-variant: small-caps;
}
```

**6. Text Transform**

The `text-transform` property changes the case of the text.

```css
h1 {
    text-transform: uppercase;
}

p {
    text-transform: capitalize;
}
```

**7. Text Alignment**

The `text-align` property sets the horizontal alignment of the text.

```css
div {
    text-align: center;
}

p {
    text-align: justify;
}
```

**8. Text Decoration**

The `text-decoration` property adds decorations to the text, such as underlines, overlines, and line-throughs.

```css
a {
    text-decoration: none; /* Removes underline from links */
}

del {
    text-decoration: line-through;
}
```

**9. Text Shadow**

The `text-shadow` property adds a shadow effect to the text.

```css
h1 {
    text-shadow: 2px 2px 5px gray;
}
```
