---
id: split-the-array
title: Split the Array (LeetCode)
sidebar_label: 3046-SplitTheArray
tags:
  - Array
  - Sorting
  - Greedy
description: Determine if it's possible to split an array into two parts with distinct elements.
sidebar_position: 3046
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Split the Array](https://leetcode.com/problems/split-the-array/) | [Split the Array Solution on LeetCode](https://leetcode.com/problems/split-the-array/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

You are given an integer array `nums` of even length. You have to split the array into two parts `nums1` and `nums2` such that:

- `nums1.length == nums2.length == nums.length / 2`.
- `nums1` should contain distinct elements.
- `nums2` should also contain distinct elements.

Return `true` if it is possible to split the array, and `false` otherwise.

### Example 1

- **Input:** `nums = [1,1,2,2,3,4]`
- **Output:** `true`
- **Explanation:** One of the possible ways to split `nums` is `nums1 = [1,2,3]` and `nums2 = [1,2,4]`.

### Example 2

- **Input:** `nums = [1,1,1,1]`
- **Output:** `false`
- **Explanation:** The only possible way to split `nums` is `nums1 = [1,1]` and `nums2 = [1,1]`. Both `nums1` and `nums2` do not contain distinct elements. Therefore, we return `false`.

### Constraints

- `1 <= nums.length <= 100`
- `nums.length % 2 == 0`
- `1 <= nums[i] <= 100`

## Approach

To determine if it is possible to split the array into two parts where each part contains distinct elements, we can use the following approach:

1. **Count Frequencies**:
   - Use a dictionary or array to count the frequency of each element in the input array.

2. **Check Feasibility**:
   - If any element appears more than `nums.length / 2` times, it is impossible to split the array as required.
   - Otherwise, we can always split the array by distributing the elements between `nums1` and `nums2`.

### Solution Code

#### Python

```python
from collections import Counter

class Solution:
    def splitArray(self, nums):
        n = len(nums) // 2
        freq = Counter(nums)
        
        for count in freq.values():
            if count > n:
                return False
        
        return True
```

#### C++
```c++
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    bool splitArray(vector<int>& nums) {
        int n = nums.size() / 2;
        unordered_map<int, int> freq;
        
        for (int num : nums) {
            freq[num]++;
        }
        
        for (const auto& [num, count] : freq) {
            if (count > n) {
                return false;
            }
        }
        
        return true;
    }
};

```

#### Java
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean splitArray(int[] nums) {
        int n = nums.length / 2;
        Map<Integer, Integer> freq = new HashMap<>();
        
        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }
        
        for (int count : freq.values()) {
            if (count > n) {
                return false;
            }
        }
        
        return true;
    }
}

```

### Conclusion
The provided solutions use a frequency counter to determine if any element appears more than `nums.
length / 2 times`. If such an element exists, it is impossible to split the array into two parts 
with distinct elements. Otherwise, it is always possible to perform the split as required.