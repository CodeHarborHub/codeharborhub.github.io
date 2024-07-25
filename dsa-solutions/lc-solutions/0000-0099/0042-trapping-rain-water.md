---
id: trapping-rain-water
title: Trapping Rain Water(LeetCode)
sidebar_label: 0042-Trapping Rain Water
tags:
  - Array
  - Two Pointers
  - Dynamic Programming
  - Stack
  - Monotonic Stack
description: Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
sidebar_position: 42
---

## Problem Statement

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

### Examples

**Example 1:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/bbfea3b4-4ed2-4d9c-ab6f-551d3a935a49)
```plaintext
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
In this case, 6 units of rain water (blue section) are being trapped.
```

**Example 2:**

```plaintext
Input: height = [4,2,0,3,2,5]
Output: 9
```

### Constraints

- `n == height.length`
- `1 <= n <= 2 * 104`
- `0 <= height[i] <= 105`

## Solution

The Trapping Rain Water problem involves calculating how much water can be trapped between bars after raining, 
given an array representing the elevation map.

### Approach : Two-Pointer Technique

This approach uses two pointers to traverse the height array from both ends, maintaining the maximum height encountered from the left and the right. 
The trapped water is calculated based on the minimum of these maximum heights.

#### Explanation:

1. Initialize two pointers: `left` at the start of the array and `right` at the end.
2. Maintain two variables: `leftMax` for the maximum height encountered from the left and `rightMax` for the maximum height from the right.
3. Iterate through the array using the two pointers:
4. If the height at the left pointer is less than the height at the right pointer:
* Move the left pointer to the right.
* Update `leftMax` if the new height is greater than `leftMax`.
* Calculate trapped water at the left pointer if the new height is less than `leftMax`.
5. If the height at the right pointer is less than or equal to the height at the left pointer:
* Move the right pointer to the left.
* Update `rightMax` if the new height is greater than `rightMax`.
* Calculate trapped water at the right pointer if the new height is less than `rightMax`.
6. Continue this process until the left and right pointers meet.
7. The total trapped water is the sum of water calculated at each step.

#### Algorithm

1. Initialize `left` at 0, `right` at the end of the array.
2. Set `leftMax` to the first element, `rightMax` to the last element.
3. While `left` is less than `right`:
4. If `leftMax` is less than `rightMax`:
* Increment `left`.
* Update `leftMax` if the new height is greater.
* Add the difference between `leftMax` and the current height to the water.
4. Else:
* Decrement `right`.
* Update `rightMax` if the new height is greater.
* Add the difference between `rightMax` and the current height to the water.
5. Return the total trapped water.
  
#### Implementation

C++ Solution:

```C++
class Solution {
public:
    int trap(vector<int>& height) {
        int n = height.size();
        int lmax = height[0];
        int rmax = height[n-1];
        int lpos = 1;
        int rpos = n-2;
        int water = 0;
        while (lpos <= rpos) {
            if (height[lpos] >= lmax) {
                lmax = height[lpos];
                lpos++;
            } else if (height[rpos] >= rmax) {
                rmax = height[rpos];
                rpos--;
            } else if (lmax <= rmax && height[lpos] < lmax) {
                water += lmax - height[lpos];
                lpos++;
            } else {
                water += rmax - height[rpos];
                rpos--;
            }
        }
        return water;
    }
};
```

Java Solution:

```Java
class Solution {
    public int trap(int[] height) {
        int left = 0, right = height.length - 1;
        int leftMax = height[0], rightMax = height[height.length - 1];
        int water = 0;
        while (left < right) {
            if (leftMax < rightMax) {
                left++;
                if (leftMax < height[left]) {
                    leftMax = height[left];
                } else {
                    water += leftMax - height[left];
                }
            } else {
                right--;
                if (rightMax < height[right]) {
                    rightMax = height[right];
                } else {
                    water += rightMax - height[right];
                }
            }
        }
        return water;
    }
}
```

Python Solution:

```Python
class Solution:
    def sumBackets(self, height: list[int], left, right):
        minHeightLeft = height[left]
        total = 0
        leftBacket = 0
        locationMinLeft = left

        while left < right:
            if height[left] < minHeightLeft:
                leftBacket += minHeightLeft - height[left]                
            else:
                minHeightLeft = height[left]
                total += leftBacket
                leftBacket = 0
                locationMinLeft = left            
            left += 1
            
        if minHeightLeft <= height[right]:
            return total + leftBacket, right
        else:      
            return total, locationMinLeft

    def sumBacketsReverce(self, height: list[int], left, right):
        minHeightRight = height[right]
        total = 0
        rightBacket = 0
        locationMinRight = right

        while left < right:
            if height[right] < minHeightRight:
                rightBacket += minHeightRight - height[right]                
            else:
                minHeightRight = height[right]
                total += rightBacket
                rightBacket = 0
                locationMinRight = right            
            right -= 1

        if minHeightRight <= height[left]:
            return total + rightBacket, left
        else:
            return total, locationMinRight
    
    def trap(self, height: List[int]) -> int:                      
        right = len(height) - 1
        left = 0
        totalSum = 0

        while left < right - 1:            
            if height[left] < height[right]:
                total, left = self.sumBackets(height, left, right)    
            else:
                total, right = self.sumBacketsReverce(height, left, right)        
            totalSum += total       
             
        return totalSum
```
### Complexity Analysis

- **Time complexity**: O(n), where n is the number of elements in the height array. The array is traversed once.
- **Space complexity**: O(1), as no extra space is used except for variables.
