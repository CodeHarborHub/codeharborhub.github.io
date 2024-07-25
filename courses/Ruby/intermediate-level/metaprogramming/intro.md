---
id: lesson-1
title: "Metaprogramming"
sidebar_label: Introduction
sidebar_position: 1
description: "Learn Metaprogramming in Ruby"
tags: [courses,intermediate-level,Ruby,Introduction]
---  
 

Metaprogramming allows Ruby developers to write code that can modify or create methods dynamically. Here’s an overview of key concepts and practical examples.

#### **1. Introduction to Metaprogramming**
Metaprogramming involves writing code that can alter itself or other code at runtime. Ruby's dynamic nature makes it particularly suited for metaprogramming.

#### **2. Using `send` and `method_missing`**

- **`send` Method**:
  - `send` is used to call a method by its name, which can be a symbol or string. It can also bypass private and protected method access controls.
  
  **Example**:
  ```ruby
  class Example
    def greet(name)
      "Hello, #{name}!"
    end
  end

  example = Example.new
  puts example.send(:greet, "Alice")
  ```
  **Output**:
  ```bash
  Hello, Alice!
  ```

- **`method_missing` Method**:
  - `method_missing` is invoked when a method that doesn’t exist is called. This method can be overridden to handle undefined method calls dynamically.
  
  **Example**:
  ```ruby
  class DynamicMethods
    def method_missing(name, *args)
      "You called #{name} with #{args.inspect}"
    end
  end

  obj = DynamicMethods.new
  puts obj.unknown_method("test")
  ```
  **Output**:
  ```bash
  You called unknown_method with ["test"]
  ```
