---
id: Adaptive-Segment-Search
title: Adaptive Segment Search Algorithm (Geeks for Geeks)
sidebar_label: Adaptive Segment Search
tags:
  - Advanced
  - Search Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Adaptive Segment Search algorithm problem."
---

## What is Adaptive Segment Search?

Adaptive Segment Search is a sophisticated search algorithm designed to efficiently locate an element in a sorted array. It adapts its search strategy based on the distribution of the elements, making it more efficient than traditional search algorithms in certain scenarios.

## Algorithm for Adaptive Segment Search

1. **Initialization:**
   - Divide the array into segments of varying sizes based on the distribution of the elements.
   - Start with the first segment.

2. **Segment Search:**
   - Check if the target element falls within the current segment.
   - If it does, perform a linear or binary search within the segment.
   - If not, move to the next segment and repeat the process.

3. **Adaptation:**
   - Adjust the segment sizes dynamically based on the distribution of the elements encountered during the search.

4. **Termination:**
   - If the target element is found, return its index.
   - If the end of the array is reached without finding the target, return -1.

## How does Adaptive Segment Search work?

- The algorithm starts by dividing the array into segments.
- It then adapts its search strategy based on the segments and the distribution of elements within the segments.
- By adjusting the segment sizes dynamically, the algorithm can achieve better performance compared to static segment sizes.

## Problem Description

Given a sorted list and a target element, implement the Adaptive Segment Search algorithm to find the index of the target element in the list. If the element is not present, return -1.

## Examples

**Example 1:**
Input:
list = [3, 6, 8, 12, 14, 17, 19, 23, 25, 29]
target = 17
Output: 5

**Example 2:**
Input:
list = [3, 6, 8, 12, 14, 17, 19, 23, 25, 29]
target = 10
Output: -1

## Your Task:

You don't need to read input or print anything. Complete the function adaptive_segment_search() which takes arr[], N and K as input parameters and returns the index of K in the array. If K is not present in the array, return -1.

Expected Time Complexity: $O(\log n)$ in the best case
Expected Auxiliary Space: $O(1)$

## Constraints

- $1 <= N <= 10^5$
- $1 <= arr[i] <= 10^6$
- $1 <= K <= 10^6$

## Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
    
```python

def adaptive_segment_search(arr, n, x):
    segment_size = 1
    while segment_size < n:
        segment_size *= 2

    start = 0
    while start < n:
        end = min(start + segment_size, n)
        if arr[end - 1] >= x:
            for i in range(start, end):
                if arr[i] == x:
                    return i
            return -1
        start = end
    return -1
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp

#include <iostream>
#include <vector>

int adaptive_segment_search(const std::vector<int>& arr, int n, int x) {
    int segment_size = 1;
    while (segment_size < n) {
        segment_size *= 2;
    }

    int start = 0;
    while (start < n) {
        int end = std::min(start + segment_size, n);
        if (arr[end - 1] >= x) {
            for (int i = start; i < end; ++i) {
                if (arr[i] == x) {
                    return i;
                }
            }
            return -1;
        }
        start = end;
    }
    return -1;
}

int main() {
    std::vector<int> arr = {3, 6, 8, 12, 14, 17, 19, 23, 25, 29};
    int target = 17;
    std::cout << "Index: " << adaptive_segment_search(arr, arr.size(), target) << std::endl;
    return 0;
}
```

</TabItem>
<TabItem value="Java" label="Java">

```java

public class AdaptiveSegmentSearch {
    public static int adaptiveSegmentSearch(int[] arr, int n, int x) {
        int segment_size = 1;
        while (segment_size < n) {
            segment_size *= 2;
        }

        int start = 0;
        while (start < n) {
            int end = Math.min(start + segment_size, n);
            if (arr[end - 1] >= x) {
                for (int i = start; i < end; i++) {
                    if (arr[i] == x) {
                        return i;
                    }
                }
                return -1;
            }
            start = end;
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {3, 6, 8, 12, 14, 17, 19, 23, 25, 29};
        int target = 17;
        System.out.println("Index: " + adaptiveSegmentSearch(arr, arr.length, target));
    }
}
```

</TabItem>
  <TabItem value="JavaScript" label="JavaScript">

```javascript

function adaptiveSegmentSearch(arr, n, x) {
    let segment_size = 1;
    while (segment_size < n) {
        segment_size *= 2;
    }

    let start = 0;
    while (start < n) {
        let end = Math.min(start + segment_size, n);
        if (arr[end - 1] >= x) {
            for (let i = start; i < end; i++) {
                if (arr[i] === x) {
                    return i;
                }
            }
            return -1;
        }
        start = end;
    }
    return -1;
}

const arr = [3, 6, 8, 12, 14, 17, 19, 23, 25, 29];
const target = 17;
console.log("Index:", adaptiveSegmentSearch(arr, arr.length, target));

```

</TabItem>
</Tabs>

# Complexity Analysis
## Time Complexity: 
$O(\log n)$ in the best case, where $n$ is the number of elements in the list.

## Space Complexity: 
$O(1)$, as no extra space is required apart from the input list.

# Advantages and Disadvantages
## Advantages:

Adapts to the distribution of elements in the array.

Can achieve better performance than traditional search algorithms for certain data distributions.

## Disadvantages:

Requires the list to be sorted.
Complexity may vary based on the distribution of the elements.
