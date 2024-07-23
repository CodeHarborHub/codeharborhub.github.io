---
id: maximum-xor-with-an-element-from-array
title: Maximum XOR With an Element From Array
sidebar_label: 1707 - Maximum XOR With an Element From Array
tags: [Trie, Bit Manipulation, Sorting, C++]
description: Solve the problem of finding the maximum bitwise XOR of an element with given elements that do not exceed a specified value using trie and bit manipulation.
---

## Problem Statement

### Problem Description

You are given an array `nums` consisting of non-negative integers. You are also given a `queries` array, where `queries[i] = [xi, mi]`.

The answer to the ith query is the maximum bitwise XOR value of `xi` and any element of `nums` that does not exceed `mi`. In other words, the answer is `max(nums[j] XOR xi)` for all `j` such that `nums[j] <= mi`. If all elements in `nums` are larger than `mi`, then the answer is -1.

Return an integer array `answer` where `answer.length == queries.length` and `answer[i]` is the answer to the ith query.

### Example

**Example 1:**
```
Input: nums = [0, 1, 2, 3, 4], queries = [[3, 1], [1, 3], [5, 6]]
Output: [3, 3, 7]
```


**Explanation:**
1. 0 and 1 are the only two integers not greater than 1. 0 XOR 3 = 3 and 1 XOR 3 = 2. The larger of the two is 3.
2. 1 XOR 2 = 3.
3. 5 XOR 2 = 7.

**Example 2:**
```
Input: nums = [5, 2, 4, 6, 6, 3], queries = [[12, 4], [8, 1], [6, 3]]
Output: [15, -1, 5]
```

### Constraints

- 1 &lt;= `nums.length`, `queries.length` &lt;= 10^5
- `queries[i].length == 2`
- 0 &lt;= `nums[j]`, `xi`, `mi` &lt;= 10^9

## Solution

### Intuition

To efficiently solve this problem, we can use a combination of sorting and Trie (prefix tree) to manage and query the maximum XOR.

1. **Sort `nums` and `queries`**: Sort `nums` and `queries` based on the second element of each query (`mi`). This allows us to process each query in increasing order of `mi`, ensuring that we only consider valid `nums` elements for each query.

2. **Use a Trie for Maximum XOR**: We will maintain a Trie of the binary representations of the numbers. For each query, we will insert numbers into the Trie that are less than or equal to `mi`, and then compute the maximum XOR for the current `xi`.

### Time Complexity and Space Complexity Analysis

- **Time Complexity**:
  - Sorting `nums` and `queries` takes $O(n \log n)$ and $O(q \log q)$ respectively.
  - Inserting each number into the Trie takes $O(31)$ for each number (as the maximum number of bits is 31).
  - Finding the maximum XOR for each query takes $O(31)$ for each query.
  - Overall time complexity is $O((n + q) \log(n + q))$.

- **Space Complexity**:
  - The Trie will store up to `n` numbers, each taking $O(31)$ space.
  - The space complexity is $O(n \cdot 31)$.

### Code

#### C++

```cpp
class Solution {
    struct TrieNode {
        TrieNode* children[2] = {};
    };

    TrieNode* root = new TrieNode();
    
    void insert(int num) {
        TrieNode* node = root;
        for (int i = 30; i >= 0; --i) {
            int bit = (num >> i) & 1;
            if (!node->children[bit]) {
                node->children[bit] = new TrieNode();
            }
            node = node->children[bit];
        }
    }
    
    int getMaxXOR(int num) {
        TrieNode* node = root;
        int maxXOR = 0;
        for (int i = 30; i >= 0; --i) {
            int bit = (num >> i) & 1;
            if (node->children[1 - bit]) {
                maxXOR |= (1 << i);
                node = node->children[1 - bit];
            } else {
                node = node->children[bit];
            }
        }
        return maxXOR;
    }

public:
    vector<int> maximizeXor(vector<int>& nums, vector<vector<int>>& queries) {
        sort(nums.begin(), nums.end());
        vector<pair<int, pair<int, int>>> q;
        int qLen = queries.size();
        for (int i = 0; i < qLen; ++i) {
            q.push_back({queries[i][1], {queries[i][0], i}});
        }
        sort(q.begin(), q.end());

        vector<int> result(qLen);
        int idx = 0;
        for (const auto& [mi, xi_idx] : q) {
            int xi = xi_idx.first;
            int queryIdx = xi_idx.second;
            while (idx < nums.size() && nums[idx] <= mi) {
                insert(nums[idx]);
                ++idx;
            }
            result[queryIdx] = idx ? getMaxXOR(xi) : -1;
        }
        return result;
    }
};
```
