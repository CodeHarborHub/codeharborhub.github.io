---
id: single-number
title: Single Number
sidebar_label: 0136 Single Number
tags:
  - Java
  - Python
  - C++
  - XOR
description: "This is a solution to the Single Number problem on LeetCode."
---

## Problem Description

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

### Examples

**Example 1:**

```
Input: nums = [2,2,1]
Output: 1

```

**Example 2:**

Input: nums = [4,1,2,1,2]
Output: 4

**Example 3:**

```
Input: nums = [1]
Output: 1
```

### Constraints

- $1 \leq nums.length \leq 3 * 10^4$
- $-3 \times 10^4 \leq nums[i] \leq 3 \times 10^4$
- Each element in the array appears twice except for one element which appears only once.

---

## Solution for Single Number Problem

### Intuition

When faced with this problem, the first hurdle to overcome is the strict limitations imposed on the solution: linear time complexity and constant space complexity. This means traditional methods of identifying duplicates like hash tables or sorting won't cut it. Instead, we'll need to use a different kind of magic, one rooted in the world of bitwise operations!

### Approach

Our saviour here is the XOR operation. XOR stands for 'exclusive or', and the magic lies in its properties. When a number is XORed with itself, the result is 0. And when a number is XORed with 0, the result is the number itself.

So, if we XOR all the numbers in the array, all the numbers appearing twice will cancel each other out and we'll be left with the single number that appears only once.

#### Code in Different Languages

<Tabs>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@vanAmsen"/>
   ```java
   class Solution {
    public int singleNumber(int[] nums) {
        int result = 0; 
        for (int num : nums) { 
            result ^= num; 
        } 
        return result;                                                
    }
}

`````
</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@vanAmsen"/>

````python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result = 0
        for num in nums:
            result ^= num
        return result

`````

</TabItem>
<TabItem value="C++" label="C++">
<SolutionAuthor name="@vanAmsen"/>
```cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int result = 0; 
        for (int num : nums) { 
            result ^= num; 
        } 
        return result;                                            
    }
};

```
</TabItem>
</Tabs>

#### Complexity Analysis

- Time complexity: $O(n)$, as we're iterating over the array only once.
- Space complexity: $O(1)$, because we're only using a single variable to store the result,        irrespective of the size of the input.

## References

- **LeetCode Problem:** [Single Number](https://leetcode.com/problems/single-number/description/)
- **Solution Link:** [Single NUmber on LeetCode](https://leetcode.com/problems/single-number/solutions/3801367/video-single-number-a-bitwise-magic-trick/)
- **Authors Leetcode Profile:** [vanAmsen](https://leetcode.com/u/vanAmsen/)
```
