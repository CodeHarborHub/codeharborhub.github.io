---
id: error-handling-and-debugging
title: Error Handling and Debugging
sidebar_label: Error Handling and Debugging
sidebar_position: 9
tags: [flask, python, error handling, debugging]
description: In this tutorial, you will learn about error handling and debugging in Flask.
---

Handling errors gracefully and debugging effectively are crucial for developing robust Flask applications.

### Handling Errors
1. **Custom Error Pages:**

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)
```

2. **Creating `404.html`:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page Not Found</title>
</head>
<body>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
</body>
</html>
```

### Debugging
1. **Using the Debugger:**
Set debug=True in your app.run() to enable the debugger:

```python
if __name__ == '__main__':
    app.run(debug=True)
```

2. **Logging Errors:**
```python
import logging
from logging.handlers import RotatingFileHandler

if not app.debug:
    handler = RotatingFileHandler('error.log', maxBytes=10000, backupCount=1)
    handler.setLevel(logging.ERROR)
    app.logger.addHandler(handler)
```

### Conclusion

Flask is a powerful and flexible framework for building web applications and APIs. Its simplicity and ease of use make it a popular choice among developers. Understanding the basics of Flask is the first step towards creating robust and scalable web applications.