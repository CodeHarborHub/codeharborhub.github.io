---
id: number-of-students-doing-homework-at-a-given-time
title:  Number of Students Doing Homework at a Given Time
sidebar_label: 1450-Number-Of-Students-Doing-Homework-At-A-Given-Time
tags:
  - Array

definition: This is problem no. 1450 on leetcode. the problem is finding the Number of Students Doing Homework at a Given Time
---

## Problem Description
Given two integer arrays `startTime` and `endTime` and given an integer `queryTime`.

The `ith` student started doing their homework at the time `startTime[i]` and finished it at time `endTime[i]`.

Return the number of students doing their homework at time `queryTime`. More formally, return the number of students where `queryTime` lays in the interval `[startTime[i], endTime[i]]` inclusive.


### Example

**Example 1:**
```
Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
Output: 1
Explanation: We have 3 students where:
The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.
```
**Example 2:**
```
Input: startTime = [4], endTime = [4], queryTime = 4
Output: 1
Explanation: The only student was doing their homework at the queryTime.
```
### Constraints

- `1 <= startTime[i] <= endTime[i] <= 1000`

## Solution Approach

### Intuition:

To efficiently determine the Number of Students Doing Homework at a Given Time
## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
    
class Solution {
    busyStudent(startTime, endTime, queryTime) {
        let n = endTime.length;
        let cnt = 0;
        for (let i = 0; i < n; i++) {
            if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
                cnt++;
            } else if (startTime[i] === queryTime || endTime[i] === queryTime) {
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
    busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
        let n = endTime.length;
        let cnt = 0;
        for (let i = 0; i < n; i++) {
            if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
                cnt++;
            } else if (startTime[i] === queryTime || endTime[i] === queryTime) {
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
    def busyStudent(self, startTime: List[int], endTime: List[int], queryTime: int) -> int:
        n = len(endTime)
        cnt = 0
        for i in range(n):
            if startTime[i] <= queryTime <= endTime[i]:
                cnt += 1
            elif startTime[i] == queryTime or endTime[i] == queryTime:
                cnt += 1
        return cnt




    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
public class Solution {
    public int busyStudent(int[] startTime, int[] endTime, int queryTime) {
        int n = endTime.length;
        int cnt = 0;
        for (int i = 0; i < n; i++) {
            if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
                cnt++;
            } else if (startTime[i] == queryTime || endTime[i] == queryTime) {
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
          int busyStudent(vector<int>& startTime, vector<int>& endTime, int queryTime) {
              int n = endTime.size();
              int cnt = 0;
              for(int i=0; i<n; i++){
                 if(startTime[i]<=queryTime && queryTime<=endTime[i]) cnt++;
                 else if (startTime[i]==queryTime || endTime[i]==queryTime) cnt++;
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
- The time complexity is $$O(n)$$ where n is the length of the input arrays startTime and endTime. This is because the algorithm iterates over the arrays once, performing a constant amount of work for each element.
- The space complexity is $$O(1)$$ because we are not using any extra space.