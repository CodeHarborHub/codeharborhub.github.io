---
title: Operators and Expressions in c
sidebar_label: Operators and Expressions
sidebar_position: 1
description: Learn Operators and Expressions in C program.
tags: [courses] 
---
 

Operators are special symbols that perform operations on variables and values. In C, operators are used to manipulate data and variables to form expressions. Here are some of the commonly used operators in C:

#### Arithmetic Operators

Arithmetic operators are used to perform mathematical operations such as addition, subtraction, multiplication, and division.

| Operator | Description          | Example     | Output  |
|----------|----------------------|-------------|---------|
| `+`      | Addition             | `a + b`     | Sum of a and b |
| `-`      | Subtraction          | `a - b`     | Difference of a and b |
| `*`      | Multiplication       | `a * b`     | Product of a and b |
| `/`      | Division             | `a / b`     | Quotient of a divided by b |
| `%`      | Modulus (remainder)  | `a % b`     | Remainder of a divided by b |

Example:

```c
#include <stdio.h>

int main() {
    int a = 10, b = 3;
    printf("a + b = %d\n", a + b);
    printf("a - b = %d\n", a - b);
    printf("a * b = %d\n", a * b);
    printf("a / b = %d\n", a / b);
    printf("a %% b = %d\n", a % b);

    return 0;
}
```

**Output:**
```
a + b = 13
a - b = 7
a * b = 30
a / b = 3
a % b = 1
```

#### Relational Operators

Relational operators are used to compare two values. They return either true (1) or false (0).

| Operator | Description          | Example     | Output  |
|----------|----------------------|-------------|---------|
| `==`     | Equal to             | `a == b`    | 0 (false) |
| `!=`     | Not equal to         | `a != b`    | 1 (true)  |
| `>`      | Greater than         | `a > b`     | 1 (true)  |
| `<`      | Less than            | `a < b`     | 0 (false) |
| `>=`     | Greater than or equal to | `a >= b` | 1 (true)  |
| `<=`     | Less than or equal to    | `a <= b` | 0 (false) |

Example:

```c
#include <stdio.h>

int main() {
    int a = 10, b = 3;
    printf("a == b: %d\n", a == b);
    printf("a != b: %d\n", a != b);
    printf("a > b: %d\n", a > b);
    printf("a < b: %d\n", a < b);
    printf("a >= b: %d\n", a >= b);
    printf("a <= b: %d\n", a <= b);

    return 0;
}
```

**Output:**
```
a == b: 0
a != b: 1
a > b: 1
a < b: 0
a >= b: 1
a <= b: 0
```

#### Logical Operators

Logical operators are used to combine multiple conditions.

| Operator | Description          | Example         | Output  |
|----------|----------------------|-----------------|---------|
| `&&`     | Logical AND          | `(a > b) && (a < 20)` | 1 (true)  |
| `\|\|`   | Logical OR           | `(a > b) \|\| (a < 5)` | 1 (true)  |
| `!`      | Logical NOT          | `!(a == b)`     | 1 (true)  |

Example:

```c
#include <stdio.h>

int main() {
    int a = 10, b = 3;
    printf("(a > b) && (a < 20): %d\n", (a > b) && (a < 20));
    printf("(a > b) || (a < 5): %d\n", (a > b) || (a < 5));
    printf("!(a == b): %d\n", !(a == b));

    return 0;
}
```

**Output:**
```
(a > b) && (a < 20): 1
(a > b) || (a < 5): 1
!(a == b): 1
```

#### Assignment Operators

Assignment operators are used to assign values to variables.

| Operator | Description          | Example   | Equivalent  |
|----------|----------------------|-----------|-------------|
| `=`      | Assign               | `a = b`   | `a = b`     |
| `+=`     | Add and assign       | `a += b`  | `a = a + b` |
| `-=`     | Subtract and assign  | `a -= b`  | `a = a - b` |
| `*=`     | Multiply and assign  | `a *= b`  | `a = a * b` |
| `/=`     | Divide and assign    | `a /= b`  | `a = a / b` |
| `%=`     | Modulus and assign   | `a %= b`  | `a = a % b` |

Example:

```c
#include <stdio.h>

int main() {
    int a = 10, b = 3;
    a += b; // a = a + b
    printf("a += b: %d\n", a);
    a -= b; // a = a - b
    printf("a -= b: %d\n", a);
    a *= b; // a = a * b
    printf("a *= b: %d\n", a);
    a /= b; // a = a / b
    printf("a /= b: %d\n", a);
    a %= b; // a = a % b
    printf("a %%= b: %d\n", a);

    return 0;
}
```

**Output:**
```
a += b: 13
a -= b: 10
a *= b: 30
a /= b: 10
a %= b: 1
```

#### Increment and Decrement Operators

Increment and decrement operators are used to increase or decrease the value of a variable by 1.

| Operator | Description          | Example   | Output |
|----------|----------------------|-----------|--------|
| `++`     | Increment by 1       | `a++`     | a is increased by 1 |
| `--`     | Decrement by 1       | `a--`     | a is decreased by 1 |

Example:

```c
#include <stdio.h>

int main() {
    int a = 10;
    printf("Initial value of a: %d\n", a);
    a++;
    printf("After a++: %d\n", a);
    a--;
    printf("After a--: %d\n", a);

    return 0;
}
```

**Output:**
```
Initial value of a: 10
After a++: 11
After a--: 10
```
 