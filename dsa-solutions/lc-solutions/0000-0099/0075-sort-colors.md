---
id: sort-colors
title: Sort Colors
difficulty: Medium
sidebar_label: 0075-sortcolors
tags:
  - Arrays
  - Two Pointers
  - Sorting
---

## Problem

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Sort Colors](https://leetcode.com/problems/sort-colors/description/) | [Sort Colors Solution on LeetCode](https://leetcode.com/problems/sort-colors/solutions/) |  [Leetcode Profile](https://leetcode.com/u/debangi_29/) |

## Problem Description

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.
 

### Examples

### Example 1:

**Input**: nums = [2,0,2,1,1,0]

**Output**: [0,0,1,1,2,2]


### Example 2:

**Input**: nums = [2,0,1]

**Output**: [0,1,2]

 

### Constraints

- n == nums.length
- 1 <= n <= 300
- nums[i] is either 0, 1, or 2.

### Approach
This problem is a variation of the popular Dutch National flag algorithm. 

The steps will be the following:

- First, we will run a loop that will continue until mid <= high.
- There can be three different values of mid pointer i.e. arr[mid]
    - If arr[mid] == 0, we will swap arr[low] and arr[mid] and will increment both low and mid. Now the subarray from index 0 to (low-1) only contains 0.
    - If arr[mid] == 1, we will just increment the mid pointer and then the index (mid-1) will point to 1 as it should according to the rules.
    - If arr[mid] == 2, we will swap arr[mid] and arr[high] and will decrement high. Now the subarray from index high+1 to (n-1) only contains 2.In this step, we will do nothing to the mid-pointer as even after swapping, the subarray from mid to high(after decrementing high) might be unsorted. So, we will check the value of mid again in the next iteration.
- Finally, our array should be sorted.
### Solution Code

#### Python

```
class Solution:
 def sortArray(arr):
    low = 0
    mid = 0
    high = len(arr) - 1

    while mid <= high:
        if arr[mid] == 0:
            arr[low], arr[mid] = arr[mid], arr[low]
            low += 1
            mid += 1
        elif arr[mid] == 1:
            mid += 1
        else:
            arr[mid], arr[high] = arr[high], arr[mid]
            high -= 1
```

#### Java

```
class Solution {
  public static void sortArray(ArrayList<Integer> arr, int n) {
        int low = 0, mid = 0, high = n - 1; // 3 pointers

        while (mid <= high) {
            if (arr.get(mid) == 0) {
                // swapping arr[low] and arr[mid]
                int temp = arr.get(low);
                arr.set(low, arr.get(mid));
                arr.set(mid, temp);

                low++;
                mid++;

            } else if (arr.get(mid) == 1) {
                mid++;

            } else {
                // swapping arr[mid] and arr[high]
                int temp = arr.get(mid);
                arr.set(mid, arr.get(high));
                arr.set(high, temp);

                high--;
            }
        }
    }
}
```

#### C++

```
class Solution {
 public:
  void sortArray(vector<int>& arr, int n) {

    int low = 0, mid = 0, high = n - 1; // 3 pointers

    while (mid <= high) {
        if (arr[mid] == 0) {
            swap(arr[low], arr[mid]);
            low++;
            mid++;
        }
        else if (arr[mid] == 1) {
            mid++;
        }
        else {
            swap(arr[mid], arr[high]);
            high--;
        }
    }
}
};

```

### Conclusion

- Time Complexity: $O(N)$, where N = size of the given array.
    
    Reason: We are using a single loop that can run at most N times.

- Space Complexity: $O(1)$ as we are not using any extra space.