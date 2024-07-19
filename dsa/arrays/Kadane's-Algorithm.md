---
id: kadaney's-algorithm
title: Kadaney's Algorithm
sidebar_label: Kadane's-Algorithm
tags: [python, java, c++, algorithms, array]
description: In this tutorial, we will learn about Kadane's Algorithm and its implementation in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

### Kadane's Algorithm
The idea of Kadane’s algorithm is to maintain a variable max_ending_here that stores the maximum sum contiguous subarray ending at current index and a variable max_so_far stores the maximum sum of contiguous subarray found so far, Everytime there is a positive-sum value in max_ending_here compare it with max_so_far and update max_so_far if it is greater than max_so_far.

So the main Intuition behind Kadane’s Algorithm is, 

The subarray with negative sum is discarded (by assigning max_ending_here = 0 in code).
We carry subarray till it gives positive sum.

## Problem Statement 
Given an array `arr[]` of size `N`. The task is to find the sum of the contiguous subarray within a `arr[]` with the largest sum.

### Examples

**Example 1:**

```
Input: arr = {-2,-3,4,-1,-2,1,5,-3}
Output: 7
Explanation: The subarray {4,-1, -2, 1, 5} has the largest sum 7.

```

**Example 2:**

```
Input: arr = {2}
Output: 2
Explanation: The subarray {2} has the largest sum 2.

```
## Brute Force Approach 

#### Intuition

To print the subarray with the maximum sum the idea is to maintain start index of maximum_sum_ending_here at current index so that whenever maximum_sum_so_far is updated with maximum_sum_ending_here then start index and end index of subarray can be updated with start and current index.

#### Approach
- Initialize the variables s, start, and end with 0 and max_so_far = INT_MIN and max_ending_here = 0
- Run a for loop from 0 to N-1 and for each index i: 
- Add the arr[i] to max_ending_here.
- If max_so_far is less than max_ending_here then update max_so_far to max_ending_here and update start to s and end to i .
- If max_ending_here < 0 then update max_ending_here = 0 and s with i+1.
Print values from index start to end.

```c++
// C++ program to print largest contiguous array sum

#include <climits>
#include <iostream>
using namespace std;

void maxSubArraySum(int a[], int size)
{
    int max_so_far = INT_MIN, max_ending_here = 0,
        start = 0, end = 0, s = 0;

    for (int i = 0; i < size; i++) {
        max_ending_here += a[i];

        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
            start = s;
            end = i;
        }

        if (max_ending_here < 0) {
            max_ending_here = 0;
            s = i + 1;
        }
    }
    cout << "Maximum contiguous sum is " << max_so_far
         << endl;
    cout << "Starting index " << start << endl
         << "Ending index " << end << endl;
}

/*Driver program to test maxSubArraySum*/
int main()
{
    int a[] = { -2, -3, 4, -1, -2, 1, 5, -3 };
    int n = sizeof(a) / sizeof(a[0]);
    maxSubArraySum(a, n);
    return 0;
}


```
```java
// Java program to print largest
// contiguous array sum
import java.io.*;
import java.util.*;
class GFG {

    static void maxSubArraySum(int a[], int size)
    {
        int max_so_far = Integer.MIN_VALUE,
            max_ending_here = 0, start = 0, end = 0, s = 0;

        for (int i = 0; i < size; i++) {
            max_ending_here += a[i];

            if (max_so_far < max_ending_here) {
                max_so_far = max_ending_here;
                start = s;
                end = i;
            }

            if (max_ending_here < 0) {
                max_ending_here = 0;
                s = i + 1;
            }
        }
        System.out.println("Maximum contiguous sum is "
                           + max_so_far);
        System.out.println("Starting index " + start);
        System.out.println("Ending index " + end);
    }

    // Driver code
    public static void main(String[] args)
    {
        int a[] = { -2, -3, 4, -1, -2, 1, 5, -3 };
        int n = a.length;
        maxSubArraySum(a, n);
    }
}




```
```python
// Java program to print largest
// contiguous array sum
import java.io.*;
import java.util.*;
class GFG {

    static void maxSubArraySum(int a[], int size)
    {
        int max_so_far = Integer.MIN_VALUE,
            max_ending_here = 0, start = 0, end = 0, s = 0;

        for (int i = 0; i < size; i++) {
            max_ending_here += a[i];

            if (max_so_far < max_ending_here) {
                max_so_far = max_ending_here;
                start = s;
                end = i;
            }

            if (max_ending_here < 0) {
                max_ending_here = 0;
                s = i + 1;
            }
        }
        System.out.println("Maximum contiguous sum is "
                           + max_so_far);
        System.out.println("Starting index " + start);
        System.out.println("Ending index " + end);
    }

    
    public static void main(String[] args)
    {
        int a[] = { -2, -3, 4, -1, -2, 1, 5, -3 };
        int n = a.length;
        maxSubArraySum(a, n);
    }
}


```
#### Time Complexity : $O(n)$
#### Spcae Complexity : $O(1)$

## Better Approach - Dynamic Programming

#### Approach
For each index `i`, `DP[i]` stores the maximum possible Largest Sum Contiguous Subarray ending at index `i`, and therefore we can calculate `DP[i]` using the mentioned state transition:

`DP[i] = max(DP[i-1] + arr[i] , arr[i] )`

```c++
// C++ program to print largest contiguous array sum
#include <bits/stdc++.h>
using namespace std;

void maxSubArraySum(int a[], int size)
{
    vector<int> dp(size, 0);
    dp[0] = a[0];
    int ans = dp[0];
    for (int i = 1; i < size; i++) {
        dp[i] = max(a[i], a[i] + dp[i - 1]);
        ans = max(ans, dp[i]);
    }
    cout << ans;
}

/*Driver program to test maxSubArraySum*/
int main()
{
    int a[] = { -2, -3, 4, -1, -2, 1, 5, -3 };
    int n = sizeof(a) / sizeof(a[0]);
    maxSubArraySum(a, n);
    return 0;
}

    
```
```java
import java.util.Arrays;

public class Main {
    // Function to find the largest contiguous array sum
    public static void maxSubArraySum(int[] a) {
        int size = a.length;
        int[] dp = new int[size]; // Create an array to store intermediate results
        dp[0] = a[0]; // Initialize the first element of the intermediate array with the first element of the input array
        int ans = dp[0]; // Initialize the answer with the first element of the intermediate array
        for (int i = 1; i < size; i++) {
            // Calculate the maximum of the current element and the sum of the current element and the previous result
            dp[i] = Math.max(a[i], a[i] + dp[i - 1]);
            // Update the answer with the maximum value encountered so far
            ans = Math.max(ans, dp[i]);
        }
        // Print the maximum contiguous array sum
        System.out.println(ans);
    }

    public static void main(String[] args) {
        int[] a = { -2, -3, 4, -1, -2, 1, 5, -3 };
        maxSubArraySum(a); // Call the function to find and print the maximum contiguous array sum
    }
}

```
```python
# Python program for the above approach

def max_sub_array_sum(a, size):
    # Create a list to store intermediate results
    dp = [0] * size

    # Initialize the first element of the list with the first element of the array
    dp[0] = a[0]

    # Initialize the answer with the first element of the array
    ans = dp[0]

    # Loop through the array starting from the second element
    for i in range(1, size):
        # Choose the maximum value between the current element and the sum of the current element
        # and the previous maximum sum (stored in dp[i - 1])
        dp[i] = max(a[i], a[i] + dp[i - 1])

        # Update the overall maximum sum
        ans = max(ans, dp[i])

    # Print the maximum contiguous subarray sum
    print(ans)

# Driver program to test max_sub_array_sum
if __name__ == "__main__":
    # Sample array
    a = [-2, -3, 4, -1, -2, 1, 5, -3]

    # Get the length of the array
    n = len(a)

    # Call the function to find the maximum contiguous subarray sum
    max_sub_array_sum(a, n)

```
#### Time Complexity : $O(n)$
#### Spcae Complexity : $O(1)$

## Optimal Approach (Kadane's Algorithm):
#### Intuition
The idea of Kadane’s algorithm is to maintain a variable max_ending_here that stores the maximum sum contiguous subarray ending at current index and a variable max_so_far stores the maximum sum of contiguous subarray found so far, Everytime there is a positive-sum value in max_ending_here compare it with max_so_far and update max_so_far if it is greater than max_so_far.

#### Steps 
Follow the below steps to Implement the idea:

- Initialize the variables max_so_far = INT_MIN and max_ending_here = 0
- Run a for loop from 0 to N-1 and for each index i: 
- Add the arr[i] to max_ending_here.
- If  max_so_far is less than max_ending_here then update max_so_far  to max_ending_here.
- If max_ending_here < 0 then update max_ending_here = 0
- Return max_so_far

## Implementing Kadane's Algorithm

### Python Implementation

```python
def GFG(a, size):
    max_so_far = float('-inf')  
    # Use float('-inf') instead of maxint
    max_ending_here = 0
    for i in range(0, size):
        max_ending_here = max_ending_here + a[i]
        if max_so_far < max_ending_here:
            max_so_far = max_ending_here
        if max_ending_here < 0:
            max_ending_here = 0
    return max_so_far
# Driver function to check the above function
a = [-2, -3, 4, -1, -2, 1, 5, -3]
print("Maximum contiguous sum is", GFG(a, len(a)))

```

### Java Implementation

```java
// Java program to print largest contiguous array sum
import java.io.*;
import java.util.*;

class Kadane {
    // Driver Code
    public static void main(String[] args)
    {
        int[] a = { -2, -3, 4, -1, -2, 1, 5, -3 };
        System.out.println("Maximum contiguous sum is "
                           + maxSubArraySum(a));
    }

    // Function Call
    static int maxSubArraySum(int a[])
    {
        int size = a.length;
        int max_so_far = Integer.MIN_VALUE, max_ending_here
                                            = 0;

        for (int i = 0; i < size; i++) {
            max_ending_here = max_ending_here + a[i];
            if (max_so_far < max_ending_here)
                max_so_far = max_ending_here;
            if (max_ending_here < 0)
                max_ending_here = 0;
        }
        return max_so_far;
    }
}

```

### C++ Implementation

```cpp
// C++ program to print largest contiguous array sum
#include <bits/stdc++.h>
using namespace std;

int maxSubArraySum(int a[], int size)
{
    int max_so_far = INT_MIN, max_ending_here = 0;

    for (int i = 0; i < size; i++) {
        max_ending_here = max_ending_here + a[i];
        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here;

        if (max_ending_here < 0)
            max_ending_here = 0;
    }
    return max_so_far;
}

// Driver Code
int main()
{
    int a[] = { -2, -3, 4, -1, -2, 1, 5, -3 };
    int n = sizeof(a) / sizeof(a[0]);

    // Function Call
    int max_sum = maxSubArraySum(a, n);
    cout << "Maximum contiguous sum is " << max_sum;
    return 0;
}

```

## Complexity Analysis
   #### Time Complexity : $O(n)$
   #### Space Complexity : $O(1)$
   
## Conclusion
- Extended Kadane's Algorithm concludes by returning  element of maximum contiguous.