---
id: count-of-sub-multisets-with-bounded-sum
title: Count of Sub-Multisets With Bounded Sum
sidebar_label: 2902 Count of Sub-Multisets With Bounded Sum
tags:
  - Array
  - Dynamic Programming
  - LeetCode
  - C++
description: "This is a solution to the Count of Sub-Multisets With Bounded Sum problem on LeetCode."
sidebar_position: 2902
---

## Problem Description

You are given a 0-indexed array `nums` of non-negative integers, and two integers `l` and `r`.

Return the count of sub-multisets within `nums` where the sum of elements in each subset falls within the inclusive range of `[l, r]`.

Since the answer may be large, return it modulo 10^9 + 7.

A sub-multiset is an unordered collection of elements of the array in which a given value x can occur 0, 1, ..., occ[x] times, where `occ[x]` is the number of occurrences of x in the array.

Note that:

- Two sub-multisets are the same if sorting both sub-multisets results in identical multisets.
- The sum of an empty multiset is 0.

### Examples

**Example 1:**

```
Input: nums = [1,2,2,3], l = 6, r = 6
Output: 1
Explanation: The only subset of nums that has a sum of 6 is {1, 2, 3}.
```

**Example 2:**

```
Input: nums = [2,1,4,2,7], l = 1, r = 5
Output: 7
Explanation: The subsets of nums that have a sum within the range [1, 5] are {1}, {2}, {4}, {2, 2}, {1, 2}, {1, 4}, and {1, 2, 2}.
```

**Example 3:**

```
Input: nums = [1,2,1,3,5,2], l = 3, r = 5
Output: 9
Explanation: The subsets of nums that have a sum within the range [3, 5] are {3}, {5}, {1, 2}, {1, 3}, {2, 2}, {2, 3}, {1, 1, 2}, {1, 1, 3}, and {1, 2, 2}.
```
### Constraints
- `1 <= nums.length <= 2 * 10^4`
- `0 <= nums[i] <= 2 * 10^4`
- `Sum of nums does not exceed 2 * 10^4.`
- `0 <= l <= r <= 2 * 10^4`

### Approach

dp[i] is the number of unique sorted multisets of sum i lets say that we use a new number, a that occurs c times within the array we can add a 1 to c times to every multiset to create new ones, so the dp transition will look like dp[i] += dp[i - a] + dp[i - a * 2] + ... + dp[i - a * c]

Since the sum of c across all a is n, doing dp like this will result in n^2 time complexity. We can speed up the update for each pair of a, c by using sliding window. We do this by
we want to add to dp[i] dp[i - a] + dp[i - a * 2] + ... + dp[i - a * c].

Note that the stuff we add to dp[i - a] is very similar: dp[i - a * 2] + dp[i - a * 3] + ... + dp[i - a * (c + 1)] dp[i - a] got removed, and dp[i - a * (c + 1)] got added once you know the amount to add for dp[i], it takes constant time to compute the amount to add for dp[i - a].

I claim that when sped up, each pair will only take O(n) time to process and since the number of unique a is at most 200.


#### C++

```cpp
typedef long long ll;
const ll MOD = 1e9 + 7;

class Solution {
public:
    int countSubMultisets(vector<int>& nums, int l, int r) {
        const ll N = 2e4;
        vector<ll> dp(N + 1);
        map<ll,ll> m;
        dp[0] = 1;
        m[0] = 1;
        for(auto x : nums) {
            m[x]++;
        }
        ll mult = m[0]; m.erase(0);
        for(auto x : m) {
            //{a, c}
            ll a = x.first;
            ll c = x.second;
            vector<ll> help(N + 1);
            for(int i = 1; i <= N; i++) {
                ll sum = 0;
                if(i - a >= 0) {
                    sum += dp[i-a];
                    sum += help[i-a];
                }
                if(i - a * (c + 1) >= 0) {
                    sum -= dp[i - a * (c + 1)];
                }
                help[i] = (sum + MOD) % MOD;
            }
            for(int i = 0; i <= N; i++) {
                dp[i] += help[i];
                if(dp[i] >= MOD) dp[i] -= MOD;
            }
        }
        ll sum = 0;
        for(int i = l; i <= r; i++) {
            sum += dp[i];
            if(sum >= MOD) sum -= MOD;
        }
        return sum * mult % MOD;
    }
};
```

### Complexity
- Time complexity: $O(200n)$
- Space complexity: $O(200n)$