---
id: Valid Permutations for DI Sequence 
title: Valid Permutations for DI Sequence 
sidebar_label: Valid-Permutations-for-DI-Sequence 
tags: 
    - Permutations
    - Algorithm
    - Dynamic Programming
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [Valid-Permutations-for-DI-Sequence](https://leetcode.com/problems/Valid-Permutations-for-DI-Sequence/description/) | [Valid-Permutations-for-DI-Sequence Solution on LeetCode](https://leetcode.com/problems/Valid-Permutations-for-DI-Sequence/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

## Problem Description

You are given a string `s` of length `n` where `s[i]` is either:
- `'D'` means decreasing, or
- `'I'` means increasing.

A permutation `perm` of `n + 1` integers of all the integers in the range `[0, n]` is called a valid permutation if for all valid `i`:
- If `s[i] == 'D'`, then `perm[i] > perm[i + 1]`, and
- If `s[i] == 'I'`, then `perm[i] < perm[i + 1]`.

Return the number of valid permutations `perm`. Since the answer may be large, return it modulo `10^9 + 7`.

## Constraints

- `n == s.length`
- `1 <= n <= 200`
- `s[i]` is either `'I'` or `'D'`.

## Example

## Example 1:
**Input:** `s = "DID"`
**Output:** `5`

## Example 2:
**Input:** `s = "D"`
**Output:** `1`

## Approach

To solve this problem, we can use dynamic programming to count the number of valid permutations that satisfy the given constraints. We'll use a 2D DP array where `dp[i][j]` represents the number of valid permutations of length `i+1` ending with the integer `j`.

The transitions are based on the character `'D'` or `'I'` in the input string `s`.

## Step-by-Step Algorithm

1. Initialize a DP array `dp` with dimensions `(n+1) x (n+1)` to store the number of valid permutations.
2. Set the base case: `dp[0][j] = 1` for all `j` from `0` to `n`.
3. Iterate through the string `s` and fill the DP array based on the transitions:
    - If `s[i] == 'I'`, calculate the cumulative sum from the previous row for increasing sequences.
    - If `s[i] == 'D'`, calculate the cumulative sum from the previous row for decreasing sequences.
4. Sum up all values in the last row of the DP array to get the result.
5. Return the result modulo `10^9 + 7`.

## Solution

### Python
```python
MOD = 10**9 + 7

def numPermsDISequence(s: str) -> int:
    n = len(s)
    dp = [[0] * (n + 1) for _ in range(n + 1)]
    
    for j in range(n + 1):
        dp[0][j] = 1
    
    for i in range(1, n + 1):
        if s[i - 1] == 'I':
            cum_sum = 0
            for j in range(n + 1):
                cum_sum = (cum_sum + dp[i - 1][j]) % MOD
                dp[i][j] = cum_sum
        else: # s[i - 1] == 'D'
            cum_sum = 0
            for j in range(n, -1, -1):
                cum_sum = (cum_sum + dp[i - 1][j]) % MOD
                dp[i][j] = cum_sum
    
    return sum(dp[n]) % MOD
```

### Java
```java
public class ValidPermutations {
    public int numPermsDISequence(String s) {
        int n = s.length();
        int MOD = 1000000007;
        int[][] dp = new int[n + 1][n + 1];
        
        for (int j = 0; j <= n; j++) {
            dp[0][j] = 1;
        }
        
        for (int i = 1; i <= n; i++) {
            if (s.charAt(i - 1) == 'I') {
                int cumSum = 0;
                for (int j = 0; j <= n; j++) {
                    cumSum = (cumSum + dp[i - 1][j]) % MOD;
                    dp[i][j] = cumSum;
                }
            } else {
                int cumSum = 0;
                for (int j = n; j >= 0; j--) {
                    cumSum = (cumSum + dp[i - 1][j]) % MOD;
                    dp[i][j] = cumSum;
                }
            }
        }
        
        int result = 0;
        for (int j = 0; j <= n; j++) {
            result = (result + dp[n][j]) % MOD;
        }
        
        return result;
    }
}
```

### C++
```cpp
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    int numPermsDISequence(string s) {
        int n = s.length();
        int MOD = 1000000007;
        vector<vector<int>> dp(n + 1, vector<int>(n + 1, 0));
        
        for (int j = 0; j <= n; j++) {
            dp[0][j] = 1;
        }
        
        for (int i = 1; i <= n; i++) {
            if (s[i - 1] == 'I') {
                int cumSum = 0;
                for (int j = 0; j <= n; j++) {
                    cumSum = (cumSum + dp[i - 1][j]) % MOD;
                    dp[i][j] = cumSum;
                }
            } else {
                int cumSum = 0;
                for (int j = n; j >= 0; j--) {
                    cumSum = (cumSum + dp[i - 1][j]) % MOD;
                    dp[i][j] = cumSum;
                }
            }
        }
        
        int result = 0;
        for (int j = 0; j <= n; j++) {
            result = (result + dp[n][j]) % MOD;
        }
        
        return result;
    }
};
```

### C
```c
#include <stdio.h>

#define MOD 1000000007

int numPermsDISequence(char * s){
    int n = strlen(s);
    int dp[n + 1][n + 1];
    
    for (int j = 0; j <= n; j++) {
        dp[0][j] = 1;
    }
    
    for (int i = 1; i <= n; i++) {
        if (s[i - 1] == 'I') {
            int cumSum = 0;
            for (int j = 0; j <= n; j++) {
                cumSum = (cumSum + dp[i - 1][j]) % MOD;
                dp[i][j] = cumSum;
            }
        } else {
            int cumSum = 0;
            for (int j = n; j >= 0; j--) {
                cumSum = (cumSum + dp[i - 1][j]) % MOD;
                dp[i][j] = cumSum;
            }
        }
    }
    
    int result = 0;
    for (int j = 0; j <= n; j++) {
        result = (result + dp[n][j]) % MOD;
    }
    
    return result;
}
```

### JavaScript
```javascript
var numPermsDISequence = function(s) {
    const MOD = 10**9 + 7;
    const n = s.length;
    const dp = Array.from({length: n + 1}, () => Array(n + 1).fill(0));
    
    for (let j = 0; j <= n; j++) {
        dp[0][j] = 1;
    }
    
    for (let i = 1; i <= n; i++) {
        if (s[i - 1] === 'I') {
            let cumSum = 0;
            for (let j = 0; j <= n; j++) {
                cumSum = (cumSum + dp[i - 1][j]) % MOD;
                dp[i][j] = cumSum;
            }
        } else {
            let cumSum = 0;
            for (let j = n; j >= 0; j--) {
                cumSum = (cumSum + dp[i - 1][j]) % MOD;
                dp[i][j] = cumSum;
            }
        }
    }
    
    return dp[n].reduce((acc, val) => (acc + val) % MOD, 0);
};
```

## Conclusion

This problem can be efficiently solved using dynamic programming by constructing a 2D DP array to keep track of valid permutations. The provided solutions in various programming languages demonstrate

 the approach and implementation details to achieve the desired result. The main challenge lies in understanding the transitions and correctly calculating cumulative sums based on the constraints imposed by the characters `'D'` and `'I'` in the input string.