---
id: c-recursion
title: C Recursion
sidebar_label: C Recursion
sidebar_position: 11
tags: [c, c recursion]
description: In this tutorial, you will learn about the C Recursion, what it is.
---

Recursion in C refers to the technique where a function calls itself directly or indirectly to solve a problem. It is a powerful concept in programming that allows solving complex problems by breaking them down into smaller, simpler subproblems.

#### Example 

Here's an example of a recursive function to calculate the factorial of a number:

```c
#include <stdio.h>

// Function prototype
int factorial(int n);

int main() {
    int number = 5;
    int fact = factorial(number);
    
    printf("Factorial of %d = %d\n", number, fact);
    
    return 0;
}

// Recursive function to calculate factorial
int factorial(int n) {
    // Base case: factorial of 0 is 1
    if (n == 0 || n == 1) {
        return 1;
    }
    // Recursive case: factorial of n is n * factorial(n-1)
    else {
        return n * factorial(n - 1);
    }
}
```

- **factorial(int n)**: This function calculates the factorial of a number recursively.
- **Base Case**: The base case (`if (n == 0 || n == 1)`) defines the simplest form of the problem that can be solved directly.
- **Recursive Case**: In the recursive case (`else`), the function calls itself with a smaller subproblem (`factorial(n - 1)`) until it reaches the base case.

### Key Points 

1. **Base Case**: Every recursive function must have a base case that terminates the recursion. Without it, the function would continue calling itself indefinitely, leading to stack overflow.
   
2. **Recursive Case**: This defines how the function calls itself with smaller inputs, moving towards the base case. It's essential to ensure that recursive calls eventually reach the base case.

3. **Stack Usage**: Recursion uses the system stack to store intermediate results and function calls. Excessive recursion or deep recursion can lead to stack overflow if the stack space is exhausted.

4. **Tail Recursion**: A special case where the recursive call is the last operation performed by the function. Tail recursion can be optimized by compilers to avoid excessive stack usage.

5. **Indirect Recursion**: When functions call each other in a circular manner, indirectly leading back to the original function. Care must be taken to ensure such recursion terminates correctly.

6. **Complexity**: Recursive algorithms can simplify complex problems into more manageable subproblems. However, they may not always be the most efficient solution due to stack overhead and potential for deep recursion.

### Conclusion

Recursion is a fundamental programming technique that offers an elegant solution to certain types of problems by breaking them down into smaller, simpler instances. In C programming, recursion allows functions to call themselves, leveraging the stack to manage state and intermediate results.

Understanding recursion requires grasping the concepts of base cases, recursive cases, and how the function's state evolves with each recursive call. While recursion can simplify problem-solving, it's essential to use it judiciously and ensure that recursion depth and stack usage are managed properly to avoid performance issues like stack overflow.

Overall, recursion in C is a powerful tool that enhances the expressiveness and flexibility of the language, enabling developers to tackle a wide range of problems effectively.