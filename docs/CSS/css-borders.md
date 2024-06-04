# CSS Borders

```css
div.all-borders {
  border: 1px solid black;
}
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
    <div class="all-borders" style={{border: "1px solid black", padding: "10px"}}>
  I have borders on all sides.
</div>
</BrowserWindow>
```css
div.bottom-border {
  border-bottom: 1px solid red;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<div class="bottom-border" style={{borderBottom: "1px solid red", padding: "10px"}}>
  I have a red bottom border.
</div>
</BrowserWindow>
```css
div.rounded-borders {
  border: 1px solid black;
  border-radius: 10px;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<div class="rounded-borders" style={{border: "1px solid black", borderRadius: "10px", padding: "10px"}}>
  I have rounded borders.
</div>
</BrowserWindow>
```css
div.left-border {
  border-left: 1px solid blue;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<div class="left-border" style={{borderLeft: "1px solid blue", padding: "10px"}}>
  I have a blue left border.
</div>
</BrowserWindow>
### CSS Border Style

```css
p.dotted { border-style: dotted; }
p.dashed { border-style: dashed; }
p.solid { border-style: solid; }
p.double { border-style: double; }
p.groove { border-style: groove; }
p.ridge { border-style: ridge; }
p.inset { border-style: inset; }
p.outset { border-style: outset; }
p.none { border-style: none; }
p.hidden { border-style: hidden; }
p.mix { border-style: dotted dashed solid double; }
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p class="dotted" style={{borderStyle: "dotted"}}>A dotted border.</p>
<p class="dashed" style={{borderStyle: "dashed"}}>A dashed border.</p>
<p class="solid" style={{borderStyle: "solid"}}>A solid border.</p>
<p class="double" style={{borderStyle: "double"}}>A double border.</p>
<p class="groove" style={{borderStyle: "groove"}}>A groove border. The effect depends on the border-color value.</p>
<p class="ridge" style={{borderStyle: "ridge"}}>A ridge border. The effect depends on the border-color value.</p>
<p class="inset" style={{borderStyle: "inset"}}>An inset border. The effect depends on the border-color value.</p>
<p class="outset" style={{borderStyle: "outset"}}>An outset border. The effect depends on the border-color value.</p>
<p class="none" style={{borderStyle: "none"}}>No border.</p>
<p class="hidden" style={{borderStyle: "hidden"}}>A hidden border.</p>
<p class="mix" style={{borderStyle: "dotted dashed solid double"}}>A mixed border.</p>
</BrowserWindow>
### CSS Border Width

```css
p.one {
  border-style: solid;
  border-width: 5px;
}

p.two {
  border-style: solid;
  border-width: medium;
}

p.three {
  border-style: dotted;
  border-width: 2px;
}

p.four {
  border-style: dotted;
  border-width: thick;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p class="one" style={{borderStyle: "solid", borderWidth: "5px"}}>5px border-width</p>
<p class="two" style={{borderStyle: "solid", borderWidth: "medium"}}>Medium border-width</p>
<p class="three" style={{borderStyle: "dotted", borderWidth: "2px"}}>2px border-width</p>
<p class="four" style={{borderStyle: "dotted", borderWidth: "thick"}}>Thick border-width</p>
</BrowserWindow>
### CSS Border Color

```css
p.one {
  border-style: solid;
  border-color: red;
}

p.two {
  border-style: solid;
  border-color: green;
}

p.three {
  border-style: dotted;
  border-color: blue;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p class="one" style={{borderStyle: "solid", borderColor: "red"}}>Red border</p>
<p class="two" style={{borderStyle: "solid", borderColor: "green"}}>Green border</p>
<p class="three" style={{borderStyle: "dotted", borderColor: "blue"}}>Blue border</p>
</BrowserWindow>
### CSS Border - Individual Sides

```css
p {
  border-top-style: dotted;
  border-right-style: solid;
  border-bottom-style: dotted;
  border-left-style: solid;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p style={{borderTopStyle: "dotted", borderRightStyle: "solid", borderBottomStyle: "dotted", borderLeftStyle: "solid"}}>
  Different Border Styles
</p>
</BrowserWindow>
```css
p {
  border-style: dotted solid;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p style={{borderStyle: "dotted solid"}}>
  Different Border Styles
</p>
</BrowserWindow>
### CSS Border - Shorthand Property

```css
p {
  border: 5px solid red;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p style={{border: "5px solid red"}}>
  Some text
</p>
</BrowserWindow>
```css
p {
  border-left: 6px solid red;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p style={{borderLeft: "6px solid red"}}>
  Some text
</p>

```css
p {
  border-bottom: 6px solid red;
}
```
</BrowserWindow>
#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p style={{borderBottom: "6px solid red"}}>
  Some text
</p>
</BrowserWindow>
### CSS Rounded Borders

```css
p {
  border: 2px solidred;
  border-radius: 5px;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p style={{border: "2px solid red", borderRadius: "5px"}}>
  Normal border
</p>
</BrowserWindow>
```css
p {
  border: 2px solid red;
  border-radius: 15px;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p style={{border: "2px solid red", borderRadius: "15px"}}>
  Round border
</p>
</BrowserWindow>
```css
p {
  border: 2px solid red;
  border-radius: 25px;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p style={{border: "2px solid red", borderRadius: "25px"}}>
  Rounder border
</p>
</BrowserWindow>
```css
p {
  border: 2px solid red;
  border-radius: 50px;
}
```

#### Output
<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p style={{border: "2px solid red", borderRadius: "50px"}}>
  Roundest border
</p>
</BrowserWindow>