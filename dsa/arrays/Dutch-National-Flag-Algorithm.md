---
id: dutch-national-flag-algorithm
title: Dutch National Flag Algorithm
sidebar_label: Dutch National Flag Algorithm
tags: [python, java, c++, algorithms, array]
description: In this tutorial, we will learn about the Dutch National Flag Algorithm and its implementation in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

## Problem Statement 
Given an array `A[]` consisting of only 0s, 1s, and 2s. The task is to sort the array, i.e., put all 0s first, then all 1s, and all 2s last.

This problem is the same as the famous “Dutch National Flag problem” proposed by Edsger Dijkstra. The problem is as follows:

Given `N` balls of color red, white, or blue arranged in a line in random order, you have to arrange all the balls such that the balls with the same colors are adjacent with the order of the balls being red, white, and blue (i.e., all red colored balls come first, then the white colored balls, and then the blue colored balls). 

### Examples

**Example 1:**

```
Input: {0, 1, 2, 0, 1, 2}
Output: {0, 0, 1, 1, 2, 2}
Explanation: {0, 0, 1, 1, 2, 2} has all 0s first, then all 1s, and all 2s last.
```

**Example 2:**

```
Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}
Explanation: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2} has all 0s first, then all 1s, and all 2s last.
```

## Brute Force Approach 

### Intuition
The naive solution is to simply sort the array using a standard sorting algorithm or sort library function. This will simply place all the 0s first, then all 1s, and 2s at last. This approach requires `O(N * log(N))` time and `O(1)` space.

<Tabs>
<TabItem value="Python" label="Python">

```python
# Brute Force Approach in Python
def sort012(arr):
    arr.sort()

# Sample Input
arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
sort012(arr)
print(arr)
```

</TabItem>
<TabItem value="Java" label="Java">

```java
import java.util.Arrays;

// Brute Force Approach in Java
public class Main {
    public static void sort012(int[] arr) {
        Arrays.sort(arr);
    }

    public static void main(String[] args) {
        int[] arr = {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1};
        sort012(arr);
        System.out.println(Arrays.toString(arr));
    }
}
```

</TabItem>
<TabItem value="C++" label="C++">

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

// Brute Force Approach in C++
void sort012(int arr[], int n) {
    sort(arr, arr + n);
}

int main() {
    int arr[] = {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1};
    int n = sizeof(arr) / sizeof(arr[0]);
    sort012(arr, n);
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

</TabItem>
</Tabs>

### Time Complexity: $O(n \cdot \log(n))$
### Space Complexity: $O(1)$

## Better Approach 

### Intuition
A better solution is to traverse the array once and count the number of 0s, 1s, and 2s. Let these counts be `c0`, `c1`, and `c2`. Now traverse the array again, put `c0` (count of 0s) 0s first, then `c1` 1s, and finally `c2` 2s. This solution works in `O(n)` time but is not stable and requires two traversals of the array. This approach requires `O(N)` time and `O(1)` space.

<Tabs>
<TabItem value="Python" label="Python">

```python
# Better Approach in Python
def sort012(arr):
    c0 = c1 = c2 = 0
    for num in arr:
        if num == 0:
            c0 += 1
        elif num == 1:
            c1 += 1
        else:
            c2 += 1
    
    idx = 0
    for _ in range(c0):
        arr[idx] = 0
        idx += 1
    for _ in range(c1):
        arr[idx] = 1
        idx += 1
    for _ in range(c2):
        arr[idx] = 2
        idx += 1

# Sample Input
arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
sort012(arr)
print(arr)
```

</TabItem>
<TabItem value="Java" label="Java">

```java
// Better Approach in Java
public class Main {
    public static void sort012(int[] arr) {
        int c0 = 0, c1 = 0, c2 = 0;
        for (int num : arr) {
            if (num == 0) c0++;
            else if (num == 1) c1++;
            else c2++;
        }
        
        int idx = 0;
        for (int i = 0; i < c0; i++) arr[idx++] = 0;
        for (int i = 0; i < c1; i++) arr[idx++] = 1;
        for (int i = 0; i < c2; i++) arr[idx++] = 2;
    }

    public static void main(String[] args) {
        int[] arr = {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1};
        sort012(arr);
        System.out.println(Arrays.toString(arr));
    }
}
```

</TabItem>
<TabItem value="C++" label="C++">

```cpp
#include <iostream>
using namespace std;

// Better Approach in C++
void sort012(int arr[], int n) {
    int c0 = 0, c1 = 0, c2 = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] == 0) c0++;
        else if (arr[i] == 1) c1++;
        else c2++;
    }
    
    int idx = 0;
    for (int i = 0; i < c0; i++) arr[idx++] = 0;
    for (int i = 0; i < c1; i++) arr[idx++] = 1;
    for (int i = 0; i < c2; i++) arr[idx++] = 2;
}

int main() {
    int arr[] = {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1};
    int n = sizeof(arr) / sizeof(arr[0]);
    sort012(arr, n);
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

</TabItem>
</Tabs>

### Time Complexity: $O(2n)$
### Space Complexity: $O(1)$

## Optimal Approach (Dutch National Flag Algorithm)

### Intuition
The idea is to sort the array of size `N` using three pointers: `lo = 0`, `mid = 0`, and `hi = N – 1` such that the array is divided into three parts:

- `arr[0]` to `arr[lo – 1]`: This part will have all the zeros.
- `arr[lo]` to `arr[mid – 1]`: This part will have all the ones.
- `arr[hi + 1]` to `arr[N – 1]`: This part will have all the twos.

### Steps 
Traverse over the array till `mid <= hi`. According to the value of `arr[mid]`, we can have three cases:

- If `arr[mid]` is 0, swap `arr[lo]` and `arr[mid]` and increment both `lo` and `mid`.
- If `arr[mid]` is 1, increment `mid`.
- If `arr[mid]` is 2, swap `arr[mid]` and `arr[hi]` and decrement `hi`.

<Tabs>
<TabItem value="Python" label="Python">

```python
# Optimal Approach in Python
def sort012(arr):
    lo = mid = 0
    hi = len(arr) - 1
    while mid <= hi:
        if arr[mid] == 0:
            arr[lo], arr[mid] = arr[mid], arr[lo]
            lo += 1
            mid += 1
        elif arr[mid] == 1:
            mid += 1
        else:
            arr[mid], arr[hi] = arr[hi], arr[mid]
            hi -= 1

# Sample Input
arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
sort012(arr)
print(arr)
```

</TabItem>
<TabItem value="Java" label="Java">

```java
// Optimal Approach in Java
public class Main {
    public static void sort012(int[] arr) {
        int lo = 0, mid = 0, hi = arr.length - 1;
        while (mid <= hi) {
            if (arr[mid] == 0) {
                int temp = arr[lo];
                arr[lo] = arr[mid];
                arr[mid] = temp;
                lo++;
                mid++;
            } else if (arr[mid] == 1) {
                mid++;
            } else {
                int temp = arr[mid];
                arr[mid] = arr[hi];
                arr[hi] = temp;
                hi--;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1};
        sort012(arr);
        System.out.println(Arrays.toString(arr));
    }
}
```

</TabItem>
<TabItem value="C++" label="C++">

```cpp
#include <iostream>
using namespace std;

// Optimal Approach in C++
void sort012(int arr[], int n) {
    int lo = 0, mid = 0, hi = n - 1;
    while (mid <= hi) {
        switch (arr[mid]) {
            case 0:
                swap(arr[lo++], arr[mid++]);
                break;
            case 1:
                mid++;
                break;
            case 2:
                swap(arr[mid], arr[hi--]);
                break;
        }
    }
}

int main() {
    int arr[] = {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1};
    int n = sizeof(arr) / sizeof(arr[0]);
    sort012(arr, n);
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

</TabItem>
</Tabs>

### Time Complexity: $O(n)$
### Space Complexity: $O(1)$
