---
id: minimum-operations-to-make-a-subsequence
title: Minimum Operations to Make a Subsequence
sidebar_label: 1713. Minimum Operations to Make a Subsequence
tags: [Array, Simulation, C++, Python, Java]
description: "This is a solution to the Minimum Operations to Make a Subsequence problem on LeetCode."
---

## Problem Description

You are given an array target that consists of distinct integers and another integer array arr that can have duplicates.

In one operation, you can insert any integer at any position in arr. For example, if `arr = [1,4,1,2]`, you can add `3` in the middle and make it `[1,4,3,1,2]`. Note that you can insert the integer at the very beginning or end of the array.

Return the minimum number of operations needed to make target a subsequence of arr.

A subsequence of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the remaining elements' relative order. For example, `[2,7,4]` is a subsequence of `[4,2,3,7,2,1,4]` (the underlined elements), while `[2,4,2]` is not.

### Examples

**Example 1:**

```
Input: target = [5,1,3], arr = [9,4,2,3,4]
Output: 2
Explanation: You can add 5 and 1 in such a way that makes arr = [5,9,4,1,2,3,4], then target will be a subsequence of arr.

```

**Example 2:**

```
Input: target = [6,4,8,1,3,2], arr = [4,7,6,2,3,8,6,1]
Output: 3

```

### Constraints

- `1 <= target.length, arr.length <= 10^5`
- `1 <= target[i], arr[i] <= 10^9`

## Solution for 1713. Minimum Operations to Make a Subsequence


### Approach

Seems to be LCS problem,
and we can easily solve in $O(n^2)$,
then it will get TLE.

Actually there is a bold hint in the statement,
"You are given an array target that consists of distinct integers"

So there is an order for elements in the target.
For element in A, if it's not in target, we ignore it.
If it's in target, we want find the sequence ending with lower order.

So we we actually want to find an increase sequence in the A.
This a typical LIS problems.
Just a small difference,
we don't want it to be increase in the element's value,
but in the element's order.


### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```python
              def minOperations(self, target, A):
        ha = {a: i for i, a in enumerate(target)}
        stack = []
        for a in A:
            if a not in ha: continue
            i = bisect.bisect_left(stack, h[a])
            if i == len(stack):
                stack.append(0)
            stack[i] = h[a]
        return len(target) - len(stack)

    ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```java
           public int minOperations(int[] target, int[] A) {
        Map<Integer, Integer> h = new HashMap<>();
        for (int i = 0; i < target.length; ++i) {
            h.put(target[i], i);
        }
        int lis = 0, stack[] = new int[A.length + 1];
        for (int a : A) {
            if (!h.containsKey(a)) continue;
            int i = Arrays.binarySearch(stack, 0, lis, h.get(a));
            i = Math.max(i, ~i);
            stack[i] = h.get(a);
            lis = Math.max(lis, i + 1);
        }
        return target.length - lis;
    }
    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```cpp
    int minOperations(vector<int>& target, vector<int>& A) {
        unordered_map<int, int> h;
        int n = A.size();
        for (int i = 0; i < target.size(); ++i)
            h[target[i]] = i;

        vector<int> stack;
        for (int a : A) {
            if (h.find(a) == h.end()) continue;
            if (stack.empty() || h[a] > stack.back()) {
                stack.push_back(h[a]);
                continue;
            }
            int left = 0, right = stack.size() - 1, mid;
            while (left < right) {
                mid = (left + right) / 2;
                if (stack[mid] < h[a])
                    left = mid + 1;
                else
                    right = mid;
            }
            stack[left] = h[a];
        }
        return target.size() - stack.size();
    }

```
</TabItem>
</Tabs>

### Complexity Analysis

- Time Complexity: $ O(NlogN) $
- Space Complexity: $ O(N)$

## References

- **LeetCode Problem**: [Minimum Operations to Make a Subsequence](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/description/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/
