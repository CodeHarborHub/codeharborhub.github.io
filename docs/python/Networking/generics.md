---
id: generics
title: Generics
sidebar_label: Generics
sidebar_position: 4
tags: [python, generics, type hints, type safety, code flexibility]
description: In this tutorial, you will learn about generics in Python. We will cover how to define functions, classes, or methods that can operate on multiple types while maintaining type safety using type hints and type variables.
---

In Python, generics is a mechanism with which you to define functions, classes, or methods that can operate on multiple types while maintaining type safety. With the implementation of Generics enable it is possible to write reusable code that can be used with different data types. It ensures promoting code flexibility and type correctness.

Generics in Python are implemented using type hints. This feature was introduced in Python with version 3.5 onwards.

Normally, you don't need to declare a variable type. The type is determined dynamically by the value assigned to it. Python's interpreter doesn't perform type checks and hence it may raise runtime exceptions.

Python's new type hinting feature helps in prompting the user with the expected type of the parameters to be passed.

Type hints allow you to specify the expected types of variables, function arguments, and return values. Generics extend this capability by introducing type variables, which represent generic types that can be replaced with specific types when using the generic function or class.

## Example 1

Let us have a look at the following example that defines a generic function −

```python
from typing import List, TypeVar

T = TypeVar('T')

def reverse(items: List[T]) -> List[T]:
   return items[::-1]
```

Here, we define a generic function called 'reverse'. The function takes a list ('List[T]') as an argument and returns a list of the same type. The type variable 'T' represents the generic type, which will be replaced with a specific type when the function is used.

## Example 2

The function `reverse()` function is called with different data types −

```python
numbers = [1, 2, 3, 4, 5]
reversed_numbers = reverse(numbers)
print(reversed_numbers)

fruits = ['apple', 'banana', 'cherry']
reversed_fruits = reverse(fruits)
print(reversed_fruits)
```

It will produce the following output −

```
[5, 4, 3, 2, 1]
['cherry', 'banana', 'apple']
```

## Example 3

The following example uses generics with a generic class −

```python
from typing import TypeVar, Generic

T = TypeVar('T')

class Box(Generic[T]):
   def __init__(self, item: T):
      self.item = item

   def get_item(self) -> T:
      return self.item
```

Let us create objects of the above generic class with `int` and `str` type

```python
box1 = Box(42)
print(box1.get_item())

box2 = Box('Hello')
print(box2.get_item())
```

It will produce the following output −

```
42
Hello
```