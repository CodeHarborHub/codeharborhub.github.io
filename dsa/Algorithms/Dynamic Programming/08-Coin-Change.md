---
id: coin-change-problem
title: Coin Change Problem using Dynamic Programming
sidebar_label: Coin Change Problem
tags: [python, java, c++, javascript, programming, algorithms, dynamic programming, tutorial, in-depth]
description: In this tutorial, we will learn about the Coin Change Problem and its solution using Dynamic Programming in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Coin Change Problem using Dynamic Programming

The Coin Change Problem is a classic algorithmic problem that aims to find the number of ways to make change for a given amount using a specific set of coin denominations.

## Problem Statement

Given a set of coins with different denominations and a total amount of money, determine the number of unique ways to make change for the given amount using any combination of coins.

### Intuition

The problem can be efficiently solved using dynamic programming. By breaking down the problem into smaller subproblems and storing the results, dynamic programming helps avoid redundant calculations.

## Dynamic Programming Approach

Using dynamic programming, we build a table `dp` where `dp[i][j]` represents the number of ways to make change for amount `j` using the first `i` coins.

## Pseudocode for Coin Change Problem using DP

#### Initialize:

```markdown
dp[0][j] = 1   // Base case: one way to make change for amount 0
dp[i][0] = 1   // Base case: one way to make change for any amount using 0 coins

for i from 1 to n:
    for j from 1 to amount:
        if coins[i-1] > j:
            dp[i][j] = dp[i-1][j]
        else:
            dp[i][j] = dp[i-1][j] + dp[i][j-coins[i-1]]

return dp[n][amount]
```

### Example Output:

Given the coins `[1, 2, 5]` and the amount `amount = 5`, the number of ways to make change is `4`.

### Output Explanation:

- There are four ways to make change for the amount `5` using the coins `[1, 2, 5]`:
  - `[1, 1, 1, 1, 1]`
  - `[1, 1, 1, 2]`
  - `[1, 2, 2]`
  - `[5]`

## Implementing Coin Change using DP

### Python Implementation

```python
def coin_change(coins, amount):
    n = len(coins)
    dp = [[0] * (amount + 1) for _ in range(n + 1)]
    for i in range(n + 1):
        dp[i][0] = 1

    for i in range(1, n + 1):
        for j in range(1, amount + 1):
            if coins[i - 1] > j:
                dp[i][j] = dp[i - 1][j]
            else:
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]]

    return dp[n][amount]

coins = [1, 2, 5]
amount = 5
print("Number of ways to make change:", coin_change(coins, amount))

```

### Java Implementation

```java
public class CoinChange {
    public static int coinChange(int[] coins, int amount) {
        int n = coins.length;
        int[][] dp = new int[n + 1][amount + 1];
        for (int i = 0; i <= n; i++) {
            dp[i][0] = 1;
        }

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= amount; j++) {
                if (coins[i - 1] > j) {
                    dp[i][j] = dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
                }
            }
        }

        return dp[n][amount];
    }

    public static void main(String[] args) {
        int[] coins = {1, 2, 5};
        int amount = 5;
        System.out.println("Number of ways to make change: " + coinChange(coins, amount));
    }
}

```
### C++ Implementation

```cpp
#include <iostream>
#include <vector>
using namespace std;

int coinChange(vector<int>& coins, int amount) {
    int n = coins.size();
    vector<vector<int>> dp(n + 1, vector<int>(amount + 1, 0));
    for (int i = 0; i <= n; i++) {
        dp[i][0] = 1;
    }

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= amount; j++) {
            if (coins[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
            }
        }
    }

    return dp[n][amount];
}

int main() {
    vector<int> coins = {1, 2, 5};
    int amount = 5;
    cout << "Number of ways to make change: " << coinChange(coins, amount) << endl;
    return 0;
}

```

### JavaScript Implementation

```javascript
function coinChange(coins, amount) {
    let n = coins.length;
    let dp = new Array(n + 1).fill(0).map(() => new Array(amount + 1).fill(0));
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= amount; j++) {
            if (coins[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
            }
        }
    }

    return dp[n][amount];
}

let coins = [1, 2, 5];
let amount = 5;
console.log("Number of ways to make change:", coinChange(coins, amount));

```

## Complexity Analysis

- Time Complexity: $O(n \cdot \text{amount})$, where n is the number of coins and amount is the given amount.
- Space Complexity: $O(n \cdot \text{amount})$, for the DP table.

## Conclusion

Dynamic programming offers an efficient solution to the Coin Change Problem by breaking it down into subproblems and storing intermediate results. This technique helps determine the number of ways to make change for a given amount using a specific