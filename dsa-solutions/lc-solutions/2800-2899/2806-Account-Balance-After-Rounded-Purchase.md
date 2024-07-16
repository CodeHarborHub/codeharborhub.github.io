---
id: account-balance-after-rounded-purchase
title: Account Balance After Rounded Purchase
sidebar_label: 2806. Account Balance After Rounded Purchase
tags: [Array, Simulation, C++, Python, Java]
description: "This is a solution to the Account Balance After Rounded Purchase problem on LeetCode."
---

## Problem Description

Initially, you have a bank account balance of `100` dollars.

You are given an integer purchaseAmount representing the amount you will spend on a purchase in dollars, in other words, its price.

When making the purchase, first the purchaseAmount is rounded to the nearest multiple of `10`. Let us call this value roundedAmount. Then, roundedAmount dollars are removed from your bank account.

Return an integer denoting your final bank account balance after this purchase.

Notes:

- 0 is considered to be a multiple of 10 in this problem.
- When rounding, 5 is rounded upward `(5 is rounded to 10, 15 is rounded to 20, 25 to 30, and so on)`.

### Examples

**Example 1:**

```
Input: purchaseAmount = 9

Output: 90

Explanation:

The nearest multiple of 10 to 9 is 10. So your account balance becomes 100 - 10 = 90.

```

**Example 2:**

```
Input: purchaseAmount = 15

Output: 80

Explanation:

The nearest multiple of 10 to 15 is 20. So your account balance becomes 100 - 20 = 80.

```

### Constraints

- `0 <= purchaseAmount <= 100`

## Solution for 1713. Account Balance After Rounded Purchase

### Intuition
The problem is asking to find the nearest multiple of `10` to the given purchaseAmount and subtract that value from the initial account balance of `100` dollars.

### Approach

To find the nearest multiple of `10`, we can take the remainder of the purchaseAmount when divided by `10`. If the remainder is less than `5`, then the nearest multiple of `10` will be obtained by subtracting the remainder from the purchaseAmount. Otherwise, we need to add the difference between 10 and the remainder to the purchaseAmount to get the nearest multiple of `10`.


### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```python
             class Solution:
    def accountBalanceAfterPurchase(self, purchaseAmount: int) -> int:
        rem = purchaseAmount % 10
        if rem < 5:
            purchaseAmount = purchaseAmount - rem
        else:
            purchaseAmount = purchaseAmount + (10 - rem)

        return 100 - purchaseAmount

    ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```java
          public class Solution {
    public int accountBalanceAfterPurchase(int purchaseAmount) {
        int rem = purchaseAmount % 10;
        if (rem < 5)
            purchaseAmount = purchaseAmount - rem;
        else
            purchaseAmount = purchaseAmount + (10 - rem);

        return (100 - purchaseAmount);
    }
};
    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```cpp
    class Solution {
public:
    int accountBalanceAfterPurchase(int p) {
        int rem=p%10;
        if(rem<5)
            p=p-rem;
        else
            p=p+(10-rem);
        
        return (100-p);
    }
};

```
</TabItem>
</Tabs>

### Complexity Analysis

- Time Complexity: $ O(1) $
- Space Complexity: $ O(1)$

## References

- **LeetCode Problem**: [Account Balance After Rounded Purchase](https://leetcode.com/problems/account-balance-after-rounded-purchase/description/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/)
