---
id: sqrt-x
title: Sqrt(x) (LeetCode)
difficulty: Easy
sidebar_label: 0069-SqrtX
topics:
  - Math
  - Binary Search
---


## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/sqrtx/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/sqrtx/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

## Problem Description

Given a non-negative integer `x`, return the square root of `x` rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

### Examples

#### Example 1:

- **Input:** `x = 4`
- **Output:** `2`
- **Explanation:** The square root of 4 is 2, so we return 2.

#### Example 2:

- **Input:** `x = 8`
- **Output:** `2`
- **Explanation:** The square root of 8 is approximately 2.82842..., and since we round it down to the nearest integer, 2 is returned.

### Constraints:

- `0 <= x <= 2^31 - 1`

### Approach

To find the square root of a non-negative integer `x` without using built-in functions, we can use binary search within the range `[0, x]`.

1. Initialize variables `left` and `right` to represent the search range `[0, x]`.
2. Perform binary search within this range, updating the `mid` value as `(left + right) / 2`.
3. If `mid * mid` is greater than `x`, update `right` to `mid - 1`.
4. If `mid * mid` is less than or equal to `x`, update `left` to `mid + 1`.
5. Repeat steps 2-4 until `left` is greater than `right`.
6. Return the value of `right`, which represents the largest integer whose square is less than or equal to `x`.

### Solution Code

#### Python

```
class Solution(object):
    def mySqrt(self, x):
        if x < 2:
            return x
        left, right = 1, x
        while left <= right:
            mid = (left + right) // 2
            if mid * mid == x:
                return mid
            elif mid * mid < x:
                left = mid + 1
            else:
                right = mid - 1
        return right
```

#### C++

```
class Solution {
public:
    int mySqrt(int x) {
        if (x == 0) {
            return 0;
        }
        
        long left = 1, right = x;
        while (left <= right) {
            long mid = (left + right) / 2;
            if (mid * mid == x) {
                return mid;
            } else if (mid * mid < x) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return right;
    }
};
```

#### Java

```
class Solution {
    public int mySqrt(int x) {
        if (x == 0) {
            return 0;
        }
        
        long left = 1, right = x;
        while (left <= right) {
            long mid = (left + right) / 2;
            if (mid * mid == x) {
                return (int)mid;
            } else if (mid * mid < x) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return (int)right;
    }
}
```

### Conclusion

The "Sqrt(x)" problem can be efficiently solved using binary search within the range `[0, x]`. The provided solution code implements this approach in Python, C++, and Java, providing an optimal solution to the problem.