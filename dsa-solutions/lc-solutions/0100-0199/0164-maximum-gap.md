---
id: maximum-gap
title: Maximum Gap(LeetCode)
sidebar_label: 0164-Maximum Gap
tags:
  - Array
  - Sorting
  - Bucket Sort
  - Radix Sort
description: Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.
---

## Problem Statement

Given an integer array `nums`, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return `0`.

You must write an algorithm that runs in linear time and uses linear extra space.

### Examples

**Example 1:**

```plaintext
Input: nums = [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
```

**Example 2:**

```plaintext
Input: nums = [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.
```

### Constraints

- `1 <= nums.length <= 105`
- `0 <= nums[i] <= 109`

## Solution

### Approach 

The approach employs the concept of bucket sorting combined with the pigeonhole principle. The idea is to divide the range between the minimum and maximum values in the array into buckets and then find the maximum gap by comparing the minimum value of one bucket to the maximum value of the previous bucket.

#### Algorithm

1. Edge Case Handling:
* If the array is null or contains fewer than 2 elements, return 0 since no gap can be calculated.
2. Find Minimum and Maximum:
* Traverse the array to find the minimum and maximum values.
3. Calculate Gap and Create Buckets:
* Calculate the minimum possible gap as gap = ⌈ (max-min)/(N-1)⌉.
* Create two arrays, bucketsMIN and bucketsMAX, to store the minimum and maximum values of each bucket, respectively.
* Initialize these arrays with extreme values (Integer.MAX_VALUE for bucketsMIN and Integer.MIN_VALUE for bucketsMAX).
4. Distribute Array Elements into Buckets:
* Iterate through the array and place each element (except the minimum and maximum) into the appropriate bucket based on its value.
5. Calculate Maximum Gap:
* Initialize the previous bucket's maximum as the minimum value.
* Traverse through the buckets and calculate the gap by comparing the current bucket's minimum value with the previous bucket's maximum value.
* Keep track of the maximum gap found.
* Finally, compare the maximum value with the last non-empty bucket's maximum to ensure no larger gap exists.

#### Implementation

```Java
import java.util.Arrays;

public class Solution {
    public int maximumGap(int[] num) {
        if (num == null || num.length < 2)
            return 0;
        
        // Find the min and max values
        int min = num[0];
        int max = num[0];
        for (int i : num) {
            min = Math.min(min, i);
            max = Math.max(max, i);
        }
        
        // Calculate the gap
        int gap = (int) Math.ceil((double) (max - min) / (num.length - 1));
        int[] bucketsMIN = new int[num.length - 1];
        int[] bucketsMAX = new int[num.length - 1];
        Arrays.fill(bucketsMIN, Integer.MAX_VALUE);
        Arrays.fill(bucketsMAX, Integer.MIN_VALUE);
        
        // Distribute the numbers into buckets
        for (int i : num) {
            if (i == min || i == max)
                continue;
            int idx = (i - min) / gap;
            bucketsMIN[idx] = Math.min(i, bucketsMIN[idx]);
            bucketsMAX[idx] = Math.max(i, bucketsMAX[idx]);
        }
        
        // Calculate the maximum gap
        int maxGap = Integer.MIN_VALUE;
        int previous = min;
        for (int i = 0; i < num.length - 1; i++) {
            if (bucketsMIN[i] == Integer.MAX_VALUE && bucketsMAX[i] == Integer.MIN_VALUE)
                continue;
            maxGap = Math.max(maxGap, bucketsMIN[i] - previous);
            previous = bucketsMAX[i];
        }
        maxGap = Math.max(maxGap, max - previous);
        
        return maxGap;
    }
}
```

### Complexity Analysis

- **Time complexity**: $O(N)$
- **Space complexity**: $O(N)$

### Conclusion

This approach efficiently finds the maximum gap between successive elements in an unsorted array using the concept of bucket sorting. It avoids the need for full sorting, thus achieving linear time complexity. This makes the solution suitable for large arrays where a more efficient method than O(NlogN) sorting is required.
