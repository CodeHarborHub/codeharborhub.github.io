---
id: count-operations-to-obtain-zero
title:  Count Operations to Obtain Zero
sidebar_label: 2169-Count-Operations-to-Obtain-Zero
tags:
  - Math
  - Simulation

description: The problem no. is 2169. The Problem is to count Operations to Obtain Zero.
---

## Problem Description
You are given two non-negative integers `num1` and `num2`.

In one operation, if `num1 >= num2`, you must subtract `num2` from `num1`, otherwise subtract `num1` from `num2`.

For example, if `num1 = 5` and `num2 = 4`, subtract `num2` from `num1`, thus obtaining `num1 = 1` and `num2 = 4`. However, if `num1 = 4` and `num2 = 5`, after one operation, `num1 = 4` and `num2 = 1`.
Return the number of operations required to make either `num1 = 0` or `num2 = 0`.


### Example

**Example 1:**


```
Input: num1 = 2, num2 = 3
Output: 3
Explanation: 
- Operation 1: num1 = 2, num2 = 3. Since num1 < num2, we subtract num1 from num2 and get num1 = 2, num2 = 3 - 2 = 1.
- Operation 2: num1 = 2, num2 = 1. Since num1 > num2, we subtract num2 from num1.
- Operation 3: num1 = 1, num2 = 1. Since num1 == num2, we subtract num2 from num1.
Now num1 = 0 and num2 = 1. Since num1 == 0, we do not need to perform any further operations.
So the total number of operations required is 3.
```
**Example 2:**
```
Input: num1 = 10, num2 = 10
Output: 1
Explanation: 
- Operation 1: num1 = 10, num2 = 10. Since num1 == num2, we subtract num2 from num1 and get num1 = 10 - 10 = 0.
Now num1 = 0 and num2 = 10. Since num1 == 0, we are done.
So the total number of operations required is 1.
```
### Constraints

- `0 <= num1, num2 <= 105`

## Solution Approach

### Intuition:

To efficiently Count Operations to Obtain Zero
## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
    
class Solution {
  countOperations(num1, num2) {
    let cnt = 0;
    while(num1 !== 0 && num2 !== 0){
      if(num1 >= num2){
        cnt += Math.floor(num1 / num2);
        num1 = num1 % num2;
      } else {
        cnt += Math.floor(num2 / num1);
        num2 = num2 % num1;
      }
    }
    return cnt;
  }
}



    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
    
class Solution {
  countOperations(num1: number, num2: number): number {
    let cnt = 0;
    while(num1 !== 0 && num2 !== 0){
      if(num1 >= num2){
        cnt += Math.floor(num1 / num2);
        num1 = num1 % num2;
      } else {
        cnt += Math.floor(num2 / num1);
        num2 = num2 % num1;
      }
    }
    return cnt;
  }
}

    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
    
class Solution:
    def countOperations(self, num1, num2):
        cnt = 0
        while num1 != 0 and num2 != 0:
            if num1 >= num2:
                cnt += num1 // num2
                num1 = num1 % num2
            else:
                cnt += num2 // num1
                num2 = num2 % num1
        return cnt



    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
    public class Solution {
    public int countOperations(int num1, int num2) {
        long cnt = 0;
        while(num1 != 0 && num2 != 0){
            if(num1 >= num2){
                cnt += num1 / num2;
                num1 = num1 % num2;
            } else {
                cnt += num2 / num1;
                num2 = num2 % num1;
            }
        }
        return (int) cnt;
    }
}




    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp
class Solution {
public:
    int countOperations(int num1, int num2) {
        long long cnt = 0;
        while(num1!=0 && num2!=0){
            if(num1>=num2){
                cnt += num1/num2;
                num1 = num1%num2;
            } 
            else {
                cnt += num2/num1;
                num2 = num2%num1;
            }
        }
        return cnt;

    }
};

```
</TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(log(max(num1, num2)))$$
- Space Complexity: $$O(1)$$
- The time complexity is $$O(log(max(num1, num2)))$$, where num1 and num2 are the input numbers. This is because in each iteration, the larger number is reduced by a factor of at least 2 (due to the division and modulo operations).
- The space complexity is $$O(1)$$ because we are not using any extra space.