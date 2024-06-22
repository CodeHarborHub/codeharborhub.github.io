---
id: game-of-subsets
title: Game Of Subsets (Geeks for Geeks)
sidebar_label: Game Of Subsets
tags:
  - Intermediate
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Game Of Subsets problem on Geeks for Geeks."
---

## Problem Description

Elena is the topper of the class. Once her teacher asked her a problem. He gave Elena an array of integers of length n. He calls a subset of array arr good if its product can be represented as a product of one or more distinct prime numbers. He asked her to find the number of different good subsets in arr modulo 109 + 7.

## Examples

**Example:**

Example 1:

**Input:** `N: 4, arr: {1,2,3,4}`
**Output:** 6
**Explanation: **
The good subsets are:
- `[1,2]`: product is `2`, which is the product of distinct
prime `2`.
- `[1,2,3]`: product is `6`, which is the product of 
distinct primes `2` and `3`.
- `[1,3]`: product is `3`, which is the product of distinct
prime `3`.
- `[2]`: product is `2`, which is the product of distinct
 prime `2`.
- `[2,3]`: product is `6`, which is the product of distinct
primes `2` and `3`.
- `[3]`: product is `3`, which is the product of distinct
prime `3`.

## Your Task

The task is to complete the function goodSubsets() which takes an integer n and an array arr as the input parameters and should return the number of different good subsets.

Expected Time Complexity: $O(NlogN)$
Expected Space Complexity: $O(N)$

## Constraints

- `1 <= N <= 105`
- `1< = arr[i] <= 30`

## Problem Explanation

Here's the step-by-step breakdown of the Game of Subsets process:

You are given an integer array nums. We call a subset of nums good if its product can be represented as a product of one or more distinct prime numbers.

For example, if nums = [1, 2, 3, 4]:
[2, 3], [1, 2, 3], and [1, 3] are good subsets with products 6 = 2*3, 6 = 2*3, and 3 = 3 respectively.
[1, 4] and [4] are not good subsets with products 4 = 2*2 and 4 = 2*2 respectively.
Return the number of different good subsets in nums modulo 109 + 7.

A subset of nums is any array that can be obtained by deleting some (possibly none or all) elements from nums. Two subsets are different if and only if the chosen indices to delete are different.
### Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
class Solution:
    def numberOfGoodSubsets(self, nums: List[int]) -> int:
        arr = [2,3,5,7,11,13,17,19,23,29]
        def solve(num):
            curr = 0
            for idx,i in enumerate(arr):
                cnt = 0
                while num%i == 0:
                    num = num//i
                    cnt +=1
                if cnt > 1:
                    return -1
                if cnt:
                    curr = curr|(1<<idx)
            return curr if curr != 0 else -1
        go = lambda x,y:bin(x).count("1")+bin(y).count("1") == bin(x|y).count("1")
        freq = {}
        for i in nums:
            freq[i] = 1+freq.get(i,0)
        temp = [(solve(i),i) for i in range(2,31) if solve(i) != -1]
        h = defaultdict(list)
        ans = -1
        mod = 10**9 + 7
        def helper(i,curr, res):
            nonlocal ans
            if i == len(temp):
                goto = 1
                for j in res:
                    goto *= freq.get(j,0)
                    goto %= mod
                ans += goto
                ans %= mod
                return
            if go(curr, temp[i][0]):
                res.append(temp[i][1])
                helper(i+1, curr|temp[i][0], res)
                res.pop()
            helper(i+1, curr, res) 
        helper(0,0,[])
        return (ans*(pow(2, freq.get(1, 0), mod)))%mod

  ```
  </TabItem>

  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
class Solution {
public:
    int mod=1e9+7;
    vector<int>prime;
    int mp[45];
    long long dp[31][1<<12];
    int find(int n)
    {
        for(int i=2;i<=sqrt(n);i++)
        {
            if(n%i==0)
            {
                return false;
            }
        }
        return true;
    }
    long long find(int value,int mask)
    {
        if(value>30)
        {
            return (mask>0);
        }
        if(dp[value][mask]!=-1)
        {
            return dp[value][mask]%mod;
        }
        int new_mask=0;
        long long product=1;
        for(int i=0;i<prime.size();i++)
        {
            if((value%prime[i])==0)
            {
                product*=prime[i];
                new_mask|=(1<<i);
            }
        }
        long long ans=find(value+1,mask);
        if(product==value&&mp[value]&&((mask&new_mask)==0))
        {
            ans+=(find(value+1,mask|new_mask)*mp[value]);
        }
        return dp[value][mask]=ans%mod;
    }
    int numberOfGoodSubsets(vector<int>& nums) 
    {
        memset(dp,-1,sizeof(dp));
        for(int i=2;i<=30;i++)
        {
            if(find(i))
            {
                prime.push_back(i);
            }
        }
        for(auto it:nums)
        {
            mp[it]++;
        }
        long long val=find(2,0)%mod;
        long one=1;
        for(int i=0;i<mp[1];i++)
        {
            one=(one*2)%mod;
        }
        val=(val*one)%mod;
        return val;
    }
};
  ```
  </TabItem>
</Tabs>

## Solution Logic
**Prime Factors and Bitmask Representation:**
The list arr contains the first 10 prime numbers.
The function solve(num) converts a number into a bitmask representing its prime factors, ensuring each prime factor appears only once. If a prime factor appears more than once, it returns -1.
**Compatibility Check:** 
The lambda function go(x, y) checks if two numbers represented by bitmasks x and y do not share any common prime factors.
**Frequency Count:**
The dictionary freq counts the occurrences of each number in the input list nums.
**Valid Numbers and Bitmasks:**
The list temp contains tuples of valid numbers between 2 and 30 (inclusive) and their corresponding bitmasks, filtered to exclude numbers that are not square-free.
**Backtracking Helper Function:**
The function helper(i, curr, res) uses backtracking to explore all possible subsets of valid numbers.
If a subset is valid (no common prime factors), it calculates the number of such subsets using the frequency of each number and updates the global count ans.
**Main Function:**
Initializes the backtracking by calling helper`(0, 0, [])`.
Returns the final count of good subsets, multiplied by the number of ways to include 1 (if it exists), modulo `10^9+7`
## Time Complexity

 $O(NlogN)$.

## Space Complexity

 $O(N)$.

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/problems/game-of-subsets/1)
- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/the-number-of-good-subsets/description/)
- **Author's Geeks for Geeks Profile:**  | [DaminiChachane](https://leetcode.com/u/divcxl15/) |

This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.
