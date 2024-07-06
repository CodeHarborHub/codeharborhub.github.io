---
id: minimum-difference-between-largest-and-smallest-value-in-three-moves
title: Minimum Difference Between Largest And Smallest in Three Moves
sidebar_label: 1509-Minimum Difference Between Largest And Smallest in Three Moves
tags:
  - Leet code
description: "Solution to leetocde 1509"
---

## Problem Statement

You are given an integer array `nums`.

In one move, you can choose one element of `nums` and change it to any value.

Return the minimum difference between the largest and smallest value of `nums` after performing at most three moves.

## Examples

### Example 1

**Input:** `nums = [5,3,2,4]`  
**Output:** `0`  
**Explanation:**

1. Change 2 to 3: `nums` becomes `[5,3,3,4]`.
2. Change 4 to 3: `nums` becomes `[5,3,3,3]`.
3. Change 5 to 3: `nums` becomes `[3,3,3,3]`.  
   After 3 moves, the difference between the minimum and maximum is `3 - 3 = 0`.

### Example 2

**Input:** `nums = [1,5,0,10,14]`  
**Output:** `1`  
**Explanation:**

1. Change 5 to 0: `nums` becomes `[1,0,0,10,14]`.
2. Change 10 to 0: `nums` becomes `[1,0,0,0,14]`.
3. Change 14 to 1: `nums` becomes `[1,0,0,0,1]`.  
   After 3 moves, the difference between the minimum and maximum is `1 - 0 = 1`.

### Example 3

**Input:** `nums = [3,100,20]`  
**Output:** `0`  
**Explanation:**

1. Change 100 to 7: `nums` becomes `[3,7,20]`.
2. Change 20 to 7: `nums` becomes `[3,7,7]`.
3. Change 3 to 7: `nums` becomes `[7,7,7]`.  
   After 3 moves, the difference between the minimum and maximum is `7 - 7 = 0`.

## Constraints

- $1 <= nums.length <= 105$
- $-109 <= nums[i] <= 109$

## Algorithm

1. If the length of `nums` is less than or equal to 4, return 0 because we can change all elements to be the same.
2. Sort the array `nums`.
3. Consider the 4 smallest and 4 largest elements from the sorted array:
   - The potential moves would be:
     - Remove the 3 largest elements and keep the smallest 1.
     - Remove the 2 largest elements and the smallest 1, keeping the next smallest 2.
     - Remove the 1 largest element and the smallest 2, keeping the next smallest 3.
     - Remove the 3 smallest elements and keep the largest 1.
4. Return the minimum difference among these potential moves.

## C++ Code

```cpp
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int minDifference(vector<int>& nums) {
        int n = nums.size();
        if (n <= 4) return 0;

        sort(nums.begin(), nums.end());

        int result = INT_MAX;
        for (int i = 0; i <= 3; ++i) {
            result = min(result, nums[n - 4 + i] - nums[i]);
        }
        return result;
    }
};
```

## Python Code

```python
class Solution:
    def minDifference(self, nums: List[int]) -> int:
        n = len(nums)
        if n <= 4:
            return 0

        nums.sort()

        return min(nums[-4 + i] - nums[i] for i in range(4))
```

## Java Code

```java
import java.util.Arrays;

class Solution {
    public int minDifference(int[] nums) {
        int n = nums.length;
        if (n <= 4) return 0;

        Arrays.sort(nums);

        int result = Integer.MAX_VALUE;
        for (int i = 0; i <= 3; ++i) {
            result = Math.min(result, nums[n - 4 + i] - nums[i]);
        }
        return result;
    }
}
```

## JavaScript Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
  const n = nums.length;
  if (n <= 4) return 0;

  nums.sort((a, b) => a - b);

  let result = Infinity;
  for (let i = 0; i <= 3; ++i) {
    result = Math.min(result, nums[n - 4 + i] - nums[i]);
  }
  return result;
};
```
