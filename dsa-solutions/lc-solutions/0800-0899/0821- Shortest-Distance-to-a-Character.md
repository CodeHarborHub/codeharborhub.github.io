---
id: shortest-distance-to-a-character
title: Shortest Distance to a Character
sidebar_label: 821-  Shortest Distance to a Character
tags:
  - Array
  - String
  - Two pointer
description: Given a string ss and a character cc that appears in ss, return an array where each element at index ii represents the minimum distance from ii to any occurrence of cc in ss.
sidebar_position: 0821
---

## Problem Description

Given a string s and a character c that occurs in s, return an array of integers answer where `answer.length == s.length` and `answer[i]` is the distance from index i to the closest occurrence of character c in s.

The distance between two indices i and j is `abs(i - j)`, where abs is the absolute value function.

### Example 1

- **Input:** `s = "loveleetcode", c = "e"`
- **Output:** `[3,2,1,0,1,0,0,1,2,2,1,0]`
- **Explanation:** `The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.`

### Constraints

- `1 <= s.length <= 10`

## Approach

This approach first identifies all positions of the character cc in the string and stores them in a list. Then, it iterates through each character in the string and calculates the shortest distance to the nearest cc by comparing distances to the closest occurrences of cc on both sides (if applicable), and updates the result array accordingly.

#### Java

```Java
class Solution {
    public int[] shortestToChar(String s, char c)
    {
        int[] result = new int[s.length()];
        List<Integer> cPositions = new ArrayList<>();

        int currPos = 0;

        for (int i = 0; i < s.length(); i++)
        {
            if (s.charAt(i) == c) cPositions.add(i);
        }

        int k = 0;
        for (int i = 0; i < s.length(); i++)
        {
        	if (currPos == cPositions.size())
            {
            	result[k++] = i - cPositions.get(currPos - 1);
            }
        	else
        	{
        		int p = cPositions.get(currPos);

                if (i == p)
                {
                    result[k++] = 0;
                    currPos++;
                }
                else if (currPos == 0) result[k++] = p - i;
                else
                {
                    int p2 = cPositions.get(currPos - 1);
                    result[k++] = Math.min(i - p2, p - i);
                }
        	}
        }

        return result;
    }
}
```

- Time Complexity
  The time complexity is $o(n)$.

- Space Complexity
  The space complexity is $O(1)$.
