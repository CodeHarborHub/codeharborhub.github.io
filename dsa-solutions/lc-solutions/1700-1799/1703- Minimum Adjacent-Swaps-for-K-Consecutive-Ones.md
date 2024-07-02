---
id: minimum-adjacent-swaps-for-k-consecutive-ones
title:  Minimum-Adjacent-Swaps-for-K-Consecutive-Ones
sidebar_label: 1703. Minimum Adjacent Swaps for K Consecutive Ones
tags:
- Array
- Greedy
- Sliding Window
- PrefixSum
- Python
- Java

description: "This is a solution to the Minimum Adjacent Swaps for K Consecutive Ones problem on LeetCode."
---

## Problem Description
You are given an integer array, `nums`, and an integer `k`. nums comprises of only `0`'s and `1`'s. In one move, you can choose two adjacent indices and swap their values.

Return the minimum number of moves required so that nums has k consecutive `1`'s.

### Examples

**Example 1:**
```
Input: nums = [1,0,0,1,0,1], k = 2
Output: 1
Explanation: In 1 move, nums could be [1,0,0,0,1,1] and have 2 consecutive 1's.

```

**Example 2:**

```
Input: nums = [1,0,0,0,0,0,1,1], k = 3
Output: 5
Explanation: In 5 moves, the leftmost 1 can be shifted right until nums = [0,0,0,0,0,1,1,1].

```


### Constraints
- `1 <= nums.length <= 10^5`
- `1 <= k <= sum(nums)`

## Solution for 1703. Minimum Adjacent Swaps for K Consecutive Ones

### Approach 
Take `[1,0,0,1,1,0,0,1,0,0,1], k=4` for example
Idea:

1. Find the indices of all 1s
->[0,3,4,7,10])
2. Calculate the total number of swaps with a sliding window of length `k`
->window 1: [0,3,4,7] and window 2: [3,4,7,10] (eg. k=4)
3. Notice that aggregate all 1s to the median 1 will lead to the minimum distance
->1st window: 3 and 4 are both medians, I choose the larger one
->2nd window: 4 and 7 are both medians, I choose the larger one
4. For each valid index, I aggregate all `k/2` left 1s and `(k-1)/2` right 1s
->aggregate "1 at 0, 3, and 7" to "1 at 4" for the first window `(eg. [0,3,4,7] to [2,3,4,5])`
->aggregate "1 at 3, 4, and 10" to "1 at 7" for the second window `(eg. [3,4,7,10] to [5,6,7,8])`
5. Use the prefix sum to speed up the calculation for total number of swaps
->[0,0,3,7,14,24]


   ## Code in Different Languages
   <Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```python
               def minMoves(self, A, k):
        A = [i for i, a in enumerate(A) if a]
        n = len(A)
        B = [0] * (n + 1)
        res = float('inf')
        for i in xrange(n):
            B[i + 1] = B[i] + A[i]
        for i in xrange(len(A) - k + 1):
            res = min(res, B[i + k] - B[k / 2 + i] - B[(k + 1) / 2 + i] + B[i])
        res -= (k / 2) * ((k + 1) / 2)
        return res

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```java
               public int minMoves(int[] nums, int k) {
        ArrayList<Long> A = new ArrayList<Long>(), B = new ArrayList<Long>();
        for (int i = 0; i < nums.length; ++i)
            if (nums[i] == 1)
                A.add((long)i);
        long res = Long.MAX_VALUE;
        B.add(0L);
        for (int i = 0; i < A.size(); ++i)
            B.add(B.get(i) + A.get(i));
        for (int i = 0; i <  A.size() - k + 1; ++i)
            res = Math.min(res, B.get(i + k) - B.get(k / 2 + i) - B.get((k + 1) / 2 + i) + B.get(i));
        res -= (k / 2) * ((k + 1) / 2);
        return (int)res;
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
         int minMoves(vector<int>& nums, int k) {
        vector<long> A, B(1);
        for (int i = 0; i < nums.size(); ++i)
            if (nums[i])
                A.push_back(i);
        long n = A.size(), res = 2e9;
        for (int i = 0; i < n; ++i)
            B.push_back(B[i] + A[i]);
        for (int i = 0; i < n - k + 1; ++i)
            res = min(res, B[i + k] - B[k / 2 + i] - B[(k + 1) / 2 + i] + B[i]);
        res -= (k / 2) * ((k + 1) / 2);
        return res;
    }
    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

#### Complexity Analysis

    - Time Complexity: $ O(N) $ 
    - Space Complexity: $ O(N)$

## References

- **LeetCode Problem**: [ Minimum Adjacent Swaps for K Consecutive Ones](https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/)

