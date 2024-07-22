---
id: lesson-1
title: "Algorithms in C"
sidebar_label: Algorithms
sidebar_position: 1
description: "Learn Algorithms in C"
tags: [courses,Advance-level,Introduction]
---  
 
Algorithms are step-by-step procedures or formulas for solving problems. Understanding different algorithms and their efficiencies is crucial for optimizing performance in software development. Here’s an overview of some common algorithms and their implementations in C:

#### 1. Introduction to Algorithms

- **Definition**: An algorithm is a finite set of well-defined instructions for solving a problem or performing a task.
- **Characteristics**: 
  - **Input**: It takes some input.
  - **Output**: It produces output.
  - **Definiteness**: Each step is clearly defined.
  - **Finiteness**: It terminates after a finite number of steps.
  - **Effectiveness**: Each step is basic enough to be executed.

#### 2. Sorting Algorithms

Sorting algorithms arrange elements of a list in a specific order. Here are a few common sorting algorithms:

- **Bubble Sort**
  - **Description**: Compares adjacent elements and swaps them if they are in the wrong order. Repeats this process until the list is sorted.
  - **Complexity**: O(n²)
  - **Example**:
    ```c
    #include <stdio.h>

    void bubbleSort(int arr[], int n) {
        for (int i = 0; i < n-1; i++) {
            for (int j = 0; j < n-i-1; j++) {
                if (arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }

    void printArray(int arr[], int size) {
        for (int i = 0; i < size; i++)
            printf("%d ", arr[i]);
        printf("\n");
    }

    int main() {
        int arr[] = {64, 34, 25, 12, 22, 11, 90};
        int n = sizeof(arr)/sizeof(arr[0]);
        bubbleSort(arr, n);
        printf("Sorted array: \n");
        printArray(arr, n);
        return 0;
    }
    ```

  **Output**:
  ```
  Sorted array: 
  11 12 22 25 34 64 90
  ```

- **Quicksort**
  - **Description**: Divides the array into smaller sub-arrays based on a pivot element and sorts the sub-arrays independently.
  - **Complexity**: O(n log n) on average
  - **Example**:
    ```c
    #include <stdio.h>

    int partition(int arr[], int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return (i + 1);
    }

    void quickSort(int arr[], int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    void printArray(int arr[], int size) {
        for (int i = 0; i < size; i++)
            printf("%d ", arr[i]);
        printf("\n");
    }

    int main() {
        int arr[] = {10, 7, 8, 9, 1, 5};
        int n = sizeof(arr) / sizeof(arr[0]);
        quickSort(arr, 0, n - 1);
        printf("Sorted array: \n");
        printArray(arr, n);
        return 0;
    }
    ```

  **Output**:
  ```
  Sorted array: 
  1 5 7 8 9 10
  ```

- **Merge Sort**
  - **Description**: Divides the array into two halves, recursively sorts them, and then merges the sorted halves.
  - **Complexity**: O(n log n)
  - **Example**:
    ```c
    #include <stdio.h>
    #include <stdlib.h>

    void merge(int arr[], int l, int m, int r) {
        int n1 = m - l + 1;
        int n2 = r - m;

        int* L = (int*)malloc(n1 * sizeof(int));
        int* R = (int*)malloc(n2 * sizeof(int));

        for (int i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];

        int i = 0;
        int j = 0;
        int k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }

        free(L);
        free(R);
    }

    void mergeSort(int arr[], int l, int r) {
        if (l < r) {
            int m = l + (r - l) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }

    void printArray(int arr[], int size) {
        for (int i = 0; i < size; i++)
            printf("%d ", arr[i]);
        printf("\n");
    }

    int main() {
        int arr[] = {12, 11, 13, 5, 6, 7};
        int n = sizeof(arr) / sizeof(arr[0]);
        mergeSort(arr, 0, n - 1);
        printf("Sorted array: \n");
        printArray(arr, n);
        return 0;
    }
    ```

  **Output**:
  ```
  Sorted array: 
  5 6 7 11 12 13
  ```
