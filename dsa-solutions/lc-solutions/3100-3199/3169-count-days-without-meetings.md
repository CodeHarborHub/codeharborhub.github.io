---
id: count-days-without-meetings
title:  Count Days Without Meetings
sidebar_label: 3169. Count Days Without Meetings
tags:
- Array
- Sorting
description: "This is a solution to the Count Days Without Meetings problem on LeetCode."
---

## Problem Description
You are given a positive integer days representing the total number of days an employee is available for work (starting from day 1). You are also given a 2D array meetings of size n where, `meetings[i] = [start_i, end_i]` represents the starting and ending days of meeting i (inclusive).

Return the count of days when the employee is available for work but no meetings are scheduled.

Note: The meetings may overlap.
### Examples

**Example 1:**

```
Input: days = 10, meetings = [[5,7],[1,3],[9,10]]

Output: 2

Explanation:

There is no meeting scheduled on the 4th and 8th days.

```

**Example 2:**
```
Input: days = 5, meetings = [[2,4],[1,3]]

Output: 1

Explanation:

There is no meeting scheduled on the 5th day.
```
**Example 3:**
```
Input: days = 6, meetings = [[1,6]]

Output: 0

Explanation:

Meetings are scheduled for all working days.
```

### Constraints
- `1 <= days <= 10^9`
- `1 <= meetings.length <= 10^5`
- `meetings[i].length == 2`
- `1 <= meetings[i][0] <= meetings[i][1] <= days`

## Solution for Find the N-th Value After K Seconds Problem
### Prerequisite - Do Merge Interval Question On Leetcode
### Approach 
To solve the problem of counting non-working days given a list of intervals that denote working days, we can break down the solution into the following steps:

- Merge Intervals: Given a list of intervals representing working days, merge any overlapping intervals to consolidate the total working days. This step ensures that we account for continuous working periods without duplication.

- Count Working Days: After merging the intervals, calculate the total number of working days by summing up the lengths of all the merged intervals.

- Calculate Non-Working Days: Subtract the total number of working days from the total number of days to get the number of non-working days.

### Detailed Steps
#### Merge Intervals:

- Sort the intervals based on the start day.
- Iterate through the intervals and merge them if they overlap.
- Maintain a list of merged intervals.
#### Count Working Days:

- For each merged interval, calculate the length of the interval (end day - start day + 1).
- Sum up the lengths to get the total number of working days.

#### Calculate Non-Working Days:
- Subtract the total number of working days from the total number of days given.


<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
      function merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const output = [];
        for (let interval of intervals) {
            if (output.length === 0 || output[output.length - 1][1] < interval[0]) {
                output.push(interval);
            } else {
                output[output.length - 1][1] = Math.max(output[output.length - 1][1], interval[1]);
            }
        }
        return output;
    }

    function countDays(days, meetings) {
        const ans = merge(meetings);
        for (let [st, end] of ans) {
            days -= (end - st + 1);
        }
        return days;
    }
      const input = [[5,7],[1,3],[9,10]];
      const  days = 10
      const output = countDays(days , input)
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

    #### Complexity Analysis

    - Time Complexity: $ O(nlogn) $
    - Space Complexity: $ O(1) $  
   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
    function merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const output = [];
        for (let interval of intervals) {
            if (output.length === 0 || output[output.length - 1][1] < interval[0]) {
                output.push(interval);
            } else {
                output[output.length - 1][1] = Math.max(output[output.length - 1][1], interval[1]);
            }
        }
        return output;
    }

    function countDays(days, meetings) {
        const ans = merge(meetings);
        for (let [st, end] of ans) {
            days -= (end - st + 1);
        }
        return days;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   class Solution {
    merge(intervals: number[][]): number[][] {
        intervals.sort((a, b) => a[0] - b[0]);
        const output: number[][] = [];
        for (const interval of intervals) {
            if (output.length === 0 || output[output.length - 1][1] < interval[0]) {
                output.push(interval);
            } else {
                output[output.length - 1][1] = Math.max(output[output.length - 1][1], interval[1]);
            }
        }
        return output;
    }

    countDays(days: number, meetings: number[][]): number {
        const ans = this.merge(meetings);
        for (const [st, end] of ans) {
            days -= (end - st + 1);
        }
        return days;
    }
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   class Solution:
    def merge(self, intervals):
        intervals.sort()
        output = []
        for interval in intervals:
            if not output or output[-1][1] < interval[0]:
                output.append(interval)
            else:
                output[-1][1] = max(output[-1][1], interval[1])
        return output
    
    def count_days(self, days, meetings):
        ans = self.merge(meetings)
        for st, end in ans:
            days -= (end - st + 1)
        return days

   ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.*;

public class Solution {
    public List<int[]> merge(List<int[]> intervals) {
        int n = intervals.size();
        intervals.sort((a, b) -> a[0] - b[0]);
        List<int[]> output = new ArrayList<>();
        for (int[] interval : intervals) {
            if (output.isEmpty() || output.get(output.size() - 1)[1] < interval[0]) {
                output.add(interval);
            } else {
                output.get(output.size() - 1)[1] = Math.max(output.get(output.size() - 1)[1], interval[1]);
            }
        }
        return output;
    }

    public int countDays(int days, List<int[]> meetings) {
        List<int[]> ans = merge(meetings);
        for (int[] i : ans) {
            int st = i[0];
            int end = i[1];
            days -= (end - st + 1);
        }
        return days;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
       int n = intervals.size();
        sort(intervals.begin(), intervals.end());
        vector<vector<int>> output;
        for(auto interval : intervals){
            if(output.empty() || output.back()[1] < interval[0]){
                output.push_back(interval);
            }
            else{
                output.back()[1] = max(output.back()[1], interval[1]);
            }
        }
        return output;
    }
    int countDays(int days, vector<vector<int>>& meetings) {
        vector<vector<int>>ans = merge(meetings);
        sort(begin(ans) , end(ans));
        for(auto i:ans)
        {
            int st = i[0];
            int end = i[1];
            
            days -=(end -st +1);
        }
        return days;
    }
};
    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Count Days Without Meetings](https://leetcode.com/problems/count-days-without-meetings/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/count-days-without-meetings/solutions/)

