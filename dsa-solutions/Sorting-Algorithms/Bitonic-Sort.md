---
id: Bitonic-Sort-Algorithm
title: Bitonic Sort Algorithm
sidebar_label: Bitonic Sort Algorithm
tags:
  - Sorting Algorithms
  - Simple
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Bitonic Sort Algorithm problem."
---

## What is the Bitonic Sort Algorithm?

Bitonic Sort is a parallel sorting algorithm that is efficient for hardware implementation. It works by recursively sorting two halves of the array into a bitonic sequence (one half in ascending order and the other in descending order) and then merging them into a single sorted sequence.

## Algorithm Steps

1. **Bitonic Sequence**:
   - Divide the array into two halves.
   - Recursively sort one half in ascending order and the other half in descending order to form a bitonic sequence.

2. **Bitonic Merge**:
   - Compare and swap elements to merge the bitonic sequence into a single sorted sequence.

3. **Recursive Sorting**:
   - Apply the bitonic sequence and bitonic merge steps recursively until the entire array is sorted.

## Complexity Analysis

- **Time Complexity**: $O(n \log^2 n)$ in the worst case.
- **Space Complexity**: $O(n)$ auxiliary space due to the recursive calls.

## Example

Given an unsorted array:

```
array = [4, 3, 2, 1]
```

Using the Bitonic Sort Algorithm:

- Create bitonic sequences: `[4, 3]` (ascending), `[2, 1]` (descending)
- Merge bitonic sequences: `[3, 4]` and `[1, 2]` to `[1, 2, 3, 4]`

## Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>

```python
def bitonic_sort(arr, low, cnt, direction):
    if cnt > 1:
        k = cnt // 2
        bitonic_sort(arr, low, k, 1)
        bitonic_sort(arr, low + k, k, 0)
        bitonic_merge(arr, low, cnt, direction)

def bitonic_merge(arr, low, cnt, direction):
    if cnt > 1:
        k = cnt // 2
        for i in range(low, low + k):
            if (direction == 1 and arr[i] > arr[i + k]) or (direction == 0 and arr[i] < arr[i + k]):
                arr[i], arr[i + k] = arr[i + k], arr[i]
        bitonic_merge(arr, low, k, direction)
        bitonic_merge(arr, low + k, k, direction)

def sort(arr, N, up):
    bitonic_sort(arr, 0, N, up)

# Example usage:
array = [4, 3, 2, 1]
sort(array, len(array), 1)
print(array)  # Output: [1, 2, 3, 4]
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp
#include <iostream>
#include <vector>

void bitonicMerge(std::vector<int>& arr, int low, int cnt, bool dir) {
    if (cnt > 1) {
        int k = cnt / 2;
        for (int i = low; i < low + k; i++) {
            if (dir == (arr[i] > arr[i + k])) {
                std::swap(arr[i], arr[i + k]);
            }
        }
        bitonicMerge(arr, low, k, dir);
        bitonicMerge(arr, low + k, k, dir);
    }
}

void bitonicSort(std::vector<int>& arr, int low, int cnt, bool dir) {
    if (cnt > 1) {
        int k = cnt / 2;
        bitonicSort(arr, low, k, true);
        bitonicSort(arr, low + k, k, false);
        bitonicMerge(arr, low, cnt, dir);
    }
}

void sort(std::vector<int>& arr, int N, bool up) {
    bitonicSort(arr, 0, N, up);
}

int main() {
    std::vector<int> array = {4, 3, 2, 1};
    sort(array, array.size(), true);
    
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

Bitonic Sort is an efficient parallel sorting algorithm with a consistent \( O(n \log^2 n) \) time complexity. It is well-suited for hardware implementations and can be useful in parallel computing environments.
