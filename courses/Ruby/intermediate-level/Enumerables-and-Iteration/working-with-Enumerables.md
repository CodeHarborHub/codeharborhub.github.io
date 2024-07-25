---
id: lesson-1
title: "Enumerables and Iterators in Rubyr"
sidebar_label: Enumerables
sidebar_position: 1
description: "Learn Enumerables and Iterators in Ruby"
tags: [courses,intermediate-level,Ruby,Introduction]
---  
  

Ruby provides robust support for working with collections through the `Enumerable` module. Here’s how you can utilize various enumerable methods and custom iterators.

#### Working with Enumerables

A class needs to include the `Enumerable` module and implement the `each` method to use enumerable methods.

```ruby
class CustomCollection
  include Enumerable
  
  def initialize(items)
    @items = items
  end

  def each(&block)
    @items.each(&block)
  end
end

collection = CustomCollection.new([1, 2, 3, 4, 5])
collection.each { |item| puts item }
```

**Output:**

```bash
1
2
3
4
5
```

#### Common Enumerable Methods

- **`map`**: Transforms elements based on the given block.

```ruby
numbers = [1, 2, 3, 4, 5]
squared_numbers = numbers.map { |n| n ** 2 }
puts squared_numbers.inspect
```

**Output:**

```bash
[1, 4, 9, 16, 25]
```

- **`select`**: Filters elements based on the given block.

```ruby
even_numbers = numbers.select { |n| n.even? }
puts even_numbers.inspect
```

**Output:**

```bash
[2, 4]
```

- **`reduce`**: Reduces elements to a single value based on the given block.

```ruby
sum = numbers.reduce(0) { |acc, n| acc + n }
puts sum
```

**Output:**

```bash
15
```
