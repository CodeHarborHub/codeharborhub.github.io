---
id: total-hamming-distance
title: Total Hamming Distance
sidebar_label: 0477-total-hamming-distance
tags:
- Array
- Math
- Bit Manipulation
description: "This is a solution to the total hamming distance problem on LeetCode."
---

## Problem Description

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given an integer array `nums`, return the sum of Hamming distances between all the pairs of the integers in `nums`.

### Examples

**Example 1:**

```
Input: nums = [4,14,2]
Output: 6
Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
showing the four bits relevant in this case).
The answer will be:
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.

```

**Example 2:**

```
Input: nums = [4,14,4]
Output: 4
```

### Constraints

- `1 <= nums.length <= 104`
- `0 <= nums[i] <= 109`
- The answer for the given input will fit in a 32-bit integer.

## Solution for Matchsticks to Square

1. Initialize ans to 0. This variable will hold the sum of Hamming distances.
2. Use a loop to iterate over each bit position. In this case, we loop from 0 to 30, inclusive, because an integer is 32 bits in size and we assume we're dealing with positive numbers only (no need for the sign bit).
3. Inside this loop, initialize two counters a and b to 0. Counter a will keep track of the number of 1's and b of the number of 0's for the current bit position across all numbers in nums.
4. Inner loop through each number v in nums:
- Shift v right by i bits and perform a bitwise AND with 1 ((v >> i) & 1) to isolate the bit at the current bit position.
-  If the result is 1, increment counter a (since this number contributes a 1 to the current bit position).
- If the result is 0, increment counter b (since this number contributes a 0 to the current bit position).
5. Outside the inner loop but still inside the first loop, multiply a and b and add the result to ans. This is based on the observation that each pair of numbers contributes 1 to the Hamming distance sum for this bit position if one of them has a 1 and the other has a 0. The total contribution from this bit position is therefore the product of the numbers of 1's and 0's.
6. After completing the loops, ans contains the sum of the Hamming distances, and we return this value.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
 public:
  int totalHammingDistance(vector<int>& nums) {
    constexpr int kMaxMask = 1 << 30;
    int ans = 0;

    for (int mask = 1; mask < kMaxMask; mask <<= 1) {
      const int ones =
          ranges::count_if(nums, [mask](int num) { return num & mask; });
      const int zeros = nums.size() - ones;
      ans += ones * zeros;
    }

    return ans;
  }
};


```
</TabItem>
<TabItem value="java" label="Java">

```java
class Solution {
  public int totalHammingDistance(int[] nums) {
    final int kMaxBit = 30;
    int ans = 0;

    for (int i = 0; i < kMaxBit; ++i) {
      final int mask = 1 << i;
      final int ones = (int) Arrays.stream(nums).filter(num -> (num & mask) > 0).count();
      final int zeros = nums.length - ones;
      ans += ones * zeros;
    }

    return ans;
  }
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
class Solution:
  def totalHammingDistance(self, nums: List[int]) -> int:
    kMaxBit = 30
    ans = 0

    for i in range(kMaxBit):
      ones = sum(num & (1 << i) > 0 for num in nums)
      zeros = len(nums) - ones
      ans += ones * zeros

    return ans
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: O(30n)=O(n)

### Space Complexity: O(1)

## References

- **LeetCode Problem**: [Total Hamming Distance](https://leetcode.com/problems/total-hamming-distance/description/)

- **Solution Link**: [Total Hamming Distance](https://leetcode.com/problems/total-hamming-distance/solutions/)
