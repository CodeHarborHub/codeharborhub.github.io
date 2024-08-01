---
id: merge-intervals
title: Merge Intervals(LeetCode)
sidebar_label: 0056-Merge Intervals
tags:
  - Array
  - Sorting
description: Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
---

## Problem Statement

Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

### Examples

**Example 1:**

```plaintext
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

**Example 2:**

```plaintext
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

### Constraints

- `1 <= intervals.length <= 104`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 104`

## Solution

### Approach 

#### Algorithm

1. Edge Case Handling:
* If the input list of intervals is empty or contains only one interval, return the input as there is nothing to merge.
2. Sorting:
* Sort the intervals based on their starting points. This makes it easier to merge overlapping intervals as they will be adjacent.
3. Merging Intervals:
* Initialize a new interval with the first interval and start iterating through the sorted intervals.
* For each interval, check if it overlaps with the current new interval (i.e., the start of the current interval is less than or equal to the end of the new interval).
* If they overlap, update the end of the new interval to be the maximum of the current interval's end and the new interval's end.
* If they don't overlap, add the current new interval to the result list and start a new interval with the current interval.
4. Final Step:
* After the loop, add the last interval to the result list as it won't be added inside the loop.

#### Implementation

Efficient In-Place Solution with Arrays in Java

```Java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public int[][] merge(int[][] intervals) {
        if (intervals.length <= 1)
            return intervals;

        // Sort by ascending starting point
        Arrays.sort(intervals, (i1, i2) -> Integer.compare(i1[0], i2[0]));

        List<int[]> result = new ArrayList<>();
        int[] newInterval = intervals[0];
        result.add(newInterval);

        for (int[] interval : intervals) {
            if (interval[0] <= newInterval[1]) { // Overlapping intervals, move the end if needed
                newInterval[1] = Math.max(newInterval[1], interval[1]);
            } else {                             // Disjoint intervals, add the new interval to the list
                newInterval = interval;
                result.add(newInterval);
            }
        }

        return result.toArray(new int[result.size()][]);
    }
}
```

Previous Version Using Lists

```Java
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

public class Interval {
    int start;
    int end;

    Interval() { start = 0; end = 0; }
    Interval(int s, int e) { start = s; end = e; }
}

public class Solution {
    public List<Interval> merge(List<Interval> intervals) {
        if (intervals.size() <= 1)
            return intervals;

        // Sort by ascending starting point using an anonymous Comparator
        Collections.sort(intervals, (i1, i2) -> Integer.compare(i1.start, i2.start));

        List<Interval> result = new LinkedList<>();
        int start = intervals.get(0).start;
        int end = intervals.get(0).end;

        for (Interval interval : intervals) {
            if (interval.start <= end) // Overlapping intervals, move the end if needed
                end = Math.max(end, interval.end);
            else {                     // Disjoint intervals, add the previous one and reset bounds
                result.add(new Interval(start, end));
                start = interval.start;
                end = interval.end;
            }
        }

        // Add the last interval
        result.add(new Interval(start, end));
        return result;
    }
}
```

### Complexity Analysis

- **Time complexity**: $O(NlogN)$
- **Space complexity**: $O(N)$

### Conclusion

The presented solution efficiently merges overlapping intervals using sorting and iteration. The overall time complexity is O(n log n) due to the sorting step, and the space complexity is optimized by reusing the input array for storing the result. This method ensures a fast and memory-efficient approach to solving the interval merging problem.
