---
id: Stooge-Sort-Algorithm
title: Stooge Sort Algorithm
sidebar_label: Stooge Sort Algorithm
tags:
  - Sorting Algorithms
  - Simple
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Stooge Sort Algorithm problem."
---

## What is the Stooge Sort Algorithm?

Stooge Sort is a simple and recursive sorting algorithm. It is known for its high time complexity and is mostly used for educational purposes to understand recursive sorting techniques.

## Algorithm Steps

1. **Base Case**:
   - If the array has only one element or the first element is less than or equal to the last element, return.

2. **Swapping**:
   - If the first element is greater than the last element, swap them.

3. **Recursive Sort**:
   - Recursively sort the first two-thirds of the array.
   - Recursively sort the last two-thirds of the array.
   - Recursively sort the first two-thirds of the array again.

## Complexity Analysis

- **Time Complexity**: $O(n^{\log_3 2})$ which is approximately $O(n^{2.7095})$.
- **Space Complexity**: $O(n)$ due to the recursive call stack.

## Example

Given an unsorted array:

```
array = [4, 3, 2, 1]
```


Using the Stooge Sort Algorithm:

- Sort the first two-thirds: `[4, 3, 2]` -> `[3, 4, 2]` -> `[3, 2, 4]` -> `[2, 3, 4]`
- Sort the last two-thirds: `[3, 2, 1]` -> `[2, 1, 3]` -> `[1, 2, 3]`
- Sort the first two-thirds again: `[4, 3, 2]` -> `[3, 4, 2]` -> `[3, 2, 4]` -> `[2, 3, 4]`
- The array becomes `[1, 2, 3, 4]`.

## Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>

```python
def stooge_sort(arr, l, h):
    if l >= h:
        return

    # Swap if the first element is greater than the last element
    if arr[l] > arr[h]:
        arr[l], arr[h] = arr[h], arr[l]

    # Recursively sort the first two-thirds, last two-thirds, and first two-thirds again
    if h - l + 1 > 2:
        t = (h - l + 1) // 3
        stooge_sort(arr, l, h - t)
        stooge_sort(arr, l + t, h)
        stooge_sort(arr, l, h - t)

# Example usage:
array = [4, 3, 2, 1]
stooge_sort(array, 0, len(array) - 1)
print(array)  # Output: [1, 2, 3, 4]
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp

#include <iostream>
#include <vector>

void stoogeSort(std::vector<int>& arr, int l, int h) {
    if (l >= h)
        return;

    // Swap if the first element is greater than the last element
    if (arr[l] > arr[h]) {
        std::swap(arr[l], arr[h]);
    }

    // Recursively sort the first two-thirds, last two-thirds, and first two-thirds again
    if (h - l + 1 > 2) {
        int t = (h - l + 1) / 3;
        stoogeSort(arr, l, h - t);
        stoogeSort(arr, l + t, h);
        stoogeSort(arr, l, h - t);
    }
}

int main() {
    std::vector<int> array = {4, 3, 2, 1};
    stoogeSort(array, 0, array.size() - 1);

    for (int num : array) {
        std::cout << num << " ";
    }
    std::cout << std::endl;  // Output: 1 2 3 4

    return 0;
}
```

  </TabItem>
</Tabs>

## Conclusion
Stooge Sort is a straightforward but inefficient sorting algorithm. It is not practical for large datasets due to its high time complexity but can be useful for educational purposes to understand recursive sorting techniques.
