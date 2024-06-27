---
id: overview-of-requestparam
title: Overview of @RequestParam in Spring Boot
sidebar_label: Overview
---

In Spring Boot, the `@RequestParam` annotation is used to extract query parameters, form parameters, and parts of multi-part requests from the URL. This annotation is part of the Spring Web module and binds HTTP request parameters to controller method arguments.

## Usage

The `@RequestParam` annotation can be used in a controller method to extract parameters from the query string of the URL.

### Example

```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @GetMapping("/greet")
    public String greet(@RequestParam(name = "name", defaultValue = "World") String name) {
        return "Hello, " + name + "!";
    }
}
```

In this example:
- A GET request to `/greet?name=John` returns `"Hello, John!"`.
- A GET request to `/greet` returns `"Hello, World!"` due to the default value.

## Required Parameters

By default, `@RequestParam` is required. If the parameter is not present in the request, Spring will throw an exception.

### Example

```java
@GetMapping("/greet")
public String greet(@RequestParam String name) {
    return "Hello, " + name + "!";
}
```

If the `name` parameter is missing in the above example, Spring will throw a `MissingServletRequestParameterException`.

## Optional Parameters

To make a request parameter optional, set the `required` attribute to `false`.

### Example

```java
@GetMapping("/greet")
public String greet(@RequestParam(required = false) String name) {
    return "Hello, " + (name != null ? name : "World") + "!";
}
```

## Default Values

You can provide a default value for a parameter using the `defaultValue` attribute. If the parameter is not present in the request, the default value will be used.

### Example

```java
@GetMapping("/greet")
public String greet(@RequestParam(name = "name", defaultValue = "World") String name) {
    return "Hello, " + name + "!";
}
```

## Multiple Parameters

You can use multiple `@RequestParam` annotations in a single method to bind multiple parameters.

### Example

```java
@GetMapping("/add")
public String add(@RequestParam int a, @RequestParam int b) {
    return "Sum: " + (a + b);
}
```

A GET request to `/add?a=5&b=3` would return `"Sum: 8"`.

## List Parameters

If a request parameter can have multiple values, you can bind it to a `List`.

### Example

```java
@GetMapping("/numbers")
public String numbers(@RequestParam List<Integer> numbers) {
    return "Numbers: " + numbers;
}
```

A GET request to `/numbers?numbers=1&numbers=2&numbers=3` would return `"Numbers: [1, 2, 3]"`.

## Conclusion

The `@RequestParam` annotation in Spring Boot is a powerful tool for extracting parameters from HTTP requests. It allows for required and optional parameters, default values, and can handle multiple and list parameters. By understanding and using `@RequestParam`, you can create more flexible and robust web applications.
