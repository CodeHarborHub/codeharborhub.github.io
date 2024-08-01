---
id: peak-index-in-a-mountain-array
title: Peak Index in a Mountain Array
sidebar_label: 852- Peak Index in a Mountain Array
tags:
  - Array
  - Binary Search
description: Find the index of the peak element in a mountain array (an array that increases to a peak and then decreases) in O(log(n)) time complexity.
sidebar_position: 0852
---

## Problem Description

You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

Return the index of the peak element.

Your task is to solve it in $O(log(n))$ time complexity.

 

### Example 1

- **Input:** ` arr = [0,1,0]`
- **Output:** `1`

### Constraints

- `3 <= arr.length <= 10^5`
- `0 <= arr[i] <= 10^6`

## Approach

This approach calculates prefix and suffix arrays to keep track of the maximum values encountered from the start and end of the array, respectively. It then iterates through the array to find the index where the element matches both the prefix and suffix maximums, which would indicate the peak of the mountain. However, this solution does not meet the required `O(log(n))` complexity.

#### Java

```Java
class Solution {
    public int peakIndexInMountainArray(int[] arr) {
        int[] prefix=new int[arr.length];
        int[] suffix=new int[arr.length];

        int max_prefix=Integer.MIN_VALUE;
        int max_suffix=Integer.MIN_VALUE;

        for(int i=0;i<arr.length;i++){
            max_prefix=Math.max(arr[i],max_prefix);
            prefix[i]=max_prefix;
        }
        for(int i=arr.length-1;i>=0;i--){
            max_suffix=Math.max(arr[i],max_suffix);
            suffix[i]=max_prefix;
        }
        int idx=-1;
        for(int i=0;i<arr.length;i++){
            if(arr[i]==prefix[i] && arr[i]==suffix[i]){
                idx=i;
            }
        }
        return idx;
    }
}
```

- Time Complexity
  The time complexity is $O(log(n))$.

- Space Complexity
  The space complexity is $O(n)$.
