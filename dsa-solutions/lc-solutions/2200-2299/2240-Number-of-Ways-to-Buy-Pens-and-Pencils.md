---
id:  Number-of-Ways-to-Buy-Pens-and-Pencils
title:  Number of Ways to Buy Pens and Pencils
sidebar_label: 2240-Number of Ways to Buy Pens and Pencils
tags:
  - Enumerations
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

You are given an integer total indicating the amount of money you have. You are also given two integers cost1 and cost2 indicating the price of a pen and pencil respectively. You can spend part or all of your money to buy multiple quantities (or none) of each kind of writing utensil.

Return the number of distinct ways you can buy some number of pens and pencils.

### Examples

**Example 1:**

Input: total = 20, cost1 = 10, cost2 = 5
Output: 9
Explanation: The price of a pen is 10 and the price of a pencil is 5.
- If you buy 0 pens, you can buy 0, 1, 2, 3, or 4 pencils.
- If you buy 1 pen, you can buy 0, 1, or 2 pencils.
- If you buy 2 pens, you cannot buy any pencils.
The total number of ways to buy pens and pencils is 5 + 3 + 1 = 9.

**Example 2:**

Input: total = 5, cost1 = 10, cost2 = 10
Output: 1
Explanation: The price of both pens and pencils are 10, which cost more than total, so you cannot buy any writing utensils. Therefore, there is only 1 way: buy 0 pens and 0 pencils.


### Constraints

- `1 <= total, cost1, cost2 <= 106`

### Approach

Iterate Over Possible Pen Purchases: Iterate over the number of pens that can be bought, starting from 0 up to the maximum number that can be afforded with the total money.
Calculate Remaining Money for Pencils: For each number of pens bought, calculate the remaining money that can be used to buy pencils.
Calculate Number of Pencils: Determine the number of pencils that can be bought with the remaining money.
Sum Up All Combinations: Sum up all the valid combinations of pens and pencils that can be bought.

### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <iostream>

int waysToBuyPensPencils(int total, int cost1, int cost2) {
    int count = 0;
    for (int pens = 0; pens <= total / cost1; ++pens) {
        int remaining_money = total - pens * cost1;
        int pencils = remaining_money / cost2;
        count += pencils + 1;
    }
    return count;
}

int main() {
    std::cout << waysToBuyPensPencils(20, 10, 5) << std::endl;  // Output: 9
    std::cout << waysToBuyPensPencils(5, 10, 10) << std::endl;  // Output: 1
    return 0;
}



```

### Java Solution

```java
public class Main {
    public static int waysToBuyPensPencils(int total, int cost1, int cost2) {
        int count = 0;
        for (int pens = 0; pens <= total / cost1; ++pens) {
            int remainingMoney = total - pens * cost1;
            int pencils = remainingMoney / cost2;
            count += pencils + 1;
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(waysToBuyPensPencils(20, 10, 5));  // Output: 9
        System.out.println(waysToBuyPensPencils(5, 10, 10));  // Output: 1
    }
}


```

### Python Solution

```python
def waysToBuyPensPencils(total, cost1, cost2):
    count = 0
    for pens in range(total // cost1 + 1):
        remaining_money = total - pens * cost1
        pencils = remaining_money // cost2
        count += pencils + 1
    return count

# Example usage:
print(waysToBuyPensPencils(20, 10, 5))  # Output: 9
print(waysToBuyPensPencils(5, 10, 10))  # Output: 1



```

### Complexity Analysis

### Time Complexity: $O(n)$

> **Reason**:Here, n represents the total amount of money, and the complexity indicates that the number of operations scales linearly with n. This simplification assumes a worst-case scenario where the number of iterations is directly proportional to the total amount of money.

### Space Complexity: $O(1)$

> **Reason**: no extra auxiliary space.


