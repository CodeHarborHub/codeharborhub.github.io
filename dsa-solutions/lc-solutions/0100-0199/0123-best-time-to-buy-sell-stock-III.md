---
id: best-time-to-buy-sell-stock-III
title: Best Time to Buy and Sell Stock Solution -III
sidebar_label: 0123 -Best-Time-to-Buy-and-Sell-Stock -III
tags:
  - Best Time to Buy and Sell Stock
  - Array
  - LeetCode
  - Python
  - JavaScript

description: "This is a solution to the Best Time to Buy and Sell Stock problem -III on LeetCode."
---


## Problem Description
You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete at most two transactions.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

### Examples

**Example 1:**

```plaintext
Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
```

**Example 2:**

```plaintext
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
```

**Example 3:**
```plaintext
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

### Constraints

- `1 <= prices.length <= 10^5`
- `0 <= prices[i] <= 10^5`

---

## Solution for Best Time to Buy and Sell Stock Problem
### Intuition
- The problem involves finding the maximum profit with at most two transactions, where a transaction consists of buying and selling a stock. The key challenge is to manage the transactions optimally such that the total profit is maximized. The first thought is to split the problem into two parts: finding the maximum profit up to each day and finding the maximum profit from each day to the end.

### Prerequisite
- Before we move forward I would like you to take through basic problem
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/5378235/tc-on-sc-o1-cpp-java-c-python/

### Approach
- First Transaction (Right to Left Scan)
- Second Transaction (Left to Right Scan)

### Code in Different languages
#### Code in C++

```c++
class Solution {
public:
    int maxProfit(std::vector<int>& prices) {
        int n = prices.size();
        if (n == 0) return 0;

        // Array to store maximum profit from day i to the end
        std::vector<int> maxProfitFromRight(n);
        int maxPriceFromRight = 0;
        int maxProfit = 0;

        // Calculate the maximum profit that can be obtained by one transaction
        // starting from each day to the end
        for (int i = n - 1; i >= 0; --i) {
            maxPriceFromRight = std::max(maxPriceFromRight, prices[i]);
            maxProfit = std::max(maxProfit, maxPriceFromRight - prices[i]);
            maxProfitFromRight[i] = maxProfit;
        }

        // Minimum price from the left
        int minPriceFromLeft = INT_MAX;
        int totalMaxProfit = 0;

        // Calculate the maximum profit with at most two transactions
        for (int i = 0; i < n; ++i) {
            minPriceFromLeft = std::min(minPriceFromLeft, prices[i]);
            int profitWithCurrentTransaction = prices[i] - minPriceFromLeft;
            totalMaxProfit = std::max(totalMaxProfit, profitWithCurrentTransaction + maxProfitFromRight[i]);
        }

        return totalMaxProfit;
    }
};
```

```python
class Solution:
  def maxProfit(self, prices: List[int]) -> int:
    if not prices:
        return 0

    # initialize variables for first buy, first sell, second buy, and second sell
    buy1, buy2 = float('inf'), float('inf')
    sell1, sell2 = 0, 0

    # iterate over prices to update buy and sell values
    for price in prices:
        # update first buy and sell values
        buy1 = min(buy1, price)
        sell1 = max(sell1, price - buy1)
        # update second buy and sell values
        buy2 = min(buy2, price - sell1)
        sell2 = max(sell2, price - buy2)

    return sell2
```




### Complexity Analiysis

- Time complexity:` O(n)`
- Space complexity: `O(n)`
---