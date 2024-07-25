---
id: my-calendar-i
title: My Calendar I
sidebar_label: 0729 - My Calendar I
tags:
  - Binary Search
  - Tree
  - Binary Tree
description: "This is a solution to the My Calendar I problem on LeetCode."
---

## Problem Description

You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a **double booking**.

A **double booking** happens when two events have some non-empty intersection (i.e., some moment is common to both events.).

The event can be represented as a pair of integers `start` and `end` that represents a booking on the half-open interval `[start, end)`, the range of real numbers `x` such that `start <= x < end`.

Implement the `MyCalendar` class:

- `MyCalendar()` Initializes the calendar object.
- `boolean book(int start, int end)` Returns `true` if the event can be added to the calendar successfully without causing a **double booking**. Otherwise, return `false` and do not add the event to the calendar.

### Examples

**Example 1:**

```
Input
["MyCalendar", "book", "book", "book"]
[[], [10, 20], [15, 25], [20, 30]]
Output
[null, true, false, true]

Explanation
MyCalendar myCalendar = new MyCalendar();
myCalendar.book(10, 20); // return True
myCalendar.book(15, 25); // return False, It can not be booked because time 15 is already booked by another event.
myCalendar.book(20, 30); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.
```

### Constraints

- $0 \leq start < end \leq 10^9$
- At most `1000` calls will be made to `book`.

## Solution for My Calendar I
### Overview

The primary challenge in this problem is to find a proper data structure and an efficient algorithm to maintain all valid events, including **querying** potentially conflicting existing events and **inserting** new valid events.

In this solution article, we first start with a straightforward idea of brute force to warm up, then one step forward, we improve the naive approach to keep all existing events in sorted order and reduce the time complexity.

### Approach 1: Brute Force
#### Intuition

When booking a new event `[start, end)`, check if every current event conflicts with the new event. If none of them do, we can book the event.

#### Algorithm

We will maintain a list of interval events (not necessarily sorted). Evidently, two events `[s1, e1)` and `[s2, e2)` do not conflict if and only if one of them starts after the other one ends: either `e1 <= s2` OR `e2 <= s1`. By De Morgan's laws, this means the events conflict when `s1 < e2` AND `s2 < e1`.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class MyCalendar {
private:
    vector<pair<int, int>> calendar;

public:
    bool book(int start, int end) {
        for (const auto [s, e] : calendar) {
            if (start < e && s < end) {
                return false;
            }
        }
        calendar.emplace_back(start, end);
        return true;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
public class MyCalendar {
    List<int[]> calendar;

    MyCalendar() {
        calendar = new ArrayList();
    }

    public boolean book(int start, int end) {
        for (int[] iv: calendar) {
            if (iv[0] < end && start < iv[1]) {
                return false;
            }
        }
        calendar.add(new int[]{start, end});
        return true;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class MyCalendar:

    def __init__(self):
        self.calendar = []

    def book(self, start, end):
        for s, e in self.calendar:
            if s < end and start < e:
                return False
        self.calendar.append((start, end))
        return True
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N^2)$

> **Reason**: For each new event, we process every previous event to decide whether the new event can be booked. This leads to $O(N^2)$ complexity.

### Space Complexity: $O(N)$

> **Reason**: the size of the calendar

### Approach 2: Sorted List + Binary Search
#### Intuition

If we maintained our events in sorted order, we could check whether an event could be booked in $O(log⁡N)$ time (where N is the number of events already booked) by binary searching for where the event should be placed. We would also have to insert the event in our sorted structure.

#### Algorithm

1. Initialize with an empty sorted list data structure calendar.
2. For every new interval`[start, end)` in `book()` invokation, we check if there is a conflict on each side with neighboring intervals.
    - Lookup the first index idx, which maps to an element `[s1,e1)` in calendar and `s > start`, and this step can be conducted by binary search (see this explore card) as we keep `calendar` in sorted order by starting points of intervals. (Notice that there may not be such an idx because `start >= all` kept intervals. In this case, we don't need to check the following step)
    - Check if `end > s1`. If yes, `[start, end)` and `[s1,e1)` must be overlapped, `[start, end)` is illegal, and we should return false for the invokation now.
    - Roll back to the index `idx-1`, which maps to an element `[s2,e2)` in calendar and s1 is the largest staring points that satisfy `s1 <= start`. (Similarly, notice that there may be no element at `idx-1` because `idx` is the 0-th index. In this case, we don't need to check the following step either)
    - Check if `e2 > start`. If yes, `[s2,e2)` and `[start, end)` must be overlapped, `[start, end)` is illegal, and we should return false for the invokation now.
    - If `[start, end)` passes all checkings above, we insert this valid interval at `idx` in `calendar`.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class MyCalendar {
private:
    set<pair<int, int>> calendar;

public:
    bool book(int start, int end) {
        const pair<int, int> event{start, end};
        const auto nextEvent = calendar.lower_bound(event);
        if (nextEvent != calendar.end() && nextEvent->first < end) {
            return false;
        }

        if (nextEvent != calendar.begin()) {
            const auto prevEvent = prev(nextEvent);
            if (prevEvent->second > start) {
                return false;
            }
        }

        calendar.insert(event);
        return true;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class MyCalendar {
    TreeMap<Integer, Integer> calendar;

    MyCalendar() {
        calendar = new TreeMap();
    }

    public boolean book(int start, int end) {
        Integer prev = calendar.floorKey(start),
                next = calendar.ceilingKey(start);
        if ((prev == null || calendar.get(prev) <= start) &&
                (next == null || end <= next)) {
            calendar.put(start, end);
            return true;
        }
        return false;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
from sortedcontainers import SortedList

class MyCalendar:
    def __init__(self):
        self.calendar = SortedList()

    def book(self, start: int, end: int) -> bool:
        idx = self.calendar.bisect_right((start, end))
        if (idx > 0 and self.calendar[idx-1][1] > start) or (idx < len(self.calendar) and self.calendar[idx][0] < end):
            return False
        self.calendar.add((start, end))
        return True
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(NlogN)$

> **Reason**: For each new event, we search that the event is legal in $O(log⁡N)$ time, then insert it in $O(log⁡N)$ time.


### Space Complexity: $O(N)$

> **Reason**: The size of the data structures used.

## References

- **LeetCode Problem**: [My Calendar I](https://leetcode.com/problems/my-calendar-i/description/)

- **Solution Link**: [My Calendar I](https://leetcode.com/problems/my-calendar-i/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>