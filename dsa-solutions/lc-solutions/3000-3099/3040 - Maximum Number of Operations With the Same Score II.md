---
id: maximum-number-of-operations-with-the-same-score-ii
title: Maximum Number of Operations With the Same Score II
sidebar_label: 3040 - Maximum Number of Operations With the Same Score II
tags: [Array, Greedy]
description: Find the maximum number of operations with the same score on an array of integers using specific deletion operations.
---

## Problem Statement

### Problem Description

Given an array of integers called `nums`, you can perform any of the following operations while `nums` contains at least 2 elements:

1. Choose the first two elements of `nums` and delete them.
2. Choose the last two elements of `nums` and delete them.
3. Choose the first and the last elements of `nums` and delete them.

The score of the operation is the sum of the deleted elements.

Your task is to find the maximum number of operations that can be performed, such that all operations have the same score.

Return the maximum number of operations possible that satisfy the condition mentioned above.

### Example

**Example 1:**
```
Input: nums = [3,2,1,2,3,4]
Output: 3
```
**Explanation:** We perform the following operations:

- Delete the first two elements, with score 3 + 2 = 5, nums = [1,2,3,4].
- Delete the first and the last elements, with score 1 + 4 = 5, nums = [2,3].
- Delete the first and the last elements, with score 2 + 3 = 5, nums = [].
- We are unable to perform any more operations as nums is empty.


### Constraints

- 2 ≤ `nums.length` ≤ 2000
- 1 ≤ `nums[i]` ≤ 1000

## Solution

### Intuition

To solve this problem, we need to identify how many operations can be performed with the same score. We can use the following approach:

1. **Calculate Possible Scores:** Compute possible scores for each operation type (first two elements, last two elements, first and last elements).
2. **Count Operations for Each Score:** Use a dictionary to count the number of times each score can be achieved by applying each operation type.
3. **Find the Maximum Valid Score:** Determine the maximum count of operations where all operations yield the same score.

### Time and Space Complexity

- **Time Complexity:** The time complexity is $O(n)$, where $n$ is the length of `nums`. This includes calculating possible scores and counting their frequencies.

- **Space Complexity:** The space complexity is $O(n)$ due to the use of a dictionary to store score counts.

### Code

#### C++

```cpp
class Solution {
public:
    int maxOperations(vector<int>& nums) {
        int n = nums.size();
        unordered_map<int, int> scoreCount;
        
        int maxOps = 0;
        for (int i = 0; i < n / 2; ++i) {
            int score1 = nums[i] + nums[i + 1];
            int score2 = nums[n - 1 - i] + nums[n - 2 - i];
            int score3 = nums[i] + nums[n - 1 - i];
            
            scoreCount[score1]++;
            scoreCount[score2]++;
            scoreCount[score3]++;
            
            maxOps = max(maxOps, max({scoreCount[score1], scoreCount[score2], scoreCount[score3]}));
        }
        
        return maxOps;
    }
};
```

#### Java
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int maxOperations(int[] nums) {
        int n = nums.length;
        Map<Integer, Integer> scoreCount = new HashMap<>();
        
        int maxOps = 0;
        for (int i = 0; i < n / 2; ++i) {
            int score1 = nums[i] + nums[i + 1];
            int score2 = nums[n - 1 - i] + nums[n - 2 - i];
            int score3 = nums[i] + nums[n - 1 - i];
            
            scoreCount.put(score1, scoreCount.getOrDefault(score1, 0) + 1);
            scoreCount.put(score2, scoreCount.getOrDefault(score2, 0) + 1);
            scoreCount.put(score3, scoreCount.getOrDefault(score3, 0) + 1);
            
            maxOps = Math.max(maxOps, Math.max(scoreCount.get(score1), Math.max(scoreCount.get(score2), scoreCount.get(score3))));
        }
        
        return maxOps;
    }
}
```

#### Python
```python
class Solution:
    def maxOperations(self, nums: List[int]) -> int:
        from collections import defaultdict
        
        n = len(nums)
        score_count = defaultdict(int)
        
        max_ops = 0
        for i in range(n // 2):
            score1 = nums[i] + nums[i + 1]
            score2 = nums[n - 1 - i] + nums[n - 2 - i]
            score3 = nums[i] + nums[n - 1 - i]
            
            score_count[score1] += 1
            score_count[score2] += 1
            score_count[score3] += 1
            
            max_ops = max(max_ops, score_count[score1], score_count[score2], score_count[score3])
        
        return max_ops
```

