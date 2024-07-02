---
id: single-element-in-sorted-array
title: Single Element in a Sorted Array
sidebar_label: Single Element in Sorted Array
tags: 
    - Binary Search
    - Algorithm
    - O(log n)
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [Single Element in a Sorted Array](https://leetcode.com/problems/Single Element in a Sorted Array/description/) | [Single Element in a Sorted Array Solution on LeetCode](https://leetcode.com/problems/single-element-in-sorted-array/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

## Problem Description

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

### Examples

## Example 1:

**Input:** `nums = [1,1,2,3,3,4,4,8,8]`
**Output:** `2`

## Example 2:

**Input:** `nums = [3,3,7,7,10,11,11]`
**Output:** `10`

### Constraints

- $1 \leq \text{nums.length} \leq 10^5$
- $0 \leq \text{nums[i]} \leq 10^5$

## Approach

To solve this problem in $O(log n)$ time complexity and $O(1)$ space complexity, we can use a binary search approach. The key observation is that if we split the array into pairs, the single element will disrupt the pairing. By checking the indices, we can determine which half of the array to search next.

### Step-by-Step Algorithm

1. Initialize `left` to 0 and `right` to `len(nums) - 1`.
2. Use a binary search loop: `while left < right`:
   - Calculate the middle index `mid = left + (right - left) // 2`.
   - Check if `mid` is even. If true, check if `nums[mid]` is equal to `nums[mid + 1]`.
     - If they are equal, the single element is in the right half, so set `left = mid + 2`.
     - Otherwise, the single element is in the left half, so set `right = mid`.
   - If `mid` is odd, check if `nums[mid]` is equal to `nums[mid - 1]`.
     - If they are equal, the single element is in the right half, so set `left = mid + 1`.
     - Otherwise, the single element is in the left half, so set `right = mid - 1`.
3. When the loop exits, `left` will be at the single element.

## Solution in Python

```python
def singleNonDuplicate(nums):
    left, right = 0, len(nums) - 1
    while left < right:
        mid = left + (right - left) // 2
        if mid % 2 == 0:
            if nums[mid] == nums[mid + 1]:
                left = mid + 2
            else:
                right = mid
        else:
            if nums[mid] == nums[mid - 1]:
                left = mid + 1
            else:
                right = mid - 1
    return nums[left]
```

## Solution in Java

```java
public class Solution {
    public int singleNonDuplicate(int[] nums) {
        int left = 0, right = nums.length - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (mid % 2 == 0) {
                if (nums[mid] == nums[mid + 1]) {
                    left = mid + 2;
                } else {
                    right = mid;
                }
            } else {
                if (nums[mid] == nums[mid - 1]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return nums[left];
    }
}
```

## Solution in C++

```cpp
class Solution {
public:
    int singleNonDuplicate(vector<int>& nums) {
        int left = 0, right = nums.size() - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (mid % 2 == 0) {
                if (nums[mid] == nums[mid + 1]) {
                    left = mid + 2;
                } else {
                    right = mid;
                }
            } else {
                if (nums[mid] == nums[mid - 1]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return nums[left];
    }
};
```

## Solution in C

```c
int singleNonDuplicate(int* nums, int numsSize){
    int left = 0, right = numsSize - 1;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (mid % 2 == 0) {
            if (nums[mid] == nums[mid + 1]) {
                left = mid + 2;
            } else {
                right = mid;
            }
        } else {
            if (nums[mid] == nums[mid - 1]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return nums[left];
}
```

## Solution in JavaScript

```javascript
function singleNonDuplicate(nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (mid % 2 === 0) {
            if (nums[mid] === nums[mid + 1]) {
                left = mid + 2;
            } else {
                right = mid;
            }
        } else {
            if (nums[mid] === nums[mid - 1]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return nums[left];
}
```

## Conclusion

By leveraging binary search, we can efficiently find the single element that appears only once in a sorted array where every other element appears twice. This approach ensures an O(log n) time complexity and O(1) space complexity, making it an optimal solution for this problem.