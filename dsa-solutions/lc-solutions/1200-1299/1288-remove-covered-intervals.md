---
id: remove-covered-intervals
title: 1288. Remove Covered Intervals
sidebar_label:  1288. Remove Covered Intervals
tags:
- Array
- Intervals

description: "This is a solution to the 1288. Remove Covered Intervals problem on LeetCode."
---

## Problem Description
Given an array intervals where intervals[i] = [li, ri] represent the interval `[li, ri)`, remove all intervals that are covered by another interval in the list.

`The interval `[a, b)` is covered by the interval `[c, d) `if and only if c <= a and b <= d.`

Return the number of remaining intervals.
 ### Examples
**Example 1:**
```
Input: intervals = [[1,4],[3,6],[2,8]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.
```

### Constraints
- `1 <= intervals.length <= 10^3`
## Solution for  1288. Remove Covered Intervals

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
   var removeCoveredIntervals = function(intervals) {
    let cnt = 0;
    for (let i = 0; i < intervals.length; i++) {
        for (let j = 0; j < intervals.length; j++) {
            if (i !== j && intervals[j][0] <= intervals[i][0] && intervals[i][1] <= intervals[j][1]) {
                cnt++;
                break;
            }
        }
    }
    return intervals.length - cnt;
};

      const input = [[1,4],[3,6],[2,8]]
      const output = removeCoveredIntervals(input)
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

    - Time Complexity: $O(n^2) $ 
    - Space Complexity: $ O(1)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
  class Solution:
    def removeCoveredIntervals(self, intervals):
        cnt = 0
        for i in range(len(intervals)):
            for j in range(len(intervals)):
                if i != j and intervals[j][0] <= intervals[i][0] and intervals[i][1] <= intervals[j][1]:
                    cnt += 1
                    break
        return len(intervals) - cnt

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
import java.util.List;

public class Solution {
    public int removeCoveredIntervals(List<List<Integer>> intervals) {
        int cnt = 0;
        for (int i = 0; i < intervals.size(); i++) {
            for (int j = 0; j < intervals.size(); j++) {
                if (i != j && intervals.get(j).get(0) <= intervals.get(i).get(0) && intervals.get(i).get(1) <= intervals.get(j).get(1)) {
                    cnt++;
                    break;
                }
            }
        }
        return intervals.size() - cnt;
    }
}

    ```


  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
 class Solution {
public:
    int removeCoveredIntervals(vector<vector<int>>& intervals) {
        int cnt=0;
        for(int i=0;i<intervals.size();i++){
            for(int j=0;j<intervals.size();j++)
            {
                if(i!=j && intervals[j][0] <=intervals[i][0] && intervals[i][1]<=intervals[j][1])
                {
                    cnt++;
                    break;
                }
            }
        }
        return intervals.size()-cnt;
    }
};
```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [1288. Remove Covered Intervals](https://leetcode.com/problems/remove-covered-intervals/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/remove-covered-intervals/)

