---
id: Special-Array_II
level: Medium
title: Special Array II 
sidebar_label: 3152-Special Array II 
tags: [Arrays, Data Structure, C++, Java, Python]
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem Description

An array is considered special if every pair of its adjacent elements contains two numbers with different parity.

You are given an array of integer nums and a 2D integer matrix queries, where for queries[i] = [fromi, toi] your task is to check that 
subarray nums[fromi..toi] is special or not.

Return an array of booleans answer such that answer[i] is true if nums[fromi..toi] is special.

 
### Examples

**Example 1:**

```
Input: nums = [3,4,1,2,6], queries = [[0,4]]

Output: [false]

Explanation:

The subarray is [3,4,1,2,6]. 2 and 6 are both even.

```

**Example 2:**
```
Input: nums = [4,3,1,6], queries = [[0,2],[2,3]]

Output: [false,true]

Explanation:

The subarray is [4,3,1]. 3 and 1 are both odd. So the answer to this query is false.
The subarray is [1,6]. There is only one pair: (1,6) and it contains numbers with different parity. So the answer to this query is true.
```

### Constraints
- `1 <= nums.length <= 105`
- `1 <= nums[i] <= 105`
- `1 <= queries.length <= 105`
- `queries[i].length == 2`
- `0 <= queries[i][0] <= queries[i][1] <= nums.length - 1`

## Code in Different Languages

### C++

```cpp
#include <vector>
#include <iostream>

using namespace std;

vector<bool> checkSpecialSubarray(vector<int>& nums, vector<vector<int>>& queries) {
    vector<bool> answer;
    for (const auto& query : queries) {
        int from = query[0];
        int to = query[1];
        bool isSpecial = true;
        for (int i = from; i < to; ++i) {
            if (nums[i] % 2 == nums[i + 1] % 2) {
                isSpecial = false;
                break;
            }
        }
        answer.push_back(isSpecial);
    }
    return answer;
}

int main() {
    vector<int> nums = {3, 4, 1, 2, 6};
    vector<vector<int>> queries = {{0, 4}};
    vector<bool> result = checkSpecialSubarray(nums, queries);

    for (bool res : result) {
        cout << (res ? "true" : "false") << " ";
    }

    return 0;
}

```

### Java

```java
import java.util.ArrayList;
import java.util.List;

public class SpecialSubarray {
    public static List<Boolean> checkSpecialSubarray(int[] nums, int[][] queries) {
        List<Boolean> answer = new ArrayList<>();
        for (int[] query : queries) {
            int from = query[0];
            int to = query[1];
            boolean isSpecial = true;
            for (int i = from; i < to; i++) {
                if (nums[i] % 2 == nums[i + 1] % 2) {
                    isSpecial = false;
                    break;
                }
            }
            answer.add(isSpecial);
        }
        return answer;
    }

    public static void main(String[] args) {
        int[] nums = {3, 4, 1, 2, 6};
        int[][] queries = {{0, 4}};
        List<Boolean> result = checkSpecialSubarray(nums, queries);

        for (boolean res : result) {
            System.out.print(res + " ");
        }
    }
}

```

### Python

```python
def check_special_subarray(nums, queries):
    result = []
    for query in queries:
        from_idx, to_idx = query
        is_special = True
        for i in range(from_idx, to_idx):
            if nums[i] % 2 == nums[i + 1] % 2:
                is_special = False
                break
        result.append(is_special)
    return result

# Example usage
nums = [3, 4, 1, 2, 6]
queries = [[0, 4]]
print(check_special_subarray(nums, queries))  # Output: [False]

```

## Complexity Analysis
- **Time Complexity:** $O(q*n)$ where q is no of queries and n is array length.
   > **Reason:** iterating throught the array takes $O(n)$ we do it 'q' times so $O(q*n)$
- **Space Complexity:** $O(q)$
   > **Reason:** space required to store array of size q.
