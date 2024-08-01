---
id: Magic-Methods
title: Magic Methods in Python
sidebar_label: Magic Methods 
---

Magic methods, also known as dunder (double underscore) methods, are special methods in Python that start and end with double underscores (`__`). 
These methods allow you to define the behavior of objects for built-in operations and functions, enabling you to customize how your objects interact with the 
language's syntax and built-in features. Magic methods make your custom classes integrate seamlessly with Python’s built-in data types and operations.

**Commonly Used Magic Methods**

1. **Initialization and Representation**
   - `__init__(self, ...)`: Called when an instance of the class is created. Used for initializing the object's attributes.
   - `__repr__(self)`: Returns a string representation of the object, useful for debugging and logging.
   - `__str__(self)`: Returns a human-readable string representation of the object.

**Example** :

   ```python
   class Person:
       def __init__(self, name, age):
           self.name = name
           self.age = age

       def __repr__(self):
           return f"Person({self.name}, {self.age})"

       def __str__(self):
           return f"{self.name}, {self.age} years old"

   p = Person("Alice", 30)
   print(repr(p))
   print(str(p))  
   ```

**Output** :
```python
Person("Alice",30)
Alice, 30 years old
```

2. **Arithmetic Operations**
   - `__add__(self, other)`: Defines behavior for the `+` operator.
   - `__sub__(self, other)`: Defines behavior for the `-` operator.
   - `__mul__(self, other)`: Defines behavior for the `*` operator.
   - `__truediv__(self, other)`: Defines behavior for the `/` operator.


**Example** :

   ```python
   class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        """Add two points."""
        return Point(self.x + other.x, self.y + other.y)

    def __sub__(self, other):
        """Subtract two points."""
        return Point(self.x - other.x, self.y - other.y)

    def __mul__(self, scalar):
        """Multiply point by a scalar."""
        return Point(self.x * scalar, self.y * scalar)

    def __truediv__(self, scalar):
        """Divide point by a scalar."""
        return Point(self.x / scalar, self.y / scalar)

    def __repr__(self):
        """Return a string representation of the point."""
        return f"Point({self.x}, {self.y})"

    # Example usage:
    p1 = Point(2, 3)
    p2 = Point(4, 5)

    # Add points
    p3 = p1 + p2
    print(p3)  # Output: Point(6, 8)

    # Subtract points
    p4 = p1 - p2
    print(p4)  # Output: Point(-2, -2)

    # Multiply point by a scalar
    p5 = p1 * 3
    print(p5)  # Output: Point(6, 9)

    # Divide point by a scalar
    p6 = p2 / 2
    print(p6)  # Output: Point(2.0, 2.5)

   ```

3. **Comparison Operations**
   - `__eq__(self, other)`: Defines behavior for the `==` operator.
   - `__lt__(self, other)`: Defines behavior for the `<` operator.
   - `__le__(self, other)`: Defines behavior for the `<=` operator.

**Example** :

   ```python
   class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __eq__(self, other):
        """Check if two points are equal."""
        return self.x == other.x and self.y == other.y

    def __ne__(self, other):
        """Check if two points are not equal."""
        return not self.__eq__(other)

    def __lt__(self, other):
        """Check if this point is less than another point."""
        return (self.x, self.y) < (other.x, other.y)

    def __le__(self, other):
        """Check if this point is less than or equal to another point."""
        return (self.x, self.y) <= (other.x, other.y)

    def __gt__(self, other):
        """Check if this point is greater than another point."""
        return (self.x, self.y) > (other.x, other.y)

    def __ge__(self, other):
        """Check if this point is greater than or equal to another point."""
        return (self.x, self.y) >= (other.x, other.y)

    def __repr__(self):
        """Return a string representation of the point."""
        return f"Point({self.x}, {self.y})"

    # Example usage:
    p1 = Point(2, 3)
    p2 = Point(4, 5)
    p3 = Point(2, 3)

    # Equality
    print(p1 == p2)  # Output: False
    print(p1 == p3)  # Output: True

    # Inequality
    print(p1 != p2)  # Output: True
    print(p1 != p3)  # Output: False

    # Less than
    print(p1 < p2)   # Output: True
    print(p1 < p3)   # Output: False

    # Less than or equal to
    print(p1 <= p2)  # Output: True
    print(p1 <= p3)  # Output: True

    # Greater than
    print(p1 > p2)   # Output: False
    print(p1 > p3)   # Output: False

    # Greater than or equal to
    print(p1 >= p2)  # Output: False
    print(p1 >= p3)  # Output: True

   ```

5. **Container and Sequence Methods**

   - `__len__(self)`: Defines behavior for the `len()` function.
   - `__getitem__(self, key)`: Defines behavior for indexing (`self[key]`).
   - `__setitem__(self, key, value)`: Defines behavior for item assignment (`self[key] = value`).
   - `__delitem__(self, key)`: Defines behavior for item deletion (`del self[key]`).

**Example** :

   ```python
   class CustomList:
       def __init__(self, *args):
           self.items = list(args)

       def __len__(self):
           return len(self.items)

       def __getitem__(self, index):
           return self.items[index]

       def __setitem__(self, index, value):
           self.items[index] = value

       def __delitem__(self, index):
           del self.items[index]

       def __repr__(self):
           return f"CustomList({self.items})"

   cl = CustomList(1, 2, 3)
   print(len(cl))
   print(cl[1])    
   cl[1] = 5
   print(cl)
   del cl[1]
   print(cl)      
   ```

**Output** :
```python
3
2
CustomList([1, 5, 3])
CustomList([1, 3])
```

## Conclusion
Magic methods provide powerful ways to customize the behavior of your objects and make them work 
seamlessly with Python's syntax and built-in functions. 
Use them judiciously to enhance the functionality and readability of your classes.