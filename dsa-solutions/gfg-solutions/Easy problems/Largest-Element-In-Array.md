---
id: largest-element-in-array
title: Largest Element In Array
sidebar_label: Largest-Element-In-Array
tags:
  - Arrays
  - Data Structure
description: "This tutorial covers the solution to the Largest Element In Array problem from the GeeksforGeeks website, featuring implementations in C++."
---
## Problem Description
Given an array `arr`, the task is to find the largest element in it.

## Examples

**Example 1:**

```
Input: arr= [1, 8, 7, 56, 90]
Output: 90
Explanation: The largest element of given array is 90.
```

**Example 2:**

```
Input: arr = [5, 5, 5, 5]
Output: 5
Explanation: The largest element of given array is 5.
```

## Your Task

You don't need to read input anything. Your task is to complete the function `largest()` which takes the array `arr` and an size of array as `n` as input parameters and returns the largest number.

Expected Time Complexity: O(n)

Expected Auxiliary Space: O(1)

## Constraints

* `1 <= arr.size()<= 10^5`

## Problem Explanation

The task is to traverse the whole array and find the largest element of that array.

## Code Implementation

### C++ Solution


```cpp
class Solution
{
public:
    int largest(vector<int> &arr, int n)
    {
        int maxi = INT_MIN;
        for(int i=0; i<n; i++){
            maxi = max(arr[i], maxi);
        }
        return maxi;
    }
};
```

```java
public class Solution {
    public int largest(int[] arr) {
        int maxi = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            maxi = Math.max(arr[i], maxi);
        }
        return maxi;
    }
}

```

```python
class Solution:
    def largest(self, arr):
        maxi = float('-inf')
        for i in range(len(arr)):
            maxi = max(arr[i], maxi)
        return maxi

```

```javascript
class Solution {
    largest(arr) {
        let maxi = -Infinity;
        for (let i = 0; i < arr.length; i++) {
            maxi = Math.max(arr[i], maxi);
        }
        return maxi;
    }
}

```

```typescript
class Solution {
    largest(arr: number[]) {
        let maxi = -Infinity;
        for (let i = 0; i < arr.length; i++) {
            maxi = Math.max(arr[i], maxi);
        }
        return maxi;
    }
}

``

## Time Complexity

* The time complexity is $$O(n)$$ where n is the length of the input array. This is because we are iterating through the array once to find the maximum element. 

## Space Complexity

* The auxiliary space complexity is $O(1)$ which means the space required does not change with the size of the input array. This is because we are only using a fixed amount of space to store the maximum element and the index.