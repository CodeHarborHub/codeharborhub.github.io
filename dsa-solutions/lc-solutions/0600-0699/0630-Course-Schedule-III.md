---
id: course-schedule-III
title: Course Schedule III
sidebar_label: 0630 - Course Schedule III
tags:
  - Heap
  - Array
  - Greedy
  - Sorting
description: "This is a solution to the Course Schedule III problem on LeetCode."
---

## Problem Description

There are n different online courses numbered from `1 to n`. You are given an array courses where `courses[i] = [durationi, lastDayi]` indicate that the `ith` course should be taken continuously for durationi days and must be finished before or on lastDayi.

You will start on the 1st day and you cannot take two or more courses simultaneously.

Return the maximum number of courses that you can take.

### Examples

**Example 1:**

```
Input: courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]
Output: 3
Explanation: 
There are totally 4 courses, but you can take 3 courses at most:
First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day. 
Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day. 
The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date

```
**Example 2:**
```
Input: courses = [[1,2]]
Output: 1

```
### Constraints

- `1 <= courses.length <= 10^4`
- `1 <= durationi, lastDayi <= 10^4`

## Solution for Course Schedule III

### Approach 

Sort all the courses by their ending time. When considering the first `K` courses, they all end before end. A necessary and sufficient condition for our schedule to be valid, is that `(for all K)`, the courses we choose to take within the first K of them, have total duration less than end.

For each `K`, we will greedily remove the largest-length course until the total duration `start is <= end`. To select these largest-length courses, we will use a max heap. start will maintain the loop invariant that it is the sum of the lengths of the courses we have currently taken.

Clearly, this greedy choice makes the number of courses used maximal for each K. When considering potential future K, there's never a case where we preferred having a longer course to a shorter one, so indeed our greedy choice dominates all other candidates.


## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@agarwalhimanshugaya"/>

```cpp
class Solution {
public:
    int scheduleCourse(vector<vector<int>>& courses) {
        if(courses.size() <= 0) return 0;
        sort(courses.begin(), courses.end(), [](const vector<int>& a, vector<int>& b) {
            return a[1] < b[1];
        });
        priority_queue<int> q;
        int sum = 0;
        for(auto i : courses) {
            sum += i[0];
            q.push(i[0]);
            if(sum > i[1]) {
                sum -= q.top();
                q.pop();
            }
        }
        return q.size();
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>

```java
public class Solution {
    public int scheduleCourse(int[][] courses) {
        Arrays.sort(courses,(a,b)->a[1]-b[1]); //Sort the courses by their deadlines (Greedy! We have to deal with courses with early deadlines first)
        PriorityQueue<Integer> pq=new PriorityQueue<>((a,b)->b-a);
        int time=0;
        for (int[] c:courses) 
        {
            time+=c[0]; // add current course to a priority queue
            pq.add(c[0]);
            if (time>c[1]) time-=pq.poll(); //If time exceeds, drop the previous course which costs the most time. (That must be the best choice!)
        }        
        return pq.size();
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>

```python
def scheduleCourse(self, A):
    pq = []
    start = 0
    for t, end in sorted(A, key = lambda (t, end): end):
        start += t
        heapq.heappush(pq, -t)
        while start > end:
            start += heapq.heappop(pq)
    return len(pq)
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N⋅log(N))$

### Space Complexity: $O(N)$

## References

- **LeetCode Problem**: [Kth Largest Element in a Stream](https://leetcode.com/problems/course-schedule-iii/description/)

- **Solution Link**: [Kth Largest Element in a Stream](https://leetcode.com/problems/course-schedule-iii/solutions/)
