---
id: The-Employee-That-Worked-on-the-Longest-Task
title:  The Employee That Worked on the Longest Task
sidebar_label: 2432-The Employee That Worked on the Longest Task
tags: [dsa, leetcode]
description: Problem solution of  The Employee That Worked on the Longest Task
---

## Problem Statement 

### Problem Description

There are n employees, each with a unique id from 0 to n - 1.

You are given a 2D integer array logs where logs[i] = [idi, leaveTimei] where:

idi is the id of the employee that worked on the ith task, and
leaveTimei is the time at which the employee finished the ith task. All the values leaveTimei are unique.
Note that the ith task starts the moment right after the (i - 1)th task ends, and the 0th task starts at time 0.

Return the id of the employee that worked the task with the longest time. If there is a tie between two or more employees, return the smallest id among them.

 

 
### Examples

#### Example 1
```
Input: n = 10, logs = [[0,3],[2,5],[0,9],[1,15]]
Output: 1
Explanation: 
Task 0 started at 0 and ended at 3 with 3 units of times.
Task 1 started at 3 and ended at 5 with 2 units of times.
Task 2 started at 5 and ended at 9 with 4 units of times.
Task 3 started at 9 and ended at 15 with 6 units of times.
The task with the longest time is task 3 and the employee with id 1 is the one that worked on it, so we return 1.
```

### Example 2
```
Input: n = 26, logs = [[1,1],[3,7],[2,12],[7,17]]
Output: 3
Explanation: 
Task 0 started at 0 and ended at 1 with 1 unit of times.
Task 1 started at 1 and ended at 7 with 6 units of times.
Task 2 started at 7 and ended at 12 with 5 units of times.
Task 3 started at 12 and ended at 17 with 5 units of times.
The tasks with the longest time is task 1. The employee that worked on it is 3, so we return 3.
```

### Example 3
```
Input: n = 2, logs = [[0,10],[1,20]]
Output: 0
Explanation: 
Task 0 started at 0 and ended at 10 with 10 units of times.
Task 1 started at 10 and ended at 20 with 10 units of times.
The tasks with the longest time are tasks 0 and 1. The employees that worked on them are 0 and 1, so we return the smallest id 0.
```

### Constraints

- `2 <= n <= 500`
- `1 <= logs.length <= 500`
- `logs[i].length == 2`
- `0 <= idi <= n - 1`
- `1 <= leaveTimei <= 500`
- `idi != idi+1`
- `leaveTimei are sorted in a strictly increasing order.`

## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1:Brute Force (Naive)


Brute Force Approach: 
- Initialize variables to keep track of the maximum time and the corresponding employee id.
- Iterate through the logs array.
- For each task, calculate the time taken.
- Compare the calculated time with the maximum time and update the variables accordingly.
- Return the employee id with the longest task time.
#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

int hardestWorker(int n, vector<vector<int>>& logs) {
    int maxTime = INT_MIN;
    int employeeId = INT_MAX;

    for (int i = 0; i < logs.size(); ++i) {
        int time = (i == 0) ? logs[i][1] : logs[i][1] - logs[i-1][1];
        if (time > maxTime || (time == maxTime && logs[i][0] < employeeId)) {
            maxTime = time;
            employeeId = logs[i][0];
        }
    }
    return employeeId;
}

```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.List;

public class Solution {
    public int hardestWorker(int n, List<int[]> logs) {
        int maxTime = Integer.MIN_VALUE;
        int employeeId = Integer.MAX_VALUE;

        for (int i = 0; i < logs.size(); ++i) {
            int time = (i == 0) ? logs.get(i)[1] : logs.get(i)[1] - logs.get(i - 1)[1];
            if (time > maxTime || (time == maxTime && logs.get(i)[0] < employeeId)) {
                maxTime = time;
                employeeId = logs.get(i)[0];
            }
        }
        return employeeId;
    }
}


 


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def hardestWorker(n, logs):
    max_time = float('-inf')
    employee_id = float('inf')

    for i in range(len(logs)):
        time = logs[i][1] if i == 0 else logs[i][1] - logs[i - 1][1]
        if time > max_time or (time == max_time and logs[i][0] < employee_id):
            max_time = time
            employee_id = logs[i][0]

    return employee_id

```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O(n)$
-  We iterate through the logs array once, performing constant time operations for each log.
- Space Complexity: $O(1)$
-  We use a constant amount of extra space for variables.

</tabItem>
<tabItem value="Optimized approach" label="Optimized approach">

### Approach 2: Optimized approach

Optimized Approach:
- Initialize variables to keep track of the maximum time and the corresponding employee id.
- Iterate through the logs array.
- For each task, calculate the time taken directly using the leave times of consecutive tasks.
- Compare the calculated time with the maximum time and update the variables accordingly.
- Return the employee id with the longest task time.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

int hardestWorker(int n, vector<vector<int>>& logs) {
    int maxTime = logs[0][1];
    int employeeId = logs[0][0];

    for (int i = 1; i < logs.size(); ++i) {
        int time = logs[i][1] - logs[i-1][1];
        if (time > maxTime || (time == maxTime && logs[i][0] < employeeId)) {
            maxTime = time;
            employeeId = logs[i][0];
        }
    }
    return employeeId;
}



```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.List;

public class Solution {
    public int hardestWorker(int n, List<int[]> logs) {
        int maxTime = logs.get(0)[1];
        int employeeId = logs.get(0)[0];

        for (int i = 1; i < logs.size(); ++i) {
            int time = logs.get(i)[1] - logs.get(i - 1)[1];
            if (time > maxTime || (time == maxTime && logs.get(i)[0] < employeeId)) {
                maxTime = time;
                employeeId = logs.get(i)[0];
            }
        }
        return employeeId;
    }
}



```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def hardestWorker(n, logs):
    max_time = logs[0][1]
    employee_id = logs[0][0]

    for i in range(1, len(logs)):
        time = logs[i][1] - logs[i - 1][1]
        if time > max_time or (time == max_time and logs[i][0] < employee_id):
            max_time = time
            employee_id = logs[i][0]

    return employee_id


```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$
-  We iterate through the logs array once, calculating task durations directly.
- Space Complexity: $O(1)$
-  We use a constant amount of extra space for variables.
- This approach is efficient and straightforward.

</tabItem>
</Tabs>


## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="YIpCPgwWKLY"
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

