---
id: count-number-of-pairs-with-absolute-difference-k
title: Count Number of Pairs With Absolute Difference K
sidebar_label: 2006 Count Number of Pairs With Absolute Difference K
tags:
  - Array
  - LeetCode
description: "This is a solution to the Count Number of Pairs With Absolute Difference K problem on LeetCode."
sidebar_position: 2006
---

## Problem Description

You are given an integer array `nums` and an integer `k`. Return the number of pairs `(i, j)` where `i < j` such that `|nums[i] - nums[j]| == k`.

The value of `|x|` is defined as:
- `x` if `x >= 0`
- `-x` if `x < 0`

### Examples

**Example 1:**
```
Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- (0,1)
- (0,2)
- (1,3)
- (2,3)
```


**Example 2:**
```
Input: nums = [1,3], k = 2
Output: 0
Explanation: There are no pairs with an absolute difference of 2.
```

**Example 3:**
```
Input: nums = [3,2,1,5,4], k = 2
Output: 3
Explanation: The pairs with an absolute difference of 2 are:
- [3,2,1,5,4]
- [3,2,1,5,4]
- [3,2,1,5,4]
```
## Constraints

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 100`
- `1 <= k <= 99`

## Approach

To solve this problem efficiently:
1. Use a hash map (`freq`) to count occurrences of each number in `nums`.
2. Iterate through each number `num` in `nums`:
   - Check if `num - k` exists in `freq`:
     - If yes, add `freq[num - k]` to the count of valid pairs.
   - Check if `num + k` exists in `freq`:
     - If yes (and `k` is not zero to avoid double counting), add `freq[num + k]` to the count.
3. Update `freq[num]` after processing each number to ensure correct counts for subsequent pairs.

This approach ensures that we count pairs in linear time `O(n)`, where `n` is the length of `nums`, due to the efficient lookups and updates in the hash map.

#### C++

```cpp

class Solution {
public:
    int countPairs(vector<int>& nums, int k) {
        unordered_map<int, int> freq;
        int count = 0;
        
        for (int num : nums) {
            if (freq.count(num - k)) {
                count += freq[num - k];
            }
            if (freq.count(num + k) && k != 0) { // Avoid double counting when k == 0
                count += freq[num + k];
            }
            freq[num]++;
        }
        
        return count;
    }
};
```

#### Python 

```python
def countPairs(nums, k):
    freq = {}
    count = 0
    
    for num in nums:
        if num - k in freq:
            count += freq[num - k]
        if num + k in freq and k != 0:  # Avoid double counting when k == 0
            count += freq[num + k]
        
        if num in freq:
            freq[num] += 1
        else:
            freq[num] = 1
    
    return count
```
