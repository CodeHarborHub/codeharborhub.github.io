---
id: Odd-Even-Sort-Algorithm
title: Odd-Even Sort Algorithm
sidebar_label: Odd-Even Sort Algorithm
tags:
  - Sorting Algorithms
  - Simple
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Odd-Even Sort Algorithm problem."
---

## What is the Odd-Even Sort Algorithm?

Odd-Even Sort, also known as Brick Sort, is a simple comparison-based sorting algorithm. It works by repeatedly comparing and swapping adjacent elements, alternating between odd and even indexed pairs. This process continues until the array is sorted.

## Algorithm Steps

1. **Initialize**:
   - Start with an unsorted array of elements.

2. **Odd Phase**:
   - Compare all odd-indexed elements with their next even-indexed elements and swap them if necessary.

3. **Even Phase**:
   - Compare all even-indexed elements with their next odd-indexed elements and swap them if necessary.

4. **Repeat**:
   - Continue alternating between the odd and even phases until no swaps are needed in a complete pass through the array.

## Complexity Analysis

- **Time Complexity**: The worst-case time complexity is $O(n^2)$, where $n$ is the number of elements in the array.
- **Space Complexity**: The space complexity is $O(1)$ since it is an in-place sorting algorithm.

## Example

Given an unsorted array:

```
array = [5, 3, 2, 8, 1, 4]
```


Using the Odd-Even Sort Algorithm:

- Perform the odd and even phases alternately until the array is sorted.

## Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>

```python
def odd_even_sort(arr):
    n = len(arr)
    is_sorted = False
    while not is_sorted:
        is_sorted = True
        for i in range(1, n-1, 2):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                is_sorted = False
        for i in range(0, n-1, 2):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                is_sorted = False
    return arr

# Example usage:
array = [5, 3, 2, 8, 1, 4]
sorted_array = odd_even_sort(array)
print(sorted_array)  # Output: [1, 2, 3, 4, 5, 8]
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp

#include <iostream>
#include <vector>

void oddEvenSort(std::vector<int>& arr) {
    int n = arr.size();
    bool isSorted = false;

    while (!isSorted) {
        isSorted = true;

        for (int i = 1; i <= n - 2; i += 2) {
            if (arr[i] > arr[i + 1]) {
                std::swap(arr[i], arr[i + 1]);
                isSorted = false;
            }
        }

        for (int i = 0; i <= n - 2; i += 2) {
            if (arr[i] > arr[i + 1]) {
                std::swap(arr[i], arr[i + 1]);
                isSorted = false;
            }
        }
    }
}

int main() {
    std::vector<int> array = {5, 3, 2, 8, 1, 4};
    oddEvenSort(array);
    
    for (int i : array) {
        std::cout << i << " ";
    }
    std::cout << std::endl;  // Output: 1 2 3 4 5 8

    return 0;
}
```

  </TabItem>
</Tabs>

# Conclusion
The Odd-Even Sort Algorithm is a simple and intuitive sorting technique that alternates between comparing odd and even indexed pairs. While it has a quadratic time complexity, it can be useful for small datasets or educational purposes to understand the basics of sorting algorithms.
