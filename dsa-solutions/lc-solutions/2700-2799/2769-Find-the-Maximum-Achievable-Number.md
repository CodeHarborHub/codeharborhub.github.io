---
id: find-the-maximum-achievable-number
title: Find the Maximum Achievable Number
sidebar_label: 2769-Find-the-Maximum-Achievable-Number
tags:
  - Math

description: "This is a solution to the  2769."
---

## Problem Description
Given two integers, `num` and `t`. A number is achievable if it can become equal to `num` after applying the following operation:

Increase or decrease the number by `1`, and simultaneously increase or decrease `num` by `1`.
Return the maximum achievable number after applying the operation at most `t` times.

### Example

**Example 1:**


```
Input: num = 4, t = 1

Output: 6

Explanation:

Apply the following operation once to make the maximum achievable number equal to num:

Decrease the maximum achievable number by 1, and increase num by 1.
```
**Example 2:**
```
Input: num = 3, t = 2

Output: 7

Explanation:

Apply the following operation twice to make the maximum achievable number equal to num:

Decrease the maximum achievable number by 1, and increase num by 1.
```
### Constraints

- `1 <= num, t <= 50`

## Solution Approach

### Intuition:

To efficiently Find the Maximum Achievable Number

### Aproach
1. Define the problem: Determine the maximum achievable X given num and t.
2. Understand the relationship: Recognize that X increases by 2t for every num.
3. Formulate the solution: Return num + 2*t to calculate the maximum achievable X.
4. Implement the solution: Write the code in the desired programming language (JavaScript, TypeScript, Python, or Java).
5. Test and verify: Check the code with various inputs to ensure it produces the correct output.



## Solution Implementation

### Code In Different Languages:

<Tabs>


  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
class Solution {
  theMaximumAchievableX(num, t) {
    return num + 2 * t;
  }
}


    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
class Solution {
  theMaximumAchievableX(num: number, t: number): number {
    return num + 2 * t;
  }
}


    ```

  </TabItem>


  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
    
class Solution:
    def theMaximumAchievableX(self, num: int, t: int) -> int:
        return num + 2 * t

    ```

  </TabItem>

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
public class Solution {
    public int theMaximumAchievableX(int num, int t) {
        return num + 2 * t;
    }
}



    ```
</TabItem>


  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp

class Solution {
public:
    int theMaximumAchievableX(int num, int t) {
        return num+2*t;
    }
};

   ```
  </TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(1)$$, meaning it takes constant time, regardless of the input size. This is because the method performs a simple arithmetic operation that doesn't depend on the size of the input.

- Space Complexity: $$O(1)$$, meaning the method uses a constant amount of space, regardless of the input size. This is because the method doesn't allocate any new memory that scales with the input size.
