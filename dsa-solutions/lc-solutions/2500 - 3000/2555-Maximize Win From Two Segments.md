---
id: maximiz-win-from-two-segments
title: Maximize Win From Two Segments
sidebar_label: 2555 Maximize Win From Two Segments

tags:
    - Binary Search
    - Array
    - Sorting
    - Greedy
description: "This is a solution to the Maximize Win From Two Segments
 problem on LeetCode."
---

## Problem Description

There are some prizes on the X-axis. You are given an integer array prizePositions that is sorted in non-decreasing order, where prizePositions[i] is the position of the ith prize. There could be different prizes at the same position on the line. You are also given an integer k.

You are allowed to select two segments with integer endpoints. The length of each segment must be k. You will collect all prizes whose position falls within at least one of the two selected segments (including the endpoints of the segments). The two selected segments may intersect.

For example if k = 2, you can choose segments [1, 3] and [2, 4], and you will win any prize i that satisfies `1 <= prizePositions[i] <= 3 or 2 <= prizePositions[i] <= 4`
Return the maximum number of prizes you can win if you choose the two segments optimally.

### Examples

**Example 1:**

```

Input: prizePositions = [1,1,2,2,3,3,5], k = 2
Output: 7
Explanation: In this example, you can win all 7 prizes by selecting two segments [1, 3] and [3, 5].

```

**Example 2:**
```
Input: prizePositions = [1,2,3,4], k = 0
Output: 2
Explanation: For this example, one choice for the segments is [3, 3] and [4, 4], and you will be able to get 2 prizes. 

```


### Constraints

- `1 <= prizePositions.length <= 10^5`
- `1 <= prizePositions[i] <= 10^9`
 

### Approach 

We define $f[i]$ as the maximum number of prizes that can be obtained by selecting a segment of length $k$ from the first $i$ prizes. Initially, $f[0] = 0$. We define the answer variable as $ans = 0$.

Next, we enumerate the position $x$ of each prize, and use binary search to find the leftmost prize index $j$ such that $prizePositions[j] \geq x - k$. At this point, we update the answer $ans = \max(ans, f[j] + i - j)$, and update $f[i] = \max(f[i - 1], i - j)$.

Finally, we return $ans$.

The time complexity is $O(n \times \log n)$, and the space complexity is $O(n)$. Where $n$ is the number of prizes.



#### Python3

```python
class Solution:
    def maximizeWin(self, prizePositions: List[int], k: int) -> int:
        n = len(prizePositions)
        f = [0] * (n + 1)
        ans = 0
        for i, x in enumerate(prizePositions, 1):
            j = bisect_left(prizePositions, x - k)
            ans = max(ans, f[j] + i - j)
            f[i] = max(f[i - 1], i - j)
        return ans
```

#### Java

```java
class Solution {
    public int maximizeWin(int[] prizePositions, int k) {
        int n = prizePositions.length;
        int[] f = new int[n + 1];
        int ans = 0;
        for (int i = 1; i <= n; ++i) {
            int x = prizePositions[i - 1];
            int j = search(prizePositions, x - k);
            ans = Math.max(ans, f[j] + i - j);
            f[i] = Math.max(f[i - 1], i - j);
        }
        return ans;
    }

    private int search(int[] nums, int x) {
        int left = 0, right = nums.length;
        while (left < right) {
            int mid = (left + right) >> 1;
            if (nums[mid] >= x) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}
```

#### C++

```cpp
class Solution {
public:
    int maximizeWin(vector<int>& prizePositions, int k) {
        int n = prizePositions.size();
        vector<int> f(n + 1);
        int ans = 0;
        for (int i = 1; i <= n; ++i) {
            int x = prizePositions[i - 1];
            int j = lower_bound(prizePositions.begin(), prizePositions.end(), x - k) - prizePositions.begin();
            ans = max(ans, f[j] + i - j);
            f[i] = max(f[i - 1], i - j);
        }
        return ans;
    }
};
```