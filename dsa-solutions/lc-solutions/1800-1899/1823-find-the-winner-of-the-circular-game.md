---
id: find-the-winner-of-the-circular-game
title: Find The Winner Of The Circular Game
sidebar_label: 1823  Find The Winner Of The Circular Game
tags:
  - Array
  - Math
  - Recursion
  - Queue
  - Simulation

description: "This is a solution to the Find the Winner of the Circular Game problem on LeetCode."

sidebar_position: 1823
---

## Problem Description
There are n friends that are playing a game. The friends are sitting in a circle and are numbered from 1 to n in clockwise order. More formally, moving clockwise from the ith friend brings you to the friend , and moving clockwise from the nth friend brings you to the 1st friend.

### Examples

**Example 1:**

```
Input: n = 5, k = 2  
Output: 3  
Explanation: Here are the steps of the game:
1) Start at friend 1.
2) Count 2 friends clockwise, which are friends 1 and 2.
3) Friend 2 leaves the circle. Next start is friend 3.
4) Count 2 friends clockwise, which are friends 3 and 4.
5) Friend 4 leaves the circle. Next start is friend 5.
6) Count 2 friends clockwise, which are friends 5 and 1.
7) Friend 1 leaves the circle. Next start is friend 3.
8) Count 2 friends clockwise, which are friends 3 and 5.
9) Friend 5 leaves the circle. Only friend 3 is left, so they are the winner.
```

**Example 2:**
```
Input: n = 6, k = 5  
Output: 1  
Explanation: The friends leave in this order: 5, 4, 6, 2, 3. The winner is friend 1.
```

### Constraints

- `1 <= k <= n <= 500`

## Solution for Find the Winner of the Circular Game
### Approach 

1. **Initialization**:
   - Initialize a variable `winner` to keep track of the winner found.

2. **Iterate Through the Numbers**:
   - Use a loop to iterate through each element.
   - Apply the formula to find the new winner.

3. **Return the Result**:
   - After iterating through all elements, return the value of `winner` as the result.


#### Complexity Analysis:

- **Time Complexity:** $O(n)$, because of iterating through the elements,
- **Space Complexity:** $O(1)$


#### C++ Solution

```cpp
class Solution {
public:
    int findTheWinner(int n, int k) {
        int winner = 1;
        for(int i = 1; i < n; i++){
            winner = (winner + k - 1) % (i + 1) + 1;
        }
        return winner;
    }
};

```




## References

- **LeetCode Problem**: [Find the Winner of the Circular Game](https://leetcode.com/problems/find-the-winner-of-the-circular-game)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/find-the-winner-of-the-circular-game)
