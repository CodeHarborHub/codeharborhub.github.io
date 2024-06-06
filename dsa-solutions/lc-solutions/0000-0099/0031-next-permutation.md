---
id: next-permutation
title: Next Permutation (LeetCode)
sidebar_label: 0031-NextPermutation
description: Find the next lexicographically greater permutation of an array of integers. The replacement must be in place and use only constant extra memory.
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/next-permutation/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/next-permutation/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |


## Problem Description

Given an array of integers `nums`, find the next lexicographically greater permutation of the elements. If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

### Examples

#### Example 1

- **Input:** $nums = [1,2,3]$
- **Output:** $[1,3,2]$
- **Explanation:** The next permutation of $[1,2,3]$ is $[1,3,2]$.

#### Example 2

- **Input:** $nums = [3,2,1]$
- **Output:** $[1,2,3]$
- **Explanation:** The next permutation of $[3,2,1]$ is $[1,2,3]$ because $[3,2,1]$ does not have a lexicographically larger rearrangement.

#### Example 3

- **Input:** $nums = [1,1,5]$
- **Output:** $[1,5,1]$
- **Explanation:** The next permutation of $[1,1,5]$ is $[1,5,1]$.

### Constraints

- $1 <= nums.length <= 100$
- $0 <= nums[i] <= 100$

### Approach

To find the next lexicographically greater permutation of an array of integers, we can follow these steps:

1. **Find Pivot Point:**
   - Start from the right end of the array and find the first element `nums[i]` such that `nums[i] < nums[i+1]`. If no such element exists, then the array is sorted in descending order, and we return the array sorted in ascending order.

2. **Find Swap Candidate:**
   - Start from the right end of the array again and find the first element `nums[j]` such that `nums[j] > nums[i]`. Swap `nums[i]` with `nums[j]`.

3. **Reverse Remaining Elements:**
   - Reverse the elements from index `i+1` to the end of the array.

### Solution Code

#### Python

```py
class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        i = len(nums) - 2
        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1
        
        if i >= 0:
            j = len(nums) - 1
            while j >= 0 and nums[j] <= nums[i]:
                j -= 1
            nums[i], nums[j] = nums[j], nums[i]
        
        self.reverse(nums, i + 1)
    
    def reverse(self, nums: List[int], start: int) -> None:
        end = len(nums) - 1
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1
```

#### Java

```java
class Solution {
    public void nextPermutation(int[] nums) {
        int i = nums.length - 2;
        while (i >= 0 && nums[i] >= nums[i + 1])
            i--;
        
        if (i >= 0) {
            int j = nums.length - 1;
            while (j >= 0 && nums[j] <= nums[i])
                j--;
            swap(nums, i, j);
        }
        
        reverse(nums, i + 1);
    }
    
    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    
    private void reverse(int[] nums, int start) {
        int end = nums.length - 1;
        while (start < end) {
            swap(nums, start, end);
            start++;
            end--;
        }
    }
}
```

#### C++

```cpp
class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        int i = nums.size() - 2;
        while (i >= 0 && nums[i] >= nums[i + 1])
            i--;
        
        if (i >= 0) {
            int j = nums.size() - 1;
            while (j >= 0 && nums[j] <= nums[i])
                j--;
            swap(nums[i], nums[j]);
        }
        
        reverse(nums.begin() + i + 1, nums.end());
    }
};
```

### Conclusion

The above solution effectively finds the next lexicographically greater permutation of an array of integers. It follows a simple algorithm to find the pivot point, swap candidates, and reverse the remaining elements, ensuring that the replacement is in place and uses only constant extra memory. This solution handles all edge cases and constraints specified in the problem statement.
