---
id: kadane-algorithm
title: Kadane’s Algorithm
sidebar_label: Kadane’s Algorithm
tags: [python, java, c++, javascript, programming, algorithms, subarray, array, tutorial, in-depth]
description: In this tutorial, we will learn about Kadane’s Algorithm and its implementation in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Kadane’s Algorithm
Kadane's algorithm is a greedy/dynamic programming algorithm that can be used on array problems to bring the time complexity down to 
O(n). It is used to calculate the maximum sum subarray ending at a particular position.

## Problem Statement 
Given an integer array arr, find the contiguous subarray (containing at least one number) which has the largest sum and returns its sum.

### Intuition
The question above is asking us to find a group of contiguous values in an array that give the largest sum. We are then asked to return that sum.
If we forget about Kadane's algorithm for a second, the brute force way to approach this would be to go through every single subarray and calculate the sum, while keeping track of a maximum sum. This will work but there is a lot of repeated work. For every iteration of our outer for loop, our inner loop does linear work. This makes the complexity 
𝑂(𝑛^2).

## Brute Force Approach 
    ```python
   def bruteForce(nums):
    maxSum = nums[0]
    for i in range(len(nums)):
        curSum = 0
        for j in range(i, len(nums)):
            curSum += nums[j]
            maxSum = max(maxSum, curSum)
    return maxSum
```

## Optimized Approach - Kadane’s Algorithm 
The intuition of the algorithm is not to consider the subarray as a part of the answer if its sum is less than 0. A subarray with a sum less than 0 will always reduce our answer and so this type of subarray cannot be a part of the subarray with maximum sum.

Here, we will iterate the given array with a single loop and while iterating we will add the elements in a sum variable. Now, if at any point the sum becomes less than 0, we will set the sum as 0 as we are not going to consider any subarray with a negative sum. Among all the sums calculated, we will consider the maximum one.

Thus we can solve this problem with a single loop.

![image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/f16c1a92-9cbd-43d4-ae6b-0d143e833d00/sharpen=1)

## Pseudocode for Kadane’s Algorithm
##### Initialize:
    - max_so_far = INT_MIN
    - max_ending_here = 0

  ##### Loop for each element of the array

  - (a) max_ending_here = max_ending_here + a[i]
  - (b) if(max_so_far < max_ending_here)
            max_so_far = max_ending_here
  - (c) if(max_ending_here < 0)
            max_ending_here = 0
return max_so_far

## Implementing Kadane’s Algorithm

### Python Implementation

```python
import sys

def maxSubarraySum(arr, n):
    maxi = -sys.maxsize-1 # maximum sum
    sum = 0

    for i in range(n):
        sum += arr[i]

        if sum > maxi:
            maxi = sum

        # If sum < 0: discard the sum calculated
        if sum < 0:
            sum = 0

    # To consider the sum of the empty subarray
    # uncomment the following check:

    #if maxi < 0: maxi = 0

    return maxi

```

### Java Implementation

```java

import java.util.*;

public class Main {
    public static long maxSubarraySum(int[] arr, int n) {
        long maxi = Long.MIN_VALUE; // maximum sum
        long sum = 0;

        for (int i = 0; i < n; i++) {

            sum += arr[i];

            if (sum > maxi) {
                maxi = sum;
            }

            // If sum < 0: discard the sum calculated
            if (sum < 0) {
                sum = 0;
            }
        }

        // To consider the sum of the empty subarray
        // uncomment the following check:

        //if (maxi < 0) maxi = 0;

        return maxi;
    }

    public static void main(String args[]) {
        int[] arr = { -2, 1, -3, 4, -1, 2, 1, -5, 4};
        int n = arr.length;
        long maxSum = maxSubarraySum(arr, n);
        System.out.println("The maximum subarray sum is: " + maxSum);

    }

}
```

### C++ Implementation

```cpp
long long maxSubarraySum(int arr[], int n) {
    long long maxi = LONG_MIN; // maximum sum
    long long sum = 0;

    for (int i = 0; i < n; i++) {

        sum += arr[i];

        if (sum > maxi) {
            maxi = sum;
        }

        // If sum < 0: discard the sum calculated
        if (sum < 0) {
            sum = 0;
        }
    }

    // To consider the sum of the empty subarray
    // uncomment the following check:

    //if (maxi < 0) maxi = 0;

    return maxi;
}

```

### JavaScript Implementation

```javascript
function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];

        if (sum > maxi) {
            maxi = sum;
        }

        // If sum < 0: discard the sum calculated
        if (sum < 0) {
            sum = 0;
        }
    }

    // To consider the sum of the empty subarray
    // uncomment the following check:

    //if (maxi < 0) maxi = 0;

    return maxi;
}
```

## Complexity Analysis
   #### Time Complexity : 
   - $O(n)$ , We are using a single loop running N times.
   
    #### Space Complexity
      - $O(1)$ , as Only Variables are used.
## Conclusion
- Kadane's algorithm offers a straightforward and efficient approach to solving the maximum sum subarray problem, making it a fundamental technique in algorithmic problem-solving and data analysis.


