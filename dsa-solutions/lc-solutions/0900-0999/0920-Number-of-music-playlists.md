---
id: Number of Music Playlists
title: Number of Music Playlists
sidebar_label: Number-of-music-playlists
tags: 
    - Dynamic Programming
    - Combinatorics
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [Number of Music Playlists](https://leetcode.com/problems/number-of-music-playlists) | [Number of Music Playlists Solution on LeetCode](https://leetcode.com/problems/Number-of-music-playlists/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

### Problem Description
Your music player contains `n` different songs. You want to listen to `goal` songs (not necessarily different) during your trip. To avoid boredom, you will create a playlist so that:

1. Every song is played at least once.
2. A song can only be played again only if `k` other songs have been played.

Given `n`, `goal`, and `k`, return the number of possible playlists that you can create. Since the answer can be very large, return it modulo 10^9 + 7.

#### Examples

## Example 1:
**Input:**`n = 3, goal = 3, k = 1`
**Output:**`6`
**Explanation:** `There are 6 possible playlists: [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], and [3, 2, 1].`

## Example 2:

**Input:** `n = 2, goal = 3, k = 0`
**Output:** `6`
**Explanation:** `There are 6 possible playlists: [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2, 1], [2, 1, 2], and [1, 2, 2].`

## Example 3:

**Input:** `n = 2, goal = 3, k = 1`
**Output:** `2`
**Explanation:** `There are 2 possible playlists: [1, 2, 1] and [2, 1, 2].`

### Constraints
- `0 <= k < n <= goal <= 100`

### Approach
The problem can be approached using dynamic programming. We define `dp[i][j]` as the number of playlists of length `i` that contain exactly `j` different songs.

**State Transition:**
- If we add a new song to the playlist, it must be one of the `n - j` songs that have not been used in the playlist yet.
- If we reuse an old song, it must be one of the `j - k` songs that are allowed to be reused.

**Initialization:**
- `dp[0][0] = 1` as there's exactly one way to create an empty playlist.

**Final Result:**
- The result is stored in `dp[goal][n]`.

### Solution in Python
```python
class Solution:
    def numMusicPlaylists(self, n: int, goal: int, k: int) -> int:
        MOD = 10**9 + 7
        dp = [[0] * (n + 1) for _ in range(goal + 1)]
        dp[0][0] = 1

        for i in range(1, goal + 1):
            for j in range(1, n + 1):
                dp[i][j] = dp[i - 1][j - 1] * (n - j + 1) % MOD
                if j > k:
                    dp[i][j] += dp[i - 1][j] * (j - k) % MOD
                dp[i][j] %= MOD

        return dp[goal][n]
```

### Solution in Java
```java
class Solution {
    public int numMusicPlaylists(int n, int goal, int k) {
        int MOD = 1_000_000_007;
        long[][] dp = new long[goal + 1][n + 1];
        dp[0][0] = 1;

        for (int i = 1; i <= goal; i++) {
            for (int j = 1; j <= n; j++) {
                dp[i][j] = dp[i - 1][j - 1] * (n - j + 1) % MOD;
                if (j > k) {
                    dp[i][j] += dp[i - 1][j] * (j - k) % MOD;
                }
                dp[i][j] %= MOD;
            }
        }

        return (int) dp[goal][n];
    }
}
```

### Solution in C++
```cpp
class Solution {
public:
    int numMusicPlaylists(int n, int goal, int k) {
        const int MOD = 1000000007;
        vector<vector<long>> dp(goal + 1, vector<long>(n + 1, 0));
        dp[0][0] = 1;

        for (int i = 1; i <= goal; i++) {
            for (int j = 1; j <= n; j++) {
                dp[i][j] = dp[i - 1][j - 1] * (n - j + 1) % MOD;
                if (j > k) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j] * (j - k)) % MOD;
                }
            }
        }

        return dp[goal][n];
    }
};
```

### Solution in C
```c
int numMusicPlaylists(int n, int goal, int k) {
    const int MOD = 1000000007;
    long dp[101][101] = {0};
    dp[0][0] = 1;

    for (int i = 1; i <= goal; i++) {
        for (int j = 1; j <= n; j++) {
            dp[i][j] = dp[i - 1][j - 1] * (n - j + 1) % MOD;
            if (j > k) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j] * (j - k)) % MOD;
            }
        }
    }

    return dp[goal][n];
}
```

### Solution in JavaScript
```javascript
var numMusicPlaylists = function(n, goal, k) {
    const MOD = 1000000007;
    const dp = Array.from({ length: goal + 1 }, () => Array(n + 1).fill(0));
    dp[0][0] = 1;

    for (let i = 1; i <= goal; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = dp[i - 1][j - 1] * (n - j + 1) % MOD;
            if (j > k) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j] * (j - k)) % MOD;
            }
        }
    }

    return dp[goal][n];
};
```

### Step-by-Step Algorithm
1. **Initialize**:
   - Define a 2D array `dp` where `dp[i][j]` represents the number of playlists of length `i` with exactly `j` different songs.
   - Initialize `dp[0][0] = 1`.

2. **State Transition**:
   - For each playlist length `i` from 1 to `goal`:
     - For each number of unique songs `j` from 1 to `n`:
       - If adding a new song: Update `dp[i][j]` with `dp[i-1][j-1] * (n - j + 1) % MOD`.
       - If reusing an old song: Update `dp[i][j]` with `dp[i-1][j] * (j - k) % MOD`.

3. **Compute Final Result**:
   - Return the value `dp[goal][n]`.

### Conclusion
The dynamic programming approach efficiently calculates the number of valid playlists by building up from smaller subproblems. This approach ensures that all constraints are respected and provides a result in a feasible time complexity for the given constraints.