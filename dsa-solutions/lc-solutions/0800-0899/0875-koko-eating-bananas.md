---
id: koko-eating-bananas
title: Koko Eating Bananas
sidebar_label: 875 Koko Eating Bananas
tags:
  - Array
  - Binary Search
description: "This is a solution to the Koko Eating Bananas problem on LeetCode"
---

## Problem Description

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

### Examples

**Example 1:**

```
Input: piles = [3,6,7,11], h = 8
Output: 4
```

**Example 2:**

```
Input: piles = [30,11,23,4,20], h = 5
Output: 30
```

**Example 3:**

```
Input: piles = [30,11,23,4,20], h = 6
Output: 23
```

### Constraints

- `1 <= piles.length <= 10^4`
- `piles.length <= h <= 10^9`
- `1 <= piles[i] <= 10^9`

## Solution for Koko Eating Bananas

### Intuition

The problem revolves around determining the optimal speed at which Koko can consume bananas such that she finishes eating all the bananas within h hours. Koko can choose any pile each hour and eat up to k bananas from it. If a pile has fewer than k bananas left, she eats all of them and stops for that hour.

### Approach

To solve the problem of finding the minimum eating speed for Koko to finish all banana piles within h hours, we use a binary search strategy. The key insight is to identify the range of possible eating speeds, which spans from 1 banana per hour to the size of the largest pile. By performing binary search within this range, we iteratively determine the mid-point speed k and check if Koko can eat all bananas within h hours at this speed. This check involves summing the ceiling of the division of each pile by k to compute the total hours needed. If the total hours are within the allowed h, we adjust the search range to explore slower speeds (lower values of k); otherwise, we consider faster speeds (higher values of k). This process continues until the search range converges, at which point the minimum feasible eating speed is found. This approach is efficient, with a time complexity of O(n log max(piles)), making it suitable for large inputs, and it uses constant extra space.

#### Complexity Analysis

- Time Complexity: $O(n \log \max(piles))$
- Space Complexity: $O(1)$

## Code in Different Languages

<Tabs>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@ImmidiSivani" />
  ```java
  class Solution {
      public int minEatingSpeed(int[] piles, int h) {
          int l = 1;
          int r = 0;
          for (int i : piles) {
              r = Math.max(r, i);
          }
          int ans = r;
          while (l <= r) {
              int m = l + (r - l) / 2;
              long division = 0;
              for (int i : piles) {
                  division += (i + m - 1) / m;
              }
              if (division <= h) {
                  ans = m;
                  r = m - 1;
              } else {
                  l = m + 1;
              }
          }
          return ans;
      }
  }
  ```
  </TabItem>
  
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@ImmidiSivani" />
  ```python
  class Solution:
      def minEatingSpeed(self, piles, h):
          l, r = 1, max(piles)
          ans = r

          while l <= r:
              m = (l + r) // 2
              division = 0
              for i in piles:
                  division += (i + m - 1) // m
              if division <= h:
                  ans = m
                  r = m - 1
              else:
                  l = m + 1

          return ans
  ```
  </TabItem>
  
  <TabItem value="c++" label="C++">
  <SolutionAuthor name="@ImmidiSivani" />
  ```c++
  #include <iostream>
  #include <vector>
  #include <algorithm>
  #include <cmath>

  class Solution {
  public:
      int minEatingSpeed(std::vector<int>& piles, int h) {
          int l = 1;
          int r = *std::max_element(piles.begin(), piles.end());
          int ans = r;

          while (l <= r) {
              int m = l + (r - l) / 2;
              long long division = 0;
              for (int i : piles) {
                  division += (i + m - 1) / m;
              }
              if (division <= h) {
                  ans = m;
                  r = m - 1;
              } else {
                  l = m + 1;
              }
          }

          return ans;
      }
  };
  ```
  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/koko-eating-bananas/post-solution/?submissionId=1295704443)
