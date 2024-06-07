
# Box Model 

The box model is a foundational concept in CSS (Cascading Style Sheets) used to understand and control the layout of HTML elements on a web page. It defines how the different parts of an element (content, padding, border, and margin) are arranged and interact with each other.

You can view the box-model : 

![BoxModel](https://tse4.mm.bing.net/th?id=OIP.XbRDNkJ1LH70kC-Pq0EDwgHaFL&pid=Api&P=0&h=180)

It consists of: 
- Content 
- Padding
- Borders
- Margins

**Explanation**

1. Content :

 This is the innermost part of the box and contains the actual content of the element, such as text or images.
 The size of the content box can be controlled using properties like `width` and `height`.

 2. Padding:

Padding is the space between the content and the border.
It creates space inside the element, around the content.
The size of the padding can be adjusted using the `padding` property (e.g., `padding: 10px;`), or individual properties for each side (e.g., `padding-top`, `padding-right`, `padding-bottom`, `padding-left`).


3. Border:

The border wraps around the padding (if any) and content.
It is defined by the `border` property (e.g., `border: 1px solid black;`), or individual properties for each side (e.g., `border-top`, `border-right`, `border-bottom`, `border-left`).

4. Margin:

Margin is the outermost part of the box and creates space outside the border, between the element and other elements.
It can be set using the `margin` property (e.g., `margin: 10px;`), or individual properties for each side (e.g., `margin-top`, `margin-right`, `margin-bottom`, `margin-left`).



#### Box-Sizing Property
The box-sizing property is used to alter the default CSS box model used to calculate widths and heights of elements.

content-box: This is the default value. The `width` and `height` properties apply only to the content of the element. Padding and border are added outside the `width` and `height`.

border-box: The `width` and `height` properties include the padding and border, but not the margin. This makes it easier to set the size of an element, since padding and border are included in the total size.

```css
.element {
  box-sizing: border-box;
  width: 200px;
  padding: 10px;
  border: 5px solid black;
}
```
In this example, the total width of `.element` would still be 200px because the padding and border are included within the specified width.
