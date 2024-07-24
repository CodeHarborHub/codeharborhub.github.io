---
id: minimum-cost-to-split-an-array
title: Minimum Cost to Split an Array
sidebar_label: 2547 Minimum Cost to Split an Array
tags:
  - Array
  - Maths
  - LeetCode
  - C++
description: "This is a solution to the Minimum Cost to Split an Array problem on LeetCode."
---

## Problem Description

You are given an integer array nums and an integer k.

Split the array into some number of non-empty subarrays. The cost of a split is the sum of the importance value of each subarray in the split.

Let trimmed(subarray) be the version of the subarray where all numbers which appear only once are removed.

### Examples

**Example 1:**

```
Input: nums = [1,2,1,2,1,3,3], k = 2
Output: 8
Explanation: We split nums to have two subarrays: [1,2], [1,2,1,3,3]

```

**Example 2:**

```
Input: nums = [1,2,1,2,1], k = 2
Output: 6
Explanation: We split nums to have two subarrays: [1,2], [1,2,1]

```

### Constraints

- `1 <= nums.length <= 1000`
- `0 <= nums[i] < nums.length`
- `1 <= k <= 109`

### Approach

We design a function $dfs(i)$, which represents the minimum cost of splitting from index $i$. So the answer is $dfs(0)$.

The calculation process of the function $dfs(i)$ is as follows:

If $i \ge n$, it means that the splitting has reached the end of the array, and $0$ is returned at this time.
Otherwise, we enumerate the end $j$ of the subarray. During the process, we use an array or hash table cnt to count the number of times each number appears in the subarray, and use a variable one to count the number of numbers in the subarray that appear once. So the importance of the subarray is $k + j - i + 1 - one$, and the cost of splitting is $k + j - i + 1 - one + dfs(j + 1)$. We enumerate all $j$ and take the minimum value as the return value of $dfs(i)$.
During the process, we can use memoization search, that is, use an array $f$ to memorize the return value of the function $dfs(i)$ to avoid repeated calculations.

The time complexity is $O(n^2)$, and the space complexity is $O(n)$. Where $n$ is the length of the array $nums$.

#### Python3

```python
class Solution:
    def minCost(self, nums: List[int], k: int) -> int:
        @cache
        def dfs(i):
            if i >= n:
                return 0
            cnt = Counter()
            one = 0
            ans = inf
            for j in range(i, n):
                cnt[nums[j]] += 1
                if cnt[nums[j]] == 1:
                    one += 1
                elif cnt[nums[j]] == 2:
                    one -= 1
                ans = min(ans, k + j - i + 1 - one + dfs(j + 1))
            return ans

        n = len(nums)
        return dfs(0)
```

#### Java

```java
class Solution {
    private Integer[] f;
    private int[] nums;
    private int n, k;

    public int minCost(int[] nums, int k) {
        n = nums.length;
        this.k = k;
        this.nums = nums;
        f = new Integer[n];
        return dfs(0);
    }

    private int dfs(int i) {
        if (i >= n) {
            return 0;
        }
        if (f[i] != null) {
            return f[i];
        }
        int[] cnt = new int[n];
        int one = 0;
        int ans = 1 << 30;
        for (int j = i; j < n; ++j) {
            int x = ++cnt[nums[j]];
            if (x == 1) {
                ++one;
            } else if (x == 2) {
                --one;
            }
            ans = Math.min(ans, k + j - i + 1 - one + dfs(j + 1));
        }
        return f[i] = ans;
    }
}
```

#### C++

```cpp
class Solution {
public:
    int minCost(vector<int>& nums, int k) {
        int n = nums.size();
        int f[n];
        memset(f, 0, sizeof f);
        function<int(int)> dfs = [&](int i) {
            if (i >= n) {
                return 0;
            }
            if (f[i]) {
                return f[i];
            }
            int cnt[n];
            memset(cnt, 0, sizeof cnt);
            int one = 0;
            int ans = 1 << 30;
            for (int j = i; j < n; ++j) {
                int x = ++cnt[nums[j]];
                if (x == 1) {
                    ++one;
                } else if (x == 2) {
                    --one;
                }
                ans = min(ans, k + j - i + 1 - one + dfs(j + 1));
            }
            return f[i] = ans;
        };
        return dfs(0);
    }
};
```