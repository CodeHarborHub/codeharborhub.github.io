---
id: dutch-national-flag-algorithm
title: Dutch National Flag algorithm
sidebar_label: Dutch National Flag algorithm
tags: [python, java, c++, algorithms, array]
description: In this tutorial, we will learn about Moore's Voting Algorithm and its implementation in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Dutch National Flag Algorithm

## Problem Statement 
Given an array A[] consisting of only 0s, 1s, and 2s. The task is to sort the array, i.e., put all 0s first, then all 1s and all 2s in last.

This problem is the same as the famous “Dutch National Flag problem”. The problem was proposed by Edsger Dijkstra. The problem is as follows:

Given N balls of colour red, white or blue arranged in a line in random order. You have to arrange all the balls such that the balls with the same colours are adjacent with the order of the balls, with the order of the colours being red, white and blue (i.e., all red coloured balls come first then the white coloured balls and then the blue coloured balls). 

### Examples

**Example 1:**

```
Input: {0, 1, 2, 0, 1, 2}
Output: {0, 0, 1, 1, 2, 2}
Explanation: {0, 0, 1, 1, 2, 2} has all 0s first, then all 1s and all 2s in last.

```

**Example 2:**

```
Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}
Explanation: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2} has all 0s first, then all 1s and all 2s in last.

```
## Brute Force Approach 

# Intuition
The naive solution is to simply sort the array using a standard sorting algorithm or sort library function. This will simply place all the 0s first, then all 1s and 2s at last. This approach requires O(N * log(N)) time and O(1) space.



#### Time Complexity : $O(n*log(n))$
#### Spcae Complexity : $O(1)$

## Better Approach 
#### Intuition
A better solution is to traverse the array once and count number of 0s, 1s and 2s. Let these counts be c0, c1 and c2. Now traverse the array again, put c0 (count of 0s) 0s first, then c1 1s and finally c2 2s. This solution works in O(n) time, but this solution is not stable and requires two traversals of the array. This approach requires to traverse the array twice, therefore O(N) time and O(1) space.


```c++
// C++ Program to sort an array of 0s, 1s and 2s

#include <iostream>
using namespace std;

// Function to sort the array of 0s, 1s and 2s
void sort012(int a[], int n)
{
    int c0 = 0, c1 = 0, c2 = 0;

    // Count 0s, 1s and 2s
    for (int i = 0; i < n; i++) {
        if (a[i] == 0) {
            c0 += 1;
        }
        else if (a[i] == 1) {
            c1 += 1;
        }
        else {
            c2 += 1;
        }
    }

    int idx = 0;
    // Place all the 0s
    for (int i = 0; i < c0; i++)
        a[idx++] = 0;

    // Place all the 1s
    for (int i = 0; i < c1; i++)
        a[idx++] = 1;

    // Place all the 2s
    for (int i = 0; i < c2; i++)
        a[idx++] = 2;
}

int main()
{
      
    // Sample Input
    int a[] = { 0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 };
    int n = sizeof(a) / sizeof(a[0]);

    sort012(a, n);

    for (int i = 0; i < n; i++)
        cout << a[i] << " ";
    return 0;
}

    
```
```java
// Java Program to sort an array of 0s, 1s and 2s

class GFG {
    // Function to sort the array of 0s, 1s and 2s
    public static void sort012(int a[], int n)
    {
        // code here
        int c0 = 0, c1 = 0, c2 = 0;

        // Count 0s, 1s and 2s
        for (int i = 0; i < n; i++) {
            if (a[i] == 0) {
                c0 += 1;
            }
            else if (a[i] == 1) {
                c1 += 1;
            }
            else {
                c2 += 1;
            }
        }

        int idx = 0;
        // Place all the 0s
        for (int i = 0; i < c0; i++)
            a[idx++] = 0;

        // Place all the 1s
        for (int i = 0; i < c1; i++)
            a[idx++] = 1;

        // Place all the 2s
        for (int i = 0; i < c2; i++)
            a[idx++] = 2;
    }
    public static void main(String[] args)
    {
        // Sample Input
        int[] a = { 0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 };
        int n = a.length;

        sort012(a, n);

        for (int i = 0; i < n; i++)
            System.out.print(a[i] + " ");
    }
}

    
```
```python
# Python Program to sort an array of 0s, 1s and 2s

# Function to sort an array of 0s, 1s and 2s
def sort012(arr):
    c0 = 0
    c1 = 0
    c2 = 0

    # Count 0s, 1s and 2s
    for num in arr:
        if num == 0:
            c0 += 1
        elif num == 1:
            c1 += 1
        else:
            c2 += 1

    idx = 0
    # Place all the 0s
    for i in range(c0):
        arr[idx] = 0
        idx += 1

    # Place all the 1s
    for i in range(c1):
        arr[idx] = 1
        idx += 1

    # Place all the 2s
    for i in range(c2):
        arr[idx] = 2
        idx += 1


# Sample Input
arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
sort012(arr)

for x in arr:
  print(x, end = " ")

```
#### Time Complexity : $O(2*n)$
#### Spcae Complexity : $O(n)$

## Optimal Approach (Extended Dutch National Flag Algorithm):
#### Intuition
The idea is to sort the array of size N using three pointers: lo = 0, mid = 0 and hi = N – 1 such that the array is divided into three parts:

arr[0] to arr[lo – 1]: This part will have all the zeros.
arr[lo] to arr[mid – 1]: This part will have all the ones.
arr[hi + 1] to arr[N – 1]: This part will have all the twos.

#### Steps 
Traverse over the array till mid <= hi, according to the value of arr[mid] we can have three cases:

- arr[mid] = 0, then swap arr[lo] and arr[mid] and 
  increment lo by 1 because all the zeros are till 
  index lo – 1 and move to the next element so 
  increment mid by 1.
- arr[mid] = 1, then move to the next element so 
  increment mid by 1.
- arr[mid] = 2, then swap arr[mid] and arr[hi] and 
  decrement hi by 1 because all the twos are from 
  index hi + 1 to N – 1. Now, we don’t move to the 
  next element because the element which is now at 
  index mid can be a 0 and therefore needs to be 
  checked again.

## Implementing Extended Boyer Moore’s Voting Algorithm

### Python Implementation

```python

   # Python program to sort an array with
# 0, 1 and 2 in a single pass

# Function to sort array
def sort012(arr, n):
    lo = 0
    hi = n - 1
    mid = 0
    # Iterate till all the elements
    # are sorted
    while mid <= hi:
      # If the element is 0
      if arr[mid] == 0:
        arr[lo], arr[mid] = arr[mid], arr[lo]
        lo = lo + 1
        mid = mid + 1
        # If the element is 1
      elif arr[mid] == 1:
        mid = mid + 1
        # If the element is 2
      else:
        arr[mid], arr[hi] = arr[hi], arr[mid]
        hi = hi - 1
    return arr

# Function to print array
def printArray(arr):
    for k in arr:
        print(k, end=' ')


# Driver Program
arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
n = len(arr)
arr = sort012(arr, n)
printArray(arr)

```

### Java Implementation

```java
// Java program to sort an array of 0s, 1s and 2s in a
// single pass

class countzot {

    // Sort the input array, the array is assumed to
    // have values in {0, 1, 2}
    static void sort012(int a[], int n)
    {
        int lo = 0;
        int hi = n - 1;
        int mid = 0, temp = 0;
        // Iterate till all the elements
        // are sorted
        while (mid <= hi) {
            switch (a[mid]) {
                // If the element is 0
                case 0: {
                    temp = a[lo];
                    a[lo] = a[mid];
                    a[mid] = temp;
                    lo++;
                    mid++;
                    break;
                }
                    // If the element is 1
                case 1:
                    mid++;
                    break;
                    // If the element is 2
                case 2: {
                    temp = a[mid];
                    a[mid] = a[hi];
                    a[hi] = temp;
                    hi--;
                    break;
                }
            }
        }
    }

    /* Utility function to print array arr[] */
    static void printArray(int arr[], int n)
    {
        int i;
        for (i = 0; i < n; i++)
            System.out.print(arr[i] + " ");
        System.out.println("");
    }

    /*Driver function to check for above functions*/
    public static void main(String[] args)
    {
        int arr[] = { 0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 };
        int n = arr.length;
        sort012(arr, n);
        printArray(arr, n);
    }
}

```

### C++ Implementation

```cpp
// C++ program to sort an array of 0s, 1s and 2s in a single pass
#include <bits/stdc++.h>
using namespace std;

// Function to sort the input array,
// the array is assumed
// to have values in {0, 1, 2}
void sort012(int a[], int n)
{
    int lo = 0;
    int hi = n - 1;
    int mid = 0;

    // Iterate till all the elements
    // are sorted
    while (mid <= hi) {
        switch (a[mid]) {

        // If the element is 0
        case 0:
            swap(a[lo++], a[mid++]);
            break;

        // If the element is 1 .
        case 1:
            mid++;
            break;

        // If the element is 2
        case 2:
            swap(a[mid], a[hi--]);
            break;
        }
    }
}

// Function to print array arr[]
void printArray(int arr[], int n)
{
    // Iterate and print every element
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
}

// Driver Code
int main()
{
      // Sample Input
    int arr[] = { 0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 };
    int n = sizeof(arr) / sizeof(arr[0]);

    sort012(arr, n);

    printArray(arr, n);

    return 0;
}

```

## Complexity Analysis
   #### Time Complexity : $O(n)$
   #### Space Complexity : $O(1)$
   

