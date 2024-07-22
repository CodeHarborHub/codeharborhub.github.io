---
id: Three-Equal-Parts
title: Three-Equal-Parts
sidebar_label: Three-Equal-Parts
tags: 
    - arrays
    - binary
    - partitioning
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [Three-Equal-Parts](https://leetcode.com/problems/Three-Equal-Parts/description/) | [Three-Equal-Parts Solution on LeetCode](https://leetcode.com/problems/Three-Equal-Parts/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |
## Problem Description

You are given an array `arr` which consists of only zeros and ones. Divide the array into three non-empty parts such that all of these parts represent the same binary value.

If it is possible, return any `[i, j]` with `i + 1 < j`, such that:

- `arr[0], arr[1], ..., arr[i]` is the first part,
- `arr[i + 1], arr[i + 2], ..., arr[j - 1]` is the second part, and
- `arr[j], arr[j + 1], ..., arr[arr.length - 1]` is the third part.

All three parts should have equal binary values. If it is not possible, return `[-1, -1]`.

Note that the entire part is used when considering what binary value it represents. For example, `[1,1,0]` represents 6 in decimal, not 3. Also, leading zeros are allowed, so `[0,1,1]` and `[1,1]` represent the same value.

### Example 1

**Input:** `arr = [1,0,1,0,1]`  
**Output:** `[0,3]`

### Example 2

**Input:** `arr = [1,1,0,1,1]`  
**Output:** `[-1,-1]`

### Example 3

**Input:** `arr = [1,1,0,0,1]`  
**Output:** `[0,2]`

## Constraints

- `3 <= arr.length <= 3 * 10^4`
- `arr[i]` is `0` or `1`.

## Approach

1. **Count the number of 1's in the array:**
   - If the total number of 1's is not divisible by 3, return `[-1, -1]`.
   - If the array is all zeros, return any valid split as `[0, n-1]` (since all parts will be 0).

2. **Identify target 1's in each part:**
   - The target number of 1's in each part is `total_ones // 3`.

3. **Find the starting index of each part:**
   - Locate the start of each part by finding the index where the 1's for each part begins.

4. **Check for matching parts:**
   - Ensure that the parts from the identified start indices match in terms of the sequence and trailing zeros.

5. **Return the valid indices if parts match:**
   - If valid, return the appropriate indices, otherwise return `[-1, -1]`.

## Step-by-Step Algorithm

1. Count the number of 1's in the array. If it's not divisible by 3, return `[-1, -1]`.
2. If the array is all zeros, return `[0, arr.length - 1]`.
3. Calculate the target number of 1's per part.
4. Identify the starting indices for each part by counting the 1's until reaching the target for each part.
5. Compare the parts to ensure they are identical.
6. Return the indices if parts are identical, otherwise return `[-1, -1]`.

## Solution

### Python
```python
def threeEqualParts(arr):
    ones = sum(arr)
    if ones % 3 != 0:
        return [-1, -1]
    if ones == 0:
        return [0, len(arr) - 1]
    
    k = ones // 3
    ones_seen = 0
    first = second = third = -1
    
    for i in range(len(arr)):
        if arr[i] == 1:
            if ones_seen == 0:
                first = i
            elif ones_seen == k:
                second = i
            elif ones_seen == 2 * k:
                third = i
            ones_seen += 1
    
    length = len(arr) - third
    if first + length <= second and second + length <= third:
        if arr[first:first + length] == arr[second:second + length] == arr[third:]:
            return [first + length - 1, second + length]
    
    return [-1, -1]
```

### Java
```java
public int[] threeEqualParts(int[] arr) {
    int ones = 0;
    for (int num : arr) {
        if (num == 1) ones++;
    }
    if (ones % 3 != 0) return new int[] {-1, -1};
    if (ones == 0) return new int[] {0, arr.length - 1};

    int k = ones / 3;
    int first = -1, second = -1, third = -1;
    int count = 0;
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            if (count == 0) first = i;
            else if (count == k) second = i;
            else if (count == 2 * k) third = i;
            count++;
        }
    }

    int len = arr.length - third;
    if (first + len <= second && second + len <= third) {
        for (int i = 0; i < len; i++) {
            if (arr[first + i] != arr[second + i] || arr[first + i] != arr[third + i]) {
                return new int[] {-1, -1};
            }
        }
        return new int[] {first + len - 1, second + len};
    }
    return new int[] {-1, -1};
}
```

### C++
```cpp
#include <vector>
using namespace std;

vector<int> threeEqualParts(vector<int>& arr) {
    int ones = 0;
    for (int num : arr) {
        if (num == 1) ones++;
    }
    if (ones % 3 != 0) return {-1, -1};
    if (ones == 0) return {0, (int)arr.size() - 1};

    int k = ones / 3;
    int first = -1, second = -1, third = -1;
    int count = 0;
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == 1) {
            if (count == 0) first = i;
            else if (count == k) second = i;
            else if (count == 2 * k) third = i;
            count++;
        }
    }

    int len = arr.size() - third;
    if (first + len <= second && second + len <= third) {
        for (int i = 0; i < len; i++) {
            if (arr[first + i] != arr[second + i] || arr[first + i] != arr[third + i]) {
                return {-1, -1};
            }
        }
        return {first + len - 1, second + len};
    }
    return {-1, -1};
}
```

### C
```c
#include <stdlib.h>

int* threeEqualParts(int* arr, int arrSize, int* returnSize) {
    int ones = 0;
    for (int i = 0; i < arrSize; i++) {
        if (arr[i] == 1) ones++;
    }
    int* result = (int*)malloc(2 * sizeof(int));
    if (ones % 3 != 0) {
        result[0] = -1;
        result[1] = -1;
        *returnSize = 2;
        return result;
    }
    if (ones == 0) {
        result[0] = 0;
        result[1] = arrSize - 1;
        *returnSize = 2;
        return result;
    }

    int k = ones / 3;
    int first = -1, second = -1, third = -1;
    int count = 0;
    for (int i = 0; i < arrSize; i++) {
        if (arr[i] == 1) {
            if (count == 0) first = i;
            else if (count == k) second = i;
            else if (count == 2 * k) third = i;
            count++;
        }
    }

    int len = arrSize - third;
    if (first + len <= second && second + len <= third) {
        for (int i = 0; i < len; i++) {
            if (arr[first + i] != arr[second + i] || arr[first + i] != arr[third + i]) {
                result[0] = -1;
                result[1] = -1;
                *returnSize = 2;
                return result;
            }
        }
        result[0] = first + len - 1;
        result[1] = second + len;
        *returnSize = 2;
        return result;
    }
    result[0] = -1;
    result[1] = -1;
    *returnSize = 2;
    return result;
}
```

### JavaScript
```javascript
var threeEqualParts = function(arr) {
    const ones = arr.reduce((a, b) => a + b, 0);
    if (ones % 3 !== 0) return [-1, -1];
    if (ones === 0) return [0, arr.length - 1];

    const k = ones / 3;
    let first = -1, second = -1, third = -1, count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            if (count === 0) first = i;
            else if (count === k) second = i;
            else if (count === 2 * k) third = i;
            count++;
        }
    }

    const len = arr.length - third;
    if (first + len <= second && second + len <= third) {
        for (let i = 0; i < len; i++) {
            if (arr[first + i] !== arr[second + i] || arr[first + i] !== arr[third + i]) {
                return [-1, -1];
            }
        }
        return [first + len - 1, second + len];
    }
    return [-1, -1];
};
```

## Conclusion

This problem involves dividing an array of binary digits into three equal parts such that each part represents the same binary value. By counting the number of 1's and identifying the correct indices for each part, we can determine if such a division is possible and return the appropriate indices. The provided solutions in Python, Java, C++, C, and JavaScript offer various implementations of this approach.