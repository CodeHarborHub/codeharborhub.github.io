---
id: count-integers-even-digit-sum
title: Count Integers With Even Digit Sum
sidebar_label: 2180-Count-Integers-With-Even-Digit-Sum
tags:
  - Math
  - Simulation

description: The problem no. is 2180. The Problem is to Count Integers With Even Digit Sum
---

## Problem Description
Given a positive integer `num`, return the number of positive integers less than or equal to `num` whose digit sums are even.

The digit sum of a positive integer is the sum of all its digits.


### Example

**Example 1:**


```
Input: num = 4
Output: 2
Explanation:
The only integers less than or equal to 4 whose digit sums are even are 2 and 4.  
```
**Example 2:**
```
Input: num = 30
Output: 14
Explanation:
The 14 integers less than or equal to 30 whose digit sums are even are
2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, and 28.
```
### Constraints

- `1 <= num <= 1000`

## Solution Approach

### Intuition:

To efficiently Count Integers With Even Digit Sum


## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
    
class Solution {
  countEven(num) {
    let cnt = 0;
    for(let i = 1; i <= num; i++){
      let sum = 0;
      if(i < 10){
        if(i % 2 == 0) cnt++;
      } else{
        let temp = i;
        while(temp > 0){
          let rev = temp % 10;
          sum += rev;
          temp = Math.floor(temp / 10);
        }
        if(sum % 2 == 0) cnt++;
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
  countEven(num: number): number {
    let cnt = 0;
    for(let i = 1; i <= num; i++){
      let sum = 0;
      if(i < 10){
        if(i % 2 == 0) cnt++;
      } else{
        let temp = i;
        while(temp > 0){
          let rev = temp % 10;
          sum += rev;
          temp = Math.floor(temp / 10);
        }
        if(sum % 2 == 0) cnt++;
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
    def countEven(self, num):
        cnt = 0
        for i in range(1, num + 1):
            sum = 0
            if i < 10:
                if i % 2 == 0:
                    cnt += 1
            else:
                temp = i
                while temp > 0:
                    rev = temp % 10
                    sum += rev
                    temp = temp // 10
                if sum % 2 == 0:
                    cnt += 1
        return cnt


    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
   public class Solution {
    public int countEven(int num) {
        int cnt = 0;
        for(int i = 1; i <= num; i++){
            int sum = 0;
            if(i < 10){
                if(i % 2 == 0) cnt++;
            } else{
                int temp = i;
                while(temp > 0){
                    int rev = temp % 10;
                    sum += rev;
                    temp = temp / 10;
                }
                if(sum % 2 == 0) cnt++;
            }
        }
        return cnt;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp
class Solution {
public:
    int countEven(int num) {
        int cnt = 0;
        for(int i=1; i<=num; i++){
            int sum = 0;
            if(i<10){
                if(i%2==0) cnt++;
            }
            else{
                int temp = i;
                while(temp>0){
                    int rev = temp%10;
                    sum+=rev;
                    temp/=10;
                }
                if(sum%2==0) cnt++;

            }
        }
        return cnt;
    }
};

```
</TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(1)$$
- The time complexity is $$O(n)$$,where n is the input number num. This is because the algorithm uses a single loop that iterates from 1 to num.
- The space complexity is $$O(1)$$ because we are not using any extra space.