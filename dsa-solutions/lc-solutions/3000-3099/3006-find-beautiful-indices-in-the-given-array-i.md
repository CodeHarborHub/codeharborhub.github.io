---
id: find-beautiful-indices-in-the-given-array-i
title: Find Beautiful Indices in the Given Array I
sidebar_label: 3006 -Find Beautiful Indices in the Given Array I
tags:
  - Two pointer
  - String
  - Binary Search
  - Rolling Hash
  - String Matching
  - Hash Function
description: "This is a solution to the Find Beautiful Indices in the Given Array I problem on LeetCode."
---

## Problem Description

You are given a 0-indexed string s, a string a, a string b, and an integer k.

An index i is beautiful if:

- $0 \leq i \leq \text{s.length} - \text{a.length}$
- $s[i..(i + \text{a.length} - 1)] == a$
- There exists an index j such that:
- $0 \leq j \leq \text{s.length} - \text{b.length}$
- $s[j..(j + \text{b.length} - 1)] == b$
- $|j - i| \leq k$
  Return the array that contains beautiful indices in sorted order from smallest to largest.

### Examples

**Example 1:**

```
Input: s = "isawsquirrelnearmysquirrelhouseohmy", a = "my", b = "squirrel", k = 15
Output: [16,33]
Explanation: There are 2 beautiful indices: [16,33].
- The index 16 is beautiful as s[16..17] == "my" and there exists an index 4 with s[4..11] == "squirrel" and |16 - 4| <= 15.
- The index 33 is beautiful as s[33..34] == "my" and there exists an index 18 with s[18..25] == "squirrel" and |33 - 18| <= 15.
Thus we return [16,33] as the result.

```

**Example 2:**

```
Input: s = "abcd", a = "a", b = "a", k = 4
Output: [0]
Explanation: There is 1 beautiful index: [0].
- The index 0 is beautiful as s[0..0] == "a" and there exists an index 0 with s[0..0] == "a" and |0 - 0| <= 4.
Thus we return [0] as the result.

```

### Constraints

- `1 <= k <= s.length <= 105`
- `1 <= a.length, b.length <= 10`

## Solution For the Problem Find Beautiful Indices in the Given Array I

### Intuition

Basically the problem statement suggest that we need to find the index of string a matching in string s and then check if there is any index j which is matching with b in s and `abs(i - j) <= k`.
So to find the matching index need calculate the longest prefix which is suffix array ( LPS array ) and in that if the lps[i] matches with pattern string length then we found a match - KMP algo.
If you don't know KMP algo for pattern matching then first go through it then come back to solution.

### Approach

Get index of the matched pattern for the string a - lets call it v1
Get index of the matched pattern for the string b - lets call it v2
Check for possible combination of i & j in the v1 and v2.
to do so we need to check if the abs(i - j). If so then simple add it to answer.
If `v1[i] > v2[j]&& abs( i- j) > k` then keep moving pointer j till `v1[i] > v2[j]`
Check again if abs(i - j) or not. If it is less, then add it to ans

### Solution Code

#### Python

```py
  class Solution:
    def beautifulIndices(self, s: str, a: str, b: str, k: int) -> List[int]:
        f1=[]
        i=0
        j=0
        while(i<len(s)):
            aa=i
            while(j<len(a) and aa<len(s) and s[aa]==a[j]):
                j+=1
                aa+=1
            if(j==len(a)):
                f1.append(i)
            j=0
            i+=1
        i=0
        j=0
        f2=[]
        while(i<len(s)):
            aa=i
            while(j<len(b) and aa<len(s) and s[aa]==b[j]):
                j+=1
                aa+=1
            if(j==len(b)):
                f2.append(i)
            j=0
            i+=1
        ans=[]

        for i in f1:
            b1=bisect.bisect_right(f2,i+k)
            b2=bisect.bisect_left(f2,i-k)
            if(b1!=b2):
                ans.append(i)
        return ans


```

#### Java

```java
void getPatternMatchingIndex(String s, String a, List<Integer> v){
    String t = a + "@" + s;
    List<Integer> lps = new ArrayList<>();
    lps.add(0);
    for(int i = 1; i < t.length(); ++i){
        int ind = lps.get(i - 1);
        while(ind > 0 && t.charAt(ind) != t.charAt(i)) { ind = lps.get(ind - 1); }
        lps.add((t.charAt(ind) == t.charAt(i))?ind + 1 : 0);
    }
    for(int i = 0; i < lps.size(); ++i){
        if(lps.get(i) == a.length()) v.add(i - 2*a.length());
    }
}

public List<Integer> beautifulIndices(String s, String a, String b, int k) {
    List<Integer> ans = new ArrayList<>();
    List<Integer> v1 = new ArrayList<>();
    List<Integer> v2 = new ArrayList<>();
    getPatternMatchingIndex(s, a, v1);
    getPatternMatchingIndex(s, b, v2);
    for(int i = 0, j = 0; i < v1.size(); ++i){
        while(j < v2.size() && v1.get(i) > v2.get(j) && Math.abs(v1.get(i) - v2.get(j)) > k) j++;
        if(j < v2.size() && Math.abs(v1.get(i) - v2.get(j)) <= k) ans.add(v1.get(i));
    }
    return ans;
}

```

#### C++

```cpp
void getPatternMatchingIndex(string& s, string& a, vector<int>& v){
    string t = a + "@" + s;
    vector<int> lps(1, 0);
    for(int i = 1; i < t.size(); ++i){
        int ind = lps[i-1];
        while(ind > 0 && t[ind] != t[i]) { ind = lps[ind-1]; }
        lps.push_back((t[ind] == t[i])?ind + 1 : 0);
    }
    for(int i = 0; i < lps.size(); ++i){
        if(lps[i] == a.size()) v.push_back(i - 2*a.size());
    }
}

vector<int> beautifulIndices(string s, string a, string b, int k) {
    vector<int> ans, v1, v2;
    getPatternMatchingIndex(s, a, v1);
    getPatternMatchingIndex(s, b, v2);
    for(int i = 0, j = 0; i < v1.size(); ++i){
        while(j < v2.size() && v1[i] > v2[j] && abs(v1[i] - v2[j]) > k) j++;
        if(j < v2.size() && abs(v1[i] - v2[j]) <= k) ans.push_back(v1[i]);
    }
    return ans;
}
```

#### Complexity Analysis

- Time complexity: $O(n)$, where n is the length of the string
- Space complexity: $O(n)$, where n is the length of the string
