---
id: partition-array-into-disjoint-intervals
title: Partition Array into Disjoint Intervals
sidebar_label: 915 - Partition Array into Disjoint Intervals
tags:
  - Suffix Array
  - Two Pointers
  - Prefix Sum
description: "This is a solution to the Partition Array into Disjoint Intervals problem on LeetCode."
---

## Problem Description

Given an integer array `nums`, partition it into two (contiguous) subarrays `left` and `right` so that:

- Every element in `left` is less than or equal to every element in `right`.
- `left` and `right` are non-empty.
- `left` has the smallest possible size.

Return the length of `left` after such a partitioning.

Test cases are generated such that partitioning exists.

### Examples

**Example 1:**

```
Input: nums = [5,0,3,8,6]
Output: 3
Explanation: left = [5,0,3], right = [8,6]
```
**Example 2:**

```
Input: nums = [1,1,1,0,6,12]
Output: 4
Explanation: left = [1,1,1,0], right = [6,12]
```

### Constraints

- $2 \leq nums.length \leq 10^5$
- $0 \leq nums[i] \leq 10^6$
- There is at least one valid answer for the given input.

## Solution for Partition Array into Disjoint Intervals

## Approach 1: Two Arrays
### Intuition

Instead of checking whether `all(L <= R for L in left for R in right)` , for each index let's only check whether the **largest element to the left** of the current index (inclusive) is less than or equal to the **smallest element to the right** of the current index (`max(left) <= min(right)`).

### Algorithm

Let's try to find `max(left)` for subarrays `left = nums[:1], left = nums[:2], left = nums[:3], ...` etc. Specifically, `max_left[i]` will be the maximum of subarray `nums[:i+1]`. They are related to each other: `max(nums[:4]) = max(max(nums[:3]), nums[3])`, so `max_left[4] = max(max_left[3], nums[4])`.

Similarly, `min(right)` for every possible right can be found in linear time.

Now that we can query `max(left)` and `min(right)` in constant time by checking `max_left[i]` and `min_right[i]`, we just need to iterate over `max_left` and `min_right` to find the first index where `max_left[i-1]` is less than or equal to `min_right[i]`.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    int partitionDisjoint(vector<int>& nums) {
        int N = nums.size();
        int maxLeft[N];
        int minRight[N];
        
        maxLeft[0] = nums[0];
        minRight[N - 1] = nums[N - 1];
        
        for (int i = 1; i < N; ++i) {
            maxLeft[i] = max(maxLeft[i - 1], nums[i]);
        }
        
        for (int i = N - 2; i >= 0; --i) {
            minRight[i] = min(minRight[i + 1], nums[i]);
        }
        
        for (int i = 1; i < N; ++i) {
            if (maxLeft[i - 1] <= minRight[i]) {
                return i;
            } 
        }
        // In case there is no solution, we'll return -1
        return -1;
    }
}; 
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public int partitionDisjoint(int[] nums) {
        int N = nums.length;
        int[] maxLeft = new int[N];
        int[] minRight = new int[N];
        
        maxLeft[0] = nums[0];
        minRight[N - 1] = nums[N - 1];

        for (int i = 1; i < N; ++i) {
            maxLeft[i] = Math.max(maxLeft[i - 1], nums[i]);
        }

        for (int i = N - 2; i >= 0; --i) {
            minRight[i] = Math.min(minRight[i + 1], nums[i]);
        }

        for (int i = 1; i < N; ++i) {
            if (maxLeft[i - 1] <= minRight[i]) {
                return i;
            }
        }
        // In case there is no solution, we'll return -1
        return -1;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    def partitionDisjoint(self, nums: List[int]) -> int:
        N = len(nums)
        max_left = [None] * N
        min_right = [None] * N
        
        max_left[0] = nums[0]
        min_right[-1] = nums[-1]

        for i in range(1, N):
            max_left[i] = max(max_left[i - 1], nums[i])

        for i in range(N - 2, -1, -1):
            min_right[i] = min(min_right[i + 1], nums[i])

        for i in range(1, N):
            if max_left[i - 1] <= min_right[i]:
                return i
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(N)$

> **Reason**: where N is the length of `nums`. We iterate over the input array three times and create two arrays with size N each.

#### Space Complexity: $O(N)$

> **Reason**: We use two additional arrays of size N each.

## Approach 2: One Array
### Intuition

Notice, in the first approach, we iterated from `1` to `N` twice. Once to create `max_left` and once to find which index to split the array at. We can slightly optimize our approach by performing both of these steps in the same for loop. Doing so will allow us to replace the `max_left` array with a single variable that tracks the maximum value seen so far (`curr_max`).

> How can we do this? Try to code it up yourself before looking at the solution below.

### Algorithm

1. Initialize a `min_right` array with the rightmost value equal to the rightmost value in nums.
2. Iterate over nums in reverse order and at each iteration update the current index of `min_right` with the minimum value seen so far.
3. Initialize `curr_max` as the leftmost value in nums.
4. Iterate over nums from left to right and at each iteration, update `curr_max` as the maximum value seen so far. When `curr_max` is less than or equal to the minimum value to the right, then the current index is where nums should be split.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    int partitionDisjoint(vector<int>& nums) {
        int N = nums.size();
        int minRight[N];
        minRight[N - 1] = nums[N - 1];
        
        for (int i = N - 2; i >= 0; --i) {
            minRight[i] = min(minRight[i + 1], nums[i]);
        }
        
        int currMax = nums[0];
        for (int i = 1; i < N; ++i) {
            currMax = max(currMax, nums[i - 1]);
            if (currMax <= minRight[i]) {
                return i;
            } 
        }
        // In case there is no solution, we'll return -1
        return -1;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public int partitionDisjoint(int[] nums) {
        int N = nums.length;
        int[] minRight = new int[N];
        minRight[N - 1] = nums[N - 1];

        for (int i = N - 2; i >= 0; --i) {
            minRight[i] = Math.min(minRight[i + 1], nums[i]);
        }

        int currMax = nums[0];
        for (int i = 1; i < N; ++i) {
            currMax = Math.max(currMax, nums[i - 1]);
            if (currMax <= minRight[i]) {
                return i;
            }
        }
        // In case there is no solution, we'll return -1
        return -1;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    def partitionDisjoint(self, nums: List[int]) -> int:
        N = len(nums)
        min_right = [None] * N
        min_right[-1] = nums[-1]

        for i in range(N - 2, -1, -1):
            min_right[i] = min(min_right[i + 1], nums[i])

        curr_max = nums[0]
        for i in range(1, N):
            curr_max = max(curr_max, nums[i - 1])
            if curr_max <= min_right[i]:
                return i
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(N)$

> **Reason**: where N is the length of nums. We iterate over the input array two times (instead of three times as in the previous approach) and create only one array with size N (as opposed to two as before).

#### Space Complexity: $O(N)$

> **Reason**: We use one additional array of size N.


## Video Solution 

<LiteYouTubeEmbed
    id="LvS4FcrGnD8"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="Partition Array into Disjoint Intervals | LeetCode 915 | C++, Java, Python"
    poster="hqdefault"
    webp />

## References

- **LeetCode Problem**: [Partition Array into Disjoint Intervals](https://leetcode.com/problems/partition-array-into-disjoint-intervals/)

- **Solution Link**: [Partition Array into Disjoint Intervals](https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>