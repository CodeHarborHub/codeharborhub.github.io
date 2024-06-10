# Pseudo Classes 

Pseudo-classes are used to define the special states of an element. They are typically prefixed with a colon (`:`).


1. `:hover` : Applies when the user designates an element (with a pointing device), but does not activate it. Often used to change the appearance of a button when the mouse pointer is over it.

```css
button:hover {
    background-color: lightblue;
}
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
<button type="submit">Submit</button>
<style>{`
button:hover {
    background-color: lightblue;
}`}  
</style>
</BrowserWindow>


2. `:focus` : Applies when an element has received focus (e.g., when clicked on or tabbed to).

```css
input:focus {
    border-color: blue;
}
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
<input type="text" required>
<style>
  {`input:focus {
    border-color: blue;
}`}
</style>
</BrowserWindow>

3. `:nth-child(n)` : Matches elements based on their position in a group of siblings.

```css
li:nth-child(2) {
    color: green;
}
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
<ul>
      <li>Red</li>
      <li>Green</li>
      <li>BLue</li>
</ul>
<style>
  {`li:nth-child(2) {
    color: green;
}`}
</style>
</BrowserWindow>


4. `:first-child` : Applies to the first child of its parent.

```css
.container div:first-child {
  color: blue;
  font-weight: bold;
}
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
<div class="container">
      <div>Hello</div>
      <div>World</div>
    </div>
  <style>
    {`.container div:first-child {
  color: blue;
  font-weight: bold;
}`}
  </style>
</BrowserWindow>

5. `:nth-of-type(n)` : Matches elements based on their position among siblings of the same type.

```css
div:nth-of-type(3)
{
  color: red;
}
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
<div>Hello</div>
      <div>World</div>
      <div>!</div>
<style>
  {`div:nth-of-type(3)
{
  color: red;
}`}
</style>
</BrowserWindow>

# Pseudo Elements

1. `::before` : Inserts content before an element's actual content.

```css
p::before {
    content: "Note: ";
    font-weight: bold;
}
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
 <p>Drink More Water</p>
 <style>
   {`
   p::before {
    content: "Note: ";
    font-weight: bold;
}'}
 </style>
</BrowserWindow>

2. `::after` : Inserts content after an element's actual content.

```css
p::after {
    content: " - Read more";
    font-style: italic;
}
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p>Drink More Water</p>
<style>{`
  p::after {
    content: " - Read more";
    font-style: italic;
}
`}
</style>
</BrowserWindow>

3. `::first-line` : Applies styles to the first line of a block-level element.

```css
p::first-line {
    color: red;
    font-weight: bold;
}
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
<p>You are Amazing!</p>
<style>
  {`p::first-line {
    color: red;
    font-weight: bold;
}
`}
</style>
</BrowserWindow>

