---
id: longest-unequal-adjacent-groups-subsequence-ii
title: Longest Unequal Adjacent Groups Subsequence II
sidebar_label: 2901 Longest Unequal Adjacent Groups Subsequence II
tags:
  - Array
  - Dynamic Programming
  - LeetCode
  - C++
description: "This is a solution to the Longest Unequal Adjacent Groups Subsequence II problem on LeetCode."
sidebar_position: 2901
---

## Problem Description

You are given a string array `words`, and an array `groups`, both arrays having length `n`.

The Hamming distance between two strings of equal length is the number of positions at which the corresponding characters are different.

You need to select the longest subsequence from an array of indices `[0, 1, ..., n - 1]`, such that for the subsequence denoted as `[i0, i1, ..., ik-1]` having length `k`, the following holds:

1. For adjacent indices in the subsequence, their corresponding groups are unequal, i.e., `groups[ij] != groups[ij+1]`, for each `j` where `0 < j + 1 < k`.
2. `words[ij]` and `words[ij+1]` are equal in length, and the Hamming distance between them is 1, where `0 < j + 1 < k`, for all indices in the subsequence.

Return a string array containing the words corresponding to the indices (in order) in the selected subsequence. If there are multiple answers, return any of them.

**Note**: strings in `words` may be unequal in length.

### Examples

**Example 1:**

```
Input: words = ["bab","dab","cab"], groups = [1,2,2]

Output: ["bab","cab"]

Explanation: A subsequence that can be selected is [0,2].

groups[0] != groups[2]
words[0].length == words[2].length, and the hamming distance between them is 1.
So, a valid answer is [words[0],words[2]] = ["bab","cab"].

Another subsequence that can be selected is [0,1].

groups[0] != groups[1]
words[0].length == words[1].length, and the hamming distance between them is 1.
So, another valid answer is [words[0],words[1]] = ["bab","dab"].

It can be shown that the length of the longest subsequence of indices that satisfies the conditions is 2.
```

**Example 2:**

```
Input: words = ["a","b","c","d"], groups = [1,2,3,4]

Output: ["a","b","c","d"]

Explanation: We can select the subsequence [0,1,2,3].

It satisfies both conditions.

Hence, the answer is [words[0],words[1],words[2],words[3]] = ["a","b","c","d"].

It has the longest length among all subsequences of indices that satisfy the conditions.

Hence, it is the only answer.
```

### Constraints
- `1 <= n == words.length == groups.length <= 1000`
- `1 <= words[i].length <= 10`
- `1 <= groups[i] <= n`
- `words consists of distinct strings.`
- `words[i] consists of lowercase English letters.`

### Approach

To solve this problem, we can use a greedy approach to construct the longest alternating subsequence. The idea is to start with the first element and then continue adding elements to the subsequence only if the current element has a different group value than the previous element in the subsequence.

This approach ensures that we build the longest possible alternating subsequence in a single pass through the array, making it both simple and efficient.

### Complexity

- **Time complexity**: $O(n)$, where `n` is the length of the `words` array. This is because we are iterating through the array once.
- **Space complexity**: $O(n)$, for storing the result subsequence.

#### C++

```cpp
class Solution {
public:

    bool isGood(string &s1, string &s2)
    {
        int diff = 0;
        for(int i=0; s1[i]; i++)
        {
            if(s1[i] != s2[i])
            {
                if(diff)
                    return false;
                diff++;
            }  
        }
        return true;
    }

    vector<string> getWordsInLongestSubsequence(int n, vector<string>& words, vector<int>& groups) {
        vector<string> res;
        vector<int> lis(n, 1), parent(n);
        int mx_index = 0;
        
        for(int i=0; i<n; i++)
        {
            parent[i] = i;
            int sz = words[i].size();
            for(int j=i-1; j>=0; j--)
            {
                if(groups[j] != groups[i] && sz == (int)words[j].size() && isGood(words[i], words[j]) )
                {
                    if(lis[j] + 1 > lis[i])
                    {
                        lis[i] = lis[j] + 1;
                        parent[i] = j;
                    }
                }
            }
            if(lis[i] > lis[mx_index])
                mx_index = i;
            
            //cout << lis[i] <<" ";
        }
        //cout << endl;
        
        int cur = mx_index;
        while(parent[cur] != cur)
        {
            res.push_back(words[cur]);
            cur = parent[cur];
        }
        res.push_back(words[cur]);

        reverse(res.begin(), res.end());
        return res;
    }
};
```
