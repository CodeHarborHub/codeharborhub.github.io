---
id: divisible-and-nondivisible-sums-difference
title:  Divisible and Non-divisible Sums Difference
sidebar_label: 2894-Diivisible-And-Nondivisible-Sums-Difference
tags:
  - Math

description: "This is a solution to the  2894. Find difference of divisible and nondivisible sums."
---

## Problem Description
You are given positive integers `n` and `m`.

Define two integers, `num1` and `num2`, as follows:

`num1`: The sum of all integers in the range `[1, n]` that are not divisible by `m`.
`num2`: The sum of all integers in the range `[1, n]` that are divisible by `m`.
Return the integer `num1 - num2`.


### Example

**Example 1:**


```
Input: n = 10, m = 3
Output: 19
Explanation: In the given example:
- Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
- Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum of those integers = 18.
We return 37 - 18 = 19 as the answer.
```
**Example 2:**
```
Input: n = 5, m = 6
Output: 15
Explanation: In the given example:
- Integers in the range [1, 5] that are not divisible by 6 are [1,2,3,4,5], num1 is the sum of those integers = 15.
- Integers in the range [1, 5] that are divisible by 6 are [], num2 is the sum of those integers = 0.
We return 15 - 0 = 15 as the answer.
```
### Constraints

- `1 <= n, m <= 1000`

## Solution Approach

### Intuition:

To efficiently determine the difference of divisible and nondivisible sums.
## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
   class Solution {
  differenceOfSums(n, m) {
    let num1 = 0;
    let num2 = 0;
    for (let i = 1; i <= n; i++) {
      if (i % m !== 0) {
        num1 += i;
      } else {
        num2 += i;
      }
    }
    return num1 - num2;
  }
}




    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
    class Solution {
  differenceOfSums(n: number, m: number): number {
    let num1: number = 0;
    let num2: number = 0;
    for (let i: number = 1; i <= n; i++) {
      if (i % m !== 0) {
        num1 += i;
      } else {
        num2 += i;
      }
    }
    return num1 - num2;
  }
}


    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
    
class Solution:
  def differenceOfSums(self, n: int, m: int) -> int:
    num1 = 0
    num2 = 0
    for i in range(1, n + 1):
      if i % m != 0:
        num1 += i
      else:
        num2 += i
    return num1 - num2
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
    public class Solution {
  public int differenceOfSums(int n, int m) {
    int num1 = 0;
    int num2 = 0;
    for (int i = 1; i <= n; i++) {
      if (i % m != 0) {
        num1 += i;
      } else {
        num2 += i;
      }
    }
    return num1 - num2;
  }
}
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp
   class Solution {
public:
    int differenceOfSums(int n, int m) {
        int num1 = 0;
        int num2 = 0;
        for(int i=1; i<=n; i++){
            if(i%m!=0) num1+=i;
            else num2+=i;
        }
        return num1-num2;
    }
};
   ```
</TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(1)$$
- The time complexity is $$O(n)$$ where n input. This is because the function iterates from 1 to n once, performing a constant amount of work for each element.
- The space complexity is $$O(1)$$ because we are not using any extra space.