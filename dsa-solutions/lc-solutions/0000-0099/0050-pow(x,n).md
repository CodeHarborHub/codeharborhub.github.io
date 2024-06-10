---
id: powx-n
title: Pow(x,n)
difficulty: Medium
sidebar_label: 0050-powxn
tags:
  - Math
  - Recursion
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Pow(x,n)](https://leetcode.com/problems/powx-n/description/) | [Pow(x,n) Solution on LeetCode](https://leetcode.com/problems/powx-n/solutions/) |  [Leetcode Profile](https://leetcode.com/u/debangi_29/) |

## Problem Description

Implement pow(x, n), which calculates x raised to the power n (i.e., $x^n$).

 

### Examples

### Example 1:

**Input**: x = 2.00000, n = 10

**Output**: 1024.00000


### Example 2:

**Input**: x = 2.10000, n = 3

**Output**: 9.26100

### Example 3:

**Input**: x = 2.00000, n = -2

**Output**: 0.25000

**Explanation**: 2-2 = 1/22 = 1/4 = 0.25
 

### Constraints

- $-100.0 < x < 100.0$
- $-2^{31} \leq n \leq 2^{31} - 1$
- $n$ is an integer.
- Either $x$ is not zero or $n > 0$.
- $-10^{4} \leq x^{n} \leq 10^{4}$

### Approach
Initialize ans as 1.0  and store a duplicate copy of n i.e nn using to avoid overflow

Check if nn is a negative number, in that case, make it a positive number.

Keep on iterating until nn is greater than zero, now if nn is an odd power then multiply x with ans ans reduce nn by 1. Else multiply x with itself and divide nn by two.

Now after the entire binary exponentiation is complete and nn becomes zero, check if n is a negative value we know the answer will be 1 by and.

### Solution Code

#### Python

```
class Solution:
 def myPow(x: float, n: int) -> float:
    ans = 1.0
    nn = n
    if nn < 0:
        nn = -1 * nn
    while nn:
        if nn % 2:
            ans = ans * x
            nn = nn - 1
        else:
            x = x * x
            nn = nn // 2
    if n < 0:
        ans = 1.0 / ans
    return ans
```

#### Java

```
class Solution {
  public static double myPow(double x, int n) {
    double ans = 1.0;
    long nn = n;
    if (nn < 0) nn = -1 * nn;
    while (nn > 0) {
      if (nn % 2 == 1) {
        ans = ans * x;
        nn = nn - 1;
      } else {
        x = x * x;
        nn = nn / 2;
      }
    }
    if (n < 0) ans = (double)(1.0) / (double)(ans);
    return ans;
  }
}
```

#### C++

```
class Solution {
 public:
  double myPow(double x, int n) {
  double ans = 1.0;
  long long nn = n;
  if (nn < 0) nn = -1 * nn;
  while (nn) {
    if (nn % 2) {
      ans = ans * x;
      nn = nn - 1;
    } else {
      x = x * x;
      nn = nn / 2;
    }
  }
  if (n < 0) ans = (double)(1.0) / (double)(ans);
  return ans;
}
};

```

### Conclusion

- Time Complexity: $O(log n)$ , where n is the exponent; Using Binary exponentiation.

- Space Complexity: $O(1)$ as we are not using any extra space.
