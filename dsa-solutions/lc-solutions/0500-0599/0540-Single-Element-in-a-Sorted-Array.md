---
id: Single-Element-in-a-Sorted-Array
title: Single Element in a Sorted Array
sidebar_label: 0540-Single-Element-in-a-Sorted-Array
tags:
   - Array
   - Binary search
     
description: "You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once."

---



## Problem Statement

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.


**Follow-up:** Your solution must run in O(log n) time and O(1) space.

### Examples

**Example 1:**

```plaintext
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
```

**Example 2:**

```plaintext
Input: nums = [3,3,7,7,10,11,11]
Output: 10
```

### Constraints

- `1 <= nums.length <= 105`
- `0 <= nums[i] <= 105`
  
## Solution

We are going to use the Binary Search algorithm to optimize the approach.
We need to consider 2 different cases while using Binary Search in this problem.
Binary Search works by reducing the search space by half. 
So, at first, we need to identify the halves and then eliminate them accordingly. 
In addition to that, we need to check if the current element i.e. arr[mid] is the ‘single element’.

If we can resolve these two cases, we can easily apply Binary Search in this algorithm.


### Approach 

#### Algorithm

The steps are as follows:
  - If n == 1: This means the array size is 1. If the array contains only one element, we will return that element only.
  - If arr[0] != arr[1]: This means the very first element of the array is the single element. So, we will return arr[0].
  - If arr[n-1] != arr[n-2]: This means the last element of the array is the single element. So, we will return arr[n-1].
  - Place the 2 pointers i.e. low and high: Initially, we will place the pointers excluding index 0 and n-1 like this:
    low will point to index 1, and high will point to index n-2 i.e. the second last index.
  - Calculate the ‘mid’: Now, inside a loop, we will calculate the value of ‘mid’ using the following formula:
    mid = (low+high) // 2 ( ‘//’ refers to integer division)
  - Check if arr[mid] is the single element:
    If arr[mid] != arr[mid-1] and arr[mid] != arr[mid+1]: If this condition is true for arr[mid], we can conclude arr[mid] is the single element. We will return arr[mid].
  - If (mid % 2 == 0 and arr[mid] == arr[mid+1])
    or (mid%2 == 1 and arr[mid] == arr[mid-1]): This means we are in the left half and we should eliminate it as our single element appears on the right. So, we will do this:
    low = mid+1.
  - Otherwise, we are in the right half and we should eliminate it as our single element appears on the left. So, we will do this: high = mid-1.



#### Solution

### Java Solution

```Java

import java.util.*;

public class tUf {
    public static int singleNonDuplicate(ArrayList<Integer> arr) {
        int n = arr.size(); // Size of the array.

        // Edge cases:
        if (n == 1)
            return arr.get(0);
        if (!arr.get(0).equals(arr.get(1)))
            return arr.get(0);
        if (!arr.get(n - 1).equals(arr.get(n - 2)))
            return arr.get(n - 1);

        int low = 1, high = n - 2;
        while (low <= high) {
            int mid = (low + high) / 2;

            // If arr[mid] is the single element:
            if (!arr.get(mid).equals(arr.get(mid + 1)) && !arr.get(mid).equals(arr.get(mid - 1))) {
                return arr.get(mid);
            }

            // We are in the left:
            if ((mid % 2 == 1 && arr.get(mid).equals(arr.get(mid - 1)))
                    || (mid % 2 == 0 && arr.get(mid).equals(arr.get(mid + 1)))) {
                // Eliminate the left half:
                low = mid + 1;
            }
            // We are in the right:
            else {
                // Eliminate the right half:
                high = mid - 1;
            }
        }

        // Dummy return statement:
        return -1;
    }

    public static void main(String[] args) {
        ArrayList<Integer> arr = new ArrayList<>(Arrays.asList(1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6));
        int ans = singleNonDuplicate(arr);
        System.out.println("The single element is: " + ans);
    }
}

```

### C++ Solution

```cpp

#include <bits/stdc++.h>
using namespace std;

int singleNonDuplicate(vector<int>& arr) {
    int n = arr.size(); //size of the array.

    //Edge cases:
    if (n == 1) return arr[0];
    if (arr[0] != arr[1]) return arr[0];
    if (arr[n - 1] != arr[n - 2]) return arr[n - 1];

    int low = 1, high = n - 2;
    while (low <= high) {
        int mid = (low + high) / 2;

        //if arr[mid] is the single element:
        if (arr[mid] != arr[mid + 1] && arr[mid] != arr[mid - 1]) {
            return arr[mid];
        }

        //we are in the left:
        if ((mid % 2 == 1 && arr[mid] == arr[mid - 1])
                || (mid % 2 == 0 && arr[mid] == arr[mid + 1])) {
            //eliminate the left half:
            low = mid + 1;
        }
        //we are in the right:
        else {
            //eliminate the right half:
            high = mid - 1;
        }
    }

    // dummy return statement:
    return -1;
}

int main()
{
    vector<int> arr = {1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6};
    int ans = singleNonDuplicate(arr);
    cout << "The single element is: " << ans << "\n";
    return 0;
}
```

### Python Solution

```python
def singleNonDuplicate(arr):
    n = len(arr)  # Size of the array

    # Edge cases:
    if n == 1:
        return arr[0]
    if arr[0] != arr[1]:
        return arr[0]
    if arr[n - 1] != arr[n - 2]:
        return arr[n - 1]

    low = 1
    high = n - 2
    while low <= high:
        mid = (low + high) // 2

        # If arr[mid] is the single element:
        if arr[mid] != arr[mid + 1] and arr[mid] != arr[mid - 1]:
            return arr[mid]

        # We are in the left:
        if (mid % 2 == 1 and arr[mid] == arr[mid - 1]) or (mid % 2 == 0 and arr[mid] == arr[mid + 1]):
            # Eliminate the left half:
            low = mid + 1
        # We are in the right:
        else:
            # Eliminate the right half:
            high = mid - 1

    # Dummy return statement:
    return -1

arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]
ans = singleNonDuplicate(arr)
print("The single element is:", ans)
```

### Complexity Analysis

- **Time complexity**: $O(logN)$, N = size of the given array.
- **Space complexity**: $O(1)$ as we are not using any extra space.
