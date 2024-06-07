---
id: selection-sort
title: Selection Sort 
sidebar_label: Selection Sort 
tags: [python, java, c++, javascript, programming, algorithms, sorting, data structures, tutorial, in-depth]
description: In this tutorial, we will learn about Selection Sort and its implementation in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Selection Sort

Selection Sort is a simple comparison-based sorting algorithm. It is efficient for small lists and is known for its simplicity and ease of implementation. This tutorial will cover the basics of Selection Sort, its applications, and how to implement it in Python, Java, C++, and JavaScript. We will also delve into various optimizations and advanced use cases.

## Introduction to Selection Sort

Selection Sort is an in-place comparison sorting algorithm. It has an O(n²) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection Sort is noted for its simplicity and is often used as an educational tool.

## How Selection Sort Works

- **Step 1**: Start with the first element as the minimum.
- **Step 2**: Compare this element with the next element in the list. If the next element is smaller, update the minimum to this element.
- **Step 3**: Continue this process for the rest of the list. 
- **Step 4**: Once the end of the list is reached, swap the minimum element with the first element.
- **Step 5**: Move to the next element in the list and repeat steps 1-4 until the list is sorted.


![selection sort](https://runestone.academy/ns/books/published/pythonds/_images/insertionpass.png)
## Pseudocode for Selection Sort

Here is the pseudocode for Selection Sort:

```
function selectionSort(array):
    for i from 0 to length(array) - 1:
        minIndex = i
        for j from i + 1 to length(array):
            if array[j] < array[minIndex]:
                minIndex = j
        if minIndex != i:
            swap(array[i], array[minIndex])
    return array
```

## Implementing Selection Sort

### Python Implementation

```python
def selection_sort(array):
    n = len(array)
    for i in range(n):
        min_index = i
        for j in range(i+1, n):
            if array[j] < array[min_index]:
                min_index = j
        if min_index != i:
            array[i], array[min_index] = array[min_index], array[i]
    return array

arr = [64, 25, 12, 22, 11]
print(selection_sort(arr))
```

### Java Implementation

```java
public class SelectionSort {

    public static void selectionSort(int[] array) {
        int n = array.length;
        for (int i = 0; i < n-1; i++) {
            int minIndex = i;
            for (int j = i+1; j < n; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            int temp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 25, 12, 22, 11};
        selectionSort(arr);
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

void selectionSort(int array[], int length) {
    for (int i = 0; i < length-1; i++) {
        int minIndex = i;
        for (int j = i+1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        int temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;
    }
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int length = sizeof(arr) / sizeof(arr[0]);
    selectionSort(arr, length);
    for (int i = 0; i < length; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

### JavaScript Implementation

```javascript
function selectionSort(array) {
    let n = array.length;
    for (let i = 0; i < n-1; i++) {
        let minIndex = i;
        for (let j = i+1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            let temp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = temp;
        }
    }
    return array;
}

let arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr));
```

## Time Complexity Analysis

- **Best Case**: $O(n²)$ (even if the array is already sorted, it still makes n² comparisons)
- **Worst Case**: $O(n²)$ (when the array is sorted in reverse order)
- **Average Case**: $O(n²)$

## Space Complexity Analysis

- **Space Complexity**: $O(1)$ (since it sorts in place and requires only a constant amount of extra memory)

## Applications of Selection Sort

- **Small Data Sets**: Efficient for sorting small arrays or lists.
- **When Writing to Memory is Costly**: Selection Sort makes the minimum number of swaps, making it useful in situations where writing to memory is expensive.

## Optimizations and Variations

### Min-Heap Sort

Min-Heap Sort is a variation that uses a min-heap to improve selection of the smallest element, making it more efficient for certain data sets.

### Double Selection Sort

Double Selection Sort performs two selection processes simultaneously, selecting both the minimum and maximum elements in a single pass, which can reduce the number of passes by half.

## Practical Considerations

### Stability

Selection Sort is not a stable sorting algorithm, meaning it does not necessarily maintain the relative order of equal elements.

### Use Cases

- Selection Sort is used when the array size is small.
- It is used when additional memory space is not available.
- It is useful when the number of writes/swaps must be minimized.

## Conclusion

In this tutorial, we covered the fundamentals of Selection Sort, its implementation in Python, Java, C++, and JavaScript, and various optimizations and applications. Selection Sort is a straightforward sorting algorithm, ideal for small data sets and educational purposes. By mastering Selection Sort, you can effectively handle simple sorting tasks in your projects.