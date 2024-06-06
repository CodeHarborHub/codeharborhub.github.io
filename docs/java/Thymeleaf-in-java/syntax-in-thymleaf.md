---
id: Syntaxes in  Thymeleaf
title: Syntaxes in  Thymeleaf
sidebar_label: Syntaxes in  Thymeleaf
sidebar_position: 2
tags: [java, mvc,thymleaf, programming, java core, java spring, java web, AOP, aspect oriented]
description: in thi tutorial you will learn about basic syntaxes in thymeleaf and how to use them
---

Thymeleaf Standard Expressions offer a versatile way to dynamically generate content in web applications. These expressions can be used within HTML attributes to manipulate data, create links, handle messages, and more. Here's a summary of the key features and expressions:

1. **Simple expressions:**
   - Variable Expressions: `${...}`
   - Selection Variable Expressions: `*{...}`
   - Message Expressions: `#{...}`
   - Link URL Expressions: `@{...}`
   - Fragment Expressions: `~{...}`

2. **Literals:**
   - Text literals: `'one text'`, `'Another one!'`
   - Number literals: `0`, `34`, `3.0`, `12.3`
   - Boolean literals: `true`, `false`
   - Null literal: `null`
   - Literal tokens: `one`, `sometext`, `main`

3. **Text operations:**
   - String concatenation: `+`
   - Literal substitutions: `|The name is ${name}|`
   - Arithmetic operations: `+`, `-`, `*`, `/`, `%`
   - Boolean operations: `and`, `or`, `!`, `not`
   - Comparisons and equality: `>`, `<`, `>=`, `<=`, `==`, `!=`

4. **Conditional operators:**
   - If-then: `(if) ? (then)`
   - If-then-else: `(if) ? (then) : (else)`
   - Default: `(value) ?: (defaultvalue)`

5. **Special tokens:**
   - No-Operation: `_`

6. **Expression Utility Objects:**
   - Utility objects like `#execInfo`, `#messages`, `#uris`, `#conversions`, etc.

7. **Data Conversion / Formatting:**
   - Double-brace syntax for applying data conversion: `${{...}}`

Thymeleaf expressions offer a powerful way to manipulate data and generate dynamic content in web applications. By leveraging these expressions, developers can create more flexible and interactive user experiences. Let's delve into an example:

Suppose you have a web page displaying user information fetched from a database. Using Thymeleaf expressions, you can dynamically populate the page with user-specific data:

```html
<div th:object="${user}">
    <p>Name: <span th:text="*{firstName}">John</span>.</p>
    <p>Surname: <span th:text="*{lastName}">Doe</span>.</p>
    <p>Age: <span th:text="*{age} ?: '(no age specified)'">27</span>.</p>
</div>
```

In this example, `${user}` represents the user object retrieved from the server-side, and `*{...}` expressions access properties of this object. The Elvis operator `?:` provides a default value if the age property is null.

Thymeleaf's expressive syntax enables developers to build dynamic web applications with ease, providing a seamless user experience.

Thymeleaf's Standard Expressions provide a robust framework for dynamic content generation in web applications. Let's explore in more detail how each type of expression can be used and provide some practical examples:

### Simple Expressions:

#### Variable Expressions:
Variable expressions `${...}` are used to access variables stored in the context. These variables can be any Java objects made available to the template.

Example:
```html
<p>Welcome, <span th:text="${user.name}">Guest</span>!</p>
```

#### Selection Variable Expressions:
Selection variable expressions `*{...}` are similar to variable expressions, but they operate on a selected object, usually set using the `th:object` attribute.

Example:
```html
<div th:object="${session.user}">
    <p>Name: <span th:text="*{name}">John</span>.</p>
</div>
```

#### Message Expressions:
Message expressions `#{...}` are used for internationalization and localization. They fetch messages from property files based on the current locale.

Example:
```html
<p th:text="#{welcome.message}">Welcome to our website!</p>
```

#### Link URL Expressions:
Link URL expressions `@{...}` are used to create URLs within templates. They can include dynamic parameters.

Example:
```html
<a th:href="@{/profile/{userId}(userId=${user.id})}">View Profile</a>
```

#### Fragment Expressions:
Fragment expressions `~{...}` are used to include fragments of markup from other templates. They are typically used with `th:insert` or `th:replace`.

Example:
```html
<div th:replace="~{fragments/header :: navigation}"></div>
```

### Literals:

#### Text literals:
Text literals are enclosed in single quotes and can contain any characters.

Example:
```html
<p>This is a 'text' literal.</p>
```

#### Number literals:
Number literals represent numeric values.

Example:
```html
<p>The answer is <span th:text="42">42</span>.</p>
```

#### Boolean literals:
Boolean literals represent true or false values.

Example:
```html
<div th:if="${loggedIn} == true">Logged in</div>
```

#### Null literal:
The null literal represents a null value.

Example:
```html
<div th:if="${user} == null">User not found</div>
```

#### Literal tokens:
Literal tokens allow simplified expressions for certain common cases.

Example:
```html
<div th:class="content">...</div>
```

### Text Operations:

Thymeleaf provides several text operations for manipulating strings:

#### String concatenation:
String concatenation can be achieved using the `+` operator.

Example:
```html
<p th:text="'Hello, ' + ${user.name} + '!'">Hello, John!</p>
```

#### Literal substitutions:
Literal substitutions allow formatting strings with variable values without using explicit concatenation.

Example:
```html
<p th:text="|Welcome back, ${user.name}!|">Welcome back, John!</p>
```

#### Arithmetic operations:
Thymeleaf supports basic arithmetic operations like addition, subtraction, multiplication, division, and modulus.

Example:
```html
<p>Total: <span th:text="${price * quantity}">25.00</span></p>
```

#### Boolean operations:
Boolean operations like `and`, `or`, `not` can be used for logical operations.

Example:
```html
<div th:if="${loggedIn} and ${user.enabled}">Welcome, <span th:text="${user.name}">Guest</span>!</div>
```

#### Comparisons and equality:
Thymeleaf supports comparison and equality operations using symbols like `>`, `<`, `>=`, `<=`, `==`, `!=`.

Example:
```html
<div th:if="${age} > 18">Adult</div>
```

#### Conditional expressions:
Conditional expressions can be used to evaluate different expressions based on a condition.

Example:
```html
<p th:text="${status} == 'active' ? 'Account is active' : 'Account is inactive'"></p>
```

### Expression Utility Objects:

Thymeleaf provides utility objects for performing common tasks within expressions:

- `#execInfo`: Information about the template being processed.
- `#messages`: Methods for obtaining externalized messages.
- `#uris`: Methods for escaping parts of URLs.
- `#conversions`: Methods for executing conversion services.
- `#dates`: Methods for formatting java.util.Date objects.
- `#calendars`: Methods for java.util.Calendar objects.
- `#temporals`: Methods for dealing with dates and times using the java.time API.
- `#numbers`: Methods for formatting numeric objects.
- `#strings`: Methods for String objects.
- `#objects`: Methods for objects in general.
- `#bools`: Methods for boolean evaluation.
- `#arrays`: Methods for arrays.
- `#lists`: Methods for lists.
- `#sets`: Methods for sets.
- `#maps`: Methods for maps.
- `#aggregates`: Methods for creating aggregates on arrays or collections.
- `#ids`: Methods for dealing with id attributes that might be repeated.

These utility objects provide additional functionalities within expressions, making it easier to work with various types of data.

### Data Conversion / Formatting:

Thymeleaf allows for data conversion and formatting using a double-brace syntax `${{...}}`.

Example:
```html
<p th:text="${{user.lastLogin}}">Last login: 2024-06-01 10:00 AM</p>
```

This syntax instructs Thymeleaf to apply data conversion, such as formatting a date object before rendering it in the template.

### Conclusion:

Thymeleaf's Standard Expressions provide a powerful and flexible way to generate dynamic content in web applications. By leveraging these expressions, developers can create sophisticated templates that adapt to various data sources and user interactions, enhancing the overall user experience.