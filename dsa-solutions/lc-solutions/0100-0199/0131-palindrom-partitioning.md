---
id: palindrom-partitioning
title: Palindrom Partitioning
sidebar_label: 0131-Palindrom partitioning
tags:
  - string
  - DP
  - BackTracking
description: "This is a solution to the Palindrom Partitioning problem on LeetCode."
---

## Problem Description
Given a string s, partition s such that every 
substring
 of the partition is a 
palindrome
. Return all possible palindrome partitioning of s.

 
### Examples

**Example 1:**

```
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
```

**Example 2:**
```
Input: s = "a"
Output: [["a"]]
```

### Constraints

- `1 <= s.length <= 16`
- s contains only lowercase English letters.

---

## Solution for Candy Distribution Problem
### Intuition

We can use backtracking to solve this problem. Iterate over the string, and if a substring starting from the `beg` index to the current length is a palindrome, we can add it to a temporary list and move the `beg` index to the next pointer.

### Approach

Here’s how you tackle this:

1. **Maintain a `beg` Index**: This index represents the starting index and the length of the substring. If this substring is a palindrome, push it to a temporary array `curr`.
2. **Increase the Length**: Expand the length to get other combinations starting from this index.
3. **Check for Palindromes**: If you reach the end of the original string, it means all substrings included are palindromes, so you can add this combination to your result set.




#### Code in Different Languages

### C++
```c++
class Solution {
public:
    int n;
    vector<vector<string>> partition(string s) {
        n=s.size();
        vector<vector<string>> res;
        vector<string> curr;
        backTrack(s,0,1,curr,res);
        return res;
    }

    void backTrack(string& s, int beg, int len, vector<string> curr, vector<vector<string>>& res) {
        if(beg==n) {
            res.push_back(curr);
            return;
        }
        if((beg+len)>n)return;


        backTrack(s,beg,len+1,curr,res);

        if(isPallindrome(s.substr(beg, len))) {
            curr.push_back(s.substr(beg, len));
            backTrack(s, beg+len, 1, curr, res);
        }
    }

    bool isPallindrome(string s){
        int beg=0;int end = s.size()-1;
        while(beg<end){
            if(s[beg]!=s[end])return false;
            beg++;end--;
        }
        return true;
    }
};
```

### Pyhton 
```python
class Solution(object):
    def partition(self, s):
        self.n = len(s)
        res = []
        curr = []
        self.backTrack(s, 0, 1, curr, res)
        return res

    def backTrack(self, s, beg, len, curr, res):
        if beg == self.n:
            res.append(curr[:])
            return
        if beg + len > self.n:
            return

        self.backTrack(s, beg, len + 1, curr, res)

        if self.isPalindrome(s[beg:beg + len]):
            curr.append(s[beg:beg + len])
            self.backTrack(s, beg + len, 1, curr, res)
            curr.pop()  # Remove the last element to backtrack

    def isPalindrome(self, s):
        beg, end = 0, len(s) - 1
        while beg < end:
            if s[beg] != s[end]:
                return False
            beg += 1
            end -= 1
        return True
```



### Complexity

- **Time complexity**: O((2^n) * n), where `n` is the length of the string. We are diverging into two branches at each step, and the palindrome check takes O(n).
- **Space complexity**: O(2^n), where space is used for the stack in backtracking.
