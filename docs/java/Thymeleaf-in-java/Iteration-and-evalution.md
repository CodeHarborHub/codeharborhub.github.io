---
id: Iteration and Evalution in Thymeleaf 
title: Iteration and Evalution in Thymeleaf
sidebar_label: Iteration and Evalution in Thymeleaf
sidebar_position: 1
tags: [java, mvc,thymleaf, programming, java core, java spring, java web, AOP, aspect oriented]
description: in thi tutorial you will learn about Iteration and Evalution in Thymeleaf
---

###  Introduction
In this guide, we'll explore Thymeleaf's iteration and conditional evaluation capabilities, focusing on the practical implementation within a web application. We'll cover iteration basics, keeping iteration status, lazy retrieval of data, and conditional evaluation.

### Iteration Basics
The product list page is essential for displaying a collection of products. We utilize Thymeleaf's `th:each` attribute to iterate over the products and generate HTML dynamically. 

```html
<tr th:each="prod : ${prods}">
    <td th:text="${prod.name}">Onions</td>
    <td th:text="${prod.price}">2.41</td>
    <td th:text="${prod.inStock}? #{true} : #{false}">yes</td>
</tr>
```

###  Keeping Iteration Status
Thymeleaf provides a mechanism for keeping track of iteration status using the `iterStat` variable. This allows us to apply styling or logic based on the current iteration's properties.

```html
<tr th:each="prod, iterStat : ${prods}" th:class="${iterStat.odd}? 'odd'">
```

###  Lazy Retrieval of Data
To optimize data retrieval, Thymeleaf supports lazy loading of context variables. This ensures that data is retrieved only when needed, improving performance.

```java
context.setVariable(
    "users",
    new LazyContextVariable<List<User>>() {
        @Override
        protected List<User> loadValue() {
            return databaseRepository.findAllUsers();
        }
    });
```

###  Conditional Evaluation
Thymeleaf offers simple conditionals (`th:if` and `th:unless`) and switch statements (`th:switch` / `th:case`) for conditional rendering of HTML elements.

```html
<a href="comments.html" th:href="@{/product/comments(prodId=${prod.id})}" th:if="${not #lists.isEmpty(prod.comments)}">view</a>
```

### Conclusion
By leveraging Thymeleaf's iteration and conditional evaluation features, we can create dynamic and responsive web pages that adapt to different data scenarios. This enhances user experience and improves the efficiency of our web application.