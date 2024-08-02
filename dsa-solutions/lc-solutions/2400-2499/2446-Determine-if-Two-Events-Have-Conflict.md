---
id:  Determine-if-Two-Events-Have-Conflict
title:  Determine if Two Events Have Conflict
sidebar_label: 2446-Determine if Two Events Have Conflict
tags: [dsa, leetcode]
description: Problem solution of  Count Days Spent Together
---

## Problem Statement 

### Problem Description

You are given two arrays of strings that represent two inclusive events that happened on the same day, event1 and event2, where:

event1 = [startTime1, endTime1] and
event2 = [startTime2, endTime2].
Event times are valid 24 hours format in the form of HH:MM.

A conflict happens when two events have some non-empty intersection (i.e., some moment is common to both events).

Return true if there is a conflict between two events. Otherwise, return false
 
### Examples

#### Example 1
```
Input: event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
Output: true
Explanation: The two events intersect at time 2:00.
```

### Example 2
```
Input: event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
Output: true
Explanation: The two events intersect starting from 01:20 to 02:00.
```

### Example 3
```
Input: event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
Output: false
Explanation: The two events do not intersect.
```

### Constraints

- `event1.length == event2.length == 2`
- `event1[i].length == event2[i].length == 5`
- `startTime1 <= endTime1`
- `startTime2 <= endTime2`
- `All the event times follow the HH:MM format.`

## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1:Brute Force (Naive)


Brute Force Approach: 
- Convert the event times to minutes since midnight.
- Generate all the minutes for both events.
- Check if there is any common minute between the two sets.
#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <string>

using namespace std;

int toMinutes(const string& time) {
    int hours = stoi(time.substr(0, 2));
    int minutes = stoi(time.substr(3, 2));
    return hours * 60 + minutes;
}

bool haveConflictBruteForce(vector<string>& event1, vector<string>& event2) {
    int start1 = toMinutes(event1[0]);
    int end1 = toMinutes(event1[1]);
    int start2 = toMinutes(event2[0]);
    int end2 = toMinutes(event2[1]);

    for (int t1 = start1; t1 <= end1; ++t1) {
        for (int t2 = start2; t2 <= end2; ++t2) {
            if (t1 == t2) return true;
        }
    }
    return false;
}


```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.List;

public class Solution {
    private int toMinutes(String time) {
        int hours = Integer.parseInt(time.substring(0, 2));
        int minutes = Integer.parseInt(time.substring(3, 5));
        return hours * 60 + minutes;
    }

    public boolean haveConflictBruteForce(List<String> event1, List<String> event2) {
        int start1 = toMinutes(event1.get(0));
        int end1 = toMinutes(event1.get(1));
        int start2 = toMinutes(event2.get(0));
        int end2 = toMinutes(event2.get(1));

        for (int t1 = start1; t1 <= end1; ++t1) {
            for (int t2 = start2; t2 <= end2; ++t2) {
                if (t1 == t2) return true;
            }
        }
        return false;
    }
}



 


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def to_minutes(time):
    hours, minutes = map(int, time.split(':'))
    return hours * 60 + minutes

def have_conflict_brute_force(event1, event2):
    start1 = to_minutes(event1[0])
    end1 = to_minutes(event1[1])
    start2 = to_minutes(event2[0])
    end2 = to_minutes(event2[1])

    return any(t1 == t2 for t1 in range(start1, end1 + 1) for t2 in range(start2, end2 + 1))

```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O((end1 - start1) * (end2 - start2))$
-  We generate and check all possible minute pairs within the intervals.
- Space Complexity: $O(1)$
-   We use a constant amount of extra space.
</tabItem>
<tabItem value="Optimized approach" label="Optimized approach">

### Approach 2: Optimized approach

Optimized Approach: 
- Convert the event times to minutes since midnight.
- Check if the start of one event is before the end of the other and vice versa.
#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <string>

using namespace std;

int toMinutes(const string& time) {
    int hours = stoi(time.substr(0, 2));
    int minutes = stoi(time.substr(3, 2));
    return hours * 60 + minutes;
}

bool haveConflictOptimized(vector<string>& event1, vector<string>& event2) {
    int start1 = toMinutes(event1[0]);
    int end1 = toMinutes(event1[1]);
    int start2 = toMinutes(event2[0]);
    int end2 = toMinutes(event2[1]);

    return !(end1 < start2 || end2 < start1);
}


```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.List;

public class Solution {
    private int toMinutes(String time) {
        int hours = Integer.parseInt(time.substring(0, 2));
        int minutes = Integer.parseInt(time.substring(3, 5));
        return hours * 60 + minutes;
    }

    public boolean haveConflictOptimized(List<String> event1, List<String> event2) {
        int start1 = toMinutes(event1.get(0));
        int end1 = toMinutes(event1.get(1));
        int start2 = toMinutes(event2.get(0));
        int end2 = toMinutes(event2.get(1));

        return !(end1 < start2 || end2 < start1);
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def to_minutes(time):
    hours, minutes = map(int, time.split(':'))
    return hours * 60 + minutes

def have_conflict_optimized(event1, event2):
    start1 = to_minutes(event1[0])
    end1 = to_minutes(event1[1])
    start2 = to_minutes(event2[0])
    end2 = to_minutes(event2[1])

    return not (end1 < start2 or end2 < start1)


```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(1)$
- We perform constant-time calculations and comparisons.
- Space Complexity: $O(1)$
-  We use a constant amount of extra space.

</tabItem>
</Tabs>


## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="mahSMDuJL9A"
      params="autoplay=1&autohide=1&showinfo=0&rel=0"
      title="Problem Explanation | Solution | Approach"
      poster="maxresdefault"
      webp 
    />

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['AmruthaPariprolu'].map(username => (
 <Author key={username} username={username} />
))}
</div>

