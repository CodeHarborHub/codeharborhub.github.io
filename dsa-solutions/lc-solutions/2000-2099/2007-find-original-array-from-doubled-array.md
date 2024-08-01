---
id: find-original-array-from-doubled-array
title: Find Original Array From Doubled Array
sidebar_label: 2007 Find Original Array From Doubled Array
tags:
  - Array
  - Hash Table
  - Sorting
  - LeetCode
description: "This is a solution to the Find Original Array From Doubled Array problem on LeetCode."
sidebar_position: 2007
---

## Problem Description

An integer array `original` is transformed into a doubled array `changed` by appending twice the value of every element in `original`, and then randomly shuffling the resulting array.

Given an array `changed`, return `original` if `changed` is a doubled array. If `changed` is not a doubled array, return an empty array. The elements in `original` may be returned in any order.

## Examples

**Example 1:**
```
Input: changed = [1,3,4,2,6,8]
Output: [1,3,4]
Explanation: One possible original array could be [1,3,4]:

Twice the value of 1 is 1 * 2 = 2.
Twice the value of 3 is 3 * 2 = 6.
Twice the value of 4 is 4 * 2 = 8.
Other original arrays could be [4,3,1] or [3,1,4].

```

**Example 2:**
```
Input: changed = [6,3,0,1]
Output: []
Explanation: changed is not a doubled array.
```

**Example 3:**

```
Input: changed = [1]
Output: []
Explanation: changed is not a doubled array.
```

## Constraints

- `1 <= changed.length <= 10^5`
- `0 <= changed[i] <= 10^5`

## Approach

To solve this problem efficiently:
1. Use a hash map (`freq`) to count occurrences of each number in `changed`.
2. Sort `changed` to process elements in increasing order.
3. Iterate through each number `num` in sorted `changed`:
   - Check if `freq[num]` is greater than `freq[2 * num]`:
     - If yes, return an empty array since `changed` cannot be a doubled array.
   - Decrease `freq[num]` and `freq[2 * num]` accordingly.
4. After iterating through all elements, construct and return the original array from `freq`.

This approach ensures correctness by leveraging sorting and counting with a hash map to validate if `changed` can indeed represent a doubled array of some original array `original`.

#### C++ Solution

```cpp
class Solution {
public:
    vector<int> findOriginalArray(vector<int>& changed) {
        unordered_map<int, int> freq;
        vector<int> original;
        
        for (int num : changed) {
            freq[num]++;
        }
        
        sort(changed.begin(), changed.end());
        
        for (int num : changed) {
            if (freq[num] > freq[2 * num]) {
                return {};
            }
            for (int i = 0; i < freq[num]; ++i) {
                original.push_back(num);
                freq[2 * num]--;
            }
            freq[num] = 0;
        }
        
        return original;
    }
};
```