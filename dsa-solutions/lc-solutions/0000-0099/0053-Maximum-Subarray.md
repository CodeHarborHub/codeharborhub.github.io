---
id: maximum-subarray
title: Maximum Subarray (LeetCode)
difficulty: Medium
sidebar_label: 0053-MaximumSubarray
topics:
  - Array
  - Divide and Conquer
companies:
  - ""
description: |
  Given an integer array nums, find the subarray with the largest sum, and return its sum.
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/maximum-subarray/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/maximum-subarray/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

## Problem Description

Given an integer array `nums`, find the subarray with the largest sum, and return its sum.

### Examples

#### Example 1

- **Input:** nums = [-2,1,-3,4,-1,2,1,-5,4]
- **Output:** 6
- **Explanation:** The subarray [4,-1,2,1] has the largest sum 6.

#### Example 2

- **Input:** nums = [1]
- **Output:** 1
- **Explanation:** The subarray [1] has the largest sum 1.

#### Example 3

- **Input:** nums = [5,4,-1,7,8]
- **Output:** 23
- **Explanation:** The subarray [5,4,-1,7,8] has the largest sum 23.

### Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

### Approach

To find the subarray with the largest sum, we can utilize the Kadane's algorithm, which efficiently solves this problem in linear time complexity O(n).

#### Kadane's Algorithm

1. Initialize two variables `max_sum` and `current_sum` to store the maximum sum found so far and the current sum of subarray, respectively.
2. Iterate through the array:
   - Update `current_sum` by adding the current element to it.
   - If `current_sum` becomes negative, reset it to 0 (indicating the start of a new potential subarray).
   - Update `max_sum` if `current_sum` is greater than `max_sum`.
3. Finally, return `max_sum`.

### Solution Code

#### Python

```
class Solution(object):
    def maxSubArray(self, nums):
        if not nums:
            return 0
        max_sum = curr_sum = nums[0]
        for num in nums[1:]:
            curr_sum = max(num, curr_sum + num)
            max_sum = max(max_sum, curr_sum)
        return max_sum
```

#### C++

```
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int max_sum = nums[0];
        int current_sum = 0;
        for (int num : nums) {
            current_sum += num;
            max_sum = max(max_sum, current_sum);
            if (current_sum < 0)
                current_sum = 0;
        }
        return max_sum;
    }
};
```

#### Java

```
class Solution {
    public int maxSubArray(int[] nums) {
        int max_sum = nums[0];
        int current_sum = 0;
        for (int num : nums) {
            current_sum += num;
            max_sum = Math.max(max_sum, current_sum);
            if (current_sum < 0)
                current_sum = 0;
        }
        return max_sum;
    }
}
```

### Conclusion

The Maximum Subarray problem can be efficiently solved using Kadane's algorithm, which finds the subarray with the largest sum in linear time complexity O(n). The provided solution code implements this algorithm in Python, C++, and Java, providing an optimal solution to the problem.