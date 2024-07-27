---
id:  Minimum-Rounds-to-Complete-All-Tasks
title:  Minimum Rounds to Complete All Tasks
sidebar_label: 2244-Minimum Rounds to Complete All Tasks
tags:
  - Arrays
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

You are given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the same difficulty level.

Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete all the tasks.

### Examples

**Example 1:**

Input: tasks = [2,2,3,3,2,4,4,4,4,4]
Output: 4
Explanation: To complete all the tasks, a possible plan is:
- In the first round, you complete 3 tasks of difficulty level 2. 
- In the second round, you complete 2 tasks of difficulty level 3. 
- In the third round, you complete 3 tasks of difficulty level 4. 
- In the fourth round, you complete 2 tasks of difficulty level 4.  
It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4.

**Example 2:**

Input: tasks = [2,3,3]
Output: -1
Explanation: There is only 1 task of difficulty level 2, but in each round, you can only complete either 2 or 3 tasks of the same difficulty level. Hence, you cannot complete all the tasks, and the answer is -1.
 


### Constraints

- `1 <= tasks.length <= 105`
- `1 <= tasks[i] <= 109`

### Approach

Count the Frequency: Use a hash map or dictionary to count the occurrences of each task difficulty.
Check for Feasibility: For each difficulty level, check if the count is 1 (which is impossible to complete).
Calculate Rounds: Use integer division and modulo operations to determine the minimum rounds needed, prioritizing 3-task rounds over 2-task rounds.
Sum Rounds: Sum the rounds for all difficulty levels to get the total rounds required.

### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <vector>
#include <unordered_map>
#include <iostream>
using namespace std;

int minRounds(vector<int>& tasks) {
    unordered_map<int, int> counts;
    for (int task : tasks) counts[task]++;
    int rounds = 0;
    for (auto& pair : counts) {
        int count = pair.second;
        if (count == 1) return -1;
        rounds += (count + 2) / 3;
    }
    return rounds;
}

// Example usage:
int main() {
    vector<int> tasks = {2, 2, 3, 3, 2, 4, 4, 4, 4, 4};
    cout << minRounds(tasks) << endl;  // Output: 4
    return 0;
}

```

### Java Solution

```java
import java.util.HashMap;
import java.util.Map;

public class MinRounds {
    public static int minRounds(int[] tasks) {
        Map<Integer, Integer> counts = new HashMap<>();
        for (int task : tasks) counts.put(task, counts.getOrDefault(task, 0) + 1);
        int rounds = 0;
        for (int count : counts.values()) {
            if (count == 1) return -1;
            rounds += (count + 2) / 3;
        }
        return rounds;
    }

    // Example usage:
    public static void main(String[] args) {
        int[] tasks = {2, 2, 3, 3, 2, 4, 4, 4, 4, 4};
        System.out.println(minRounds(tasks));  // Output: 4
    }
}


```

### Python Solution

```python
from collections import Counter

def minRounds(tasks):
    task_counts = Counter(tasks)
    rounds = 0
    
    for count in task_counts.values():
        if count == 1:
            return -1  # Not possible to complete a single task on its own
        elif count % 3 == 0:
            rounds += count // 3  # If the count is divisible by 3, use 3-task rounds
        else:
            rounds += count // 3 + 1  # If not, use the remaining tasks to form an additional round
            
    return rounds

# Example 1
tasks1 = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4]
print(minRounds(tasks1))  # Output: 4

# Example 2
tasks2 = [2, 3, 3]
print(minRounds(tasks2))  # Output: -1



```

### Complexity Analysis

### Time Complexity: $O(n)$

> **Reason**:for counting frequencies and calculating rounds.

### Space Complexity: $O(n)$

> **Reason**: We use a dictionary or hash map to store the frequency of each difficulty level.

