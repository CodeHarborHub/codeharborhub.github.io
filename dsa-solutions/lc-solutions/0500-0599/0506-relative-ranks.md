---
id: relative-ranks
title: Relative Ranks
level: easy
sidebar_label: Relative Ranks
tags:
  - Array
  - Sorting
  - Java
description: "This document provides solutions for the Relative Ranks problem."
---

## Problem Statement

You are given an integer array `score` of size `n`, where `score[i]` is the score of the `i`-th athlete in a competition. All the scores are guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

- The 1st place athlete's rank is "Gold Medal".
- The 2nd place athlete's rank is "Silver Medal".
- The 3rd place athlete's rank is "Bronze Medal".
- For the 4th place to the `n`-th place athlete, their rank is their placement number (i.e., the `x`-th place athlete's rank is "x").

Return an array `answer` of size `n` where `answer[i]` is the rank of the `i`-th athlete.

**Example 1:**

Input: `score = [5,4,3,2,1]`

Output: `["Gold Medal","Silver Medal","Bronze Medal","4","5"]`

Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

**Example 2:**

Input: `score = [10,3,8,9,4]`

Output: `["Gold Medal","5","Bronze Medal","Silver Medal","4"]`

Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

**Constraints:**

- `n == score.length`
- `1 <= n <= 10^4`
- `0 <= score[i] <= 10^6`
- All the values in `score` are unique.

## Solutions

### Approach

To determine the ranks of the athletes based on their scores, we can follow these steps:

1. **Store Scores and Indices**:
   - Use a list to store the scores along with their original indices.

2. **Sort the List**:
   - Sort the list in descending order based on scores.

3. **Assign Ranks**:
   - Traverse through the sorted list and assign ranks accordingly:
     - "Gold Medal" for the 1st highest score.
     - "Silver Medal" for the 2nd highest score.
     - "Bronze Medal" for the 3rd highest score.
     - The placement number for the rest.

### Java 

```java
class Solution {
    public String[] findRelativeRanks(int[] score) {
        String[] ret = new String[score.length];
        ArrayList<Integer> list = new ArrayList<>();

        for (int i = 0; i < score.length; i++) {
            list.add(score[i]);
        }

        Collections.sort(list, Collections.reverseOrder());

        for (int i = 0; i < score.length; i++) {
            int index = list.indexOf(score[i]) + 1;
            if (index == 1)
                ret[i] = "Gold Medal";
            else if (index == 2)
                ret[i] = "Silver Medal";
            else if (index == 3)
                ret[i] = "Bronze Medal";
            else
                ret[i] = index + "";
        }

        return ret;
    }
}
```

### Python
```Python
class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        ret = [""] * len(score)
        sorted_scores = sorted(score, reverse=True)
        
        for i in range(len(score)):
            rank = sorted_scores.index(score[i]) + 1
            if rank == 1:
                ret[i] = "Gold Medal"
            elif rank == 2:
                ret[i] = "Silver Medal"
            elif rank == 3:
                ret[i] = "Bronze Medal"
            else:
                ret[i] = str(rank)
        
        return ret
```

