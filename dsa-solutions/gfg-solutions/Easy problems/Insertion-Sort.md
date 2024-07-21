---
id: insertion-sort
title: Insertion Sort
sidebar_label: Insertion-Sort
tags:
  - Sorting
  - Algorithms
description: "This tutorial covers the solution to the Insertion Sort problem from the GeeksforGeeks."
---
## Problem Description

The task is to complete the `insert()` function which is used to implement Insertion Sort.

## Examples

**Example 1:**

```
Input:
N = 5
arr[] = { 4, 1, 3, 9, 7}
Output:
1 3 4 7 9
```

**Example 2:**

```
Input:
N = 10
arr[] = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
Output:
1 2 3 4 5 6 7 8 9 10
```

## Your Task
You don't have to read input or print anything. Your task is to complete the function insert() and insertionSort() where insert() takes the array, it's size and an index i and insertionSort() uses insert function to sort the array in ascending order using insertion sort algorithm. 

Expected Time Complexity: O(N^2)

Expected Auxiliary Space: O(1)

## Constraints

* `1 ≤ N ≤ 10^3`

## Problem Explanation

The task is to traverse the array and sort the array using insertion sort.

## Code Implementation

### C++ Solution

```cpp
// C++ program for insertion sort

#include <bits/stdc++.h>
using namespace std;

// Function to sort an array using
// insertion sort
void insertionSort(int arr[], int n)
{
    int i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        // Move elements of arr[0..i-1],
        // that are greater than key, 
        // to one position ahead of their
        // current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

// A utility function to print an array
// of size n
void printArray(int arr[], int n)
{
    int i;
    for (i = 0; i < n; i++)
        cout << arr[i] << " ";
    cout << endl;
}

// Driver code
int main()
{
    int arr[] = { 12, 11, 13, 5, 6 };
    int N = sizeof(arr) / sizeof(arr[0]);

    insertionSort(arr, N);
    printArray(arr, N);

    return 0;
}
```

```java
// Java program for implementation of Insertion Sort
public class InsertionSort {
    /*Function to sort array using insertion sort*/
    void sort(int arr[])
    {
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;

            /* Move elements of arr[0..i-1], that are
               greater than key, to one position ahead
               of their current position */
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    /* A utility function to print array of size n*/
    static void printArray(int arr[])
    {
        int n = arr.length;
        for (int i = 0; i < n; ++i)
            System.out.print(arr[i] + " ");

        System.out.println();
    }

    // Driver method
    public static void main(String args[])
    {
        int arr[] = { 12, 11, 13, 5, 6 };

        InsertionSort ob = new InsertionSort();
        ob.sort(arr);

        printArray(arr);
    }
};
```

```python
# Python program for implementation of Insertion Sort

# Function to do insertion sort
def insertionSort(arr):

    # Traverse through 1 to len(arr)
    for i in range(1, len(arr)):

        key = arr[i]

        # Move elements of arr[0..i-1], that are
        # greater than key, to one position ahead
        # of their current position
        j = i-1
        while j >= 0 and key < arr[j] :
                arr[j + 1] = arr[j]
                j -= 1
        arr[j + 1] = key


# Driver code to test above
arr = [12, 11, 13, 5, 6]
insertionSort(arr)
for i in range(len(arr)):
    print ("% d" % arr[i])

```

```javascript

<script>
// Javascript program for insertion sort  
  
// Function to sort an array using insertion sort
function insertionSort(arr, n)  
{  
    let i, key, j;  
    for (i = 1; i < n; i++) 
    {  
        key = arr[i];  
        j = i - 1;  
  
        /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
        while (j >= 0 && arr[j] > key) 
        {  
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        arr[j + 1] = key;  
    }  
}  
  
// A utility function to print an array of size n  
function printArray(arr, n)  
{  
    let i;  
    for (i = 0; i < n; i++)  
        document.write(arr[i] + " ");  
    document.write("<br>"); 
}  
  
// Driver code 
    let arr = [12, 11, 13, 5, 6 ];  
    let n = arr.length;  
  
    insertionSort(arr, n);  
    printArray(arr, n);  

  
</script>
```

## Solution Logic:

1. We have to start with second element of the array as first element in the array is assumed to be sorted.

2. Compare second element with the first element and check if the second element is smaller then swap them.

3. Move to the third element and compare it with the second element, then the first element and swap as necessary to put it in the correct position among the first three elements.

4. Continue this process, comparing each element with the ones before it and swapping as needed to place it in the correct position among the sorted elements.

5. Repeat until the entire array is sorted.

## Time Complexity

* The time complexity is $O(N^2)$ as there are two nested loops

## Space Complexity

* The auxiliary space complexity is $O(1)$ due to the only extra memory used is for temporary variables while swapping two values in Array. The selection sort never makes more than $O(N)$ swaps and can be useful when memory writing is costly. 