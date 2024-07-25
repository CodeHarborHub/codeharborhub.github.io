---
id: task-scheduler
title: Task Scheduler
sidebar_label: 0621 - Task Scheduler
tags:
  - Heap
  - Greedy
  - Hash Table
description: "This is a solution to the Task Scheduler problem on LeetCode."
---

## Problem Description

You are given an array of CPU tasks, each represented by letters A to Z, and a cooling time, n. Each cycle or interval allows the completion of one task. Tasks can be completed in any order, but there's a constraint: identical tasks must be separated by at least n intervals due to cooling time.

​Return the minimum number of intervals required to complete all tasks.

### Examples

**Example 1:**

```
Input: tasks = ["A","A","A","B","B","B"], n = 2

Output: 8

Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.

After completing task A, you must wait two cycles before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th cycle, you can do A again as 2 intervals have passed.
```

**Example 2:**

```
Input: tasks = ["A","C","A","B","D","B"], n = 1

Output: 6

Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.

With a cooling interval of 1, you can repeat a task after just one other task.
```

### Constraints

- $1 \leq \text{tasks.length} \leq 10^4$
- `tasks[i]` is an uppercase English letter.
- $0 \leq n \leq 100$

## Solution for Task Scheduler

### Overview

We are given characters, which are tasks to be scheduled in the CPU. The objective is to find the minimum time required to complete all tasks while including a cooldown period between two identical tasks. The cooldown period is represented by a non-negative integer `n`. During each unit of time, the CPU can either complete a task or stay idle. The goal is to optimize the schedule to minimize the total time required to process all the tasks.

Key Observations:
1. Tasks represented by the same character are considered identical.
2. Repeated tasks should be at least n intervals apart from each other because of the cooling time.
3. You can put the idle time effectively in between two repetative tasks to schedule them.

All approaches use a greedy strategy, meaning decisions are made step by step, focusing on what seems best in the moment to reach the overall best solution. To show that this type of approach works well, let's use some illustrations. We can prove its effectiveness by showing what happens if we assume the opposite and reach a contradiction.

Using proof by contradiction, we can demonstrate that selecting the task with the lowest frequency increases idle time for the scheduler, thereby failing to maximize efficiency. Conversely, choosing tasks with higher frequencies maximizes efficiency.

The Greedy approach optimizes efficiency by prioritizing tasks based on their frequency, thereby reducing intervals and minimizing idle time for the scheduler. This strategy ultimately leads to the maximization of overall efficiency.

### Approach 1: Using Priority Queue / Max Heap
#### Intuition
To count the occurrences of each task while prioritizing those with the highest frequency, we use a frequency map and a max heap (priority queue), where frequencies are stored as negative values to simulate max heap behavior.

In each iteration, a cycle of length `n + 1` is considered, signifying the time needed to execute tasks without violating the cooling period constraint. For instance, if there are 2 tasks `(A)` and `n = 2`, the iterations required would be `A-Idle-Idle-A` (`n + 1` iterations before picking a new task `A`).

During each iteration:

- Tasks with the highest frequency are popped from the max heap. In the case of frequency ties, any tied task can be chosen.
- The chosen task's frequency is reduced by 1. If remaining occurrences exist, they are added to a temporary array.
- This process continues until the cycle is completed.

After completing the cycle:

- The temporary array is used to rebuild the heap with updated frequencies of tasks encountered during the cycle. This ensures that updated frequencies are preserved when tasks are popped from the heap.

Post-cycle processing:

- A counter (`time`) is incremented by the actual number of tasks processed in the current cycle (`taskCount`).
- If the heap is not empty, extra idle time (`n + 1`) is added to account for the cooling period (n cycles + 1 extra idle time).
- If the heap is empty, only the remaining tasks in the cycle need consideration (`taskCount`).

This process is repeated until the heap is empty. The `time` variable is incremented by the actual number of tasks processed in each cycle, with adjustments for idle time when required.

**For a better understanding of the intuition let us view an example:**

Given a task list (e.g., `['A', 'A', 'A', 'B', 'B', 'B']`) and a cooldown period `n` (e.g., 2), we aim to minimize the idle time during task execution.

1. Create a frequency map (`freq`) to track task occurrences: `{'A': 3, 'B': 3}`.
2. Initialize a max heap (`pq`) with negative frequencies: [-3, -3].
3. Define the cycle length as `n + 1` (e.g., `2 + 1 = 3`) to avoid violating the cooldown idle period.

Cycle Repetition:

Repeat cycles until the heap is empty:

- In the first cycle, choose 'A' and 'B', resulting in `[-2, -2]`.
- Rebuild heap: `[-2, -2]`, and increment time: 2 tasks processed + cooldown idle.
- In the second cycle, choose 'A' and 'B' again, resulting in `[-1, -1]`.
- Rebuild heap: `[-1, -1]`, and increment time: 2 tasks processed + cooldown idle.
- Continue cycles until the heap is empty.

The accumulated time spent on tasks and idle periods gives the final result: `3 + 3 + 2 = 8` (A-B-IDLE-A-B-IDLE-A-B).

#### Algorithm

- Initialize an array freq of size 26 to store the frequency of each task.
- Iterate through the tasks array and update the frequency of each task in the freq array.
- Create a priority queue pq and insert the frequencies of the tasks into the queue.
- Initialize a variable time to keep track of the total time taken.
- While the priority queue is not empty, repeat the following steps:
    - Initialize a variable cycle to n + 1, which represents the cooling interval plus one (for the current task).
    - Initialize an empty array store to store frequencies of tasks that still need to be processed.
    - Initialize a variable taskCount to keep track of the number of tasks processed in the current cycle.
    - While cycle is greater than 0 and the priority queue is not empty, repeat the following steps:
        - Decrement cycle.
        - Pop the top element (task frequency) from the priority queue.
        - If the popped frequency is greater than 1, decrement it by 1 and store it in the store array.
        - Increment taskCount as it keeps track of the number of tasks processed in the current cycle.
    - After processing tasks in the cycle, restore the updated frequencies (stored in the store array) back to the priority queue.
    - Update the time by adding either taskCount (if the priority queue is empty) or n + 1 (cooling interval) to the total time.
- Finally, return the total time.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    int leastInterval(vector<char>& tasks, int n) {
        // Building frequency map
        int freq[26] = {0};
        for (char &ch : tasks) {
            freq[ch - 'A']++;
        }

        // Max heap to store frequencies
        priority_queue<int> pq;
        for (int i = 0; i < 26; i++) {
            if (freq[i] > 0) {
                pq.push(freq[i]);
            }
        }

        int time = 0;
        // Process tasks until the heap is empty
        while (!pq.empty()) {
            int cycle = n + 1;
            vector<int> store;
            int taskCount = 0;
            // Execute tasks in each cycle
            while (cycle-- && !pq.empty()) {
                if (pq.top() > 1) {
                    store.push_back(pq.top() - 1);
                }
                pq.pop();
                taskCount++;
            }
            // Restore updated frequencies to the heap
            for (int &x : store) {
                pq.push(x);
            }
            // Add time for the completed cycle
            time += (pq.empty() ? taskCount : n + 1);
        }
        return time;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public int leastInterval(char[] tasks, int n) {
        // Build frequency map
        int[] freq = new int[26];
        for (char ch : tasks) {
            freq[ch - 'A']++;
        }
        
        // Max heap to store frequencies
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        for (int i = 0; i < 26; i++) {
            if (freq[i] > 0) {
                pq.offer(freq[i]);
            }
        }

        int time = 0;
        // Process tasks until the heap is empty
        while (!pq.isEmpty()) {
            int cycle = n + 1;
            List<Integer> store = new ArrayList<>();
            int taskCount = 0;
            // Execute tasks in each cycle
            while (cycle-- > 0 && !pq.isEmpty()) {
                int currentFreq = pq.poll();
                if (currentFreq > 1) {
                    store.add(currentFreq - 1);
                }
                taskCount++;
            }
            // Restore updated frequencies to the heap
            store.forEach(pq::offer);
            // Add time for the completed cycle
            time += (pq.isEmpty() ? taskCount : n + 1);
        }
        return time;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        # Build frequency map
        freq = [0] * 26
        for ch in tasks:
            freq[ord(ch) - ord('A')] += 1
        
        # Max heap to store frequencies
        pq = [-f for f in freq if f > 0]
        heapq.heapify(pq)

        time = 0
        # Process tasks until the heap is empty
        while pq:
            cycle = n + 1
            store = []
            task_count = 0
            # Execute tasks in each cycle
            while cycle > 0 and pq:
                current_freq = -heapq.heappop(pq)
                if current_freq > 1:
                    store.append(-(current_freq - 1))
                task_count += 1
                cycle -= 1
            # Restore updated frequencies to the heap
            for x in store:
                heapq.heappush(pq, x)
            # Add time for the completed cycle
            time += task_count if not pq else n + 1
        return time
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N)$

> **Reason**:  In the worst case, all tasks must be processed, and each task might be inserted and extracted from the priority queue. The priority queue operations (insertion and extraction) have a time complexity of O(log⁡k) each. Therefore, the overall time complexity is O(N⋅log⁡k). Since k is at maximum 26, log⁡k is a constant term. We can simplify the time complexity to O(N). This is a linear time complexity with a high constant factor..

### Space Complexity: $O(1)$

> **Reason**: The space complexity is mainly determined by the frequency array and the priority queue. The frequency array has a constant size of 26, and the priority queue can have a maximum size of 26 when all distinct tasks are present. Therefore, the overall space complexity is $O(1)$ or $O(26)$, which is considered constant.

### Approach 2 Filling the Slots and Sorting
#### Intuition
We need to find the minimum time required to complete all tasks given the constraint that at least `n` units of time must elapse between two identical tasks. To minimize the time, we should first consider scheduling the most frequent tasks so that they are separated by `n` units of time. Then, we can fill the idle slots with the remaining tasks.

**Example:**

Consider the task list `['A', 'A', 'A', 'B', 'B', 'B']` with `n = 2`.

1. Calculate the frequency array: `[3, 3, 0, ..., 0]`, as 'A' appears 3 times and 'B' appears 3 times.
2. Sort the frequency array in ascending order: `[0, 0, ..., 3, 3]`.
3. Calculate `maxFreq` as `freq[25] - 1`. In this case, `maxFreq = 3 - 1 = 2`.
4. Calculate the number of idle slots: `idleSlots = maxFreq * n = 2 * 2 = 4`.
5. The loop starts from the second highest frequency (index 24 in the sorted array) and goes down to the lowest frequency. This ensures that the highest frequency task's idle slots are considered only once, as it was accounted for when calculating `maxFreq` in the earlier step.
6. In each iteration, subtract the minimum of `maxFreq` and the current frequency from idleSlots. For the first iteration, subtract `min(2, 2) = 2` from idleSlots, resulting in `idleSlots = 4 - 2 = 2`.
7. If `idleSlots > 0`, add the remaining idle slots to the total number of tasks. In this example, there are 2 idle slots, so the final result is obtained by adding these idle slots (2) to the total number of tasks (6).
8. Thus, the minimum time required to complete all tasks, considering the cooldown period, is `8`.

#### Algorithm

- Create a freq array of size 26 to keep track of the count of each task.
- Iterate through the tasks array and update the frequency array with the frequency of each task.
- Sort the frequency array in non-decreasing order (ascending order = smallest to largest). This is done to process tasks with higher frequencies first.
- Calculate the maximum frequency of the most frequent task. Subtract 1 because we want to find the number of intervals, not the number of occurrences.
- Calculate the number of idleSlots that will be required by multiplying the maximum frequency by the cooldown period.
- Iterate over the frequency array from the second highest frequency to the lowest frequency.
    - Subtract the minimum of the maximum frequency and the current frequency from the idleSlots.
- If there are any idleSlots left, add them to the total number of tasks and return this as the answer. Otherwise, return the total number of tasks.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    int leastInterval(vector<char>& tasks, int n) {
        // Create a frequency array to keep track of the count of each task
        vector<int> freq(26);
        for (char task : tasks) {
            freq[task - 'A']++;
        }

        // Sort the frequency array in non-decreasing order
        sort(freq.begin(), freq.end());
        // Calculate the maximum frequency of any task
        int maxFreq = freq[25] - 1;
        // Calculate the number of idle slots that will be required
        int idleSlots = maxFreq * n;

        // Iterate over the frequency array from the second highest frequency to the lowest frequency
        for (int i = 24; i >= 0 && freq[i] > 0; i--) {
            // Subtract the minimum of the maximum frequency and the current frequency from the idle slots
            idleSlots -= min(maxFreq, freq[i]);
        }

        // If there are any idle slots left, add them to the total number of tasks
        return idleSlots > 0 ? idleSlots + tasks.size() : tasks.size();
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public int leastInterval(char[] tasks, int n) {
        // Create a frequency array to keep track of the count of each task
        int[] freq = new int[26];
        for (char task : tasks) {
            freq[task - 'A']++;
        }

        // Sort the frequency array in non-decreasing order
        Arrays.sort(freq);
        // Calculate the maximum frequency of any task
        int maxFreq = freq[25] - 1;
        // Calculate the number of idle slots that will be required
        int idleSlots = maxFreq * n;

        // Iterate over the frequency array from the second highest frequency to the lowest frequency
        for (int i = 24; i >= 0 && freq[i] > 0; i--) {
            // Subtract the minimum of the maximum frequency and the current frequency from the idle slots
            idleSlots -= Math.min(maxFreq, freq[i]);
        }

        // If there are any idle slots left, add them to the total number of tasks
        return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        # Create a frequency array to keep track of the count of each task
        freq = [0] * 26
        for task in tasks:
            freq[ord(task) - ord('A')] += 1

        # Sort the frequency array in non-decreasing order
        freq.sort()
        # Calculate the maximum frequency of any task
        max_freq = freq[25] - 1
        # Calculate the number of idle slots that will be required
        idle_slots = max_freq * n
        # Iterate over the frequency array from the second highest frequency to the lowest frequency

        for i in range(24, -1, -1):
            # Subtract the minimum of the maximum frequency and the current frequency from the idle slots
            idle_slots -= min(max_freq, freq[i])

        # If there are any idle slots left, add them to the total number of tasks
        return idle_slots + len(tasks) if idle_slots > 0 else len(tasks)
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N)$

> **Reason**:  The time complexity of the algorithm is O(26log⁡26+N), where 26log⁡26 is the time complexity of sorting the frequency array, and N is the length of the input task list, which is the dominating term.

### Space Complexity: $O(1)$

> **Reason**: The frequency array has a size of 26.

:::note
Some extra space is used when we sort arrays in place. The space complexity of the sorting algorithm depends on the programming language.

- In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(N)$ additional space.
- In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O(log⁡N)$ for sorting two arrays.
- In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O(log⁡N)$.

We sort the frequency array, which has a size of 26. The space used for sorting takes $O(26)$ or $O(log⁡26)$, which is constant, so the space complexity of the algorithm is $O(26)$, which is constant, i.e. $O(1)$.
:::

## References

- **LeetCode Problem**: [Task Scheduler](https://leetcode.com/problems/task-scheduler/description/)

- **Solution Link**: [Task Scheduler](https://leetcode.com/problems/task-scheduler/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>