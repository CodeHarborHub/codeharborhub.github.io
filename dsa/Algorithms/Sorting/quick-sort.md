---
id: quick-sort
title: Quick Sort
sidebar_label: Quick Sort
tags: [python, java, c++, javascript, programming, algorithms, sorting, data structures, tutorial, in-depth]
description: In this tutorial, we will learn about Quick Sort and its implementation in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Quick Sort

Quick Sort is a highly efficient and widely used sorting algorithm. It is a comparison-based algorithm that uses the divide-and-conquer strategy to sort elements. This tutorial will cover the basics of Quick Sort, its applications, and how to implement it in Python, Java, C++, and JavaScript. We will also delve into various optimizations and advanced use cases.

## Introduction to Quick Sort

Quick Sort was developed by Tony Hoare in 1959. It is known for its efficiency in practice and has an average-case time complexity of O(n log n). Quick Sort works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.

## How Quick Sort Works

- **Step 1: Choose a Pivot**: Select a pivot element from the array.
- **Step 2: Partition**: Rearrange the elements in the array so that all elements less than the pivot come before it and all elements greater than the pivot come after it.
- **Step 3: Recursively Sort**: Recursively apply the above steps to the sub-arrays of elements with smaller and larger values.

![Quick Sort Process](https://runestone.academy/ns/books/published/pythonds/_images/partitionA.png)

## Pseudocode for Quick Sort

Here is the pseudocode for Quick Sort:

```
function quickSort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)

function partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j = low to high - 1:
        if arr[j] <= pivot:
            i = i + 1
            swap arr[i] with arr[j]
    swap arr[i + 1] with arr[high]
    return i + 1
```

## Implementing Quick Sort

### Python Implementation

```python
def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

arr = [10, 7, 8, 9, 1, 5]
n = len(arr)
quick_sort(arr, 0, n - 1)
print(f"Sorted array is: {arr}")
```

### Java Implementation

```java
public class QuickSort {

    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }

    public static void main(String[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};
        int n = arr.length;
        quickSort(arr, 0, n - 1);
        System.out.println("Sorted array: ");
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

void swap(int* a, int* b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    quickSort(arr, 0, n - 1);
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

### JavaScript Implementation

```javascript
function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = (low - 1);
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return (i + 1);
}

let arr = [10, 7, 8, 9, 1, 5];
quickSort(arr, 0, arr.length - 1);
console.log("Sorted array:", arr);
```

## Time Complexity Analysis

- **Best Case**: $O(n log n)$ (when the pivot divides the array into two equal halves)
- **Worst Case**: $O(n²)$ (when the pivot is the smallest or largest element)
- **Average Case**: $O(n log n)$ (for random pivot selection)

## Space Complexity Analysis

- **Space Complexity**: O(log n) (for recursive stack space)

## Applications of Quick Sort

- **Efficient Sorting**: Quick Sort is generally faster than Merge Sort for smaller arrays and is often the go-to algorithm for in-place sorting.
- **Divide and Conquer**: Its divide-and-conquer approach makes it suitable for parallel processing.
- **Memory Efficiency**: Requires minimal additional memory space compared to other sorting algorithms like Merge Sort.

## Optimizations and Variations

### Randomized Quick Sort

Randomized Quick Sort improves performance by randomly selecting the pivot element to minimize the chances of worst-case scenarios.

### Three-Way Quick Sort

Three-Way Quick Sort handles arrays with many duplicate elements more efficiently by dividing the array into three parts: elements less than the pivot, equal to the pivot, and greater than the pivot.

## Practical Considerations

### Stability

Quick Sort is not a stable sorting algorithm, which means it does not preserve the relative order of equal elements.

### Use Cases

- When the array size is large and average-case performance is more important than worst-case.
- When in-place sorting is required to save memory.

## Conclusion

In this tutorial, we covered the fundamentals of Quick Sort, its implementation in Python, Java, C++, and JavaScript, and various optimizations and applications. Quick Sort is a powerful and versatile sorting algorithm that is widely used due to its efficiency and simplicity. By mastering Quick Sort, you can handle complex sorting tasks effectively in your projects.