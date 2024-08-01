---
id: Fibonacci-Search
title: Fibonacci Search (Geeks for Geeks)
sidebar_label: Fibonacci Search
tags:
  - Intermediate
  - Search Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Fibonacci Search algorithm problem."
---

## What is Fibonacci Search?

Fibonacci Search is an efficient search algorithm for sorted arrays. It uses Fibonacci numbers to divide the array into smaller subarrays, reducing the search space at each step. This algorithm is particularly useful when the size of the input array is large.

## Algorithm for Fibonacci Search

1. Find the smallest Fibonacci number greater than or equal to the length of the array.
2. Use the Fibonacci number to divide the array into two parts.
3. Compare the target element with the element at the division point.
4. If the target element is equal to the element at the division point, return the index.
5. If the target element is less than the element at the division point, repeat the process for the left subarray.
6. If the target element is greater than the element at the division point, repeat the process for the right subarray.

## How does Fibonacci Search work?

- It calculates Fibonacci numbers and uses them to divide the array into smaller subarrays.
- The search process is repeated within the appropriate subarray based on comparisons.
- The algorithm reduces the search space at each step, making the search efficient.


## Problem Description

Given a sorted list and a target element, implement the Fibonacci Search algorithm to find the index of the target element in the list. If the element is not present, return -1.

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

You don't need to read input or print anything. Complete the function fibonacci_search() which takes arr[], N and K as input parameters and returns the index of K in the array. If K is not present in the array, return -1.

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
def fibonacci_search(arr, x):
    n = len(arr)
    fib_mm2 = 0  # (m-2)'th Fibonacci No.
    fib_mm1 = 1  # (m-1)'th Fibonacci No.
    fib_m = fib_mm1 + fib_mm2  # m'th Fibonacci

    while (fib_m < n):
        fib_mm2 = fib_mm1
        fib_mm1 = fib_m
        fib_m = fib_mm2 + fib_mm1

    offset = -1

    while (fib_m > 1):
        i = min(offset + fib_mm2, n - 1)

        if (arr[i] < x):
            fib_m = fib_mm1
            fib_mm1 = fib_mm2
            fib_mm2 = fib_m - fib_mm1
            offset = i
        elif (arr[i] > x):
            fib_m = fib_mm2
            fib_mm1 = fib_mm1 - fib_mm2
            fib_mm2 = fib_m - fib_mm1
        else:
            return i

    if (fib_mm1 and arr[offset + 1] == x):
        return offset + 1

    return -1
```

</TabItem>
  <TabItem value="C++" label="C++">

```cpp

#include <iostream>
#include <vector>
#include <algorithm>

int fibonacci_search(const std::vector<int>& arr, int x) {
    int n = arr.size();
    int fib_mm2 = 0;
    int fib_mm1 = 1;
    int fib_m = fib_mm2 + fib_mm1;

    while (fib_m < n) {
        fib_mm2 = fib_mm1;
        fib_mm1 = fib_m;
        fib_m = fib_mm2 + fib_mm1;
    }

    int offset = -1;

    while (fib_m > 1) {
        int i = std::min(offset + fib_mm2, n - 1);

        if (arr[i] < x) {
            fib_m = fib_mm1;
            fib_mm1 = fib_mm2;
            fib_mm2 = fib_m - fib_mm1;
            offset = i;
        } else if (arr[i] > x) {
            fib_m = fib_mm2;
            fib_mm1 = fib_mm1 - fib_mm2;
            fib_mm2 = fib_m - fib_mm1;
        } else {
            return i;
        }
    }

    if (fib_mm1 && arr[offset + 1] == x) {
        return offset + 1;
    }

    return -1;
}

int main() {
    std::vector<int> arr = {10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100};
    int target = 85;
    std::cout << "Index: " << fibonacci_search(arr, target) << std::endl;
    return 0;
}
```

</TabItem>
<TabItem value="Java" label="Java">

```java

public class FibonacciSearch {
    public static int fibonacciSearch(int[] arr, int x) {
        int n = arr.length;
        int fibMMm2 = 0; // (m-2)'th Fibonacci No.
        int fibMMm1 = 1; // (m-1)'th Fibonacci No.
        int fibM = fibMMm2 + fibMMm1; // m'th Fibonacci

        while (fibM < n) {
            fibMMm2 = fibMMm1;
            fibMMm1 = fibM;
            fibM = fibMMm2 + fibMMm1;
        }

        int offset = -1;

        while (fibM > 1) {
            int i = Math.min(offset + fibMMm2, n - 1);

            if (arr[i] < x) {
                fibM = fibMMm1;
                fibMMm1 = fibMMm2;
                fibMMm2 = fibM - fibMMm1;
                offset = i;
            } else if (arr[i] > x) {
                fibM = fibMMm2;
                fibMMm1 = fibMMm1 - fibMMm2;
                fibMMm2 = fibM - fibMMm1;
            } else {
                return i;
            }
        }

        if (fibMMm1 == 1 && arr[offset + 1] == x) {
            return offset + 1;
        }

        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100};
        int target = 85;
        System.out.println("Index: " + fibonacciSearch(arr, target));
    }
}
```

</TabItem>
  <TabItem value="JavaScript" label="JavaScript">

```javascript

function fibonacciSearch(arr, x) {
    let n = arr.length;
    let fibMMm2 = 0;
    let fibMMm1 = 1;
    let fibM = fibMMm2 + fibMMm1;

    while (fibM < n) {
        fibMMm2 = fibMMm1;
        fibMMm1 = fibM;
        fibM = fibMMm2 + fibMMm1;
    }

    let offset = -1;

    while (fibM > 1) {
        let i = Math.min(offset + fibMMm2, n - 1);

        if (arr[i] < x) {
            fibM = fibMMm1;
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1;
            offset = i;
        } else if (arr[i] > x) {
            fibM = fibMMm2;
            fibMMm1 = fibMMm1 - fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        } else {
            return i;
        }
    }

    if (fibMMm1 && arr[offset + 1] == x) {
        return offset + 1;
    }

    return -1;
}

const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const target = 85;
console.log("Index:", fibonacciSearch(arr, target));

```

</TabItem>
</Tabs>

# Complexity Analysis
## Time Complexity:
$O(\log N)$, where $N$ is the number of elements in the list. The Fibonacci numbers are used to reduce the search space efficiently.
## Space Complexity:
$O(1)$, as no extra space is required apart from the input list.
# Advantages and Disadvantages
## Advantages:

Efficient for large sorted arrays.

Reduces the search space efficiently using Fibonacci numbers.

## Disadvantages:

Requires the list to be sorted.

May not be as intuitive as other search algorithms like binary search.
