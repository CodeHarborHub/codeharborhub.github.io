---
id: kadane's-algorithm
title: Kadane's Alogrithm (Geeks for Geeks)
sidebar_label: 0003 - Kadane's Algorithm 
tags:
  - intermediate
  - Array
  - Dynamic Programming
  - Data Structure
  - Algorithms

description: "This is a solution to the Kadane's Algorithm problem on Geeks for Geeks."
---

This tutorial contains a complete walk-through of the Kadane's Algorithm  problem from the Geeks for Geeks website. It features the implementation of the solution code in three programming languages: Python ,C++ ,java.

## Problem Description

Given an array Arr[] of N integers, find the contiguous sub-array (containing at least one number) which has the maximum sum and return its sum.

## Examples

**Example 1:**

```
Input:
N = 5
Arr[] = {1,2,3,-2,5}
Output:
9
Explanation:
Max subarray sum is 9
of elements (1, 2, 3, -2, 5) which 
is a contiguous subarray.
```

**Example 2:**

```
Input:
N = 4
Arr[] = {-1,-2,-3,-4}
Output:
-1
Explanation:
Max subarray sum is -1 
of element (-1)
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `maxSubarraySum()` which takes Arr[] and N as input parameters and returns the sum of subarray with maximum sum.

Expected Time Complexity: $O(N)$  
Expected Auxiliary Space: $O(1)$

## Constraints

1. $(1 \leq N \leq 10^6)$
2. $(-10^7 \leq A[i] \leq 10^7)$

## Solution Approach

### Brute Force Approach

#### Intuition:
Try all possible subarrays by using nested loops and pick the subarray which has the maximum sum.

#### Implementation:
1. Keep an answer variable to store the maximum subarray sum.
2. Run a loop(i).
3. Run a nested loop from i till the end of the array.
4. Generate all subarrays starting from the ith index and compare its sum with the answer and update the answer with the maximum one.
5. Return the answer.

#### Code (C++):

```cpp
class Solution{
    public:
    // arr: input array
    // n: size of array
    //Function to find the sum of contiguous subarray with maximum sum.
    long long maxSubarraySum(int arr[], int n){
        
        // Your code here
        long long ans=arr[0];
        for(int i=0;i<n;i++) {
            long long temp=0;
            for(int j=i;j<n;j++) {
                temp += arr[j];
                ans = max(ans,temp);
            }
        }
        return ans;
    }
};
```

#### Complexity:
- Time Complexity: $(O(N^2))$, As we are running a nested loop over the length of the array.
- Space Complexity: $(O(1))$, Here no extra space is used.

### Kadane's Algorithm

#### Intuition:
Kadane’s algorithm works on the principle of continuously adding the array value to the current sum so far and updating the max sum every time. Whenever the current sum becomes negative, initialize it to zero and continue the process. By this approach, only one loop is required to compute the maximum sum contiguous subarray, reducing the time complexity to linear $(O(N))$.

#### Implementation: 
1. Initialize the variables `max_so_far = arr[0]` (stores the maximum sum of contiguous subarray found so far) and `max_ending_here = 0` (stores the maximum sum contiguous subarray ending at the current index).
2. Run a for loop from 0 to N-1 and for each index i: 
    - Add the arr[i] to `max_ending_here`.
    - If `max_so_far` is less than `max_ending_here`, then update `max_so_far` to `max_ending_here`.
    - If `max_ending_here` < 0, then update `max_ending_here = 0`.
3. Return `max_so_far`.

#### Example:
Let's take the example: {-2, -3, 4, -1, -2, 1, 5, -3}
- `max_so_far = arr[0] = -2`
- `max_ending_here = 0`

For i=0, a[0] = -2:
- `max_ending_here = max_ending_here + (-2)`
- Set `max_ending_here = 0` because `max_ending_here < 0`
- Set `max_so_far = -2`

For i=1, a[1] = -3:
- `max_ending_here = max_ending_here + (-3)`
- Since `max_ending_here = -3` and `max_so_far = -2`, `max_so_far` will remain -2
- Set `max_ending_here = 0` because `max_ending_here < 0`

For i=2, a[2] = 4:
- `max_ending_here = max_ending_here + (4)`
- `max_ending_here = 4`
- `max_so_far` is updated to 4 because `max_ending_here` greater than `max_so_far` which was -2 till now

For i=3, a[3] = -1:
- `max_ending_here = max_ending_here + (-1)`
- `max_ending_here = 3`

For i=4, a[4] = -2:
- `max_ending_here = max_ending_here + (-2)`
- `max_ending_here = 1`

For i=5, a[5] = 1:
- `max_ending_here = max_ending_here + (1)`
- `max_ending_here = 2`

For i=6, a[6] = 5:
- `max_ending_here = max_ending_here + (5)`
- `max_ending_here = 7`
- `max_so_far` is updated to 7 because `max_ending_here` is greater than `max_so_far`

For i=7, a[7] = -3:
- `max_ending_here = max_ending_here + (-3)`
- `max_ending_here = 4`

Hence, `max_so_far = 7`.

#### Code (C++):

```cpp
class Solution{
    public:
    //Function to find the sum of contiguous subarray with maximum sum.
    long long maxSubarraySum(int a[], int n){
        
        long long maxh = 0, maxf = a[0];
        
        //Iterating over the array.
        for(int i=0;i<n;i++) 
            {
                //Updating max sum till current index.
                maxh+=a[i];
                //Storing max sum so far by choosing maximum between max 
                //sum so far and max till current index.
                if(maxf<maxh)
                maxf=maxh; 
                
                //If max sum at current index is negative, we do not need to add
                //it to result so we update it to zero.
                if(maxh<0)
                    maxh=0;
    
            }
            //returning the result.
            return maxf;
        
    }
};
```

#### Code (Java):

```java
class Solution {
    //Function to find the sum of contiguous subarray with maximum sum.
    long maxSubarraySum(int arr[], int n){
        
        long maxh = 0, maxf = arr[0];
        
        //Iterating over the array.
        for(int i = 0; i < n; i++){
            
            //Updating max sum till current index.
            maxh += arr[i];
            //Storing max sum so far by choosing maximum between max 
            //sum so far and max sum till current index.
            if(maxf < maxh)
                maxf = maxh; 
            
            //If max sum till current index is negative, we do not need to add
            //it to result so we update it to zero.
            if(maxh < 0)
                maxh = 0;
        }
        //returning the result.   
        return maxf;
    }
}
```

#### Code (Python):

```python
class Solution:
    #Function to find the sum of contiguous subarray with maximum sum.
    def maxSubArraySum(self,a,size): 
           
        max_so_far = -9999999 - 1
        max_ending_here = 0
        
        #Iterating over the array. 
        for i in range(0, size): 
            #Updating max sum till current index.
            max_ending_here = max_ending_here + a[i]
            
            #Storing max sum so far by choosing maximum between max 
            #sum so far and max sum till current index.
            if (max_so_far < max_ending_here): 
                max_so_far = max_ending_here 
        
            #If max sum till current index is negative, we do not need to add
            #it to result so we update it to zero.
            if max_ending_here < 0: 
                max_ending_here = 0   
        
        #returning the result.
        return max_so_far
```

#### Complexity:
- Time Complexity: $(O(N))$, where $O(N)$ is the size of the array as we are looping once over the whole array.
- Space Complexity: $(O(1))$, Here we are not using extra space.

## Conclusion

The problem of finding the maximum sum of a contiguous subarray can be effectively solved using Kadane's Algorithm, which operates in linear time $(O(N))$. This algorithm is highly efficient and utilizes constant space, making it suitable for large input sizes as specified in the constraints. The brute force approach, while conceptually simpler, is computationally expensive with a time complexity of $(O(N^2))$ and is not suitable for larger arrays.

By iterating through the array and maintaining the current

 subarray sum and the maximum subarray sum found so far, Kadane's Algorithm offers an optimal solution. This approach ensures that even in the worst case, where all elements are negative, the algorithm correctly identifies the largest element, which is the maximum sum subarray in such scenarios.

The provided implementations in C++, Java, and Python demonstrate how Kadane's Algorithm can be applied across different programming languages, ensuring versatility and ease of integration into various codebases.

## References

- **GeeksforGeeks Problem:** [Geeks for Geeks Problem](https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1)
- **Solution Link:** [Kadane's Algorithm on Geeks for Geeks](https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1)
- **Authors GeeksforGeeks Profile:** [Yash](https://www.geeksforgeeks.org/user/gabaniyxn26/)