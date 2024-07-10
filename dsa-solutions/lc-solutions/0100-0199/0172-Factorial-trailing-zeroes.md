---
id: factorial-trailing-zeroes
title: Factorial Trailing Zeroes
sidebar_label: 0172-Factorial Trailing Zeroes
tags: [Math]
description: Given an integer n, return the number of trailing zeroes in n!.

---

## Problem Statement

Given an integer `n`, return the number of trailing zeroes in `n!`.


### Examples

**Example 1:**

```plaintext
Input: n = 3
Output: 0
Explanation: 3! = 6, no trailing zero.
```

**Example 2:**

```plaintext
Input: n = 5
Output: 1
Explanation: 5! = 120, one trailing zero.
```

**Example 3:**

```plaintext
Input: n = 0
Output: 0
```

### Constraints
$0 \leq n \leq 10^4$

## Solution

### Approach 


To find the number of trailing zeroes in `n!`, we need to count the number of times 10 is a factor in the numbers from 1 to `n`. Since 10 is the product of 2 and 5, and there are usually more factors of 2 than 5, the number of trailing zeroes is determined by the number of times 5 is a factor in the numbers from 1 to `n`. 


#### Algorithm

1. Initialize `count` to 0. This will hold the number of trailing zeroes.
2. While `n` is greater than 0:
- Divide `n` by 5.
- Add the result to `count`.
- Repeat the process with the updated value of `n`.
3. Return the final `count`.

#### Implementation

```Java
public class Solution {
    public int trailingZeroes(int n) {
        int count = 0;
        while (n > 0) {
            n /= 5;
            count += n;
        }
        return count;
    }
}

```

### Complexity Analysis

- **Time complexity**: $O(\log_5 n)$
    * The time complexity is $O(\log_5 n)$ because we repeatedly divide `n` by 5.

- **Space complexity**: $O(1)$
    * The space complexity is $O(1)$ as we are using only a constant amount of extra space

### Conclusion

This solution efficiently calculates the number of trailing zeroes in `n!` by counting the factors of 5 in the numbers from 1 to `n`. The approach is both time and space efficient, making it suitable for handling large input sizes.
