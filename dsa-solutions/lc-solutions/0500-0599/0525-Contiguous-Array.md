---
id: contiguous-array
title: Contiguous Array
sidebar_label: 0525-Contiguous-Array
tags:
- Array
- Hash Table
description: "Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1."
---

## Problem

Given a binary array `nums`, return the maximum length of a contiguous subarray with an equal number of `0` and `1`.

### Examples

**Example 1:**

**Input:** `nums = [0,1]`  
**Output:** `2`  
**Explanation:** [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

**Example 2:**

**Input:** `nums = [0,1,0]`  
**Output:** `2`  
**Explanation:** [0, 1] (or [1, 0]) is the longest contiguous subarray with an equal number of 0 and 1.

### Constraints

- `1 <= nums.length <= 10^5`
- `nums[i]` is either `0` or `1`.

---

## Approach

To solve this problem, we can use a hash map to keep track of the cumulative sum of the transformed array where `0` is replaced by `-1` and `1` is kept as `1`. The idea is to find the subarray with a cumulative sum of zero.

### Steps:

1. Initialize a hash map to store the cumulative sum and its corresponding index.
2. Initialize `cumulative_sum` to `0` and `max_length` to `0`.
3. Traverse the array:
   - Replace `0` with `-1`.
   - Update the `cumulative_sum`.
   - If the `cumulative_sum` is `0`, update `max_length` to the current index + 1.
   - If the `cumulative_sum` has been seen before, calculate the subarray length and update `max_length` if it's larger than the current `max_length`.
   - If the `cumulative_sum` has not been seen before, store it in the hash map with the current index.
4. Return `max_length`.

### Solution

#### Java

```java
import java.util.HashMap;

class Solution {
    public int findMaxLength(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, -1);
        int maxLength = 0, cumulativeSum = 0;

        for (int i = 0; i < nums.length; i++) {
            cumulativeSum += (nums[i] == 0) ? -1 : 1;
            if (map.containsKey(cumulativeSum)) {
                maxLength = Math.max(maxLength, i - map.get(cumulativeSum));
            } else {
                map.put(cumulativeSum, i);
            }
        }

        return maxLength;
    }
}
```
#### C++

```cpp
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        unordered_map<int, int> map;
        map[0] = -1;
        int maxLength = 0, cumulativeSum = 0;

        for (int i = 0; i < nums.size(); i++) {
            cumulativeSum += (nums[i] == 0) ? -1 : 1;
            if (map.find(cumulativeSum) != map.end()) {
                maxLength = max(maxLength, i - map[cumulativeSum]);
            } else {
                map[cumulativeSum] = i;
            }
        }

        return maxLength;
    }
};
```
#### Python

```python
class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        count_map = {0: -1}
        max_length = 0
        cumulative_sum = 0

        for i, num in enumerate(nums):
            cumulative_sum += -1 if num == 0 else 1
            if cumulative_sum in count_map:
                max_length = max(max_length, i - count_map[cumulative_sum])
            else:
                count_map[cumulative_sum] = i

        return max_length
```
### Complexity Analysis
**Time Complexity:** O(n)
>Reason: We traverse the array once, and each lookup or insertion operation in the hash map is O(1) on average.

**Space Complexity:** O(n)
>Reason: In the worst case, we may store up to n entries in the hash map.

### References
**LeetCode Problem:** Contiguous Array