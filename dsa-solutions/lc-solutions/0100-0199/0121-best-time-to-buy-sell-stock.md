---
id: best-time-to-buy-sell-stock
title: Best Time to Buy and Sell Stock Solution
sidebar_label: 0121-Best-Time-to-Buy-and-Sell-Stock
tags:
  - Best Time to Buy and Sell Stock
  - Array
  - LeetCode
  - Python
  - JavaScript

description: "This is a solution to the Best Time to Buy and Sell Stock problem on LeetCode."
---

In this page, we will solve the Best Time to Buy and Sell Stock problem using a two-pointer approach. We will provide the implementation of the solution in Python and JavaScript.

## Problem Description

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`-th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

### Examples

**Example 1:**

```plaintext
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
```

**Example 2:**

```plaintext
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

### Constraints

- `1 <= prices.length <= 10^5`
- `0 <= prices[i] <= 10^4`

---

## Solution for Best Time to Buy and Sell Stock Problem

### Intuition and Approach

The problem can be solved using a two-pointer approach where we track the minimum price to buy and the maximum profit we can achieve at each step.

<Tabs>
 <tabItem value="Two-pointer Approach" label="Two-pointer Approach">

### Approach: Two-pointer

We use two pointers, `left` (to buy) and `right` (to sell), and iterate through the prices array to find the maximum profit.

#### Implementation

```jsx live
function BestTimeToBuyAndSellStock() {
  const prices = [7, 1, 5, 3, 6, 4]; // Sample input

  const maxProfit = function (prices) {
    let left = 0; // Buy
    let right = 1; // Sell
    let max_profit = 0;

    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // Our current profit
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }

    return max_profit;
  };

  const result = maxProfit(prices);
  return (
    <div>
      <p>
        <b>Input:</b> prices = {JSON.stringify(prices)}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Vipullakum007"/>
   ```javascript
    function maxProfit(prices) {
      let left = 0; // Buy
      let right = 1; // Sell
      let max_profit = 0;

      while (right < prices.length) {
        if (prices[left] < prices[right]) {
          let profit = prices[right] - prices[left]; // our current profit
          max_profit = Math.max(max_profit, profit);
        } else {
          left = right;
        }
        right++;
      }

      return max_profit;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/> 
   ```python
    class Solution:
        def maxProfit(self, prices: List[int]) -> int:
            left, right = 0, 1  # Buy, Sell
            max_profit = 0

            while right < len(prices):
                if prices[left] < prices[right]:
                    profit = prices[right] - prices[left]  # our current profit
                    max_profit = max(max_profit, profit)
                else:
                    left = right
                right += 1

            return max_profit
    ```

  </TabItem>
  <TabItem value="Java" label="Java"> 
  <SolutionAuthor name="@Vipullakum007"/>
   ```java
    class Solution {
        public int maxProfit(int[] prices) {
            int left = 0; // Buy
            int right = 1; // Sell
            int max_profit = 0;

            while (right < prices.length) {
                if (prices[left] < prices[right]) {
                    int profit = prices[right] - prices[left]; // our current profit
                    max_profit = Math.max(max_profit, profit);
                } else {
                    left = right;
                }
                right++;
            }

            return max_profit;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
   ```cpp
    class Solution {
    public:
        int maxProfit(vector<int>& prices) {
            int left = 0; // Buy
            int right = 1; // Sell
            int max_profit = 0;

            while (right < prices.size()) {
                if (prices[left] < prices[right]) {
                    int profit = prices[right] - prices[left]; // our current profit
                    max_profit = max(max_profit, profit);
                } else {
                    left = right;
                }
                right++;
            }

            return max_profit;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(1)$$
- Where `n` is the length of the prices array.

</tabItem>
</Tabs>

:::tip Note

By using a two-pointer approach, we can efficiently solve the Best Time to Buy and Sell Stock problem with a linear time complexity.

:::

---

## References

- **LeetCode Problem:** [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- **Solution Link:** [Best Time to Buy and Sell Stock Solution on LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/)
- **Authors GeeksforGeeks Profile:** [Vipul lakum](https://www.geeksforgeeks.org/user/lakumvipwjge/)

---
