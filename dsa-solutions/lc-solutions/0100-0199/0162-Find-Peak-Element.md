---
id: Find-Peak-Element
title: Find Peak Element
sidebar_label: 0162-Find-Peak-Element
tags:
  - Array
  - Binary Search
description: "A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time."
---


### Problem Description

A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

### Examples

#### Example 1

- **Input:** `nums = [1,2,3,1]`
- **Output:** `2`

#### Example 2

- **Input:** `nums = [1,2,1,3,5,6,4]`
- **Output:** `5`

### Constraints

- `1 <= nums.length <= 1000`
- `-231 <= nums[i] <= 231 - 1`
- `nums[i] != nums[i + 1]` for all valid `i`.

### Solution Code

#### Python

```python
class Solution:
    def findPeakElement(self, nums: list[int]) -> int:
        left, right = 0, len(nums) - 1

        while left < right:
            mid = (left + right) >> 1

            if nums[mid - 1] <= nums[mid] >= nums[mid + 1]:
                return mid
            elif nums[mid] < nums[mid + 1]:
                left = mid + 1
            else:
                right = mid

        return left
```

#### Java

```java
class Solution {
    public int findPeakElement(int[] nums) {
    int n=nums.length;
    if(n==1)return 0;
    if(nums[0]>nums[1])return 0;
    if(nums[n-1]>nums[n-2])return n-1;
    int low=1,high=n-2;
    while(low<=high){
        int mid=(low+high)/2;
        if(nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1])return mid;
        else if(nums[mid]>nums[mid-1])low=mid+1;
        else high=mid-1;
    }
    return -1;    
    }
}
```

#### C++

```cpp

class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int low = 0, high = nums.size() - 1;
        while (low < high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] < nums[mid + 1]) {
                low = mid + 1;
            } else
                high = mid;
        }
        return low;
    }
};
```
#### Javascript

```javascript
class Solution {
    public int findPeakElement(int[] nums) {
        int n = nums.length;
        if(n == 1)
            return 0;
        else if(nums[0] > nums[1])
            return 0;
        else if(nums[n-1] > nums[n-2])
            return n-1;
        int low = 1, high = n-2;
        while(low <= high) {
            int mid = low + (high - low)/2;
            if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1])
                return mid;
            else if(nums[mid] < nums[mid-1])
                high = mid-1;
            else
                low = mid+1;
        }
        return -1;
    }
}
```
