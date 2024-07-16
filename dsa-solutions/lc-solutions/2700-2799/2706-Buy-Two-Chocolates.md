---
id: buy-two-chocolates
title:  Buy Two Chocolates
sidebar_label: 2706-Buy-Two-Chocolates
tags:
  - Array
  - Sorting

description: "This is a solution to the  2706."
---

## Problem Description
You are given an integer array prices representing the `prices` of various chocolates in a store. You are also given a single integer `money`, which represents your initial amount of money.

You must buy exactly two chocolates in such a way that you still have some non-negative leftover money. You would like to minimize the sum of the prices of the two chocolates you buy.

Return the amount of money you will have leftover after buying the two chocolates. If there is no way for you to buy two chocolates without ending up in debt, return `money`. Note that the leftover must be non-negative.


### Example

**Example 1:**


```
Input: prices = [1,2,2], money = 3
Output: 0
Explanation: Purchase the chocolates priced at 1 and 2 units respectively. You will have 3 - 3 = 0 units of money afterwards. Thus, we return 0.
```
**Example 2:**
```
Input: prices = [3,2,3], money = 3
Output: 3
Explanation: You cannot buy 2 chocolates without going in debt, so we return 3.
```
### Constraints

- `2 <= prices.length <= 50`

## Solution Approach

### Intuition:

To efficiently determine the amount of money you will have leftover after buying the two chocolates
## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
   class Solution {
  buyChoco(prices, money) {
    prices.sort((a, b) => a - b);
    if (prices[0] + prices[1] > money) {
      return money;
    } else {
      return money - prices[0] - prices[1];
    }
  }
}
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
    class Solution {
  buyChoco(prices: number[], money: number): number {
    prices.sort((a, b) => a - b);
    if (prices[0] + prices[1] > money) {
      return money;
    } else {
      return money - prices[0] - prices[1];
    }
  }
}
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
    
class Solution:
  def buyChoco(self, prices: List[int], money: int) -> int:
    prices.sort()
    if prices[0] + prices[1] > money:
      return money
    else:
      return money - prices[0] - prices[1]
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
    public class Solution {
  public int buyChoco(int[] prices, int money) {
    Arrays.sort(prices);
    if (prices[0] + prices[1] > money) {
      return money;
    } else {
      return money - prices[0] - prices[1];
    }
  }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp
   class Solution {
public:
    int buyChoco(vector<int>& prices, int money) {
        sort(prices.begin(), prices.end());
        if(prices[0]+prices[1]>money) return money;
        else return money-prices[0]-prices[1];
    }
};
   ```
</TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n*log(n))$$
- Space Complexity: $$O(1)$$
- The time complexity is $$O(n*log(n))$$ where n is the length of the prices array. This is because the function sorts the prices array.
- The space complexity is $$O(1)$$ because we are not using any extra space.