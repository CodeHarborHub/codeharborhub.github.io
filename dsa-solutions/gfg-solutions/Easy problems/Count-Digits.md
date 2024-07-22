---
id: count-digits
title: Count Digits
sidebar_label: Count-Digits
tags:
  - Modular Arithmetic
  - Algorithms
description: "This tutorial covers the solution to the Count Digits problem from the GeeksforGeeks."
---
## Problem Description

Given a number `n`. Count the number of digits in `n` which evenly divide n. Return an integer, total number of digits of n which divides n evenly.

Note :- Evenly divides means whether `n` is divisible by a digit i.e. leaves a remainder `0` when divided.

## Examples

**Example 1:**

```
Input: n = 12
Output: 2
Explanation: 1, 2 when both divide 12 leaves remainder 0.
```

**Example 2:**

```
Input: n = 2446
Output: 1
Explanation: Here among 2, 4, 6 only 2 divides 2446 evenly while 4 and 6 do not.
```


Expected Time Complexity: O(N)

Expected Auxiliary Space: O(1)

## Constraints

* `1 ≤ N ≤ 10^5`

## Problem Explanation

The task is to traverse the number and count the digits.

## Code Implementation

### C++ Solution

```cpp
int countDigits(int n) {
  int count = 0;
  int temp = n;
  while (temp != 0) {
    int digit = temp % 10;
    if (n % digit == 0) {
      count++;
    }
    temp /= 10;
  }
  return count;
}


```

```java

public int countDigits(int n) {
  int count = 0;
  int temp = n;
  while (temp != 0) {
    int digit = temp % 10;
    if (n % digit == 0) {
      count++;
    }
    temp /= 10;
  }
  return count;
}


```

```python
def count_digits(n):
  count = 0
  temp = n
  while temp != 0:
    digit = temp % 10
    if n % digit == 0:
      count += 1
    temp //= 10
  return count

```

```javascript
function countDigits(n) {
  let count = 0;
  let temp = n;
  while (temp !== 0) {
    const digit = temp % 10;
    if (n % digit === 0) {
      count++;
    }
    temp = Math.floor(temp / 10);
  }
  return count;
}


```

## Solution Logic:
1. Initialize a variable count to 0, which will store the number of digits that evenly divide n.
2. Initialize a variable temp to n, which will be used to iterate through each digit of n.
3. Use a while loop to iterate through each digit of n. In each iteration, do the following:
    - Calculate the current digit by taking the remainder of temp divided by 10 (temp % 10).
    - Check if n is divisible by the current digit by checking if n % digit == 0. If it is, increment count.
    - Update temp by dividing it by 10 (temp /= 10).
4. Return count at the end of the function.



## Time Complexity

* The time complexity is $O(log(n))$ where n is the input number. This is because we are iterating through each digit of n using a while loop, and the number of digits in n is proportional to the logarithm of n.


## Space Complexity

* The auxiliary space complexity is $O(1)$ due to the only extra memory used is for temporary variables while swapping two values in Array.