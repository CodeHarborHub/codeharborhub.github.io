---
id: ruby-blocks-and-procs
title: Blocks And Procs
sidebar_label: Blocks And Procs
sidebar_position: 5
description: Ruby Blocks And Procs
tags: [Ruby,Introduction,oops,Blocks And Procs,programming Language]
---

In Ruby, blocks and Procs are fundamental constructs that allow for flexible and powerful control over the flow of execution and behavior of your code.

### Blocks

Blocks in Ruby are chunks of code that can be passed around like objects. They are typically enclosed within either `do..end` or `{}` and are commonly associated with methods that yield control to them. Here's a basic example:

```ruby
# Using a block with each method
[1, 2, 3].each do |num|
  puts num * 2
end
```

In this example:
- `do |num| ... end` defines a block that multiplies each element of the array `[1, 2, 3]` by 2.
- `num` is the parameter passed to the block for each iteration.

Blocks can also be defined with curly braces `{}`:
```ruby
[1, 2, 3].each { |num| puts num * 2 }
```

Blocks are most commonly used with iterator methods like `.each`, `.map`, `.select`, etc., allowing for concise and readable code.

### Procs

A Proc (short for procedure) is an object that holds a block of code and can be stored in a variable, passed to methods, and executed later. They provide a way to package blocks of code into reusable entities.

Here's how you define and use a Proc:

```ruby
# Define a Proc
multiply_proc = Proc.new { |x, y| x * y }

# Call the Proc
puts multiply_proc.call(3, 4)  # Outputs: 12
```

In this example:
- `Proc.new { |x, y| x * y }` creates a Proc that multiplies two numbers.
- `multiply_proc.call(3, 4)` invokes the Proc with arguments `3` and `4`.

Procs are particularly useful when you want to store a block of code for later use or when you want to pass behavior as an argument to a method.

### Differences and Usage

- **Blocks** are anonymous and tied directly to method invocations. They are not objects themselves but can be converted to Procs implicitly by using the `&` operator.
  
- **Procs** are objects and can be manipulated like any other object in Ruby. They are useful for storing blocks of code that need to be executed multiple times or passed around as arguments.

```ruby
# Example of passing a block as a Proc argument
def execute_operation(x, y, operation)
  operation.call(x, y)
end

puts execute_operation(5, 3, multiply_proc)  # Outputs: 15
``` 