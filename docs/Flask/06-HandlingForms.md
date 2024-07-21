---
id: handling-forms-and-user-input
title: Handling Forms and User Input
sidebar_label: Handling Forms and User Input
sidebar_position: 6
tags: [flask, python, forms, user input]
description: In this tutorial, you will learn how to handle forms and user input in Flask.
---

Flask is a lightweight WSGI web application framework written in Python. It is widely used for building web applications and APIs due to its simplicity and flexibility. Flask is designed to make getting started quick and easy, with the ability to scale up to complex applications. This tutorial will guide you through the basics of Flask, helping you get started with building web applications.

### Handling forms and user input is a common requirement in web applications. Flask-WTF is an extension that integrates Flask with WTForms to provide form handling and validation.

### Installing Flask-WTF
First, you need to install Flask-WTF:

pip install Flask-WTF

### Creating a Simple Form
1. **Create `forms.py`:**

```python
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class MyForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    submit = SubmitField('Submit')
```

2. **Update `app.py`:**
```python
from flask import Flask, render_template, redirect, url_for
from forms import MyForm

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'

@app.route('/', methods=['GET', 'POST'])
def index():
    form = MyForm()
    if form.validate_on_submit():
        name = form.name.data
        return redirect(url_for('success', name=name))
    return render_template('index.html', form=form)

@app.route('/success/<name>')
def success(name):
    return f"Hello, {name}!"

if __name__ == '__main__':
    app.run(debug=True)
```

3. **Create `templates/index.html`:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Flask Form</title>
</head>
<body>
    <form method="POST">
        {{ form.hidden_tag() }}
        {{ form.name.label }} {{ form.name }}
        {{ form.submit }}
    </form>
</body>
</html>
```

### Conclusion

Handling forms and user input in Flask is straightforward with Flask-WTF. This integration allows you to create forms, validate user input, and process form data efficiently.