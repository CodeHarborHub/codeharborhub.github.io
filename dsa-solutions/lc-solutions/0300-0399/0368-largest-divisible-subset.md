---
id: largest-divisible-subset
title: Largest Divisible Subset (LeetCode)
sidebar_label: 0368-Largest Divisible Subset
tags:
  - Array
  - Math
  - Sorting
  - Dynamic Programming
description: Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j])
sidebar_position: 0368
---

## Problem Description

Given a set of distinct positive integers nums, return the largest subset `answer` such that every pair `(answer[i], answer[j])` of elements in this subset satisfies:

- answer[i] % answer[j] == 0, or
- answer[j] % answer[i] == 0
If there are multiple solutions, return any of them.

### Example 1

- **Input:** `nums = [1,2,3]`
- **Output:** `[1,2]`

### Example 2

- **Input:** `nums = [1,2,4,8]`
- **Output:** `[1,2,4,8]`


### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 2 * 10^9`
- `All the integers in nums are unique.`

## Approach

- 1. The first insight is that if we sort the list of numbers nums in ascending order, any larger number can only be divisible by a smaller number and not vice versa. This imposes an order on potential divisibility relationships.

- 2. The second insight is that we can use Dynamic Programming to build up knowledge of the largest divisible subset up to any given index as we iterate through our sorted list. We define an array f[i] to represent the size of the largest divisible subset that includes nums[i] as the largest number in the subset. So for each number nums[i], we look back at all previous numbers nums[j] where j < i and update f[i] if nums[i] % nums[j] == 0.

- 3. Lastly, knowing the size of the largest subset isn't enough; we want the subset itself. We keep track of the index k at which we attain the maximum size of the subset. Once we finish populating our f array, we can backtrack from nums[k] and construct the actual subset by looking at elements that could be used to reach nums[k]. To construct the result, we traverse in reverse, starting from nums[k] going backward, and add numbers to our subset ans that have the correct divisibility property and help us reach the previously calculated optimum size m at each step until we've constructed the full largest subset. 

### Solution Code

#### C++

```c++
class Solution {
public:
    vector<int> largestDivisibleSubset(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n = nums.size();
        vector<int> subsetSizes(n, 1);
        int maxSubsetIndex = 0;
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                if (nums[i] % nums[j] == 0) {
                    subsetSizes[i] = max(subsetSizes[i], subsetSizes[j] + 1);
                }
            }
            if (subsetSizes[maxSubsetIndex] < subsetSizes[i]) {
                maxSubsetIndex = i;
            }
        }
        int currentSize = subsetSizes[maxSubsetIndex];
        vector<int> largestSubset;
        for (int i = maxSubsetIndex; currentSize > 0; --i) {
            if (nums[maxSubsetIndex] % nums[i] == 0 && subsetSizes[i] == currentSize) {
                largestSubset.push_back(nums[i]);
                maxSubsetIndex = i;
                --currentSize;
            }
        }
        return largestSubset;
    }
};
```

#### Java
```java
class Solution {
    public List<Integer> largestDivisibleSubset(int[] nums) {
        Arrays.sort(nums);
        int length = nums.length;
        int[] dp = new int[length];
        Arrays.fill(dp, 1);
        int maxIndex = 0;
        for (int i = 0; i < length; ++i) {
            for (int j = 0; j < i; ++j) {
                if (nums[i] % nums[j] == 0) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            if (dp[maxIndex] < dp[i]) {
                maxIndex = i;
            }
        }
        int subsetSize = dp[maxIndex];
        List<Integer> result = new ArrayList<>();
        for (int i = maxIndex; subsetSize > 0; --i) {
            if (nums[maxIndex] % nums[i] == 0 && dp[i] == subsetSize) {
                result.add(nums[i]);
                maxIndex = i; 
                --subsetSize; 
            }
        }
      
        return result;
    }
}
```

#### Python
```python
class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        nums.sort()
        n = len(nums)
        dp = [1] * n
        max_index = 0 
        for i in range(n):
            for j in range(i):
                if nums[i] % nums[j] == 0:
                    dp[i] = max(dp[i], dp[j] + 1)
            if dp[max_index] < dp[i]:
                max_index = i
        subset_size = dp[max_index]
        current_index = max_index
        largest_subset = []
        while subset_size:
            if nums[max_index] % nums[current_index] == 0 and dp[current_index] == subset_size:
                largest_subset.append(nums[current_index])
                max_index, subset_size = current_index, subset_size - 1
            current_index -= 1
        return largest_subset
```

#### Conclusion
Time Complexity
    - The outer loop runs n times where n is the number of elements in nums.
    - The inner loop, for each element of the outer loop, runs a maximum of i times which is less than n.
- The Total Time Complexity is O(n^2)

Space Complexity
    - The f list which is of size n contributes O(n) to the space complexity.
- The Total Space Complexity is O(n)