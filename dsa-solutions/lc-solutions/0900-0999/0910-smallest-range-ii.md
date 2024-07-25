---
id: smallest-range-ii
title: Smallest Range II
sidebar_label: 0910 - Smallest Range II
tags:
  - Sorting
  - Greedy
  - Array
description: "This is a solution to the Smallest Range II problem on LeetCode."
---

## Problem Description

You are given an integer array `nums` and an integer `k`.

For each index `i` where `0 <= i < nums.length`, change `nums[i]` to be either `nums[i] + k` or `nums[i] - k`.

The score of `nums` is the difference between the maximum and minimum elements in nums.

Return the minimum **score** of `nums` after changing the values at each index.


### Examples

**Example 1:**

```
Input
Input: nums = [1], k = 0
Output: 0
Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
```
**Example 2:**

```
Input: nums = [0,10], k = 2
Output: 6
Explanation: Change nums to be [2, 8]. The score is max(nums) - min(nums) = 8 - 2 = 6.
```

### Constraints

- $1 \leq nums.length \leq 104$
- $0 \leq nums[i] \leq 104$
- $0 \leq k \leq 104$

## Solution for Smallest Range II

## Approach: Linear Scan
### Intuition

As in Smallest Range I, smaller `A[i]` will choose to increase their value ("go up"), and bigger `A[i]` will decrease their value ("go down").

### Algorithm

We can formalize the above concept: if `A[i] < A[j]`, we don't need to consider when `A[i]` goes down while `A[j]` goes up. This is because the interval `(A[i] + K, A[j] - K)` is a subset of `(A[i] - K, A[j] + K)` (here, `(a, b)` for `a > b` denotes `(b, a)` instead.)

That means that it is never worse to choose `(up, down)` instead of `(down, up)`. We can prove this claim that one interval is a subset of another, by showing both `A[i] + K` and `A[j] - K` are between `A[i] - K` and `A[j] + K`.

For sorted `A`, say `A[i]` is the largest i that goes up. Then `A[0] + K`, `A[i] + K`, `A[i+1] - K`, `A[A.length - 1] - K` are the only relevant values for calculating the answer: every other value is between one of these extremal values.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    int smallestRangeII(vector<int>& A, int K) {
        int N = A.size();
        sort(A.begin(), A.end());
        int ans = A[N-1] - A[0];

        for (int i = 0; i < A.size() - 1; ++i) {
            int a = A[i], b = A[i+1];
            int high = max(A[N-1] - K, a + K);
            int low = min(A[0] + K, b - K);
            ans = min(ans, high - low);
        }
        return ans;
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public int smallestRangeII(int[] A, int K) {
        int N = A.length;
        Arrays.sort(A);
        int ans = A[N-1] - A[0];

        for (int i = 0; i < A.length - 1; ++i) {
            int a = A[i], b = A[i+1];
            int high = Math.max(A[N-1] - K, a + K);
            int low = Math.min(A[0] + K, b - K);
            ans = Math.min(ans, high - low);
        }
        return ans;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def smallestRangeII(self, A, K):
        A.sort()
        mi, ma = A[0], A[-1]
        ans = ma - mi
        for i in xrange(len(A) - 1):
            a, b = A[i], A[i+1]
            ans = min(ans, max(ma-K, a+K) - min(mi+K, b-K))
        return ans
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(NlogN)$

> **Reason**: where N is the length of the A.

#### Space Complexity: $O(N)$ or $O(logN)$

> **Reason**:
>   - The space complexity of the sorting algorithm depends on the implementation of each programming language.
>
>   - For instance, the `list.sort()` function in Python is implemented with the Timsort algorithm whose space complexity is $O(N)$.
>
>   - In Java, the `Arrays.sort()` is implemented as a variant of quicksort algorithm whose space complexity is $O(log⁡N)$.


## Video Solution 

<LiteYouTubeEmbed
    id="0nCEcim5e2A"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="Smallest Range II | Live Coding with Explanation"
    poster="hqdefault"
    webp />

## References

- **LeetCode Problem**: [Smallest Range II](https://leetcode.com/problems/smallest-range-ii/description/)

- **Solution Link**: [Smallest Range II](https://leetcode.com/problems/smallest-range-ii/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>