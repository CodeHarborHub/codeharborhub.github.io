---
id: Interpolation-Search
title: Interpolation Search (Geeks for Geeks)
sidebar_label: Interpolation Search
tags:
  - Intermediate
  - Search Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Interpolation Search problem."
---

## What is Interpolation Search?

Interpolation Search is an efficient search algorithm for uniformly distributed sorted arrays. It works by estimating the position of the target value based on the value's distribution, making it faster than linear search and in some cases more efficient than binary search.

## Algorithm for Interpolation Search

1. Initialize the low and high indices to 0 and N-1, respectively.
2. While the target value is within the range defined by the current low and high indices:
   - Calculate the probe position using the formula:
   $$
    \text{pos} = \text{low} + \left( \frac{(x - \text{arr}[low]) \times (\text{high} - \text{low})}{\text{arr}[high] - \text{arr}[low]} \right)
   $$
3. Check the value at the probe position:
   - If `arr[pos]` is equal to the target value, return `pos`.
   - If `arr[pos]` is less than the target value, update `low` to `pos + 1`.
   - If `arr[pos]` is greater than the target value, update `high` to `pos - 1`.
4. If the target value is not found, return -1.

## How does Interpolation Search work?

- It calculates a probe position using a formula that considers the distribution of values within the array.
- The probe position is used to narrow down the search range, making the search process more efficient compared to a linear search.

## Problem Description

Given a sorted list and a target element, implement the Interpolation Search algorithm to find the index of the target element in the list. If the element is not present, return -1.

## Examples

**Example 1:**
Input:
list = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23]
target = 18
Output: 4


**Example 2:**
Input:
list = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23]
target = 25
Output: -1


## Your Task:

You don't need to read input or print anything. Complete the function interpolation_search() which takes arr[], N and K as input parameters and returns the index of K in the array. If K is not present in the array, return -1.

Expected Time Complexity: $O(\log \log N)$
Expected Auxiliary Space: $O(1)$

## Constraints

- $1 <= N <= 10^5$
- $1 <= arr[i] <= 10^6$
- $1 <= K <= 10^6$

## Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
    
```python

def interpolation_search(arr, n, x):
    low = 0
    high = n - 1

    while low <= high and x >= arr[low] and x <= arr[high]:
        if low == high:
            if arr[low] == x:
                return low
            return -1

        pos = low + ((x - arr[low]) * (high - low) // (arr[high] - arr[low]))

        if arr[pos] == x:
            return pos
        if arr[pos] < x:
            low = pos + 1
        else:
            high = pos - 1
    return -1
```
</TabItem>
  <TabItem value="C++" label="C++">

```cpp

#include <iostream>
#include <vector>

int interpolation_search(const std::vector<int>& arr, int n, int x) {
    int low = 0, high = n - 1;

    while (low <= high && x >= arr[low] && x <= arr[high]) {
        if (low == high) {
            if (arr[low] == x) return low;
            return -1;
        }

        int pos = low + ((x - arr[low]) * (high - low) / (arr[high] - arr[low]));

        if (arr[pos] == x)
            return pos;
        if (arr[pos] < x)
            low = pos + 1;
        else
            high = pos - 1;
    }
    return -1;
}

int main() {
    std::vector<int> arr = {10, 12, 13, 16, 18, 19, 20, 21, 22, 23};
    int target = 18;
    std::cout << "Index: " << interpolation_search(arr, arr.size(), target) << std::endl;
    return 0;
}
```

</TabItem>
<TabItem value="Java" label="Java">

```java

public class InterpolationSearch {
    public static int interpolationSearch(int[] arr, int n, int x) {
        int low = 0, high = n - 1;

        while (low <= high && x >= arr[low] && x <= arr[high]) {
            if (low == high) {
                if (arr[low] == x) return low;
                return -1;
            }

            int pos = low + ((x - arr[low]) * (high - low) / (arr[high] - arr[low]));

            if (arr[pos] == x)
                return pos;
            if (arr[pos] < x)
                low = pos + 1;
            else
                high = pos - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {10, 12, 13, 16, 18, 19, 20, 21, 22, 23};
        int target = 18;
        System.out.println("Index: " + interpolationSearch(arr, arr.length, target));
    }
}
```

</TabItem>
  <TabItem value="JavaScript" label="JavaScript">

```javascript

function interpolationSearch(arr, n, x) {
    let low = 0, high = n - 1;

    while (low <= high && x >= arr[low] && x <= arr[high]) {
        if (low === high) {
            if (arr[low] === x) return low;
            return -1;
        }

        let pos = low + Math.floor(((x - arr[low]) * (high - low) / (arr[high] - arr[low])));

        if (arr[pos] === x)
            return pos;
        if (arr[pos] < x)
            low = pos + 1;
        else
            high = pos - 1;
    }
    return -1;
}

const arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23];
const target = 18;
console.log("Index:", interpolationSearch(arr, arr.length, target));
```

</TabItem>
</Tabs>

# Complexity Analysis
## Time Complexity: 
$O(\log \log n)$ for uniformly distributed data, where $n$ is the number of elements in the list.
## Space Complexity: 
$O(1)$, as no extra space is required apart from the input list.

# Advantages and Disadvantages
## Advantages:

Faster than linear search and binary search for uniformly distributed sorted lists.

Efficient for large datasets.

## Disadvantages:

Requires the list to be sorted.

Performance degrades if the distribution of elements is not uniform.
