---
id: lesson-1
title: "1. Ruby Syntax Basics"
sidebar_label: Ruby Syntax Basics
sidebar_position: 1
description: "Learn Ruby Syntax Basics"
tags: [courses,beginner-level,Ruby,Introduction]
--- 
  

Ruby's syntax is designed to be simple and readable. Here are some fundamental aspects:

**Comments:**
- Single-line comments start with `#`.
- Multi-line comments are enclosed between `=begin` and `=end`.

```ruby
# This is a single-line comment

=begin
This is a 
multi-line comment
=end
```

**Code Blocks:**
- Code blocks can be enclosed within `do...end` or curly braces `{...}`.

```ruby
3.times do
  puts "Hello!"
end

3.times { puts "Hello!" }
```

**Methods:**
- Methods are defined using the `def` keyword.

```ruby
def greet(name)
  puts "Hello, #{name}!"
end

greet("Alice") # Outputs: Hello, Alice!
```

### 2. Data Types and Variables

**Common Data Types:**
- **Numbers:** Integer, Float
- **Strings:** Text data
- **Arrays:** Ordered list of elements
- **Hashes:** Key-value pairs
- **Boolean:** `true` or `false`
- **Nil:** Represents "nothing" or "no value"

```ruby
# Numbers
integer = 42
float = 3.14

# Strings
string = "Hello, World!"

# Arrays
array = [1, 2, 3, 4, 5]

# Hashes
hash = { name: "Alice", age: 30 }

# Boolean
is_ruby_fun = true

# Nil
nothing = nil
```

**Variables:**
- Variables are used to store data and are dynamically typed.

```ruby
name = "Bob"
age = 25
is_student = true

puts name    # Outputs: Bob
puts age     # Outputs: 25
puts is_student # Outputs: true
```
