---
id: number-of-pairs-of-strings-with-concatenation-equal-to-target
title: Number of Pairs of Strings With Concatenation Equal to Target
sidebar_label: 2023 Number of Pairs of Strings With Concatenation Equal to Target
tags:
  - Array
  - String
  - LeetCode
description: "This is a solution to the Number of Pairs of Strings With Concatenation Equal to Target problem on LeetCode."
sidebar_position: 2023
---

## Problem Description

Given an array of digit strings `nums` and a digit string `target`, return the number of pairs of indices `(i, j)` (where `i != j`) such that the concatenation of `nums[i] + nums[j]` equals `target`.

### Examples

**Example 1:**

```
Input: nums = ["777","7","77","77"], target = "7777"
Output: 4
Explanation: Valid pairs are:

(0, 1): "777" + "7"
(1, 0): "7" + "777"
(2, 3): "77" + "77"
(3, 2): "77" + "77"
```

**Example 2:**
```
Input: nums = ["123","4","12","34"], target = "1234"
Output: 2
Explanation: Valid pairs are:

(0, 1): "123" + "4"
(2, 3): "12" + "34"
```

**Example 3:**

```
Input: nums = ["1","1","1"], target = "11"
Output: 6
Explanation: Valid pairs are:

(0, 1): "1" + "1"
(1, 0): "1" + "1"
(0, 2): "1" + "1"
(2, 0): "1" + "1"
(1, 2): "1" + "1"
(2, 1): "1" + "1"
```


### Constraints

- `2 <= nums.length <= 100`
- `1 <= nums[i].length <= 100`
- `2 <= target.length <= 100`
- `nums[i]` and `target` consist of digits.
- `nums[i]` and `target` do not have leading zeros.

### Approach

To solve this problem:
1. Initialize a counter `count` to keep track of the number of valid pairs.
2. Use nested loops to iterate through all pairs `(i, j)` such that `i != j`.
3. For each pair, check if the concatenation of `nums[i]` and `nums[j]` equals `target`.
   - If true, increment the counter `count`.
4. Return the counter `count` as the result.

This approach ensures that we check all possible pairs in the array, resulting in a time complexity of `O(n^2)` where `n` is the length of the `nums` array.

#### C++ Solution

```cpp
class Solution {
public:
    int numOfPairs(vector<string>& nums, string target) {
        int count = 0;
        
        for (int i = 0; i < nums.size(); ++i) {
            for (int j = 0; j < nums.size(); ++j) {
                if (i != j && nums[i] + nums[j] == target) {
                    count++;
                }
            }
        }
        
        return count;
    }
};
```