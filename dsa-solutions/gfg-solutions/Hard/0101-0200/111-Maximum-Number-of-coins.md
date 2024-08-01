---
id: 111-maximum-number-of-coins
title: Maximum Number of coins (Geeks for Geeks)
sidebar_label: Maximum Number of coins Problem
tags:
  - Intermediate
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Maximum Number of coins Problem  on Geeks for Geeks."
---

## Problem Description

We have been given N balloons, each with a number of coins associated with it. On bursting a balloon i, the number of coins gained is equal to A[i-1]*A[i]*A[i+1].
Also, balloons i-1 and i+1 now become adjacent. Find the maximum possible profit earned after bursting all the balloons. Assume an extra 1 at each boundary.

## Examples

**Example:**

Consider the following graph:

**Input:** ` N=2 , a[]={5, 10}`
**Output:**  `60`
**Explanation:** First Burst `5`, Coins = `1*5*10` , Then burst `10`, Coins+=` 1*10*1` , Total = `60`

**Example:**

**Input:** `N=4 , a[] = {3,1,5,8}`
**Output:** 167
**Explanation:**
`nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []`
`coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167.`

## Your Task

You don't need to read input or print anything. Your task is to complete the function maxCoins() which takes the array arr[], its size N, and returns the maximum number of coins that can be collected.

Expected Time Complexity: $O(N^3)$
Expected Space Complexity: $O(N^2)$

## Constraints
- `1 <= N <= 400`
- `0 <= a[i] <= 100`

## Problem Explanation

Here's the step-by-step breakdown of the Maximum Number of coins process:

There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:

**Step 1:** In each step, you will choose any 3 piles of coins (not necessarily consecutive).
**Step 2 :**Of your choice, Alice will pick the pile with the maximum number of coins.
**Step 3 :**You will pick the next pile with the maximum number of coins.
**Step 4 :**Your friend Bob will pick the last pile.
**Step 5 :**Repeat until there are no more piles of coins.

Given an array of integers piles where piles[i] is the number of coins in the ith pile. Return the maximum number of coins that you can have.

### Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/> 
  ```python

class Solution:
    def maxCoins(self, piles: List[int]) -> int:
        piles.sort()
        return sum(piles[-2:(len(piles)//3)-1:-2])

  ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  class Solution {
public:

    int maxCoins(vector<int>& piles) {
        // sort the piles in non-increasing order
        sort(piles.begin(), piles.end(), greater<int>());
        
        // greedy using two-pointers
        int sum = 0;
        for (int l = 0, r = piles.size() - 1; l < r; l += 2, r--) {
            sum += piles[l + 1];
        }
        return sum;
    }
};
  ```

  </TabItem>
</Tabs>

## Solution Logic
 - Sort the piles in non-increasing order
 - Greedy using two-pointers


## Time Complexity

$$O(N^3)$$.

## Space Complexity

$$O(N^2)$$.

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/problems/maximum-number-of-coins--170647/1)
- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/description/)
- **Author's Geeks for Geeks Profile:**  | [DaminiChachane](https://leetcode.com/u/divcxl15/) |

This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.
