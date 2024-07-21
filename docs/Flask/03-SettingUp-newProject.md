---
id: setting-up-a-new-flask-project
title: Setting up a New Flask Project
sidebar_label: Setting up a New Flask Project
sidebar_position: 3
tags: [flask, python, project setup]
description: In this tutorial, you will learn how to set up a new Flask project.
---

Setting up a new Flask project involves creating a basic project structure and initializing the Flask application.

### Project Structure

1. **Create a Project Directory:**
mkdir my_flask_app
cd my_flask_app

2. **Create a Virtual Environment:**
python -m venv venv
source venv/bin/activate   # On Windows, use `venv\Scripts\activate`

3. **Install Flask:**
pip install Flask

### Initializing the Flask Application

**Create `app.py`:**
```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Flask!"

if __name__ == '__main__':
    app.run(debug=True)
```

### Conclusion

Flask is a powerful and flexible framework for building web applications and APIs. Its simplicity and ease of use make it a popular choice among developers. Understanding the basics of Flask is the first step towards creating robust and scalable web applications.