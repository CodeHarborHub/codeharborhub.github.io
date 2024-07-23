---
id: minimum-elements-to-add-to-form-a-given-sum
title: Minimum Elements to Add to Form a Given Sum
sidebar_label: 1785 - Minimum Elements to Add to Form a Given Sum
tags: [Greedy, Array, C++]
description: Solve the problem of finding the minimum number of elements to add to an array to make the sum equal to a given goal while maintaining the property that absolute value of elements does not exceed a specified limit.
---

## Problem Statement

### Problem Description

You are given an integer array `nums` and two integers `limit` and `goal`. The array `nums` has an interesting property that `abs(nums[i]) <= limit`.

Return the minimum number of elements you need to add to make the sum of the array equal to `goal`. The array must maintain its property that `abs(nums[i]) <= limit`.

Note that `abs(x)` equals `x` if `x >= 0`, and `-x` otherwise.

### Example

**Example 1:**
```
Input: nums = [1, -1, 1], limit = 3, goal = -4
Output: 2
```
**Explanation:** You can add -2 and -3, then the sum of the array will be 1 - 1 + 1 - 2 - 3 = -4.


**Example 2:**
```
Input: nums = [1, -10, 9, 1], limit = 100, goal = 0
Output: 1
```

### Constraints

- 1 &lt;= `nums.length` &lt;= 10^5
- 1 &lt;= `limit` &lt;= 10^6
- -`limit` &lt;= `nums[i]` &lt;= `limit`
- -10^9 &lt;= `goal` &lt;= 10^9

## Solution

### Intuition

To solve this problem efficiently, we can use a greedy approach. We need to calculate the difference between the current sum of `nums` and the `goal`. Based on this difference, we can determine how many elements are required to achieve the desired sum. The key steps are:

1. **Calculate the Current Sum**: Compute the sum of the `nums` array.
2. **Determine the Difference**: Find the absolute difference between the current sum and the `goal`.
3. **Calculate the Minimum Number of Elements**: Given that each element added can have a maximum magnitude of `limit`, compute the minimum number of such elements required to cover the difference.

### Time Complexity and Space Complexity Analysis

- **Time Complexity**: 
  - Calculating the sum of the `nums` array takes $O(n)$, where `n` is the length of the array.
  - Calculating the minimum number of elements involves a simple arithmetic operation, which is $O(1)$.

  Overall time complexity is $O(n)$.

- **Space Complexity**:
  - The space complexity is $O(1)$ as we are using a fixed amount of extra space.

### Code

#### C++

```cpp
class Solution {
public:
    int minElements(vector<int>& nums, int limit, int goal) {
        long long sum = accumulate(nums.begin(), nums.end(), 0LL);
        long long diff = abs(sum - goal);
        return (diff + limit - 1) / limit; // Equivalent to ceil(diff / limit)
    }
};
```
#### Python
```python
class Solution:
    def minElements(self, nums: List[int], limit: int, goal: int) -> int:
        current_sum = sum(nums)
        diff = abs(current_sum - goal)
        return (diff + limit - 1) // limit  # Equivalent to ceil(diff / limit)
```

#### Java 
```java
import java.util.List;

class Solution {
    public int minElements(List<Integer> nums, int limit, int goal) {
        long currentSum = 0;
        for (int num : nums) {
            currentSum += num;
        }
        long diff = Math.abs(currentSum - goal);
        return (int) ((diff + limit - 1) / limit); // Equivalent to ceil(diff / limit)
    }
}
```
