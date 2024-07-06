---
id: intermediate-level
title: Intermediate Level Interview Question
sidebar_label: Intermediate Level
sidebar_position: 2
tags: [python,Interview Question,Intermediate Level ]
description: In this tutorial, you'll be focusing on intermediate-level interview questions.
---

1. **Explain the difference between `__str__()` and `__repr__()` methods in Python classes.**
   - **Answer:** 
     - `__str__()` is used to compute the "informal" or nicely printable string representation of an object. It's meant to be readable.
     - `__repr__()` computes the "official" string representation that is intended for debugging and re-creation of the object with `eval()`.
     ```python
     class MyClass:
         def __init__(self, x, y):
             self.x = x
             self.y = y

         def __str__(self):
             return f'MyClass({self.x}, {self.y})'

         def __repr__(self):
             return f'MyClass({self.x}, {self.y})'

     obj = MyClass(10, 20)
     print(str(obj))   # Output: MyClass(10, 20)
     print(repr(obj))  # Output: MyClass(10, 20)
     ```

2. **What are decorators in Python? How do you implement them?**
   - **Answer:** Decorators are functions that modify the functionality of another function or class. They are used to wrap another function or class, adding some additional functionality before or after the original function or class.
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
     # Output:
     # Something is happening before the function is called.
     # Hello!
     # Something is happening after the function is called.
     ```

3. **Explain the concept of `self` in Python.**
   - **Answer:** `self` refers to the instance of a class. It allows you to access the instance's attributes and methods from within the class definition.
     ```python
     class MyClass:
         def __init__(self, x):
             self.x = x

         def print_value(self):
             print(self.x)

     obj = MyClass(10)
     obj.print_value()  # Output: 10
     ```

4. **What are `classmethod` and `staticmethod` in Python?**
   - **Answer:** 
     - `classmethod`: It is a method that is bound to the class rather than the instance of the class. It takes `cls` as the first parameter, which refers to the class itself.
     - `staticmethod`: It is a method that is not bound to either the class or the instance. It behaves like a regular function but is defined inside a class for organizational purposes.
     ```python
     class MyClass:
         class_attr = 10

         @classmethod
         def class_method(cls):
             print(f'Class attribute: {cls.class_attr}')

         @staticmethod
         def static_method():
             print('This is a static method')

     MyClass.class_method()   # Output: Class attribute: 10
     MyClass.static_method()  # Output: This is a static method
     ```

5. **What is method resolution order (MRO) in Python?**
   - **Answer:** Method Resolution Order (MRO) determines the order in which methods are inherited in the presence of multiple inheritance. It is computed using the C3 linearization algorithm.
     ```python
     class A:
         def process(self):
             print('A process()')

     class B(A):
         def process(self):
             print('B process()')

     class C(A):
         def process(self):
             print('C process()')

     class D(B, C):
         pass

     obj = D()
     obj.process()
     # Output: B process()
     ```

6. **Explain the use of `super()` in Python with an example.**
   - **Answer:** `super()` is used to call methods of a superclass (parent class) in a derived class (child class).
     ```python
     class A:
         def greet(self):
             print('Hello from class A')

     class B(A):
         def greet(self):
             super().greet()  # Call greet() method of class A
             print('Hello from class B')

     obj = B()
     obj.greet()
     # Output:
     # Hello from class A
     # Hello from class B
     ```

7. **How do you handle exceptions using `try`, `except`, `else`, and `finally` blocks in Python?**
   - **Answer:** 
     - `try`: It is used to wrap the code that might throw an exception.
     - `except`: It is used to handle the exception if `try` block raises one.
     - `else`: It is executed if the `try` block executes without raising an exception.
     - `finally`: It is always executed whether an exception occurred or not.
     ```python
     try:
         result = 10 / 0
     except ZeroDivisionError:
         print("Cannot divide by zero")
     else:
         print("Division successful")
     finally:
         print("This block is always executed")
     ```

8. **How do you use Python's `logging` module for logging messages?**
   - **Answer:** The `logging` module provides a flexible framework for emitting log messages from Python programs.
     ```python
     import logging

     logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

     logging.debug('This is a debug message')
     logging.info('This is an info message')
     logging.warning('This is a warning message')
     logging.error('This is an error message')
     logging.critical('This is a critical message')
     ```

9. **Explain the difference between `deepcopy()` and `copy()` functions in Python's `copy` module.**
   - **Answer:** 
     - `copy()`: It creates a shallow copy of the object. The copied object itself is new, but the elements within it are references to the original elements.
     - `deepcopy()`: It creates a deep copy of the object. The copied object and its elements are completely new, recursively copied from the original.
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

10. **How do you use list comprehensions in Python? Provide an example.**
    - **Answer:** List comprehensions provide a concise way to create lists.
      ```python
      numbers = [1, 2, 3, 4, 5]
      squares = [x * x for x in numbers if x % 2 == 0]
      print(squares)  # Output: [4, 16]
      ```

11. **What are `lambda` functions in Python? Provide an example.**
    - **Answer:** `lambda` functions are anonymous functions defined with the `lambda` keyword.
      ```python
      square = lambda x: x * x
      print(square(5))  # Output: 25
      ```

12. **How do you sort a dictionary by value in Python?**
    - **Answer:** You can use the `sorted()` function with a custom key to sort a dictionary by its values.
      ```python
      my_dict = {'a': 3, 'b': 1, 'c': 2}
      sorted_dict = dict(sorted(my_dict.items(), key=lambda item: item[1]))
      print(sorted_dict)  # Output: {'b': 1, 'c': 2, 'a': 3}
      ```

13. **What is the purpose of the `__init__()` method in Python classes?**
    - **Answer:** The `__init__()` method (initializer or constructor) is automatically called when a new instance of a class is created. It initializes the object's attributes.
      ```python
      class MyClass:
          def __init__(self, x):
              self.x = x

      obj = MyClass(10)
      print(obj.x)  # Output: 10
      ```

14. **How do you handle file operations (open, read, write, close) in Python?**
    - **Answer:** You can use the `open()` function to open a file, `read()` or `write()` methods to read from or write to it, and `close()` method to close it.
      ```python
      # Reading from a file
      with open('file.txt', 'r') as file:
          content = file.read()
          print(content)

      # Writing to a file
      with open('file.txt', 'w') as file:
          file.write('Hello, World!')
      ```

15. **How do you use regular expressions (`re` module) in Python?**
    - **Answer:** The `re` module provides support for regular expressions in Python.
      ```python
      import re

      text = "Hello, my email is example@email.com"
      pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

      emails = re.findall(pattern, text)
      print(emails)  # Output: ['example@email.com']
      ```

16. **Explain the difference between `asyncio` and `threading` in Python.**
    - **Answer:**
      - `asyncio`: It is a library for writing concurrent code using the `async` and `await` keywords. It is single-threaded and cooperatively multitasks.
      - `threading`: It is a standard module for creating and working with threads. Threads are OS-level lightweight processes, and Python threads are real system threads.
      ```python
      import asyncio
      import threading
      import time

      async def async_task():
          print('Async task starting')
          await asyncio.sleep(2)
          print('Async task done')

      def sync_task():
          print('Sync task starting')
          time.sleep(2)
          print('Sync task done')

      async def main():
          asyncio.create_task(async_task())
          await asyncio.sleep(1)
          threading.Thread(target=sync_task).start()

      asyncio.run(main())
      ```

17. **Explain the concept of `yield` in Python and provide an example of its usage.**
    - **Answer:** `yield` is used inside a function to turn it into a generator. It returns an iterator that generates values lazily as they are requested.
      ```python
      def my_generator():
          yield 1
          yield 2
          yield 3

      gen = my_generator()
      print(next(gen))  # Output: 1
      print(next(gen))  # Output: 2
      print(next(gen))  # Output: 3
      ```

18. **How do you serialize and deserialize Python objects?**
    - **Answer:** Serialization is the process of converting a Python object into a byte stream, and deserialization is the reverse process.
      ```python
      import pickle

      # Serialization
      data = {'name': 'Alice', 'age': 30}
      serialized = pickle.dumps(data)

      # Deserialization
      deserialized = pickle.loads(serialized)
      print(deserialized)  # Output: {'name': 'Alice', 'age': 30}
      ```

19. **What are context managers in Python and how do you use them?**
    - **Answer:** Context managers are objects that enable proper resource management. They are used with the `with` statement.
      ```python
      class MyContextManager:
          def __enter__(self):
              print('Entering context')
              return self

          def __exit__(self, exc_type, exc_val, exc_tb):
              print('Exiting context')

      with MyContextManager() as cm:
          print('Inside the context')
      # Output:
      # Entering context
      # Inside the context
      # Exiting context
      ```

20. **Explain the purpose of `*args` and `**kwargs` in Python function definitions.**
    - **Answer:**
      - `*args`: It allows you to pass a variable number of positional arguments to a function. It collects extra positional arguments into a tuple.
      - `**kwargs`: It allows you to pass a variable number of keyword arguments to a function. It collects extra keyword arguments into a dictionary.
      ```python
      def my_func(*args, **kwargs):
          print(args)    # Tuple of positional arguments
          print(kwargs)  # Dictionary of keyword arguments

      my_func(1, 2, 3, a='apple', b='banana')
      # Output:
      # (1, 2, 3)
      # {'a': 'apple', 'b': 'banana'}
      ```

21. **What are Python decorators with arguments and how do you implement them?**
    - **Answer:** Decorators can take arguments by defining a function that returns a decorator function.
      ```python
      def repeat(num_times):
          def decorator_repeat(func):
              def wrapper(*args, **kwargs):
                  for _ in range(num_times):
                      result = func(*args, **kwargs)
                  return result
              return wrapper
          return decorator_repeat

      @repeat(num_times=3)
      def greet(name):
          print(f'Hello, {name}')

      greet('Alice')
      # Output:
      # Hello, Alice
      # Hello, Alice
      # Hello, Alice
      ```

22. **Explain the use of `collections` module in Python with examples.**
    - **Answer:** The `collections` module provides alternatives to Python's built-in data structures like dictionaries, lists, sets, and tuples.
      ```python
      from collections import defaultdict, namedtuple, Counter, deque

      # defaultdict
      colors = defaultdict(int)
      colors['red'] += 1
      print(colors['red'])  # Output: 1

      # namedtuple
      Point = namedtuple('Point', ['x', 'y'])
      p = Point(1, 2)
      print(p.x, p.y)  # Output: 1 2

      # Counter
      counts = Counter(['a', 'b', 'a', 'c'])
      print(counts['a'])  # Output: 2

      # deque
      d = deque([1, 2, 3])
      d.appendleft(0)
      print(d)  # Output: deque([0, 1, 2, 3])
      ```

23. **How do you use the `__slots__` attribute in Python classes?**
    - **Answer:** `__slots__` is used to explicitly declare instance attributes. It can save memory by preventing the creation of instance dictionaries for attributes.
      ```python
      class MyClass:
          __slots__ = ['x', 'y']

          def __init__(self, x, y):
              self.x = x
              self.y = y

      obj = MyClass(10, 20)
      print(obj.x, obj.y)  # Output: 10 20
      ```

24. **Explain the purpose of the `@property` decorator in Python.**
    - **Answer:** `@property` is used to define a method as a property of a class. It allows you to define a method that can be accessed like an attribute.
      ```python
      class Circle:
          def __init__(self, radius):
              self.radius = radius

          @property
          def diameter(self):
              return self.radius * 2

      circle = Circle(5)
      print(circle.diameter)  # Output: 10
      ```

25. **What are some best practices for writing Python code?**
    - **Answer:** 
      - Use meaningful variable and function names.
      - Follow PEP 8 style guide for code readability.
      - Write docstrings for all public modules, functions, classes, and methods.
      - Use list comprehensions and generator expressions instead of loops where possible.
      - Avoid using `global` variables unless absolutely necessary.
      - Write unit tests for your code using `unittest` or `pytest`.
      - Use virtual environments (`venv` or `conda`) for project isolation.

26. **How do you profile Python code for performance optimization?**
    - **Answer:** You can use Python's built-in `cProfile` module or external tools like `line_profiler` and `memory_profiler` to profile code and identify bottlenecks.
      ```python
      import cProfile

      def my_function():
          # Function code

      cProfile.run('my_function()')
      ```

27. **Explain the GIL (Global Interpreter Lock) in Python and its impact on multi-threaded programs.**
    - **Answer:** The GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes simultaneously. It can impact multi-threaded programs by limiting CPU-bound concurrency but does not affect I/O-bound tasks or multiprocessing.

28. **What are some differences between Python's `asyncio` and `multiprocessing` modules for concurrency?**
    - **Answer:**
      - `asyncio`: It is used for asynchronous programming with coroutines and event loops, suitable for I/O-bound tasks.
      - `multiprocessing`: It is used for parallelism by spawning multiple OS-level processes, suitable for CPU-bound tasks.
      ```python
      import asyncio
      import multiprocessing

      async def async_task():
          # Asynchronous task

      def sync_task():
          # Synchronous task

      # Example asyncio usage
      asyncio.run(async_task())

      # Example multiprocessing usage
      p = multiprocessing.Process(target=sync_task)
      p.start()
      ```

29. **How do you manage Python dependencies in a project?**
    - **Answer:** Use a package manager like `pip` and create a `requirements.txt` file listing all dependencies. Use `virtual environments` (`venv` or `conda`) to isolate project dependencies.

30. **Explain how Python's `unittest` and `pytest` frameworks are used for testing.**
    - **Answer:** 
      - `unittest`: It is Python's built-in unit testing framework, supporting test automation, sharing of setups, and shutdown code.
      - `pytest`: It is a third-party testing framework with features like fixtures, parameterization, and easy plugin integration.
      ```python
      import unittest

      class MyTestCase(unittest.TestCase):
          def test_addition(self):
              self.assertEqual(1 + 1, 2)

      if __name__ == '__main__':
          unittest.main()

      # Example using pytest
      # test_my_module.py
      import pytest

      def test_addition():
          assert 1 + 1 == 2

      # Run with pytest command
      ```

31. **Explain the use of `__new__()` and `__init__()` methods in Python classes.**
    - **Answer:**
      - `__new__()` method: It is responsible for creating a new instance of a class. It is a static method and is called before `__init__()` when an object is created.
      - `__init__()` method: It initializes the newly created object. It is called after the object has been created by `__new__()`.
      ```python
      class MyClass:
          def __new__(cls, *args, **kwargs):
              print('Creating instance')
              instance = super().__new__(cls)
              return instance

          def __init__(self, x):
              print('Initializing instance')
              self.x = x

      obj = MyClass(10)
      # Output:
      # Creating instance
      # Initializing instance
      ```

32. **How do you handle circular imports in Python?**
    - **Answer:** Circular imports occur when two or more modules import each other directly or indirectly. You can resolve them by restructuring code or using `import` statements within functions.
      ```python
      # Module A
      from module_b import func_b

      def func_a():
          func_b()

      # Module B
      from module_a import func_a

      def func_b():
          func_a()
      ```

33. **Explain the concept of metaclasses in Python with an example.**
    - **Answer:** Metaclasses are classes whose instances are classes themselves. They define the behavior of classes. Example using `type` as a metaclass:
      ```python
      class MyMeta(type):
          def __new__(cls, name, bases, dct):
              dct['attr'] = 100
              return super().__new__(cls, name, bases, dct)

      class MyClass(metaclass=MyMeta):
          pass

      print(MyClass.attr)  # Output: 100
      ```

34. **What are Python's magic methods (`__magic__`)? Provide examples of their usage.**
    - **Answer:** Magic methods are special methods in Python that are surrounded by double underscores. They allow customization of classes to support various operations and behaviors.
      ```python
      class Vector:
          def __init__(self, x, y):
              self.x = x
              self.y = y

          def __add__(self, other):
              return Vector(self.x + other.x, self.y + other.y)

          def __str__(self):
              return f'({self.x}, {self.y})'

      v1 = Vector(1, 2)
      v2 = Vector(3, 4)
      print(v1 + v2)  # Output: (4, 6)
      ```

35. **Explain the purpose of the `sys` module in Python.**
    - **Answer:** The `sys` module provides access to system-specific parameters and functions. It can be used to interact with the interpreter and operating system.
      ```python
      import sys

      print(sys.version)     # Output: Python version
      print(sys.platform)    # Output: Operating system platform
      print(sys.argv)        # Output: Command line arguments
      ```

36. **What is the purpose of Python's `itertools` module? Provide examples of its usage.**
    - **Answer:** The `itertools` module provides functions that create iterators for efficient looping. Examples include `count()`, `cycle()`, `chain()`, and `permutations()`.
      ```python
      import itertools

      # Example of itertools.count()
      for i in itertools.count(1, 2):
          if i > 10:
              break
          print(i)  # Output: 1, 3, 5, 7, 9

      # Example of itertools.chain()
      list1 = [1, 2, 3]
      list2 = ['a', 'b', 'c']
      combined = itertools.chain(list1, list2)
      print(list(combined))  # Output: [1, 2, 3, 'a', 'b', 'c']
      ```

37. **How do you implement multiple inheritance in Python? What is the Method Resolution Order (MRO)?**
    - **Answer:** Multiple inheritance allows a class to inherit from multiple base classes. The MRO defines the order in which base classes are searched when looking for a method or attribute.
      ```python
      class A:
          def process(self):
              print('A process()')

      class B(A):
          def process(self):
              print('B process()')

      class C(A):
          def process(self):
              print('C process()')

      class D(B, C):
          pass

      obj = D()
      obj.process()
      # Output: B process()
      ```

38. **Explain the concept of Python's `async` and `await` keywords for asynchronous programming.**
    - **Answer:** `async` is used to define asynchronous functions (coroutines), and `await` is used to pause execution of an asynchronous function until a coroutine completes.
      ```python
      import asyncio

      async def async_task():
          print('Task 1')
          await asyncio.sleep(1)
          print('Task 2')

      asyncio.run(async_task())
      # Output:
      # Task 1
      # (1 second delay)
      # Task 2
      ```

39. **What are `__slots__` and when would you use them in Python?**
    - **Answer:** `__slots__` is used to explicitly declare instance attributes. It can save memory by preventing the creation of instance dictionaries for attributes.
      ```python
      class MyClass:
          __slots__ = ['x', 'y']

          def __init__(self, x, y):
              self.x = x
              self.y = y

      obj = MyClass(10, 20)
      print(obj.x, obj.y)  # Output: 10 20
      ```

40. **Explain the purpose of the `functools` module in Python and provide examples of its usage.**
    - **Answer:** The `functools` module provides higher-order functions for functional programming tasks. Examples include `partial()`, `reduce()`, and `lru_cache()`.
      ```python
      from functools import lru_cache

      @lru_cache(maxsize=32)
      def fib(n):
          if n < 2:
              return n
          return fib(n-1) + fib(n-2)

      print(fib(10))  # Output: 55
      ```

41. **Explain the difference between `os.path.join()` and `os.path.abspath()` in Python.**
    - **Answer:**
      - `os.path.join()`: It joins one or more path components intelligently using the correct separator for the operating system.
      - `os.path.abspath()`: It returns the absolute pathname of a given path, resolving any symbolic links if present.
      ```python
      import os

      path = os.path.join('/Users', 'Alice', 'Documents', 'file.txt')
      print(path)  # Output: '/Users/Alice/Documents/file.txt'

      abs_path = os.path.abspath('file.txt')
      print(abs_path)  # Output: '/Users/Alice/Documents/file.txt'
      ```

42. **How do you handle JSON data in Python? Provide an example.**
    - **Answer:** Python's `json` module provides functions to encode Python objects as JSON strings and decode JSON strings into Python objects.
      ```python
      import json

      # Encoding Python object to JSON
      data = {'name': 'Alice', 'age': 30}
      json_str = json.dumps(data)
      print(json_str)  # Output: '{"name": "Alice", "age": 30}'

      # Decoding JSON to Python object
      decoded_data = json.loads(json_str)
      print(decoded_data)  # Output: {'name': 'Alice', 'age': 30}
      ```

43. **What are Python decorators used for, and how do you define a decorator with arguments?**
    - **Answer:** Decorators are used to modify the behavior of functions or methods. Decorators with arguments are defined using a nested function that returns a decorator function.
      ```python
      def repeat(num_times):
          def decorator_repeat(func):
              def wrapper(*args, **kwargs):
                  for _ in range(num_times):
                      result = func(*args, **kwargs)
                  return result
              return wrapper
          return decorator_repeat

      @repeat(num_times=3)
      def greet(name):
          print(f'Hello, {name}')

      greet('Alice')
      # Output:
      # Hello, Alice
      # Hello, Alice
      # Hello, Alice
      ```

44. **Explain the purpose of Python's `pickle` module.**
    - **Answer:** The `pickle` module is used for serializing and deserializing Python objects. It can convert Python objects into a byte stream and vice versa.
      ```python
      import pickle

      # Serialize Python object to byte stream
      data = {'name': 'Alice', 'age': 30}
      serialized = pickle.dumps(data)

      # Deserialize byte stream back to Python object
      deserialized = pickle.loads(serialized)
      print(deserialized)  # Output: {'name': 'Alice', 'age': 30}
      ```

45. **What is a Python virtual environment (`venv`), and why would you use it?**
    - **Answer:** A virtual environment (`venv`) is a self-contained directory that contains a Python installation for a specific version of Python, along with its own set of installed packages. It is used to isolate dependencies and project environments.
      ```bash
      # Creating a virtual environment
      python -m venv myenv

      # Activating the virtual environment (Windows)
      myenv\Scripts\activate

      # Activating the virtual environment (Unix/MacOS)
      source myenv/bin/activate
      ```

46. **Explain the use of Python's `requests` module for making HTTP requests.**
    - **Answer:** The `requests` module allows you to send HTTP requests easily and handle the responses.
      ```python
      import requests

      # Making a GET request
      response = requests.get('https://jsonplaceholder.typicode.com/posts/1')
      print(response.status_code)  # Output: 200
      print(response.json())       # Output: JSON response content
      ```

47. **How do you implement a simple Flask application in Python?**
    - **Answer:** Flask is a lightweight web framework for Python. Here's an example of a simple Flask application:
      ```python
      from flask import Flask

      app = Flask(__name__)

      @app.route('/')
      def hello():
          return 'Hello, World!'

      if __name__ == '__main__':
          app.run(debug=True)
      ```

48. **What are context managers in Python, and how do you create one using the `contextlib` module?**
    - **Answer:** Context managers in Python are objects that enable proper resource management using the `with` statement. You can create a context manager using the `contextlib` module's `contextmanager` decorator.
      ```python
      from contextlib import contextmanager

      @contextmanager
      def file_manager(filename, mode):
          try:
              file = open(filename, mode)
              yield file
          finally:
              file.close()

      with file_manager('example.txt', 'w') as f:
          f.write('Hello, World!')
      ```

49. **How do you use Python's `argparse` module for command-line argument parsing?**
    - **Answer:** The `argparse` module makes it easy to write user-friendly command-line interfaces. It parses arguments and options from the command line.
      ```python
      import argparse

      parser = argparse.ArgumentParser(description='Process some integers.')
      parser.add_argument('integers', metavar='N', type=int, nargs='+',
                          help='an integer for the accumulator')
      parser.add_argument('--sum', dest='accumulate', action='store_const',
                          const=sum, default=max,
                          help='sum the integers (default: find the max)')

      args = parser.parse_args()
      print(args.accumulate(args.integers))
      ```

50. **Explain the use of `@staticmethod` and `@classmethod` decorators in Python.**
    - **Answer:**
      - `@staticmethod`: It defines a static method that does not operate on instances of a class and does not have access to `self` or `cls`.
      - `@classmethod`: It defines a class method that operates on the class itself rather than instances. It takes `cls` as the first parameter.
      ```python
      class MyClass:
          class_attr = 10

          @staticmethod
          def static_method():
              print('This is a static method')

          @classmethod
          def class_method(cls):
              print(f'Class attribute: {cls.class_attr}')

      MyClass.static_method()   # Output: This is a static method
      MyClass.class_method()    # Output: Class attribute: 10
      ```

These questions cover various intermediate-level topics in Python that are frequently asked in interviews. 