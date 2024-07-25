---
id: permutations
title: Permutations(LeetCode)
sidebar_label: 0046-Permutations
tags:
  - Array
  - Backtracking
description: Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.

sidebar_position: 46
---

## Problem Statement

Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.

### Examples

**Example 1:**

```plaintext
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

**Example 2:**

```plaintext
Input: nums = [0,1]
Output: [[0,1],[1,0]]
```

**Example 3:**

```plaintext
Input: nums = [1]
Output: [[1]]
```

### Constraints:

- `1 <= nums.length <= 6`
- `10 <= nums[i] <= 10`
- All the integers of `nums` are unique.

## Solution

In this problem, we aim to find all the possible permutations from an array of distinct integers. We explore two main approaches: Recursive approach and Backtracking approach.

### Approach 1: Recursive
We have given the nums array, so we will declare an ans vector of vector that will store all the permutations also declare a data structure.

Declare a map and initialize it to zero and call the recursive function

Base condition :

When the data structure's size is equal to n(size of nums array)  then it is a permutation and stores that permutation in our ans, then returns it.

Recursion:

Run a for loop starting from 0 to nums.size() - 1. Check if the frequency of i is unmarked, if it is unmarked then it means it has not been picked and then we pick. And make sure it is marked as picked.

Call the recursion with the parameters to pick the other elements when we come back from the recursion make sure you throw that element out. And unmark that element in the map.

#### Implementation

```C++
class Solution {
  private:
    void recurPermute(vector < int > & ds, vector < int > & nums, vector < vector < int >> & ans, int freq[]) {
      if (ds.size() == nums.size()) {
        ans.push_back(ds);
        return;
      }
      for (int i = 0; i < nums.size(); i++) {
        if (!freq[i]) {
          ds.push_back(nums[i]);
          freq[i] = 1;
          recurPermute(ds, nums, ans, freq);
          freq[i] = 0;
          ds.pop_back();
        }
      }
    }
  public:
    vector < vector < int >> permute(vector < int > & nums) {
      vector < vector < int >> ans;
      vector < int > ds;
      int freq[nums.size()];
      for (int i = 0; i < nums.size(); i++) freq[i] = 0;
      recurPermute(ds, nums, ans, freq);
      return ans;
    }
};
```

```Java
class Solution {
    private void recurPermute(int index, int[] nums, List < List < Integer >> ans) {
        if (index == nums.length) {
            // copy the ds to ans
            List < Integer > ds = new ArrayList < > ();
            for (int i = 0; i < nums.length; i++) {
                ds.add(nums[i]);
            }
            ans.add(new ArrayList < > (ds));
            return;
        }
        for (int i = index; i < nums.length; i++) {
            swap(i, index, nums);
            recurPermute(index + 1, nums, ans);
            swap(i, index, nums);
        }
    }
    private void swap(int i, int j, int[] nums) {
        int t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }
    public List < List < Integer >> permute(int[] nums) {
        List < List < Integer >> ans = new ArrayList < > ();
        recurPermute(0, nums, ans);
        return ans;
    }
};
```

### Complexity Analysis

- **Time complexity**: N! x N
- **Space complexity**: O(N)

### Approach 2: With Backtracking

We have given the nums array, so we will declare an ans vector of vector that will store all the permutations.

Call a recursive function that starts with zero, nums array, and ans vector.

Declare a map and initialize it to zero and call the recursive function

Base condition:

Whenever the index reaches the end take the nums array and put it in ans vector and return.

Recursion:

Go from index to n - 1 and swap once the swap has been done call recursion for the next state. After coming back from the recursion make sure you re-swap it because, for the next element, the swap will not take place.
   
#### Implementation 

```C++
class Solution {
  private:
    void recurPermute(int index, vector < int > & nums, vector < vector < int >> & ans) {
      if (index == nums.size()) {
        ans.push_back(nums);
        return;
      }
      for (int i = index; i < nums.size(); i++) {
        swap(nums[index], nums[i]);
        recurPermute(index + 1, nums, ans);
        swap(nums[index], nums[i]);
      }
    }
  public:
    vector < vector < int >> permute(vector < int > & nums) {
      vector < vector < int >> ans;
      recurPermute(0, nums, ans);
      return ans;
    }
};
```

```Java
class Solution {
    private void recurPermute(int index, int[] nums, List < List < Integer >> ans) {
        if (index == nums.length) {
            // copy the ds to ans
            List < Integer > ds = new ArrayList < > ();
            for (int i = 0; i < nums.length; i++) {
                ds.add(nums[i]);
            }
            ans.add(new ArrayList < > (ds));
            return;
        }
        for (int i = index; i < nums.length; i++) {
            swap(i, index, nums);
            recurPermute(index + 1, nums, ans);
            swap(i, index, nums);
        }
    }
    private void swap(int i, int j, int[] nums) {
        int t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }
    public List < List < Integer >> permute(int[] nums) {
        List < List < Integer >> ans = new ArrayList < > ();
        recurPermute(0, nums, ans);
        return ans;
    }
};
```

### Complexity Analysis

- **Time complexity**: O(N! X N)
- **Space complexity**: O(1)


### Conclusion

1. Recursive DP with Memoization: Efficiently avoids redundant calculations but has higher time complexity.
2. Iterative DP with Tabulation: Iteratively solves for each position but has quadratic time complexity.
3. Greedy BFS: Provides the most optimal solution with linear time complexity and constant space, making it the best approach for this problem.
