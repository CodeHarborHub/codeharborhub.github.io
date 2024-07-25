---
id: patching-array
title: Patching Array
level: hard
sidebar_label: Patching Array
tags:
  - Greedy
  - Array
  - Binary Search
  - Java
description: "This document provides solutions for the Patching Array problem."
---

## Problem Statement

Given a sorted integer array `nums` and an integer `n`, add/patch elements to the array such that any number in the range `[1, n]` inclusive can be formed by the sum of some elements in the array.

Return the minimum number of patches required.

**Example:**

Example 1:

Input: `nums = [1,3]`, `n = 6`

Output: `1`

Explanation:

Combinations of nums are `[1]`, `[3]`, `[1,3]`, which form possible sums of: `1, 3, 4`.
Now if we add/patch `2` to nums, the combinations are: `[1]`, `[2]`, `[3]`, `[1,3]`, `[2,3]`, `[1,2,3]`.
Possible sums are `1, 2, 3, 4, 5, 6`, which now covers the range `[1, 6]`.
So we only need `1` patch.

Example 2:

Input: `nums = [1,5,10]`, `n = 20`

Output: `2`

Explanation:

The two patches can be `[2, 4]`.

Example 3:

Input: `nums = [1,2,2]`, `n = 5`

Output: `0`

Explanation:

In this case, the array `nums` already covers all sums up to `5`, so no patches are needed.

**Constraints:**

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10^4`
- `nums` is sorted in ascending order.
- `1 <= n <= 2 * 10^9 - 1`

## Solutions

### Approach

The problem can be efficiently solved using a greedy approach:

1. **Initialization:**
   - Initialize `miss` to `1`, which represents the smallest number that cannot be formed with the current elements in `nums`.
   - Initialize `result` to `0` to count the number of patches needed.
   - Initialize `i` to `0` to iterate through `nums`.

2. **Iterate Until Covering `n`:**
   - While `miss` is less than or equal to `n`, check if the current number `miss` can be formed by adding elements from `nums`.
   - If `nums[i]` is less than or equal to `miss`, add `nums[i]` to `miss` and move to the next element (`i++`).
   - If `nums[i]` is greater than `miss` or `i` exceeds the length of `nums`, it means `miss` cannot be formed with the current elements. Therefore, add `miss` itself to `nums` to extend the range of possible sums and increment `result`.

3. **Return Result:**
   - Once the loop ends and `miss` is greater than `n`, return `result`, which is the minimum number of patches required to cover all sums up to `n`.

### Java 

```java
class Solution {
    public int minPatches(int[] nums, int n) {
        long miss = 1;
        int result = 0;
        int i = 0;

        while (miss <= n) {
            if (i < nums.length && nums[i] <= miss) {
                miss += nums[i];
                i++;
            } else {
                miss += miss;
                result++;
            }
        }

        return result;
    }
```
### Python 

```Python 
from typing import List

class Solution:
    def minPatches(self, nums: List[int], n: int) -> int:
        miss = 1
        result = 0
        i = 0

        while miss <= n:
            if i < len(nums) and nums[i] <= miss:
                miss += nums[i]
                i += 1
            else:
                miss += miss
                result += 1

        return result
```


