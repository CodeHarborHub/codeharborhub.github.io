---
id: bubble-sort
title: Bubble Sort 
sidebar_label: Bubble Sort 
tags: [python, java, c++, javascript, programming, algorithms, sorting, data structures, tutorial, in-depth]
description: In this tutorial, we will learn about Bubble Sort and its implementation in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Bubble Sort

Bubble Sort is a simple comparison-based sorting algorithm. It is named for the way larger elements "bubble" to the top of the list. This tutorial will cover the basics of Bubble Sort, its applications, and how to implement it in Python, Java, C++, and JavaScript. We will also delve into various optimizations and advanced use cases.

## Introduction to Bubble Sort

Bubble Sort is an elementary algorithm suitable for small data sets. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

## How Bubble Sort Works

- **Step 1**: Compare the first two elements of the array.
- **Step 2**: If the first element is greater than the second, swap them.
- **Step 3**: Move to the next pair of elements, compare them and swap if necessary.
- **Step 4**: Continue this process for each pair of adjacent elements until the end of the array.
- **Step 5**: Repeat the process for the entire array until no swaps are needed.


![bubble sort](https://runestone.academy/ns/books/published/pythonds/_images/bubblepass.png)
## Pseudocode for Bubble Sort

Here is the pseudocode for Bubble Sort:

```
function bubbleSort(array):
    for i from 0 to length(array) - 1:
        for j from 0 to length(array) - i - 1:
            if array[j] > array[j + 1]:
                swap(array[j], array[j + 1])
    return array
```

## Implementing Bubble Sort

### Python Implementation

```python
def bubble_sort(array):
    n = len(array)
    for i in range(n):
        for j in range(0, n-i-1):
            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]
    return array

arr = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(arr))
```

### Java Implementation

```java
public class BubbleSort {

    public static void bubbleSort(int[] array) {
        int n = array.length;
        for (int i = 0; i < n-1; i++) {
            for (int j = 0; j < n-i-1; j++) {
                if (array[j] > array[j + 1]) {
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);
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

void bubbleSort(int array[], int length) {
    for (int i = 0; i < length-1; i++) {
        for (int j = 0; j < length-i-1; j++) {
            if (array[j] > array[j + 1]) {
                int temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int length = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, length);
    for (int i = 0; i < length; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

### JavaScript Implementation

```javascript
function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr));
```

## Time Complexity Analysis

- **Best Case**: $O(n)$ (when the array is already sorted)
- **Worst Case**: $O(n^2)$ (when the array is sorted in reverse order)
- **Average Case**: $O(n^2)$ 

## Space Complexity Analysis

- **Space Complexity**: $O(1)$ (since it sorts in place and requires only a constant amount of extra memory)

## Applications of Bubble Sort

- **Educational Tools**: Bubble Sort is often used as an introduction to sorting algorithms due to its simplicity.
- **Small Data Sets**: Efficient for sorting small arrays or lists.
- **Learning Tool**: Useful for educational purposes to understand the basics of sorting algorithms.

## Optimizations and Variations

### Optimized Bubble Sort

An optimized version of Bubble Sort can stop the algorithm if the inner loop didn’t cause any swap, indicating that the array is already sorted.

### Cocktail Shaker Sort

Cocktail Shaker Sort, also known as bidirectional Bubble Sort, extends Bubble Sort by operating in both directions on each pass through the list, first left to right, then right to left.

### Comb Sort

Comb Sort is an improvement on Bubble Sort. It eliminates turtles, or small values near the end of the list, since these slow the sorting process down. Comb Sort improves on Bubble Sort by using gaps in the comparison.

## Practical Considerations

### Stability

Bubble Sort is a stable sorting algorithm, meaning it maintains the relative order of equal elements.

### Use Cases

- Bubble Sort is used when the array size is small.
- It is used when additional memory space is not available.
- It is useful when the array is already partially sorted.

## Conclusion

In this tutorial, we covered the fundamentals of Bubble Sort, its implementation in Python, Java, C++, and JavaScript, and various optimizations and applications. Bubble Sort is a simple sorting algorithm, ideal for understanding basic sorting concepts and practicing algorithm implementation. By mastering Bubble Sort, you can effectively handle small sorting tasks in your projects.