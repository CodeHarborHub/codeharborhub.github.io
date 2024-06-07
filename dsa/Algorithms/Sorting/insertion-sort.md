---
id: insertion-sort
title: Insertion Sort 
sidebar_label: Insertion Sort 
tags: [python, java, c++, javascript, programming, algorithms, sorting, data structures, tutorial, in-depth]
description: In this tutorial, we will learn about Insertion Sort and its implementation in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Insertion Sort

Insertion Sort is a simple and intuitive sorting algorithm that builds the final sorted array one item at a time. It is much like sorting playing cards in your hands. This tutorial will cover the basics of Insertion Sort, its applications, and how to implement it in Python, Java, C++, and JavaScript. We will also delve into various optimizations and advanced use cases.

## Introduction to Insertion Sort

Insertion Sort is an efficient algorithm for small data sets. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. Insertion Sort works by dividing the input list into two parts: a sorted and an unsorted part. The algorithm iteratively takes an element from the unsorted part and inserts it into the correct position in the sorted part.

## How Insertion Sort Works

- **Step 1**: Iterate from the second element to the last element of the array.
- **Step 2**: Compare the current element with the elements in the sorted part and find its correct position.
- **Step 3**: Shift all elements in the sorted part that are greater than the current element one position to the right.
- **Step 4**: Insert the current element into its correct position.
- **Step 5**: Repeat until the array is sorted.

![insetion sort](https://runestone.academy/ns/books/published/pythonds/_images/insertionsort.png)

## Pseudocode for Insertion Sort

Here is the pseudocode for Insertion Sort:

```
function insertionSort(array):
    for i from 1 to length(array) - 1:
        key = array[i]
        j = i - 1
        while j >= 0 and array[j] > key:
            array[j + 1] = array[j]
            j = j - 1
        array[j + 1] = key
    return array
```

## Implementing Insertion Sort

### Python Implementation

```python
def insertion_sort(array):
    for i in range(1, len(array)):
        key = array[i]
        j = i - 1
        while j >= 0 and key < array[j]:
            array[j + 1] = array[j]
            j -= 1
        array[j + 1] = key
    return array

arr = [12, 11, 13, 5, 6]
print(insertion_sort(arr))
```

### Java Implementation

```java
public class InsertionSort {

    public static void insertionSort(int[] array) {
        for (int i = 1; i < array.length; i++) {
            int key = array[i];
            int j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        insertionSort(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

### C++ Implementation

```cpp
#include <iostream>
using namespace std;

void insertionSort(int array[], int length) {
    for (int i = 1; i < length; i++) {
        int key = array[i];
        int j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int length = sizeof(arr) / sizeof(arr[0]);
    insertionSort(arr, length);
    for (int i = 0; i < length; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

### JavaScript Implementation

```javascript
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}

let arr = [12, 11, 13, 5, 6];
console.log(insertionSort(arr));
```

## Time Complexity Analysis

- **Best Case**: $O(n)$ (when the array is already sorted)
- **Worst Case**: $O(n^2)$ (when the array is sorted in reverse order)
- **Average Case**: $O(n^2)$

## Space Complexity Analysis

- **Space Complexity**: $O(1)$ (since it sorts in place and requires only a constant amount of extra memory)

## Applications of Insertion Sort

- **Small Data Sets**: Insertion Sort is efficient for small data sets or arrays that are already partially sorted.
- **Real-Time Systems**: Insertion Sort can be used where the list is being updated in real-time with few elements at a time.
- **Adaptive Sorting**: It is adaptive in nature, meaning it is efficient for data sets that are already substantially sorted.

## Optimizations and Variations

### Binary Insertion Sort

Binary Insertion Sort uses binary search to find the correct location to insert the new element. This reduces the number of comparisons but does not improve the overall time complexity.

### Shell Sort

Shell Sort is a generalization of Insertion Sort that allows the exchange of items that are far apart. The idea is to arrange the list of elements so that, starting anywhere, taking every h-th element produces a sorted list. Such a list is said to be h-sorted. If the list is then k-sorted for some smaller integer k, then the list remains h-sorted. The step sizes form a decreasing sequence ending in 1.

### Adaptive Insertion Sort

Adaptive Insertion Sort improves performance by identifying runs of already sorted elements in the input array and then merging them.

## Practical Considerations

### Stability

Insertion Sort is a stable sorting algorithm, meaning it maintains the relative order of equal elements.

### Use Cases

- Insertion Sort is used when the array size is small.
- It is used when additional memory space is not available.
- It is useful when the array is already partially sorted.

## Conclusion

In this tutorial, we covered the fundamentals of Insertion Sort, its implementation in Python, Java, C++, and JavaScript, and various optimizations and applications. Insertion Sort is a powerful tool for sorting small arrays and understanding it provides a foundation for learning more complex sorting algorithms. By mastering Insertion Sort, you can effectively solve a variety of sorting problems in your projects.