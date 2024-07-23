---
id: Maximum-Bags-With-Full-Capacity-of-Rocks
title: Maximum Bags With Full Capacity of Rocks
sidebar_label: 2279-Maximum Bags With Full Capacity of Rocks
tags: 
  - Arrays
  - Brute Force
  - Optimized approach
  - LeetCode
  - Python
  - Java
  - C++

description: "This is a solution to Maximum Bags With Full Capacity of Rocks problem on LeetCode."
sidebar_position: 80
---

## Problem Statement 
In this tutorial, we will solve the Maximum Bags With Full Capacity of Rocks problem . We will provide the implementation of the solution in Python, Java, and C++.

### Problem Description

You have n bags numbered from 0 to n - 1. You are given two 0-indexed integer arrays capacity and rocks. The ith bag can hold a maximum of capacity[i] rocks and currently contains rocks[i] rocks. You are also given an integer additionalRocks, the number of additional rocks you can place in any of the bags.

Return the maximum number of bags that could have full capacity after placing the additional rocks in some bags.
 
### Examples

**Example 1:**
Input: capacity = [2,3,4,5], rocks = [1,2,4,4], additionalRocks = 2
Output: 3
Explanation:
Place 1 rock in bag 0 and 1 rock in bag 1.
The number of rocks in each bag are now [2,3,4,4].
Bags 0, 1, and 2 have full capacity.
There are 3 bags at full capacity, so we return 3.
It can be shown that it is not possible to have more than 3 bags at full capacity.
Note that there may be other ways of placing the rocks that result in an answer of 3.
**Example 2:**
Input: capacity = [10,2,2], rocks = [2,2,0], additionalRocks = 100
Output: 3
Explanation:
Place 8 rocks in bag 0 and 2 rocks in bag 2.
The number of rocks in each bag are now [10,2,2].
Bags 0, 1, and 2 have full capacity.
There are 3 bags at full capacity, so we return 3.
It can be shown that it is not possible to have more than 3 bags at full capacity.
Note that we did not use all of the additional rocks.
### Constraints
- `n == capacity.length == rocks.length`
- `1 <= n <= 5 * 104`
- `1 <= capacity[i] <= 109`
- `0 <= rocks[i] <= capacity[i]`
- `1 <= additionalRocks <= 109`
## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1:Brute Force (Naive)


Brute Force Approach: The brute force approach involves trying every possible way to distribute the additional rocks among the bags to maximize the number of full bags. This approach is infeasible for large inputs due to its high complexity.
#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <algorithm>

int distributeRocks(std::vector<int>& capacity, std::vector<int>& rocks, int additionalRocks, int idx) {
    if (idx == capacity.size() || additionalRocks == 0) {
        int fullBags = 0;
        for (int i = 0; i < capacity.size(); ++i) {
            if (rocks[i] == capacity[i]) {
                ++fullBags;
            }
        }
        return fullBags;
    }

    int maxBags = distributeRocks(capacity, rocks, additionalRocks, idx + 1);

    for (int i = 1; i <= additionalRocks; ++i) {
        if (rocks[idx] + i <= capacity[idx]) {
            rocks[idx] += i;
            maxBags = std::max(maxBags, distributeRocks(capacity, rocks, additionalRocks - i, idx + 1));
            rocks[idx] -= i;
        }
    }

    return maxBags;
}

int maximumBagsBruteForce(std::vector<int>& capacity, std::vector<int>& rocks, int additionalRocks) {
    return distributeRocks(capacity, rocks, additionalRocks, 0);
}


```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.*;

public class BruteForceSolution {
    public int distributeRocks(int[] capacity, int[] rocks, int additionalRocks, int idx) {
        if (idx == capacity.length || additionalRocks == 0) {
            int fullBags = 0;
            for (int i = 0; i < capacity.length; ++i) {
                if (rocks[i] == capacity[i]) {
                    ++fullBags;
                }
            }
            return fullBags;
        }

        int maxBags = distributeRocks(capacity, rocks, additionalRocks, idx + 1);

        for (int i = 1; i <= additionalRocks; ++i) {
            if (rocks[idx] + i <= capacity[idx]) {
                rocks[idx] += i;
                maxBags = Math.max(maxBags, distributeRocks(capacity, rocks, additionalRocks - i, idx + 1));
                rocks[idx] -= i;
            }
        }

        return maxBags;
    }

    public int maximumBagsBruteForce(int[] capacity, int[] rocks, int additionalRocks) {
        return distributeRocks(capacity, rocks, additionalRocks, 0);
    }
}
 


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def distribute_rocks(capacity, rocks, additional_rocks, idx):
    if idx == len(capacity) or additional_rocks == 0:
        full_bags = sum(1 for i in range(len(capacity)) if rocks[i] == capacity[i])
        return full_bags
    
    max_bags = distribute_rocks(capacity, rocks, additional_rocks, idx + 1)

    for i in range(1, additional_rocks + 1):
        if rocks[idx] + i <= capacity[idx]:
            rocks[idx] += i
            max_bags = max(max_bags, distribute_rocks(capacity, rocks, additional_rocks - i, idx + 1))
            rocks[idx] -= i

    return max_bags

def maximum_bags_brute_force(capacity, rocks, additional_rocks):
    return distribute_rocks(capacity, rocks, additional_rocks, 0)

```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O(2^n)$
-  due to trying all combinations.
- Space Complexity: $O(n)$
-  for the recursive stack.

</tabItem>
<tabItem value="Optimized approach" label="Optimized approach">

### Approach 2: Optimized approach

Optimized Approach: Calculate the difference between the capacity and the current number of rocks in each bag.
Sort these differences in ascending order.
Start filling the bags with the smallest difference first until the additional rocks are exhausted.
Count the number of bags that have been filled to their capacity.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <algorithm>

int maximumBags(std::vector<int>& capacity, std::vector<int>& rocks, int additionalRocks) {
    int n = capacity.size();
    std::vector<int> spaceNeeded(n);

    // Calculate the space needed to fill each bag
    for (int i = 0; i < n; ++i) {
        spaceNeeded[i] = capacity[i] - rocks[i];
    }

    // Sort the space needed in ascending order
    std::sort(spaceNeeded.begin(), spaceNeeded.end());

    int fullBags = 0;

    // Fill the bags with the smallest space needed first
    for (int i = 0; i < n; ++i) {
        if (spaceNeeded[i] <= additionalRocks) {
            additionalRocks -= spaceNeeded[i];
            ++fullBags;
        } else {
            break;
        }
    }

    return fullBags;
}




```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.Arrays;

public class Solution {
    public int maximumBags(int[] capacity, int[] rocks, int additionalRocks) {
        int n = capacity.length;
        int[] spaceNeeded = new int[n];

        // Calculate the space needed to fill each bag
        for (int i = 0; i < n; ++i) {
            spaceNeeded[i] = capacity[i] - rocks[i];
        }

        // Sort the space needed in ascending order
        Arrays.sort(spaceNeeded);

        int fullBags = 0;

        // Fill the bags with the smallest space needed first
        for (int i = 0; i < n; ++i) {
            if (spaceNeeded[i] <= additionalRocks) {
                additionalRocks -= spaceNeeded[i];
                ++fullBags;
            } else {
                break;
            }
        }

        return fullBags;
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def maximum_bags(capacity, rocks, additional_rocks):
    space_needed = [capacity[i] - rocks[i] for i in range(len(capacity))]

    # Sort the space needed in ascending order
    space_needed.sort()

    full_bags = 0

    # Fill the bags with the smallest space needed first
    for space in space_needed:
        if space <= additional_rocks:
            additional_rocks -= space
            full_bags += 1
        else:
            break

    return full_bags



```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n*logn)$
- due to sorting the differences.
- Space Complexity: $O(n)$
- for storing the differences.
- This approach is efficient and straightforward.

</tabItem>
</Tabs>

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['AmruthaPariprolu'].map(username => (
 <Author key={username} username={username} />
))}
</div>
