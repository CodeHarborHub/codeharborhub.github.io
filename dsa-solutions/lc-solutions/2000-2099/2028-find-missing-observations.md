---
id: find-missing-observations
title: Find Missing Observations
sidebar_label: 2028 Find Missing Observations
tags:
  - Array
  - Simulation
  - Leetcode
---

## Problem Description

You have observations of n + m 6-sided dice rolls with each face numbered from 1 to 6. n of the observations went missing, and you only have the observations of m rolls. Fortunately, you have also calculated the average value of the n + m rolls.

You are given an integer array rolls of length m where rolls[i] is the value of the ith observation. You are also given the two integers mean and n.

Return an array of length n containing the missing observations such that the average value of the n + m rolls is exactly mean. If there are multiple valid answers, return any of them. If no such array exists, return an empty array.

### Examples

**Example 1**

```
Input: rolls = [3,2,4,3], mean = 4, n = 2
Output: [6,6]
Explanation: The mean of all n + m rolls is (3 + 2 + 4 + 3 + 6 + 6) / 6 = 4.
```
**Example 2**

```
Input: rolls = [1,5,6], mean = 3, n = 4
Output: [2,3,2,2]
Explanation: The mean of all n + m rolls is (1 + 5 + 6 + 2 + 3 + 2 + 2) / 7 = 3.
```

**Example 3**
```
Input: rolls = [1,2,3,4], mean = 6, n = 4
Output: []
Explanation: It is impossible for the mean to be 6 no matter what the 4 missing rolls are.
```

### Constraints

- `m == rolls.length`
- `1 <= n, m <= 10^5`
- `1 <= rolls[i], mean <= 6`

### Approach

To find the missing observations, calculate the total sum required for the n + m rolls based on the given mean. Then determine the sum of the provided rolls (`sum_rolls`). Compute the target sum for all rolls (`total_sum = mean * (n + m)`). Calculate the difference `missing_sum = total_sum - sum_rolls`. If `missing_sum` is negative or not divisible by n, return an empty array. Otherwise, distribute `missing_sum / n` to each missing observation in the result array.

#### C++ 

```cpp

class Solution {
public:
    vector<int> missingRolls(vector<int>& rolls, int mean, int n) {
        int m = rolls.size();
        int sumRolls = 0;
        
        for (int roll : rolls) {
            sumRolls += roll;
        }
        
        int totalSum = mean * (n + m);
        int missingSum = totalSum - sumRolls;
        
        if (missingSum < n || missingSum > 6 * n || missingSum % n != 0) {
            return {};
        }
        
        vector<int> result(n, missingSum / n);
        return result;
    }
};
```