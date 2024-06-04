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