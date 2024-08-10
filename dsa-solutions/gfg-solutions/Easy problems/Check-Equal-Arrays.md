---
id: check-equal-arrays
title: Check Equal Arrays
sidebar_label: Check-Equal-Arrays
tags:
  - Modular Arithmetic
  - Algorithms
description: "This tutorial covers the solution to the Check Equal Arrays problem from the GeeksforGeeks."
---
## Problem Description
Given two arrays `arr1` and `arr2` of equal size, the task is to find whether the given arrays are equal. Two arrays are said to be equal if both contain the same set of elements, arrangements (or permutations) of elements may be different though.
Note: If there are repetitions, then counts of repeated elements must also be the same for two arrays to be equal.

## Examples

**Example 1:**

```
Input: arr1[] = [1, 2, 5, 4, 0], arr2[] = [2, 4, 5, 0, 1]
Output: true
Explanation: Both the array can be rearranged to [0,1,2,4,5]
```

**Example 2:**

```
Input: arr1[] = [1, 2, 5], arr2[] = [2, 4, 15]
Output: false
Explanation: arr1[] and arr2[] have only one common value.
```


Expected Time Complexity: O(n)

Expected Auxiliary Space: O(n)

## Constraints

* `1<= arr1.size, arr2.size<=10^7`

## Problem Explanation

The task is to traverse the array and search the number.

## Code Implementation

### C++ Solution

```cpp

#include <algorithm>
#include <vector>

bool areEqual(std::vector<int> arr1, std::vector<int> arr2) {
    std::sort(arr1.begin(), arr1.end());
    std::sort(arr2.begin(), arr2.end());
    return arr1 == arr2;
}


```

```java
import java.util.Arrays;

public class Main {
    public static boolean areEqual(int[] arr1, int[] arr2) {
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        return Arrays.equals(arr1, arr2);
    }
}



```

```python

def are_equal(arr1, arr2):
    return sorted(arr1) == sorted(arr2)
```

```javascript

function areEqual(arr1, arr2) {
    return arr1.sort((a, b) => a - b).every((value, index) => value === arr2.sort((a, b) => a - b)[index]);
}


```

## Solution Logic:
In the solution, the arrays are sorted and then compared. If the sorted arrays are equal, then the original arrays contain the same set of elements, regardless of order. Note that this approach assumes that the arrays contain only elements that can be compared using the default comparison operators (e.g., numbers, strings). If the arrays contain custom objects, a custom comparison function may be needed.




## Time Complexity

* The time complexity is $O(log(n))$ where n is the input number. 


## Space Complexity

* The auxiliary space complexity is $O(1)$ due to the only extra memory used is for temporary variables while swapping two values in Array.