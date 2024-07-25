---
id: best-time-to-buy-sell-stock-II
title: Best Time to Buy and Sell Stock Solution -II
sidebar_label: 0122 Best-Time-to-Buy-and-Sell-Stock -II
tags:
  - Best Time to Buy and Sell Stock

description: "This is a solution to the Best Time to Buy and Sell Stock problem -II on LeetCode."
---


## Problem Description
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.


### Examples

**Example 1:**

```plaintext
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
```

**Example 2:**

```plaintext
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
```

**Example 3:**
```plaintext
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
```

### Constraints

- `1 <= prices.length <= 3 * 10^4`
- `0 <= prices[i] <= 10^4`

---

## Solution for Best Time to Buy and Sell Stock Problem
### Intuition 
In the given problem, we are provided with an array named "prices," where prices[i] represents the current price of a stock on day i. The task is to determine the maximum profit that can be achieved from selling the stock.

### Approach 
- To solve this question we will use Greedy Algorithm.

- Now if you don't know anything about Greedy algorithm here is the small explanation of the Greedy.

- Greedy algorithms are a class of algorithms that make locally optimal choices at each step with the hope of finding a global optimum solution. In these algorithms, decisions are made based on the information available at the current moment without considering the consequences of these decisions in the future. The key idea is to select the best possible choice at each step, leading to a solution that may not always be the most optimal but is often good enough for many problems.

### Code Explanation 
- Variable Initialization:

- max is initialized to 0. This variable will accumulate the maximum profit throughout the iteration.
- start is initialized to prices[0], the price of the stock on the first day. This variable represents the buying price of the stock.
- len is initialized to prices.length, the length of the prices array, representing the total number of days.
Iteration: A for loop iterates through the prices array starting from the second element (i = 1) to the end of the array (i < len). This loop is used to calculate the profit for each transaction.

#### Profit Calculation:

- Within the loop, there's an if statement checking if the current price (prices[i]) is greater than the buying price (start). If true, it indicates a potential profit opportunity.
- The difference between the current price and the buying price (prices[i] - start) is calculated and added to max. This step simulates selling the stock bought at start price, capturing the profit, and then considering the current price as a new buying price for potential future transactions.
- Regardless of whether a profit was made or not, the start is updated to the current price (prices[i]). This step prepares for the next iteration, considering the current day's price as the new buying price.
- Return Statement: After the loop finishes executing, the method returns the accumulated max value, which represents the maximum profit that could have been achieved based on the given stock prices.


### Code in Different languages
#### Code in C++

```c++
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int max = 0;
        int start = prices[0];
        int len = prices.size();
        for(int i = 1;i<len; i++){
            if(start < prices[i]){
                max += prices[i] - start;
            }
            start = prices[i];
        }
        return max;
    }
};
```

#### Code in Python
```python
class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        max = 0
        start = prices[0]
        len1 = len(prices)
        for i in range(0 , len1):
            if start < prices[i]: 
                max += prices[i] - start
            start = prices[i]
        return max
```


#### Code in Java
```Java
class Solution {
    public int maxProfit(int[] prices) {
        int max = 0;
        int start = prices[0];
        int len = prices.length;
        for(int i = 1;i<len; i++){
            if(start < prices[i]) max += prices[i] - start;
            start = prices[i];
        }
        return max;
    }
}
```            




### Complexity Analiysis

- Time complexity: `O(N)`
- Space complexity: `O(1)`
---