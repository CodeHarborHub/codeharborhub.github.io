---
id: contains-duplicate-II
title: Contains Duplicate II(LeetCode)
sidebar_label: 0219-Contains Duplicate II
tags:
  - Array
  - Hash Table
  - Sliding Window
description: Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
---

## Problem Statement

Given an integer array `nums` and an integer `k`, return `true` if there are two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

### Examples

**Example 1:**

```plaintext
Input: nums = [1,2,3,1], k = 3
Output: true
```

**Example 2:**

```plaintext
Input: nums = [1,0,1,1], k = 1
Output: true
```

**Example 3:**

```plaintext
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

### Constraints

- `1 <= nums.length <= 105`
- `109 <= nums[i] <= 109`
- `0 <= k <= 105`

## Solution

We can solve this problem using a HashSet or a HashMap to keep track of the elements within the sliding window of size k. Here, we discuss Java, C++, Python, and JavaScript solutions for this problem.

### Approach 1: Java Solution Using HashSet

#### Algorithm

1. Initialize an empty HashSet.
2. Traverse the array with a loop.
3. For each element:
* If it is already in the HashSet, return 'true'.
* Add the element to the HashSet.
* If the HashSet size exceeds 'k', remove the oldest element.
4. If no duplicate is found within the given range, return 'false'.

#### Implementation

```Java
class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        if (nums == null || nums.length < 2 || k == 0) return false;
        HashSet<Integer> hset = new HashSet<Integer>();
        for (int j = 0; j < nums.length; j++) {
            if (!hset.add(nums[j])) return true;
            if (hset.size() >= k + 1) {
                hset.remove(nums[j - k]);
            }
        }
        return false;
    }
}
```

### Complexity Analysis

- **Time complexity**: O(N)
- **Space complexity**: O(k)

### Approach 2: C++ Solution Using Unordered Set

#### Algorithm

1. Initialize an unordered set.
2. Traverse the array with a loop.
3. For each element:
* Check if it is in the set. If yes, return 'true'.
* Insert the element into the set.
* If the set size exceeds 'k', remove the oldest element.
4. If no duplicate is found, return 'false'.
  
#### Implementation 

```C++
class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        unordered_set<int> hset;
        for (int idx = 0; idx < nums.size(); idx++) {
            if (hset.count(nums[idx])) return true;
            hset.insert(nums[idx]);
            if (hset.size() > k) {
                hset.erase(nums[idx - k]);
            }
        }
        return false;
    }
};
```

### Approach 3: Python Solution Using Dictionary

#### Algorithm

1. Initialize an empty dictionary.
2. Traverse the array with a loop.
3. For each element:
* Check if the element exists in the dictionary and the difference between the current index and the stored index
  is less than or equal to 'k'. If yes, return 'true'.
* Update the dictionary with the current element and its index.
4. If no duplicate is found, return 'false'.

#### Implementation 

```Python
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        hset = {}
        for idx in range(len(nums)):
            if nums[idx] in hset and abs(idx - hset[nums[idx]]) <= k:
                return True
            hset[nums[idx]] = idx
        return False
```

### Complexity Analysis

- **Time complexity**: O(N)
- **Space complexity**: O(k)

### Approach 4: JavaScript Solution Using HashMap

#### Algorithm

1. Initialize an empty Map.
2. Traverse the array with a loop.
3. For each element:
* Check if it exists in the map and the difference between indices is less than or equal to 'k'. If yes, return
  'true'.
* Update the map with the current element and its index.
4. If no duplicate is found, return 'false'.

#### Implementation 

```Javascript
var containsNearbyDuplicate = function(nums, k) {
    const hasmap = new Map();
    for (let idx = 0; idx < nums.length; idx++) {
        if (hasmap.has(nums[idx]) && idx - hasmap.get(nums[idx]) <= k) {
            return true;
        }
        hasmap.set(nums[idx], idx);
    }
    return false;
};
```

### Complexity Analysis

- **Time complexity**: O(N)
- **Space complexity**: O(k)


### Conclusion

All four solutions utilize a similar strategy of keeping track of the elements within a sliding window of size 'k'. 
This ensures that we can efficiently determine if any two indices have the same value and are within 'k' distance of 
each other. Each solution is optimal with a time complexity of O(n) and a space complexity of O(k).
