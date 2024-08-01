---
id: template-in-django
title: Template In Django
sidebar_label: Template In Django
sidebar_position: 4
tags: [python,Django Introduction,Template In Django,Framework]
description: Template In Django.
---

In Django, templates are used to generate dynamic HTML content by combining static HTML with Django Template Language (DTL) syntax. Templates provide a way to separate the design (HTML structure) from the logic (Python code in views) of your web application. Here’s a comprehensive overview of templates in Django:

### 1. **Template Structure**

Django templates are HTML files that can include special syntax and tags provided by DTL. They are typically stored in the `templates` directory within each Django app or in a project-level `templates` directory.

Example template (`product_list.html`):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Product List</title>
</head>
<body>
    <h1>Products</h1>
    <ul>
        {% for product in products %}
            <li>{{ product.name }} - ${{ product.price }}</li>
        {% endfor %}
    </ul>
</body>
</html>
```

### 2. **Django Template Language (DTL)**

DTL is a lightweight template language provided by Django for rendering templates dynamically. It includes variables, tags, and filters that allow you to manipulate and display data from views.

- **Variables**: Enclosed in double curly braces (`{{ variable }}`), used to output values passed from views to templates.
  
  ```html
  <h1>Welcome, {{ user.username }}!</h1>
  ```

- **Tags**: Enclosed in curly braces with percent signs (`{% tag %}`), control the logic flow and processing within templates (e.g., `for` loops, `if` statements).

  ```html
  {% for product in products %}
      <li>{{ product.name }} - ${{ product.price }}</li>
  {% endfor %}
  ```

- **Filters**: Modify the output of variables before they are displayed (e.g., date formatting, string manipulation).

  ```html
  {{ product.created_at | date:'F j, Y' }}
  ```

### 3. **Template Inheritance**

Django supports template inheritance, allowing you to create base templates that define the common structure and layout of your pages. Child templates can then override specific blocks or extend the base template.

- **Base Template (`base.html`)**:

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>{% block title %}My Site{% endblock %}</title>
  </head>
  <body>
      <header>
          <h1>{% block header %}Welcome to My Site{% endblock %}</h1>
      </header>
      <main>
          {% block content %}
          {% endblock %}
      </main>
      <footer>
          &copy; {{ year }} My Site
      </footer>
  </body>
  </html>
  ```

- **Child Template**:

  ```html
  {% extends 'base.html' %}

  {% block title %}Product List{% endblock %}

  {% block content %}
      <h2>Products</h2>
      <ul>
          {% for product in products %}
              <li>{{ product.name }} - ${{ product.price }}</li>
          {% endfor %}
      </ul>
  {% endblock %}
  ```

### 4. **Including Templates**

You can include one template within another using the `{% include %}` tag, allowing you to reuse common HTML snippets across multiple templates.

```html
{% include 'includes/header.html' %}
<h1>Content goes here</h1>
{% include 'includes/footer.html' %}
```

### 5. **Static Files**

Templates can reference static files (CSS, JavaScript, images) using the `{% static %}` tag, which generates the URL to the static file as defined in your `STATIC_URL` setting.

```html
<link rel="stylesheet" type="text/css" href="{% static 'css/style.css' %}">
```

### 6. **Template Loading**

Django automatically searches for templates within each app’s `templates` directory and the project-level `templates` directory. You can customize template loading by configuring the `TEMPLATES` setting in your Django project settings.

### 7. **Testing Templates**

Django provides testing tools to ensure templates render correctly and display expected content. Tests can verify the presence of specific HTML elements or content in rendered templates.

Templates in Django play a crucial role in separating presentation logic from application logic, promoting code reusability, and enhancing maintainability. Understanding how to structure and utilize templates effectively is essential for building scalable and responsive web applications with Django.