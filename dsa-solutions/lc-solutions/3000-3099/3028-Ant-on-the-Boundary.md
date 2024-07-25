---
id: ant-on-the-boundary
title: Ant on the Boundary (LeetCode)
sidebar_label: 3028-AntOnTheBoundary
tags:
  - Array
  - Simulation
  - Boundary Conditions
description: Determine how many times an ant returns to the boundary after reading an array of non-zero integers and moving according to their values.
sidebar_position: 3028
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Ant on the Boundary](https://leetcode.com/problems/ant-on-the-boundary/) | [Ant on the Boundary Solution on LeetCode](https://leetcode.com/problems/ant-on-the-boundary/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

An ant is on a boundary. It sometimes goes left and sometimes right.

You are given an array of non-zero integers `nums`. The ant starts reading `nums` from the first element of it to its end. At each step, it moves according to the value of the current element:

- If `nums[i] < 0`, it moves left by `-nums[i]` units.
- If `nums[i] > 0`, it moves right by `nums[i]` units.

Return the number of times the ant returns to the boundary.

### Notes:
- There is infinite space on both sides of the boundary.
- We check whether the ant is on the boundary only after it has moved `|nums[i]|` units. In other words, if the ant crosses the boundary during its movement, it does not count.

### Example 1
- **Input:** `nums = [2,3,-5]`
- **Output:** `1`
- **Explanation:** 
  - After the first step, the ant is 2 steps to the right of the boundary.
  - After the second step, the ant is 5 steps to the right of the boundary.
  - After the third step, the ant is on the boundary.
  - So the answer is 1.

### Example 2
- **Input:** `nums = [3,2,-3,-4]`
- **Output:** `0`
- **Explanation:** 
  - After the first step, the ant is 3 steps to the right of the boundary.
  - After the second step, the ant is 5 steps to the right of the boundary.
  - After the third step, the ant is 2 steps to the right of the boundary.
  - After the fourth step, the ant is 2 steps to the left of the boundary.
  - The ant never returned to the boundary, so the answer is 0.

### Constraints
- `1 <= nums.length <= 100`
- `-10 <= nums[i] <= 10`
- `nums[i] != 0`

## Approach

To determine how many times the ant returns to the boundary, we can use a simple simulation approach. Here's the approach:

1. Initialize a variable `position` to keep track of the ant's current position relative to the boundary.
2. Initialize a counter `boundary_count` to keep track of the number of times the ant returns to the boundary.
3. Iterate through each element in `nums`:
   - Update the `position` based on the value of the current element.
   - Check if the `position` is zero (i.e., the ant is back at the boundary).
   - If the ant is back at the boundary, increment the `boundary_count`.
4. Return the `boundary_count`.

### Solution Code

#### Python

```python
class Solution:
    def returnToBoundaryCount(self, nums: List[int]) -> int:
        position = 0
        boundary_count = 0
        
        for num in nums:
            position += num
            if position == 0:
                boundary_count += 1
        
        return boundary_count
```

#### C++
```c++
#include <vector>
using namespace std;

class Solution {
public:
    int returnToBoundaryCount(vector<int>& nums) {
        int position = 0;
        int boundary_count = 0;
        
        for (int num : nums) {
            position += num;
            if (position == 0) {
                boundary_count += 1;
            }
        }
        
        return boundary_count;
    }
};

```

#### Java
```java
class Solution {
    public int returnToBoundaryCount(int[] nums) {
        int position = 0;
        int boundary_count = 0;
        
        for (int num : nums) {
            position += num;
            if (position == 0) {
                boundary_count += 1;
            }
        }
        
        return boundary_count;
    }
}

```

### Conclusion
The problem of determining how many times an ant returns to the boundary can be effectively solved 
using a straightforward simulation approach. By keeping track of the ant's position as it moves 
according to the values in the array, and counting each time the position returns to zero, we can 
determine the desired result. The provided solutions in Python, C++, and Java demonstrate this 
approach, ensuring the solution is efficient and easy to understand across different programming 
languages.