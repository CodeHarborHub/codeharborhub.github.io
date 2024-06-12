---
id: moores-voting-algorithm
title: Moore's Voting Algorithm
sidebar_label: Moore's Voting Algorithm
tags: [python, java, c++, javascript, programming, algorithms, subarray, array, tutorial, in-depth , Hash Table,Divide and Conquer,Sorting ,Counting]
description: In this tutorial, we will learn about Moore's Voting Algorithm and its implementation in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Moore's Voting Algorithm
The Boyer-Moore voting algorithm is one of the popular optimal algorithms which is used to find the majority element among the given elements that have more than `N/ 2` occurrences. This works perfectly fine for finding the majority element which takes 2 traversals over the given elements, which works in $O(N)$ time complexity and $O(1)$ space complexity.

## Problem Statement 
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than `n / 2` times. You may assume that the majority element always exists in the array.

### Intuition
 - We will run a loop that will select the elements of the array one by one.
 - Now, for each element, we will run another loop and count its occurrence in the given array.
 - If any element occurs more than the floor of $(N/2)$, we will simply return it.

## Brute Force Approach 
```c++
int majorityElement(vector<int> v) {
    //size of the given array:
    int n = v.size();

    for (int i = 0; i < n; i++) {
        //selected element is v[i]
        int cnt = 0;
        for (int j = 0; j < n; j++) {
            // counting the frequency of v[i]
            if (v[j] == v[i]) {
                cnt++;
            }
        }

        // check if frquency is greater than n/2:
        if (cnt > (n / 2))
            return v[i];
    }

    return -1;
}
```
#### Time Complexity : $O(n^2)$
#### Spcae Complexity : $O(1)$
## Better Approach - Hashmap
#### Intuition
 - Use a hashmap and store as (key, value) pairs. (Can also use frequency array based on the size of nums) 
 - Here the key will be the element of the array and the value will be the number of times it occurs. 
 - Traverse the array and update the value of the key. Simultaneously check if the value is greater than the floor of N/2. 
 - If yes, return the key 
 - Else iterate forward.


```c++
int majorityElement(vector<int> v) {

    //size of the given array:
    int n = v.size();

    //declaring a map:
    map<int, int> mpp;

    //storing the elements with its occurnce:
    for (int i = 0; i < n; i++) {
        mpp[v[i]]++;
    }

    //searching for the majority element:
    for (auto it : mpp) {
        if (it.second > (n / 2)) {
            return it.first;
        }
    }

    return -1;
}
```
#### Time Complexity : $O(nlogn)$
#### Spcae Complexity : $O(n)$

## Optimized Approach - Moore's Voting Algorithm
#### Intuition
If the array contains a majority element, its occurrence must be greater than the floor(N/2). Now, we can say that the count of minority elements and majority elements is equal up to a certain point in the array. So when we traverse through the array we try to keep track of the count of elements and the element itself for which we are tracking the count. 

After traversing the whole array, we will check the element stored in the variable. If the question states that the array must contain a majority element, the stored element will be that one but if the question does not state so, then we need to check if the stored element is the majority element or not. If not, then the array does not contain any majority element.

#### Steps 
- Initialize 2 variables:
 Count –  for tracking the count of element
 Element – for which element we are counting
- Traverse through the given array.
 If Count is 0 then store the current element of the array as Element.
 If the current element and Element are the same increase the Count by 1.
 If they are different decrease the Count by 1.
- The integer present in Element should be the result we are expecting 

## Implementing Moore's Voting Algorithm

### Python Implementation

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

    # Checking if the stored element is the majority element
    cnt1 = 0
    for i in range(n):
        if arr[i] == el:
            cnt1 += 1

    if cnt1 > (n / 2):
        return el
    return -1
```

### Java Implementation

```java
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

        //checking if the stored element
        // is the majority element:
        int cnt1 = 0;
        for (int i = 0; i < n; i++) {
            if (v[i] == el) cnt1++;
        }

        if (cnt1 > (n / 2)) return el;
        return -1;
    }

    public static void main(String args[]) {
        int[] arr = {2, 2, 1, 1, 1, 2, 2};
        int ans = majorityElement(arr);
        System.out.println("The majority element is: " + ans);

    }

}
```

### C++ Implementation

```cpp
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

    //checking if the stored element
    // is the majority element:
    int cnt1 = 0;
    for (int i = 0; i < n; i++) {
        if (v[i] == el) cnt1++;
    }

    if (cnt1 > (n / 2)) return el;
    return -1;
}
```

### JavaScript Implementation

```javascript
function majorityElement(arr) {
    // Size of the given array
    let n = arr.length;
    let cnt = 0; // Count
    let el; // Element

    // Applying the algorithm
    for (let i = 0; i < n; i++) {
        if (cnt === 0) {
            cnt = 1;
            el = arr[i];
        } else if (el === arr[i]) {
            cnt++;
        } else {
            cnt--;
        }
    }

    // Checking if the stored element is the majority element
    let cnt1 = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === el) {
            cnt1++;
        }
    }

    if (cnt1 > Math.floor(n / 2)) {
        return el;
    }
    return -1;
}

```

## Complexity Analysis
   #### Time Complexity : $O(n)$
   #### Space Complexity : $O(1)$
   
## Conclusion
- Moore's Voting Algorithm concludes by returning the majority element, if it exists, otherwise, -1.



