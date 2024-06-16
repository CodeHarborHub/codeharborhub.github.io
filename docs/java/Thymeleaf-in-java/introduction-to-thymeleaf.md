---
id: Introduction to Thymeleaf
title: Introduction to Thymeleaf
sidebar_label: Introduction to Thymeleaf
sidebar_position: 1
tags: [java, mvc,thymleaf, programming, java core, java spring, java web, AOP, aspect oriented]
description: in thi tutorial you will learn about introduction thymeleaf and basics of MVC
---
### What is Thymeleaf?
Thymeleaf is a modern server-side Java template engine designed for both web and standalone environments. It can process various types of content including HTML, XML, JavaScript, CSS, and plain text. The primary objective of Thymeleaf is to offer an elegant and highly maintainable approach to creating templates. It introduces the concept of Natural Templates, allowing logic injection without compromising the template's usability as a design prototype. Thymeleaf is built with web standards in mind, particularly HTML5, enabling the creation of fully validating templates.

### What kind of templates can Thymeleaf process?
Thymeleaf supports six template modes:
- HTML
- XML
- TEXT
- JAVASCRIPT
- CSS
- RAW

These modes encompass markup and textual templates, with HTML and XML modes accepting respective input types. Thymeleaf does not perform validation on HTML templates but enforces well-formedness rules for XML templates. The TEXT mode caters to non-markup templates, such as text emails or documentation. 

### Dialects: The Standard Dialect
Thymeleaf is highly extensible, allowing detailed customization of template processing. It employs a concept called dialects, which consist of processors applying logic to template artifacts. Thymeleaf's core library includes the Standard Dialect, offering comprehensive functionality for most users.

### Using Texts
#### A multi-language welcome
Thymeleaf facilitates internationalization (i18n) through text externalization, enabling the extraction of template fragments into separate files. These fragments, called "messages," are identified by keys and can be easily replaced with equivalent texts in other languages. Thymeleaf employs the `#{...}` syntax to specify text corresponding to a specific message. The location of externalized text is configurable, typically residing in .properties files. By default, Thymeleaf uses the Standard Message Resolver, which expects messages in properties files corresponding to the template's name and locale.
Certainly!

In our example, let's consider a simple home page for a grocery site. The initial version includes a title and a welcome message:

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>Good Thymes Virtual Grocery</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" type="text/css" media="all" href="../../css/gtvg.css" th:href="@{/css/gtvg.css}" />
</head>
<body>
    <p th:text="#{home.welcome}">Welcome to our grocery store!</p>
</body>
</html>
```

While this HTML code is valid and can be displayed by any browser, it's not strictly compliant with HTML5 standards due to the non-standard attributes such as `th:text`. Thymeleaf allows the use of these attributes for its functionalities.

The `th:text` attribute evaluates its value expression and sets the result as the body of the host tag. In this case, it replaces the default welcome message with the message identified by the key `home.welcome`.

Now, let's externalize this text for internationalization. We'll create a properties file for each supported language. For example, for Spanish:


```properties title="home.properties"
home.welcome=¡Bienvenido a nuestra tienda de comestibles!
```

This file contains the translated welcome message for Spanish-speaking users.

With Thymeleaf, this setup allows for easy management of text across different languages, enhancing the user experience of our grocery site.
Certainly, here's the content presented in the desired format:

---


```java title="HomeController.java"
public class HomeController implements IGTVGController {
    public void process(final IWebExchange webExchange, final ITemplateEngine templateEngine, final Writer writer) throws Exception {
        WebContext ctx = new WebContext(webExchange, webExchange.getLocale());
        templateEngine.process("home", ctx, writer);
    }
}
```

```java title="IContext.java"
public interface IContext {
    public Locale getLocale();
    public boolean containsVariable(final String name);
    public Set<String> getVariableNames();
    public Object getVariable(final String name);
}
```

```java title="IContext.java"
public interface IWebContext extends IContext {
    public IWebExchange getExchange();
}
```

**Creating WebContext**
```java
WebContext ctx = new WebContext(webExchange, webExchange.getLocale());
```

**Processing Template**
```java
templateEngine.process("home", ctx, writer);
```

**Processed HTML with Spanish Locale**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Good Thymes Virtual Grocery</title>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"/>
    <link rel="stylesheet" type="text/css" media="all" href="/gtvg/css/gtvg.css" />
</head>
<body>
    <p>¡Bienvenido a nuestra tienda de comestibles!</p>
</body>
</html>
```

**Unescaped Text in Thymeleaf**
```html
<p th:utext="#{home.welcome}">Welcome to our grocery store!</p>
```

**Adding Date Variable to Context**
```java
public void process(final IWebExchange webExchange, final ITemplateEngine templateEngine, final Writer writer) throws Exception {
    SimpleDateFormat dateFormat = new SimpleDateFormat("dd MMMM yyyy");
    Calendar cal = Calendar.getInstance();
    WebContext ctx = new WebContext(webExchange, webExchange.getLocale());
    ctx.setVariable("today", dateFormat.format(cal.getTime()));
    templateEngine.process("home", ctx, writer);
}
```

**Displaying Date Variable in Template**
```html
<body>
    <p th:utext="#{home.welcome}">Welcome to our grocery store!</p>
    <p>Today is: <span th:text="${today}">13 February 2011</span></p>
</body>
```

**Unescaped Text with HTML Tags**
```html
<p>Welcome to our <b>fantastic</b> grocery store!</p>
```

**Conclusion:**

Thymeleaf is a powerful server-side Java template engine designed for web and standalone environments. It offers extensive capabilities for processing various types of content including HTML, XML, JavaScript, CSS, and plain text.

Key concepts within Thymeleaf include:

1. **Contexts**: Thymeleaf contexts, represented by objects implementing the `IContext` interface, provide the necessary data for template execution, including variables and locale information. In web applications, the `IWebContext` interface extends `IContext` to provide additional functionality, such as access to HTTP request and response objects.

2. **Processing Templates**: Thymeleaf processes templates using the `ITemplateEngine` interface, where a context object containing the required data is passed along with the template name and an output writer.

3. **Internationalization**: Thymeleaf supports internationalization (i18n) through externalization of text fragments into properties files, allowing for easy translation of content into multiple languages. This is achieved using special syntax such as `#{...}` for message resolution.

4. **Unescaped Text**: Thymeleaf provides the `th:utext` attribute for displaying unescaped text, preserving HTML markup within the text content.

5. **Variables and Expressions**: Thymeleaf allows the use of variables and expressions within templates, enabling dynamic content generation. Variables are accessed using the `${...}` syntax, and expressions can range from simple variable references to complex object navigation using languages like OGNL (Object-Graph Navigation Language).

In conclusion, Thymeleaf offers a robust and flexible solution for template processing in Java web applications, providing developers with powerful tools for creating dynamic and internationalized web content.

