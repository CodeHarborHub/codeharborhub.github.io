---
id: maximum-xor-of-two-numbers-in-an-array
title: Maximum XOR of two numbers in an array
sidebar_label: 0421-maximum-xor-of-two-numbers-in-an-array
tags:
  - Array
  - Hash Table
  - Bit Manipulation
  - Trie
description: "This is a solution to the maximum xor of two numbers in an array problem on LeetCode."
---

## Problem Description

Given an integer array `nums`, return the maximum result of `nums[i] XOR nums[j]`, where `0 <= i <= j < n`.

### Examples

**Example 1:**

```
Input: nums = [3,10,5,25,2,8]
Output: 28
Explanation: The maximum result is 5 XOR 25 = 28.
```

**Example 2:**

```
Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
Output: 127
```

### Constraints

- `1 <= nums.length <= 2 * 105`
- `0 <= nums[i] <= 231 - 1`

## Solution for Strong Password Checker

### Approach

XOR, or exclusive OR, is a binary bitwise operation that returns true (1) only when the operands differ. If the bits are the same, the result is 0. If the bits are different, the result is 1.

The goal is to maximise the XOR result between two numbers This is achieved by ensuring for each bit position, the XOR result is maximum hence we want to maximise the number of opposite bits between the numbers.

We use a Trie which allows us to iterate through each bit of the numbers in the array and maximise XOR value by selecting the opposite bit when available hence ensuring the highest possible XOR result.

Step 1:Create a Trie Node Structure. This structure represents a node in the Trie.

- It contains an array (‘links’) to store links to child nodes (0 and 1).
- Provides methods to interact with the child nodes like ‘containsKey’, ‘get’ and ‘put’.

Step 2: Iterate through the given array and insert its bit values into the Trie from left to right.

- For each number, check if the current node has a child node with the current bit. If not, create a new child node with the current bit.
- Move to the child node corresponding to the current bit.

Step 3: Start from the root node. Initialise the maximum XOR values as 0.

Step 4: Iterate through each bit of the number (from left to right). Check if the complement of the current bit exists in the Trie. If so:

- Update the maximum XOR value with the current bit.
- Moves to the child node corresponding to the complement of the current bit.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@tanyagupta01"/>

```cpp
class Solution {
 public:
  int findMaximumXOR(vector<int>& nums) {
    const int maxNum = ranges::max(nums);
    if (maxNum == 0)
      return 0;
    const int maxBit = static_cast<int>(log2(maxNum));
    int ans = 0;
    int prefixMask = 0;  // Grows like: 10000 -> 11000 -> ... -> 11111.

    // If ans is 11100 when i = 2, it means that before we reach the last two
    // bits, 11100 is the maximum XOR we have, and we're going to explore if we
    // can get another two 1s and put them into `ans`.
    for (int i = maxBit; i >= 0; --i) {
      prefixMask |= 1 << i;
      unordered_set<int> prefixes;
      // We only care about the left parts,
      // If i = 2, nums = {1110, 1011, 0111}
      //    -> prefixes = {1100, 1000, 0100}
      for (const int num : nums)
        prefixes.insert(num & prefixMask);
      // If i = 1 and before this iteration, the ans is 10100, it means that we
      // want to grow the ans to 10100 | 1 << 1 = 10110 and we're looking for
      // XOR of two prefixes = candidate.
      const int candidate = ans | 1 << i;
      for (const int prefix : prefixes)
        if (prefixes.count(prefix ^ candidate)) {
          ans = candidate;
          break;
        }
    }

    return ans;
  }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@tanyagupta01"/>

```java
class Solution {
  public int findMaximumXOR(int[] nums) {
    final int maxNum = Arrays.stream(nums).max().getAsInt();
    if (maxNum == 0)
      return 0;
    final int maxBit = (int) (Math.log(maxNum) / Math.log(2));
    int ans = 0;
    int prefixMask = 0; // Grows like: 10000 -> 11000 -> ... -> 11111.

    // If ans is 11100 when i = 2, it means that before we reach the last two
    // bits, 11100 is the maximum XOR we have, and we're going to explore if we
    // can get another two 1s and put them into `ans`.
    for (int i = maxBit; i >= 0; --i) {
      prefixMask |= 1 << i;
      Set<Integer> prefixes = new HashSet<>();
      // We only care about the left parts,
      // If i = 2, nums = {1110, 1011, 0111}
      //    . prefixes = {1100, 1000, 0100}
      for (final int num : nums)
        prefixes.add(num & prefixMask);
      // If i = 1 and before this iteration, the ans is 10100, it means that we
      // want to grow the ans to 10100 | 1 << 1 = 10110 and we're looking for
      // XOR of two prefixes = candidate.
      final int candidate = ans | 1 << i;
      for (final int prefix : prefixes)
        if (prefixes.contains(prefix ^ candidate)) {
          ans = candidate;
          break;
        }
    }

    return ans;
  }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@tanyagupta01"/>

```python
class Solution:
  def findMaximumXOR(self, nums: List[int]) -> int:
    maxNum = max(nums)
    if maxNum == 0:
      return 0
    maxBit = int(math.log2(maxNum))
    ans = 0
    prefixMask = 0  # `prefixMask` grows like: 10000 -> 11000 -> ... -> 11111.

    # If ans is 11100 when i = 2, it means that before we reach the last two
    # bits, 11100 is the maximum XOR we have, and we're going to explore if we
    # can get another two 1s and put them into `ans`.
    for i in range(maxBit, -1, -1):
      prefixMask |= 1 << i
      # We only care about the left parts,
      # If i = 2, nums = [1110, 1011, 0111]
      #    -> prefixes = [1100, 1000, 0100]
      prefixes = set([num & prefixMask for num in nums])
      # If i = 1 and before this iteration, the ans is 10100, it means that we
      # want to grow the ans to 10100 | 1 << 1 = 10110 and we're looking for
      # XOR of two prefixes = candidate.
      candidate = ans | 1 << i
      for prefix in prefixes:
        if prefix ^ candidate in prefixes:
          ans = candidate
          break

    return ans
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: O(nlog(max(nums)))

### Space Complexity: O(N)