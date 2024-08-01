---
id: shortest-subarray-with-or-at-least-k
title: Shortest Subarray With OR at Least K (LeetCode)
sidebar_label: 3095-ShortestSubarrayWithORAtLeastK
tags:
  - Array
  - Bitwise Operations
  - Sliding Window
description: Find the length of the shortest special subarray where the bitwise OR is at least k.
sidebar_position: 3095
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Shortest Subarray With OR at Least K](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k/) | [Shortest Subarray With OR at Least K Solution on LeetCode](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

You are given an array `nums` of non-negative integers and an integer `k`.

An array is called special if the bitwise OR of all of its elements is at least `k`.

Return the length of the shortest special non-empty subarray of `nums`, or return `-1` if no special subarray exists.

### Example 1

- **Input:** `nums = [1,2,3]`, `k = 2`
- **Output:** `1`
- **Explanation:** The subarray `[3]` has OR value of 3. Hence, we return 1.

### Example 2

- **Input:** `nums = [2,1,8]`, `k = 10`
- **Output:** `3`
- **Explanation:** The subarray `[2,1,8]` has OR value of 11. Hence, we return 3.

### Example 3

- **Input:** `nums = [1,2]`, `k = 0`
- **Output:** `1`
- **Explanation:** The subarray `[1]` has OR value of 1. Hence, we return 1.

### Constraints

- `1 <= nums.length <= 50`
- `0 <= nums[i] <= 50`
- `0 <= k < 64`

## Approach

To solve this problem, we can use a sliding window approach to find the shortest subarray with the desired properties. The idea is to maintain a window that keeps track of the OR of its elements and check if it meets the condition. Here's the approach:

1. **Sliding Window**:
   - Use two pointers (`left` and `right`) to represent the current window.
   - Move the `right` pointer to expand the window and calculate the OR of the current window.
   - Once the OR of the current window is at least `k`, move the `left` pointer to find the shortest subarray.

2. **Bitwise OR Calculation**:
   - Continuously calculate the OR value of the elements in the current window.

3. **Edge Cases**:
   - Handle cases where no subarray meets the condition.

### Solution Code

#### Python

```python
class Solution:
    def shortestSubarrayWithORAtLeastK(self, nums: List[int], k: int) -> int:
        n = len(nums)
        min_length = float('inf')
        
        for i in range(n):
            current_or = 0
            for j in range(i, n):
                current_or |= nums[j]
                if current_or >= k:
                    min_length = min(min_length, j - i + 1)
                    break
        return min_length if min_length != float('inf') else -1
```

#### C++
```c++
class Solution {
public:
    int shortestSubarrayWithORAtLeastK(vector<int>& nums, int k) {
        int n = nums.size();
        int minLength = INT_MAX;

        for (int i = 0; i < n; ++i) {
            int currentOr = 0;
            for (int j = i; j < n; ++j) {
                currentOr |= nums[j];
                if (currentOr >= k) {
                    minLength = min(minLength, j - i + 1);
                    break;
                }
            }
        }

        return minLength == INT_MAX ? -1 : minLength;
    }
};
```

#### Java
```java
class Solution {
    public int shortestSubarrayWithORAtLeastK(int[] nums, int k) {
        int n = nums.length;
        int minLength = Integer.MAX_VALUE;

        for (int i = 0; i < n; i++) {
            int currentOr = 0;
            for (int j = i; j < n; j++) {
                currentOr |= nums[j];
                if (currentOr >= k) {
                    minLength = Math.min(minLength, j - i + 1);
                    break;
                }
            }
        }

        return minLength == Integer.MAX_VALUE ? -1 : minLength;
    }
}
```

### Conclusion
The provided solutions use a nested loop approach to find the shortest subarray that meets the 
condition. Adjustments for different languages and edge cases are handled to ensure robustness 
across different inputs.