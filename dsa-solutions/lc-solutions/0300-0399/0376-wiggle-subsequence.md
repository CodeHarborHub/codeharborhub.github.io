---
id: wiggle-subsequence
title: Wiggle Subsequence
sidebar_label: 0376 - Wiggle Subsequence
tags:
  - DP
  - Leet code
description: "Solution to leetocde 376"
---

### Problem Description

You are given an integer array `nums`. A wiggle sequence is a sequence where the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with one element and a sequence with two non-equal elements are trivially wiggle sequences.

For example:

- `[1, 7, 4, 9, 2, 5]` is a wiggle sequence because the differences `(6, -3, 5, -7, 3)` alternate between positive and negative.
- `[1, 4, 7, 2, 5]` is not a wiggle sequence because its first two differences are positive.
- `[1, 7, 4, 5, 5]` is not a wiggle sequence because its last difference is zero.

A subsequence is obtained by deleting some elements (possibly zero) from the original sequence, leaving the remaining elements in their original order.

Given an integer array `nums`, return the length of the longest wiggle subsequence of `nums`.

### Example 1:

- Input: `nums = [1,7,4,9,2,5]`
- Output: `6`
- Explanation: The entire sequence is a wiggle sequence with differences (6, -3, 5, -7, 3).

### Example 2:

- Input: `nums = [1,17,5,10,13,15,10,5,16,8]`
- Output: `7`
- Explanation: One possible subsequence is `[1, 17, 10, 13, 10, 16, 8]` with differences (16, -7, 3, -3, 6, -8).

### Example 3:

- Input: `nums = [1,2,3,4,5,6,7,8,9]`
- Output: `2`
- Explanation: The longest wiggle subsequence is `[1, 2]` or `[9, 8]`.

### Constraints:

- `1 <= nums.length <= 1000`
- `0 <= nums[i] <= 1000`

### Algorithm Explanation

1. **Initialization**:

   - Initialize two variables, `peak` and `valley`, to 1. These will keep track of the lengths of the longest wiggle sequences that end in a peak or a valley, respectively.

2. **Traversal**:

   - Traverse through the list of numbers starting from the second element.
   - If the current number is greater than the previous number, it contributes to a peak. Update `peak` to `valley + 1`.
   - If the current number is less than the previous number, it contributes to a valley. Update `valley` to `peak + 1`.

3. **Result**:
   - The maximum value of `peak` and `valley` will give the length of the longest wiggle subsequence.

### C++ Code

```cpp
class Solution {
public:
    int wiggleMaxLength(vector<int>& nums) {
        int size = nums.size(), peak = 1, valley = 1;
        for(int i = 1; i < size; ++i) {
            if (nums[i] > nums[i - 1])
                peak = valley + 1;
            else if (nums[i] < nums[i - 1])
                valley = peak + 1;
        }
        return max(peak, valley);
    }
};
```

### Python Code

```python
class Solution:
    def wiggleMaxLength(self, nums: List[int]) -> int:
        size = len(nums)
        if size < 2:
            return size

        peak = valley = 1
        for i in range(1, size):
            if nums[i] > nums[i - 1]:
                peak = valley + 1
            elif nums[i] < nums[i - 1]:
                valley = peak + 1

        return max(peak, valley)
```

### Java Code

```java
class Solution {
    public int wiggleMaxLength(int[] nums) {
        int size = nums.length;
        if (size < 2) return size;

        int peak = 1, valley = 1;
        for (int i = 1; i < size; i++) {
            if (nums[i] > nums[i - 1]) {
                peak = valley + 1;
            } else if (nums[i] < nums[i - 1]) {
                valley = peak + 1;
            }
        }
        return Math.max(peak, valley);
    }
}
```

### JavaScript Code

```javascript
var wiggleMaxLength = function (nums) {
  let size = nums.length;
  if (size < 2) return size;

  let peak = 1,
    valley = 1;
  for (let i = 1; i < size; i++) {
    if (nums[i] > nums[i - 1]) {
      peak = valley + 1;
    } else if (nums[i] < nums[i - 1]) {
      valley = peak + 1;
    }
  }
  return Math.max(peak, valley);
};
```
