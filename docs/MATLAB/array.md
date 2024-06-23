---
id: MATLAB array
title: Array
sidebar_label: MATLAB Array
sidebar_position: 11
tags: [MATLAB, Array]
description: In this tutorial, you will learn about array in MATLAB. Array is a fundamental data type that allows you to store multiple elements of the same type in a single variable
---
# MATLAB Arrays
In MATLAB, an array is a fundamental data type that allows you to store multiple elements of the same type in a single variable. Arrays can be of different dimensions: vectors (1-dimensional arrays), matrices (2-dimensional arrays), or even multidimensional arrays.

### Creating Arrays

#### 1. **Creating Vectors (1-dimensional arrays)**

You can create vectors in MATLAB using square brackets `[]` or the `linspace` and `logspace` functions.

```matlab
% Using square brackets []
vec1 = [1, 2, 3, 4, 5];

% Using linspace (linearly spaced values)
vec2 = linspace(1, 5, 5); % Creates [1, 2, 3, 4, 5]

% Using logspace (logarithmically spaced values)
vec3 = logspace(0, 2, 5); % Creates [1, 10, 100, 1000, 10000]
```

#### 2. **Creating Matrices (2-dimensional arrays)**

Matrices are created using semicolons `;` to separate rows or with functions like `zeros`, `ones`, or `rand`.

```matlab
% Using square brackets []
mat1 = [1, 2, 3; 4, 5, 6; 7, 8, 9];

% Using zeros and ones functions
mat2 = zeros(3, 3); % Creates a 3x3 matrix of zeros
mat3 = ones(2, 4);  % Creates a 2x4 matrix of ones

% Using rand function (random values between 0 and 1)
mat4 = rand(3, 2); % Creates a 3x2 matrix of random numbers
```

### Accessing and Manipulating Arrays

#### 1. **Accessing Elements**

You can access elements of an array using indexing. MATLAB uses 1-based indexing.

```matlab
% Accessing elements
vec = [1, 2, 3, 4, 5];
element1 = vec(1); % Accesses the first element (element1 = 1)
element3 = vec(3); % Accesses the third element (element3 = 3)

% Accessing elements in a matrix
mat = [1, 2, 3; 4, 5, 6; 7, 8, 9];
element_mat = mat(2, 3); % Accesses the element in the second row, third column (element_mat = 6)
```

#### 2. **Manipulating Arrays**

MATLAB provides various functions for manipulating arrays, such as `reshape`, `transpose`, and array operations like `+`, `-`, `*`, and `.` for element-wise operations.

```matlab
% Reshape an array
vec = [1, 2, 3, 4, 5, 6];
reshaped_vec = reshape(vec, [2, 3]); % Reshapes vec into a 2x3 matrix

% Transpose an array
mat = [1, 2, 3; 4, 5, 6];
transposed_mat = mat'; % Transposes mat (interchanges rows and columns)

% Element-wise operations
A = [1, 2; 3, 4];
B = [5, 6; 7, 8];
C = A + B; % Element-wise addition
D = A .* B; % Element-wise multiplication
```

### Example and Output

Let's put together an example that demonstrates creating arrays, accessing elements, and performing operations:

```matlab
% Example: Creating a matrix, accessing elements, and performing operations
A = [1, 2, 3; 4, 5, 6; 7, 8, 9];

% Accessing elements
element = A(2, 3); % Accessing the element in the second row, third column

% Performing operations
B = A'; % Transpose of A
C = A * 2; % Scalar multiplication of A by 2

% Displaying results
disp('Original Matrix A:');
disp(A);
disp('Element at (2, 3):');
disp(element);
disp('Transpose of A (B):');
disp(B);
disp('Scalar multiplication of A by 2 (C):');
disp(C);
```

**Output:**
```
Original Matrix A:
     1     2     3
     4     5     6
     7     8     9

Element at (2, 3):
     6

Transpose of A (B):
     1     4     7
     2     5     8
     3     6     9

Scalar multiplication of A by 2 (C):
     2     4     6
     8    10    12
    14    16    18
```

This example demonstrates the basic concepts of creating arrays (vectors and matrices), accessing elements, and performing operations in MATLAB. Arrays are versatile and form the basis for many computations in MATLAB, making them essential for data manipulation and analysis.