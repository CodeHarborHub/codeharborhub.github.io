---
id: lesson-2
title: "Special Characters"
sidebar_label: Special Characters
sidebar_position: 2
description: "Learn to Special Characters."
tags: [courses,beginner-level,Special Characters,Introduction]
--- 

- `&copy;` : © (copyright)
- `&reg;` : ® (registered trademark)
- `&trade;` : ™ (trademark)
- `&euro;` : € (euro)
- `&pound;` : £ (pound)
- `&yen;` : ¥ (yen)
- `&cent;` : ¢ (cent)
- `&sect;` : § (section)
- `&deg;` : ° (degree)
- `&hellip;` : … (ellipsis)
- `&ndash;` : – (en dash)
- `&mdash;` : — (em dash)

**Example:**
```html
<p>All rights reserved &copy; 2024.</p>
<p>Our product is a &reg; registered trademark.</p>
<p>This is a trademark symbol: &trade;.</p>
<p>Prices are listed in euros: &euro;50.</p>
<p>Temperature is measured in degrees Celsius: 25&deg;C.</p>
```

In this example, special characters like ©, ®, ™, €, and ° are displayed using HTML entities.

### Using Special Characters in HTML

Special characters in HTML can be represented using their corresponding HTML entities. This is particularly useful for characters that are not easily typed on a keyboard or when you want to ensure they are displayed correctly across different browsers and devices.

**Example with Special Characters:**
```html
<p>I paid &pound;10 for a coffee.</p>
<p>The cost is &cent;50 per item.</p>
<p>Section &sect;1 of the document covers this topic.</p>
<p>The temperature dropped to -5&deg;C last night.</p>
<p>To be continued&hellip;</p>
<p>This is an en dash: &ndash; and this is an em dash: &mdash;</p>
```

In this example, special characters such as £, ¢, §, °, …, – and — are displayed using their respective HTML entities.

**Unicode Characters:**
You can also use Unicode characters directly in HTML by specifying their code point using `&#x` followed by the hexadecimal code.

**Example with Unicode Characters:**
```html
<p>I love using emojis: &#x1F600; &#x1F602; &#x1F609;.</p>
```

In this example, Unicode characters for emojis are displayed using their hexadecimal code points.

By using HTML entities, you can ensure that reserved characters and special characters are correctly displayed in your HTML documents, improving the readability and accessibility of your content.