---
id: Data-types
title: Data-types in python
sidebar_label: Data-types in python
sidebar_position: 4
tags: [python,data-types, python variables , data type in python]
description: In this tutorial we will learn about data types in python, 
---


## Introduction

In programming, the concept of data types is fundamental. Variables can store data of different types, and different types can perform different operations. Python provides a rich set of built-in data types, each designed for specific purposes. This document explores the various built-in data types in Python, providing detailed descriptions and examples for each type.

## Built-in Data Types

Python has the following built-in data types, categorized as follows:

- **Text Type**: `str`
- **Numeric Types**: `int`, `float`, `complex`
- **Sequence Types**: `list`, `tuple`, `range`
- **Mapping Type**: `dict`
- **Set Types**: `set`, `frozenset`
- **Boolean Type**: `bool`
- **Binary Types**: `bytes`, `bytearray`, `memoryview`
- **None Type**: `NoneType`

## Getting the Data Type

You can get the data type of any object by using the `type()` function:

```python
x = 5
print(type(x))
```

## Setting the Data Type

In Python, the data type is set when you assign a value to a variable:

```python
x = "Hello World"  # str
x = 20            # int
x = 20.5          # float
x = 1j            # complex
x = ["apple", "banana", "cherry"]  # list
x = ("apple", "banana", "cherry")  # tuple
x = range(6)      # range
x = {"name" : "John", "age" : 36}  # dict
x = {"apple", "banana", "cherry"}  # set
x = frozenset({"apple", "banana", "cherry"})  # frozenset
x = True          # bool
x = b"Hello"      # bytes
x = bytearray(5)  # bytearray
x = memoryview(bytes(5))  # memoryview
x = None          # NoneType
```

## Detailed Description of Data Types

### Text Type

#### `str`
A `str` (string) is a sequence of characters enclosed in quotes. Strings can be created using single, double, or triple quotes. They support various methods for manipulation and querying.

Example:
```python
x = "Hello, World!"
print(type(x))  # <class 'str'>
```

### Numeric Types

#### `int`
An `int` (integer) is a whole number, positive or negative, without decimals, of unlimited length.

Example:
```python
x = 20
print(type(x))  # <class 'int'>
```

#### `float`
A `float` is a number, positive or negative, containing one or more decimals.

Example:
```python
x = 20.5
print(type(x))  # <class 'float'>
```

#### `complex`
A `complex` number is a number with a real and an imaginary part, denoted as `x + yj`.

Example:
```python
x = 1j
print(type(x))  # <class 'complex'>
```

### Sequence Types

#### `list`
A `list` is an ordered collection of items which can be of different types. Lists are mutable, meaning their elements can be changed.

Example:
```python
x = ["apple", "banana", "cherry"]
print(type(x))  # <class 'list'>
```

#### `tuple`
A `tuple` is similar to a list, but it is immutable, meaning its elements cannot be changed after creation.

Example:
```python
x = ("apple", "banana", "cherry")
print(type(x))  # <class 'tuple'>
```

#### `range`
A `range` represents a sequence of numbers, and is commonly used for looping a specific number of times in for loops.

Example:
```python
x = range(6)
print(type(x))  # <class 'range'>
```

### Mapping Type

#### `dict`
A `dict` (dictionary) is a collection of key-value pairs, where each key is unique and immutable, and values can be of any type.

Example:
```python
x = {"name": "John", "age": 36}
print(type(x))  # <class 'dict'>
```

### Set Types

#### `set`
A `set` is an unordered collection of unique items. Sets are mutable and support operations like union, intersection, and difference.

Example:
```python
x = {"apple", "banana", "cherry"}
print(type(x))  # <class 'set'>
```

#### `frozenset`
A `frozenset` is an immutable version of a set. Once created, elements cannot be added or removed.

Example:
```python
x = frozenset({"apple", "banana", "cherry"})
print(type(x))  # <class 'frozenset'>
```

### Boolean Type

#### `bool`
A `bool` represents one of two values: `True` or `False`.

Example:
```python
x = True
print(type(x))  # <class 'bool'>
```

### Binary Types

#### `bytes`
A `bytes` object is an immutable sequence of bytes.

Example:
```python
x = b"Hello"
print(type(x))  # <class 'bytes'>
```

#### `bytearray`
A `bytearray` is a mutable sequence of bytes.

Example:
```python
x = bytearray(5)
print(type(x))  # <class 'bytearray'>
```

#### `memoryview`
A `memoryview` object allows Python code to access the internal data of an object that supports the buffer protocol without copying.

Example:
```python
x = memoryview(bytes(5))
print(type(x))  # <class 'memoryview'>
```

### None Type

#### `NoneType`
`NoneType` is the type of the `None` object, which represents the absence of a value.

Example:
```python
x = None
print(type(x))  # <class 'NoneType'>
```

## Additional Information

### Mutable vs Immutable Types

In Python, data types can be categorized as mutable or immutable. Mutable types allow modification after creation, while immutable types do not.

- **Mutable Types**: `list`, `dict`, `set`, `bytearray`
- **Immutable Types**: `str`, `int`, `float`, `tuple`, `frozenset`, `bytes`, `complex`, `bool`, `NoneType`

### Type Conversion

Python provides several built-in functions to convert between data types:

- `int()`: Converts to an integer
- `float()`: Converts to a float
- `str()`: Converts to a string
- `list()`: Converts to a list
- `tuple()`: Converts to a tuple
- `set()`: Converts to a set
- `dict()`: Converts to a dictionary
- `frozenset()`: Converts to a frozenset
- `bool()`: Converts to a boolean
- `bytes()`: Converts to bytes
- `bytearray()`: Converts to a bytearray

Example:
```python
x = 5.5
y = int(x)
print(type(y))  # <class 'int'>
```

### Checking Data Types

You can check the data type of a variable using the `isinstance()` function:

```python
x = 5
print(isinstance(x, int))  # True
```

### Custom Data Types

Python also allows the creation of custom data types using classes. This enables the definition of complex data structures and the implementation of specific behaviors.

Example:
```python
class MyClass:
    def __init__(self, value):
        self.value = value

x = MyClass(5)
print(type(x))  # <class '__main__.MyClass'>
```

## Conclusion

Understanding Python's built-in data types is essential for writing efficient and effective code. Each data type serves a specific purpose and offers unique functionality. By mastering these types, you can leverage Python's full potential to solve complex problems and create powerful applications.