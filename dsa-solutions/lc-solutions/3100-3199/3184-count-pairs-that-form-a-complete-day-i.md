---
id: search-in-a-binary-search-tree
title: Count Pairs That Form a Complete Day I
sidebar_label: 3184 - Count Pairs That Form a Complete Day I
tags:
   - Array
   - Hashtable
   - Counting
description: "This is a solution to the Search in a Binary Search Tree problem on LeetCode."
---
## Problem Description

Given an integer array `hours` representing times in hours, return an integer denoting the number of pairs `(i, j)` where `i < j` and `hours[i] + hours[j]` forms a complete day. A complete day is defined as a time duration that is an exact multiple of 24 hours.

### Example

**Example 1:**

```
Input: hours = [12, 12, 30, 24, 24]
Output: 2

Explanation:
The pairs of indices that form a complete day are (0, 1) and (3, 4).
```

**Example 2:**

```
Input: hours = [72, 48, 24, 3]
Output: 3

Explanation:
The pairs of indices that form a complete day are (0, 1), (0, 2), and (1, 2).
```

### Constraints

- `1 <= hours.length <= 100`
- `1 <= hours[i] <= 10^9`

## Solution Approach

### Intuition

To efficiently find pairs of hours that sum up to a multiple of 24, we can utilize a hash map to keep track of the remainders when the hours are divided by 24. This allows us to quickly check if there exists a previous hour that complements the current hour to form a complete day.

### Algorithm

1. Initialize a hash map to keep track of remainders and their counts.
2. For each hour in the array:
   - Compute its remainder when divided by 24.
   - The target remainder needed to form a complete day with the current hour is `(24 - remainder) % 24`.
   - Check if this target remainder exists in the hash map and count the valid pairs.
   - Update the hash map with the current remainder.
3. Return the total count of valid pairs.

### Complexity

- Time Complexity: $O(N)$, where N is the number of hours.
- Space Complexity: $O(1)$, as the hash map will have at most 24 entries.

## Solution Implementation

### Code (Python):

```python
from collections import defaultdict

def countCompleteDayPairs(hours):
    remainder_count = defaultdict(int)
    complete_day_pairs = 0
    
    for hour in hours:
        remainder = hour % 24
        target_remainder = (24 - remainder) % 24
        complete_day_pairs += remainder_count[target_remainder]
        remainder_count[remainder] += 1
    
    return complete_day_pairs

```

### Code (C++):

```cpp
#include <vector>
#include <unordered_map>
using namespace std;

int countCompleteDayPairs(vector<int>& hours) {
    unordered_map<int, int> remainder_count;
    int complete_day_pairs = 0;
    
    for (int hour : hours) {
        int remainder = hour % 24;
        int target_remainder = (24 - remainder) % 24;
        complete_day_pairs += remainder_count[target_remainder];
        remainder_count[remainder]++;
    }
    
    return complete_day_pairs;
}

```

### Code (Java):

```java
import java.util.HashMap;
import java.util.Map;

public class CompleteDayPairs {
    public int countCompleteDayPairs(int[] hours) {
        Map<Integer, Integer> remainderCount = new HashMap<>();
        int completeDayPairs = 0;
        
        for (int hour : hours) {
            int remainder = hour % 24;
            int targetRemainder = (24 - remainder) % 24;
            completeDayPairs += remainderCount.getOrDefault(targetRemainder, 0);
            remainderCount.put(remainder, remainderCount.getOrDefault(remainder, 0) + 1);
        }
        
        return completeDayPairs;
    }
}
```

### Code (JavaScript):

```javascript
function countCompleteDayPairs(hours) {
    const remainderCount = new Map();
    let completeDayPairs = 0;
    
    for (const hour of hours) {
        const remainder = hour % 24;
        const targetRemainder = (24 - remainder) % 24;
        completeDayPairs += (remainderCount.get(targetRemainder) || 0);
        remainderCount.set(remainder, (remainderCount.get(remainder) || 0) + 1);
    }
    
    return completeDayPairs;
}

```
