---
id: c-loops
title: C Loops
sidebar_label: C Loops
sidebar_position: 6
tags: [c, c loops]
description: In this tutorial, you will learn about the C Loops, what it is.
---

Loops in C are used to execute a block of code repeatedly as long as a specified condition is met. There are three main types of loops in C: `for` loop, `while` loop, and `do-while` loop.

### 1. `for` Loop
The `for` loop is used when the number of iterations is known beforehand. It has three parts: initialization, condition, and increment/decrement.

#### Syntax
```c
for (initialization; condition; increment/decrement) {
    // Code to be executed
}
```

#### Example
```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        printf("Iteration %d\n", i);
    }
    return 0;
}
```
Output:
```
Iteration 1
Iteration 2
Iteration 3
Iteration 4
Iteration 5
```

### 2. `while` Loop
The `while` loop is used when the number of iterations is not known beforehand and depends on a condition.

#### Syntax
```c
while (condition) {
    // Code to be executed
}
```

#### Example
```c
#include <stdio.h>

int main() {
    int i = 1;
    while (i <= 5) {
        printf("Iteration %d\n", i);
        i++;
    }
    return 0;
}
```
Output:
```
Iteration 1
Iteration 2
Iteration 3
Iteration 4
Iteration 5
```

### 3. `do-while` Loop
The `do-while` loop is similar to the `while` loop, but it guarantees that the code block is executed at least once.

#### Syntax
```c
do {
    // Code to be executed
} while (condition);
```

#### Example
```c
#include <stdio.h>

int main() {
    int i = 1;
    do {
        printf("Iteration %d\n", i);
        i++;
    } while (i <= 5);
    return 0;
}
```
Output:
```
Iteration 1
Iteration 2
Iteration 3
Iteration 4
Iteration 5
```

### Key Points 

1. **Initialization**:
   - For `for` loops, initialization happens only once at the beginning.
   - For `while` and `do-while` loops, initialization needs to be done before the loop starts.

2. **Condition**:
   - The condition is evaluated before each iteration in `for` and `while` loops.
   - In `do-while` loops, the condition is evaluated after each iteration.

3. **Increment/Decrement**:
   - In `for` loops, increment/decrement happens after each iteration.
   - In `while` and `do-while` loops, you need to manually increment/decrement within the loop body.

4. **Infinite Loops**:
   - Be cautious to avoid infinite loops by ensuring the condition will eventually be false.

5. **Nested Loops**:
   - Loops can be nested within other loops, allowing for more complex iterations.

6. **Break and Continue**:
   - The `break` statement can be used to exit a loop prematurely.
   - The `continue` statement skips the current iteration and proceeds to the next iteration.

### Conclusion

Loops are fundamental constructs in C programming that enable repeated execution of code blocks, making it easier to handle tasks that require iteration. Understanding the differences between `for`, `while`, and `do-while` loops allows programmers to choose the appropriate loop type based on the specific requirements of their code. Proper use of loops enhances code efficiency and readability, and mastering these concepts is crucial for any C programmer.