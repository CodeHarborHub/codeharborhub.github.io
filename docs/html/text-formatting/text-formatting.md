---
id: text-formatting
title: Text Formatting in HTML
sidebar_label: Text Formatting
sidebar_position: 3
tags: [html, web-development, text-formatting, formatting]
description: In this tutorial, you will learn about text formatting in HTML. Text formatting is used to style text content on a web page, such as making text bold, italic, or underlined.
---

Welcome back to another exciting blog post, where today, we’re going to delve into the enchanting world of text formatting in HTML. If you've ever felt that your web content was lacking that extra bit of pizzazz, then this is the guide for you. We’ll explore what text formatting is, how to use it in your code, and when it’s appropriate to sprinkle some formatting magic on your text. So, put on your wizard hat, and let’s start casting some HTML spells!

## What is Text Formatting?

Text formatting in HTML involves using various tags to style and enhance the appearance of text on your web pages. These tags can make your text bold, italicized, underlined, or even change its color and size. Proper text formatting helps make your content more readable, engaging, and visually appealing.

### Common Text Formatting Tags

Here are some of the most commonly used HTML tags for text formatting:

1. `<b>` or `<strong>`: Bold text
2. `<i>` or `<em>`: Italic text
3. `<u>`: Underlined text
4. `<mark>`: Highlighted text
5. `<small>`: Smaller text
6. `<del>`: Strikethrough text
7. `<ins>`: Inserted (underlined) text
8. `<sub>`: Subscript text
9. `<sup>`: Superscript text

## How to Use Text Formatting in HTML

Using these tags in your HTML code is quite simple. Let’s go through some examples to see how each of these tags works and how they affect the text.

### Bold Text

To make your text bold, you can use either the `<b>` or `<strong>` tag. While both tags make the text bold, `<strong>` also adds semantic meaning, indicating that the text is of strong importance.

```html
<p>This is a <b>bold</b> text.</p>
<p>This is a <strong>strongly emphasized</strong> text.</p>
```

### Italic Text

For italic text, you can use either the `<i>` or `<em>` tag. Similar to bold tags, `<em>` adds semantic emphasis to the text.

```html
<p>This is an <i>italic</i> text.</p>
<p>This is an <em>emphasized</em> text.</p>
```

### Underlined Text

The `<u>` tag is used to underline text.

```html
<p>This is an <u>underlined</u> text.</p>
```

### Highlighted Text

To highlight text, use the `<mark>` tag.

```html
<p>This is a <mark>highlighted</mark> text.</p>
```

### Smaller Text

The `<small>` tag is used to display smaller text.

```html
<p>This is a <small>smaller</small> text.</p>
```

### Strikethrough Text

The `<del>` tag represents deleted or strikethrough text.

```html
<p>This is a <del>deleted</del> text.</p>
```

### Inserted Text

The `<ins>` tag represents inserted text and is typically underlined.

```html
<p>This is an <ins>inserted</ins> text.</p>
```

### Subscript and Superscript Text

To format subscript or superscript text, use the `<sub>` and `<sup>` tags respectively.

```html
<p>This is a <sub>subscript</sub> text.</p>
<p>This is a <sup>superscript</sup> text.</p>
```

## When to Use Text Formatting

Text formatting should be used to improve the readability and emphasis of your content. However, it's important not to overdo it. Here are some guidelines for when and how to use text formatting appropriately.

### Emphasizing Key Points

Use bold or italic text to highlight key points or important information. For example, in a blog post, you might bold the main takeaways or use italics for terms that you want to define.

```html
<p>Remember to always <strong>back up your data</strong> to prevent loss.</p>
<p>The term <em>responsive design</em> refers to a layout that adjusts to different screen sizes.</p>
```

### Indicating Changes or Corrections

Use strikethrough text to show corrections or changes in a document. This is particularly useful in collaborative documents where tracking changes is important.

```html
<p>We will meet at <del>10 AM</del> <ins>11 AM</ins> on Monday.</p>
```

### Adding Footnotes or Chemical Formulas

Subscript and superscript text are great for footnotes or displaying chemical formulas.

```html
<p>Water is chemically represented as H<sub>2</sub>O.</p>
<p>This is a reference to Note<sup>1</sup>.</p>
```

### Highlighting Important Sections

Use the highlight tag sparingly to draw attention to specific parts of your text.

```html
<p>Make sure to <mark>submit your report</mark> by the end of the week.</p>
```

## Practical Examples and Code Snippets

Let’s combine some of these tags to create a well-formatted block of text.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Formatting Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
    p {
      margin: 10px 0;
    }
  </style>
</head>
<body>
  <h1>Top 5 Coding Tips</h1>
  <p>Here are the <strong>top 5 tips</strong> for becoming a better coder:</p>
  <p><strong>1. Practice regularly</strong>: The more you code, the better you’ll get. Make it a habit to write code every day.</p>
  <p><strong>2. Learn from others</strong>: Read code written by experienced developers and try to understand their approach.</p>
  <p><strong>3. Use resources wisely</strong>: There are many online resources available. Websites like <a href="https://www.w3schools.com">W3Schools</a> and <a href="https://developer.mozilla.org">MDN Web Docs</a> are great for learning HTML, CSS, and JavaScript.</p>
  <p><strong>4. Debugging</strong>: Learn to debug effectively. Tools like <mark>Chrome DevTools</mark> can help you identify and fix issues quickly.</p>
  <p><strong>5. Stay updated</strong>: Technology is always evolving. Keep up with the latest trends and updates in the coding world.</p>
  <p><small>Remember, consistency is key! <em>Happy coding!</em></small></p>
</body>
</html>
```

In this example, we’ve used various text formatting tags to highlight important tips, add emphasis, and include links to resources. This makes the content more engaging and easier to follow.

## In Conclusion

Text formatting in HTML is like adding spices to your cooking—it enhances the flavor of your content, making it more appealing and easier to digest. By using tags like `<b>`, `<i>`, `<u>`, `<mark>`, and others, you can create web pages that not only convey information effectively but also keep your readers hooked.

So, go ahead and experiment with these tags in your next project. Play around with bold, italics, underlines, and more to see how they can transform your content. Just remember, with great power comes great responsibility—use text formatting wisely and sparingly for maximum impact.

Happy coding, and may your text always be well-formatted!