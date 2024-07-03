---
id: power-of-2
title: Power of 2
tags: [Easy, Bit Manipulation, GeeksforGeeks, CPP, Python, DSA]
description: "This tutorial covers the solution to the Power of 2 problem from the GeeksforGeeks website, featuring implementations in Python and C++."
---

## Problem Description

Given a non-negative integer `n`, the task is to check if it is a power of 2.

## Examples

**Example 1:**

```
Input: n = 1
Output: true
Explanation: 2^0 = 1
```

**Example 2:**

```
Input: n = 16
Output: true
Explanation: 2^4 = 16
```

**Example 3:**

```
Input: n = 3
Output: false
Explanation: 3 is not a power of 2
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `isPowerofTwo()` which takes an integer `n` as input and returns `true` if `n` is a power of 2, otherwise `false`.

Expected Time Complexity: $O(1)$

Expected Auxiliary Space: $O(1)$

## Constraints

- `0 ≤ n ≤ 10^18`

## Problem Explanation

A number is a power of 2 if there exists an integer `x` such that `n = 2^x`. 

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@YourUsername"/>

  ```python
  class Solution:
      def isPowerofTwo(self, n: int) -> bool:
          if n <= 0:
              return False
          # A power of two has exactly one bit set in binary representation
          return (n & (n - 1)) == 0

  # Example usage
  if __name__ == "__main__":
      solution = Solution()
      print(solution.isPowerofTwo(16))  # Expected output: True
      print(solution.isPowerofTwo(3))   # Expected output: False
  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@YourUsername"/>

  ```cpp
  #include <bits/stdc++.h>
  using namespace std;

  class Solution {
  public:
      // Function to check if given number n is a power of two.
      bool isPowerofTwo(long long n) {
          if (n <= 0) return false;
          // A power of two has exactly one bit set in binary representation
          return (n & (n - 1)) == 0;
      }
  };

  int main() {
      int t;
      cin >> t; // testcases

      for (int i = 0; i < t; i++) {
          long long n; // input a number n
          cin >> n;
          Solution ob;
          if (ob.isPowerofTwo(n))
              cout << "true" << endl;
          else
              cout << "false" << endl;
      }
      return 0;
  }
  ```

  </TabItem>
</Tabs>

## Solution Logic:

1. A number `n` is a power of 2 if it has exactly one bit set in its binary representation.
2. To check this, you can use the property: `n & (n - 1) == 0`.
3. This expression is true only for powers of 2.

## Time Complexity

- The function operates in constant time, $O(1)$.

## Space Complexity

- The function uses constant space, $O(1)$.

## References

- **GeeksforGeeks Problem:** [Power of 2](https://www.geeksforgeeks.org/problems/power-of-2-1587115620/1)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)
