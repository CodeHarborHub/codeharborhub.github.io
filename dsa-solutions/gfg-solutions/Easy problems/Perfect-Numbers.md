---
id: perfect-numbers
title: Perfect Numbers
tags:
   - Easy
   - GeeksforGeeks
   - CPP
   - Python
   - DSA
description: "This tutorial covers the solution to the Perfect Numbers problem from the GeeksforGeeks."
---

## Problem Description

Given a number `N`, check if a number is perfect or not. A number is said to be perfect if sum of all its factors excluding the number itself is equal to the number. Return `1` if the number is Perfect otherwise return `0`.

## Examples

**Example 1:**

```
Input:
N = 6
Output:
1 
Explanation:
Factors of 6 are 1, 2, 3 and 6.
Excluding 6 their sum is 6 which
is equal to N itself. So, it's a
Perfect Number.
```

**Example 2:**

```
Input:
N = 10
Output:
0
Explanation:
Factors of 10 are 1, 2, 5 and 10.
Excluding 10 their sum is 8 which
is not equal to N itself. So, it's
not a Perfect Number.
```


## Your Task

You don't need to read input or print anything. Your task is to complete the function `isPerfectNumber()` which takes an Integer `N` as input and returns `1` if `N` is a Perfect number else returns `0`.

Expected Time Complexity: $O(sqrt(N))$

Expected Auxiliary Space: $O(1)$

## Constraints

- `1 ≤ n ≤ 10^12`

## Problem Explanation
Given a number `N`, check if a number is perfect or not. A number is said to be perfect if sum of all its factors excluding the number itself is equal to the number. Return `1` if the number is Perfect otherwise return `0`.


## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```python
 def is_perfect(N):
  sum = 0
  for i in range(1, N):
    if N % i == 0:
      sum += i
  return (sum == N) and 1 or 0

  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```cpp
 int isPerfect(int N) {
  int sum = 0;
  for (int i = 1; i < N; i++) {
    if (N % i == 0) {
      sum += i;
    }
  }
  return (sum == N) ? 1 : 0;
}

  ```

  </TabItem>

    <TabItem value="Javascript" label="Javascript">
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```javascript
function isPerfect(N) {
  let sum = 0;
  for (let i = 1; i < N; i++) {
    if (N % i === 0) {
      sum += i;
    }
  }
  return (sum === N) ? 1 : 0;
}

  ```

  </TabItem>
    <TabItem value="Typescript" label="Typescript">
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```typescript
function isPerfect(N) {
  let sum = 0;
  for (let i = 1; i < N; i++) {
    if (N % i === 0) {
      sum += i;
    }
  }
  return (sum === N) ? 1 : 0;
}

  ```

  </TabItem>


    <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```java
public int isPerfect(int N) {
  int sum = 0;
  for (int i = 1; i < N; i++) {
    if (N % i == 0) {
      sum += i;
    }
  }
  return (sum == N) ? 1 : 0;
}

  ```

  </TabItem>
</Tabs>

## Solution Logic:
The solution iterates through all numbers from 1 to N-1 and checks if the current number is a factor of N. If it is, it adds the number to the sum. Finally, it checks if the sum is equal to N. If it is, the number is perfect, and the function returns 1. Otherwise, it returns 0.


## Time Complexity

- The function operates in constant time, $O(N)$ where N is the input number. This is because the solution iterates through all numbers from 1 to N-1.

## Space Complexity

- The function uses constant space, $O(1)$, because it only uses a few extra variables to store the sum and the current number.
