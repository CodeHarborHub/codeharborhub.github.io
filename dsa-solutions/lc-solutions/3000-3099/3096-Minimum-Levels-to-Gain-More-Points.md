---
id: minimum-levels-to-gain-more-points
title: Minimum Levels to Gain More Points (LeetCode)
sidebar_label: 3096-MinimumLevelsToGainMorePoints
tags:
  - Array
  - Greedy
  - Two Pointers
description: Determine the minimum number of levels Alice should play to gain more points than Bob, given that some levels are impossible to clear.
sidebar_position: 3096
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Minimum Levels to Gain More Points](https://leetcode.com/problems/minimum-levels-to-gain-more-points/) | [Minimum Levels to Gain More Points Solution on LeetCode](https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

You are given a binary array `possible` of length `n`.

Alice and Bob are playing a game that consists of `n` levels. Some of the levels in the game are impossible to clear while others can always be cleared. In particular, if `possible[i] == 0`, then the ith level is impossible to clear for both players. A player gains 1 point on clearing a level and loses 1 point if the player fails to clear it.

At the start of the game, Alice will play some levels in the given order starting from the 0th level, after which Bob will play for the rest of the levels.

Alice wants to know the minimum number of levels she should play to gain more points than Bob, if both players play optimally to maximize their points.

Return the minimum number of levels Alice should play to gain more points. If this is not possible, return -1.

Note that each player must play at least 1 level.

### Example 1

- **Input:** `possible = [1,0,1,0]`
- **Output:** `1`
- **Explanation:**
  - If Alice plays only level 0 and Bob plays the rest of the levels, Alice has 1 point, while Bob has -1 + 1 - 1 = -1 point.
  - If Alice plays till level 1 and Bob plays the rest of the levels, Alice has 0 points, while Bob has 0 points.
  - If Alice plays till level 2 and Bob plays the rest of the levels, Alice has 1 point, while Bob has -1 point.
  - Alice must play a minimum of 1 level to gain more points.

### Example 2

- **Input:** `possible = [1,1,1,1,1]`
- **Output:** `3`
- **Explanation:**
  - If Alice plays only level 0 and Bob plays the rest of the levels, Alice has 1 point, while Bob has 4 points.
  - If Alice plays till level 1 and Bob plays the rest of the levels, Alice has 2 points, while Bob has 3 points.
  - If Alice plays till level 2 and Bob plays the rest of the levels, Alice has 3 points, while Bob has 2 points.
  - If Alice plays till level 3 and Bob plays the rest of the levels, Alice has 4 points, while Bob has 1 point.
  - Alice must play a minimum of 3 levels to gain more points.

### Example 3

- **Input:** `possible = [0,0]`
- **Output:** `-1`
- **Explanation:** The only possible way is for both players to play 1 level each. Alice plays level 0 and loses 1 point. Bob plays level 1 and loses 1 point. As both players have equal points, Alice can't gain more points than Bob.

### Constraints

- `2 <= n == possible.length <= 10^5`
- `possible[i]` is either `0` or `1`.

## Approach

To solve this problem, we can use a greedy approach combined with a two-pointer technique:

1. Traverse through the `possible` array and determine the total number of levels that can be played (`total_possible_levels`).
2. Initialize two pointers: `alice_played` and `bob_played` to simulate both players playing optimally.
3. Start by considering `alice_played` from 1 level up to `total_possible_levels - 1`.
4. Calculate the points for Alice and Bob after Alice plays `alice_played` levels and Bob plays the rest.
5. Track the minimum number of levels Alice needs to play to have more points than Bob.
6. Return the result based on the tracked minimum number of levels or `-1` if it's not possible for Alice to gain more points.

### Solution Code

#### Python

```python
class Solution:
    def minLevelsToGainMorePoints(self, possible: List[int]) -> int:
        n = len(possible)
        total_possible_levels = sum(possible)
        
        if total_possible_levels < 2:
            return -1
        
        alice_played = 0
        min_levels = float('inf')
        
        alice_points = 0
        bob_points = 0
        
        for i in range(n):
            if possible[i] == 1:
                bob_points += 1
        
        for i in range(n):
            if possible[i] == 1:
                alice_played += 1
                alice_points += 1
                bob_points -= 1
            
            if alice_played >= 1 and alice_points > bob_points:
                min_levels = min(min_levels, alice_played)
        
        return min_levels if min_levels != float('inf') else -1
```

#### C++
```c++
#include <vector>
using namespace std;

class Solution {
public:
    int minLevelsToGainMorePoints(vector<int>& possible) {
        int n = possible.size();
        int total_possible_levels = 0;
        
        for (int i = 0; i < n; ++i) {
            total_possible_levels += possible[i];
        }
        
        if (total_possible_levels < 2) {
            return -1;
        }
        
        int alice_played = 0;
        int min_levels = INT_MAX;
        
        int alice_points = 0;
        int bob_points = 0;
        
        for (int i = 0; i < n; ++i) {
            if (possible[i] == 1) {
                bob_points++;
            }
        }
        
        for (int i = 0; i < n; ++i) {
            if (possible[i] == 1) {
                alice_played++;
                alice_points++;
                bob_points--;
            }
            
            if (alice_played >= 1 && alice_points > bob_points) {
                min_levels = min(min_levels, alice_played);
            }
        }
        
        return min_levels != INT_MAX ? min_levels : -1;
    }
};

```

#### Java
```java
class Solution {
    public int minLevelsToGainMorePoints(int[] possible) {
        int n = possible.length;
        int total_possible_levels = 0;
        
        for (int i = 0; i < n; ++i) {
            total_possible_levels += possible[i];
        }
        
        if (total_possible_levels < 2) {
            return -1;
        }
        
        int alice_played = 0;
        int min_levels = Integer.MAX_VALUE;
        
        int alice_points = 0;
        int bob_points = 0;
        
        for (int i = 0; i < n; ++i) {
            if (possible[i] == 1) {
                bob_points++;
            }
        }
        
        for (int i = 0; i < n; ++i) {
            if (possible[i] == 1) {
                alice_played++;
                alice_points++;
                bob_points--;
            }
            
            if (alice_played >= 1 && alice_points > bob_points) {
                min_levels = Math.min(min_levels, alice_played);
            }
        }
        
        return min_levels != Integer.MAX_VALUE ? min_levels : -1;
    }
}

```

### Conclusion
The provided solutions utilize a greedy approach combined with a two-pointer technique to determine 
the minimum number of levels Alice should play to gain more points than Bob. By iterating through 
possible levels Alice can play and computing the resultant points for both players, we can 
efficiently determine the solution to this problem.