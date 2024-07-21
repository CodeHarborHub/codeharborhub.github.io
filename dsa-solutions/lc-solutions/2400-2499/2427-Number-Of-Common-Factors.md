---
id: number-of-common-factors
title: Number of Common Factors
sidebar_label: 2427. Number of Common Factors
tags:
- Math
- Enumeration
- Number Theory
description: "This is a solution to the Number of Common Factors"
---

## Problem Description
Given two positive integers a and b, return the number of common factors of a and b.

An integer x is a common factor of a and b if x divides both a and b.


### Examples

**Example 1:**

```
Input: a = 12, b = 6
Output: 4
Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.
```

**Example 2:**
```
Input: a = 25, b = 30
Output: 2
Explanation: The common factors of 25 and 30 are 1, 5.
```

### Constraints

- `1 <= a, b <= 1000`


    #### Complexity Analysis

    - Time Complexity: $ O(min(a, b)) $ where a and b are the input numbers. This is because the algorithm iterates from 1 to the minimum of a and b, performing a constant amount of work for each iteration.

    - Space Complexity: $ O(1) $ as it only uses a fixed amount of space to store the variables cnt, mini, and i. The input numbers a and b are not modified, and no additional data structures are used.


<Tabs>
  <TabItem value="Solution" label="Solution">

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
   class Solution {
  commonFactors(a, b) {
    let cnt = 0;
    let mini = Math.min(a, b);
    for (let i = 1; i <= mini; i++) {
      if (a % i === 0 && b % i === 0) {
        cnt++;
      }
    }
    return cnt;
  }
}


    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   class Solution {
  commonFactors(a: number, b: number): number {
    let cnt = 0;
    let mini = Math.min(a, b);
    for (let i = 1; i <= mini; i++) {
      if (a % i === 0 && b % i === 0) {
        cnt++;
      }
    }
    return cnt;
  }
}


    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   class Solution:
    def commonFactors(self, a: int, b: int) -> int:
        cnt = 0
        mini = min(a, b)
        for i in range(1, mini + 1):
            if a % i == 0 and b % i == 0:
                cnt += 1
        return cnt


    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   public class Solution {
    public int commonFactors(int a, int b) {
        int cnt = 0;
        int mini = Math.min(a, b);
        for (int i = 1; i <= mini; i++) {
            if (a % i == 0 && b % i == 0) {
                cnt++;
            }
        }
        return cnt;
    }
}


    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
public:
    int commonFactors(int a, int b) {
        int cnt = 0;
        int mini=min(a, b);
        for(int i=1; i<=mini; i++){
            if(a%i==0 && b%i==0) cnt++;
        }
        return cnt;
    }
};

    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>