---
id: lesson-2
title: "Searching Algorithms"
sidebar_label: Searching Algorithms
sidebar_position: 2
description: "Learn Searching Algorithms in C"
tags: [courses,Advance-level,Introduction]
---  

Searching algorithms find the position of an element within a list.

- **Linear Search**
  - **Description**: Sequentially checks each element until the target element is found.
  - **Complexity**: O(n)
  - **Example**:
    ```c
    #include <stdio.h>

    int linearSearch(int arr[], int size, int target) {
        for (int i = 0; i < size; i++) {
            if (arr[i] == target)
                return i;
        }
        return -1;
    }

    int main() {
        int arr[] = {2, 4, 6, 8, 10};
        int size = sizeof(arr) / sizeof(arr[0]);
        int target = 8;
        int result = linearSearch(arr, size, target);
        if (result != -1)
            printf("Element found at index %d\n", result);
        else
            printf("Element not found\n");
        return 0;
    }
    ```

  **Output**:
  ```
  Element found at index 3
  ```

- **Binary Search**
  - **Description**: Efficiently finds an element in a sorted array by repeatedly dividing the search interval in half.
  - **Complexity**: O(log n)
  - **Example**:
    ```c
    #include <stdio.h>

    int binarySearch(int arr[], int size, int target) {
        int left = 0;
        int right = size - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target)
                return mid;
            if (arr[mid] < target)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return -1;
    }

    int main() {
        int arr[] = {1, 3, 5, 7, 9, 11};
        int size = sizeof(arr) / sizeof(arr[0]);
        int target = 7;
        int result = binarySearch(arr, size, target);
        if (result != -1)
            printf("Element found at index %d\n", result);
        else
            printf("Element not found\n");
        return 0;
    }
    ```

  **Output**:
  ```
  Element found at index 3
  ```

#### 4. Hashing and Hash Tables

Hashing is used to map data to a fixed-size table using a hash function. It allows for fast data retrieval.

- **Hash Table**
  - **Description**: A data structure that implements an associative array abstract data type, a structure that can map keys to values.
  - **Operations**: Insertion, deletion, lookup.
  - **Example**:
    ```c
    #include <stdio.h>
    #include <stdlib.h>

    #define TABLE_SIZE 10

    typedef struct Node {
        int key;
        int value;
        struct Node* next;
    } Node;

    Node* hashTable[TABLE_SIZE] = {NULL};

    int hashFunction(int key) {
        return key % TABLE_SIZE;
    }

    void insert(int key, int value) {
        int index = hashFunction(key);
        Node* newNode = (Node*)malloc(sizeof(Node));
        newNode->key = key;
        newNode->value = value;
        newNode->next = hashTable[index];
        hashTable[index] = newNode;
    }

    int search(int key) {
        int index = hashFunction(key);
        Node* temp = hashTable[index];
        while (temp != NULL) {
            if (temp->key == key)
                return temp->value;
            temp = temp->next;
        }
        return -1; // Not found
    }

    int main() {
        insert(1, 100);
        insert(11, 200);
        insert(21, 300);

        printf("Value for key 1: %d\n", search(1));
        printf("Value for key 11: %d\n", search(11));
        printf("Value for key 21: %d\n", search(21));
        return 0;
    }
    ```

  **Output**:
  ```
  Value for key 1: 100
  Value for key 11: 200
  Value for key 21: 300
  ```

#### 5. Algorithm Complexity and Big O Notation

- **Definition**: Big O notation is a mathematical notation used to describe the upper bound of the runtime complexity of an algorithm. It provides an asymptotic analysis of an algorithm's performance.
- **Common Complexities**:
  - **O(1)**: Constant time
  - **O(log n)**: Logarithmic time
  - **O(n)**: Linear time
  - **O(n log n)**: Linearithmic time
  - **O(n²)**: Quadratic time

Understanding the complexity helps in choosing the right algorithm for a problem, especially when dealing with large datasets.

### Summary

- **Sorting Algorithms**: Methods to order elements. Examples: Bubble Sort, Quick Sort, Merge Sort.
- **Searching Algorithms**: Methods to find elements. Examples: Linear Search, Binary Search.
- **Hashing**: Technique for fast data retrieval using hash tables.
- **Algorithm Complexity**: Big O notation describes the performance and efficiency of algorithms.
