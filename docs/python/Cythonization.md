# Cythonization

Cython, a programming language that makes writing C extensions for Python as easy as Python itself.

1. Cython is a superset of Python that additionally supports calling C functions and declaring C types on variables and class attributes. This allows for the compilation of Python-like code into C or C++.
2. By converting Python code to C ,there are many performance gains.
3. Cython is widely used in scientific computing, data analysis, and machine learning libraries (e.g., NumPy, pandas, and scikit-learn) to improve performance.


Example code :

```cython
def fib(int n):
    cdef int a = 0, b = 1, i
    for i in range(n):
        a, b = b, a + b
    return a
```

Corresponding `python` code

```python
def fib(n):
    a, b = 0, 1
    for i in range(n):
        a, b = b, a + b
    return a
```


#### Using C functions

```cython
from libc.math cimport sin, cos

def trig_sum(double angle):
    return sin(angle) + cos(angle)
```

#### Using classes 

```cython
cdef class Rectangle:
    cdef int width, height

    def __init__(self, int width, int height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height
```

Using `cython` to optimize the `python` code effectively.
