---
id: 0002-recursion
title: Recursion
sidebar_label: Recursion
tags:
  - Basics
  - Algorithms
  - DSA
  - Python
  - C++
  - Java
  - JavaScript
description: "This page explains the concept of Recursion with detailed explanations, examples, and code implementations."
---

## 1. What is Recursion?

Recursion is a programming technique where a function calls itself in order to solve a problem. This technique divides the problem into smaller, more manageable sub-problems. A recursive function has two main parts:
- **Base Case:** The condition under which the function stops calling itself.
- **Recursive Case:** The part where the function calls itself with a smaller or simpler sub-problem.

## 2. How Does Recursion Work?

Recursion works by breaking down a problem into smaller instances of the same problem until a base case is reached. The base case is the simplest form of the problem, which can be solved directly without further recursion. Once the base case is reached, the function returns a value, and the recursive calls start to resolve in reverse order, ultimately solving the entire problem.

### Example: Factorial of a Number

The factorial of a number `n` (denoted as `n!`) is the product of all positive integers less than or equal to `n`.

- **Factorial of 5:** `5! = 5 * 4 * 3 * 2 * 1 = 120`

Here is the recursive definition of factorial:
- **Base Case:** `0! = 1`
- **Recursive Case:** `n! = n * (n - 1)!`

## Algorithmic Approach

#### The algorithmic steps for implementing recursion in a function are as follows:

- Step1 - Define a base case: Identify the simplest case for which the solution is known or trivial. This is the stopping condition for the recursion, as it prevents the function from infinitely calling itself.

- Step2 - Define a recursive case: Define the problem in terms of smaller subproblems. Break the problem down into smaller versions of itself, and call the function recursively to solve each subproblem.

- Step3 - Ensure the recursion terminates: Make sure that the recursive function eventually reaches the base case, and does not enter an infinite loop.

- Step4 - Combine the solutions: Combine the solutions of the subproblems to solve the original problem.

## How are recursive functions stored in memory?

Recursion uses more memory, because the recursive function adds to the stack with each recursive call, and keeps the values there until the call is finished. The recursive function uses LIFO (LAST IN FIRST OUT) Structure just like the stack data structure. ![Recursive memore](https://www.geeksforgeeks.org/stack-data-structure/)

### What is the base condition in recursion? 
- In the recursive program, the solution to the base case is provided and the solution to the bigger problem is expressed in terms of smaller problems. 
 
```
int fact(int n)
{
    if (n < = 1) // base case
        return 1;
    else    
        return n*fact(n-1);    
}
```

In the above example, the base case for n < = 1 is defined and the larger value of a number can be solved by converting to a smaller one till the base case is reached.

### Why Stack Overflow error occurs in recursion? 
If the base case is not reached or not defined, then the stack overflow problem may arise. Let us take an example to understand this.

```
int fact(int n)
{
    // wrong base case (it may cause
    // stack overflow).
    if (n == 100) 
        return 1;

    else
        return n*fact(n-1);
}
```

If $fact(10)$ is called, it will call $fact(9)$, $fact(8)$, $fact(7)$, and so on but the number will never reach 100. So, the base case is not reached. If the memory is exhausted by these functions on the stack, it will cause a stack overflow error. 

## 3. Problem Description

Compute the factorial of a given number using recursion.

## 4. Examples

### Example 1:
**Input:** `n = 5`  
**Output:** `120`

### Example 2:
**Input:** `n = 0`  
**Output:** `1`

## 5. Constraints

- $0 \leq n \leq 12$ (for reasonable output)

## 6. Algorithm for Recursion

1. Define the base case for the smallest problem.
2. Define the recursive case that breaks the problem into smaller sub-problems.
3. Ensure the problem size decreases with each recursive call to reach the base case.

## 7. Implementation (Code for 4 Languages)

<Tabs>
  <TabItem value="Python" label="Python" default>
  ```python
  def factorial(n):
      if n == 0:
          return 1
      else:
          return n * factorial(n - 1)

  # Example usage:
  print(factorial(5))  # Output: 120
  ```
  </TabItem>

  <TabItem value="C++" label="C++">
  ```cpp
  #include <iostream>
  using namespace std;

  int factorial(int n) {
      if (n == 0)
          return 1;
      else
          return n * factorial(n - 1);
  }

  int main() {
      cout << factorial(5) << endl;  // Output: 120
      return 0;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">
  ```java
  public class Recursion {
      public static int factorial(int n) {
          if (n == 0)
              return 1;
          else
              return n * factorial(n - 1);
      }

      public static void main(String[] args) {
          System.out.println(factorial(5));  // Output: 120
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  ```javascript
  function factorial(n) {
      if (n === 0) {
          return 1;
      } else {
          return n * factorial(n - 1);
      }
  }

  // Example usage:
  console.log(factorial(5));  // Output: 120
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity:** $O(n)$, where $n$ is the number of recursive calls.
- **Space Complexity:** $O(n)$, due to the call stack.

## 9. Advantages and Disadvantages

### Advantages:
- Simplifies code for problems that can be broken into similar sub-problems.
- Natural fit for problems that have a recursive structure, such as tree traversals.

### Disadvantages:
- May lead to high memory usage due to the call stack, especially for deep recursions.
- Can be slower due to the overhead of multiple function calls.

## 10. Examples of Recursion in Practice

- **Fibonacci Series:** Computing Fibonacci numbers.
- **Tree Traversals:** Pre-order, in-order, and post-order traversals.
- **Backtracking Algorithms:** Solving puzzles like Sudoku or the N-Queens problem.
- **Divide and Conquer Algorithms:** Merge sort, quicksort, etc.

## 11. References

- [GeeksforGeeks - Recursion](https://www.geeksforgeeks.org/recursion/)
- [Wikipedia - Recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science))
