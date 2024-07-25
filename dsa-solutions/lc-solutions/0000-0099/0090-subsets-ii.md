---
id: subsets-ii
title: Subsets II
difficulty: Medium
sidebar_label: 0090-Subsets-II
tags:
  - Array
  - Backtracking
  - LeetCode Medium
---

## Problem Description
Given an integer array `nums` that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

### Example
**Example 1:**
```plaintext
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
```
**Example 2:**
```plaintext
Input: nums = [0]
Output: [[],[0]]
```

### Constraints
- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`

## Solution Approach

### Approach Overview
The problem can be solved using backtracking. To handle duplicates, we need to sort the array first and then ensure that we do not include the same element twice in the same position within the subset.

### Detailed Steps

1. **Sort the Input Array**:
   - Sorting helps in easily skipping duplicates.
   
2. **Backtracking Function**:
   - Use a helper function to generate all subsets.
   - Skip over duplicate elements by checking the previous element in the sorted array.

3. **Generate Subsets**:
   - Initialize an empty list to store all subsets.
   - Start backtracking from the first index.

## Code Examples

### C++
```cpp
class Solution {
public:
    vector<vector<int>> subsetsWithDup(vector<int>& nums) {
        vector<vector<int>> result;
        vector<int> subset;
        sort(nums.begin(), nums.end());
        backtrack(nums, 0, subset, result);
        return result;
    }

private:
    void backtrack(vector<int>& nums, int start, vector<int>& subset, vector<vector<int>>& result) {
        result.push_back(subset);
        for (int i = start; i < nums.size(); ++i) {
            if (i > start && nums[i] == nums[i - 1]) continue;
            subset.push_back(nums[i]);
            backtrack(nums, i + 1, subset, result);
            subset.pop_back();
        }
    }
};
```

### Python
```python
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        def backtrack(start, path):
            res.append(path)
            for i in range(start, len(nums)):
                if i > start and nums[i] == nums[i - 1]:
                    continue
                backtrack(i + 1, path + [nums[i]])
        
        nums.sort()
        res = []
        backtrack(0, [])
        return res
```

### Java
```java
class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums);
        backtrack(nums, 0, new ArrayList<>(), result);
        return result;
    }

    private void backtrack(int[] nums, int start, List<Integer> subset, List<List<Integer>> result) {
        result.add(new ArrayList<>(subset));
        for (int i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i - 1]) continue;
            subset.add(nums[i]);
            backtrack(nums, i + 1, subset, result);
            subset.remove(subset.size() - 1);
        }
    }
}
```

### C
```c
#include <stdlib.h>

// Function to sort the array
int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

void backtrack(int* nums, int numsSize, int start, int* subset, int subsetSize, int** result, int* returnSize, int** columnSizes) {
    result[*returnSize] = (int*)malloc(subsetSize * sizeof(int));
    for (int i = 0; i < subsetSize; i++) {
        result[*returnSize][i] = subset[i];
    }
    (*columnSizes)[*returnSize] = subsetSize;
    (*returnSize)++;
    
    for (int i = start; i < numsSize; i++) {
        if (i > start && nums[i] == nums[i - 1]) continue;
        subset[subsetSize] = nums[i];
        backtrack(nums, numsSize, i + 1, subset, subsetSize + 1, result, returnSize, columnSizes);
    }
}

int** subsetsWithDup(int* nums, int numsSize, int* returnSize, int** columnSizes) {
    qsort(nums, numsSize, sizeof(int), compare);
    int** result = (int**)malloc(1000 * sizeof(int*));
    *returnSize = 0;
    *columnSizes = (int*)malloc(1000 * sizeof(int));
    int* subset = (int*)malloc(numsSize * sizeof(int));
    backtrack(nums, numsSize, 0, subset, 0, result, returnSize, columnSizes);
    free(subset);
    return result;
}
```

## Complexity

- **Time Complexity**: `O(2^n * n)`, where `n` is the length of the input array. This accounts for generating all subsets and sorting the array.
  
- **Space Complexity**: `O(2^n * n)`, as we need to store all subsets. Each subset can be of length `n` and there