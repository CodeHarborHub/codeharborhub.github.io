---
id: Sort-Array-by-Parity-II
title: Sort Array by Parity II
sidebar_label: 0922 - Sort Array by Parity II
tags:
  - medium
  - Arrays
  - Sorting
  - Two Pointers
---

## Problem Description

Given an array of integers `nums`, half of the integers in `nums` are odd, and the other half are even.

Sort the array so that whenever `nums[i]` is odd, `i` is odd, and whenever `nums[i]` is even, `i` is even.

Return any answer array that satisfies this condition.

## Examples

**Example 1:**

```
Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
```

**Example 2:**

```
Input: nums = [2,3]
Output: [2,3]
```

## Constraints

```
2 <= nums.length <= 2 * 10^4
nums.length is even.
Half of the integers in nums are even.
0 <= nums[i] <= 1000
```

## Solution

### Python

```python
class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        even_index, odd_index = 0, 1
        while even_index < len(nums) and odd_index < len(nums):
            if nums[even_index] % 2 == 0:
                even_index += 2
            elif nums[odd_index] % 2 == 1:
                odd_index += 2
            else:
                nums[even_index], nums[odd_index] = nums[odd_index], nums[even_index]
                even_index += 2
                odd_index += 2
        return nums

# Example usage:
solution = Solution()
print(solution.sortArrayByParityII([4,2,5,7]))  # Output: [4,5,2,7]
```

### C++

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> sortArrayByParityII(vector<int>& nums) {
        int even_index = 0, odd_index = 1;
        while (even_index < nums.size() && odd_index < nums.size()) {
            if (nums[even_index] % 2 == 0) {
                even_index += 2;
            } else if (nums[odd_index] % 2 == 1) {
                odd_index += 2;
            } else {
                swap(nums[even_index], nums[odd_index]);
                even_index += 2;
                odd_index += 2;
            }
        }
        return nums;
    }
};

// Example usage:
int main() {
    Solution solution;
    vector<int> nums = {4, 2, 5, 7};
    vector<int> result = solution.sortArrayByParityII(nums);  // Output: [4, 5, 2, 7]
    for (int num : result) {
        cout << num << " ";
    }
    return 0;
}
```

### Java

```java
class Solution {
    public int[] sortArrayByParityII(int[] nums) {
        int evenIndex = 0, oddIndex = 1;
        while (evenIndex < nums.length && oddIndex < nums.length) {
            if (nums[evenIndex] % 2 == 0) {
                evenIndex += 2;
            } else if (nums[oddIndex] % 2 == 1) {
                oddIndex += 2;
            } else {
                int temp = nums[evenIndex];
                nums[evenIndex] = nums[oddIndex];
                nums[oddIndex] = temp;
                evenIndex += 2;
                oddIndex += 2;
            }
        }
        return nums;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums = {4, 2, 5, 7};
        int[] result = solution.sortArrayByParityII(nums);  // Output: [4, 5, 2, 7]
        for (int num : result) {
            System.out.print(num + " ");
        }
    }
}
```

### JavaScript

```javascript
var sortArrayByParityII = function (nums) {
  let evenIndex = 0,
    oddIndex = 1;
  while (evenIndex < nums.length && oddIndex < nums.length) {
    if (nums[evenIndex] % 2 === 0) {
      evenIndex += 2;
    } else if (nums[oddIndex] % 2 === 1) {
      oddIndex += 2;
    } else {
      [nums[evenIndex], nums[oddIndex]] = [nums[oddIndex], nums[evenIndex]];
      evenIndex += 2;
      oddIndex += 2;
    }
  }
  return nums;
};

// Example usage:
console.log(sortArrayByParityII([4, 2, 5, 7])); // Output: [4, 5, 2, 7]
```
