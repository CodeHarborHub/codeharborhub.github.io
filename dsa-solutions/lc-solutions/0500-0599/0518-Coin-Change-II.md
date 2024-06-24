---
id: coin-change-2
title: Coin Change 2
sidebar_label: 0518-Coin-Change-2
tags:
- Dynamic Programming
- Array
description: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the number of combinations that make up that amount."
---

## Problem

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return `0`.

### Examples

**Example 1:**

**Input:** `amount = 5, coins = [1, 2, 5]`  
**Output:** `4`  
**Explanation:** There are four ways to make up the amount:
1. 5 = 5
2. 5 = 2 + 2 + 1
3. 5 = 2 + 1 + 1 + 1
4. 5 = 1 + 1 + 1 + 1 + 1

**Example 2:**

**Input:** `amount = 3, coins = [2]`  
**Output:** `0`  
**Explanation:** The amount of 3 cannot be made up just with coins of 2.

**Example 3:**

**Input:** `amount = 10, coins = [10]`  
**Output:** `1`

### Constraints

- `1 <= coins.length <= 300`
- `1 <= coins[i] <= 5000`
- All the values of `coins` are unique.
- `0 <= amount <= 5000`

---

## Approach

To solve this problem, we can use dynamic programming. We will create a 1D array `dp` where `dp[i]` represents the number of ways to make the amount `i` using the given coins.

### Steps:

1. Initialize a 1D array `dp` of size `amount + 1` with all elements set to `0`.
2. Set `dp[0] = 1` because there is one way to make the amount `0`, which is to use no coins.
3. For each coin in the `coins` array:
   - Update the `dp` array from the current coin's value up to the `amount`.
   - For each amount `i` from the coin's value to `amount`, add the number of ways to make the amount `i - coin` to `dp[i]`.
4. The value `dp[amount]` will be the result.

### Solution

#### Java

```java
class Solution {
    public int change(int amount, int[] coins) {
        int[] dp = new int[amount + 1];
        dp[0] = 1;

        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                dp[i] += dp[i - coin];
            }
        }

        return dp[amount];
    }
}
```
#### C++ 
```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int change(int amount, vector<int>& coins) {
        vector<int> dp(amount + 1, 0);
        dp[0] = 1;

        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                dp[i] += dp[i - coin];
            }
        }

        return dp[amount];
    }
};
```
#### Python

```python
class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        dp = [0] * (amount + 1)
        dp[0] = 1

        for coin in coins:
            for i in range(coin, amount + 1):
                dp[i] += dp[i - coin]

        return dp[amount]
```
### Complexity Analysis
**Time Complexity:** O(n * amount)
>Reason: The nested loops iterate over the coins array and the amount, leading to a time complexity of O(n * amount), where n is the number of coins.

**Space Complexity:** O(amount)
>Reason: The space complexity is O(amount) due to the 1D dp array used to store the number of combinations for each amount.

### References
**LeetCode Problem:** Coin Change 2