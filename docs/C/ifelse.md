---
id: c-if..else
title: C If..Else
sidebar_label: C If..Else
sidebar_position: 7
tags: [c, c if..else]
description: In this tutorial, you will learn about the C If..Else, what it is.
---

In C programming, conditional statements (`if`, `else`, `else if`) are used to make decisions based on specific conditions. These statements allow the program to execute different blocks of code based on whether a condition is true or false.

#### Syntax Examples

1. **if Statement**
```c
#include <stdio.h>

int main() {
    int num = 10;

    if (num > 0) {
        printf("Number is positive.\n");
    }

    return 0;
}
```

2. **if-else Statement**
```c
#include <stdio.h>

int main() {
    int num = -5;

    if (num > 0) {
        printf("Number is positive.\n");
    } else {
        printf("Number is not positive.\n");
    }

    return 0;
}
```

3. **if-else if-else Statement**
```c
#include <stdio.h>

int main() {
    int num = 0;

    if (num > 0) {
        printf("Number is positive.\n");
    } else if (num < 0) {
        printf("Number is negative.\n");
    } else {
        printf("Number is zero.\n");
    }

    return 0;
}
```

### Shorthand if (Ternary Operator)

In C, the shorthand if (ternary operator) `condition ? expression1 : expression2` allows for a compact way to write simple conditional statements.

#### Example 

```c
#include <stdio.h>

int main() {
    int num = 10;
    char* result = (num % 2 == 0) ? "Even" : "Odd";

    printf("Number %d is %s.\n", num, result);

    return 0;
}
```

### Key Points

- **if Statement**: Executes a block of code if a specified condition is true.
- **if-else Statement**: Executes one block of code if the condition is true and another block if it is false.
- **if-else if-else Statement**: Allows checking multiple conditions sequentially.
- **Shorthand if (Ternary Operator)**: Provides a concise way to assign a value based on a condition.

### Conclusion

Conditional statements (`if`, `else`, `else if`) are fundamental constructs in C programming that enable decision-making based on specific conditions. They allow programs to execute different code paths depending on the evaluation of expressions. The shorthand if (ternary operator) further enhances the language's flexibility by providing a compact syntax for simple conditional assignments.

Mastering these conditional statements is crucial for writing effective and efficient C programs. They enable developers to create programs that can respond dynamically to different inputs and conditions, enhancing the overall functionality and usability of their applications.