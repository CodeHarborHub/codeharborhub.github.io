---
id: contains-duplicate-III
title: Contains Dublicate -III
sidebar_label: 0220- Contains Dublicate III
tags:
  - Array
  - Sorting
  - Bucket sort
  - Sliding Window
description: This is the solution of question H-Index II on leetcode
sidebar_position: 0220
---

## Problem Description

You are given an integer array nums and two integers indexDiff and valueDiff.

Find a pair of indices` (i, j) `such that:

`i != j`,
`abs(i - j) <= indexDiff.`
`abs(nums[i] - nums[j]) <= valueDiff`, and
Return `true` if such pair exists or `false` otherwise.

### Example 1

```
Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true

Explanation:  We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
```

### Example 2

```
Input:  nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
Output: false

Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.
```

### Constraints

- `2 <= nums.length <= 105`
- `109 <= nums[i] <= 109`
- `1 <= indexDiff <= nums.length`
- `0 <= valueDiff <= 109`

## Approach
1. **Initialize a Set:**
   - Use a `set<int>` to maintain a sliding window of size \( k \).

2. **Iterate through Array:**
   - For each element in `nums`:
     - If index \( i \) exceeds \( k \), remove the element `nums[i - k - 1]` from the set to maintain the window size.
     - Use `window.lower_bound(nums[i] - z)` to find the smallest number in the set greater than or equal to `nums[i] - z`.
     - Check if this number is within the range \([nums[i] - z, nums[i] + z]\). If so, return `true`.
     - Insert the current number `nums[i]` into the set.

3. **Return False if No Pair Found:**
   - If the loop completes without finding such a pair, return `false`.




### Solution Code

#### C++

```c++
class Solution {
public:
    bool containsNearbyAlmostDuplicate(vector<int>& nums, int k, int z) {
        set<int> window;
        for (int i = 0; i < nums.size(); i++) {
            if (i > k) window.erase(nums[i-k-1]);
            auto it = window.lower_bound( nums[i] - z);
            if (it != window.end() && *it <= ( nums[i] + z))
                return true;
            window.insert(nums[i]);
        }
        return false;
    }
};
```

#### Python
```python
from sortedcontainers import SortedList

class Solution:
    def containsNearbyAlmostDuplicate(self, nums, k, t):
        SList = SortedList()
        for i in range(len(nums)):
            if i > k: SList.remove(nums[i-k-1])   
            pos1 = SortedList.bisect_left(SList, nums[i] - t)
            pos2 = SortedList.bisect_right(SList, nums[i] + t)
            
            if pos1 != pos2 and pos1 != len(SList): return True
            
            SList.add(nums[i])
        
        return False       
```

#### Conclusion
### Time Complexity:
- O(n log k), where \( n \) is the number of elements in `nums` and \( k \) is the sliding window size.

### Space Complexity:
- O(k) for the `set` containing at most \( k \) elements.
