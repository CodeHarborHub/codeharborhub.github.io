---
id: MATLAB Vector
title: Vector
sidebar_label: MATLAB Vector
sidebar_position: 9
tags: [MATLAB, Vector]
description: In this tutorial, you will learn about Vector in MATLAB  .Vectors in MATLAB are fundamental data structures that represent arrays of numbers. Vectors can be either row vectors or column vectors. MATLAB provides various functions to create and manipulate vectors efficiently.
---
# MATLAB Vector
Vectors in MATLAB are fundamental data structures that represent arrays of numbers. Vectors can be either row vectors or column vectors. MATLAB provides various functions to create and manipulate vectors efficiently.

### Creating Vectors

#### Row Vector
A row vector is created using square brackets, separating the elements with spaces or commas.
```matlab
row_vector = [1 2 3 4 5]
```
**Output:**
```matlab
row_vector =

     1     2     3     4     5
```

#### Column Vector
A column vector is created by separating the elements with semicolons or using the transpose operator (`'`).
```matlab
column_vector = [1; 2; 3; 4; 5]
% Or using transpose
column_vector_transpose = [1 2 3 4 5]'
```
**Output:**
```matlab
column_vector =

     1
     2
     3
     4
     5
```
```matlab
column_vector_transpose =

     1
     2
     3
     4
     5
```

### Vector Operations

#### Addition and Subtraction
```matlab
A = [1 2 3];
B = [4 5 6];

C = A + B
D = A - B
```
**Output:**
```matlab
C =

     5     7     9

D =

    -3    -3    -3
```

#### Scalar Multiplication and Division
```matlab
A = [1 2 3];

B = A * 2
C = A / 2
```
**Output:**
```matlab
B =

     2     4     6

C =

    0.5000    1.0000    1.5000
```

#### Element-wise Multiplication and Division
```matlab
A = [1 2 3];
B = [4 5 6];

C = A .* B
D = A ./ B
```
**Output:**
```matlab
C =

     4    10    18

D =

    0.2500    0.4000    0.5000
```

### Built-in Functions for Vectors

#### Sum and Product
```matlab
A = [1 2 3 4 5];

sum_A = sum(A)
prod_A = prod(A)
```
**Output:**
```matlab
sum_A =

    15

prod_A =

   120
```

#### Minimum and Maximum
```matlab
A = [1 2 3 4 5];

min_A = min(A)
max_A = max(A)
```
**Output:**
```matlab
min_A =

     1

max_A =

     5
```

#### Mean and Median
```matlab
A = [1 2 3 4 5];

mean_A = mean(A)
median_A = median(A)
```
**Output:**
```matlab
mean_A =

    3

median_A =

    3
```

### Example: Creating and Manipulating a Vector

```matlab
% Create a row vector
A = [10 20 30 40 50];

% Add 5 to each element
B = A + 5

% Multiply each element by 2
C = A * 2

% Calculate the sum of all elements
sum_A = sum(A)

% Find the maximum value
max_A = max(A)
```
**Output:**
```matlab
B =

    15    25    35    45    55

C =

    20    40    60    80   100

sum_A =

   150

max_A =

    50
```

This covers the basics of working with vectors in MATLAB. You can create vectors, perform arithmetic operations, and use built-in functions to analyze and manipulate vector data.