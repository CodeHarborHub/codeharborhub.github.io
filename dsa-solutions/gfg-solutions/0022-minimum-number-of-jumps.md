---
id: minimum-number-of-jumps
title: Minimum number of jumps
sidebar_label: 0022 Minimum number of jumps 
tags:
- Arrays
- greedy
- Data Structure
- Algorithms
description: "find the minimum number of jumps required to reach the end of an array, given that each element represents the maximum length of the jump that can be made from that position."

---
## Problem Description

The problem is to find the minimum number of jumps required to reach the end of an array. Each element in the array represents the maximum length of the jump that can be made from that element. If an element is 0, it means no movement can be made through that element. The task is to return the minimum number of jumps to reach the end of the array starting from the first element. If reaching the end is not possible, the function should return -1.

## Example

Consider an array of 9 elements starting from 1 to 9 .
The minimum number of jumps required would be 3:
1. Jump from the 1st element to the 2nd element (value 3).
2. From the 2nd element, jump to the 5th element (value 9).
3. Finally, jump to the last element.

## Expected Complexity

- Time Complexity: $(O(N))$
- Space Complexity: $(O(1))$

## Solutions

### Brute Force Approach

#### Intuition

The brute force approach involves recursively checking all possible jumps from each element, calculating the minimum number of jumps needed to reach the end from reachable elements.

#### Implementation

The implementation recursively checks all possible jumps from each element, updating the minimum number of jumps needed.

```cpp
class Solution {
public:
    int minimumJumps(int arr[], int n) {
        if (n == 1)
            return 0;

        int ans = INT_MAX;
        for (int i = n - 2; i >= 0; i--) {
            if (i + arr[i] >= n - 1) {
                int sub_ans = minimumJumps(arr, i + 1);
                if (sub_ans != INT_MAX)
                    ans = min(ans, sub_ans + 1);
            }
        }
        return (ans==INT_MAX ? -1 : ans);
    }
};
```

### Brute Optimized Approach

#### Intuition

In this approach, we use dynamic programming to store the minimum number of jumps required to reach each index from the start.

#### Implementation

The code initializes an array to store the minimum jumps required and iterates through the array to calculate the minimum jumps.

```cpp
class Solution {
public:
    int minimumJumps(int arr[], int n) {
        int jumps[n];
        if (arr[0] == 0)
            return -1;

        jumps[0] = 0;
        for (int i = 1; i < n; i++) {
            jumps[i] = INT_MAX;
            for (int j = 0; j < i; j++) {
                if (i <= j + arr[j] && jumps[j] != INT_MAX) {
                    jumps[i] = min(jumps[i], jumps[j] + 1);
                    break;
                }
            }
        }
        return (jumps[n - 1] == INT_MAX ? -1 : jumps[n-1]);
    }
};
```

#### Python Implementation

```python
class Solution:
    def minJumps(self, arr, n):
        if len(arr) <= 1 : 
            return 0 
  
        # Return -1 if not possible to jump 
        if arr[0] == 0 :  
            return -1 
  
        # initialization 
        maxReach = arr[0]; 
        step = arr[0]; 
        jump = 1; 
  
  
        # Start traversing array 
        for i in range(1,len(arr)):

            # Check if we have reached the end of the array 
            if  i == len(arr) - 1 : 
                return jump 
  
            # updating maxReach 
            maxReach = max(maxReach, i+arr[i])
  
            # we use a step to get to the current index 
            step-=1; 
  
            # If no further steps left 
            if  step == 0 : 
                #  we must have used a jump 
                jump+=1 
                   
                #Check if the current index/position  or lesser index 
                #is the maximum reach point from the previous indexes 
                if i>=maxReach : 
                   return -1
  
                #re-initialize the steps to the amount 
                #of steps to reach maxReach from position i. 
                step = maxReach - i 
  
        return -1  
```

#### Java Implementation

```java
class Solution {
    static int minJumps(int arr[]) 
    { 
        if (arr.length <= 1) 
            return 0; 
  
        // Return -1 if not possible to jump 
        if (arr[0] == 0) 
            return -1; 
  
        // initialization 
        int maxReach = arr[0]; 
        int step = arr[0]; 
        int jump = 1; 
  
  
        // Start traversing array 
        for (int i = 1; i < arr.length; i++) 
        { 
            // Check if we have reached the end of the array 
            if (i == arr.length - 1) 
                return jump; 
  
            // updating maxReach 
            maxReach = Math.max(maxReach, i+arr[i]); 
  
            // we use a step to get to the current index 
            step--; 
  
            // If no further steps left 
            if (step == 0) 
            { 
                //  we must have used a jump 
                jump++; 
                   
                //Check if the current index/position  or lesser index 
                // is the maximum reach point from the previous indexes 
                if(i>=maxReach) 
                   return -1; 
  
                // re-initialize the steps to the amount 
                // of steps to reach maxReach from position i. 
                step = maxReach - i; 
            } 
        } 
  
        return -1;
    }
}
```

### Expected Approach

#### Intuition

This approach involves maintaining the maximum reachable index from the current index and the number of steps we can jump if we jump from the current index. By iterating through the array, we update these values accordingly.

#### Implementation

The implementation traverses the array, updating the maximum reachable index and the number of steps at each iteration.

```cpp
class Solution {
public:
    int minJumps(int arr[], int n) {
        if (n <= 1)
            return 0;
        if (arr[0] == 0)
            return -1;

        int maxReach = arr[0];
        int step = arr[0];
        int jump = 1;

        for (int i = 1; i < n; i++) {
            if (i == n - 1)
                return jump;
            maxReach = max(maxReach, i+arr[i]);
            step--;
            if (step ==0) {
                jump++;
                if (i >= maxReach)
                    return -1;
                step = maxReach - i;
            }
        }
        return -1;
    }
};
```

#### Python Implementation

```python
class Solution:
    def minJumps(self, arr, n):
        if len(arr) <= 1 : 
            return 0 
  
        # Return -1 if not possible to jump 
        if arr[0] == 0 :  
            return -1 
  
        # initialization 
        maxReach = arr[0]; 
        step = arr[0]; 
        jump = 1; 
  
  
        # Start traversing array 
        for i in range(1,len(arr)):

            # Check if we have reached the end of the array 
            if  i == len(arr) - 1 : 
                return jump 
  
            # updating maxReach 
            maxReach = max(maxReach, i+arr[i])
  
            # we use a step to get to the current index 
            step-=1; 
  
            # If no further steps left 
            if  step == 0 : 
                #  we must have used a jump 
                jump+=1 
                   
                #Check if the current index/position  or lesser index 
                #is the maximum reach point from the previous indexes 
                if i>=maxReach : 
                   return -1
  
                #re-initialize the steps to the amount 
                #of steps to reach maxReach from position i. 
                step = maxReach - i 
  
        return -1    
```

#### Java Implementation

```java
class Solution {
    static int minJumps(int arr[]) 
    { 
        if (arr.length <= 1) 
            return 0; 
  
        // Return -1 if not possible to jump 
        if (arr[0] == 0) 
            return -1; 
  
        // initialization 
        int maxReach = arr[0]; 
        int step = arr[0]; 
        int jump = 1; 
  
  
        // Start traversing array 
        for (int i = 1; i < arr.length; i++) 
        { 
            // Check if we have reached the end of the array 
            if (i == arr.length - 1) 
                return jump; 
  
            // updating maxReach 
            maxReach = Math.max(maxReach, i+arr[i]); 
  
            // we use a step to get to the current index 
            step--; 
  
            // If no further steps left 
            if (step == 0) 
            { 
                //  we must have used a jump 
                jump++; 
                   
                //Check if the current index/position  or lesser index 
                // is the maximum reach point from the previous indexes 
                if(i>=maxReach) 
                   return -1; 
  
                // re-initialize the steps to the amount 
                // of steps to reach maxReach from position i. 
                step = maxReach - i; 
            } 
        } 
  
        return -1;
    }
}
```

## Conclusion

In conclusion, the problem of finding the minimum number of jumps to reach the end of an array can be efficiently solved using dynamic programming or an optimized approach that tracks the maximum reachable index and the number of steps available. The expected approach offers the best time complexity of $(O(N))$ and space complexity of $(O(1))$, making it the most efficient solution for large input sizes.

By implementing these solutions, we can effectively solve the problem with minimal time and space complexity, providing a scalable solution for real-world applications.

## References

- **GeeksforGeeks Problem:** [Geeks for Geeks Problem](https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1)
- **Solution Link:** [Minimum Number of jumps on Geeks for Geeks](https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1)
- **Authors GeeksforGeeks Profile:** [Yash](https://www.geeksforgeeks.org/user/gabaniyxn26/)