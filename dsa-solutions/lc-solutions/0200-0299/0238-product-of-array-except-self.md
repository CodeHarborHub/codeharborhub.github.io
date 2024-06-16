---
id: product-of-array-except-self
title: Product of Array Except Self(LeetCode)
sidebar_label: 0238-Product of Array Except Self
tags:
  - Array
  - Prefix Sum
description: Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
---

## Problem Statement

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

### Examples

**Example 1:**

```plaintext
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

**Example 2:**

```plaintext
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

### Constraints

- `2 <= nums.length <= 105`
- `30 <= nums[i] <= 30`
- The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

## Solution

We can solve this problem using multiple approaches. Here, I have explained all the possible solutions:

1. Brute Force Approach: Using nested loops to calculate the product of elements except for the current index.
2. Dynamic Programming (Tabulation): Using two arrays to store the left and right products.
3. Dynamic Programming (Space Optimization): Optimizing space usage by combining the two product arrays into a single array.

### Approach Brute Force (Two Nested Loops)

### Algorithm
1. Initialize an empty vector `output`.
2. Iterate through each element `i` in the array `nums`:
* Set `product` to 1.
* Iterate through each element `j` in the array `nums`:
  * If `i` equals `j`, skip this iteration.
  * Multiply `product` by `nums[j]`.
* Append `product` to the `output` vector.
3. Return the `output` vector.

#### Implementation

```C++
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> output;
        for(int i = 0; i < n; i++) {
            int product = 1;
            for(int j = 0; j < n; j++) {
                if(i == j) continue;
                product *= nums[j];
            }
            output.push_back(product);
        }
        return output;
    }
};
```

### Complexity Analysis

- **Time complexity**: O(N^2) - Two nested loops create a quadratic time complexity.
- **Space complexity**: O(1) - No extra space except for the output array (which doesn't count towards space complexity).

### Approach 2: Dynamic Programming (Tabulation)

#### Algorithm

1. Initialize vectors `left_Product` and `right_Product` of size `n` with all elements set to 1.
2. Calculate `left_Product`:
* Set `left_Product[0]` to 1.
* For each element `i` from 1 to `n-1`, set `left_Product[i]` to `left_Product[i-1]` multiplied by `nums[i-1]`.
3. Calculate `right_Product`:
* Set `right_Product[n-1]` to 1.
* For each element `i` from `n-2` to 0, set `right_Product[i]` to `right_Product[i+1]` multiplied by `nums[i+1]`.
4. Initialize vector `ans` of size `n`.
5. For each element `i` from 0 to `n-1`, set `ans[i]` to `left_Product[i]` multiplied by `right_Product[i]`.
6. Return the `ans` vector.
  
#### Implementation 

```C++
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> ans(n);
        vector<int> left_Product(n);
        vector<int> right_Product(n);

        left_Product[0] = 1;
        for(int i = 1; i < n; i++) {
            left_Product[i] = left_Product[i-1] * nums[i-1];
        }

        right_Product[n-1] = 1;
        for(int i = n-2; i >= 0; i--) {
            right_Product[i] = right_Product[i+1] * nums[i+1];
        }

        for(int i = 0; i < n; i++) {
            ans[i] = left_Product[i] * right_Product[i];
        }
        return ans;
    }
};
```

### Complexity Analysis

- **Time complexity**: O(N) - We iterate through the array three times.
- **Space complexity**: O(N) - Two additional arrays (left_Product and right_Product) are used.

### Approach 3: Dynamic Programming (Space Optimization)

#### Algorithm

1. Initialize a vector `output` of size `n` with all elements set to 1.
2. Calculate the left product:
* Set `output[0]` to 1.
* For each element `i` from 1 to `n-1`, set `output[i]` to `output[i-1]` multiplied by `nums[i-1]`.
3. Calculate the right product:
* Initialize `right` to 1.
* For each element `i` from `n-1` to 0, set `output[i]` to `output[i]` multiplied by right, then set `right` to `right` multiplied by `nums[i]`.
4. Return the `output` vector.

#### Implementation 

```C++
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> output(n);

        output[0] = 1;
        for(int i = 1; i < n; i++) {
            output[i] = output[i-1] * nums[i-1];
        }

        int right = 1;
        for(int i = n-1; i >= 0; i--) {
            output[i] *= right;
            right *= nums[i];
        }
        return output;
    }
};
```

### Complexity Analysis

- **Time complexity**: O(N) - We iterate through the array twice.
- **Space complexity**: O(1) - Constant space is used, except for the output array.

### Conclusion

By exploring various approaches to solve this problem, we can see that the brute force method, while simple, is inefficient with a time complexity of O(N^2). The dynamic programming approach with tabulation optimizes the time complexity to O(N) but uses extra space. The most optimized approach uses space-efficient dynamic programming, maintaining O(N) time complexity while reducing space complexity to O(1). This final approach is the best in terms of both time and space efficiency.
