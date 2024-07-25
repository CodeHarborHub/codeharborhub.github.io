---
id: lesson-1
title: "Introduction to Arrays"
sidebar_label: Arrays
sidebar_position: 1
description: "Introduction to Arrays"
tags: [courses,beginner-level,Ruby,Introduction]
--- 
 
Arrays in Ruby are ordered, integer-indexed collections of objects. They can hold objects of any type.

```ruby
# Creating an array
numbers = [1, 2, 3, 4, 5]

# Accessing elements
puts numbers[0] # Output: 1

# Modifying elements
numbers[2] = 99
puts numbers.inspect # Output: [1, 2, 99, 4, 5]
```

#### Array Methods and Operations
Ruby provides a rich set of methods to manipulate arrays.

```ruby
# Adding elements
numbers.push(6)
numbers << 7
puts numbers.inspect # Output: [1, 2, 99, 4, 5, 6, 7]

# Removing elements
numbers.pop
puts numbers.inspect # Output: [1, 2, 99, 4, 5, 6]

# Iterating over elements
numbers.each do |num|
  puts num
end

# Selecting elements
even_numbers = numbers.select { |num| num.even? }
puts even_numbers.inspect # Output: [2, 4, 6]
```