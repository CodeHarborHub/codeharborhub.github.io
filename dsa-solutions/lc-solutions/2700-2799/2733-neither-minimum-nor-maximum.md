---
id: neither-minimum-nor-maximum
title: Neither Minimum nor Maximum
sidebar_label: 2703 - Neither Minimum nor Maximum
tags:
  - Array
  - Sorting
description: "This is the solution to neither minimum nor maximum in LeetCode"
---

## Problem Statement

Given an integer array `nums` containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.

Return the selected integer.

### Examples

**Example 1:**

```
Input: nums = [3,2,1,4]
Output: 2
Explanation: In this example, the minimum value is 1 and the maximum value is 4. Therefore, either 2 or 3 can be valid answers.
```

**Example 2:**

```
Input: nums = [1,2]
Output: -1
Explanation: Since there is no number in nums that is neither the maximum nor the minimum, we cannot select a number that satisfies the given condition. Therefore, there is no answer.
```

**Example 3:**

```
Input: nums = [2,1,3]
Output: 2
Explanation: Since 2 is neither the maximum nor the minimum value in nums, it is the only valid answer.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Solution for Neither Minimum Nor Maximum

### Approach

The approach is simple as we need to find the element which is neither minimum nor maximum. We sort the array in ascending order then we iterate the array from index 1 to last index-1 as at index 0 we have the minimum value and at the last index we have the maximum. We store the array elements in an array list and we return the first element in the array list.
If the array size is 2, we have only minimum and maximum values, hence we return -1.

#### Complexity Analysis

- Time Complexity: $O(n \log n)$ due to sorting
- Space Complexity: $O(n)$

## Code in Different Languages

<Tabs>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@ImmidiSivani" />

```java
import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public int findNonMinOrMax(int[] nums) {
        Arrays.sort(nums);
        ArrayList<Integer> arr = new ArrayList<>();
        for (int i = 1; i < nums.length - 1; i++) {
            arr.add(nums[i]);
        }
        if (arr.size() == 0) {
            return -1;
        } else {
            return arr.get(0);
        }
    }
}
```
  </TabItem>
  
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@ImmidiSivani" />

```python
def find_non_min_or_max(nums):
    nums.sort()
    arr = []
    for i in range(1, len(nums) - 1):
        arr.append(nums[i])

    if len(arr) == 0:
        return -1
    else:
        return arr[0]
```
  </TabItem>

  <TabItem value="c++" label="C++">
  <SolutionAuthor name="@ImmidiSivani" />

```c++
#include <algorithm>
#include <vector>

class Solution {
public:
    int findNonMinOrMax(std::vector<int>& nums) {
        std::sort(nums.begin(), nums.end());
        std::vector<int> arr;
        for (int i = 1; i < nums.size() - 1; ++i) {
            arr.push_back(nums[i]);
        }

        if (arr.empty()) {
            return -1;
        } else {
            return arr[0];
        }
    }
};
```
  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Neither Minimum nor Maximum](https://leetcode.com/problems/neither-minimum-nor-maximum/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/neither-minimum-nor-maximum/post-solution/?submissionId=1293729812)
