---
id: Implement-two-stacks-in-an-array
title: Implement Two Stacks in an Array (Geeks for Geeks)
sidebar_label: Implement Two Stacks in an Array
tags:
  - Intermediate
  - Stack
  - Array
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Implement Two Stacks in an Array problem on Geeks for Geeks."
---

## Problem Description

You are given a single array of size `N`. You need to implement two stacks in this array efficiently.

## Examples

**Example 1:**
```
Input:
push1(2)
push1(3)
push2(4)
pop1()
pop2()
Output:
3 4
```

**Example 2:**
```
Input:
push1(1)
push2(2)
push1(3)
pop1()
pop2()
Output:
3 2
```

## Your Task

Your task is to complete the class `TwoStacks` which should contain the following functions:
- `void push1(int x)`: Pushes `x` into the first stack.
- `void push2(int x)`: Pushes `x` into the second stack.
- `int pop1()`: Pops the top element from the first stack and returns it. Returns `-1` if the first stack is empty.
- `int pop2()`: Pops the top element from the second stack and returns it. Returns `-1` if the second stack is empty.

Expected Time Complexity: $O(1)$ for all the operations.
Expected Auxiliary Space: $O(1)$ for all the operations.

## Constraints

- $1 <= N <= 100$
- $1 <= x <= 100$

## Problem Explanation

Here's the step-by-step breakdown of implementing two stacks in a single array:

1. **Initialize pointers**: Use two pointers, one for each stack.
2. **Push operations**: Ensure elements are pushed to the respective stack areas.
3. **Pop operations**: Ensure elements are popped from the respective stack areas.
4. **Check overflow and underflow**: Ensure proper checks for stack overflow and underflow.

### Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
  class TwoStacks:
      def __init__(self, n):  # Initialize n as the size of array
          self.size = n
          self.arr = [None] * n
          self.top1 = -1
          self.top2 = n

      def push1(self, x):
          if self.top1 < self.top2 - 1:
              self.top1 += 1
              self.arr[self.top1] = x
          else:
              print("Stack Overflow")

      def push2(self, x):
          if self.top1 < self.top2 - 1:
              self.top2 -= 1
              self.arr[self.top2] = x
          else:
              print("Stack Overflow")

      def pop1(self):
          if self.top1 >= 0:
              x = self.arr[self.top1]
              self.top1 -= 1
              return x
          else:
              return -1

      def pop2(self):
          if self.top2 < self.size:
              x = self.arr[self.top2]
              self.top2 += 1
              return x
          else:
              return -1
  ```
  </TabItem>

  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  #include <iostream>
  using namespace std;

  class TwoStacks {
  private:
      int* arr;
      int size;
      int top1, top2;

  public:
      TwoStacks(int n) {
          size = n;
          arr = new int[n];
          top1 = -1;
          top2 = n;
      }

      void push1(int x) {
          if (top1 < top2 - 1) {
              top1++;
              arr[top1] = x;
          } else {
              cout << "Stack Overflow";
          }
      }

      void push2(int x) {
          if (top1 < top2 - 1) {
              top2--;
              arr[top2] = x;
          } else {
              cout << "Stack Overflow";
          }
      }

      int pop1() {
          if (top1 >= 0) {
              int x = arr[top1];
              top1--;
              return x;
          } else {
              return -1;
          }
      }

      int pop2() {
          if (top2 < size) {
              int x = arr[top2];
              top2++;
              return x;
          } else {
              return -1;
          }
      }
  };
  ```
  </TabItem>
</Tabs>

## Solution Logic

1. **Initialize pointers**: Use `top1` initialized to `-1` for Stack 1 and `top2` initialized to `size` for Stack 2.
2. **Push operations**: Check for space before pushing:
    - For Stack 1, increment `top1` and insert the element.
    - For Stack 2, decrement `top2` and insert the element.
3. **Pop operations**: Check if the stack is empty before popping:
    - For Stack 1, return the element at `top1` and decrement `top1`.
    - For Stack 2, return the element at `top2` and increment `top2`.
4. **Check overflow and underflow**: Ensure there is no overflow by checking if `top1` is less than `top2 - 1` before pushing. Ensure no underflow by checking the pointers before popping.

## Time Complexity

$O(1)$ for all the operations, as the operations of push and pop involve a fixed number of steps.

## Space Complexity

$O(1)$ auxiliary space, as the additional space used does not depend on the input size and is constant.

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/implement-two-stacks-in-an-array/)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)

This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.