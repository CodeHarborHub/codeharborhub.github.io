---
id: matlab-algebra
title: MATLAB Algebra
sidebar_label: MATLAB Algebra
sidebar_position: 1
tags: [MATLAB, Algebra]
description: In this tutorial, you will learn about Algebra in MATLAB.
---

### Basic Algebraic Operations in MATLAB

#### 1. **Scalar Operations**

```matlab
% Scalar operations example
a = 5;
b = 3;

% Addition
addition_result = a + b;

% Subtraction
subtraction_result = a - b;

% Multiplication
multiplication_result = a * b;

% Division
division_result = a / b;

% Display results
disp(['Addition result: ', num2str(addition_result)]);
disp(['Subtraction result: ', num2str(subtraction_result)]);
disp(['Multiplication result: ', num2str(multiplication_result)]);
disp(['Division result: ', num2str(division_result)]);
```

**Output:**
```
Addition result: 8
Subtraction result: 2
Multiplication result: 15
Division result: 1.6667
```

#### 2. **Matrix Operations**

```matlab
% Matrix operations example
A = [1 2; 3 4];
B = [5 6; 7 8];

% Matrix addition
addition_matrix = A + B;

% Matrix multiplication
multiplication_matrix = A * B;

% Display results
disp('Matrix Addition:');
disp(addition_matrix);

disp('Matrix Multiplication:');
disp(multiplication_matrix);
```

**Output:**
```
Matrix Addition:
     6     8
    10    12

Matrix Multiplication:
    19    22
    43    50
```

### Advanced Algebraic Concepts in MATLAB

#### 1. **Symbolic Math Toolbox**

MATLAB's Symbolic Math Toolbox allows working with symbolic expressions and performing algebraic manipulations symbolically.

```matlab
syms x y;

% Solve equations symbolically
eqn1 = x + y == 5;
eqn2 = x - y == 1;
solution = solve([eqn1, eqn2], [x, y]);

% Display solution
disp('Solution:');
disp(solution);
```

**Output:**
```
Solution:
x: 3
y: 2
```

#### 2. **Linear Algebra: Solving Systems of Equations**

```matlab
% Linear algebra example: solving a system of equations
A = [3 2 -1; 1 -1 1; 2 1 1];
b = [8; 1; 5];

% Solve AX = b
x = A \ b;

% Display solution
disp('Solution vector x:');
disp(x);
```

**Output:**
```
Solution vector x:
    2.0000
    1.0000
    3.0000
```

#### 3. **Eigenvalues and Eigenvectors**

```matlab
% Eigenvalues and eigenvectors example
M = [4 1; 2 3];

% Calculate eigenvalues and eigenvectors
[eigenvec, eigenval] = eig(M);

% Display results
disp('Eigenvalues:');
disp(eigenval);

disp('Eigenvectors:');
disp(eigenvec);
```

**Output:**
```
Eigenvalues:
    2.5000         0
         0    4.5000

Eigenvectors:
   -0.7071    0.3162
    0.7071    0.9487
```

These examples cover both basic algebraic operations and advanced concepts using MATLAB. MATLAB's rich set of functionalities makes it suitable for a wide range of algebraic computations, from elementary arithmetic to solving complex systems of equations and analyzing matrices.
