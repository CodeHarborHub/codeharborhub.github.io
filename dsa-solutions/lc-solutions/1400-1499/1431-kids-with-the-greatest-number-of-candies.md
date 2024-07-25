---
id: kids-with-the-greatest-number-of-candies
title: Kids With the Greatest Number of Candies
level: easy
sidebar_label: Kids With the Greatest Number of Candies
tags:
  - Array
  - Greedy
  - Java
description: "This document provides solutions for the Kids With the Greatest Number of Candies problem."
---

## Problem Statement

There are `n` kids with candies. You are given an integer array `candies`, where each `candies[i]` represents the number of candies the ith kid has, and an integer `extraCandies`, denoting the number of extra candies that you have.

Return a boolean array `result` of length `n`, where `result[i]` is `true` if, after giving the ith kid all the `extraCandies`, they will have the greatest number of candies among all the kids, or `false` otherwise.

**Example 1:**

Input: `candies = [2,3,5,1,3]`, `extraCandies = 3`

Output: `[true,true,true,false,true]`

Explanation: If you give all `extraCandies` to:
- Kid 1, they will have `2 + 3 = 5` candies, which is the greatest among the kids.
- Kid 2, they will have `3 + 3 = 6` candies, which is the greatest among the kids.
- Kid 3, they will have `5 + 3 = 8` candies, which is the greatest among the kids.
- Kid 4, they will have `1 + 3 = 4` candies, which is not the greatest among the kids.
- Kid 5, they will have `3 + 3 = 6` candies, which is the greatest among the kids.

**Example 2:**

Input: `candies = [4,2,1,1,2]`, `extraCandies = 1`

Output: `[true,false,false,false,false]`

Explanation: There is only `1` extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.

**Example 3:**

Input: `candies = [12,1,12]`, `extraCandies = 10`

Output: `[true,false,true]`

**Constraints:**

- `n == candies.length`
- `2 <= n <= 100`
- `1 <= candies[i] <= 100`
- `1 <= extraCandies <= 50`

## Solutions

### Approach

To determine if each kid can have the greatest number of candies after receiving `extraCandies`, follow these steps:

1. **Find the Maximum Candies:**
   - Traverse through the `candies` array to find the maximum number of candies any kid currently has.

2. **Check Each Kid's Condition:**
   - Iterate through the `candies` array again.
   - For each kid, check if adding `extraCandies` to their current candies makes their total candies equal to or greater than the maximum number found.
   - Store `true` if the condition is met, otherwise store `false`.

### Java 

```java

class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        int maxCandies = 0;
        for (int candy : candies) {
            maxCandies = Math.max(maxCandies, candy);
        }
        
        List<Boolean> result = new ArrayList<>();
        for (int candy : candies) {
            result.add(candy + extraCandies >= maxCandies);
        }
        
        return result;
    }

}
```

### Python 
```Python
class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxCandies = max(candies)
        result = []
        
        for candy in candies:
            result.append(candy + extraCandies >= maxCandies)
        
        return result
```
