---
id: house-robber-IV
title: House Robber IV
sidebar_label: 2560 House Robber IV
tags:
  - Array
  - Binary Search
  - LeetCode
description: "This is a solution to the House Robber IV problem on LeetCode."
---

## Problem Description

There are several consecutive houses along a street, each of which has some money inside. There is also a robber, who wants to steal money from the homes, but he refuses to steal from adjacent homes.

The capability of the robber is the maximum amount of money he steals from one house of all the houses he robbed.

You are given an integer array nums representing how much money is stashed in each house. More formally, the ith house from the left has nums[i] dollars.

You are also given an integer k, representing the minimum number of houses the robber will steal from. It is always possible to steal at least k houses.

Return the minimum capability of the robber out of all the possible ways to steal at least k houses.

### Examples

**Example 1:**

```
Input: nums = [2,3,5,9], k = 2
Output: 5
Explanation: 
There are three ways to rob at least 2 houses:
- Rob the houses at indices 0 and 2. Capability is max(nums[0], nums[2]) = 5.
- Rob the houses at indices 0 and 3. Capability is max(nums[0], nums[3]) = 9.
- Rob the houses at indices 1 and 3. Capability is max(nums[1], nums[3]) = 9.
Therefore, we return min(5, 9, 9) = 5.

```

**Example 2:**

```
Input: nums = [2,7,9,3,1], k = 2
Output: 2
Explanation: There are 7 ways to rob the houses. The way which leads to minimum capability is to rob the house at index 0 and 4. Return max(nums[0], nums[4]) = 2.

```


### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `1 <= k <= (nums.length + 1)/2`
 

### Approach 
The problem is asking for the minimum stealing ability of the thief. We can use binary search to enumerate the stealing ability of the thief. For the enumerated ability $x$, we can use a greedy approach to determine whether the thief can steal at least $k$ houses. Specifically, we traverse the array from left to right. For the current house $i$ we are traversing, if $nums[i] \leq x$ and the difference between the index of $i$ and the last stolen house is greater than $1$, then the thief can steal house $i$. Otherwise, the thief cannot steal house $i$. We accumulate the number of stolen houses. If the number of stolen houses is greater than or equal to $k$, it means that the thief can steal at least $k$ houses, and at this time, the stealing ability $x$ of the thief might be the minimum. Otherwise, the stealing ability $x$ of the thief is not the minimum.

The time complexity is $O(n \times \log m)$, and the space complexity is $O(1)$. Where $n$ and $m$ are the length of the array $nums$ and the maximum value in the array $nums$, respectively.


#### Python3

```python
class Solution:
    def minCapability(self, nums: List[int], k: int) -> int:
        def f(x):
            cnt, j = 0, -2
            for i, v in enumerate(nums):
                if v > x or i == j + 1:
                    continue
                cnt += 1
                j = i
            return cnt >= k

        return bisect_left(range(max(nums) + 1), True, key=f)
```

#### Java

```java
class Solution {
    public int minCapability(int[] nums, int k) {
        int left = 0, right = (int) 1e9;
        while (left < right) {
            int mid = (left + right) >> 1;
            if (f(nums, mid) >= k) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }

    private int f(int[] nums, int x) {
        int cnt = 0, j = -2;
        for (int i = 0; i < nums.length; ++i) {
            if (nums[i] > x || i == j + 1) {
                continue;
            }
            ++cnt;
            j = i;
        }
        return cnt;
    }
}
```

#### C++

```cpp
class Solution {
public:
    int minCapability(vector<int>& nums, int k) {
        auto f = [&](int x) {
            int cnt = 0, j = -2;
            for (int i = 0; i < nums.size(); ++i) {
                if (nums[i] > x || i == j + 1) {
                    continue;
                }
                ++cnt;
                j = i;
            }
            return cnt >= k;
        };
        int left = 0, right = *max_element(nums.begin(), nums.end());
        while (left < right) {
            int mid = (left + right) >> 1;
            if (f(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
};
```
