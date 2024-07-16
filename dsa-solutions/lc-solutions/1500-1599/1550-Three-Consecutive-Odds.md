---
id: three-consecutive-odds
title: Three Consecutive Odds
sidebar_label: 1550. Three Consecutive Odds
tags:
- Array
description: "Solution to Leetcode 1550. Three Consecutive Odds "
---

## Problem Description

Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

 

### Examples

**Example 1:**

```
Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.
```

**Example 2:**

```
Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.

```



### Constraints
- `1 <= arr.length <= 1000`
- `1 <= arr[i] <= 1000`

### Approach 
1. Initialize a counter count to 0.
2. Iterate through each element in the array.
3. For each element, check if it is odd:
- If it is odd and count is less than 2, increment the count.
- If it is odd and count is 2, return true since we have found three consecutive odd numbers.
- If it is even, reset the count to 0.
4. If the loop completes without finding three consecutive odd numbers, return false.

### Complexity

Time Complexity: $O(n)$, where $n$ is the length of the array. This is because we iterate through the array once.
Space Complexity: $O(1)$. No extra space is required except for a few variables.


### Solution

#### Code in Different Languages

#### C++

 ```cpp
class Solution {
public:
    bool threeConsecutiveOdds(vector<int>& arr) {
        int count = 0; // Initialize count to keep track of consecutive odd numbers

        for (int num : arr) { // Iterate through each element in the array
            if (num % 2 != 0) { // Check if the current element is odd
                count++; // Increment the count if it's odd
                if (count == 3) { // If we have found three consecutive odds, return true
                    return true;
                }
            } else { // If the element is even, reset the count to 0
                count = 0;
            }
        }

        return false; // If we finish the loop without finding three consecutive odds, return false
    
    }
};
 ```

#### JAVA

```java
class Solution {
    public boolean threeConsecutiveOdds(int[] arr) {
        int count = 0;  // Initialize count to keep track of consecutive odd numbers

        for (int i = 0; i < arr.length; i++) {  // Iterate through each element in the array
            if (arr[i] % 2 != 0) {  // Check if the current element is odd
                count++;  // Increment the count if it's odd
                if (count == 3) {  // If we have found three consecutive odds, return true
                    return true;
                }
            } else {  // If the element is even, reset the count to 0
                count = 0;
            }
        }

        return false;  // If we finish the loop without finding three consecutive odds, return false
    }
}
```

#### PYTHON

```python
class Solution(object):
    def threeConsecutiveOdds(self, arr):
        count = 0 # Initialize count to keep track of consecutive odd numbers

        for num in arr: # Iterate through each element in the array
            if num % 2 != 0: # Check if the current element is odd
                count += 1 # Increment the count if it's odd
                if count == 3: # If we have found three consecutive odds, return true
                    return True
            else: # If the element is even, reset the count to 0
                count = 0

        return False # If we finish the loop without finding three consecutive odds, return false
        
```



### Complexity Analysis

- Time Complexity: $O(n)$ 

- Space Complexity: $O(1)$ 

### References

- **LeetCode Problem**: Three Consecutive Odds