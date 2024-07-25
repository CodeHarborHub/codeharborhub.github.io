---
id: lesson-2
title: "Custom Iterators with Enumerator"
sidebar_label: Custom Iterators with Enumerator
sidebar_position: 2
description: "Learn Custom Iterators with Enumerator"
tags: [courses,intermediate-level,Ruby,Introduction]
---  
 

You can create custom iterators using the `Enumerator` class.

```ruby
enum = Enumerator.new do |yielder|
  (1..5).each { |i| yielder << i }
end

enum.each { |item| puts item }
```

**Output:**

```bash
1
2
3
4
5
```

#### Lazy Enumerables

Lazy enumerables are useful for working with large data sets as they allow processing data on-demand.

```ruby
lazy_numbers = (1..Float::INFINITY).lazy.select { |n| n.even? }.take(5)
lazy_numbers.each { |n| puts n }
```

**Output:**

```bash
2
4
6
8
10
``` 
:::tip

1. **Leverage Built-in Methods**:
   - Ruby’s `Enumerable` module provides a rich set of methods like `map`, `select`, `reduce`, and `reject` that can simplify many common operations on collections. Always consider using these built-in methods for concise and readable code.

2. **Custom Iterators**:
   - When implementing custom iterators, ensure you define the `each` method properly to yield each element to the block. This allows your class to work seamlessly with enumerable methods and provides greater flexibility for custom data structures.

3. **Use Lazy Enumerables for Large Data**:
   - When working with potentially large data sets or expensive operations, use lazy enumerables to defer computation and process items on-demand. This can significantly improve performance and reduce memory usage by avoiding the creation of intermediate collections.
:::