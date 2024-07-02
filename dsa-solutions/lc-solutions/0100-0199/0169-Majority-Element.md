---
id: Majority-Element
title: Majority Element
sidebar_label: 0169-Majority-Element
tags:
   - Array
   - Hash Table
   - Sorting
   - Counting
description: "Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array."
---



## Problem Statement

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

**Follow-up:** Could you solve the problem in linear time and in O(1) space?


### Examples

**Example 1:**

```plaintext
Input: nums = [3,2,3]
Output: 3
```

**Example 2:**

```plaintext
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

### Constraints

- `n == nums.length`
- `1 <= n <= 5 * 104`
- `-109 <= nums[i] <= 109`
  

## Solution

If the array contains a majority element, its occurrence must be greater than the floor(N/2). 
Now, we can say that the count of minority elements and majority elements is equal up to a certain point in the array. 
So when we traverse through the array we try to keep track of the count of elements and the element itself for which we are tracking the count. 

After traversing the whole array, we will check the element stored in the variable. 
The question states that the array must contain a majority element, so the stored element will be that one 

### Approach 

#### Algorithm

1. Initialize 2 variables:
     - Count –  for tracking the count of element
     - Element – for which element we are counting
2. Traverse through the given array.
     - If Count is 0 then store the current element of the array as Element.
     - If the current element and Element are the same increase the Count by 1.
     - If they are different decrease the Count by 1.
3. The integer present in Element should be the result we are expecting 



#### Solution

### Java Solution

```Java
import java.util.*;

public class tUf {
    public static int majorityElement(int []v) {
        //size of the given array:
        int n = v.length;
        int cnt = 0; // count
        int el = 0; // Element

        //applying the algorithm:
        for (int i = 0; i < n; i++) {
            if (cnt == 0) {
                cnt = 1;
                el = v[i];
            } else if (el == v[i]) cnt++;
            else cnt--;
        }

        return el;
    }

    public static void main(String args[]) {
        int[] arr = {2, 2, 1, 1, 1, 2, 2};
        int ans = majorityElement(arr);
        System.out.println("The majority element is: " + ans);

    }

}

```

### C++ Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

int majorityElement(vector<int> v) {

    //size of the given array:
    int n = v.size();
    int cnt = 0; // count
    int el; // Element

    //applying the algorithm:
    for (int i = 0; i < n; i++) {
        if (cnt == 0) {
            cnt = 1;
            el = v[i];
        }
        else if (el == v[i]) cnt++;
        else cnt--;
    }

return el;
}

int main()
{
    vector<int> arr = {2, 2, 1, 1, 1, 2, 2};
    int ans = majorityElement(arr);
    cout << "The majority element is: " << ans << endl;
    return 0;
}
```

### Python Solution

```python
def majorityElement(arr):
    # Size of the given array
    n = len(arr)
    cnt = 0  # Count
    el = None  # Element

    # Applying the algorithm
    for i in range(n):
        if cnt == 0:
            cnt = 1
            el = arr[i]
        elif el == arr[i]:
            cnt += 1
        else:
            cnt -= 1

    return el
    

arr = [2, 2, 1, 1, 1, 2, 2]
ans = majorityElement(arr)
print("The majority element is:", ans)
```

### Complexity Analysis

- **Time complexity**: $O(N)$, where N = size of the given array.
- **Space complexity**: $O(1)$ as we are not using any extra space.

