---
id: maximum-number-of-potholes-that-can-be-fixed
title: maximum number of potholes that can be fixed
sidebar_label: 3119. maximum number of potholes that can be fixed
tags:
- String
- Greedy
- Sorting
description: "The given Solution class uses a greedy approach to maximize the number of potholes repaired within the given budget by prioritizing the repair of larger contiguous pothole segments first."
---



## Problem

You are given an integer array $nums$ and two integers $cost1$ and $cost2$. You are allowed to perform either of the following operations any number of times:

- Choose an index $i$ from nums and increase $nums[i]$ by $1$ for a cost of $cost1$.

- Choose two different indices $i$, $j$, from nums and increase $nums[i]$ and $nums[j]$ by $1$ for a cost of $cost2$.


### Constraints

- `1 <= road.length <= 105`
-  `1 <= budget <= 105 + 1`
-  oad consists only of characters '.' and 'x'
---

## Approach

Approach: Greedy Algorithm
Identify Pothole Segments:

The getSortedPotholeLengths method processes the input string road, which represents a road with potholes as segments of characters other than '.'.
This method splits the road string by the character '.', which separates the potholes, and calculates the length of each pothole segment.
It then sorts these lengths in descending order to prioritize repairing the largest potholes first.
Prioritize Larger Potholes:

By sorting the pothole lengths in descending order, the algorithm ensures that it considers the largest potholes first. This is a key part of the greedy strategy, aiming to get the maximum immediate benefit from the budget.
Budget Management:

The main method maxPotholes iterates over the sorted pothole lengths.
For each pothole length, it calculates the maximum number of potholes that can be repaired given the remaining budget. Specifically, for each pothole segment, the cost to repair it is the length of the segment plus one (the cost of repairing the segment plus a fixed cost for starting the repair process).
If the current pothole segment can be fully repaired within the remaining budget, the algorithm repairs it and updates the budget accordingly.
If the current pothole segment cannot be fully repaired within the remaining budget, the algorithm calculates how many potholes can be repaired with the remaining budget and returns the total number of potholes repaired so far.
     
## Maximum Number of Potholes That Can Be Fixed
The greedy approach focuses on repairing the largest potholes first to maximize the number of potholes that can be repaired within the given budget. The sorted list of pothole lengths allows the algorithm to quickly determine the most cost-effective repairs at each step, ensuring that the budget is utilized efficiently.

#### Code in Java

```java
class Solution {
  public int maxPotholes(String road, int budget) {
    int ans = 0;

    for (final int length : getSortedPotholeLengths(road)) {
      final int canRepair = Math.max(0, budget - 1);
      if (length > canRepair)
        return ans + canRepair;
      ans += length;
      budget -= length + 1;
    }

    return ans;
  }

  private List<Integer> getSortedPotholeLengths(final String road) {
    List<Integer> potholeLengths = new ArrayList<>();
    for (String pothole : road.split("\\."))
      potholeLengths.add(pothole.length());
    Collections.sort(potholeLengths, Collections.reverseOrder());
    return potholeLengths;
  }
}

### Complexity Analysis

#### Time Complexity: $𝑂(n)$

#### Space Complexity: O(n)

