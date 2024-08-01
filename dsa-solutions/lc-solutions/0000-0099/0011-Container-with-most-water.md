---
id: container-with-most-water
title: Container With Most Water (LeetCode)
sidebar_label: 0011 - Container With Most Water
tags:
    - Array
    - Two Pointers
    - Greedy
description: Given n non-negative integers representing the heights of vertical lines, find the two lines that together with the x-axis form a container, such that the container contains the most water.
sidebar_position: 11
---

## Problem Description

| Problem Statement                                                                                           | Solution Link                                                                                                                               | LeetCode Profile                                   |
| :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------- |
| [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)                       | [Container With Most Water Solution on LeetCode](https://leetcode.com/problems/container-with-most-water/solutions/3701708/best-method-c-java-python-beginner-friendly/) | [gabaniyash846](https://leetcode.com/u/gabaniyash846/) |

## Problem Statement

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the ith line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

### Examples

**Example 1:**

![Example 1](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg)

- **Input**: `height = [1,8,6,2,5,4,8,3,7]`
- **Output**: `49`
- **Explanation**: The above vertical lines are represented by array `[1,8,6,2,5,4,8,3,7]`. In this case, the max area of water (blue section) the container can contain is `49`.

**Example 2:**

- **Input**: `height = [1,1]`
- **Output**: `1`

### Constraints

- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`

## Solution

### Approach

#### Intuition

The two-pointer technique starts with the widest container and moves the pointers inward based on the comparison of heights. Increasing the width of the container can only lead to a larger area if the height of the new boundary is greater. By moving the pointers towards the center, we explore containers with the potential for greater areas.

#### Algorithm

1. **Initialize the variables**:
    - `left` to represent the left pointer, starting at the beginning of the container (index 0).
    - `right` to represent the right pointer, starting at the end of the container (index `height.size() - 1`).
    - `maxArea` to keep track of the maximum area found, initially set to 0.

2. **Enter a loop using the condition `left < right`**, which means the pointers have not crossed each other yet.

3. **Calculate the current area**:
    - Use the `min` function to find the minimum height between the left and right pointers.
    - Multiply the minimum height by the width, which is the difference between the indices of the pointers: `(right - left)`.
    - Store this value in the `currentArea` variable.

4. **Update the maximum area**:
    - Use the `max` function to compare the `currentArea` with the `maxArea`.
    - If the `currentArea` is greater than the `maxArea`, update `maxArea` with the `currentArea`.

5. **Move the pointers inward**:
    - Check if the height at the `left` pointer is smaller than the height at the `right` pointer.
    - If so, increment the `left` pointer, moving it towards the center of the container.
    - Otherwise, decrement the `right` pointer, also moving it towards the center.

6. **Repeat steps 3 to 5** until the pointers meet (`left >= right`), indicating that all possible containers have been explored.

7. **Return the `maxArea`**, which represents the maximum area encountered among all the containers.

### Code

#### C++ Implementation

```cpp
class Solution {
public:
    int maxArea(vector<int>& height) {
        int left = 0;
        int right = height.size() - 1;
        int maxArea = 0;

        while (left < right) {
            int currentArea = min(height[left], height[right]) * (right - left);
            maxArea = max(maxArea, currentArea);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    }
};
```

#### Java Implementation

```java
class Solution {
    public int maxArea(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int maxArea = 0;

        while (left < right) {
            int currentArea = Math.min(height[left], height[right]) * (right - left);
            maxArea = Math.max(maxArea, currentArea);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    }
}
```

#### Python Implementation

```python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        maxArea = 0

        while left < right:
            currentArea = min(height[left], height[right]) * (right - left)
            maxArea = max(maxArea, currentArea)

            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return maxArea
```

### Complexity Analysis

- **Time Complexity**: $O(n)$, where n is the length of the array `height`. We traverse the list only once using two pointers from both ends of the array towards the center.
- **Space Complexity**: $O(1)$, we use a constant amount of extra space for the pointers and variables.

## Conclusion

The two-pointer approach is efficient for solving the Container With Most Water problem, allowing us to explore all possible containers by adjusting the pointers based on the heights of the lines, ensuring that we find the container with the maximum possible area.
