---
id: nth-root-of-m
title: Nth root of M
sidebar_label: Nth-root-of-M
tags:
  - Mathematical
  - Algorithm
description: "This tutorial covers the solution to the Nth root of M problem from the GeeksforGeeks."
---
## Problem Description
You are given 2 numbers `(n, m)`; the task is to find `n√m` (`nth` root of `m`).


## Examples

**Example 1:**

```
Input: n = 2, m = 9
Output: 3
Explanation: 3^2 = 9
```

**Example 2:**

```
Input: n = 3, m = 9
Output: -1
Explanation: 3rd root of 9 is not
integer.
```

## Your Task

You don't need to read or print anyhting. Your task is to complete the function NthRoot() which takes n and m as input parameter and returns the nth root of m. If the root is not integer then returns -1.


## Constraints

* `1 <= n <= 30`
* `1 <= m <= 10^9`

## Problem Explanation
You are given 2 numbers (n , m); the task is to find n√m (nth root of m).

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@arunimad6yuq"/>

  ```py
 import math

n = 3
m = 27
result = m ** (1/n)
print(result)

  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@YourUsername"/>

  ```cpp
 #include <cmath>
#include <iostream>

int main() {
    int n = 3;
    int m = 27;
    double result = pow(m, 1.0 / n);
    std::cout << result << std::endl;
    return 0;
}

  ```

  </TabItem>

  <TabItem value="Javascript" label="Javascript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```javascript

function nthRoot(n, m) {
    return Math.pow(m, 1/n);
}



  ```

  </TabItem>

  <TabItem value="Typescript" label="Typescript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```typescript
function nthRoot(n: number, m: number): number {
    return Math.pow(m, 1/n);
}


  ```

  </TabItem>

  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```java
public class Main {
    public static void main(String[] args) {
        int n = 3;
        int m = 27;
        double result = Math.pow(m, 1.0 / n);
        System.out.println(result);
    }
}


  ```

  </TabItem>
</Tabs>


## Time Complexity

* The iterative approach has a time complexity of $O(1)$.

## Space Complexity

* The space complexity is $O(1)$ since we are using only a fixed amount of extra space.