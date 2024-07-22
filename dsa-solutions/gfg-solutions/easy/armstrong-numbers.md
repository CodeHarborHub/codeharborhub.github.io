---
id: armstrong-numbers
title: Armstrong Numbers
sidebar_label: 0104-Armstrong Numbers

tags:
  - Mathematical
  - Algorithms
description: "A solution to the problem of determining whether the given number is armstrong number or not"
---

In this page, we will solve the problem of determining whether the given number is armstrong number or not.

## Problem Description

You are given a 3-digit number n, Find whether it is an Armstrong number or not.

An Armstrong number of three digits is a number such that the sum of the cubes of its digits is equal to the number itself. 371 is an Armstrong number since 33 + 73 + 13 = 371. 

Note: Return "true" if it is an Armstrong number else return "false".

### Examples

**Example 1:**

```plaintext
Input: n = 153
Output: true
Explanation: 153 is an Armstrong number since 13 + 53 + 33 = 153. Hence answer is "true".
```

**Example 2:**

```plaintext
Input: n = 372
Output: false
Explanation: 372 is not an Armstrong number since 33 + 73 + 23 = 378. Hence answer is "false".
```

### Constraints

- $100 \leq N &lt 1000$

## Solution

### Intuition and Approach

This problem can be solved by running a while loop three time and get the unit digit every time and add the cube of that digit into ans after the loop if the sum result is same as that of givrn num than return "true" and if not then return "false".

### Approach: 

1. First we initialize three variables i,Sum,and temp.
   - 'i' is initialized to 0. This variable will be used as a counter to keep track of the number of digits processed.
   - 'Sum' is initialized to 0. This variable will accumulate the sum of the cubes of the digits of n.
   - 'temp' is assigned the value of n. This is to store the original number for comparison later.
2. Next we run a while loop runs as long as i is less than or equal to 3. Since we're dealing with 3-digit numbers, this ensures that we process exactly 3 digits.
   - In each iteration of the loop:
      - The last digit of n is obtained using n % 10.
      - The cube of this digit is added to Sum.
      - n is then divided by 10 using integer division (n //= 10), effectively removing the last digit.
      - i is incremented by 1.
3. After the loop, Sum contains the sum of the cubes of the digits of n.The original number (temp) is compared with Sum.
   - If temp is equal to Sum, the function returns "true", indicating that n is an Armstrong number.
   - Otherwise, it returns "false".
#### Code in Python
```python
class Solution:
  def armstrongNumber (self, n):
    i=0
    Sum=0
    temp=n
    while(i<=3):
        Sum+=(n%10)**3
        n=n//10
        i+=1
    if temp==Sum:
        return "true"
    return "false"

```

#### Complexity Analysis

- **Time Complexity:** $O(1)$
- **Space Complexity:** $O(1)$

