---
id: sort-array-by-parity
title: Sort Array By Parity
sidebar_label: 0905 - Sort Array By Parity
tags:
  - easy
  - Arrays
  - Algorithms
---

## Problem Description

Given an integer array `nums`, move all the even integers to the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

## Examples

**Example 1:**

```
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
```

**Example 2:**

```
Input: nums = [0]
Output: [0]
```

## Constraints

```
1 <= nums.length <= 5000
0 <= nums[i] <= 5000
```

## Solution

### Python

```python
class Solution:
    def sortArrayByParity(self, nums):
        return [x for x in nums if x % 2 == 0] + [x for x in nums if x % 2 != 0]

# Example usage:
solution = Solution()
print(solution.sortArrayByParity([3,1,2,4]))  # Output: [2,4,3,1]
```

### C++

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    std::vector<int> sortArrayByParity(std::vector<int>& nums) {
        std::vector<int> result;
        for (int num : nums) {
            if (num % 2 == 0) {
                result.push_back(num);
            }
        }
        for (int num : nums) {
            if (num % 2 != 0) {
                result.push_back(num);
            }
        }
        return result;
    }
};

// Example usage:
int main() {
    Solution solution;
    std::vector<int> nums = {3, 1, 2, 4};
    std::vector<int> result = solution.sortArrayByParity(nums);  // Output: [2, 4, 3, 1]
    return 0;
}
```

### Java

```java
import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] sortArrayByParity(int[] nums) {
        List<Integer> result = new ArrayList<>();
        for (int num : nums) {
            if (num % 2 == 0) {
                result.add(num);
            }
        }
        for (int num : nums) {
            if (num % 2 != 0) {
                result.add(num);
            }
        }
        return result.stream().mapToInt(i -> i).toArray();
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums = {3, 1, 2, 4};
        int[] result = solution.sortArrayByParity(nums);  // Output: [2, 4, 3, 1]
        for (int num : result) {
            System.out.print(num + " ");
        }
    }
}
```

### JavaScript

```javascript
var sortArrayByParity = function (nums) {
  let result = [];
  for (let num of nums) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }
  for (let num of nums) {
    if (num % 2 !== 0) {
      result.push(num);
    }
  }
  return result;
};

// Example usage:
console.log(sortArrayByParity([3, 1, 2, 4])); // Output: [2, 4, 3, 1]
```
