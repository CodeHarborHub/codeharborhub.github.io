---
id: maximum-number-of-operations-with-the-same-score-i
title: Maximum Number of Operations With the Same Score I (LeetCode)
sidebar_label: 3038-MaximumNumberOfOperationsWithTheSameScoreI
tags:
  - Array
  - Greedy
description: Find the maximum number of operations with the same score that can be performed on an array of integers.
sidebar_position: 3038
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Maximum Number of Operations With the Same Score I](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/) | [Maximum Number of Operations With the Same Score I Solution on LeetCode](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

Given an array of integers called nums, you can perform the following operation while nums contains at least 2 elements:

Choose the first two elements of nums and delete them.
The score of the operation is the sum of the deleted elements.

Your task is to find the maximum number of operations that can be performed, such that all operations have the same score.

Return the maximum number of operations possible that satisfy the condition mentioned above.

### Example 1

- **Input:** `nums = [3,2,1,4,5]`
- **Output:** `2`
- **Explanation:** We perform the following operations:
  - Delete the first two elements, with score 3 + 2 = 5, nums = [1,4,5].
  - Delete the first two elements, with score 1 + 4 = 5, nums = [5].
  We are unable to perform any more operations as nums contain only 1 element.

### Example 2

- **Input:** `nums = [3,2,6,1,4]`
- **Output:** `1`
- **Explanation:** We perform the following operations:
  - Delete the first two elements, with score 3 + 2 = 5, nums = [6,1,4].
  We are unable to perform any more operations as the score of the next operation isn't the same as the previous one.

### Constraints

- `2 <= nums.length <= 100`
- `1 <= nums[i] <= 1000`

## Approach

To solve this problem, we can use a greedy approach to find the maximum number of operations with the same score. Here's the approach:

1. Use a frequency map to count the sum of pairs of the first two elements.
2. Identify the most common pair sum that can be repeated the maximum number of times.

### Solution Code

#### Python

```python
from collections import Counter

class Solution:
    def maxOperations(self, nums: List[int]) -> int:
        if len(nums) < 2:
            return 0
        
        freq = Counter(nums[i] + nums[i+1] for i in range(0, len(nums)-1, 2))
        return freq.most_common(1)[0][1] if freq else 0
```

#### Java
```java
import java.util.HashMap;

class Solution {
    public int maxOperations(int[] nums) {
        if (nums.length < 2) return 0;
        
        HashMap<Integer, Integer> freq = new HashMap<>();
        for (int i = 0; i < nums.length - 1; i += 2) {
            int sum = nums[i] + nums[i+1];
            freq.put(sum, freq.getOrDefault(sum, 0) + 1);
        }
        
        int max_operations = 0;
        for (int count : freq.values()) {
            max_operations = Math.max(max_operations, count);
        }
        return max_operations;
    }
}
```

#### C++
```c++
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int maxOperations(vector<int>& nums) {
        if (nums.size() < 2) return 0;
        
        unordered_map<int, int> freq;
        for (int i = 0; i < nums.size() - 1; i += 2) {
            freq[nums[i] + nums[i+1]]++;
        }
        
        int max_operations = 0;
        for (auto& pair : freq) {
            max_operations = max(max_operations, pair.second);
        }
        return max_operations;
    }
};
```

### Conclusion
The solutions use a greedy approach to find the maximum number of operations with the same score by 
leveraging a frequency map. This ensures an efficient and straightforward way to solve the problem 
across different programming languages.