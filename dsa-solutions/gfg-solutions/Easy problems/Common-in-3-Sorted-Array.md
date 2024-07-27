---
id: common-in-3-sorted-arrays
title: Common In 3 Sorted Arrays
sidebar_label: Common-In-3-Sorted-Arrays
tags:
  - Searching
  - Algorithms
description: "This tutorial covers the solution to the Common in 3 sorted arrays problem from the GeeksforGeeks."
---
## Problem Description

You are given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
If there are no such elements return an empty array. In this case, the output will be -1.

## Examples

**Example 1:**

```
Input: arr1 = [1, 5, 10, 20, 40, 80] , arr2 = [6, 7, 20, 80, 100] , arr3 = [3, 4, 15, 20, 30, 70, 80, 120]
Output: [20, 80]
Explanation: 20 and 80 are the only common elements in arr, brr and crr.
```

**Example 2:**

```
Input: arr1 = [1, 2, 3, 4, 5] , arr2 = [6, 7] , arr3 = [8,9,10]
Output: [-1]
Explanation: There are no common elements in arr, brr and crr.
```


Expected Time Complexity: O(n)

Expected Auxiliary Space: O(n)

## Constraints

* `-10^5 <= arr1i , arr2i , 1arr3i <= 10^5`

## Problem Explanation

The task is to traverse the arrays and find the common element.

## Code Implementation

### C++ Solution

```cpp

#include <vector>
#include <algorithm>

std::vector<int> commonElements(std::vector<int> arr1, std::vector<int> arr2, std::vector<int> arr3) {
  std::vector<int> result;
  int i = 0, j = 0, k = 0;
  while (i < arr1.size() && j < arr2.size() && k < arr3.size()) {
    if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
      result.push_back(arr1[i]);
      i++;
      j++;
      k++;
    } else {
      if (arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) {
        i++;
      } else if (arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) {
        j++;
      } else {
        k++;
      }
    }
  }

  return result;
}


```

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
  public static List<Integer> commonElements(List<Integer> arr1, List<Integer> arr2, List<Integer> arr3) {
    List<Integer> result = new ArrayList<>();
    int i = 0, j = 0, k = 0;
    while (i < arr1.size() && j < arr2.size() && k < arr3.size()) {
      if (arr1.get(i) == arr2.get(j) && arr2.get(j) == arr3.get(k)) {
        result.add(arr1.get(i));
        i++;
        j++;
        k++;
      } else {
        if (arr1.get(i) <= arr2.get(j) && arr1.get(i) <= arr3.get(k)) {
          i++;
        } else if (arr2.get(j) <= arr1.get(i) && arr2.get(j) <= arr3.get(k)) {
          j++;
        } else {
          k++;
        }
      }
    }

    return result;
  }
}




```

```python

def commonElements(arr1, arr2, arr3):
  result = []
  i = j = k = 0

  while i < len(arr1) and j < len(arr2) and k < len(arr3):
    if arr1[i] == arr2[j] == arr3[k]:
      result.append(arr1[i])
      i += 1
      j += 1
      k += 1
    else:
      if arr1[i] <= arr2[j] and arr1[i] <= arr3[k]:
        i += 1
      elif arr2[j] <= arr1[i] and arr2[j] <= arr3[k]:
        j += 1
      else:
        k += 1

  return result


```

```javascript
function commonElements(arr1, arr2, arr3) {
  const result = [];
  const i = j = k = 0;

  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      result.push(arr1[i]);
      i++;
      j++;
      k++;
    } else {
      if (arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) {
        i++;
      } else if (arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) {
        j++;
      } else {
        k++;
      }
    }
  }

  return result.length ? result : [-1];
}


```

## Solution Logic:

1. Initialize three pointers, one for each array, at the beginning of the arrays.
2. Compare the elements at the current pointers. If they are equal, add the element to the result array and increment all three pointers.
3. If the elements are not equal, increment the pointer of the array with the smallest current element.
4. Repeat steps 2-3 until one of the arrays is exhausted.
5. Return the result array.



## Time Complexity

* The time complexity is $O(N^2)$ where n is the length of the shortest array. This is because in the worst case, we need to iterate through all elements of the shortest array.


## Space Complexity

* The auxiliary space complexity is $O(m)$ where m is the number of common elements found. This is because we store the common elements in the result array.

