---
id: calculate-money-in-leetcode-bank
title: Calculate Money in Leetcode Bank
sidebar_label: 1716. Calculate Money in Leetcode Bank
tags: [Array, Simulation, C++, Python, Java]
description: "This is a solution to the Calculate Money in Leetcode Bank problem on LeetCode."
---

## Problem Description

Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

He starts by putting in `$1` on Monday, the first day. Every day from Tuesday to Sunday, he will put in `$1` more than the day before. On every subsequent Monday, he will put in `$1` more than the previous Monday.
Given `n`, return the total amount of money he will have in the Leetcode bank at the end of the `nth` day.

### Examples

**Example 1:**

```
Input: n = 4
Output: 10
Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.

```

**Example 2:**

```
Input: n = 10
Output: 37
Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2nd Monday, Hercy only puts in $2.

```
**Example 3:**
```
Input: n = 20
Output: 96
Explanation: After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.

```
### Constraints

- `1 <= n <= 1000`

## Solution for 1710. Calculate Money in Leetcode Bank

### Intuition
 Hercy contributes money to the Leetcode bank based on a specific pattern. He starts with $1 on the first day and increases his contribution by $1 each subsequent day. Additionally, on each Monday, he increases the contribution by $1 more than the previous Monday. To calculate the total amount after a certain number of days, we need to follow this contribution pattern.
### Approach 

1. Calculate the number of complete weeks `(week_count = n / 7)`.
2. Calculate the total contribution from complete weeks using the arithmetic sum formula for each week: `((week_count * (week_count - 1)) / 2) * 7`.
3. Calculate the total contribution from days beyond complete weeks using the arithmetic sum formula: `(week_count * 28)`.
4. Calculate the contribution from the remaining days (less than a week) using the arithmetic sum formula for the remaining days: `((remaining_days * (remaining_days + 1)) / 2) + (week_count * remaining_days)`.
5. Sum up the contributions calculated in steps `2`, `3`, and `4` to get the total amount. 

### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```python
          class Solution(object):
    def totalMoney(self, n):
        week_count = n // 7
        remaining_days = n % 7
        
        total = ((week_count * (week_count - 1)) // 2) * 7 
        total += week_count * 28
        total += ((remaining_days * (remaining_days + 1)) // 2) + (week_count * remaining_days)
        
        return total
        
    ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```java
          class Solution {
    public int totalMoney(int n) {
        int week_count = n / 7;
        int remaining_days = n % 7;
        
        int total = ((week_count * (week_count - 1)) / 2) * 7; // Contribution from complete weeks
        total += week_count * 28; // Contribution from complete weeks (additional on Mondays)
        total += ((remaining_days * (remaining_days + 1)) / 2) + (week_count * remaining_days); // Contribution from remaining days
        
        return total;
    }
}
    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```cpp
       class Solution {
public:
    int totalMoney(int n) {
        int week_count = n / 7;
        int remaining_days = n % 7;
        
        int total = ((week_count * (week_count - 1)) / 2) * 7; // Contribution from complete weeks
        total += week_count * 28; // Contribution from complete weeks (additional on Mondays)
        total += ((remaining_days * (remaining_days + 1)) / 2) + (week_count * remaining_days); // Contribution from remaining days
        
        return total;
    }
};
    ```
</TabItem>
</Tabs>

### Complexity Analysis

- Time Complexity: $ O(1) $
- Space Complexity: $ O(1)$

## References

- **LeetCode Problem**: [Calculate Money in Leetcode Bank](https://leetcode.com/problems/calculate-money-in-leetcode-bank/description/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/)
