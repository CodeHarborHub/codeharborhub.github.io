---
id: lesson-1
title: "Advanced Metaprogramming in Ruby"
sidebar_label: Intro & Concepts
sidebar_position: 1
description: "Learn Advanced Metaprogramming in Ruby"
tags: [courses,Advance-level,Introduction]
---  

Metaprogramming in Ruby allows you to write code that can modify or extend itself at runtime. This powerful feature can be used for various advanced programming techniques, such as creating domain-specific languages (DSLs) or dynamically altering classes.

#### **1. Singleton Methods and Classes**

**Singleton Methods**:
- Singleton methods are methods that are defined on a single object rather than on the class of the object.

  **Example**:
  ```ruby
  obj = "I am a string"

  # Define a singleton method on obj
  def obj.singleton_method
    "I am a singleton method"
  end

  puts obj.singleton_method # Output: I am a singleton method
  ```

**Singleton Classes**:
- Singleton classes are special classes associated with a single object. They allow you to define methods that only affect that particular object.

  **Example**:
  ```ruby
  obj = "I am a string"

  class << obj
    def singleton_method
      "This is a singleton class method"
    end
  end

  puts obj.singleton_method # Output: This is a singleton class method
  ```

#### **2. Using `class_eval` and `instance_eval`**

**`class_eval`**:
- `class_eval` is used to evaluate a string or block within the context of a class, allowing you to modify the class dynamically.

  **Example**:
  ```ruby
  class MyClass
    def greet
      "Hello"
    end
  end

  MyClass.class_eval do
    def farewell
      "Goodbye"
    end
  end

  obj = MyClass.new
  puts obj.greet    # Output: Hello
  puts obj.farewell # Output: Goodbye
  ```

**`instance_eval`**:
- `instance_eval` is used to evaluate a string or block within the context of a specific object, allowing you to modify the object dynamically.

  **Example**:
  ```ruby
  class MyClass
    def initialize
      @name = "Initial Name"
    end
  end

  obj = MyClass.new
  obj.instance_eval do
    @name = "Changed Name"
  end

  puts obj.instance_variable_get(:@name) # Output: Changed Name
  ```
