---
id: star-elements
title: Star Elements
sidebar_label: Star-Elements
tags:
  - Modular Arithmetic
  - Algorithms
description: "This tutorial covers the solution to the Star elements problem from the GeeksforGeeks."
---
## Problem Description
Given an unsorted array `arr` of size `n`. The task is to find all the star and super star elements in the array. Star are those elements which are strictly greater than all the elements on its right side. Super star are those elements which are strictly greater than all the elements on its left and right side.

Note: Assume first element (`arr[0]`) is greater than all the elements on its left side, And last element `(arr[n-1])` is greater than all the elements on its right side.

## Examples

**Example 1:**

```
Input:
n = 10
arr[] = {1, 6, 5, 4, 7, 8, 4, 3, 2, 1}
Output: 
8 4 3 2 1 
8
Explanation: Star elements are 8, 4, 3, 2 and 1.
Super star element is 8.
```

**Example 2:**

```
Input:
a = 9
arr[] = {1, 2, 10, 3, 4, 5, 8, 10, 4}
Output: 
10 4 
-1
Explanation: Star elements are 10 and 4.
No super star element present here.
```


Expected Time Complexity: O(n)

Expected Auxiliary Space: O(1)

## Constraints

* `1 ≤ N ≤ 10^6`

## Problem Explanation

The task is to traverse the array and search the number.

## Code Implementation

### C++ Solution

```cpp
#include <iostream>
using namespace std;

void findStars(int arr[], int n) {
    int maxRight = arr[n-1];
    cout << "Super Stars: ";
    for (int i = n-1; i >= 0; i--) {
        if (arr[i] > maxRight) {
            cout << arr[i] << " ";
            maxRight = arr[i];
        }
    }
    cout << endl;
    cout << "Stars: ";
    maxRight = arr[n-1];
    for (int i = n-2; i >= 0; i--) {
        if (arr[i] > maxRight) {
            cout << arr[i] << " ";
            maxRight = arr[i];
        }
    }
    cout << endl;
}

int main() {
    int arr[] = {4, 6, 3, 7, 2, 8};
    int n = sizeof(arr)/sizeof(arr[0]);
    findStars(arr, n);
    return 0;
}



```

```java

public class Main {
    public static void findStars(int[] arr) {
        int maxRight = arr[arr.length-1];
        System.out.print("Super Stars: ");
        for (int i = arr.length-1; i >= 0; i--) {
            if (arr[i] > maxRight) {
                System.out.print(arr[i] + " ");
                maxRight = arr[i];
            }
        }
        System.out.println();
        System.out.print("Stars: ");
        maxRight = arr[arr.length-1];
        for (int i = arr.length-2; i >= 0; i--) {
            if (arr[i] > maxRight) {
                System.out.print(arr[i] + " ");
                maxRight = arr[i];
            }
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {4, 6, 3, 7, 2, 8};
        findStars(arr);
    }
}



```

```python
def find_stars(arr):
    max_right = arr[-1]
    super_stars = []
    for i in range(len(arr)-1, -1, -1):
        if arr[i] > max_right:
            super_stars.append(arr[i])
            max_right = arr[i]
    print("Super Stars:", super_stars)
    max_right = arr[-1]
    stars = []
    for i in range(len(arr)-2, -1, -1):
        if arr[i] > max_right:
            stars.append(arr[i])
            max_right = arr[i]
    print("Stars:", stars)

arr = [4, 6, 3, 7, 2, 8]
find_stars(arr)

```

```javascript
function findStars(arr) {
    let maxRight = arr[arr.length-1];
    let superStars = [];
    for (let i = arr.length-1; i >= 0; i--) {
        if (arr[i] > maxRight) {
            superStars.push(arr[i]);
            maxRight = arr[i];
        }
    }
    console.log("Super Stars:", superStars);
    maxRight = arr[arr.length-1];
    let stars = [];
    for (let i = arr.length-2; i >= 0; i--) {
        if (arr[i] > maxRight) {
            stars.push(arr[i]);
            maxRight = arr[i];
        }
    }
    console.log("Stars:", stars);
}


```

## Solution Logic:
1. Initialize maxRight to the last element of the array.
2. Iterate through the array from right to left (starting from the second last element).
3. For each element, check if it is greater than maxRight. If it is, add it to the stars array and update maxRight.
4. Repeat steps 2-3 until the beginning of the array is reached.
5. To find super stars, repeat steps 2-4, but add elements to the superStars array only if they are greater than maxRight and also greater than all elements on their left side.


## Time Complexity

* The time complexity is $O(log(n))$ where n is the input number. 


## Space Complexity

* The auxiliary space complexity is $O(1)$ due to the only extra memory used is for temporary variables while swapping two values in Array.