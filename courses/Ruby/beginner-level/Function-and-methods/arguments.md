---
id: lesson-2
title: "Method Arugument"
sidebar_label: Argument
sidebar_position: 2
description: "Learn Methods and Arugument"
tags: [courses,beginner-level,Ruby,Introduction]
---  
 
Methods can take arguments and return values. By default, the last evaluated expression is returned.

```ruby
def add(a, b)
  return a + b
end

sum = add(5, 3)
puts sum # Output: 8
```

#### Default and Keyword Arguments
Ruby supports default values for arguments and keyword arguments.

```ruby
def greet(name="Guest")
  puts "Hello, #{name}!"
end

greet # Output: Hello, Guest!
greet("Alice") # Output: Hello, Alice!

def order(food:, drink: "water")
  puts "Food: #{food}, Drink: #{drink}"
end

order(food: "Pizza") # Output: Food: Pizza, Drink: water
order(food: "Burger", drink: "Soda") # Output: Food: Burger, Drink: Soda
```

#### Yielding to Blocks
Ruby methods can take blocks and yield to them. Blocks are enclosed in `{}` or `do..end`.

```ruby
def do_something
  puts "Before the yield"
  yield if block_given?
  puts "After the yield"
end

do_something { puts "Hello from the block!" }
# Output:
# Before the yield
# Hello from the block!
# After the yield
```

### Example with Output
Here’s a combined example demonstrating these concepts:

```ruby
def greet(name="Guest", &block)
  message = "Hello, #{name}!"
  if block_given?
    yield(message)
  else
    puts message
  end
end

# Calling the method without a block
greet("Alice")
# Output: Hello, Alice!

# Calling the method with a block
greet("Bob") { |msg| puts msg.upcase }
# Output: HELLO, BOB!
```



:::tip
1. **Method Flexibility:**
   - Methods in Ruby are highly flexible with support for default and keyword arguments, making them powerful and adaptable.

2. **Blocks and Yielding:**
   - Ruby's ability to yield to blocks makes it easy to create methods that can have customized behaviors, enhancing the reusability of code.

3. **Readable and Concise:**
   - Ruby methods promote writing concise and readable code, which is a key principle of Ruby programming, enuring that code is easy to understand and maintain.
:::