---
id: lesson-4
title: "Text Alignment and Decoration"
sidebar_label: Text Alignment and Decoration
sidebar_position: 4
description: "Text Alignment and Decoration"
tags: [courses,tailwind,Text Alignment,Text Decoration,beginner-level,Introduction]
---
 

1. **Text Alignment**:
   - Align text using the `text-{align}` class.
   ```html
   <p class="text-left">Left-aligned text (default)</p>
   <p class="text-center">Center-aligned text</p>
   <p class="text-right">Right-aligned text</p>
   <p class="text-justify">Justified text</p>
   ```

2. **Text Decoration**:
   - Apply text decoration like underline, line-through, or no underline using the `underline`, `line-through`, and `no-underline` classes.
   ```html
   <p class="underline">Underlined text</p>
   <p class="line-through">Strikethrough text</p>
   <p class="no-underline">No underline text</p>
   ```

#### Practical Example: Styling a Paragraph
Here's an example of how you can combine these utilities to style a paragraph of text:

```html
<div class="p-4">
  <p class="text-2xl font-semibold leading-relaxed tracking-wide text-center underline">
    This is a styled paragraph with larger font size, semi-bold weight, relaxed line height, wide letter spacing, centered alignment, and underlined text.
  </p>
</div>
```

By using Tailwind CSS's typography utilities, you can efficiently style text to meet your design requirements without writing custom CSS, making your development process faster and more consistent.