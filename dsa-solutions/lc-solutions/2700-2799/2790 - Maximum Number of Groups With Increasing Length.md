---
id: maximum-number-of-groups-with-increasing-length
title: Maximum Number of Groups With Increasing Length
sidebar_label: 2790 Maximum Number of Groups With Increasing Length
tags:
- Java
- Math
- Array
- Binary Search
- Greedy
- Sorting
description: "This document provides a solution where we Return an integer denoting the maximum number of groups you can create while satisfying these conditions."
---

## Problem

You are given a **0-indexed** array $usageLimits$ of length $n$.

Your task is to create **groups** using numbers from $0$ to $n - 1$, ensuring that each number, $i$, is used no more than $usageLimits[i]$ times in total **across all groups**. You must also satisfy the following conditions:

- Each group must consist of **distinct** numbers, meaning that no duplicate numbers are allowed within a single group.

- Each group (except the first one) must have a length **strictly greater** than the previous group.

Return an integer denoting the **maximum** number of groups you can create while satisfying these conditions.

### Examples

**Example 1:**

```
Input: usageLimits = [1,2,5]

Output: 3

Explanation: In this example, we can use 0 at most once, 1 at most twice, and 2 at most five times.

One way of creating the maximum number of groups while satisfying the conditions is:

Group 1 contains the number [2].

Group 2 contains the numbers [1,2].

Group 3 contains the numbers [0,1,2]. 

It can be shown that the maximum number of groups is 3. 

So, the output is 3.

```
**Example 2:**

```
Input: usageLimits = [2,1,2]

Output: 2

Explanation: In this example, we can use 0 at most twice, 1 at most once, and 2 at most twice.

One way of creating the maximum number of groups while satisfying the conditions is:

Group 1 contains the number [0].

Group 2 contains the numbers [1,2].

It can be shown that the maximum number of groups is 2. 

So, the output is 2.

```

**Example 3:**

```
Input: usageLimits = [1,1]

Output: 1

Explanation: In this example, we can use both 0 and 1 at most once.

One way of creating the maximum number of groups while satisfying the conditions is:

Group 1 contains the number [0].

It can be shown that the maximum number of groups is 1. 

So, the output is 1.
```

### Constraints

- $1 <= usageLimits.length <= 10^5$
- $1 <= usageLimits[i] <= 10^9$
---

## Approach

To solve the problem, we need to understand the nature of the allowed moves:

1. **Sort the Usage Limits**:

   - Start by sorting the **'usageLimits'** array. This helps in efficiently forming groups by using the smallest available numbers first, which maximizes the number of groups we can form.
       
2. **Initialize Variables**:

   - **'groups'**: Keeps track of the number of groups formed.

   - **'currentGroupSize'**: Represents the required size for the next group to be formed, starting at 1.

   - **'availableNumbers'**: Tracks the total available slots from all numbers seen so far.
     
3. **Form Groups**:

   - Iterate through the sorted **'usageLimits'**.

   - For each limit, add it to **'availableNumbers'**.
     
   - Check if **'availableNumbers'** is at least as large as **'currentGroupSize'**.

   - If true, it means we can form a new group of size **'currentGroupSize'**.

   - Increment the **'groups'** counter, decrement **'availableNumbers'** by **'currentGroupSize'**, and **'increase'** currentGroupSize by 1 for the next group.
     
## Solution for Maximum Number of Groups With Increasing Length

- The core idea is to maximize the number of groups by ensuring each group has a distinct set of numbers and each subsequent group is larger than the previous one.
 
- By sorting the **'usageLimits'**, we can efficiently use the smallest available counts first to form valid groups.
  
- This approach ensures that we can form as many groups as possible without exceeding the usage limits.

#### Code in Java

```java
import java.util.Collections;
import java.util.List;

class Solution {
    public int maxIncreasingGroups(List<Integer> usageLimits) {
        // Sort the usageLimits in ascending order
        Collections.sort(usageLimits);

        // Initialize variables
        int groups = 0;
        int currentGroupSize = 1; // the size of the next group we want to form
        long availableNumbers = 0; // to track the number of available slots across all numbers

        // Traverse the sorted usageLimits
        for (int limit : usageLimits) {
            availableNumbers += limit; // add the current limit to available slots

            // Check if we can form the next group
            if (availableNumbers >= currentGroupSize) {
                groups++; // form a new group
                availableNumbers -= currentGroupSize; // reduce the used slots
                currentGroupSize++; // increase the size requirement for the next group
            }
        }

        return groups;
    }
}    
```

### Complexity Analysis

#### Time Complexity: $O(nlogn)$

> **Reason**: Time Complexity is $O(nlogn)$. Sorting the **'usageLimits'** takes $O(nlogn)$ time. Iterating through the sorted list takes $O(n)$ time. Therefore, the overall time complexity is $O(nlogn)$.

#### Space Complexity: $O(1)$

> **Reason**: The space complexity is $O(1)$, Because the additional space (ignoring the space used by the input list and the space needed for sorting, which is $O(n)$).

# References

- **LeetCode Problem:** [Maximum Number of Groups With Increasing Length](https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/description/)
- **Solution Link:** [Maximum Number of Groups With Increasing Length Solution on LeetCode](https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/)
- **Authors LeetCode Profile:** [Vivek Vardhan](https://leetcode.com/u/vivekvardhan43862/)
