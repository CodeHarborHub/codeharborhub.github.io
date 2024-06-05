---
id: loops
title: Python Loops
sidebar_label: Loops in python
sidebar_position: 7
tags: [python, loops]
---

# Python Loops

Python has two primitive loop commands:

- while loops
- for loops

## The while Loop

With the `while` loop, we can execute a set of statements as long as a condition is true.

### Example

```python
i = 1
while i < 6:
  print(i)
  i += 1
```

The `while` loop requires relevant variables to be ready, in this example we need to define an indexing variable, `i`, which we set to 1.

### The break Statement

With the `break` statement, we can stop the loop even if the `while` condition is true.

#### Example

```python
i = 1
while i < 6:
  print(i)
  if i == 3:
    break
  i += 1
```

### The continue Statement

With the `continue` statement, we can stop the current iteration and continue with the next.

#### Example

```python
i = 0
while i < 6:
  i += 1
  if i == 3:
    continue
  print(i)
```

### The else Statement

With the `else` statement, we can run a block of code once when the condition no longer is true.

#### Example

```python
i = 1
while i < 6:
  print(i)
  i += 1
else:
  print("i is no longer less than 6")
```

## Python For Loops

A `for` loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).

### Example

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
```

The `for` loop does not require an indexing variable to be set beforehand.

### Looping Through a String

Even strings are iterable objects; they contain a sequence of characters.

#### Example

```python
for x in "banana":
  print(x)
```

### The break Statement

With the `break` statement, we can stop the loop before it has looped through all the items.

#### Example

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
  if x == "banana":
    break
```

### The continue Statement

With the `continue` statement, we can stop the current iteration of the loop and continue with the next.

#### Example

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  if x == "banana":
    continue
  print(x)
```

### The range() Function

To loop through a set of code a specified number of times, we can use the `range()` function. The `range()` function returns a sequence of numbers starting from 0 by default, and increments by 1 (by default), and ends at a specified number.

#### Example

```python
for x in range(6):
  print(x)
```

### Else in For Loop

The `else` keyword in a `for` loop specifies a block of code to be executed when the loop is finished.

#### Example

```python
for x in range(6):
  print(x)
else:
  print("Finally finished!")
```

### Nested Loops

A nested loop is a loop inside a loop.

![nested loop](https://geekpython.in/wp-content/uploads/2023/08/nested-for-loop.png)
#### Example

```python
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y)
```

### The pass Statement

`for` loops cannot be empty, but if you, for some reason, have a `for` loop with no content, put in the `pass` statement to avoid getting an error.

#### Example

```python
for x in [0, 1, 2]:
  pass
```

This documentation covers the basics of Python loops, including `while` and `for` loops, along with control flow statements like `break`, `continue`, and `else`. Examples are provided for each concept to illustrate their usage effectively.