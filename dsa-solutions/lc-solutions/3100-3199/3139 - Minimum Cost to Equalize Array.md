---
id: minimum-cost-to-equalize-array
title: Minimum Cost to Equalize Array
sidebar_label: 3139 Minimum Cost to Equalize Array
tags:
- Java
- Array
- Greedy
- Enumeration
description: "This document provides a solution where we Return the minimum cost required to make all elements in the array equal."
---

## Problem

You are given an integer array $nums$ and two integers $cost1$ and $cost2$. You are allowed to perform either of the following operations any number of times:

- Choose an index $i$ from nums and increase $nums[i]$ by $1$ for a cost of $cost1$.

- Choose two different indices $i$, $j$, from nums and increase $nums[i]$ and $nums[j]$ by $1$ for a cost of $cost2$.

### Examples

**Example 1:**

```
Input: nums = [4,1], cost1 = 5, cost2 = 2

Output: 15

Explanation: 

The following operations can be performed to make the values equal:

Increase nums[1] by 1 for a cost of 5. nums becomes [4,2].

Increase nums[1] by 1 for a cost of 5. nums becomes [4,3].

Increase nums[1] by 1 for a cost of 5. nums becomes [4,4].

The total cost is 15.
```

**Example 2:**

```
Input: nums = [2,3,3,3,5], cost1 = 2, cost2 = 1

Output: 6

Explanation: 

The following operations can be performed to make the values equal:

Increase nums[0] and nums[1] by 1 for a cost of 1. nums becomes [3,4,3,3,5].

Increase nums[0] and nums[2] by 1 for a cost of 1. nums becomes [4,4,4,3,5].

Increase nums[0] and nums[3] by 1 for a cost of 1. nums becomes [5,4,4,4,5].

Increase nums[1] and nums[2] by 1 for a cost of 1. nums becomes [5,5,5,4,5].

Increase nums[3] by 1 for a cost of 2. nums becomes [5,5,5,5,5]

The total cost is 6.
```

**Example 3:**

```
Input: nums = [3,5,3], cost1 = 1, cost2 = 3

Output: 4

Explanation: 

The following operations can be performed to make the values equal:

Increase nums[0] by 1 for a cost of 1. nums becomes [4,5,3].

Increase nums[0] by 1 for a cost of 1. nums becomes [5,5,3].

Increase nums[2] by 1 for a cost of 1. nums becomes [5,5,4].

Increase nums[2] by 1 for a cost of 1. nums becomes [5,5,5].

The total cost is 4.
```

### Constraints

- $1 <= nums.length <= 10^5$
- $1 <= nums[i] <= 10^6$
- $1 <= cost1 <= 10^6$
- $1 <= cost2 <= 10^6$
---

## Approach

To solve the problem, we need to understand the nature of the allowed moves:

1. **Initial Checks**:

   - If **'cost1$ * 2 <= $cost2'** or the array length is less than 3, always using the single increment operation is more efficient because the double increment operation is not cost-effective or there aren't enough elements to pair up effectively.
     
2. **Target Value Calculation**:

   - Calculate the total sum of the array.
     
   - Determine the range of possible target values. The target values are from the current maximum element to just below twice the maximum element. This ensures we consider a broad enough range to find the minimal cost.
   
3. **Gap Calculation**:

   - For each potential target value, compute the total gap, which is the sum of the differences between the target and each element in the array.
     
   - Calculate the maximum possible gap for a single element in the array, given the current minimum element.
     
4. **Cost Calculation**:

   - Determine the number of pairs that can be used efficiently without exceeding the total gap.
     
   - Calculate the minimal cost using a combination of single and double increment operations.
    
5. **Optimization**:

   - Iterate through possible target values to find the minimal cost and return it modulo $10^9$ + 7.
     
## Solution for Minimum Cost to Equalize Array

The problem involves to minimize the total cost of increasing elements, compare the efficiency of using single increments at cost1 versus double increments at cost2. Use double increments whenever cost2 is less than twice cost1 for cost-effectiveness.

#### Code in Java

```java
class Solution {
  public int minCostToEqualizeArray(int[] nums, int cost1, int cost2) {
    final int kMod = 1_000_000_007;
    final int n = nums.length;
    final int minNum = Arrays.stream(nums).min().getAsInt();
    final int maxNum = Arrays.stream(nums).max().getAsInt();
    final long sum = Arrays.stream(nums).asLongStream().sum();
    long ans = Long.MAX_VALUE;

    if (cost1 * 2 <= cost2 || n < 3) {
      final long totalGap = 1L * maxNum * n - sum;
      return (int) ((cost1 * totalGap) % kMod);
    }

    for (int target = maxNum; target < 2 * maxNum; ++target) {
      final int maxGap = target - minNum;
      final long totalGap = 1L * target * n - sum;
      final long pairs = Math.min(totalGap / 2, totalGap - maxGap);
      ans = Math.min(ans, cost1 * (totalGap - 2 * pairs) + cost2 * pairs);
    }

    return (int) (ans % kMod);
  }
}
    
```

### Complexity Analysis

#### Time Complexity: $O(n)$

> **Reason**: For Finding the minimum, maximum, and sum of the array takes $O(𝑛)$.

#### Space Complexity: $O(1)$

> **Reason**: The space complexity is $O(1)$ since we only use a constant amount of extra space beyond the input array.

# References

- **LeetCode Problem:** [Minimum Cost to Equalize Array](https://leetcode.com/problems/minimum-cost-to-equalize-array/description/)
- **Solution Link:** [Minimum Cost to Equalize Array Solution on LeetCode](https://leetcode.com/problems/minimum-cost-to-equalize-array/solutions/)
- **Authors LeetCode Profile:** [Vivek Vardhan](https://leetcode.com/u/vivekvardhan43862/)
