---
id: distinct-subsequence
title: Distinct SubSequence 
sidebar_label: 0115 Distinct SubSequence
tags:
  - String
  - DP
description: "Given two strings s and t, return the number of distinct subsequences of s which equals t.
The test cases are generated so that the answer fits on a 32-bit signed integer."
---

## Problem Description

Given two strings s and t, return the number of distinct subsequences of s which equals t.

The test cases are generated so that the answer fits on a 32-bit signed integer.

### Examples

**Example 1:**

```
Input: s = "rabbbit", t = "rabbit"
Output: 3
Explanation:
As shown below, there are 3 ways you can generate "rabbit" from s.
rabbbit
rabbbit
rabbbit
```

**Example 2:**

```
Input: s = "babgbag", t = "bag"
Output: 5
Explanation:
As shown below, there are 5 ways you can generate "bag" from s.
babgbag
babgbag
babgbag
babgbag
babgbag
```

### Constraints

- `1 <= s.length, t.length <= 1000`
- s and t consist of English letters.


### Institution
The problem is to find the number of distinct subsequences of string s that equal string t. This can be thought of as a dynamic programming problem where we keep track of the number of ways to form the substring t using the substring of s.


### Approach 
- We use a dynamic programming table dp where dp[i][j] represents the number of distinct subsequences of the first i characters of s that equal the first j characters of t.

Initialization:

- If t is empty, there is exactly one subsequence of s that matches t (the empty subsequence). Hence, dp[i][0] = 1 for all i.
- If s is empty but t is not, no subsequences of s can match t. Hence, dp[0][j] = 0 for all j > 0.
Filling the DP Table:

- If s[i-1] == t[j-1], then the number of ways to form t[0..j-1] from s[0..i-1] is the sum of:
- The number of ways to form t[0..j-1] from s[0..i-2] (excluding the current character of s).
- The number of ways to form t[0..j-2] from s[0..i-2] (including the current character of s).
- If s[i-1] != t[j-1], then the number of ways to form t[0..j-1] from s[0..i-1] is the same as the number of ways to form t[0..j-1] from s[0..i-2] (excluding the current character of s).


#### Code in C++

```cpp
class Solution {
public:
    int numDistinct(string s, string t) {
        vector<vector<unsigned long long>> dp(s.size()+1,vector<unsigned long long>(t.size()+1,0));
        
        for(int i=0;i<=s.size();i++){
            dp[i][0]=1;
        }
        // for(int j=1;j<=t.size();j++){
        //     dp[0][j]=0;
        // }

        for(int i=1;i<=s.size();i++){
            for(int j=1;j<=t.size();j++){
                if(s[i-1]==t[j-1]){
                    dp[i][j]=dp[i-1][j-1]+dp[i-1][j];
                }
                else{
                    dp[i][j]=dp[i-1][j];
                }
            }
        }
        return dp[s.size()][t.size()];

        
    }
};
```

#### Code in Java
```Java
class Solution {
    public int numDistinct(String s, String t) {
        int l1 = s.length();
        int l2 = t.length();
        
        int[] dp = new int[l2+1];
        
        for(int i = 0; i <= l1; i++){
            
            for(int j = l2; j >= 0; j--){
                if(j == 0){
                    dp[j] = 1;
                }
                else if(i == 0){
                    dp[j] = 0;
                }                
                else{
                    int notPick = dp[j];
                    int pick = 0;
                    if(s.charAt(i-1) == t.charAt(j-1)){
                        pick = dp[j - 1];
                    }
                    dp[j] = pick + notPick;
                }
            }
        }
        
        return dp[l2];
	}
}
```


### Complexity Analysis
- Time complexity: `O(n×m)`

- Space complexity: `O(n×m)`