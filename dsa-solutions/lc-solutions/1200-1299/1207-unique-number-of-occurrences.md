---
id: unique-number-of-occurrences
title: Unique Number of Occurrences
sidebar_label: 1207. Unique Number of Occurrences
tags:
- Array
- Hash Table
description: "Solution to Leetcode 1207. Unique Number of Occurrences"
---

## Problem Description

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
 
### Examples

**Example 1:**

```
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
```

**Example 2:**

```
Input: arr = [1,2]
Output: false
```



### Constraints
- `1 <= arr.length <= 1000`
- `-1000 <= arr[i] <= 1000`

### Approach 
1. Sort the input array arr to group identical elements together.
2. Traverse the sorted array, counting occurrences of each element.
3. Store the counts in a separate vector v.
4. Sort the vector v to make it easier to check for duplicates.
5. Iterate through v and check if adjacent elements are equal. If so, return false.
6. If the loop completes, it means all counts are unique, and the function returns true.

### Complexity

Time complexity: $O(n)$
Space complexity: $O(n)$

### Solution

#### Code in Different Languages

#### C++

 ```cpp
class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
      unordered_map<int,int>freq;
      for(auto x: arr){
          freq[x]++;
      }  
      unordered_set<int>s;
      for(auto x: freq){
          s.insert(x.second);
      }
      return freq.size()==s.size();
    }
};
 ```

#### JAVA

```JAVA
class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int x : arr) {
            freq.put(x, freq.getOrDefault(x, 0) + 1);
        }

        Set<Integer> s = new HashSet<>();
        for (int x : freq.values()) {
            s.add(x);
        }

        return freq.size() == s.size();
    }
}
```

#### PYTHON

```python
class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        freq = {}
        for x in arr:
            freq[x] = freq.get(x, 0) + 1

        return len(freq) == len(set(freq.values()))
```



### Complexity Analysis

- Time Complexity: $O(n)$ 

- Space Complexity: $O(n)$ 

### References

- **LeetCode Problem**: Unique Number of Occurrences