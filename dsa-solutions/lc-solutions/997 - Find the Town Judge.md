---
id: find-the-town-judge
title: Find the Town Judge
sidebar_label: Find the Town Judge
tags: [Graph, Array, C++, Python, Java]
description: Identify the town judge based on trust relationships in a town.
---

## Problem Statement

### Problem Description

In a town, there are `n` people labeled from `1` to `n`. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

1. The town judge trusts nobody.
2. Everybody (except for the town judge) trusts the town judge.
3. There is exactly one person that satisfies properties 1 and 2.

You are given an array `trust` where `trust[i] = [a_i, b_i]` representing that the person labeled `a_i` trusts the person labeled `b_i`. If a trust relationship does not exist in `trust` array, then such a trust relationship does not exist.

Return the label of the town judge if the town judge exists and can be identified, or return `-1` otherwise.

### Example

**Example 1:**
```
Input: n = 2, trust = [[1,2]]
Output: 2
```
**Example 2:**
```
Input: n = 3, trust = [[1,3],[2,3]]
Output: 3
```

### Constraints

- $1 \leq n \leq 1000$
- $0 \leq \text{trust.length} \leq 10^4$
- `trust[i].length == 2`
- All the pairs of trust are unique.
- $a_i \ne b_i$
- $1 \leq a_i, b_i \leq n$

## Solution

### Intuition

To identify the town judge, we can use an array to keep track of the trust scores for each person. The trust score is increased by 1 for each person who trusts them and decreased by 1 for each person they trust.

The town judge should have a trust score of `n-1` because they are trusted by everyone except themselves and they trust nobody.

### Time Complexity and Space Complexity Analysis

- **Time Complexity**: $O(n + \text{trust.length})$, where $n$ is the number of people and $\text{trust.length}$ is the number of trust relationships.
- **Space Complexity**: $O(n)$, for the trust score array.

### Code

#### C++

```cpp
class Solution {
public:
    int findJudge(int n, vector<vector<int>>& trust) {
        vector<int> trustScores(n + 1, 0);
        
        for (const auto& t : trust) {
            trustScores[t[0]]--;
            trustScores[t[1]]++;
        }
        
        for (int i = 1; i <= n; ++i) {
            if (trustScores[i] == n - 1) {
                return i;
            }
        }
        
        return -1;
    }
};
```

#### Python
```python
class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        trust_scores = [0] * (n + 1)
        
        for a, b in trust:
            trust_scores[a] -= 1
            trust_scores[b] += 1
        
        for i in range(1, n + 1):
            if trust_scores[i] == n - 1:
                return i
        
        return -1
```

#### Java
```java
class Solution {
    public int findJudge(int n, int[][] trust) {
        int[] trustScores = new int[n + 1];
        
        for (int[] t : trust) {
            trustScores[t[0]]--;
            trustScores[t[1]]++;
        }
        
        for (int i = 1; i <= n; i++) {
            if (trustScores[i] == n - 1) {
                return i;
            }
        }
        
        return -1;
    }
}
```
