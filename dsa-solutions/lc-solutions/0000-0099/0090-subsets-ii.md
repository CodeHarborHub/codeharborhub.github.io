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

## Institution
There are three important things to consider:

1. **Sort the Input:** Sort the `nums` array to handle duplicates easily.
2. **Backtracking:** Use backtracking to generate subsets.
3. **Avoid Duplicates:** Skip duplicates by checking if the current element is the same as the previous element and the previous element was not included in the current subset.

## Approach

# Generating All Unique Subsets

This solution defines a class `Solution` containing a method `subsetsWithDup` which generates all possible unique subsets for a given list of numbers, including handling duplicates.

## Implementation Steps

### Step 1: Define the `Solution` Class

Define a class `Solution` containing a method `subsetsWithDup` which takes a list of integers `nums` as input and returns a list of lists of integers.

### Step 2: Sort the Input List

Sort the `nums` list to handle duplicates easily.

### Step 3: Initialize Result List

Initialize an empty list called `result` to store the generated subsets.

### Step 4: Define the Backtracking Function

Define a function called `backtrack` which takes two parameters: `start` (the current index in `nums`) and `path` (the current subset being generated).

### Step 5: Append the Current Path

Append the current `path` to the `result`.

### Step 6: Loop Through the Elements

Loop through each element in `nums` starting from the `start` index:
  - If the current element is the same as the previous element and the previous element was not included in the current path, skip it to avoid duplicates.
  - Otherwise, include the current element in the path and recursively call the `backtrack` function with the next index.

### Step 7: Call the Backtrack Function

Initially call the `backtrack` function with `start` set to 0 and an empty `path`.

### Step 8: Return Result

Return the `result` list.

This algorithm generates all possible unique subsets for a given list of numbers by using backtracking and handling duplicates by sorting the input list and skipping duplicate elements appropriately.

## Code

### C++
```cpp
class Solution {
public:
    vector<vector<int>> subsetsWithDup(vector<int>& nums) {
        vector<vector<int>> result;
        vector<int> subset;
        sort(nums.begin(), nums.end());
        backtrack(nums, result, subset, 0);
        return result;
    }
    
private:
    void backtrack(vector<int>& nums, vector<vector<int>>& result, vector<int>& subset, int start) {
        result.push_back(subset);
        for (int i = start; i < nums.size(); ++i) {
            if (i > start && nums[i] == nums[i - 1]) continue; // skip duplicates
            subset.push_back(nums[i]);
            backtrack(nums, result, subset, i + 1);
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
            result.append(path)
            for i in range(start, len(nums)):
                if i > start and nums[i] == nums[i - 1]:
                    continue
                backtrack(i + 1, path + [nums[i]])

        nums.sort()
        result = []
        backtrack(0, [])
        return result
```

### Java
```java
class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums);
        backtrack(result, new ArrayList<>(), nums, 0);
        return result;
    }
    
    private void backtrack(List<List<Integer>> result, List<Integer> tempList, int[] nums, int start) {
        result.add(new ArrayList<>(tempList));
        for (int i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i - 1]) continue; // skip duplicates
            tempList.add(nums[i]);
            backtrack(result, tempList, nums, i + 1);
            tempList.remove(tempList.size() - 1);
        }
    }
}
```

## Complexity
- Time complexity: `O(2^n)`
- Space complexity: `O(2^n)`
