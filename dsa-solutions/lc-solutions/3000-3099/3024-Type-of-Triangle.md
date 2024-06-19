---
id: type-of-triangle
title: Type of Triangle (LeetCode)
sidebar_label: 3024-TypeOfTriangle
tags:
  - Triangle
  - Array
description: Determine the type of triangle that can be formed by an array of integers representing the sides of the triangle.
sidebar_position: 3024
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Type of Triangle](https://leetcode.com/problems/type-of-triangle/) | [Type of Triangle Solution on LeetCode](https://leetcode.com/problems/type-of-triangle/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.

A triangle is called equilateral if it has all sides of equal length.
A triangle is called isosceles if it has exactly two sides of equal length.
A triangle is called scalene if all its sides are of different lengths.
Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle.

### Example 1

- **Input:** `nums = [3,3,3]`
- **Output:** `"equilateral"`
- **Explanation:** Since all the sides are of equal length, therefore, it will form an equilateral triangle.

### Example 2

- **Input:** `nums = [3,4,5]`
- **Output:** `"scalene"`
- **Explanation:** 
  - `nums[0] + nums[1] = 3 + 4 = 7`, which is greater than `nums[2] = 5`.
  - `nums[0] + nums[2] = 3 + 5 = 8`, which is greater than `nums[1] = 4`.
  - `nums[1] + nums[2] = 4 + 5 = 9`, which is greater than `nums[0] = 3`. 
  Since the sum of the two sides is greater than the third side for all three cases, therefore, it can form a triangle.
  As all the sides are of different lengths, it will form a scalene triangle.

### Constraints

- `nums.length == 3`
- `1 <= nums[i] <= 100`

## Approach

To determine the type of triangle that can be formed by the given sides, we need to:

1. Check if the given sides can form a valid triangle using the triangle inequality theorem.
2. If the sides form a valid triangle, check if the triangle is equilateral, isosceles, or scalene based on the lengths of the sides.

### Solution Code

#### Python

```python
class Solution:
    def triangleType(self, nums: List[int]) -> str:
        a, b, c = sorted(nums)
        
        if a + b <= c:
            return "none"
        if a == b == c:
            return "equilateral"
        if a == b or b == c or a == c:
            return "isosceles"
        
        return "scalene"
```

#### C++
```c++
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    string triangleType(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int a = nums[0], b = nums[1], c = nums[2];
        
        if (a + b <= c) {
            return "none";
        }
        if (a == b && b == c) {
            return "equilateral";
        }
        if (a == b || b == c || a == c) {
            return "isosceles";
        }
        
        return "scalene";
    }
};

```

#### Java
```java
import java.util.Arrays;

class Solution {
    public String triangleType(int[] nums) {
        Arrays.sort(nums);
        int a = nums[0], b = nums[1], c = nums[2];
        
        if (a + b <= c) {
            return "none";
        }
        if (a == b && b == c) {
            return "equilateral";
        }
        if (a == b || b == c || a == c) {
            return "isosceles";
        }
        
        return "scalene";
    }
}

```

### Conclusion
The solutions use a simple sorting approach to determine the type of triangle that can be formed by 
the given sides. This ensures that the problem is solved in a straightforward and efficient manner 
across different programming languages.