---
id: Cycle-Sort
title: Cycle Sort (Geeks for Geeks)
sidebar_label: Cycle Sort
tags:
  - Beginner
  - Sorting Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Cycle Sort problem on Geeks for Geeks."
---

## 1. What is Cycle Sort?

Cycle Sort is a comparison-based sorting algorithm that is particularly efficient when memory writes are a costly operation. The algorithm minimizes the number of memory writes to sort the array. The idea is to write each element to its correct position and hence reduce the number of write operations.

## 2. Algorithm for Cycle Sort

*Cycle Start:* Begin from the first element of the array.

*Find Position:* For the current element, find the position where it should be placed by counting the number of elements smaller than it.

*Place the Element:* Place the element in its correct position. If the element is already in its correct position, continue to the next element.

*Cycle:* If the element is not in its correct position, put the displaced element to its correct position, creating a cycle of swaps until all elements are in their correct positions.

*Repeat:* Repeat the process for all elements of the array.

## 3. How does Cycle Sort work?

Cycle Sort works by ensuring that each element is placed directly into its correct position.

This is achieved by counting the number of elements smaller than the current element and placing it at the corresponding index.

If an element is already in its correct position, it is skipped.

The displaced element is then placed in its correct position, creating a cycle until all elements are sorted.

## 4. Problem Description

Given an array of integers, implement the Cycle Sort algorithm to sort the array in ascending order.


## 5. Examples

**Example 1:**
```
Input: [20, 40, 50, 10, 30]
Output: [10, 20, 30, 40, 50]
```
**Example 2:**
```
Input: [64, 25, 12, 22, 11]
Output: [11, 12, 22, 25, 64]
```

**Explanation of Example 1:**

-The initial array is [20, 40, 50, 10, 30]
-First cycle: Place 20 at index 1 (correct position).[10, 20, 50, 40, 30]
-Second cycle: 40 is already in the correct position.
-Third cycle: Place 50 at index 4 (correct position).[10, 20, 30, 40, 50]
-Fourth and fifth cycles: Remaining elements are already in the correct position.
-Final sorted array: [10, 20, 30, 40, 50].

## 6. key constraints and characteristics of Cycle Sort:

- **Memory Writes**: Minimizes the number of write operations, making it efficient where write operations are costly.
- **Stability**: Maintains the relative order of equal elements, making it a stable sorting algorithm.
- **Performance**:
  - Time Complexity: $O(n^2)$ in the worst case.
  - Space Complexity: $O(1)$ additional space, as it sorts in-place.
- **Data Type**: Can be applied to any data type supporting comparison and swap operations.
- **Use Cases**: Suitable for small datasets or scenarios requiring stable sorting with minimal writes, like embedded systems.
- **Performance Issues**: 
  - Inefficient for large datasets due to its quadratic time complexity.
  - May not perform well on datasets with many duplicates or pre-sorted data.
 
## 7. Implementation

**Java Implementation**
```java
public class CycleSort {
    public static void cycleSort(int[] arr) {
        int n = arr.length;
        for (int cycleStart = 0; cycleStart <= n - 2; cycleStart++) {
            int item = arr[cycleStart];
            int pos = cycleStart;
            for (int i = cycleStart + 1; i < n; i++) {
                if (arr[i] < item)
                    pos++;
            }
            while (item == arr[pos])
                pos++;
            if (pos != cycleStart) {
                int temp = item;
                item = arr[pos];
                arr[pos] = temp;
            }
            while (pos != cycleStart) {
                pos = cycleStart;
                for (int i = cycleStart + 1; i < n; i++) {
                    if (arr[i] < item)
                        pos++;
                }
                while (item == arr[pos])
                    pos++;
                if (item != arr[pos]) {
                    int temp = item;
                    item = arr[pos];
                    arr[pos] = temp;
                }
            }
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {20, 40, 50, 10, 30};
        cycleSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

**Python**
```python
def cycle_sort(arr):
    writes = 0
    
    for cycleStart in range(0, len(arr) - 1):
        item = arr[cycleStart]
        pos = cycleStart

        for i in range(cycleStart + 1, len(arr)):
            if arr[i] < item:
                pos += 1

        while item == arr[pos]:
            pos += 1

        if pos != cycleStart:
            arr[pos], item = item, arr[pos]
            writes += 1

        while pos != cycleStart:
            pos = cycleStart
            for i in range(cycleStart + 1, len(arr)):
                if arr[i] < item:
                    pos += 1
            
            while item == arr[pos]:
                pos += 1

            if item != arr[pos]:
                arr[pos], item = item, arr[pos]
                writes += 1

    return writes

arr = [20, 40, 50, 10, 30]
cycle_sort(arr)
print(arr)
```

## 8. Complexity

-**Time Complexity**
  - Best Case: $O(n^2)$
  - Average Case: $O(n^2)$
  - Worst Case: $O(n^2)$
    Cycle Sort typically exhibits quadratic time complexity, where n is the number of elements in the array. This arises because each element may need to be moved multiple times to its correct position, especially in the presence of duplicates or when the array is in reverse order.
  
-**Space Complexity** 
  - $O(1)$
  - Cycle Sort is an in-place sorting algorithm, meaning it requires only a constant amount of extra space for auxiliary variables such as loops and temporary variables used for swaps.


## 9. Advantages and disadvantages
### Advantages:

- **Minimizes Writes:** Cycle Sort reduces memory writes, making it efficient where write operations are costly.
  
- **Stable Sorting:** Preserves the order of equal elements, ensuring stability in sorting results.

- **In-Place Algorithm:** Sorts elements directly within the input array, requiring minimal extra space.

- **Suitable for Small Data Sets:** Efficient for small datasets or nearly sorted arrays due to direct placement of elements.

### Disadvantages:

- **Quadratic Time Complexity:** Has $O(n^2)$ time complexity in the worst-case scenario, limiting efficiency for large datasets.

- **Not Adaptive:** Performs the same number of operations regardless of initial data order, lacking adaptability.

- **May Perform Poorly with Duplicates:** Can require additional operations to handle datasets with many duplicate values.

- **Limited Use Cases:** Less suitable for large or dynamic datasets where faster algorithms are more efficient, such as Quick Sort or Merge Sort.

## 10. References

- **GFG Article on Cycle Sort:** [Geeks for Geeks Cycle Sort](https://www.geeksforgeeks.org/cycle-sort/)
- **Wikipedia Article on Cycle Sort:** [Cycle Sort - Wikipedia](https://en.wikipedia.org/wiki/Cycle_sort)
