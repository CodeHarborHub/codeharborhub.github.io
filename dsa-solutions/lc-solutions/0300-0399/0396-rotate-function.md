---
id: rotate-function
title: Rotate Function
sidebar_label: 0396 Rotate Function
tags:
- Array
- Math
- Dynamic Programming

description: "Solution to Leetcode 396. Rotate Function."
---

## Problem Description

You are given an integer array `nums` of length `n`.

Assume `arrk` to be an array obtained by rotating nums by `k` positions clock-wise. We define the rotation function `F` on nums as follow:

- `F(k) = 0 * arrk[0] + 1 * arrk[1] + ... + (n - 1) * arrk[n - 1].`

Return the maximum value of `F(0), F(1), ..., F(n-1).`

The test cases are generated so that the answer fits in a **32-bit** integer.
 

### Examples

**Example 1:**

```
Input: nums = [4,3,2,6]
Output: 26
Explaination: 
F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26
So the maximum value of F(0), F(1), F(2), F(3) is F(3) = 26.
```

**Example 2:**

```
Input: nums = [100]
Output: 0

```

### Constraints
- `n == nums.length`
- `1 <= n <= 105`
- `-100 <= nums[i] <= 100`

### Approach 
First Calculate F(0) than update F(1) and F(2) with below equations and find max of all.

F(1) - F(0) = S - n * A[n - 1] ---> F(1) = F(0) + S - n * A[n - 1]
F(2) - F(1) = S - n * A[n - 2] ---> F(2) = F(1) + S - n * A[n - 2]
F(3) - F(2) = S - n * A[n - 3]
Keep track of the maximum value of `F` across all rotations.

### Solution

#### Code in Different Languages

#### C++

 ```cpp
class Solution {
public:
    int maxRotateFunction(vector<int>& nums) {
        int F = 0;
        int S = 0;
        for(int i = 0; i < nums.size(); i++){
            F = F + (nums[i] * i);
            S = S + nums[i];
        }

        int max_val = F; // this is F0
        int n = nums.size();
		
        for(int i = n - 1; i >= 1 ; i--){
            F = F + S - n * nums[i];
            max_val = max(max_val , F);
        }
        return max_val;
    }
};

 ```

#### JAVA

```java
class Solution {
    public int maxRotateFunction(int[] nums) {
        int F = 0;
        int S = 0;
        for(int i = 0; i < nums.length; i++){
            F = F + (nums[i] * i);
            S = S + nums[i];
        }

        int max = F; // this is F0
        int n = nums.length;
		
        for(int i = n - 1; i >= 1 ; i--){
            F = F + S - n * nums[i];
            max = Math.max(max , F);
        }
      return max;
    }
}
```

#### PYTHON

```python
class Solution:
    def maxRotateFunction(self, nums: List[int]) -> int:
        F = 0
        S = 0
        for i in range(len(nums)):
            F = F + (nums[i] * i)
            S = S + nums[i]

        max_val = F  # this is F0
        n = len(nums)
		
        for i in range(n - 1, 0, -1):
            F = F + S - n * nums[i]
            max_val = max(max_val, F)

        return max_val
        
```



### Complexity Analysis

- Time Complexity: $O(n)$ 
- Reason: `n` is the number of elements in the nums array, due to its linear traversal to compute the initial values and subsequent rotations.

- Space Complexity: $O(1)$ 

### References

- **LeetCode Problem**: Rotate Function