---
id: lesson-1
title: "Operators and Expressions"
sidebar_label: "Important Operators"
sidebar_position: 1
description: "Operators and Expressions"
tags: [courses, beginner-level, C++, Introduction]
---

### Arithmetic Operators
- `+` : Addition
- `-` : Subtraction
- `*` : Multiplication
- `/` : Division
- `%` : Modulus

### Relational Operators
- `==` : Equal to
- `!=` : Not equal to
- `>` : Greater than
- `<` : Less than
- `>=` : Greater than or equal to
- `<=` : Less than or equal to

### Logical Operators
- `&&` : Logical AND
- `||` : Logical OR
- `!` : Logical NOT

### Assignment Operators
- `=` : Assign
- `+=` : Add and assign
- `-=` : Subtract and assign
- `*=` : Multiply and assign
- `/=` : Divide and assign
- `%=` : Modulus and assign

### Increment and Decrement Operators
- `++` : Increment
- `--` : Decrement

### Example Code

```cpp
#include <iostream>

int main() {
    int a = 10, b = 5;
    int sum, diff, product, quotient, remainder;
    bool isEqual, isGreater, isLess, isAnd, isOr, isNot;
    
    // Arithmetic operators
    sum = a + b;
    diff = a - b;
    product = a * b;
    quotient = a / b;
    remainder = a % b;

    // Relational operators
    isEqual = (a == b);
    isGreater = (a > b);
    isLess = (a < b);

    // Logical operators
    isAnd = (a > 0 && b > 0);
    isOr = (a > 0 || b > 0);
    isNot = !(a == b);

    // Assignment operators
    a += b;
    a -= b;
    a *= b;
    a /= b;
    a %= b;

    // Increment and decrement operators
    a++;
    b--;

    std::cout << "Sum: " << sum << std::endl;
    std::cout << "Difference: " << diff << std::endl;
    std::cout << "Product: " << product << std::endl;
    std::cout << "Quotient: " << quotient << std::endl;
    std::cout << "Remainder: " << remainder << std::endl;
    std::cout << "Is Equal: " << isEqual << std::endl;
    std::cout << "Is Greater: " << isGreater << std::endl;
    std::cout << "Is Less: " << isLess << std::endl;
    std::cout << "Logical AND: " << isAnd << std::endl;
    std::cout << "Logical OR: " << isOr << std::endl;
    std::cout << "Logical NOT: " << isNot << std::endl;

    return 0;
}
```

### Output

```
Sum: 15
Difference: 5
Product: 50
Quotient: 2
Remainder: 0
Is Equal: 0
Is Greater: 1
Is Less: 0
Logical AND: 1
Logical OR: 1
Logical NOT: 1
```


:::tip
- **Use Parentheses:** When in doubt about operator precedence, use parentheses to ensure clarity.
- **Avoid Division by Zero:** Always check to ensure the divisor is not zero before performing division.
- **Consistent Use of Logical Operators:** Ensure logical operations are used consistently to avoid unexpected results.
- **Increment/Decrement in Loops:** Increment and decrement operators are commonly used in loop control statements for better performance and readability.
- **Test Thoroughly:** Always test your expressions with different inputs to ensure they handle edge cases properly.
::: 