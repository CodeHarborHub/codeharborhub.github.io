---
id: difference-between-element-sum-and-digit-sum-of-an-array
title: Difference Between Element Sum and Digit Sum of an Array
sidebar_label: 2535 - Difference Between Element Sum and Digit Sum of an Array
tags:
  - Array
  - Math
  - LeetCode
description: "This is a solution to the Difference Between Element Sum and Digit Sum of an Array problem on LeetCode."
---

## Problem Description

You are given a positive integer array `nums`.

1. The **element sum** is the sum of all the elements in `nums`.
2. The **digit sum** is the sum of all the digits (not necessarily distinct) that appear in `nums`.

Return the absolute difference between the **element sum** and **digit sum** of `nums`.

Note that the absolute difference between two integers `x` and `y` is defined as `|x - y|`.

### Examples

**Example 1:**

```
Input: nums = [1,15,6,3]
Output: 9
Explanation: 
The element sum of nums is 1 + 15 + 6 + 3 = 25.
The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
The absolute difference between the element sum and digit sum is |25 - 16| = 9.

```

**Example 2:**

```
Input: nums = [1,2,3,4]
Output: 0
Explanation:
The element sum of nums is 1 + 2 + 3 + 4 = 10.
The digit sum of nums is 1 + 2 + 3 + 4 = 10.
The absolute difference between the element sum and digit sum is |10 - 10| = 0.

```


### Constraints

- `1 <= nums.length <= 2000`
- `1 <= nums[i] <= 2000`
 

### Approach 


To solve this problem, we follow these steps:

1. **Initialization**: Initialize two variables, `element_sum` and `digit_sum`, to zero.
2. **Element Sum Calculation**: Iterate through the array and add each integer to `element_sum`.
3. **Digit Sum Calculation**: For each integer in the array, repeatedly extract its last digit using the modulo operation, add this digit to `digit_sum`, and remove the last digit by performing integer division by 10.
4. **Compute Absolute Difference**: After processing all integers, compute the absolute difference between `element_sum` and `digit_sum` using `Math.abs()` and return the result.


#### Python3

```python
class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        element_sum = sum(nums)
        digit_sum = sum(int(digit) for num in nums for digit in str(num))
        return abs(element_sum - digit_sum)
```

#### Java

```java
class Solution {
    public int differenceOfSum(int[] nums) {
        int element_sum = 0;
        int digit_sum = 0;
        for(int i=0;i<nums.length;i++){
            element_sum+=nums[i];

            int val = nums[i];
            int x;
            
            while(val>0){
                x = val%10;
                digit_sum +=x;
                val = val/10;
            }
        }
        return Math.abs(element_sum - digit_sum);
    }
}
```

#### C++

```cpp
class Solution {
public:
    int differenceOfSum(vector<int>& nums) {
        int element_sum = 0;
        int digit_sum = 0;
        for (int i = 0; i < nums.size(); i++) {
            element_sum += nums[i];

            int val = nums[i];
            int x;
            
            while (val > 0) {
                x = val % 10;
                digit_sum += x;
                val = val / 10;
            }
        }
        return abs(element_sum - digit_sum);
    }
};

```