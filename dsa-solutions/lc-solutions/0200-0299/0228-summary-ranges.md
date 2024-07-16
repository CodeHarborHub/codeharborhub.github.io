---
id: summary-ranges
title: Summary Ranges
difficulty: Easy
sidebar_label: 0228-Summary-Ranges
tags:
  - Array
  - LeetCode Easy
---

## Problem Description
You are given a sorted unique integer array `nums`.

A range `[a,b]` is the smallest interval that covers all the numbers in the array between `a` and `b` (including `a` and `b`).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of `nums` is covered by exactly one of the ranges, and there is no integer `x` such that `x` is in one of the ranges but not in `nums`.

### Example
**Example 1:**
```plaintext
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
```

**Example 2:**
```plaintext
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
```

### Constraints
- `0 <= nums.length <= 20`
- `-2^31 <= nums[i] <= 2^31 - 1`
- All the values of `nums` are unique.
- `nums` is sorted in ascending order.

## Solution Approach

### Approach Overview
The problem can be solved by iterating through the array and keeping track of the start and end of each range. Whenever a break in the sequence is found, the current range is added to the result list, and a new range is started.

### Detailed Steps

1. **Initialize Variables**:
   - Use a list to store the result ranges.
   - Use two variables to keep track of the start and end of the current range.
   
2. **Iterate through the Array**:
   - For each number, check if it continues the current range.
   - If it doesn't, add the current range to the result and start a new range.
   
3. **Add the Last Range**:
   - After the loop, add the final range to the result list.
   
4. **Format the Range**:
   - Use a specific format for single numbers and ranges (`"a"` for single numbers and `"a->b"` for ranges).

## Code Examples

### C++
```cpp
class Solution {
public:
    vector<string> summaryRanges(vector<int>& nums) {
        vector<string> result;
        if (nums.empty()) return result;
        
        int start = nums[0], end = nums[0];
        
        for (int i = 1; i < nums.size(); ++i) {
            if (nums[i] == end + 1) {
                end = nums[i];
            } else {
                if (start == end) {
                    result.push_back(to_string(start));
                } else {
                    result.push_back(to_string(start) + "->" + to_string(end));
                }
                start = end = nums[i];
            }
        }
        
        if (start == end) {
            result.push_back(to_string(start));
        } else {
            result.push_back(to_string(start) + "->" + to_string(end));
        }
        
        return result;
    }
};
```

### Python
```python
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        result = []
        if not nums:
            return result
        
        start = end = nums[0]
        
        for num in nums[1:]:
            if num == end + 1:
                end = num
            else:
                if start == end:
                    result.append(str(start))
                else:
                    result.append(f"{start}->{end}")
                start = end = num
        
        if start == end:
            result.append(str(start))
        else:
            result.append(f"{start}->{end}")
        
        return result
```

### Java
```java
class Solution {
    public List<String> summaryRanges(int[] nums) {
        List<String> result = new ArrayList<>();
        if (nums.length == 0) return result;
        
        int start = nums[0], end = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == end + 1) {
                end = nums[i];
            } else {
                if (start == end) {
                    result.add(String.valueOf(start));
                } else {
                    result.add(start + "->" + end);
                }
                start = end = nums[i];
            }
        }
        
        if (start == end) {
            result.add(String.valueOf(start));
        } else {
            result.add(start + "->" + end);
        }
        
        return result;
    }
}
```

### C
```c
#include <stdlib.h>
#include <string.h>

// Helper function to convert an integer to a string
char* intToStr(int num) {
    char* str = (char*)malloc(12 * sizeof(char)); // Max length for an int in C
    sprintf(str, "%d", num);
    return str;
}

char ** summaryRanges(int* nums, int numsSize, int* returnSize){
    char **result = (char **)malloc(numsSize * sizeof(char *));
    *returnSize = 0;
    
    if (numsSize == 0) return result;
    
    int start = nums[0], end = nums[0];
    
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] == end + 1) {
            end = nums[i];
        } else {
            if (start == end) {
                result[*returnSize] = intToStr(start);
            } else {
                result[*returnSize] = (char *)malloc(25 * sizeof(char));
                sprintf(result[*returnSize], "%d->%d", start, end);
            }
            (*returnSize)++;
            start = end = nums[i];
        }
    }
    
    if (start == end) {
        result[*returnSize] = intToStr(start);
    } else {
        result[*returnSize] = (char *)malloc(25 * sizeof(char));
        sprintf(result[*returnSize], "%d->%d", start, end);
    }
    (*returnSize)++;
    
    return result;
}
```

## Complexity

- **Time Complexity**: `O(n)`, where `n` is the length of the array. We traverse the array once to identify ranges.
  
- **Space Complexity**: `O(1)` (excluding the space required for the result), as no additional space proportional to the input size is used.
