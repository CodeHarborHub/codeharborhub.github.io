---
id: non-decreasing-subsequences
title: Non-Decreasing Subsequences
sidebar_label: 0491 - Non-Decreasing Subsequences
tags:
  - Leetcode
  - Back-Tracking
---

## Problem Statement

Given an integer array `nums`, return all the different possible non-decreasing subsequences of the given array with at least two elements. You may return the answer in any order.

## Examples

### Example 1

- Input: `nums = [4,6,7,7]`
- Output: `[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]`

### Example 2

- Input: `nums = [4,4,3,2,1]`
- Output: `[[4,4]]`

## Constraints

- $1 <= nums.length <= 15$
- $-100 <= nums[i] <= 100$

## Algorithm

1. Use depth-first search (DFS) to explore all subsequences.
2. Start from the beginning of the array and for each element, either include it in the current subsequence if it maintains non-decreasing order or skip it.
3. Use a set to ensure that each element is used only once at each level of recursion to avoid duplicates.
4. Add the current subsequence to the result if it has at least two elements.

## Code

### Python

```python
class Solution:
    def findSubsequences(self, nums: List[int]) -> List[List[int]]:
        def dfs(start, path):
            if len(path) > 1:
                res.append(path)
            used = set()
            for i in range(start, len(nums)):
                if nums[i] not in used and (not path or nums[i] >= path[-1]):
                    used.add(nums[i])
                    dfs(i + 1, path + [nums[i]])

        res = []
        dfs(0, [])
        return res
```

### C++

```cpp
class Solution {
public:
    vector<vector<int>> ans;

    void dfs(vector<int>& nums, vector<int>& temp, int index) {
        if (temp.size() > 1) ans.push_back(temp);

        unordered_set<int> used;
        for (int i = index; i < nums.size(); i++) {
            if ((temp.empty() || temp.back() <= nums[i]) && used.find(nums[i]) == used.end()) {
                temp.push_back(nums[i]);
                dfs(nums, temp, i + 1);
                temp.pop_back();
                used.insert(nums[i]);
            }
        }
    }

    vector<vector<int>> findSubsequences(vector<int>& nums) {
        vector<int> temp;
        dfs(nums, temp, 0);
        return ans;
    }
};
```

### Java

```java
import java.util.*;

class Solution {
    List<List<Integer>> ans = new ArrayList<>();

    public void dfs(int[] nums, List<Integer> temp, int index) {
        if (temp.size() > 1) ans.add(new ArrayList<>(temp));

        Set<Integer> used = new HashSet<>();
        for (int i = index; i < nums.length; i++) {
            if ((temp.isEmpty() || temp.get(temp.size() - 1) <= nums[i]) && used.add(nums[i])) {
                temp.add(nums[i]);
                dfs(nums, temp, i + 1);
                temp.remove(temp.size() - 1);
            }
        }
    }

    public List<List<Integer>> findSubsequences(int[] nums) {
        dfs(nums, new ArrayList<>(), 0);
        return ans;
    }
}
```

### JavaScript

```javascript
var findSubsequences = function (nums) {
  const res = [];

  const dfs = (start, path) => {
    if (path.length > 1) {
      res.push([...path]);
    }
    const used = new Set();
    for (let i = start; i < nums.length; i++) {
      if (
        !used.has(nums[i]) &&
        (path.length === 0 || nums[i] >= path[path.length - 1])
      ) {
        used.add(nums[i]);
        path.push(nums[i]);
        dfs(i + 1, path);
        path.pop();
      }
    }
  };

  dfs(0, []);
  return res;
};
```
