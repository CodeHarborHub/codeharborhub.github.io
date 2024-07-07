---
id: basic-level
title: Basic Level Interview Question
sidebar_label: Basic Level
sidebar_position: 1
tags: [python,Basic level,Interview Question]
description: In this tutorial, you'll overview some basic-level interview questions
---

1. **What is Python? What are the benefits of using Python?**
   - **Answer:** Python is a high-level, interpreted, and general-purpose programming language. Benefits include simplicity and readability, a large standard library, community support, cross-platform compatibility, and a wide range of applications from web development to data analysis.

2. **Explain the difference between lists and tuples in Python.**
   - **Answer:** Lists are mutable (can be changed) and are defined using square brackets `[]`, while tuples are immutable (cannot be changed) and are defined using parentheses `()`.

3. **How do you create a virtual environment in Python?**
   - **Answer:** You can create a virtual environment using the `venv` module:
     ```bash
     python -m venv myenv
     ```
     Activate the environment with:
     - On Windows: `myenv\Scripts\activate`
     - On Unix or MacOS: `source myenv/bin/activate`

4. **What are Python decorators? Give an example.**
   - **Answer:** Decorators are functions that modify the behavior of another function. They are often used to add functionality to existing code in a reusable way.
     ```python
     def my_decorator(func):
         def wrapper():
             print("Something is happening before the function is called.")
             func()
             print("Something is happening after the function is called.")
         return wrapper

     @my_decorator
     def say_hello():
         print("Hello!")

     say_hello()
     ```
     Output:
     ```
     Something is happening before the function is called.
     Hello!
     Something is happening after the function is called.
     ```

5. **How does Python handle memory management?**
   - **Answer:** Python uses a combination of reference counting and a garbage collector to manage memory. The garbage collector can reclaim memory occupied by circular references that are no longer accessible.

6. **What is a lambda function in Python? Provide an example.**
   - **Answer:** A lambda function is a small anonymous function defined with the `lambda` keyword. It can take any number of arguments but has only one expression.
     ```python
     add = lambda x, y: x + y
     print(add(2, 3))  # Output: 5
     ```

7. **What are Python’s built-in data types?**
   - **Answer:** Some of Python’s built-in data types include:
     - `int` (integer)
     - `float` (floating-point number)
     - `str` (string)
     - `list` (list)
     - `tuple` (tuple)
     - `dict` (dictionary)
     - `set` (set)
     - `bool` (boolean)

8. **Explain the difference between `==` and `is` in Python.**
   - **Answer:** `==` checks for value equality (i.e., whether the values of two objects are the same), while `is` checks for identity equality (i.e., whether two references point to the same object in memory).

9. **What is the purpose of the `with` statement in Python?**
   - **Answer:** The `with` statement is used to wrap the execution of a block of code within methods defined by a context manager. It is commonly used for resource management, like opening and closing files.
     ```python
     with open('file.txt', 'r') as file:
         data = file.read()
     ```

10. **What is the difference between `append()` and `extend()` methods in Python lists?**
    - **Answer:** `append()` adds its argument as a single element to the end of a list, whereas `extend()` iterates over its argument, adding each element to the list, extending the list.

    ```python
    list1 = [1, 2, 3]
    list1.append([4, 5])
    print(list1)  # Output: [1, 2, 3, [4, 5]]

    list2 = [1, 2, 3]
    list2.extend([4, 5])
    print(list2)  # Output: [1, 2, 3, 4, 5]
    ```

11. **What is the difference between `range()` and `xrange()` in Python?**
    - **Answer:** In Python 2, `range()` returns a list, whereas `xrange()` returns an xrange object which generates values on the fly (lazy evaluation). In Python 3, `xrange()` is removed and `range()` behaves like `xrange()` from Python 2.

12. **How can you concatenate two strings in Python?**
    - **Answer:** You can concatenate two strings using the `+` operator or the `join()` method.
      ```python
      str1 = "Hello"
      str2 = "World"
      result = str1 + " " + str2
      print(result)  # Output: Hello World

      result = " ".join([str1, str2])
      print(result)  # Output: Hello World
      ```

13. **What is the difference between `remove()`, `pop()`, and `del` in Python lists?**
    - **Answer:**
      - `remove()` removes the first occurrence of a value.
      - `pop()` removes an element at a given index and returns it.
      - `del` removes an element at a given index without returning it.

      ```python
      lst = [1, 2, 3, 4, 5]
      lst.remove(3)
      print(lst)  # Output: [1, 2, 4, 5]

      lst = [1, 2, 3, 4, 5]
      popped_element = lst.pop(2)
      print(popped_element)  # Output: 3
      print(lst)  # Output: [1, 2, 4, 5]

      lst = [1, 2, 3, 4, 5]
      del lst[2]
      print(lst)  # Output: [1, 2, 4, 5]
      ```

14. **What are `*args` and `**kwargs` in Python functions?**
    - **Answer:** `*args` is used to pass a variable number of non-keyword arguments to a function, while `**kwargs` is used to pass a variable number of keyword arguments.
      ```python
      def func(*args, **kwargs):
          print(args)
          print(kwargs)

      func(1, 2, 3, a=4, b=5)
      # Output:
      # (1, 2, 3)
      # {'a': 4, 'b': 5}
      ```

15. **How do you create a dictionary in Python? Provide an example.**
    - **Answer:** A dictionary is created using curly braces `{}` with key-value pairs separated by commas.
      ```python
      my_dict = {
          'name': 'Alice',
          'age': 25,
          'city': 'New York'
      }
      print(my_dict)
      # Output: {'name': 'Alice', 'age': 25, 'city': 'New York'}
      ```

16. **Explain the difference between `local`, `global`, and `nonlocal` variables in Python.**
    - **Answer:**
      - `local` variables are defined within a function and are accessible only within that function.
      - `global` variables are defined outside of any function and are accessible throughout the entire module.
      - `nonlocal` variables are used in nested functions to refer to variables in the nearest enclosing scope that is not global.

      ```python
      x = "global"

      def outer():
          x = "outer local"

          def inner():
              nonlocal x
              x = "inner local"
              print("inner:", x)

          inner()
          print("outer:", x)

      outer()
      print("global:", x)

      # Output:
      # inner: inner local
      # outer: inner local
      # global: global
      ```

17. **What is a module in Python? How do you import a module?**
    - **Answer:** A module is a file containing Python code, which can define functions, classes, and variables. You can import a module using the `import` statement.
      ```python
      import math
      print(math.sqrt(16))  # Output: 4.0
      ```

18. **How do you handle exceptions in Python? Provide an example.**
    - **Answer:** Exceptions in Python are handled using the `try`, `except`, `else`, and `finally` blocks.
      ```python
      try:
          result = 10 / 0
      except ZeroDivisionError:
          print("Cannot divide by zero")
      else:
          print("Division successful")
      finally:
          print("This block is always executed")

      # Output:
      # Cannot divide by zero
      # This block is always executed
      ```

19. **What is the purpose of the `pass` statement in Python?**
    - **Answer:** The `pass` statement is a null operation that is used as a placeholder in loops, functions, classes, or conditionals where syntactically some code is required, but you don't want to execute any code.
      ```python
      def function_that_does_nothing():
          pass
      ```

20. **How can you generate random numbers in Python?**
    - **Answer:** You can generate random numbers using the `random` module.
      ```python
      import random

      print(random.randint(1, 10))  # Generates a random integer between 1 and 10
      print(random.random())        # Generates a random float between 0 and 1
      ```

21. **How do you check the data type of a variable in Python?**
    - **Answer:** You can use the `type()` function to check the data type of a variable.
      ```python
      x = 10
      print(type(x))  # Output: <class 'int'>

      y = "Hello"
      print(type(y))  # Output: <class 'str'>
      ```

22. **What are docstrings in Python? How are they used?**
    - **Answer:** Docstrings are string literals used to document a specific segment of code. They are defined by triple quotes `"""` or `'''` and are placed at the beginning of modules, classes, or functions.
      ```python
      def greet(name):
          """This function greets the person passed in as a parameter"""
          print(f"Hello, {name}")

      print(greet.__doc__)
      # Output: This function greets the person passed in as a parameter
      ```

23. **What are the differences between `__str__` and `__repr__` methods in Python?**
    - **Answer:** `__str__` is used to define a human-readable string representation of an object, while `__repr__` is used to define an official string representation that can be used to recreate the object.
      ```python
      class Person:
          def __init__(self, name, age):
              self.name = name
              self.age = age

          def __str__(self):
              return f"Person(name={self.name}, age={self.age})"

          def __repr__(self):
              return f"Person('{self.name}', {self.age})"

      p = Person("Alice", 30)
      print(str(p))  # Output: Person(name=Alice, age=30)
      print(repr(p))  # Output: Person('Alice', 30)
      ```

24. **What is the difference between `==` and `!=` in Python?**
    - **Answer:** `==` checks if two values are equal, while `!=` checks if two values are not equal.
      ```python
      a = 5
      b = 10

      print(a == b)  # Output: False
      print(a != b)  # Output: True
      ```

25. **How do you convert a string to lowercase or uppercase in Python?**
    - **Answer:** You can use the `lower()` method to convert a string to lowercase and the `upper()` method to convert a string to uppercase.
      ```python
      text = "Hello World"
      print(text.lower())  # Output: hello world
      print(text.upper())  # Output: HELLO WORLD
      ```

26. **What is the difference between `split()` and `join()` methods in Python?**
    - **Answer:** The `split()` method splits a string into a list based on a specified delimiter, while the `join()` method joins the elements of a list into a single string with a specified delimiter.
      ```python
      text = "Hello World"
      words = text.split()
      print(words)  # Output: ['Hello', 'World']

      joined_text = " ".join(words)
      print(joined_text)  # Output: Hello World
      ```

27. **How do you create a set in Python?**
    - **Answer:** A set is created using curly braces `{}` or the `set()` function.
      ```python
      my_set = {1, 2, 3}
      print(my_set)  # Output: {1, 2, 3}

      another_set = set([4, 5, 6])
      print(another_set)  # Output: {4, 5, 6}
      ```

28. **What is the difference between `read()`, `readline()`, and `readlines()` methods in file handling?**
    - **Answer:**
      - `read()` reads the entire file as a single string.
      - `readline()` reads a single line from the file.
      - `readlines()` reads all the lines in a file and returns a list of strings.

      ```python
      with open('file.txt', 'r') as file:
          content = file.read()
          print(content)

      with open('file.txt', 'r') as file:
          line = file.readline()
          print(line)

      with open('file.txt', 'r') as file:
          lines = file.readlines()
          print(lines)
      ```

29. **How do you create a class in Python? Provide an example.**
    - **Answer:** You can create a class using the `class` keyword.
      ```python
      class Dog:
          def __init__(self, name, age):
              self.name = name
              self.age = age

          def bark(self):
              return f"{self.name} is barking!"

      my_dog = Dog("Buddy", 3)
      print(my_dog.bark())  # Output: Buddy is barking!
      ```

30. **What is the use of the `map()` function in Python? Provide an example.**
    - **Answer:** The `map()` function applies a given function to each item in an iterable (like a list) and returns a map object (an iterator).
      ```python
      def square(x):
          return x * x

      numbers = [1, 2, 3, 4]
      squared_numbers = map(square, numbers)

      print(list(squared_numbers))  # Output: [1, 4, 9, 16]
      ```

31. **What is the purpose of the `filter()` function in Python? Provide an example.**
    - **Answer:** The `filter()` function constructs an iterator from elements of an iterable for which a function returns true.
      ```python
      def is_even(n):
          return n % 2 == 0

      numbers = [1, 2, 3, 4, 5, 6]
      even_numbers = filter(is_even, numbers)

      print(list(even_numbers))  # Output: [2, 4, 6]
      ```

32. **What are list comprehensions in Python? Provide an example.**
    - **Answer:** List comprehensions provide a concise way to create lists.
      ```python
      numbers = [1, 2, 3, 4, 5]
      squares = [x * x for x in numbers]
      print(squares)  # Output: [1, 4, 9, 16, 25]
      ```

33. **How do you create a nested dictionary in Python? Provide an example.**
    - **Answer:** A nested dictionary is a dictionary within a dictionary.
      ```python
      nested_dict = {
          'first': {
              'a': 1,
              'b': 2
          },
          'second': {
              'c': 3,
              'd': 4
          }
      }
      print(nested_dict)
      # Output: {'first': {'a': 1, 'b': 2}, 'second': {'c': 3, 'd': 4}}
      ```

34. **What is the difference between mutable and immutable types in Python? Provide examples.**
    - **Answer:** Mutable types can be changed after their creation, while immutable types cannot be changed.
      - **Mutable:** List, Dictionary, Set
        ```python
        my_list = [1, 2, 3]
        my_list[0] = 4
        print(my_list)  # Output: [4, 2, 3]
        ```

      - **Immutable:** Tuple, String, Integer
        ```python
        my_tuple = (1, 2, 3)
        # my_tuple[0] = 4  # This will raise an error

        my_string = "hello"
        # my_string[0] = "H"  # This will raise an error
        ```

35. **How do you reverse a list in Python?**
    - **Answer:** You can reverse a list using the `reverse()` method or slicing.
      ```python
      my_list = [1, 2, 3, 4, 5]
      my_list.reverse()
      print(my_list)  # Output: [5, 4, 3, 2, 1]

      # Using slicing
      reversed_list = my_list[::-1]
      print(reversed_list)  # Output: [1, 2, 3, 4, 5]
      ```

36. **How do you merge two dictionaries in Python?**
    - **Answer:** You can merge two dictionaries using the `update()` method or the `{**dict1, **dict2}` syntax.
      ```python
      dict1 = {'a': 1, 'b': 2}
      dict2 = {'c': 3, 'd': 4}

      # Using update()
      dict1.update(dict2)
      print(dict1)  # Output: {'a': 1, 'b': 2, 'c': 3, 'd': 4}

      # Using {**dict1, **dict2}
      merged_dict = {**dict1, **dict2}
      print(merged_dict)  # Output: {'a': 1, 'b': 2, 'c': 3, 'd': 4}
      ```

37. **What is a lambda function in Python? Provide an example.**
    - **Answer:** A lambda function is an anonymous function defined with the `lambda` keyword.
      ```python
      square = lambda x: x * x
      print(square(5))  # Output: 25
      ```

38. **How do you create an empty set in Python?**
    - **Answer:** You create an empty set using the `set()` function. Using `{}` creates an empty dictionary.
      ```python
      empty_set = set()
      print(empty_set)  # Output: set()
      ```

39. **What is the use of the `enumerate()` function in Python?**
    - **Answer:** The `enumerate()` function adds a counter to an iterable and returns it as an enumerate object.
      ```python
      my_list = ['a', 'b', 'c']
      for index, value in enumerate(my_list):
          print(index, value)
      # Output:
      # 0 a
      # 1 b
      # 2 c
      ```

40. **How do you check if a key exists in a dictionary in Python?**
    - **Answer:** You can use the `in` keyword to check if a key exists in a dictionary.
      ```python
      my_dict = {'a': 1, 'b': 2}
      print('a' in my_dict)  # Output: True
      print('c' in my_dict)  # Output: False
      ```

41. **What is the purpose of the `zip()` function in Python?**
    - **Answer:** The `zip()` function takes iterables (can be zero or more), aggregates them in a tuple, and returns it.
      ```python
      list1 = [1, 2, 3]
      list2 = ['a', 'b', 'c']
      zipped = zip(list1, list2)
      print(list(zipped))  # Output: [(1, 'a'), (2, 'b'), (3, 'c')]
      ```

42. **How do you create a shallow copy and a deep copy of an object in Python?**
    - **Answer:** You can use the `copy` module to create shallow and deep copies.
      ```python
      import copy

      original = [[1, 2, 3], [4, 5, 6]]

      shallow_copy = copy.copy(original)
      deep_copy = copy.deepcopy(original)

      original[0][0] = 99

      print(original)      # Output: [[99, 2, 3], [4, 5, 6]]
      print(shallow_copy)  # Output: [[99, 2, 3], [4, 5, 6]]
      print(deep_copy)     # Output: [[1, 2, 3], [4, 5, 6]]
      ```

43. **What is a generator in Python? Provide an example.**
    - **Answer:** A generator is a special type of iterator that generates values on the fly and uses the `yield` keyword.
      ```python
      def my_generator():
          yield 1
          yield 2
          yield 3

      gen = my_generator()
      for value in gen:
          print(value)
      # Output:
      # 1
      # 2
      # 3
      ```

44. **What are the key differences between Python 2 and Python 3?**
    - **Answer:**
      - Print Statement: In Python 2, `print` is a statement; in Python 3, `print` is a function.
        ```python
        # Python 2
        print "Hello"
        
        # Python 3
        print("Hello")
        ```
      - Integer Division: In Python 2, dividing two integers performs floor division. In Python 3, it performs true division.
        ```python
        # Python 2
        print 5 / 2  # Output: 2
        
        # Python 3
        print(5 / 2)  # Output: 2.5
        ```
      - Unicode: Python 3 uses Unicode by default for strings, whereas Python 2 has ASCII as default.
        ```python
        # Python 2
        print type(u"Hello")  # Output: <type 'unicode'>
        print type("Hello")   # Output: <type 'str'>
        
        # Python 3
        print(type("Hello"))  # Output: <class 'str'>
        ```

45. **How do you use the `itertools` module in Python? Provide an example.**
    - **Answer:** The `itertools` module provides functions for creating iterators for efficient looping.
      ```python
      import itertools

      numbers = [1, 2, 3]
      perm = itertools.permutations(numbers)
      print(list(perm))  # Output: [(1, 2, 3), (1, 3, 2), (2, 1, 3), (2, 3, 1), (3, 1, 2), (3, 2, 1)]
      ```

46. **What is the `global` keyword used for in Python?**
    - **Answer:** The `global` keyword is used to declare that a variable inside a function is global (i.e., not local to the function).
      ```python
      x = 10

      def change_global():
          global x
          x = 20

      change_global()
      print(x)  # Output: 20
      ```

47. **How do you sort a list of tuples based on a specific element?**
    - **Answer:** You can use the `sorted()` function with a `key` parameter.
      ```python
      data = [(1, 'b'), (2, 'a'), (3, 'c')]
      sorted_data = sorted(data, key=lambda x: x[1])
      print(sorted_data)  # Output: [(2, 'a'), (1, 'b'), (3, 'c')]
      ```

48. **What is the difference between `any()` and `all()` functions in Python?**
    - **Answer:** `any()` returns `True` if any element in the iterable is true, whereas `all()` returns `True` if all elements in the iterable are true.
      ```python
      numbers = [0, 1, 2, 3]
      print(any(numbers))  # Output: True
      print(all(numbers))  # Output: False
      ```

49. **How do you remove duplicates from a list in Python?**
    - **Answer:** You can remove duplicates by converting the list to a set and then back to a list.
      ```python
      numbers = [1, 2, 2, 3, 4, 4, 5]
      unique_numbers = list(set(numbers))
      print(unique_numbers)  # Output: [1, 2, 3, 4, 5]
      ```

50. **What is the purpose of the `assert` statement in Python?**
    - **Answer:** The `assert` statement is used for debugging purposes. It tests if a condition is true, and if not, it raises an `AssertionError` with an optional message.
      ```python
      x = 5
      assert x > 0, "x should be positive"
      assert x < 0, "x should be negative"  # This will raise an AssertionError
      ```

51. **What are Python's built-in functions?**
    - **Answer:** Python has many built-in functions like `len()`, `max()`, `min()`, `sum()`, `sorted()`, `print()`, `input()`, `type()`, `int()`, `str()`, and many more. These functions are always available for use.

52. **How do you convert a list of strings to a single string with a delimiter?**
    - **Answer:** You can use the `join()` method to concatenate a list of strings into a single string with a specified delimiter.
      ```python
      words = ['Hello', 'World']
      sentence = ' '.join(words)
      print(sentence)  # Output: Hello World
      ```

53. **What is the use of the `frozenset` in Python?**
    - **Answer:** `frozenset` is an immutable version of a set that cannot be modified after creation.
      ```python
      my_set = frozenset([1, 2, 3])
      print(my_set)  # Output: frozenset({1, 2, 3})
      ```

54. **What are the different ways to handle missing values in a dataset using Python?**
    - **Answer:** Missing values can be handled using various methods such as:
      - Removing rows or columns with missing values.
      - Filling missing values with a specific value, mean, median, or mode.
      - Using forward fill or backward fill.
      ```python
      import pandas as pd
      import numpy as np

      df = pd.DataFrame({
          'A': [1, 2, np.nan, 4],
          'B': [np.nan, 2, 3, 4]
      })

      df.dropna()  # Remove rows with missing values
      df.fillna(0)  # Fill missing values with 0
      df.fillna(method='ffill')  # Forward fill
      ```

55. **How do you create a Pandas DataFrame from a dictionary?**
    - **Answer:** You can create a DataFrame using the `pd.DataFrame()` function with a dictionary.
      ```python
      import pandas as pd

      data = {
          'name': ['Alice', 'Bob', 'Charlie'],
          'age': [25, 30, 35]
      }

      df = pd.DataFrame(data)
      print(df)
      ```

56. **What is the difference between `Series` and `DataFrame` in Pandas?**
    - **Answer:** A `Series` is a one-dimensional labeled array capable of holding any data type, whereas a `DataFrame` is a two-dimensional labeled data structure with columns of potentially different types.

57. **How do you read a CSV file into a Pandas DataFrame?**
    - **Answer:** You can use the `pd.read_csv()` function to read a CSV file into a DataFrame.
      ```python
      import pandas as pd

      df = pd.read_csv('data.csv')
      print(df)
      ```

58. **What are NumPy arrays and how do you create one?**
    - **Answer:** NumPy arrays are n-dimensional arrays that provide fast mathematical operations and efficient memory usage.
      ```python
      import numpy as np

      arr = np.array([1, 2, 3, 4, 5])
      print(arr)  # Output: [1 2 3 4 5]

These questions should provide a comprehensive overview of basic Python concepts and help prepare for an interview. 