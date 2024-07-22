---
id: nth-fibonacci-number
title: Nth Fibonacci Number
sidebar_label: Nth Fibonacci Number
tags:
  - Easy
  - Dynamic Programming
  - Math
description: "This tutorial covers the solution to the Nth Fibonacci Number problem from the GeeksforGeeks."
---
## Problem Description

Given a positive integer `n`, find the nth Fibonacci number. Since the answer can be very large, return the answer modulo `1000000007`.

Note: For this question, take the first Fibonacci number to be 1.

## Examples

**Example 1:**

```
Input: n = 1
Output: 1
```

**Example 2:**

```
Input: n = 5
Output: 5
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `nthFibonacci()` which takes the integer `n` as input and returns the nth Fibonacci number modulo `1000000007`.

Expected Time Complexity: $O(n)$

Expected Auxiliary Space: $O(n)$ for dynamic programming or $O(1)$ for iterative approach.

## Constraints

* `1 ≤ n ≤ 10^7`

## Problem Explanation

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 1 and 1. The nth Fibonacci number can be computed using the formula: `F(n) = F(n-1) + F(n-2)`. For large values of `n`, the result should be returned modulo `1000000007`.

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@arunimad6yuq"/>

  ```py
  MOD = 1000000007

  class Solution:
      def nthFibonacci(self, n: int) -> int:
          if n == 1 or n == 2:
              return 1
          
          a, b = 1, 1
          for i in range(3, n + 1):
              a, b = b, (a + b) % MOD
          
          return b

  # Example usage
  if __name__ == "__main__":
      solution = Solution()
      print(solution.nthFibonacci(1))  # Expected output: 1
      print(solution.nthFibonacci(5))  # Expected output: 5
  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@YourUsername"/>

  ```cpp
  //{ Driver Code Starts
  #include <bits/stdc++.h>
  using namespace std;

  // } Driver Code Ends
  class Solution {
  public:
      // Function to find nth Fibonacci number
      int nthFibonacci(int n) {
          const int MOD = 1000000007;
          if (n == 1 || n == 2) return 1;

          int a = 1, b = 1, c;
          for (int i = 3; i <= n; ++i) {
              c = (a + b) % MOD;
              a = b;
              b = c;
          }
          return b;
      }
  };

  //{ Driver Code Starts.
  int main() {
      int t;
      cin >> t;
      while (t--) {
          int n;
          cin >> n;
          Solution obj;
          cout << obj.nthFibonacci(n) << endl;
      }
      return 0;
  }
  // } Driver Code Ends
  ```

  </TabItem>

  <TabItem value="Javascript" label="Javascript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```javascript
class Solution {
  nthFibonacci(n) {
    if (n === 1 || n === 2) return 1;
    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
      [a, b] = [b, (a + b) % 1000000007];
    }
    return b;
  }
}ut: 5

  ```

  </TabItem>

  <TabItem value="Typescript" label="Typescript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```typescript
class Solution {
  nthFibonacci(n: number): number {
    if (n === 1 || n === 2) return 1;
    let a: number = 1, b: number = 1;
    for (let i: number = 3; i <= n; i++) {
      [a, b] = [b, (a + b) % 1000000007];
    }
    return b;
  }
}

  ```

  </TabItem>

  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>

  ```java
public class Solution {
  public int nthFibonacci(int n) {
    if (n == 1 || n == 2) return 1;
    int a = 1, b = 1;
    for (int i = 3; i <= n; i++) {
      int sum = (a + b) % 1000000007;
      a = b;
      b = sum;
    }
    return b;
  }
}

  ```

  </TabItem>
</Tabs>


## Time Complexity

* The iterative approach has a time complexity of $O(n)$.

## Space Complexity

* The space complexity is $O(1)$ since we are using only a fixed amount of extra space.