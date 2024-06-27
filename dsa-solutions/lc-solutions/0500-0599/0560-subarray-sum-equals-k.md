---
id: subarray-sum-equals-k
title: Subarray Sum Equals K
sidebar_label: Subarray Sum Equals K
tags: 
    - Array
    - HashMap
    - Prefix Sum
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [subarray-sum-equals-k](https://leetcode.com/problems/subarray-sum-equals-k/description/) | [subarray-sum-equals-k Solution on LeetCode](https://leetcode.com/problems/subarray-sum-equals-k/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

## Problem Description

Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.

A subarray is a contiguous non-empty sequence of elements within an array.

### Example 1

**Input**: `nums = [1,1,1], k = 2`
**Output**: `2`

### Example 2

**Input**: `nums = [1,2,3], k = 3`
**Output**: `2`

### Constraints

- `1 <= nums.length <= 2 * 10^4`
- `-1000 <= nums[i] <= 1000`
- `-10^7 <= k <= 10^7`

## Approach

To solve this problem efficiently, we can use a HashMap (dictionary in Python) to keep track of the cumulative sum of elements up to the current index and the number of times each cumulative sum has been encountered. This approach allows us to determine the number of subarrays that sum to `k` in linear time.

### Step-by-Step Algorithm

1. Initialize a dictionary `prefix_sum_count` to store the frequency of prefix sums. Start with the prefix sum `0` having a count of `1`.
2. Initialize `current_sum` to `0` and `count` to `0`.
3. Iterate through each element in the array:
    - Add the current element to `current_sum`.
    - If `current_sum - k` exists in `prefix_sum_count`, it means there are subarrays ending at the current index that sum to `k`. Add the count of `current_sum - k` to `count`.
    - Increment the count of `current_sum` in `prefix_sum_count`.
4. Return `count`.

## Solution in Python

```python
def subarraySum(nums, k):
    prefix_sum_count = {0: 1}
    current_sum = 0
    count = 0
    
    for num in nums:
        current_sum += num
        if (current_sum - k) in prefix_sum_count:
            count += prefix_sum_count[current_sum - k]
        if current_sum in prefix_sum_count:
            prefix_sum_count[current_sum] += 1
        else:
            prefix_sum_count[current_sum] = 1
    
    return count
```

## Solution in Java

```java
import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int subarraySum(int[] nums, int k) {
        Map<Integer, Integer> prefixSumCount = new HashMap<>();
        prefixSumCount.put(0, 1);
        int current_sum = 0;
        int count = 0;
        
        for (int num : nums) {
            current_sum += num;
            if (prefixSumCount.containsKey(current_sum - k)) {
                count += prefixSumCount.get(current_sum - k);
            }
            prefixSumCount.put(current_sum, prefixSumCount.getOrDefault(current_sum, 0) + 1);
        }
        
        return count;
    }
}
```

## Solution in C++

```cpp
#include <vector>
#include <unordered_map>

class Solution {
public:
    int subarraySum(std::vector<int>& nums, int k) {
        std::unordered_map<int, int> prefixSumCount = {{0, 1}};
        int current_sum = 0;
        int count = 0;
        
        for (int num : nums) {
            current_sum += num;
            if (prefixSumCount.find(current_sum - k) != prefixSumCount.end()) {
                count += prefixSumCount[current_sum - k];
            }
            prefixSumCount[current_sum]++;
        }
        
        return count;
    }
};
```

## Solution in C

```c
#include <stdio.h>
#include <stdlib.h>

int subarraySum(int* nums, int numsSize, int k) {
    int *prefixSumCount = (int*)calloc(numsSize * 2000, sizeof(int));  // Assuming numsSize <= 20000
    prefixSumCount[numsSize] = 1;  // Initial prefix sum 0
    
    int current_sum = 0;
    int count = 0;
    
    for (int i = 0; i < numsSize; i++) {
        current_sum += nums[i];
        int target_sum = current_sum - k;
        count += prefixSumCount[target_sum + numsSize];
        prefixSumCount[current_sum + numsSize]++;
    }
    
    free(prefixSumCount);
    return count;
}
```

## Solution in JavaScript

```javascript
var subarraySum = function(nums, k) {
    let prefixSumCount = {0: 1};
    let current_sum = 0;
    let count = 0;
    
    for (let num of nums) {
        current_sum += num;
        if (prefixSumCount[current_sum - k] !== undefined) {
            count += prefixSumCount[current_sum - k];
        }
        prefixSumCount[current_sum] = (prefixSumCount[current_sum] || 0) + 1;
    }
    
    return count;
};
```

## Conclusion

The described algorithm efficiently finds the number of subarrays that sum up to a given value `k` using a HashMap to store prefix sums. This approach ensures that the solution runs in linear time, making it suitable for large input sizes.