---
id: FourSum
title: 4Sum (LeetCode)
sidebar_label: 0018-FourSum
tags:
  - Two Pointers
description: "Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]]"
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [4Sum](https://leetcode.com/problems/4sum/description/) | [4Sum Solution on LeetCode](https://leetcode.com/problems/4sum/solutions/) | [Abhinash Singh](https://leetcode.com/u/singhabhinash/) |

### Problem Description

Given an array `nums` of `n` integers, return an array of all the unique quadruplets `[nums[a], nums[b], nums[c], nums[d]]` such that:

- `0 <= a, b, c, d < n`
- `a, b, c, and d are distinct`
- `nums[a] + nums[b] + nums[c] + nums[d] == target`

You may return the answer in any order.

### Examples

#### Example 1

- **Input:** `nums = [1,0,-1,0,-2,2], target = 0`
- **Output:** `[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]`

#### Example 2

- **Input:** `nums = [2,2,2,2,2], target = 8`
- **Output:** `[[2,2,2,2]]`

### Constraints

- $1 <= nums.length <= 200$
- $-10^9 <= nums[i] <= 10^9$
- $-10^9 <= target <= 10^9$

### Approach

To solve the problem, we can use the following approach:

1. Sort the input array of integers `nums`.
2. Initialize an empty set `s`, and an empty list `output`.
3. Use nested loops to iterate through all possible combinations of quadruplets in `nums`.
4. For each combination, use two pointers (`k` and `l`) to traverse the sub-array between the second and second-to-last elements of the combination.
5. At each iteration of the innermost while loop, calculate the sum of the current quadruplet and check if it is equal to the target.
6. If the sum is equal to the target, insert the quadruplet into the set `s` and increment both pointers (`k` and `l`).
7. If the sum is less than the target, increment the pointer `k`.
8. If the sum is greater than the target, decrement the pointer `l`.
9. After all quadruplets have been checked, iterate through the set `s` and add each quadruplet to the `output` list.
10. Return the `output` list.

### Solution Code

#### Python

```python
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        s = set()
        output = []
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                k = j + 1
                l = len(nums) - 1
                while k < l:
                    sum = nums[i] + nums[j] + nums[k] + nums[l]
                    if sum == target:
                        s.add((nums[i], nums[j], nums[k], nums[l]))
                        k += 1
                        l -= 1
                    elif sum < target:
                        k += 1
                    else:
                        l -= 1
        output = list(s)
        return output
```

#### C++

```cpp
class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        sort(nums.begin(), nums.end());
        set<vector<int>> s;
        vector<vector<int>> output;
        for (int i = 0; i < nums.size(); i++) {
            for(int j = i + 1; j < nums.size(); j++) {
                int k = j + 1;
                int l = nums.size() - 1;
                while (k < l) {
                    long long sum = nums[i];
                    sum += nums[j];
                    sum += nums[k];
                    sum += nums[l];
                    if (sum == target) {
                        s.insert({nums[i], nums[j], nums[k], nums[l]});
                        k++;
                        l--;
                    } else if (sum < target) {
                        k++;
                    } else {
                        l--;
                    }
                }
            }
        }
        for(auto quadruplets : s)
            output.push_back(quadruplets);
        return output;
    }
};
```

#### Java

```java
class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);
        Set<List<Integer>> s = new HashSet<>();
        List<List<Integer>> output = new ArrayList<>();
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                int k = j + 1;
                int l = nums.length - 1;
                while (k < l) {
                    long sum = nums[i];
                    sum += nums[j];
                    sum += nums[k];
                    sum += nums[l];
                    if (sum == target) {
                        s.add(Arrays.asList(nums[i], nums[j], nums[k], nums[l]));
                        k++;
                        l--;
                    } else if (sum < target) {
                        k++;
                    } else {
                        l--;
                    }
                }
            }
        }
        output.addAll(s);
        return output;
    }
}
```

### Conclusion

The given solution sorts the input list and uses a nested loop structure with two pointers to find all unique quadruplets that sum up to the target. By using a set to store the quadruplets, it ensures that duplicates are avoided. The solution efficiently narrows down potential combinations by adjusting the pointers based on the current sum relative to the target. This approach is effective for generating the required output while maintaining uniqueness.
