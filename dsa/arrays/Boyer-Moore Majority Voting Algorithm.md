---
id: boyer-moore-majority-voting-algorithm
title: Boyer Moore Majority voting algorithm
sidebar_label: Boyer Majority voting algorithm
tags: [python, java, c++, algorithms, array, counting]
description: In this tutorial, we will learn about Moore's Voting Algorithm and its implementation in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Moore's Voting Algorithm
The Boyer-Moore Majority Voting Algorithm is a well-known and efficient algorithm used to find the majority element in an array, i.e., an element that appears more than `n/2` times. This algorithm, initially designed by Robert S. Boyer and J Strother Moore in `1981`, is widely used in various applications, including data analysis and stream processing. However, in some scenarios, we may need to find elements that occur more than `n/k` times, where k is a positive integer. In this article, we explore the generalization of the Boyer-Moore Majority Voting Algorithm to solve this problem efficiently

## Problem Statement 
Given an array of `N` integers. Find the elements that appear more than `N/3` times in the array. If no such element exists, return an empty vector.

### Examples

**Example 1:**

```
Input:  N = 5, array[] = {1,2,2,3,2}
Output: 2
Explanation: Here we can see that the Count(1) = 1, Count(2) = 3 and Count(3) = 1.Therefore, the count of 2 is greater than N/3 times. Hence, 2 is the answer.

```

**Example 2:**

```
Input: N = 6, array[] = {11,33,33,11,33,11}
Output: 11 33
Explanation: Here we can see that the Count(11) = 3 and Count(33) = 3. Therefore, the count of both 11 and 33 is greater than N/3 times. Hence, 11 and 33 is the answer.

```
## Brute Force Approach 

#### Intuition

If we closely observe, in the given array, there can be a maximum of two integers that can occur more than `floor(N/3)` times. Let’s understand it using the following scenario:
Assume there are `8` elements in the given array. Now, if there is any majority element, it should occur more than `floor(8/3) = 2` times. So, the majority of elements should occur at least 3 times. Now, if we imagine there are 3 majority elements, then the total occurrence of them will be `3X3 = 9` i.e. greater than the size of the array. But this should not happen. That is why there can be a maximum of 2 majority elements.

#### Approach
- We will run a loop that will select the elements of the array one by one.
- Now, for each unique element, we will run another loop and count its occurrence in the given array.
- If any element occurs more than the floor of (N/3), we will include it in our answer. 
- While traversing if we find any element that is already included in our answer, we will just skip it.

```c++
vector<int> majorityElement(vector<int> v) {
    int n = v.size(); //size of the array
    vector<int> ls; // list of answers

    for (int i = 0; i < n; i++) {
        //selected element is v[i]:
        // Checking if v[i] is not already
        // a part of the answer:
        if (ls.size() == 0 || ls[0] != v[i]) {
            int cnt = 0;
            for (int j = 0; j < n; j++) {
                // counting the frequency of v[i]
                if (v[j] == v[i]) {
                    cnt++;
                }
            }

            // check if frquency is greater than n/3:
            if (cnt > (n / 3))
                ls.push_back(v[i]);
        }

        if (ls.size() == 2) break;
    }

    return ls;
}

```
```java
public static List<Integer> majorityElement(int []v) {
        int n = v.length; //size of the array
        List<Integer> ls = new ArrayList<>(); // list of answers

        for (int i = 0; i < n; i++) {
            //selected element is v[i]:
            // Checking if v[i] is not already
            // a part of the answer:
            if (ls.size() == 0 || ls.get(0) != v[i]) {
                int cnt = 0;
                for (int j = 0; j < n; j++) {
                    // counting the frequency of v[i]
                    if (v[j] == v[i]) {
                        cnt++;
                    }
                }

                // check if frquency is greater than n/3:
                if (cnt > (n / 3))
                    ls.add(v[i]);
            }

            if (ls.size() == 2) break;
        }

        return ls;
    }

```
```python
from typing import List

def majorityElement(v: List[int]) -> List[int]:
    n = len(v) # size of the list
    ls = [] # list of answers

    for i in range(n):
        # selected element is v[i]:
        # Checking if v[i] is not already
        # a part of the answer:
        if len(ls) == 0 or ls[0] != v[i]:
            cnt = 0
            for j in range(n):
                # counting the frequency of v[i]
                if v[j] == v[i]:
                    cnt += 1

            # check if frquency is greater than n/3:
            if cnt > (n // 3):
                ls.append(v[i])

        if len(ls) == 2:
            break

    return ls
```
#### Time Complexity : $O(n^2)$
#### Spcae Complexity : $O(1)$

## Better Approach - Hashmap
#### Intuition
Use a better data structure to reduce the number of look-up operations and hence the time complexity. Moreover, we have been calculating the count of the same element again and again – so we have to reduce that also.

#### Approach
 - Use a hashmap and store the elements as `<key, value> `
   pairs. (Can also use frequency array based on the size of nums).
- Here the key will be the element of the array and the 
  value will be the number of times it occurs. 
- Traverse the whole array and update the occurrence of 
  each element. 
- After that, check the map if the value for any element 
  is greater than the floor of N/3. 
   - If yes, include it in the list. 
   - Else iterate forward.
- Finally, return the list.

```c++
vector<int> majorityElement(vector<int> v) {
    int n = v.size(); //size of the array
    vector<int> ls; // list of answers

    //declaring a map:
    map<int, int> mpp;

    // least occurrence of the majority element:
    int mini = int(n / 3) + 1;

    //storing the elements with its occurnce:
    for (int i = 0; i < n; i++) {
        mpp[v[i]]++;

        //checking if v[i] is
        // the majority element:
        if (mpp[v[i]] == mini) {
            ls.push_back(v[i]);
        }
        if (ls.size() == 2) break;
    }

    return ls;
}
    
```
```java
public static List<Integer> majorityElement(int []v) {
        int n = v.length; //size of the array
        List<Integer> ls = new ArrayList<>(); // list of answers

        //declaring a map:
        HashMap<Integer, Integer> mpp = new HashMap<>();

        // least occurrence of the majority element:
        int mini = (int)(n / 3) + 1;

        //storing the elements with its occurnce:
        for (int i = 0; i < n; i++) {
            int value = mpp.getOrDefault(v[i], 0);
            mpp.put(v[i], value + 1);

            //checking if v[i] is
            // the majority element:
            if (mpp.get(v[i]) == mini) {
                ls.add(v[i]);
            }
            if (ls.size() == 2) break;
        }

        return ls;
    }
```
```python
def majorityElement(arr):
    # Size of the given array
    n = len(arr)

    # Count the occurrences of each element using Counter
    counter = Counter(arr)

    # Searching for the majority element
    for num, count in counter.items():
        if count > (n // 2):
            return num

    return -1
```
#### Time Complexity : $O(nlogn)$
#### Spcae Complexity : $O(n)$

## Optimal Approach (Extended Boyer Moore’s Voting Algorithm):
#### Intuition
If the array contains the majority of elements, their occurrence must be greater than the `floor(N/3)`. Now, we can say that the count of minority elements and majority elements is equal up to a certain point in the array. So when we traverse through the array we try to keep track of the counts of elements and the elements themselves for which we are tracking the counts. 

After traversing the whole array, we will check the elements stored in the variables. Then we need to check if the stored elements are the majority elements or not by manually checking their counts. 

#### Steps 
- Initialize 4 variables:
  cnt1 & cnt2 –  for tracking the counts of elements
  el1 & el2 – for storing the majority of elements.
- Traverse through the given array.
  - If cnt1 is 0 and the current element is not el2 then  store the current element of the array as el1 along with increasing the cnt1 value by 1.
  - If cnt2 is 0 and the current element is not el1 then store the current element of the array as el2 along with increasing the cnt2 value by 1.
  - If the current element and el1 are the same increase the cnt1 by 1.
  - If the current element and el2 are the same increase the cnt2 by 1.
- Other than all the above cases: decrease cnt1 and cnt2 by 1.
- The integers present in el1 & el2 should be the result we are expecting. So, using another loop, we will manually check their counts if they are greater than the floor(N/3).

## Implementing Extended Boyer Moore’s Voting Algorithm

### Python Implementation

```python
def majorityElement(v: List[int]) -> List[int]:
    n = len(v) # size of the array

    cnt1, cnt2 = 0, 0 # counts
    el1, el2 = float('-inf'), float('-inf') # element 1 and element 2

    # applying the Extended Boyer Moore’s Voting Algorithm:
    for i in range(n):
        if cnt1 == 0 and el2 != v[i]:
            cnt1 = 1
            el1 = v[i]
        elif cnt2 == 0 and el1 != v[i]:
            cnt2 = 1
            el2 = v[i]
        elif v[i] == el1:
            cnt1 += 1
        elif v[i] == el2:
            cnt2 += 1
        else:
            cnt1 -= 1
            cnt2 -= 1

    ls = [] # list of answers

    # Manually check if the stored elements in
    # el1 and el2 are the majority elements:
    cnt1, cnt2 = 0, 0
    for i in range(n):
        if v[i] == el1:
            cnt1 += 1
        if v[i] == el2:
            cnt2 += 1

    mini = int(n / 3) + 1
    if cnt1 >= mini:
        ls.append(el1)
    if cnt2 >= mini:
        ls.append(el2)

    # Uncomment the following line
    # if it is told to sort the answer array:
    #ls.sort() #TC --> O(2*log2) ~ O(1);

    return ls
```

### Java Implementation

```java
public static List<Integer> majorityElement(int []v) {
        int n = v.length; //size of the array

        int cnt1 = 0, cnt2 = 0; // counts
        int el1 = Integer.MIN_VALUE; // element 1
        int el2 = Integer.MIN_VALUE; // element 2

        // applying the Extended Boyer Moore's Voting Algorithm:
        for (int i = 0; i < n; i++) {
            if (cnt1 == 0 && el2 != v[i]) {
                cnt1 = 1;
                el1 = v[i];
            } else if (cnt2 == 0 && el1 != v[i]) {
                cnt2 = 1;
                el2 = v[i];
            } else if (v[i] == el1) cnt1++;
            else if (v[i] == el2) cnt2++;
            else {
                cnt1--; cnt2--;
            }
        }

        List<Integer> ls = new ArrayList<>(); // list of answers

        // Manually check if the stored elements in
        // el1 and el2 are the majority elements:
        cnt1 = 0; cnt2 = 0;
        for (int i = 0; i < n; i++) {
            if (v[i] == el1) cnt1++;
            if (v[i] == el2) cnt2++;
        }

        int mini = (int)(n / 3) + 1;
        if (cnt1 >= mini) ls.add(el1);
        if (cnt2 >= mini) ls.add(el2);

        // Uncomment the following line
        // if it is told to sort the answer array:
        //Collections.sort(ls); //TC --> O(2*log2) ~ O(1);

        return ls;
    }
```

### C++ Implementation

```cpp
vector<int> majorityElement(vector<int> v) {
    int n = v.size(); //size of the array

    int cnt1 = 0, cnt2 = 0; // counts
    int el1 = INT_MIN; // element 1
    int el2 = INT_MIN; // element 2

    // applying the Extended Boyer Moore's Voting Algorithm:
    for (int i = 0; i < n; i++) {
        if (cnt1 == 0 && el2 != v[i]) {
            cnt1 = 1;
            el1 = v[i];
        }
        else if (cnt2 == 0 && el1 != v[i]) {
            cnt2 = 1;
            el2 = v[i];
        }
        else if (v[i] == el1) cnt1++;
        else if (v[i] == el2) cnt2++;
        else {
            cnt1--, cnt2--;
        }
    }

    vector<int> ls; // list of answers

    // Manually check if the stored elements in
    // el1 and el2 are the majority elements:
    cnt1 = 0, cnt2 = 0;
    for (int i = 0; i < n; i++) {
        if (v[i] == el1) cnt1++;
        if (v[i] == el2) cnt2++;
    }

    int mini = int(n / 3) + 1;
    if (cnt1 >= mini) ls.push_back(el1);
    if (cnt2 >= mini) ls.push_back(el2);

    // Uncomment the following line
    // if it is told to sort the answer array:
    // sort(ls.begin(), ls.end()); //TC --> O(2*log2) ~ O(1);

    return ls;
}
```

## Complexity Analysis
   #### Time Complexity : $O(n)$
   #### Space Complexity : $O(1)$
   
## Conclusion
- Extended Boyer Moore's Voting Algorithm concludes by returning the array of element which have occurance more than $(n/3)$, if it exists, otherwise, -1.



