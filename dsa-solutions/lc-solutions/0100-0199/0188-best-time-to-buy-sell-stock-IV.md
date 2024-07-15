---
id: best-time-to-buy-sell-stock-IV
title: Best Time to Buy and Sell Stock IV
sidebar_label: 0188-Best Time to Buy and Sell Stock IV
tags:
- Arrays
- DP
description: "leetcode solution of problem 188"
---

## Problem Description
You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.

Find the maximum profit you can achieve. You may complete at most k transactions: i.e. you may buy at most k times and sell at most k times.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).


### Examples

**Example 1:**
```
Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
```
***Example 2:***
```
Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
```

#### Constraints
- `1 <= k <= 100`
- `1 <= prices.length <= 1000`
-` 0 <= prices[i] <= 1000`


### Approach 
### Approach to Find Maximum Profit with at Most k Transactions

1. **Edge Case Handling**:
   - If `k` is greater than or equal to half the length of `prices`, it means we can perform an unlimited number of transactions.
   - In this case, initialize `sell` to 0 (maximum profit with no stock) and `hold` to negative infinity (maximum profit with stock).
   - Iterate through `prices` to update `sell` and `hold` based on the maximum possible profit at each price.
   - Return the final `sell` value as the result.

2. **General Case**:
   - If `k` is less than half the length of `prices`, initialize two lists: `sell` to store maximum profit after selling a stock, and `hold` to store maximum profit after buying a stock.
   - Both lists have a length of `k + 1`, with `sell` initialized to 0 and `hold` initialized to negative infinity.

3. **Iterate Through Prices**:
   - For each price in `prices`, iterate from `k` down to 1 to update `sell` and `hold`.
   - Update `sell[i]` to be the maximum of itself or the profit from selling the stock held at the current price.
   - Update `hold[i]` to be the maximum of itself or the profit from buying a stock at the current price.

4. **Return Results**: Return `sell[k]`, which represents the maximum profit with at most `k` transactions.


### Solution

#### C++

```cpp
class Solution {
 public:
  int maxProfit(int k, vector<int>& prices) {
    if (k >= prices.size() / 2) {
      int sell = 0;
      int hold = INT_MIN;

      for (const int price : prices) {
        sell = max(sell, hold + price);
        hold = max(hold, sell - price);
      }

      return sell;
    }

    vector<int> sell(k + 1);
    vector<int> hold(k + 1, INT_MIN);

    for (const int price : prices)
      for (int i = k; i > 0; --i) {
        sell[i] = max(sell[i], hold[i] + price);
        hold[i] = max(hold[i], sell[i - 1] - price);
      }

    return sell[k];
  }
};
```

#### PYthon
```python
class Solution:
  def maxProfit(self, k: int, prices: List[int]) -> int:
    if k >= len(prices) // 2:
      sell = 0
      hold = -math.inf

      for price in prices:
        sell = max(sell, hold + price)
        hold = max(hold, sell - price)

      return sell

    sell = [0] * (k + 1)
    hold = [-math.inf] * (k + 1)

    for price in prices:
      for i in range(k, 0, -1):
        sell[i] = max(sell[i], hold[i] + price)
        hold[i] = max(hold[i], sell[i - 1] - price)

    return sell[k]
```

#### Java
```Java
class Solution {
  public int maxProfit(int k, int[] prices) {
    if (k >= prices.length / 2) {
      int sell = 0;
      int hold = Integer.MIN_VALUE;

      for (final int price : prices) {
        sell = Math.max(sell, hold + price);
        hold = Math.max(hold, sell - price);
      }

      return sell;
    }

    int[] sell = new int[k + 1];
    int[] hold = new int[k + 1];
    Arrays.fill(hold, Integer.MIN_VALUE);

    for (final int price : prices)
      for (int i = k; i > 0; --i) {
        sell[i] = Math.max(sell[i], hold[i] + price);
        hold[i] = Math.max(hold[i], sell[i - 1] - price);
      }

    return sell[k];
  }
}
```


### Complexity analysis
- Time Complexity: $𝑂(nk)$
- Space Complexity: $O(k)$
