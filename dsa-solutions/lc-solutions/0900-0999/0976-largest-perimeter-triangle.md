---
id: Largest-Perimeter-Triangle
title: Largest Perimeter Triangle
sidebar_label: 0976 - Largest Perimeter Triangle
tags:
  - Array
  - easy
  - Math
  - Greedy
  - Sorting
---

## Problem Description

Given an integer array `nums`, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

### Examples

**Example 1:**

```
Input: nums = [2,1,2]
Output: 5
Explanation: You can form a triangle with three side lengths: 1, 2, and 2.
```

**Example 2:**

```
Input: nums = [1,2,1,10]
Output: 0
Explanation:
You cannot use the side lengths 1, 1, and 2 to form a triangle.
You cannot use the side lengths 1, 1, and 10 to form a triangle.
You cannot use the side lengths 1, 2, and 10 to form a triangle.
As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.
```

### Constraints

```
3 <= nums.length <= 10^4
1 <= nums[i] <= 10^6
```

## Solution

### Python

```python
def largestPerimeter(nums):
    nums.sort(reverse=True)
    for i in range(len(nums) - 2):
        if nums[i] < nums[i + 1] + nums[i + 2]:
            return nums[i] + nums[i + 1] + nums[i + 2]
    return 0

# Example usage:
print(largestPerimeter([2, 1, 2]))  # Output: 5
print(largestPerimeter([1, 2, 1, 10]))  # Output: 0
```

### C++

```cpp
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int largestPerimeter(vector<int>& nums) {
        sort(nums.rbegin(), nums.rend());
        for (int i = 0; i < nums.size() - 2; ++i) {
            if (nums[i] < nums[i + 1] + nums[i + 2]) {
                return nums[i] + nums[i + 1] + nums[i + 2];
            }
        }
        return 0;
    }
};

// Example usage:
// Solution sol;
// vector<int> nums = {2, 1, 2};
// cout << sol.largestPerimeter(nums);  // Output: 5
// nums = {1, 2, 1, 10};
// cout << sol.largestPerimeter(nums);  // Output: 0
```

### Java

```java
import java.util.Arrays;

class Solution {
    public int largestPerimeter(int[] nums) {
        Arrays.sort(nums);
        for (int i = nums.length - 3; i >= 0; --i) {
            if (nums[i] + nums[i + 1] > nums[i + 2]) {
                return nums[i] + nums[i + 1] + nums[i + 2];
            }
        }
        return 0;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] nums1 = {2, 1, 2};
        System.out.println(sol.largestPerimeter(nums1));  // Output: 5
        int[] nums2 = {1, 2, 1, 10};
        System.out.println(sol.largestPerimeter(nums2));  // Output: 0
    }
}
```

### JavaScript

```javascript
var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2]) {
      return nums[i] + nums[i + 1] + nums[i + 2];
    }
  }
  return 0;
};

// Example usage:
console.log(largestPerimeter([2, 1, 2])); // Output: 5
console.log(largestPerimeter([1, 2, 1, 10])); // Output: 0
```
