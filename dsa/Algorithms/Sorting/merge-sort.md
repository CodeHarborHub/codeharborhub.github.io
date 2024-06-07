---
id: merge-sort
title: Merge Sort
sidebar_label: Merge Sort
tags: [python, java, c++, javascript, programming, algorithms, sorting, data structures, tutorial, in-depth]
description: In this tutorial, we will learn about Merge Sort and its implementation in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Merge Sort

Merge Sort is an efficient, stable, comparison-based sorting algorithm. It is particularly useful for sorting large lists and is known for its divide-and-conquer approach. This tutorial will cover the basics of Merge Sort, its applications, and how to implement it in Python, Java, C++, and JavaScript. We will also delve into various optimizations and advanced use cases.

## Introduction to Merge Sort

Merge Sort was invented by John von Neumann in 1945. It works by dividing the unsorted list into n sublists, each containing one element, and then repeatedly merging sublists to produce new sorted sublists until there is only one sorted list remaining.

## How Merge Sort Works

- **Step 1: Divide**: Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
- **Step 2: Conquer**: Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.

![Merge Sort Process](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

## Pseudocode for Merge Sort

Here is the pseudocode for Merge Sort:

```
function mergeSort(array):
    if length(array) <= 1:
        return array
    mid = length(array) // 2
    left = mergeSort(array[:mid])
    right = mergeSort(array[mid:])
    return merge(left, right)

function merge(left, right):
    result = []
    while left and right:
        if left[0] <= right[0]:
            result.append(left.pop(0))
        else:
            result.append(right.pop(0))
    result.extend(left if left else right)
    return result
```

## Implementing Merge Sort

### Python Implementation

```python
def merge_sort(array):
    if len(array) <= 1:
        return array

    mid = len(array) // 2
    left = merge_sort(array[:mid])
    right = merge_sort(array[mid:])

    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result

arr = [38, 27, 43, 3, 9, 82, 10]
print(merge_sort(arr))
```

### Java Implementation

```java
public class MergeSort {

    public static void mergeSort(int[] array, int left, int right) {
        if (left < right) {
            int mid = (left + right) / 2;

            mergeSort(array, left, mid);
            mergeSort(array, mid + 1, right);

            merge(array, left, mid, right);
        }
    }

    public static void merge(int[] array, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; ++i)
            L[i] = array[left + i];
        for (int j = 0; j < n2; ++j)
            R[j] = array[mid + 1 + j];

        int i = 0, j = 0;

        int k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                array[k] = L[i];
                i++;
            } else {
                array[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            array[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            array[k] = R[j];
            j++;
            k++;
        }
    }

    public static void main(String[] args) {
        int[] arr = {38, 27, 43, 3, 9, 82, 10};
        mergeSort(arr, 0, arr.length - 1);
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

void merge(int array[], int const left, int const mid, int const right) {
    int const subArrayOne = mid - left + 1;
    int const subArrayTwo = right - mid;

    int *leftArray = new int[subArrayOne],
        *rightArray = new int[subArrayTwo];

    for (int i = 0; i < subArrayOne; i++)
        leftArray[i] = array[left + i];
    for (int j = 0; j < subArrayTwo; j++)
        rightArray[j] = array[mid + 1 + j];

    int indexOfSubArrayOne = 0,
        indexOfSubArrayTwo = 0;
    int indexOfMergedArray = left;

    while (indexOfSubArrayOne < subArrayOne && indexOfSubArrayTwo < subArrayTwo) {
        if (leftArray[indexOfSubArrayOne] <= rightArray[indexOfSubArrayTwo]) {
            array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];
            indexOfSubArrayOne++;
        } else {
            array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];
            indexOfSubArrayTwo++;
        }
        indexOfMergedArray++;
    }

    while (indexOfSubArrayOne < subArrayOne) {
        array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];
        indexOfSubArrayOne++;
        indexOfMergedArray++;
    }

    while (indexOfSubArrayTwo < subArrayTwo) {
        array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];
        indexOfSubArrayTwo++;
        indexOfMergedArray++;
    }
    delete[] leftArray;
    delete[] rightArray;
}

void mergeSort(int array[], int const begin, int const end) {
    if (begin >= end)
        return;

    int mid = begin + (end - begin) / 2;
    mergeSort(array, begin, mid);
    mergeSort(array, mid + 1, end);
    merge(array, begin, mid, end);
}

int main() {
    int arr[] = {38, 27, 43, 3, 9, 82, 10};
    int arrSize = sizeof(arr) / sizeof(arr[0]);

    mergeSort(arr, 0, arrSize - 1);

    for (int i = 0; i < arrSize; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

### JavaScript Implementation

```javascript
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}

let arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr));
```

## Time Complexity Analysis

- **Best Case**: $O(n log n)$ (all cases)
- **Worst Case**: $O(n log n)$ (all cases)
- **Average Case**: $O(n log n)$ (all cases)

## Space Complexity Analysis

- **Space Complexity**: $O(n)$ (due to the temporary arrays used during the merge process)

## Applications of Merge Sort

- **Large Data Sets**: Efficient for sorting large datasets, especially when the data cannot be held in memory.
- **External Sorting**: Useful for sorting data stored on external storage devices.
- **Stable Sort**: Maintains the relative order of equal elements, making it suitable for sorting linked lists and other data structures where stability is important.

## Optimizations and Variations

### Bottom-Up Merge Sort

Bottom-Up Merge Sort avoids the recursive calls by iteratively sorting sublists of increasing size.

### Timsort

Timsort is a hybrid sorting algorithm derived from Merge Sort and Insertion Sort, designed to perform well on many kinds of real-world data. It is used in the standard libraries of Python and Java.

## Practical Considerations

### Stability

Merge Sort is a stable sorting algorithm, maintaining the relative order of equal elements.

### Use Cases



- When the array size is large.
- When stability is required.
- When dealing with data stored on external storage.

## Conclusion

In this tutorial, we covered the fundamentals of Merge Sort, its implementation in Python, Java, C++, and JavaScript, and various optimizations and applications. Merge Sort is a powerful and versatile sorting algorithm, ideal for large datasets and scenarios where stability is crucial. By mastering Merge Sort, you can effectively handle complex sorting tasks in your projects.