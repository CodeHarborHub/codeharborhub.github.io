---
id: predict-the-winner
title: Predict the Winner
sidebar_label: 0486 - Predict the Winner
tags:
  - Leetcode
  - Dynamic Programming
---

## Problem Statement

You are given an integer array `nums`. Two players, player 1 and player 2, are playing a game with this array. Player 1 and player 2 take turns, with player 1 starting first. Both players start the game with a score of 0. At each turn, the player takes one of the numbers from either end of the array (i.e., `nums[0]` or `nums[nums.length - 1]`), which reduces the size of the array by 1. The player adds the chosen number to their score. The game ends when there are no more elements in the array.

Return `true` if Player 1 can win the game. If the scores of both players are equal, then player 1 is still the winner, and you should also return `true`. You may assume that both players are playing optimally.

## Examples

### Example 1

- Input: `nums = [1,5,2]`
- Output: `false`
- Explanation: Initially, player 1 can choose between 1 and 2.
  If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2).
  So, the final score of player 1 is 1 + 2 = 3, and player 2 is 5.
  Hence, player 1 will never be the winner and you need to return `false`.

### Example 2

- Input: `nums = [1,5,233,7]`
- Output: `true`
- Explanation: Player 1 first chooses 1. Then player 2 has to choose between 5 and 7. No matter which number player 2 chooses, player 1 can choose 233.
  Finally, player 1 has a higher score (234) than player 2 (12), so you need to return `true`, representing player 1 can win.

## Constraints

- $1 <= nums.length <= 20$
- $0 <= nums[i] <= 107$

## Algorithm

1. Use a recursive approach with memoization to solve the problem.
2. Define a function `game(start, end)` that returns the maximum score the current player can achieve from the subarray `nums[start:end+1]`.
3. If `start` is greater than `end`, return 0.
4. If `start` equals `end`, return `nums[start]`.
5. Calculate the score for taking the start or end element and return the maximum of these two options.
6. Use a memoization table to store the results of the recursive calls to avoid recomputation.
7. Compare the score of player 1 with the total score and return true if player 1's score is greater than or equal to half the total score.

## Code

### Python

```python
class Solution:
    def predictTheWinner(self, nums: List[int]) -> bool:
        n = len(nums)
        memo = {}

        def game(start, end):
            if start > end:
                return 0
            if (start, end) in memo:
                return memo[(start, end)]
            if start == end:
                return nums[start]
            take_start = nums[start] + min(game(start + 2, end), game(start + 1, end - 1))
            take_end = nums[end] + min(game(start + 1, end - 1), game(start, end - 2))
            memo[(start, end)] = max(take_start, take_end)
            return memo[(start, end)]

        total_score = sum(nums)
        player_1 = game(0, n - 1)
        player_2 = total_score - player_1
        return player_1 >= player_2
```

### C++

```cpp
#include <vector>
#include <numeric>
#include <unordered_map>
using namespace std;

class Solution {
public:
    unordered_map<string, int> memo;

    int game(int start, int end, vector<int>& nums) {
        if (start > end) return 0;
        string key = to_string(start) + "," + to_string(end);
        if (memo.find(key) != memo.end()) return memo[key];
        if (start == end) return nums[start];
        int take_start = nums[start] + min(game(start + 2, end, nums), game(start + 1, end - 1, nums));
        int take_end = nums[end] + min(game(start + 1, end - 1, nums), game(start, end - 2, nums));
        memo[key] = max(take_start, take_end);
        return memo[key];
    }

    bool predictTheWinner(vector<int>& nums) {
        int n = nums.size();
        int total_score = accumulate(nums.begin(), nums.end(), 0);
        int player_1 = game(0, n - 1, nums);
        int player_2 = total_score - player_1;
        return (player_1 >= player_2);
    }
};
```

### Java

```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    private Map<String, Integer> memo = new HashMap<>();

    public int game(int start, int end, int[] nums) {
        if (start > end) return 0;
        String key = start + "," + end;
        if (memo.containsKey(key)) return memo.get(key);
        if (start == end) return nums[start];
        int takeStart = nums[start] + Math.min(game(start + 2, end, nums), game(start + 1, end - 1, nums));
        int takeEnd = nums[end] + Math.min(game(start + 1, end - 1, nums), game(start, end - 2, nums));
        memo.put(key, Math.max(takeStart, takeEnd));
        return memo.get(key);
    }

    public boolean predictTheWinner(int[] nums) {
        int n = nums.length;
        int totalScore = 0;
        for (int num : nums) totalScore += num;
        int player1 = game(0, n - 1, nums);
        int player2 = totalScore - player1;
        return player1 >= player2;
    }
}
```

### JavaScript

```javascript
var PredictTheWinner = function (nums) {
  const memo = new Map();

  const game = (start, end) => {
    if (start > end) return 0;
    const key = start + "," + end;
    if (memo.has(key)) return memo.get(key);
    if (start === end) return nums[start];
    const takeStart =
      nums[start] + Math.min(game(start + 2, end), game(start + 1, end - 1));
    const takeEnd =
      nums[end] + Math.min(game(start + 1, end - 1), game(start, end - 2));
    const result = Math.max(takeStart, takeEnd);
    memo.set(key, result);
    return result;
  };

  const totalScore = nums.reduce((a, b) => a + b, 0);
  const player1 = game(0, nums.length - 1);
  const player2 = totalScore - player1;
  return player1 >= player2;
};
```
