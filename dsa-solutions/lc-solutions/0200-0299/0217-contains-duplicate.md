---
id: contains-duplicate
title: Contains Duplicate(LeetCode)
sidebar_label: 0217-Contains Duplicate
tags:
  - Array
  - Hash Table
  - Sorting
description: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
---

## Problem Statement

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

### Examples

**Example 1:**

```plaintext
Input: nums = [1,2,3,1]
Output: true
```

**Example 2:**

```plaintext
Input: nums = [1,2,3,4]
Output: false
```

**Example 3:**

```plaintext
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

### Constraints

- `1 <= nums.length <= 105`
- `-109 <= nums[i] <= 109`

## Solution

When tasked with checking for duplicates in an array, there are several approaches to consider. Below, we detail four different methods, from the simplest brute force solution to more optimized approaches using sorting and hash-based structures.

### Approach 1: Brute Force

#### Algorithm

1. Iterate through the array with an outer loop.
2. For each element in the outer loop, iterate through the array with an inner loop starting from the next element.
3. Compare the current element of the outer loop with the current element of the inner loop.
4. If a match is found, return true.
5. If no duplicates are found after all iterations, return false.

#### Implementation

```C++
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        int n = nums.size();
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] == nums[j])
                    return true;
            }
        }
        return false;
    }
};
```

### Complexity Analysis

- **Time complexity**: $O(N^2)$
- **Space complexity**: $O(1)$

### Approach 2: Sorting

#### Algorithm

1. Sort the array in ascending order.
2. Iterate through the sorted array.
3. Compare each element with its next element.
4. If a match is found, return true.
5. If no duplicates are found after all comparisons, return false.
  
#### Implementation 

```C++
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n = nums.size();
        for (int i = 1; i < n; i++) {
            if (nums[i] == nums[i - 1])
                return true;
        }
        return false;
    }
};
```

### Complexity Analysis

- **Time complexity**: $O(NlogN)$
- **Space complexity**: $O(1)$

### Approach 3: Hash Set

#### Algorithm

1. Create an empty hash set.
2. Iterate through the array.
3. For each element, check if it exists in the hash set.
4. If it exists, return true.
5. If it does not exist, add the element to the hash set.
6. If no duplicates are found after all iterations, return false.

#### Implementation 

```C++
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> seen;
        for (int num : nums) {
            if (seen.count(num) > 0)
                return true;
            seen.insert(num);
        }
        return false;
    }
};
```

### Complexity Analysis

- **Time complexity**: $O(N)$
- **Space complexity**: $O(N)$

### Approach 4: Hash Map

#### Algorithm

1. Create an empty hash map.
2. Iterate through the array.
3. For each element, check if it exists in the hash map with a count greater than or equal to 1.
4. If it exists, return true.
5.If it does not exist, add the element to the hash map and set its count to 1.
6. If no duplicates are found after all iterations, return false.

#### Implementation 

```C++
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_map<int, int> seen;
        for (int num : nums) {
            if (seen[num] >= 1)
                return true;
            seen[num]++;
        }
        return false;
    }
};
```

### Complexity Analysis

- **Time complexity**: $O(N)$
- **Space complexity**: $O(N)$


### Conclusion

For checking duplicates in an array, the most efficient approaches are those utilizing hash-based data structures, such as hash sets or hash maps. These methods provide linear time complexity and are suitable for large datasets. While the brute force and sorting approaches are simpler, they are less efficient and may not be practical for larger arrays.
