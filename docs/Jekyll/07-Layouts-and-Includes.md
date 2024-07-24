---
id: working-with-layouts-and-includes
title: Working with Layouts and Includes
sidebar_label: Working with Layouts and Includes
sidebar_position: 7
tags: [jekyll, layouts, includes]
description: Learn how to use layouts and includes in Jekyll to structure your site efficiently.
---

Layouts and includes in Jekyll help you manage the structure and reuse components across your site. They enable you to maintain a consistent design and avoid redundancy.

### Using Layouts

1. **Define a Layout:**

```html
<!-- _layouts/default.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ page.title }}</title>
</head>
<body>
    {{ content }}
</body>
</html>
```

2. **Apply the Layout:**
```yaml
---
layout: default
title: My Page
---
```

### Using Includes

1. **Create an Include:**

```html
<header>
    <h1>Welcome to My Site</h1>
</header>
```

2. **Use the Include:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ page.title }}</title>
</head>
<body>
    {% include header.html %}
    {{ content }}
</body>
</html>
```

### Conclusion

Layouts and includes are powerful tools in Jekyll for creating a maintainable and scalable site structure. They help you keep your code DRY (Don't Repeat Yourself) and ensure a consistent layout across your site.