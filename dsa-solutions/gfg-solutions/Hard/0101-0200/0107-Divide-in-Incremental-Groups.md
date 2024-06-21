---
id: divide-in-incremental-groups
title: Divide in Incremental Groups (Geeks for Geeks)
sidebar_label: Divide-in-Incremental-Groups
tags:
  - Intermediate
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Divide in Incremental Groups Problem problem on Geeks for Geeks."
---

## Problem Description

Given two integers N and K, the task is to count the number of ways to divide N into groups of positive integers. Such that each group shall have K elements and their sum is N. Also the number of elements in the groups follows a non-decreasing order (i.e. group[i] <= group[i+1]). Find the number of such groups


## Examples

**Example:**
**Input**: `N = 8 ,K = 4`
**Output:** `5`
**Explanation:** There are `5` groups such that their sum is `8` 
and the number of positive integers in each 
group is `4`. The `5` groups are `[1, 1, 1, 5], 
[1, 1, 2, 4], [1, 1, 3, 3], [1, 2, 2, 3]` and 
`[2, 2, 2, 2]`.

## Your Task
Complete the function countWaystoDivide() which takes the integers N and K as the input parameters, and returns the number of ways to divide the sum N into K groups.

Expected Time Complexity: $O(N2*K)$.
Expected Auxiliary Space: $O(N2*K)$.

## Constraints

- `1 ≤ K ≤ N ≤ 100`

## Problem Explanation

**Step 1:** There are n houses and p water pipes in Geek Colony. Every house has at most one pipe going into it You are given a 2D integer array intervals where intervals[i] = [lefti, righti] represents the inclusive interval [lefti, righti].

**Step 2:** You have to divide the intervals into one or more groups such that each interval is in exactly one group, and no two intervals that are in the same group intersect each other.

**Step 3:** Return the minimum number of groups you need to make.

**Step 4:** Two intervals intersect if there is at least one common number between them. For example, the intervals `[1, 5]` and `[5, 8]` intersect.


### Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python

class Solution:
    def minGroups(self, intervals: List[List[int]]) -> int:
        pq = []
        for left, right in sorted(intervals):
            if pq and pq[0] < left:
                heappop(pq)
            heappush(pq, right)
        return len(pq)

  ```
  </TabItem>

  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
class Solution {
public:
    int minGroups(vector<vector<int>>& intervals) {

        int line[1000005] = {};
        int maxEle = -1;

        for(auto &e : intervals) {
            int start = e[0], end = e[1];
            line[start] += 1;
            line[end + 1] -= 1;
        }

        for(int i = 1; i < 1000001; i++) {
            line[i] += line[i - 1];
            maxEle = max(maxEle, line[i]);
        }

        return maxEle;
    }
};
  ```
  </TabItem>
</Tabs>

## Solution Logic
Divide in Incremental Groups Can be implemented in the further mentioned technique via which solution is as follows : 
**Initialization:** The array line is initialized with zeros and has a size of 1,000,005 to account for the maximum possible value of interval endpoints plus one.
maxEle is initialized to -1, which will track the maximum number of overlapping intervals at any point.
**Marking Interval Boundaries:** For each interval [start, end], increment the value at line[start] by 1 to signify the start of an interval.
Decrement the value at line[end + 1] by 1 to signify the end of an interval. The end + 1 ensures that the interval is correctly marked as ending after end.
**Building the Prefix Sum Array:** Iterate through the line array from index 1 to 1,000,001.
Each position in line represents the number of intervals active at that point, accumulated using the prefix sum. Update maxEle with the maximum value found in the line array, which will be the peak number of overlapping intervals.
**Return Result:** The value of maxEle at the end of the loop is the minimum number of groups needed to accommodate all overlapping intervals.
## Time Complexity

$O(N2*K)$.

## Space Complexity

$O(N2*K)$.

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/problems/divide-in-incremental-groups--170647/0)
- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/description/)
- **Author's Geeks for Geeks Profile:**  | [DaminiChachane](https://leetcode.com/u/divcxl15/) |

This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.
