---
id: 41FirstMissingPositive
title: First Missing Positive (LeetCode)
sidebar_label: 0041-First Missing Positive
tags:
  - Array
  - Hash Table
description: Find the smallest missing positive integer.
sidebar_position: 41
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [First Missing Positive](https://leetcode.com/problems/first-missing-positive/description/) | [First Missing Positive Solution on LeetCode](https://leetcode.com/problems/first-missing-positive/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |


## Problem Description

Given an unsorted integer array `nums`, return the smallest missing positive integer.

You must implement an algorithm that runs in `O(n)` time and uses constant extra space.

### Example 1

- **Input:** `nums = [1,2,0]`
- **Output:** `3`
- **Explanation:** The smallest missing positive integer is `3`.

### Example 2

- **Input:** `nums = [3,4,-1,1]`
- **Output:** `2`
- **Explanation:** The smallest missing positive integer is `2`.

### Example 3

- **Input:** `nums = [7,8,9,11,12]`
- **Output:** `1`
- **Explanation:** The smallest missing positive integer is `1`.

### Constraints

- `1 <= nums.length <= 10^5`
- `-2^31 <= nums[i] <= 2^31 - 1`

## Approach

To solve the problem, we can use the following approach:

1. **Mark Elements Out of Range**:
   - Iterate through the array and mark elements that are out of the range `[1, n]` by setting them to a number greater than `n`.
   
2. **Use Indices as Markers**:
   - Use the indices of the array to mark the presence of numbers by negating the value at the corresponding index.

3. **Identify the Missing Positive**:
   - Iterate through the array again to find the first positive value, which indicates the missing positive integer.

### Solution Code

#### Python

```python
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        n = len(nums)

        for i in range(n):
            if nums[i] <= 0 or nums[i] > n:
                nums[i] = n + 1

        for i in range(n):
            num = abs(nums[i])
            if num <= n:
                nums[num - 1] = -abs(nums[num - 1])

        for i in range(n):
            if nums[i] > 0:
                return i + 1

        return n + 1
```

#### Java

```java
class Solution {
    public int firstMissingPositive(int[] nums) {
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            if (nums[i] <= 0 || nums[i] > n) {
                nums[i] = n + 1;
            }
        }

        for (int i = 0; i < n; i++) {
            int num = Math.abs(nums[i]);
            if (num <= n) {
                nums[num - 1] = -Math.abs(nums[num - 1]);
            }
        }

        for (int i = 0; i < n; i++) {
            if (nums[i] > 0) {
                return i + 1;
            }
        }

        return n + 1;
    }
}
```

#### C++

```c++
#include <vector>
#include <cmath>

using namespace std;

class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        int n = nums.size();

        for (int i = 0; i < n; i++) {
            if (nums[i] <= 0 || nums[i] > n) {
                nums[i] = n + 1;
            }
        }

        for (int i = 0; i < n; i++) {
            int num = abs(nums[i]);
            if (num <= n) {
                nums[num - 1] = -abs(nums[num - 1]);
            }
        }

        for (int i = 0; i < n; i++) {
            if (nums[i] > 0) {
                return i + 1;
            }
        }

        return n + 1;
    }
};
```

### Conclusion:
This approach ensures that the smallest missing positive integer is found efficiently, using constant extra space.