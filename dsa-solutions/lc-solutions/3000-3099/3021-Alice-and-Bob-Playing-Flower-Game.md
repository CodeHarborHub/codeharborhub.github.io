---
id: alice-and-bob-playing-flower-game
title: Alice and Bob Playing Flower Game (LeetCode)
sidebar_label: 3021-AliceAndBobPlayingFlowerGame
tags:
  - Game Theory
  - Simulation
description: Compute the number of possible pairs (x, y) of flowers that satisfy the game conditions for Alice and Bob.
sidebar_position: 3021
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Alice and Bob Playing Flower Game](https://leetcode.com/problems/alice-and-bob-playing-flower-game/) | [Alice and Bob Playing Flower Game Solution on LeetCode](https://leetcode.com/problems/alice-and-bob-playing-flower-game/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

Alice and Bob are playing a turn-based game on a circular field surrounded by flowers. The circle represents the field, and there are `x` flowers in the clockwise direction between Alice and Bob, and `y` flowers in the anti-clockwise direction between them.

The game proceeds as follows:

- Alice takes the first turn.
- In each turn, a player must choose either the clockwise or anti-clockwise direction and pick one flower from that side.
- At the end of the turn, if there are no flowers left at all, the current player captures their opponent and wins the game.

Given two integers, `x` and `y`, representing the number of flowers in the clockwise and anti-clockwise directions respectively, determine if Alice can win the game if both players play optimally.

### Example 1

- **Input:** `x = 3`, `y = 5`
- **Output:** `true`
- **Explanation:** Alice can always choose the optimal direction to pick flowers and win the game.

### Example 2

- **Input:** `x = 1`, `y = 1`
- **Output:** `false`
- **Explanation:** Since both players play optimally, Bob will always be the one to win in this case.

### Constraints

- `1 <= x, y <= 1000`

## Approach

To determine if Alice can win the game if both players play optimally, we need to consider the following:

1. If either `x` or `y` is `0`, Alice wins by default since Bob cannot make a move.
2. If `x` and `y` are both greater than `0`, the game becomes a variant of the classic "Nim" game where the player to take the last flower wins.
3. The game's result can be determined using the principles of game theory, specifically the Grundy number for the game states.

### Solution Code

#### Python

```python
class Solution:
    def canAliceWin(self, n: int, m: int) -> bool:
        return (n*m)//2
```

#### C++

```c++
long long flowerGame(int n, int m) {
    return (long long)n * m / 2;
}
```

#### Java

```java
class Solution {
    public boolean canAliceWin(int x, int y) {
        return (n*m)/2;
    }
}
```

### Conclusion
The solutions use the properties of the XOR operation to determine if Alice can win the game. This 
ensures that the problem is solved in a straightforward and efficient manner across different 
programming languages.