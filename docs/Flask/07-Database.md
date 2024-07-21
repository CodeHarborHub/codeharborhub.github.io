---
id: working-with-databases
title: Working with Databases (SQLAlchemy)
sidebar_label: Working with Databases (SQLAlchemy)
sidebar_position: 7
tags: [flask, python, databases, sqlalchemy]
description: In this tutorial, you will learn how to work with databases using SQLAlchemy in Flask.
---

Flask-SQLAlchemy is an extension that simplifies database interactions in Flask applications. It provides an ORM (Object Relational Mapper) for managing database records as Python objects.

### Installing Flask-SQLAlchemy
First, install Flask-SQLAlchemy:
```sh
pip install Flask-SQLAlchemy
```

### Setting Up the Database
1. **Update `app.py:`**

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), nullable=False, unique=True)

    def __repr__(self):
        return f"User('{self.username}')"

@app.route('/')
def index():
    return "Welcome to Flask-SQLAlchemy"

if __name__ == '__main__':
    app.run(debug=True)
```

2. **Creating the Database:**
```python
>>> from app import db
>>> db.create_all()
```

### Performing CRUD Operations

1. **Adding Records:**

```python
from app import db, User
user1 = User(username='john_doe')
db.session.add(user1)
db.session.commit()
```

2. **Querying Records:**

```python
users = User.query.all()
print(users)
```

### Conclusion

Working with databases in Flask is made easy with Flask-SQLAlchemy. It provides an ORM to interact with the database using Python objects, allowing for efficient and organized database management.