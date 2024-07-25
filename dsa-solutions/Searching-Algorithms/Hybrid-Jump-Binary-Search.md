---
id: Hybrid-Jump-Binary-Search
title: Hybrid Jump Binary Search (Geeks for Geeks)
sidebar_label: Hybrid Jump Binary Search
tags:
  - Advanced
  - Search Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Hybrid Jump Binary Search algorithm problem."
---

## What is Hybrid Jump Binary Search?

Hybrid Jump Binary Search is an advanced search algorithm that combines the features of Jump Search and Binary Search. It first uses a jump step to find a block where the target element might be present and then performs a binary search within that block to find the target element.

## Algorithm for Hybrid Jump Binary Search

1. Calculate the optimal step size $\sqrt{N}$, where $N$ is the length of the list.
2. Start from the first element and jump ahead by the step size until the target element is greater than or equal to the current element.
3. Once the block where the target might be located is identified, perform a binary search within that block.
4. If the target element is found, return its index.
5. If the target element is not found, return -1.

## How does Hybrid Jump Binary Search work?

- It combines jump search and binary search to efficiently locate the target element.
- Jump search quickly narrows down the possible range of the target element.
- Binary search is then used within the identified range to find the target element efficiently.


## Problem Description

Given a sorted list and a target element, implement the Hybrid Jump Binary Search algorithm to find the index of the target element in the list. If the element is not present, return -1.

## Examples

**Example 1:**
Input:
list = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100]
target = 85
Output: 8

**Example 2:**
Input:
list = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100]
target = 55
Output: -1

## Your Task:

You don't need to read input or print anything. Complete the function hybrid_jump_binary_search() which takes arr[], N and K as input parameters and returns the index of K in the array. If K is not present in the array, return -1.

Expected Time Complexity: $O(\log N)$
Expected Auxiliary Space: $O(1)$

## Constraints

- $1 <= N <= 10^5$
- $1 <= arr[i] <= 10^6$
- $1 <= K <= 10^6$

## Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
    
```python

import math

def binary_search(arr, low, high, x):
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] < x:
            low = mid + 1
        else:
            high = mid - 1
    return -1

def hybrid_jump_binary_search(arr, x):
    n = len(arr)
    step = int(math.sqrt(n))
    prev = 0

    while arr[min(step, n) - 1] < x:
        prev = step
        step += int(math.sqrt(n))
        if prev >= n:
            return -1

    return binary_search(arr, prev, min(step, n) - 1, x)
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp

#include <iostream>
#include <vector>
#include <cmath>

int binary_search(const std::vector<int>& arr, int low, int high, int x) {
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == x) {
            return mid;
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

int hybrid_jump_binary_search(const std::vector<int>& arr, int x) {
    int n = arr.size();
    int step = sqrt(n);
    int prev = 0;

    while (arr[std::min(step, n) - 1] < x) {
        prev = step;
        step += sqrt(n);
        if (prev >= n) {
            return -1;
        }
    }

    return binary_search(arr, prev, std::min(step, n) - 1, x);
}

int main() {
    std::vector<int> arr = {10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100};
    int target = 85;
    std::cout << "Index: " << hybrid_jump_binary_search(arr, target) << std::endl;
    return 0;
}
```

</TabItem>
<TabItem value="Java" label="Java">

```java

public class HybridJumpBinarySearch {
    public static int binarySearch(int[] arr, int low, int high, int x) {
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (arr[mid] == x) {
                return mid;
            } else if (arr[mid] < x) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }

    public static int hybridJumpBinarySearch(int[] arr, int x) {
        int n = arr.length;
        int step = (int) Math.sqrt(n);
        int prev = 0;

        while (arr[Math.min(step, n) - 1] < x) {
            prev = step;
            step += (int) Math.sqrt(n);
            if (prev >= n) {
                return -1;
            }
        }

        return binarySearch(arr, prev, Math.min(step, n) - 1, x);
    }

    public static void main(String[] args) {
        int[] arr = {10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100};
        int target = 85;
        System.out.println("Index: " + hybridJumpBinarySearch(arr, target));
    }
}
```

</TabItem>
  <TabItem value="JavaScript" label="JavaScript">

```javascript

function binarySearch(arr, low, high, x) {
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] === x) {
            return mid;
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

function hybridJumpBinarySearch(arr, x) {
    let n = arr.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;

    while (arr[Math.min(step, n) - 1] < x) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) {
            return -1;
        }
    }

    return binarySearch(arr, prev, Math.min(step, n) - 1, x);
}

const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const target = 85;
console.log("Index:", hybridJumpBinarySearch(arr, target));
```

</TabItem>
</Tabs>

# Complexity Analysis
## Time Complexity: 
$O(\log N)$, where $N$ is the number of elements in the list. The combination of jump search and binary search reduces the search space efficiently.
## Space Complexity: 
$O(1)$, as no extra space is required apart from the input list.
# Advantages and Disadvantages
## Advantages:

Efficient for large sorted arrays.

Combines the advantages of both jump search and binary search.
## Disadvantages:

Requires the list to be sorted.

Slightly more complex to implement compared to individual search algorithms.
