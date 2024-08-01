---
id: ruby-object-oriented
title: Object Oriented
sidebar_label:  Object Oriented
sidebar_position: 2
description: Everything in Ruby is an object
tags: [Ruby,Introduction,oops,programming Language]
---

Object-oriented programming (OOP) is a programming paradigm that organizes software design around objects and data rather than actions and logic. It focuses on creating reusable patterns of code, encapsulating data and behavior into objects, and using inheritance and polymorphism to reuse and extend existing code. Here are the core principles and concepts of object-oriented programming, with examples from Ruby:

### Core Principles of OOP

1. **Encapsulation**: Encapsulation is the bundling of data (attributes) and methods (functions) that operate on the data into a single unit called an object. It allows objects to control their state and hide implementation details from the outside world.

   **Example in Ruby**:
   ```ruby
   class Person
     attr_accessor :name, :age

     def initialize(name, age)
       @name = name
       @age = age
     end

     def greet
       "Hello, my name is #{@name} and I am #{@age} years old."
     end
   end

   person = Person.new("Alice", 30)
   puts person.greet  # Outputs: "Hello, my name is Alice and I am 30 years old."
   ```

2. **Inheritance**: Inheritance allows one class (subclass) to inherit the properties and behaviors (methods) of another class (superclass). It supports code reuse and establishes a hierarchical relationship between classes.

   **Example in Ruby**:
   ```ruby
   class Animal
     def speak
       "Animal speaks"
     end
   end

   class Dog < Animal
     def speak
       "Woof!"
     end
   end

   dog = Dog.new
   puts dog.speak  # Outputs: "Woof!"
   ```

3. **Polymorphism**: Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables flexibility in method implementation through method overriding and method overloading (in languages that support it).

   **Example in Ruby**:
   ```ruby
   class Animal
     def speak
       raise NotImplementedError, "Subclasses must implement this method"
     end
   end

   class Dog < Animal
     def speak
       "Woof!"
     end
   end

   class Cat < Animal
     def speak
       "Meow!"
     end
   end

   animals = [Dog.new, Cat.new]
   animals.each do |animal|
     puts animal.speak
   end
   # Outputs: "Woof!"
   #          "Meow!"
   ```

4. **Abstraction**: Abstraction focuses on the essential qualities of an object, hiding unnecessary details while exposing essential features. It simplifies complex systems by modeling classes appropriate to the problem domain.

   **Example in Ruby**:
   ```ruby
   class Car
     def initialize(make, model)
       @make = make
       @model = model
     end

     def drive
       "Driving #{@make} #{@model}"
     end
   end

   car = Car.new("Toyota", "Camry")
   puts car.drive  # Outputs: "Driving Toyota Camry"
   ```

5. **Association**: Objects often interact with each other to perform tasks beyond their own capabilities. Associations define how objects are connected and interact within a system, such as one-to-one, one-to-many, or many-to-many relationships.

   **Example in Ruby**:
   ```ruby
   class Author
     attr_accessor :name

     def initialize(name)
       @name = name
     end
   end

   class Book
     attr_accessor :title, :author

     def initialize(title, author)
       @title = title
       @author = author
     end
   end

   author = Author.new("J.K. Rowling")
   book = Book.new("Harry Potter", author)
   puts "#{book.title} by #{book.author.name}"  # Outputs: "Harry Potter by J.K. Rowling"
   ```

### Benefits of OOP

- **Modularity**: OOP promotes modular design, making it easier to understand, maintain, and modify code.
  
- **Code Reusability**: Objects and classes can be reused in different contexts or applications, reducing redundancy and improving productivity.

- **Flexibility and Scalability**: OOP allows programs to scale by adding new features or modifying existing ones without affecting the entire codebase.

- **Enhanced Security**: Encapsulation limits access to data, preventing unintended modifications and ensuring data integrity.
 