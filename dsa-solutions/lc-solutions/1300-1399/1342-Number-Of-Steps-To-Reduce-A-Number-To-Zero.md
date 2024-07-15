---
id: number-of-steps-to-reduce-a-number-to-zero
title:  Number of Steps to Reduce a Number to Zero
sidebar_label: 1342-Number-Of-Steps-To-Reduce-A-Number-To-Zero
tags:
  - Math
  - Bit MManupulation
---

## Problem Description
Given an integer `num`, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by `2`, otherwise, you have to subtract `1` from it.


### Example

**Example 1:**


```
Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.
```
**Example 2:**
```
Input: num = 8
Output: 4
Explanation: 
Step 1) 8 is even; divide by 2 and obtain 4. 
Step 2) 4 is even; divide by 2 and obtain 2. 
Step 3) 2 is even; divide by 2 and obtain 1. 
Step 4) 1 is odd; subtract 1 and obtain 0.
```
### Constraints

- `0 <= num <= 106`

## Solution Approach

### Intuition:

To efficiently determine the Number of Steps to Reduce a Number to Zero
## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
    
class Solution {
    numberOfSteps(num) {
        let cnt = 0;
        while (num > 0) {
            if (num % 2 === 0) {
                num /= 2;
                cnt++;
            } else {
                num -= 1;
                cnt++;
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
    numberOfSteps(num: number): number {
        let cnt = 0;
        while (num > 0) {
            if (num % 2 === 0) {
                num /= 2;
                cnt++;
            } else {
                num -= 1;
                cnt++;
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
    def numberOfSteps(self, num: int) -> int:
        cnt = 0
        while num > 0:
            if num % 2 == 0:
                num //= 2
                cnt += 1
            else:
                num -= 1
                cnt += 1
        return cnt


    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
    public class Solution {
    public int numberOfSteps(int num) {
        int cnt = 0;
        while (num > 0) {
            if (num % 2 == 0) {
                num /= 2;
                cnt++;
            } else {
                num -= 1;
                cnt++;
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
    int numberOfSteps(int num) {
        int cnt = 0;
        while(num>0){
            if(num%2==0){
             num/=2;
             cnt++;
            }
            else{
             num-=1;
             cnt++;
            }
        }
        return cnt;
    }
};
```
</TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(log(n))$$
- Space Complexity: $$O(1)$$
- The time complexity is $$O(log(n))$$ where n is the input number num. This is because in each iteration of the while loop, the value of num is halved (or decreased by 1), which effectively reduces the number of bits required to represent num by 1. Since the loop runs until num becomes 0, the number of iterations is proportional to the number of bits in the binary representation of num, which is roughly log2(n).
- The space complexity is $$O(1)$$ because we are not using any extra space.