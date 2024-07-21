---
id: minimum-number-of-coins-for-fruits
title: Minimum Number of Coins for Fruits
sidebar_label: 2944-Minimum-Number-Of-Coins-For-Fruits
tags: 
    - Array
    - Dynamic Programming
    - Queue
    - Heap
    - Monotonic Queue
description: The problem is 2944. The problem is to find the Minimum Number of Coins for Fruits

sidebar_position: 2944
---

## Problem Statement
You are given an integer array `prices` where `prices[i]` denotes the number of coins needed to purchase the `ith` fruit.

The fruit market has the following reward for each fruit:

If you purchase the `ith` fruit at `prices[i]` coins, you can get any number of the next `(i + 1)` fruits for free.
Note that even if you can take fruit `j` for free, you can still purchase it for `prices[j]` coins to receive its reward.

Return the minimum number of coins needed to acquire all the fruits.

 

### Examples

**Example 1:**

```
Input: prices = [3,1,2]

Output: 4

Explanation:

Purchase the 1st fruit with prices[0] = 3 coins, you are allowed to take the 2nd fruit for free.
Purchase the 2nd fruit with prices[1] = 1 coin, you are allowed to take the 3rd fruit for free.
Take the 3rd fruit for free.
Note that even though you could take the 2nd fruit for free as a reward of buying 1st fruit, you purchase it to receive its reward, which is more optimal.
```

**Example 2:**

```
Input: prices = [1,10,1,1]

Output: 2

Explanation:

Purchase the 1st fruit with prices[0] = 1 coin, you are allowed to take the 2nd fruit for free.
Take the 2nd fruit for free.
Purchase the 3rd fruit for prices[2] = 1 coin, you are allowed to take the 4th fruit for free.
Take the 4th fruit for free.
```

**Example 3:**

```
Input: prices = [26,18,6,12,49,7,45,45]

Output: 39

Explanation:

Purchase the 1st fruit with prices[0] = 26 coin, you are allowed to take the 2nd fruit for free.
Take the 2nd fruit for free.
Purchase the 3rd fruit for prices[2] = 6 coin, you are allowed to take the 4th, 5th and 6th (the next three) fruits for free.
Take the 4th fruit for free.
Take the 5th fruit for free.
Purchase the 6th fruit with prices[5] = 7 coin, you are allowed to take the 8th and 9th fruit for free.
Take the 7th fruit for free.
Take the 8th fruit for free.
Note that even though you could take the 6th fruit for free as a reward of buying 3rd fruit, you purchase it to receive its reward, which is more optimal.
```



### Constraints

- `1 <= prices.length <= 1000`
- `1 <= prices[i] <= 10^5`

## Solution

#### Java Implementation

```java
public class Solution {
  public int minimumCoins(int[] prices) {
    int n = prices.length;
    int[][] dp = new int[n + 1][n + 1];
    for (int i = 0; i <= n; i++) {
      for (int j = 0; j <= n; j++) {
        dp[i][j] = -1;
      }
    }
    return solve(0, n, prices, 0, dp);
  }

  private int solve(int currentIndex, int n, int[] prices, int remainingOffer, int[][] dp) {
    if (currentIndex == n) return 0;
    if (currentIndex > n) return 1e8;
    if (dp[currentIndex][remainingOffer] != -1) return dp[currentIndex][remainingOffer];
    if (remainingOffer > 0) {
      return dp[currentIndex][remainingOffer] = Math.min(
        prices[currentIndex] + solve(currentIndex + 1, n, prices, currentIndex + 1, dp),
        solve(currentIndex + 1, n, prices, remainingOffer - 1, dp)
      );
    }
    return dp[currentIndex][remainingOffer] = prices[currentIndex] + solve(currentIndex + 1, n, prices, currentIndex + 1, dp);
  }
}

```

#### C++ Implementation

```cpp
 int solve(int currentIndex, int n, const std::vector<int>& prices, int remainingOffer, std::vector<std::vector<int>>& dp) {
        if (currentIndex == n)
            return 0;
        if (currentIndex > n)
            return 1e8;

        if (dp[currentIndex][remainingOffer] != -1)
            return dp[currentIndex][remainingOffer];

      
        if (remainingOffer) {
            return dp[currentIndex][remainingOffer] = std::min(
                prices[currentIndex] + solve(currentIndex + 1, n, prices, currentIndex + 1, dp),
                solve(currentIndex + 1, n, prices, remainingOffer - 1, dp)
            );
        }

     
        return dp[currentIndex][remainingOffer] = prices[currentIndex] + solve(currentIndex + 1, n, prices, currentIndex + 1, dp);
    }
class Solution{
public:
    int minimumCoins(std::vector<int>& prices) {
        int n = prices.size();
        std::vector<std::vector<int>> dp(n + 1, std::vector<int>(n + 1, -1));

        return solve(0, n, prices, 0, dp);
    }
};
```
#### Python Implementation
```python
def solve(currentIndex, n, prices, remainingOffer, dp):
  if currentIndex == n:
    return 0
  if currentIndex > n:
    return 1e8
  if dp[currentIndex][remainingOffer] != -1:
    return dp[currentIndex][remainingOffer]
  if remainingOffer:
    return dp[currentIndex][remainingOffer] = min(
      prices[currentIndex] + solve(currentIndex + 1, n, prices, currentIndex + 1, dp),
      solve(currentIndex + 1, n, prices, remainingOffer - 1, dp)
    )
  return dp[currentIndex][remainingOffer] = prices[currentIndex] + solve(currentIndex + 1, n, prices, currentIndex + 1, dp)

class Solution:
  def minimumCoins(self, prices):
    n = len(prices)
    dp = [[-1] * (n + 1) for _ in range(n + 1)]
    return solve(0, n, prices, 0, dp)

```

#### JavaScript Implementation

```javascript
function solve(currentIndex, n, prices, remainingOffer, dp) {
  if (currentIndex == n) return 0;
  if (currentIndex > n) return 1e8;
  if (dp[currentIndex][remainingOffer] != -1) return dp[currentIndex][remainingOffer];
  if (remainingOffer) {
    return dp[currentIndex][remainingOffer] = Math.min(
      prices[currentIndex] + solve(currentIndex + 1, n, prices, currentIndex + 1, dp),
      solve(currentIndex + 1, n, prices, remainingOffer - 1, dp)
    );
  }
  return dp[currentIndex][remainingOffer] = prices[currentIndex] + solve(currentIndex + 1, n, prices, currentIndex + 1, dp);
}

class Solution {
  minimumCoins(prices) {
    const n = prices.length;
    const dp = new Array(n + 1).fill(-1).map(() => new Array(n + 1).fill(-1));
    return solve(0, n, prices, 0, dp);
  }
}


```

#### TypeScript Implementation

```typescript
function solve(currentIndex: number, n: number, prices: number[], remainingOffer: number, dp: number[][]): number {
  if (currentIndex == n) return 0;
  if (currentIndex > n) return 1e8;
  if (dp[currentIndex][remainingOffer] != -1) return dp[currentIndex][remainingOffer];
  if (remainingOffer) {
    return dp[currentIndex][remainingOffer] = Math.min(
      prices[currentIndex] + solve(currentIndex + 1, n, prices, currentIndex + 1, dp),
      solve(currentIndex + 1, n, prices, remainingOffer - 1, dp)
    );
  }
  return dp[currentIndex][remainingOffer] = prices[currentIndex] + solve(currentIndex + 1, n, prices, currentIndex + 1, dp);
}

class Solution {
  minimumCoins(prices: number[]): number {
    const n = prices.length;
    const dp: number[][] = new Array(n + 1).fill(-1).map(() => new Array(n + 1).fill(-1));
    return solve(0, n, prices, 0, dp);
  }
}


```

### Complexity Analysis

- **Time Complexity**: O(n^2),where n is the length of the input array prices. This is because the algorithm uses a nested loop to iterate over the array, and the solve function is called recursively with different parameters.

- **Space Complexity**: O(n^2), as the dp array is used to store the results of subproblems, and its size grows quadratically with the size of the input array prices.