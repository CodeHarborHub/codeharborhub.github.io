---
id: insert-interval
title: Insert Interval(LeetCode)
sidebar_label: 0057-Insert Interval
tags:
  - Array
description: You are given an array of non-overlapping intervals intervals. Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals. Return intervals after the insertion.
---

## Problem Statement

You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` represent the start and the end of the `ith` interval and `intervals` is sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `starti` and `intervals` still does not have any overlapping `intervals` (merge overlapping intervals if necessary).

Return `intervals` after the insertion.

Note that you don't need to modify `intervals` in-place. You can make a new array and return it.

### Examples

**Example 1:**

```plaintext
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

**Example 2:**

```plaintext
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```

### Constraints

- `0 <= intervals.length <= 104`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 105`
- `intervals` is sorted by `starti` in ascending order.
- `newInterval.length == 2`
- `0 <= start <= end <= 105`

## Solution

### Approach 

#### Algorithm

1. Initialize the Result List:
* Create an empty list result to store the final merged intervals.
2. Add Non-overlapping Intervals Before the New Interval:
* Iterate through the list of intervals and add all intervals that end before the new interval starts to the result list.
3. Merge Overlapping Intervals:
* Continue iterating through the list and merge all intervals that overlap with the new interval. This is done by updating the new interval's start and end to be the minimum start and maximum end of the overlapping intervals.
* Once all overlapping intervals are merged, add the new interval to the result list.
4. Add Remaining Intervals:
* Finally, add all the remaining intervals that start after the new interval ends to the result list.

#### Implementation

```Java
import java.util.List;
import java.util.LinkedList;

public class Interval {
    int start;
    int end;

    Interval() {
        start = 0;
        end = 0;
    }

    Interval(int s, int e) {
        start = s;
        end = e;
    }
}

public class Solution {
    public List<Interval> insert(List<Interval> intervals, Interval newInterval) {
        List<Interval> result = new LinkedList<>();
        int i = 0;
        
        // Add all the intervals ending before newInterval starts
        while (i < intervals.size() && intervals.get(i).end < newInterval.start) {
            result.add(intervals.get(i++));
        }
        
        // Merge all overlapping intervals to one considering newInterval
        while (i < intervals.size() && intervals.get(i).start <= newInterval.end) {
            newInterval = new Interval(
                Math.min(newInterval.start, intervals.get(i).start),
                Math.max(newInterval.end, intervals.get(i).end)
            );
            i++;
        }
        
        // Add the union of intervals we got
        result.add(newInterval);
        
        // Add all the rest
        while (i < intervals.size()) {
            result.add(intervals.get(i++));
        }
        
        return result;
    }
}
```

### Complexity Analysis

- **Time complexity**: $O(N)$
- **Space complexity**: $O(N)$

### Conclusion

The algorithm efficiently inserts a new interval into a sorted list of non-overlapping intervals by handling non-overlapping intervals before and after the new interval separately and merging overlapping intervals in the middle. The overall time complexity is O(n) and the space complexity is O(n), making it both time-efficient and space-efficient.
