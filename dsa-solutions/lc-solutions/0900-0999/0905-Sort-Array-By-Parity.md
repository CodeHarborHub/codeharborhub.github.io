---
id: Sort-Array-By-Parity
title: Sort Array By Parity
sidebar_label: Sort Array By Parity
tags:
  - Arrays
  - Sorting
---

## Problem Description

| Problem Statement                                                                       | Solution Link                                                                                              | LeetCode Profile                                     |
| :-------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- | :--------------------------------------------------- |
| [Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/description/) | [Sort Array By Parity Solution on LeetCode](https://leetcode.com/problems/sort-array-by-parity/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

## Problem Description

Given an integer array `nums`, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

### Example 1:

**Input:** `nums = [3, 1, 2, 4]`
**Output:** `[2, 4, 3, 1]`
**Explanation:** The outputs `[4, 2, 3, 1]`, `[2, 4, 1, 3]`, and `[4, 2, 1, 3]` would also be accepted.

### Example 2:

**Input:** `nums = [0]`
**Output:** `[0]`

## Constraints

- `1 <= nums.length <= 5000`
- `0 <= nums[i] <= 5000`

## Approach

1. **Identify even and odd integers**: Iterate through the array and separate the even and odd integers.
2. **Rearrange the array**: Place all even integers at the beginning of the array followed by the odd integers.

## Solution

### Python

```python
def sortArrayByParity(nums):
    even = [x for x in nums if x % 2 == 0]
    odd = [x for x in nums if x % 2 != 0]
    return even + odd

# Example usage
nums = [3, 1, 2, 4]
print(sortArrayByParity(nums))  # Output: [2, 4, 3, 1]
```

### Java

```java
import java.util.*;

public class EvenOddArray {
    public static int[] sortArrayByParity(int[] nums) {
        List<Integer> even = new ArrayList<>();
        List<Integer> odd = new ArrayList<>();

        for (int num : nums) {
            if (num % 2 == 0) {
                even.add(num);
            } else {
                odd.add(num);
            }
        }

        even.addAll(odd);
        return even.stream().mapToInt(i -> i).toArray();
    }

    public static void main(String[] args) {
        int[] nums = {3, 1, 2, 4};
        System.out.println(Arrays.toString(sortArrayByParity(nums)));  // Output: [2, 4, 3, 1]
    }
}
```

### C++

```cpp
#include <vector>
#include <iostream>

std::vector<int> sortArrayByParity(std::vector<int>& nums) {
    std::vector<int> even, odd;
    for (int num : nums) {
        if (num % 2 == 0) {
            even.push_back(num);
        } else {
            odd.push_back(num);
        }
    }
    even.insert(even.end(), odd.begin(), odd.end());
    return even;
}

int main() {
    std::vector<int> nums = {3, 1, 2, 4};
    std::vector<int> result = sortArrayByParity(nums);
    for (int num : result) {
        std::cout << num << " ";
    }
    // Output: 2 4 3 1
}
```

### C

```c
#include <stdio.h>
#include <stdlib.h>

void sortArrayByParity(int* nums, int numsSize, int* returnSize) {
    int* result = (int*)malloc(numsSize * sizeof(int));
    int evenIndex = 0, oddIndex = numsSize - 1;

    for (int i = 0; i < numsSize; ++i) {
        if (nums[i] % 2 == 0) {
            result[evenIndex++] = nums[i];
        } else {
            result[oddIndex--] = nums[i];
        }
    }
    *returnSize = numsSize;
    for (int i = 0; i < numsSize; ++i) {
        nums[i] = result[i];
    }
    free(result);
}

int main() {
    int nums[] = {3, 1, 2, 4};
    int numsSize = sizeof(nums) / sizeof(nums[0]);
    int returnSize;
    sortArrayByParity(nums, numsSize, &returnSize);

    for (int i = 0; i < numsSize; ++i) {
        printf("%d ", nums[i]);
    }
    // Output: 2 4 3 1
    return 0;
}
```

### JavaScript

```javascript
function sortArrayByParity(nums) {
  let even = [];
  let odd = [];

  for (let num of nums) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }

  return [...even, ...odd];
}

// Example usage
let nums = [3, 1, 2, 4];
console.log(sortArrayByParity(nums)); // Output: [2, 4, 3, 1]
```

## Step-by-Step Algorithm

1. Initialize two empty lists/arrays: one for even integers and one for odd integers.
2. Iterate through the given array:
   - If the current integer is even, add it to the even list/array.
   - If the current integer is odd, add it to the odd list/array.
3. Concatenate the even list/array with the odd list/array.
4. Return the concatenated list/array.

## Conclusion

This problem can be solved efficiently by iterating through the array once and separating the integers into even and odd lists/arrays. The time complexity is O(n), where n is the length of the array, making this approach optimal for the given constraints.
