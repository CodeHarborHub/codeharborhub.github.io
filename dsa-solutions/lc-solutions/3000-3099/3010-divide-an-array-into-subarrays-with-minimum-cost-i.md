---
id: divide-an-array-into-subarrays-with-minimum-cost-i
title: Divide an Array Into Subarrays With Minimum Cost I
sidebar_label: 3010 -Divide an Array Into Subarrays With Minimum Cost I
tags:
  - Array
  - Sorting
  - Enumeration
description: "This is a solution to the Divide an Array Into Subarrays With Minimum Cost I problem on LeetCode."
---

## Problem Description

You are given an array of integers nums of length n.

The cost of an array is the value of its first element. For example, the cost of [1,2,3] is 1 while the cost of [3,4,1] is 3.

You need to divide nums into 3 disjoint contiguous subarrays.

Return the minimum possible sum of the cost of these subarrays.

### Examples

**Example 1:**

```
Input: nums = [1,2,3,12]
Output: 6
Explanation: The best possible way to form 3 subarrays is: [1], [2], and [3,12] at a total cost of 1 + 2 + 3 = 6.
The other possible ways to form 3 subarrays are:
- [1], [2,3], and [12] at a total cost of 1 + 2 + 12 = 15.
- [1,2], [3], and [12] at a total cost of 1 + 3 + 12 = 16.

```

**Example 2:**

```
Input: nums = [5,4,3]
Output: 12
Explanation: The best possible way to form 3 subarrays is: [5], [4], and [3] at a total cost of 5 + 4 + 3 = 12.
It can be shown that 12 is the minimum cost achievable.

```

**Example 3:**

```
Input: nums = [10,3,1,1]
Output: 12
Explanation: The best possible way to form 3 subarrays is: [10,3], [1], and [1] at a total cost of 10 + 1 + 1 = 12.
It can be shown that 12 is the minimum cost achievable.

```

### Constraints

- `3 <= n <= 50`
- `1 <= nums[i] <= 50`

## Solution For the Problem Divide an Array Into Subarrays With Minimum Cost I

### Intuition

cost = nums[0] + smallest + 2nd smallest

Explanation
You have to divide array in 3 parts think of making 2 slice/cuts in array. No matter how you cut the array, first part of array will always come, cost of 1st part will be nums[0] and it will always be added. So nums[0]is fixed.
Now if you make other 2 cuts in the 'remaining array' at smallest element and 2nd smallest element then total cost will be:
cost = nums[0] + smallest ele + 2nd smallest ele

example
[1 , 2 , 3 , 4 , 5 , 6 ,7 , 8]
1 is fixed
In remaining array smallest is 2 and next smallest is 3
[1]
[2]
[3 , 4 , 5 , 6 ,7 , 8]

### Approach

Just iterate array from i=1 to end and find smallest and 2nd smallest elements and store them in a and b.

return nums[0]+a+b.

### Solution Code

#### Python

```py
class Solution(object):
    def minimumCost(self, nums):
        sum = nums[0]
        nums = nums[1:]
        nums.sort()
        return sum + nums[0] + nums[1]

```

#### Java

```java

class Solution {
    public int minimumCost(int[] nums) {
        int first = Integer.MAX_VALUE, second = Integer.MAX_VALUE;

        for (int x = 1; x < nums.length; x++) {
            int curr = nums[x];

            if (curr < first) {
                second = first;
                first = curr;
                continue;
            }
            if (curr < second) {
                second = curr;
            }
        }
        return nums[0] + first + second;
    }
}

```

#### C++

```cpp
class Solution {
public:
    int minimumCost(vector<int>& nums) {
        int x = nums[0];
        int a = nums[1] ,b = nums[2];
        for(int i = 2;i<nums.size();i++){
            if(a>nums[i]){
                b = a;
                a = nums[i];
            }
            else if(b>nums[i]) b = nums[i];

        }
        return x+a+b;
    }
};
```

#### Complexity Analysis

- Time complexity:  $O(n)$ We only traverse through the array once

- Space complexity: $O(1)$ Since we just have 2 pointers
