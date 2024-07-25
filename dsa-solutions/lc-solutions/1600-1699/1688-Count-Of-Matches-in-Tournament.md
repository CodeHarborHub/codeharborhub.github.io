---
id: count-of-matches-in-tournament
title: Count of Matches in Tournament
sidebar_label: 1688-Count-of-Matches-in-Tournament
tags:
- Simulation
- Tournament
description: "Given the number of teams in a tournament, calculate the number of matches played until a winner is decided."
---

## Problem

You are given an integer `n`, the number of teams in a tournament. In each match, a team wins and the other team is eliminated. The tournament continues until there is one team left. Your task is to return the number of matches played in the tournament until a winner is decided.

### Examples

**Example 1:**

**Input:** `n = 7`  
**Output:** `6`  
**Explanation:** 
- 1st round: 7 teams are divided into 3 matches with 1 team automatically advancing (3 + 1 = 4).
- 2nd round: 4 teams are divided into 2 matches (2 + 1 = 3).
- 3rd round: 3 teams are divided into 1 match with 1 team automatically advancing (1 + 1 = 2).
- 4th round: 2 teams are divided into 1 match, resulting in a single winner (1 + 0 = 1).
- Total matches: 3 + 2 + 1 = 6.

**Example 2:**

**Input:** `n = 14`  
**Output:** `13`  
**Explanation:** 
- 1st round: 14 teams are divided into 7 matches (7 + 0 = 7).
- 2nd round: 7 teams are divided into 3 matches with 1 team automatically advancing (3 + 1 = 4).
- 3rd round: 4 teams are divided into 2 matches (2 + 1 = 3).
- 4th round: 3 teams are divided into 1 match with 1 team automatically advancing (1 + 1 = 2).
- 5th round: 2 teams are divided into 1 match, resulting in a single winner (1 + 0 = 1).
- Total matches: 7 + 3 + 2 + 1 = 13.

### Constraints

- `1 <= n <= 200`

---

## Approach

To solve this problem, we can use a straightforward simulation approach by counting the number of matches played in each round until one team remains. The key observation is that in each match, one team is eliminated, so the number of matches in each round is equal to the number of teams divided by 2.

### Steps:

1. Initialize a counter for the number of matches to 0.
2. While the number of teams is greater than 1:
   1. If the number of teams is even, half of them play matches, and the other half is eliminated.
   2. If the number of teams is odd, one team automatically advances, and the rest play matches.
   3. Add the number of matches in this round to the counter.
3. Return the counter as the total number of matches played.

### Solution

#### Java

```java
class Solution {
    public int numberOfMatches(int n) {
        int matches = 0;
        while (n > 1) {
            if (n % 2 == 0) {
                matches += n / 2;
                n = n / 2;
            } else {
                matches += (n - 1) / 2;
                n = (n - 1) / 2 + 1;
            }
        }
        return matches;
    }
}
```

#### C++

```cpp
class Solution {
public:
    int numberOfMatches(int n) {
        int matches = 0;
        while (n > 1) {
            if (n % 2 == 0) {
                matches += n / 2;
                n = n / 2;
            } else {
                matches += (n - 1) / 2;
                n = (n - 1) / 2 + 1;
            }
        }
        return matches;
    }
};
```

#### Python

```python
class Solution:
    def numberOfMatches(self, n: int) -> int:
        matches = 0
        while n > 1:
            if n % 2 == 0:
                matches += n // 2
                n = n // 2
            else:
                matches += (n - 1) // 2
                n = (n - 1) // 2 + 1
        return matches
```

### Complexity Analysis
**Time Complexity:** O(log n)
>Reason: The number of teams is halved in each round, leading to a logarithmic time complexity.

**Space Complexity:** O(1)
>Reason: The space complexity is constant as we only use a few variables.

### References
**LeetCode Problem:** Count of Matches in Tournament
