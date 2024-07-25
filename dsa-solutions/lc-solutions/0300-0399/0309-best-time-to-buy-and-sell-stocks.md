---
id: best-time-to-buy-and-sell-stock
title: Best Time to Buy and Sell Stock
sidebar_label: Best Time to Buy and Sell Stock
tags:
- Array
- Dynamic Programming

description: "This article provides a solution to the Best Time to Buy and Sell Stock problem, which finds the maximum profit that can be obtained by buying and selling a stock at most once."
---

## Problem Description

You are given an array `prices` where `prices[i]` is the price of a given stock on the ith day.

Find the maximum profit you can achieve by buying and selling a stock at most once.

### Examples

**Example 1:**
```
Input: prices = [7, 1, 5, 3, 6, 4]

Output: 5

Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.
```
**Example 2:**
```
Input: prices = [7, 6, 4, 3, 1]

Output: 0

Explanation: In this case, no transaction is done, so the max profit = 0.
```

### Constraints

- $1 <= prices.length <= 10^5$
- $0 <= prices[i] <= 10^4$

## Solution Approach

To solve this problem, we can use a simple approach involving iterating through the array and keeping track of the minimum price seen so far and the maximum profit that can be achieved.

### Algorithm

1. Initialize `min_price` to infinity and `max_profit` to 0.
2. Iterate through each price in the `prices` array:
   - Update `min_price` to be the minimum of `min_price` and the current price.
   - Update `max_profit` to be the maximum of `max_profit` and the difference between the current price and `min_price`.
3. Return `max_profit`.



#### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@mahek0620"/>
   ```python

    class Solution(object):
    def maxProfit(self, prices):
        if not prices:
            return 0
        
        n = len(prices)
        
        # Initialize arrays to store states
        hold = [0] * n  # Maximum profit if holding a stock on day i
        sold = [0] * n  # Maximum profit if sold a stock on day i
        rest = [0] * n  # Maximum profit if in cooldown or did nothing on day i
        
        # Base cases
        hold[0] = -prices[0]  # Buying the stock on day 0
        sold[0] = 0           # Cannot sell on day 0
        rest[0] = 0           # No activity on day 0
        
        # Fill arrays based on relations
        for i in range(1, n):
            hold[i] = max(hold[i-1], rest[i-1] - prices[i])
            sold[i] = hold[i-1] + prices[i]
            rest[i] = max(rest[i-1], sold[i-1])
        return max(sold[n-1], rest[n-1])
  </TabItem>
  
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@mahek0620"/>

```java
    public class Solution {
    public int maxProfit(int[] prices) {
        if (prices.length == 0) return 0;
        
        int n = prices.length;
        
        int[] hold = new int[n];
        int[] sold = new int[n];
        int[] rest = new int[n];
        
        hold[0] = -prices[0];
        sold[0] = 0;
        rest[0] = 0;
        
        for (int i = 1; i < n; i++) {
            hold[i] = Math.max(hold[i-1], rest[i-1] - prices[i]);
            sold[i] = hold[i-1] + prices[i];
            rest[i] = Math.max(rest[i-1], sold[i-1]);
        }
        
        return Math.max(sold[n-1], rest[n-1]);
    }
    }


```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@mahek0620"/>
   ```
     
     #include <vector>
    #include <algorithm>

    class Solution {
    public:
    int maxProfit(std::vector<int>& prices) {
        if (prices.empty()) return 0;
        
        int n = prices.size();
        
        std::vector<int> hold(n);
        std::vector<int> sold(n);
        std::vector<int> rest(n);
        
        hold[0] = -prices[0];
        sold[0] = 0;
        rest[0] = 0;
        
        for (int i = 1; i < n; i++) {
            hold[i] = std::max(hold[i-1], rest[i-1] - prices[i]);
            sold[i] = hold[i-1] + prices[i];
            rest[i] = std::max(rest[i-1], sold[i-1]);
        }
        
        return std::max(sold[n-1], rest[n-1]);
    }

    // Example usage:
    int main() {
        Solution solution;
        std::vector<int> prices = {1, 2, 3, 0, 2};
        std::cout << solution.maxProfit(prices) << std::endl;  // Output: 3
        return 0;
    }
    };
    ```

  </TabItem>
</Tabs>

## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
- **Solution Link:** [best-time-to-buy-and-sell-stock-with-cooldown Solution on LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/)
- **Authors GeeksforGeeks Profile:** [Mahek Patel](https://leetcode.com/u/mahekrpatel611/)
