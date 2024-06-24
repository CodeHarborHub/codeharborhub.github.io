---
id: partition-problem
title: Partition Problem using Dynamic Programming
sidebar_label: Partition Problem
tags: [python, java, c++, javascript, programming, algorithms, dynamic programming, tutorial, in-depth]
description: In this tutorial, we will learn about the Partition Problem and its solution using Dynamic Programming in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Partition Problem using Dynamic Programming

The Partition Problem is a classic problem in computer science where the goal is to determine if a given set can be partitioned into two subsets with equal sum.

## Problem Statement

Given a set of integers, determine if it can be partitioned into two subsets such that the sum of elements in both subsets is the same.

### Intuition

The problem can be solved efficiently using dynamic programming by breaking it down into subproblems. The idea is to use a boolean DP table where `dp[i][j]` indicates whether a subset of the first `i` numbers can sum up to `j`.

## Dynamic Programming Approach

Using dynamic programming, we fill the table based on the recurrence relation:
- If including the current element in the subset is possible, update the DP table accordingly.

## Pseudocode for Partition Problem using DP

#### Initialize:

```markdown
sum = sum of all elements
if sum is odd, return false

target = sum / 2
dp = [False] * (target + 1)
dp[0] = True

for num in nums:
    for j in range(target, num - 1, -1):
        dp[j] = dp[j] or dp[j - num]

return dp[target]
```

### Example Output:

Given the set:
- `nums = [1, 5, 11, 5]`

The set can be partitioned into two subsets with equal sum.

### Output Explanation:

The subsets `{1, 5, 5}` and `{11}` both sum up to `11`.

Therefore, the output is: `The set can be partitioned into two subsets with equal sum.`

## Implementing Partition using DP

### Python Implementation

```python
def can_partition(nums):
    total_sum = sum(nums)
    if total_sum % 2 != 0:
        return False
    
    target = total_sum // 2
    dp = [False] * (target + 1)
    dp[0] = True
    
    for num in nums:
        for j in range(target, num - 1, -1):
            dp[j] = dp[j] or dp[j - num]
    
    return dp[target]

nums = [1, 5, 11, 5]
print("The set can be partitioned into two subsets with equal sum." if can_partition(nums) else "The set cannot be partitioned into two subsets with equal sum.")
```

### Java Implementation

```java
public class PartitionProblem {
    public static boolean canPartition(int[] nums) {
        int totalSum = 0;
        for (int num : nums) {
            totalSum += num;
        }
        if (totalSum % 2 != 0) {
            return false;
        }
        
        int target = totalSum / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        
        for (int num : nums) {
            for (int j = target; j >= num; j--) {
                dp[j] = dp[j] || dp[j - num];
            }
        }
        
        return dp[target];
    }

    public static void main(String[] args) {
        int[] nums = {1, 5, 11, 5};
        System.out.println("The set can be partitioned into two subsets with equal sum." if canPartition(nums) else "The set cannot be partitioned into two subsets with equal sum.");
    }
}
```
### C++ Implementation

```cpp
#include <iostream>
#include <vector>
using namespace std;

bool canPartition(vector<int>& nums) {
    int totalSum = 0;
    for (int num : nums) {
        totalSum += num;
    }
    if (totalSum % 2 != 0) {
        return false;
    }
    
    int target = totalSum / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    
    for (int num : nums) {
        for (int j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num];
        }
    }
    
    return dp[target];
}

int main() {
    vector<int> nums = {1, 5, 11, 5};
    cout << (canPartition(nums) ? "The set can be partitioned into two subsets with equal sum." : "The set cannot be partitioned into two subsets with equal sum.") << endl;
    return 0;
}
```

### JavaScript Implementation

```javascript
function canPartition(nums) {
    let totalSum = nums.reduce((a, b) => a + b, 0);
    if (totalSum % 2 !== 0) {
        return false;
    }
    
    let target = totalSum / 2;
    let dp = new Array(target + 1).fill(false);
    dp[0] = true;
    
    for (let num of nums) {
        for (let j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num];
        }
    }
    
    return dp[target];
}

let nums = [1, 5, 11, 5];
console.log(canPartition(nums) ? "The set can be partitioned into two subsets with equal sum." : "The set cannot be partitioned into two subsets with equal sum.");
```

## Complexity Analysis

- Time Complexity: $O(n \times \text{sum})$, where n is the number of elements in the set and sum is the total sum of the elements.
- Space Complexity: $O(\text{sum})$, for storing the DP table.

## Conclusion

Dynamic programming provides an efficient solution for the Partition Problem by breaking it into subproblems and storing intermediate results. This technique can be extended to solve other problems with overlapping subproblems and optimal substructure properties.