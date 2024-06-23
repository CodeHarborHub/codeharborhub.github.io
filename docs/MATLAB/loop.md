---
id: MATLAB Loops
title: Loops
sidebar_label: MATLAB Loops
sidebar_position: 8
tags: [MATLAB, Loops]
description: In this tutorial, you will learn about Loops in MATLAB.Loops are used to execute a group of statements repeatedly based on a condition
---# MATLAB Loops
In MATLAB, loops are used to execute a group of statements repeatedly based on a condition. MATLAB supports two main types of loops: for loops and while loops. Let's explore each of these with examples.

## `for` Loops in MATLAB

A `for` loop in MATLAB iterates over a range of values. The general syntax is:

```matlab
for index = values
    % Loop body
end
```

- `index` is a loop variable that takes each value from `values` in succession.
- `values` can be a vector, array, or other iterable objects.

#### Example : Sum of Squares Using a `for` Loop

```matlab
% Example: Calculate the sum of squares of numbers from 1 to 5

sum_squares = 0;
for i = 1:5
    sum_squares = sum_squares + i^2;
end

disp(['The sum of squares from 1 to 5 is: ', num2str(sum_squares)]);
```

**Output:**

```
The sum of squares from 1 to 5 is: 55
```

## `while` Loops in MATLAB

A `while` loop continues to execute as long as the specified condition is true. The general syntax is:

```matlab
while condition
    % Loop body
end
```

- `condition` is a logical expression that controls the loop execution.

#### Example : Factorial Calculation Using a `while` Loop

```matlab
% Example: Calculate factorial of a number using a while loop

n = 5;
factorial_value = 1;
while n > 1
    factorial_value = factorial_value * n;
    n = n - 1;
end

disp(['The factorial of 5 is: ', num2str(factorial_value)]);
```

**Output:**

```
The factorial of 5 is: 120
```

### Notes
- **Vectorization**: MATLAB is optimized for vector and matrix operations. Whenever possible, use vectorized operations instead of loops for better performance.
- **Preallocation**: For `for` loops that modify arrays or matrices, preallocate memory to improve efficiency.
- **Break and Continue**: MATLAB supports `break` and `continue` statements to exit or skip iterations within loops, similar to other programming languages.

### Conclusion

Loops are essential for repetitive tasks in MATLAB, allowing you to automate calculations and processes efficiently. Understanding how to use `for` and `while` loops effectively can greatly enhance your ability to work with data and perform complex computations.