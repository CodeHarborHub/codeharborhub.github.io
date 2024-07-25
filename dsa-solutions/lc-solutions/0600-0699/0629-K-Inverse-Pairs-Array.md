---
id: k-inverse-pairs-array
title: K Inverse Pairs Array
sidebar_label: 0629 - K Inverse Pairs Array
tags:
  - Dynammic Programming
  - C++
  - Java
  - Python
description: "This is a solution to the K Inverse Pairs Array problem on LeetCode."
---

## Problem Description

For an integer array nums, an inverse pair is a pair of integers `[i, j]` where `0 <= i < j < nums`.length and `nums[i] > nums[j]`.

Given two integers n and k, return the number of different arrays consisting of numbers from `1 to n` such that there are exactly k inverse pairs. Since the answer can be huge, return it modulo `109 + 7`.

### Examples

**Example 1:**

```
Input: n = 3, k = 0
Output: 1
Explanation: Only the array [1,2,3] which consists of numbers from 1 to 3 has exactly 0 inverse pairs.

```
**Example 2:**

```
Input: n = 3, k = 1
Output: 2
Explanation: The array [1,3,2] and [2,1,3] have exactly 1 inverse pair.

```
### Constraints

- `1 <= n <= 1000`
- `0 <= k <= 1000`

## Solution for K Inverse Pairs Array

### Approach 

`dp[n][k]` denotes the number of arrays that have k inverse pairs for array composed of `1 to n`
we can establish the recursive relationship between `dp[n][k]` and `dp[n-1][i]`:

if we put n as the last number then all the k inverse pair should come from the first `n-1` numbers
if we put n as the second last number then there's 1 inverse pair involves n so the rest `k-1` comes from the first n-1 numbers
...
if we put n as the first number then there's `n-1` inverse pairs involve n so the rest `k-(n-1)` comes from the first `n-1` numbers

`dp[n][k] = dp[n-1][k]+dp[n-1][k-1]+dp[n-1][k-2]+...+dp[n-1][k+1-n+1]+dp[n-1][k-n+1]`

It's possible that some where in the right hand side the second array index become negative, since we cannot generate negative inverse pairs we just treat them as 0, but still leave the item there as a place holder.

`dp[n][k] = dp[n-1][k]+dp[n-1][k-1]+dp[n-1][k-2]+...+dp[n-1][k+1-n+1]+dp[n-1][k-n+1]`
`dp[n][k+1] = dp[n-1][k+1]+dp[n-1][k]+dp[n-1][k-1]+dp[n-1][k-2]+...+dp[n-1][k+1-n+1]`

so by deducting the first line from the second line, we have

`dp[n][k+1] = dp[n][k]+dp[n-1][k+1]-dp[n-1][k+1-n]`


## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
int kInversePairs(int n, int k) {
        vector<int> dp(k+1, 0);
        int mod = 1e9+7;
        for(int i=1; i<=n; i++){
            vector<int> tmp(k+1, 0);
            tmp[0] = 1;
            for(int j =1; j<=k; j++){
                long long val = (dp[j] + mod - ((j-i) >=0 ? dp[j-i] : 0))%mod;
                tmp[j] = (tmp[j-1] + val)%mod;
            }
            dp = tmp;
        }
        return (dp[k] + mod - (k>0 ? dp[k-1] : 0))%mod;
    }

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>

```java
    public static int kInversePairs(int n, int k) {
        int mod = 1000000007;
        if (k > n*(n-1)/2 || k < 0) return 0;
        if (k == 0 || k == n*(n-1)/2) return 1;
        long[][] dp = new long[n+1][k+1];
        dp[2][0] = 1;
        dp[2][1] = 1;
        for (int i = 3; i <= n; i++) {
            dp[i][0] = 1;
            for (int j = 1; j <= Math.min(k, i*(i-1)/2); j++) {
                dp[i][j] = dp[i][j-1] + dp[i-1][j];
                if (j >= i) dp[i][j] -= dp[i-1][j-i];
                dp[i][j] = (dp[i][j]+mod) % mod;
            }
        }
        return (int) dp[n][k];
    }
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>

```python
class Solution:
    def kInversePairs(self, n: int, k: int) -> int:
        
        max_possible_inversions = (n * (n-1)//2)
        if k > max_possible_inversions:
            return 0
        if k == 0 or k == max_possible_inversions:
            return 1
        
        MOD = pow(10,9) + 7
        
        dp = [[0]*(k+1) for _ in range(n+1)]
        
        for i in range(1, n+1):
            dp[i][0] = 1

        dp[2][1] = 1
        
        for i in range(3,n+1):
            max_possible_inversions = min(k, i*(i-1)//2)
            for j in range(1,  max_possible_inversions + 1):
                dp[i][j] = dp[i][j-1] + dp[i-1][j] 
                if j>=i:
                    dp[i][j] -= dp[i-1][j - i]
                dp[i][j] = (dp[i][j] + MOD) % MOD
            
        return dp[n][k]

```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N*k)$

### Space Complexity: $O(N*k)$


## References

- **LeetCode Problem**: [Kth Largest Element in a Stream](https://leetcode.com/problems/k-inverse-pairs-array/description/)

- **Solution Link**: [Kth Largest Element in a Stream](https://leetcode.com/problems/k-inverse-pairs-array/solutions/)
