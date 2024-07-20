---
id: flask-routing-and-request-handling
title: Flask Routing and Request Handling
sidebar_label: Flask Routing and Request Handling
sidebar_position: 4
tags: [flask, python, routing, request handling]
description: In this tutorial, you will learn about routing and request handling in Flask.
---

Routing in Flask is used to map URLs to functions (views). Each view function is responsible for handling requests to a specific URL.

### Defining Routes
Routes are defined using the `@app.route` decorator. Here's a simple example:
```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Flask!"

@app.route('/about')
def about():
    return "About Page"

if __name__ == '__main__':
    app.run(debug=True)
```

### Handling Requests
Flask provides support for handling different types of HTTP requests. By default, routes handle `GET` requests, but you can specify other methods like `POST`, `PUT`, `DELETE`, etc.
```python
from flask import Flask, request

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.form['data']
    return f"Received: {data}"

if __name__ == '__main__':
    app.run(debug=True)
```

### Conclusion

Understanding routing and request handling in Flask is crucial for creating dynamic web applications. By defining routes and handling different types of requests, you can build responsive and interactive web applications.

