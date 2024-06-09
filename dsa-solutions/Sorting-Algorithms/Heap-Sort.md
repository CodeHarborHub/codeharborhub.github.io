---
id: Heap-Sort
title: Heap Sort (Geeks for Geeks)
sidebar_label: Heap Sort
tags:
  - Beginner
  - Sorting Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Heap Sort problem on Geeks for Geeks."
---

## 1. What is Heap Sort?

Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort where we first find the minimum element and place the minimum element at the beginning. Repeat the same process for the remaining elements.

## 2. Algorithm for Heap Sort

First convert the array into heap data structure using heapify, then one by one delete the root node of the Max-heap and replace it with the last node in the heap and then heapify the root of the heap. Repeat this process until size of heap is greater than 1.

1. Build a heap from the given input array.
2. Repeat the following steps until the heap contains only one element:

- Swap the root element of the heap (which is the largest element) with the last element of the heap.
- Remove the last element of the heap (which is now in the correct position).
- Heapify the remaining elements of the heap.

3. The sorted array is obtained by reversing the order of the elements in the input array.

## 3. How does Heap Sort work?

To understand heap sort more clearly, let’s take an unsorted array and try to sort it using heap sort.

1. Build Complete Binary Tree: Build a complete binary tree from the array.

2. Transform into max heap: After that, the task is to construct a tree from that unsorted array and try to convert it into max heap.

3. To transform a heap into a max-heap, the parent node should always be greater than or equal to the child nodes

4. Perform heap sort: Remove the maximum element in each step (i.e., move it to the end position and remove that) and then consider the remaining elements and transform it into a max heap.

5. Delete the root element (10) from the max heap. In order to delete this node, try to swap it with the last node. After removing the root element, again heapify it to convert it into max heap.

6. Repeat the above steps. Now remove the root again and perform heapify.
   Now when the root is removed once again it is sorted

## 4. Problem Description

Given an array of integers, implement the Heap Sort algorithm to sort the array in ascending order.

## 5. Examples

**Example 1:**

```
Input: [64, 34, 25, 12, 22, 11, 90]
Output: [11, 12, 22, 25, 34, 64, 90]
```

**Example 2:**

```
Input: [5, 1, 4, 2, 8]
Output: [1, 2, 4, 5, 8]
```

## 6. Constraints

- The array can have any number of elements.
- All elements in the array are integers.

## 7. Implementation

## Python
<Tabs>
  <TabItem value="Python" label="Python" default>
  
  ```python

def heapify(arr, N, i):
largest = i # Initialize largest as root
l = 2 * i + 1 # left = 2*i + 1
r = 2 * i + 2 # right = 2*i + 2

    # See if left child of root exists and is
    # greater than root
    if l < N and arr[largest] < arr[l]:
        largest = l

    # See if right child of root exists and is
    # greater than root
    if r < N and arr[largest] < arr[r]:
        largest = r

    # Change root, if needed
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]  # swap

        # Heapify the root.
        heapify(arr, N, largest)

# The main function to sort an array of given size

def heapSort(arr):
N = len(arr)

    # Build a maxheap.
    for i in range(N//2 - 1, -1, -1):
        heapify(arr, N, i)

    # One by one extract elements
    for i in range(N-1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]  # swap
        heapify(arr, i, 0)


```
## C++

</TabItem>

<TabItem value="C++" label="C++">

```cpp

#include <iostream>
using namespace std;
void heapify(int arr[], int N, int i)
{
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;


    if (l < N && arr[l] > arr[largest])
        largest = l;

    if (r < N && arr[r] > arr[largest])
        largest = r;


    if (largest != i) {
        swap(arr[i], arr[largest]);

        heapify(arr, N, largest);
    }
}

// Main function to do heap sort
void heapSort(int arr[], int N)
{

    for (int i = N / 2 - 1; i >= 0; i--)
        heapify(arr, N, i);
    for (int i = N - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}

```
## Java
</TabItem>
  <TabItem value="Java" label="Java">

```java

public class HeapSort {
    public void sort(int arr[])
    {
        int N = arr.length;

        // Build heap (rearrange array)
        for (int i = N / 2 - 1; i >= 0; i--)
            heapify(arr, N, i);

        // One by one extract an element from heap
        for (int i = N - 1; i > 0; i--) {
            // Move current root to end
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            // call max heapify on the reduced heap
            heapify(arr, i, 0);
        }
    }
    void heapify(int arr[], int N, int i)
    {
        int largest = i; // Initialize largest as root
        int l = 2 * i + 1; // left = 2*i + 1
        int r = 2 * i + 2; // right = 2*i + 2

        // If left child is larger than root
        if (l < N && arr[l] > arr[largest])
            largest = l;

        // If right child is larger than largest so far
        if (r < N && arr[r] > arr[largest])
            largest = r;

        // If largest is not root
        if (largest != i) {
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            // Recursively heapify the affected sub-tree
            heapify(arr, N, largest);
        }
    }
}

```
## JavaScript
</TabItem>

<TabItem value="JavaScript" label="JavaScript">

```javascript
function sort( arr)
    {
        var N = arr.length;

        // Build heap (rearrange array)
        for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
            heapify(arr, N, i);

        // One by one extract an element from heap
        for (var i = N - 1; i > 0; i--) {
            // Move current root to end
            var temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            // call max heapify on the reduced heap
            heapify(arr, i, 0);
        }
    }

    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    function heapify(arr, N, i)
    {
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2

        // If left child is larger than root
        if (l < N && arr[l] > arr[largest])
            largest = l;

        // If right child is larger than largest so far
        if (r < N && arr[r] > arr[largest])
            largest = r;

        // If largest is not root
        if (largest != i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            // Recursively heapify the affected sub-tree
            heapify(arr, N, largest);
        }
    }
````

  </TabItem>
</Tabs>

## 8. Complexity Analysis

- Time Complexity: $O(N log N)$
- Auxiliary Space: $O(log n)$, due to the recursive call stack. However, auxiliary space can be $O(1)$ for iterative implementation.

## 9. Advantages and Disadvantages

**Advantages:**
- **Efficient Time Complexity**: Heap Sort has a time complexity of $O(n log n)$ in all cases. This makes it efficient for sorting large datasets. The log n factor comes from the height of the binary heap, and it ensures that the algorithm maintains good performance even with a large number of elements.
- **Memory Usage** – Memory usage can be minimal (by writing an iterative heapify() instead of a recursive one). So apart from what is necessary to hold the initial list of items to be sorted, it needs no additional memory space to work
- **Simplicity** –  It is simpler to understand than other equally efficient sorting algorithms because it does not use advanced computer science concepts such as recursion.

**Disadvantages:**
- **Costly**: Heap sort is costly as the constants are higher compared to merge sort even if the time complexity is $O(n Log n)$ for both.
- **Unstable**: Heap sort is unstable. It might rearrange the relative order.
- **Efficiency**: Heap Sort is not very efficient when working with highly complex data. 

## 10. References

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/Heap-sort/)
