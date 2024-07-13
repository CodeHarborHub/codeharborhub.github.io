---
id: minimize-the-maximum-difference-of-pairs
title: Minimize the Maximum Difference of Pairs
sidebar_label: 2616. Minimize the Maximum Difference of Pairs
tags:
- Array
- Binary Search
- Greedy
description: "Solution to Leetcode 2616. Minimize the Maximum Difference of Pairs"
---

## Problem Description

You are given a 0-indexed integer array nums and an integer p. Find p pairs of indices of nums such that the maximum difference amongst all the pairs is minimized. Also, ensure no index appears more than once amongst the p pairs.

Note that for a pair of elements at the index i and j, the difference of this pair is |nums[i] - nums[j]|, where |x| represents the absolute value of x.

Return the minimum maximum difference among all p pairs. We define the maximum of an empty set to be zero.
 
### Examples

**Example 1:**

```
Input: nums = [10,1,2,7,1,3], p = 2
Output: 1
Explanation: The first pair is formed from the indices 1 and 4, and the second pair is formed from the indices 2 and 5. 
The maximum difference is max(|nums[1] - nums[4]|, |nums[2] - nums[5]|) = max(0, 1) = 1. Therefore, we return 1.
```

**Example 2:**

```
Input: nums = [4,2,1,2], p = 1
Output: 0
Explanation: Let the indices 1 and 3 form a pair. The difference of that pair is |2 - 2| = 0, which is the minimum we can attain.

```



### Constraints
- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`
- `0 <= p <= (nums.length)/2`

### Approach 
- First we don't care the original order of A[i], we want to compare the difference, so we sort them.
- The result is in range of left = 0 and right = A[n - 1] - A[0] each iteration of search, we assume the minimum maximum differenceis mid = (left + right) / 2, then we check if we can have p pairs.
- We take pairs (A[i], A[i - 1]) greedily if A[i] - A[i - 1] &lt;= mid.
- If we take this pair, we move to next availble pair (A[i + 2], A[i + 1])
- If not, we move to next availble pair (A[i + 1], A[i])
- In the end of each iteration, we check if we can have p pairs.
- If so, mid is big enough, right = mid
- If not, mid is too small, left = mid + 1.
- Finally we return the binary seach result left.

### Complexity

Time complexity: $O(nlog(max(A)) + nlogn)$

Space complexity: $O(logn)$

### Solution

#### Code in Different Languages

#### C++

 ```cpp
int minimizeMax(vector<int>& A, int p) {
        sort(A.begin(), A.end());
        int n = A.size(), left = 0, right = A[n - 1] - A[0];
        while (left < right) {
            int mid = (left + right) / 2, k = 0;
            for (int i = 1; i < n && k < p; ++i) {
                if (A[i] - A[i - 1] <= mid) {
                    k++;
                    i++;
                }
            }
            if (k >= p)
                right = mid;
            else
                left = mid + 1;
        }
        return left;
}

 ```

#### JAVA

```java
public int minimizeMax(int[] A, int p) {
        Arrays.sort(A);
        int n = A.length, left = 0, right = A[n - 1] - A[0];
        while (left < right) {
            int mid = (left + right) / 2, k = 0;
            for (int i = 1; i < n && k < p; ++i) {
                if (A[i] - A[i - 1] <= mid) {
                    k++;
                    i++;
                }
            }
            if (k >= p)
                right = mid;
            else
                left = mid + 1;
        }
        return left;
}
```

#### PYTHON

```python
def minimizeMax(self, A: List[int], p: int) -> int:
        A.sort()
        n = len(A)
        left, right = 0, A[-1] - A[0]
        while left < right:
            mid = (left + right) // 2
            k = 0
            i = 1
            while i < n:
                if A[i] - A[i - 1] <= mid:
                    k += 1
                    i += 1
                i += 1
            if k >= p:
                right = mid
            else:
                left = mid + 1
        return left
```



### Complexity Analysis

- Time Complexity: $O(nlog(max(A)) + nlogn)$

- Space Complexity: $O(logn)$

### References

- **LeetCode Problem**: Minimize the Maximum Difference of Pairs
