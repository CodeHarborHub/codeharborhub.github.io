---
id: lesson-2
title: "Constants and Symbols"
sidebar_label: Constants and Symbols
sidebar_position: 2
description: "Learn Constants and Symbols in Ruby"
tags: [courses,beginner-level,Ruby,Introduction]
--- 
      

**Constants:**
- Constants begin with an uppercase letter and remain unchanged throughout the program.

```ruby
PI = 3.14159
MAX_LIMIT = 100
```

**Symbols:**
- Symbols are immutable, reusable constants represented with a colon `:`.

```ruby
status = :pending
puts status # Outputs: pending
```

### Input and Output Operations

**Output Operations:**
- `puts`: Prints with a newline.
- `print`: Prints without a newline.
- `p`: Prints with `inspect` output (useful for debugging).

```ruby
puts "Hello, World!"   # Outputs: Hello, World!
print "Hello, World!"  # Outputs: Hello, World!
p "Hello, World!"      # Outputs: "Hello, World!"
```

**Input Operations:**
- `gets`: Reads a line from standard input (including the newline character).

```ruby
puts "Enter your name:"
name = gets.chomp  # `chomp` removes the trailing newline character
puts "Hello, #{name}!"
```

**Example Program:**

```ruby
# basic_syntax.rb

# Declare some variables
name = "Alice"
age = 30
is_student = false

# Print a greeting message
puts "Hello, #{name}! You are #{age} years old."

# Take user input
puts "Enter your favorite number:"
favorite_number = gets.chomp.to_i  # Convert input to integer

# Display user input
puts "Your favorite number is #{favorite_number}."
```

**Output:**

```bash
Hello, Alice! You are 30 years old.
Enter your favorite number:
42
Your favorite number is 42.
```