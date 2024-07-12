---
id: n-repeated-element-in-size-2n-array
title: N-Repeated Element in Size 2N Array
sidebar_label: 961-N-Repeated-Element-in-Size-2N-Array
tags:
  - Array
  - Hash Table
  - Counting
description: "Given an array of size 2N, find the element that is repeated N times."
---

## Problem

You are given an integer array `nums` with a length of `2n`, where `n` is an integer greater than 1. The array contains `n + 1` unique elements, and exactly one of these elements is repeated `n` times.

Return the element that is repeated `n` times.

### Examples

**Example 1:**

**Input:** `nums = [1,2,3,3]`
**Output:** `3`

**Example 2:**

**Input:** `nums = [2,1,2,5,3,2]`
**Output:** `2`

**Example 3:**

**Input:** `nums = [5,1,5,2,5,3,5,4]`
**Output:** `5`

### Constraints

- `2 <= n <= 5000`
- `nums.length == 2 * n`
- `0 <= nums[i] <= 10^4`
- `nums` contains `n + 1` unique elements and one of them is repeated exactly `n` times.

---

## Approach

To solve this problem, we can use a hash table (dictionary) to count the occurrences of each element. The element that appears `n` times is the one we need to return.

### Steps:

1. Initialize an empty dictionary to count the frequency of each element.
2. Iterate through the array and update the count of each element in the dictionary.
3. Check if the count of any element reaches `n` and return that element.

### Solution

#### Java

```java
class Solution {
    public int repeatedNTimes(int[] nums) {
        Map<Integer, Integer> countMap = new HashMap<>();
        for (int num : nums) {
            countMap.put(num, countMap.getOrDefault(num, 0) + 1);
            if (countMap.get(num) == nums.length / 2) {
                return num;
            }
        }
        return -1; // Should never reach here
    }
}
```

#### C++

```cpp
class Solution {
public:
    int repeatedNTimes(vector<int>& nums) {
        unordered_map<int, int> countMap;
        int n = nums.size() / 2;
        for (int num : nums) {
            countMap[num]++;
            if (countMap[num] == n) {
                return num;
            }
        }
        return -1; // Should never reach here
    }
};
```

#### Python

```python
class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        count = {}
        n = len(nums) // 2
        for num in nums:
            count[num] = count.get(num, 0) + 1
            if count[num] == n:
                return num
        return -1  # Should never reach here
```

### Complexity Analysis

**Time Complexity:** O(n)

> Reason: We iterate through the array once, and the operations we perform (insertion and lookup in a dictionary) are O(1) on average.

**Space Complexity:** O(n)

> Reason: We use a dictionary to store the frequency of each element, which in the worst case can contain `n + 1` unique elements.

### References

**LeetCode Problem:** [N-Repeated Element in Size 2N Array](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/)
