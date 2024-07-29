# Decorators 

Decorators in Python are a powerful and flexible feature that allows you to modify or enhance the behavior of functions or classes. They are essentially functions that wrap other functions or methods, allowing you to add functionality before, after, or around the original function's behavior.

#### Syntax 

Decorators use the `@decorator_name` syntax above the function definition.

### Types of Decorators 

**1. Built-in  Function Decorators**

- `@staticmethod`: Defines a method that does not operate on an instance of the class or modify its state.
- `@classmethod`: Defines a method that operates on the class itself, rather than an instance.
- `@property`: Allows you to define methods in a class that can be accessed like attributes.

```python
class MyClass:
    def __init__(self, value):
        self._value = value

    @property
    def value(self):
        return self._value

    @value.setter
    def value(self, new_value):
        self._value = new_value

    @staticmethod
    def static_method():
        print("This is a static method.")

    @classmethod
    def class_method(cls):
        print("This is a class method.")
```

**2. Custom Function Decorators:**

- Simple Function Decorators :Adds functionality to a function.
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
- Decorator with Arguments: Takes arguments to modify the behavior.
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
    print(f"Hello {name}")

  greet("Alice")
  ```
Here, `*args` and `**kwargs` are special syntax in Python that allow a function to accept an arbitrary number of positional and keyword arguments.

**3. Class Decorators:**

Instead of taking functions as the decorators , here we use the class definition as the decorator.

```python
def class_decorator(cls):
    class Wrapped(cls):
        def new_method(self):
            return "New Method"
    return Wrapped

@class_decorator
class MyClass:
    def original_method(self):
        return "Original Method"

instance = MyClass()
print(instance.original_method())
print(instance.new_method())
```

### Decorators Chaining

You can apply multiple decorators to a single function. Decorators are applied from bottom to top.

```python
def decorator1(func):
    def wrapper():
        print("Decorator 1")
        func()
    return wrapper

def decorator2(func):
    def wrapper():
        print("Decorator 2")
        func()
    return wrapper

@decorator1
@decorator2
def my_function():
    print("Hello!")

my_function()
```


# Lambda Functions

Lambda functions in Python, also known as anonymous functions, are small, unnamed functions defined using the `lambda` keyword.

#### Syntax 

```python
lambda arguments: expression
```

#### Example: 

```python
from functools import reduce

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter even numbers, square them, and then find their product
even_squares_product = reduce(
    lambda x, y: x * y,
    map(lambda x: x**2, filter(lambda x: x % 2 == 0, numbers))
)

print(even_squares_product)  # Output: 64 * 16 * 36 * 100 = 3686400
```


  
