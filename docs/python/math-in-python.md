---
id: math-in-python
title: Math with Python
sidebar_label: Math with Python
sidebar_position: 4
tags: [python, programming, language, introduction, math, features, applications, libraries, community, open-source, object-oriented, interpreted, cross-platform, scalable]
description: In this tutorial, we will learn about math and math operations with Python, with deep details of the math module and its functions.
---

# Working with Math in Python

Python is known for its simplicity and versatility, which extends to its handling of mathematical operations. Python provides a built-in module called `math` for performing mathematical functions. In this tutorial, we will explore various aspects of working with the `math` module in Python, including basic arithmetic, advanced functions, trigonometry, and more.

## Introduction to the Math Module

The `math` module provides access to mathematical functions and constants defined by the C standard. To use these functions, you need to import the module.

```python
import math
```

The `math` module includes a wide variety of mathematical functions, from basic arithmetic to complex operations.

## Basic Arithmetic Functions

The `math` module provides several functions for basic arithmetic operations, such as addition, subtraction, multiplication, and division.

### Example:

```python
import math

result_add = math.fsum([1.1, 2.2, 3.3])
result_subtract = math.fabs(-10)
result_multiply = math.prod([2, 3, 4])
result_divide = math.ceil(7.5)

print(f"Sum: {result_add}")         # Output: 6.6
print(f"Absolute: {result_subtract}") # Output: 10.0
print(f"Product: {result_multiply}")   # Output: 24
print(f"Ceiling: {result_divide}")     # Output: 8
```

## Power and Logarithmic Functions

The `math` module provides functions for power and logarithmic calculations.

### Example:

```python
import math

result_power = math.pow(2, 3)    # 2^3
result_sqrt = math.sqrt(16)      # Square root

print(f"Power: {result_power}")  # Output: 8.0
print(f"Square Root: {result_sqrt}")  # Output: 4.0

result_log = math.log(100, 10)   # log base 10
result_log2 = math.log2(8)       # log base 2
result_log10 = math.log10(100)   # log base 10

print(f"Log base 10: {result_log}")    # Output: 2.0
print(f"Log base 2: {result_log2}")    # Output: 3.0
print(f"Log base 10: {result_log10}")  # Output: 2.0
```

## Trigonometric Functions

The `math` module provides functions for trigonometric calculations, including sine, cosine, tangent, and their inverses.

### Example:

```python
import math

result_sin = math.sin(math.pi / 2)   # Sine of 90 degrees
result_cos = math.cos(0)             # Cosine of 0 degrees
result_tan = math.tan(math.pi / 4)   # Tangent of 45 degrees

print(f"Sine: {result_sin}")     # Output: 1.0
print(f"Cosine: {result_cos}")   # Output: 1.0
print(f"Tangent: {result_tan}")  # Output: 1.0

result_asin = math.asin(1)       # Inverse sine
result_acos = math.acos(1)       # Inverse cosine
result_atan = math.atan(1)       # Inverse tangent

print(f"Inverse Sine: {result_asin}")   # Output: 1.5707963267948966
print(f"Inverse Cosine: {result_acos}") # Output: 0.0
print(f"Inverse Tangent: {result_atan}") # Output: 0.7853981633974483
```

## Hyperbolic Functions

The `math` module also includes hyperbolic functions, which are analogs of the trigonometric functions but for hyperbolas.

### Example:

```python
import math

result_sinh = math.sinh(1)   # Hyperbolic sine
result_cosh = math.cosh(1)   # Hyperbolic cosine
result_tanh = math.tanh(1)   # Hyperbolic tangent

print(f"Hyperbolic Sine: {result_sinh}")   # Output: 1.1752011936438014
print(f"Hyperbolic Cosine: {result_cosh}") # Output: 1.5430806348152437
print(f"Hyperbolic Tangent: {result_tanh}") # Output: 0.7615941559557649

result_asinh = math.asinh(1)   # Inverse hyperbolic sine
result_acosh = math.acosh(1)   # Inverse hyperbolic cosine
result_atanh = math.atanh(0.5) # Inverse hyperbolic tangent

print(f"Inverse Hyperbolic Sine: {result_asinh}")   # Output: 0.881373587019543
print(f"Inverse Hyperbolic Cosine: {result_acosh}") # Output: 0.0
print(f"Inverse Hyperbolic Tangent: {result_atanh}") # Output: 0.5493061443340548
```

## Special Functions

The `math` module includes several special functions for mathematical operations such as gamma, factorial, and others.

### Example:

```python
import math

result_gamma = math.gamma(5)   # Gamma function

print(f"Gamma: {result_gamma}")   # Output: 24.0

result_factorial = math.factorial(5)   # Factorial function

print(f"Factorial: {result_factorial}")   # Output: 120

result_erf = math.erf(1)   # Error function

print(f"Error Function: {result_erf}")   # Output: 0.8427007929497148
```

## Constants

The `math` module provides several mathematical constants, such as `pi` and `e`.

### Example:

```python
import math

print(f"Pi: {math.pi}")   # Output: 3.141592653589793
print(f"Euler's number: {math.e}")   # Output: 2.718281828459045
```

## Working with Degrees and Radians

The `math` module provides functions to convert between degrees and radians.

### Example:

```python
import math

degrees = 180
radians = math.radians(degrees)
print(f"Degrees to Radians: {radians}")   # Output: 3.141592653589793

radians = math.pi
degrees = math.degrees(radians)
print(f"Radians to Degrees: {degrees}")   # Output: 180.0
```

## Complex Numbers

Python has a built-in type for complex numbers, but the `cmath` module is specifically designed for complex mathematical functions.

### Example:

```python
import cmath

complex_num = 1 + 2j

result_sqrt = cmath.sqrt(complex_num)  # Square root of a complex number

print(f"Square Root: {result_sqrt}")  # Output: (1.272019649514069+0.7861513777574233j)


result_sin = cmath.sin(complex_num)  # Sine of a complex number

print(f"Sine: {result_sin}")  # Output: (3.165778513216168+1.959601041421606j)
```

## Working with Fractions

The `fractions` module provides support for rational number arithmetic.

### Example:

```python
from fractions import Fraction


frac1 = Fraction(1, 2)  # 1/2
frac2 = Fraction(3, 4)  # 3/4


result_add = frac1 + frac2
result_subtract = frac1 - frac2
result_multiply = frac1 * frac2
result_divide = frac1 / frac2

print(f"Addition: {result_add}")       # Output: 5/4
print(f"Subtraction: {result_subtract}") # Output: -1/4
print(f"Multiplication: {result_multiply}") # Output: 3/8
print(f"Division: {result_divide}")     # Output: 2/3
```

## Statistics Module

Python's `statistics` module provides functions for calculating mathematical statistics of numeric data.

### Example:

```python
import statistics

data = [1, 2, 2, 3, 

4, 7, 9]


mean = statistics.mean(data)
print(f"Mean: {mean}")  # Output: 4.0


median = statistics.median(data)
print(f"Median: {median}")  # Output: 3


mode = statistics.mode(data)
print(f"Mode: {mode}")  # Output: 2


stdev = statistics.stdev(data)
print(f"Standard Deviation: {stdev}")  # Output: 2.9277002188455996
```

## Conclusion

In this tutorial, we covered various aspects of working with math in Python, including basic arithmetic, power and logarithmic functions, trigonometry, hyperbolic functions, special functions, constants, degrees and radians, complex numbers, fractions, and statistics. Python's `math` module provides a robust set of functions for mathematical operations, making it a powerful tool for scientific computing and data analysis.

By mastering these techniques, you can effectively handle a wide range of mathematical computations in your Python applications.

This concludes our in-depth tutorial on working with math in Python. Happy coding!