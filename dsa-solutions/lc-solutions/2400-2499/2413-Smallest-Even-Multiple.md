---
id: smalllest-even-multiple
title:  Smallest Even Multiple
sidebar_label: 2413-Smallest-Even-Multiple
tags:
  - Math
  - Number Theory
---

## Problem Description
Given a positive integer `n`, return the smallest positive integer that is a multiple of both `2` and `n`.


### Example

**Example 1:**


```
Input: n = 5
Output: 10
Explanation: The smallest multiple of both 5 and 2 is 10.
```
**Example 2:**
```
Input: n = 6
Output: 6
Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.

```
### Constraints

- `1 <= n <= 150`

## Solution Approach

### Intuition:

To efficiently determine the smallest even multiple
## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
    class Solution {
  smallestEvenMultiple(n) {
    for (let i = 1; i <= 2 * n; i++) {
      const multiply = n * i;
      if (multiply % 2 === 0) {
        return multiply;
      }
    }
    return -1;
  }
}

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
    class Solution {
  smallestEvenMultiple(n: number): number {
    for (let i = 1; i <= 2 * n; i++) {
      const multiply = n * i;
      if (multiply % 2 === 0) {
        return multiply;
      }
    }
    return -1;
  }
}

    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
    class Solution:
    def smallestEvenMultiple(self, n: int) -> int:
        for i in range(1, 2 * n + 1):
            multiply = n * i
            if multiply % 2 == 0:
                return multiply
        return -1

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
    public class Solution {
    public int smallestEvenMultiple(int n) {
        for (int i = 1; i <= 2 * n; i++) {
            int multiply = n * i;
            if (multiply % 2 == 0) {
                return multiply;
            }
        }
        return -1;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp
class Solution {
public:
    int smallestEvenMultiple(int n) {
        for(int i=1; i<=2*n; i++){
            int multiply = n*i;
            if(multiply%2==0) {
                return multiply;
                break;

            }
        }
        return -1;
    }
};
```
</TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(2*n)$$
- Space Complexity: $$O(1)$$
- The time complexity is $$O(2*n)$$ because we are iterating from 1 to 2*n.
- The space complexity is $$O(1)$$ because we are not using any extra space.

