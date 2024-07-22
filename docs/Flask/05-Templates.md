---
id: using-templates-with-jinja2
title: Using Templates with Jinja2
sidebar_label: Using Templates with Jinja2
sidebar_position: 5
tags: [flask, python, templates, jinja2]
description: In this tutorial, you will learn about using templates with Jinja2 in Flask.
---

Flask uses the Jinja2 templating engine to render HTML templates. This allows you to create dynamic web pages by embedding Python code within HTML.

### Creating a Template
1. **Create a Templates Directory:**
mkdir templates

2. **Create `index.html`:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Flask App</title>
</head>
<body>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
</body>
</html>
```

### Rendering the Template
**Update `app.py:`**
```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', title="Welcome to Flask", message="This is a dynamic web page.")

if __name__ == '__main__':
    app.run(debug=True)
```

### Conclusion

Using templates with Jinja2 in Flask allows you to create dynamic and reusable web pages. By rendering templates, you can pass data from your Flask application to the HTML templates, making your web application more interactive and efficient.

