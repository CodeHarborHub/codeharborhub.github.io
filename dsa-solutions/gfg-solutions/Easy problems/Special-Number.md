---
id: special-numbers
title: Special Numbers
sidebar_label: Special-Numbers
tags:
  - Mathematical
  - Algorithms
description: "This tutorial covers the solution to the Special Numbers problem from the GeeksforGeeks."
---
## Problem Description

A number is a special number if it’s digits only consist `0`, `1`, `2`, `3`, `4` or `5`. Given a number N and we have to find N-th Special Number. 

## Examples

**Example 1:**

```
Input:
N = 6
Output: 5
Explanation: First 6 numbers are
( 0, 1, 2, 3, 4, 5 )
```

**Example 2:**

```
Input: 
N = 7
Output: 10
Explanation: First 7 numbers are
( 0, 1, 2, 3, 4, 5, 10 )
```


Expected Time Complexity: O(logN)

Expected Auxiliary Space: O(1)

## Constraints

* `1 ≤ N ≤ 10^5`

## Problem Explanation

The task is to traverse the number and count the digits.

## Code Implementation

### C++ Solution

```cpp
int findNthSpecial(int N) {
    int count = 0;
    int num = 0;
    while (true) {
        num++;
        if (isSpecial(num)) {
            count++;
            if (count == N) {
                return num;
            }
        }
    }
}

bool isSpecial(int num) {
    while (num > 0) {
        int digit = num % 10;
        if (digit > 5) {
            return false;
        }
        num /= 10;
    }
    return true;
}



```

```java
public int findNthSpecial(int N) {
    int count = 0;
    int num = 0;
    while (true) {
        num++;
        if (isSpecial(num)) {
            count++;
            if (count == N) {
                return num;
            }
        }
    }
}

public boolean isSpecial(int num) {
    while (num > 0) {
        int digit = num % 10;
        if (digit > 5) {
            return false;
        }
        num /= 10;
    }
    return true;
}


```

```python

def find_nth_special(N):
    count = 0
    num = 0
    while True:
        num += 1
        if is_special(num):
            count += 1
            if count == N:
                return num

def is_special(num):
    while num > 0:
        digit = num % 10
        if digit > 5:
            return False
        num //= 10
    return True


```

```javascript
function findNthSpecial(N) {
    let count = 0;
    let num = 0;
    while (true) {
        num++;
        if (isSpecial(num)) {
            count++;
            if (count === N) {
                return num;
            }
        }
    }
}

function isSpecial(num) {
    while (num > 0) {
        const digit = num % 10;
        if (digit > 5) {
            return false;
        }
        num = Math.floor(num / 10);
    }
    return true;
}



```

## Solution Logic:
1. Initialize a counter count to 0 and a number num to 0.
2. Iterate through numbers starting from 1.
3. For each number, check if it's special (i.e., its digits only consist of 0, 1, 2, 3, 4, or 5) using the isSpecial function.
4. If the number is special, increment the count.
5. If the count reaches N, return the current number.
6. Repeat steps 2-5 until the N-th special number is found.

## Time Complexity

- The `isSpecial` function has a time complexity of O(log num), where num is the input number, because it iterates through the digits of the number.

- The main function findNthSpecial has a time complexity of O(N log M), where N is the input number and M is the N-th special number, because it iterates through numbers and calls the isSpecial function for each number.



## Space Complexity

- The solution uses a constant amount of space to store the count and num variables, so the space complexity is O(1).
