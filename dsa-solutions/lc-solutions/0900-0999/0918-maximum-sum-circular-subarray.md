---
id: maximum-sum-circular-subarray
title: Maximum Sum Circular Subarray
sidebar_label: 0918 - Maximum Sum Circular Subarray
tags:
  - Dynamic Programming
  - Divide and Conquer
  - Array
description: "This is a solution to the Maximum Sum Circular Subarray problem on LeetCode."
---

## Problem Description

Given a **circular integer array** nums of length `n`, return the maximum possible sum of a non-empty **subarray** of `nums`.

A **circular array** means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.

A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray `nums[i], nums[i + 1], ..., nums[j]`, there does not exist `i <= k1`, `k2 <= j` with `k1 % n == k2 % n`.

### Examples

**Example 1:**

```
Input: nums = [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3.
```
**Example 2:**

```
Input: nums = [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.
```

### Constraints

- `n == nums.length`
- $1 \leq n \leq 3 * 10^4$
- $-3 * 10^4 \leq nums[i] \leq 3 * 10^4$

## Solution for Maximum Sum Circular Subarray

## Approach 1: Enumerate prefix and suffix sums
### Intuition
As a circular array, the maximum subarray sum can be either the maximum "normal sum" which is the maximum sum of the ordinary array or a "special sum" which would involve elements that wrap around the array. The "special sum" would be the combination of a prefix sum and a suffix sum. A prefix is a subarray that starts at the first element of the array and a suffix is a subarray that ends at the final element of the array. The "special sum" would involve a prefix and suffix that do not overlap.

The normal sum is the Maximum Subarray problem and can be solved with Kadane's algorithm. Please familiarize yourself with this solution if you haven't already. In this article, to save time, we will assume that users have already solved Maximum Subarray.

We can calculate both the normal sum and the special sum and return the larger one.

Assuming we already have the normal sum (it's just the solution to Maximum Subarray), let's focus on how to find the special sum.

Assume the input array is called `nums` whose length is `n`. To calculate the special sum, we need to find the maximum sum of a prefix sum and a non-overlapping suffix sum of `nums`. Our idea is to enumerate a prefix with its sum and add the maximum suffix sum that starts after the prefix so that the prefix and suffix don't overlap.

Imagine an array `suffixSum` where `suffixSum[i]` represents the suffix sum starting from index `i`, namely `suffixSum[i]` = `nums[i]` + `nums[i + 1]` + ... + `nums[n - 1]` (it's like a prefix sum, but backward). We can construct an array rightMax where `rightMax[i] = max(suffixSum[i], suffixSum[i + 1], ...suffixSum[n - 1])`.

Namely, `rightMax[i]` is the largest suffix sum of `nums` that comes on or after `i`.

With `rightMax`, we can then calculate the special sum by looking at all prefixes. We can easily accumulate the prefix while iterating over the input, and at each index `i`, we can check `rightMax[i + 1]` to find the maximum suffix that won't overlap with the current prefix.

### Algorithm

The algorithm works as follows:

- Create an integer array rightMax of length n.

- Set rightMax[n - 1] to nums[n - 1], set suffixSum to nums[n - 1].

- Iterate over i from n - 2 to 0

    - Increase suffixSum by nums[i]
    - Update rightMax[i] to max(rightMax[i + 1], suffixSum)
- Set maxSum and prefixSum to nums[0].

- Iterate over i from 0 to n - 2

    - Increase prefixSum by nums[i]
    - Update specialSum to max(specialSum, prefixSum + rightMax[i + 1]).
- Calculate the normal sum maxSum using Kadane's algorithm.

- Return max(maxSum, specialSum)

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    int maxSubarraySumCircular(vector<int>& nums) {
        const int n = nums.size();
        vector<int> rightMax(n);
        rightMax[n - 1] = nums[n - 1];
        int suffixSum = nums[n - 1];

        for (int i = n - 2; i >= 0; --i) {
            suffixSum += nums[i];
            rightMax[i] = max(rightMax[i + 1], suffixSum);
        }

        int maxSum = nums[0];
        int specialSum = nums[0];
        int curMax = 0;
        int prefixSum = 0;
        for (int i = 0; i < n; ++i) {
            // This is Kadane's algorithm.
            curMax = max(curMax, 0) + nums[i];
            maxSum = max(maxSum, curMax);

            prefixSum += nums[i];
            if (i + 1 < n) {
                specialSum = max(specialSum, prefixSum + rightMax[i + 1]);
            }
        }

        return max(maxSum, specialSum);
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public int maxSubarraySumCircular(int[] nums) {
        final int n = nums.length;
        final int[] rightMax = new int[n];
        rightMax[n - 1] = nums[n - 1];
        int suffixSum = nums[n - 1];

        for (int i = n - 2; i >= 0; --i) {
            suffixSum += nums[i];
            rightMax[i] = Math.max(rightMax[i + 1], suffixSum);
        }

        int maxSum = nums[0];
        int specialSum = nums[0];
        int curMax = 0;
        for (int i = 0, prefixSum = 0; i < n; ++i) {
            // This is Kadane's algorithm.
            curMax = Math.max(curMax, 0) + nums[i];
            maxSum = Math.max(maxSum, curMax);

            prefixSum += nums[i];
            if (i + 1 < n) {
                specialSum = Math.max(specialSum, prefixSum + rightMax[i + 1]);
            }
        }

        return Math.max(maxSum, specialSum);  
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    def maxSubarraySumCircular(self, nums: List[int]) -> int:
        n = len(nums)
        right_max = [0] * n
        right_max[-1] = nums[-1]
        suffix_sum = nums[-1]

        for i in range(n-2, -1, -1):
            suffix_sum += nums[i]
            right_max[i] = max(right_max[i+1], suffix_sum)

        max_sum = nums[0]
        special_sum = nums[0]
        cur_max = 0
        for i in range(n):
            # This is Kadane's algorithm.
            cur_max = max(cur_max, 0) + nums[i]
            max_sum = max(max_sum, cur_max)

            prefix_sum = sum(nums[:i+1])
            if i + 1 < n:
                special_sum = max(special_sum, prefix_sum + right_max[i+1])

        return max(max_sum, special_sum)
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(N)$

> **Reason**: The algorithm iterates over all elements in the array to calculate the `rightMax` array, and then to find the answer. These both take linear time.

#### Space Complexity: $O(N)$

> **Reason**: This is the space to save the `rightMax` array.

## Approach 2: Calculate the "Minimum Subarray"
### Intuition

As mentioned before, we know that the maximum "normal sum" is the Maximum Subarray problem which can be found with Kadane's. As such, we can focus on finding the "special sum".

Instead of thinking about the "special sum" as the sum of a prefix and a suffix, we can think about it as the sum of all elements, minus a subarray in the middle. In this case, we want to minimize this middle subarray's sum, which we can calculate using Kadane's algorithm as well.

![image](https://assets.leetcode.com/static_assets/media/original_images/918/918_Maximum_Sum_Circular_Subarray.png)

If we use Kadane's algorithm but use `min()` instead of `max()` to update the current subarray sum, it will give us the minimum subarray. Then, we can just subtract the minimum subarray from the total sum to find the "special sum".

There is one case we need to consider however; what if the minimum subarray contains all elements, such as in the case where every element is negative? In that case, our "special sum" would represent an empty array, which is invalid because the problem explicitly states that we need a non-empty subarray.

If we find that the minimum subarray is equal to the total sum, then we need to ignore the "special sum" and just return the "normal sum".

### Algorithm

- Calculate the maximum subarray `maxSum` using Kadane's algorithm.
- Calculate the minimum subarray `minSum` using Kadane's algorithm, by using `min()` instead of `max()`.
- Calculate the sum of all the elements in `nums`, totalSum
- If `minSum == totalSum` return `maxSum`, otherwise return `max(maxSum, totalSum - minSum)`.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    int maxSubarraySumCircular(vector<int>& nums) {
        int curMax = 0;
        int curMin = 0;
        int maxSum = nums[0];
        int minSum = nums[0];
        int totalSum = 0;
        
        for (int num: nums) {
            // Normal Kadane's
            curMax = max(curMax, 0) + num;
            maxSum = max(maxSum, curMax);
            
            // Kadane's but with min to find minimum subarray
            curMin = min(curMin, 0) + num;
            minSum = min(minSum, curMin);
            
            totalSum += num;  
        }

        if (totalSum == minSum) {
            return maxSum;
        }
        
        return max(maxSum, totalSum - minSum);
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public int maxSubarraySumCircular(int[] nums) {
        int curMax = 0;
        int curMin = 0;
        int maxSum = nums[0];
        int minSum = nums[0];
        int totalSum = 0;
        
        for (int num: nums) {
            // Normal Kadane's
            curMax = Math.max(curMax, 0) + num;
            maxSum = Math.max(maxSum, curMax);
            
            // Kadane's but with min to find minimum subarray
            curMin = Math.min(curMin, 0) + num;
            minSum = Math.min(minSum, curMin);
            
            totalSum += num;  
        }

        if (totalSum == minSum) {
            return maxSum;
        }
        
        return Math.max(maxSum, totalSum - minSum);
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    def maxSubarraySumCircular(self, nums: List[int]) -> int:
        cur_max = 0
        cur_min = 0
        max_sum = nums[0]
        min_sum = nums[0]
        total_sum = 0
        
        for num in nums:
            # Normal Kadane's
            cur_max = max(cur_max, 0) + num
            max_sum = max(max_sum, cur_max)
            
            # Kadane's but with min to find minimum subarray
            cur_min = min(cur_min, 0) + num
            min_sum = min(min_sum, cur_min)
            
            total_sum += num
        
        if total_sum == min_sum:
            return max_sum
        
        return max(max_sum, total_sum - min_sum)
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(N)$

> **Reason**: The algorithm iterates over all elements to calculate the `maxSum`, `minSum`, and `sum` which takes $O(N)$ time.

#### Space Complexity: $O(1)$

> **Reason**: The algorithm doesn't use extra space other than several integer variables.


## Video Solution 

<LiteYouTubeEmbed
    id="Q1TYVUEr-wY"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="Maximum Sum Circular Subarray | Leetcode 918"
    poster="hqdefault"
    webp />

## References

- **LeetCode Problem**: [Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/description/)

- **Solution Link**: [Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>