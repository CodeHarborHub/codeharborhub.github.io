---
id: find-minimum-in-rotated-sorted-array-II
title: Find Minimum in Rotated Sorted Array-II
sidebar_label: 0154-Find Minimum in Rotated Sorted Array-II
tags:
  - Array
  - Binary Search
description: Given the sorted rotated array nums of unique elements, return the minimum element of this array.
---

## Problem Statement

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array `nums =[0,1,4,4,5,6,7]` might become:

`[4,5,6,7,0,1,4]` if it was rotated 4 times.
`[0,1,4,4,5,6,7]` if it was rotated 7 times.
Notice that rotating an array` [a[0], a[1], a[2], ..., a[n-1]] `1 time results in the array` [a[n-1], a[0], a[1], a[2], ..., a[n-2]].`

Given the sorted rotated array `nums` that may contain duplicates, return the minimum element of this array.

You must decrease the overall operation steps as much as possible.

### Examples

**Example 1:**
```plaintext
Input: nums = [1,3,5]
Output: 1
```

**Example 2:**

```plaintext
Input: nums = [2,2,2,0,1]
Output: 0
 
```



### Constraints

- `n == nums.length`
- `1 <= n <= 5000`
- `-5000 <= nums[i] <= 5000`
- `nums is sorted and rotated between 1 and n times.`

## Solution

This problem aims to find the minimum element in a rotated sorted array. The provided solution uses a binary search approach to efficiently find the minimum element.

### Intuition
- Use modified Binary Search.
- i.e. after finding middle element check if only right side is sorted completely or if only left side is sorted.
- i.e. if middle element is smaller than last element, then right is sorted , else left is sorted.
- The smallest element will lie in the unsorted side because the sorted elements have rotated in that region only.
REPEAT.

### Approach
- Note : [element_index] = means the element at index [element_index]

- First find the middle element.
- Now, we need to check which side of [m] is sorted completely i.e. if left is sorted, then the smallest element is on right side and vice versa. So, if `[m] <= [e]` i.e. middle element` <= `end element i.e. right is completely sorted so we need to find in left of [m] therefore `e = m` .
- Else, s = m + 1 i.e. the smallest element is in right side.
REPEAT till s < e and return [s]

- EDGE-CASE : since array may contain dupicates ->

- Now if [m] = [s] = [e] i.e. first, last and middle element are same, we can't tell whether left/ right side of [m] is completely sorted so we decreement e by 1 and increement s by 1 so to reduce the array to be searched. Only this edge case leads to the worst case of O(n/2) = O(n).



#### Implementation
#### C++
```C++
class Solution {
public:
    int findMin(vector<int>& nums) {
        int s = 0 , e = nums.size() - 1, m ;
        while ( s < e ){
            m = s + (e - s ) / 2 ;
            if ( nums[m] == nums[s] && nums[m] == nums[e]){
                s++;        e--;
            }
            else if (nums[m] <= nums[e])   e = m ;
            else        s = m + 1 ;
        }
        return nums [s] ;
    }
};
```


#### Java
```java
class Solution {
    public int findMin(int[] nums) {
        int s = 0 , e = nums.length - 1, m ;
        while ( s < e ){
            m = s + (e - s ) / 2 ;
            if ( nums[m] == nums[s] && nums[m] == nums[e]){
                s++;    e--;
            }
            else if (nums[m] <= nums[e])   e = m ;
            else     s = m + 1 ;
        }
        return nums [s] ;
    }
}
```

#### Javascript
```javascript
//Note: U need to add Math.floor function while calculating [mid] since JS doesn't implicitly typecast floating no. which may result in unexpected output
var findMin = function(nums) {
    let s = 0 , e = nums.length - 1, m ;
        while ( s < e ){
            m = Math.floor(s + (e - s ) / 2) ;
            if ( nums[m] == nums[s] && nums[m] == nums[e]){
                s++;        e--;
            }
            else if (nums[m] <= nums[e])   e = m ;
            else        s = m + 1 ;
        }
        return nums [s] ;
};
```

### Complexity Analysis

- **Time complexity**: $O(log n)$
- **Space complexity**: $O(1)$


