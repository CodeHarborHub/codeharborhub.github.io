---

id: count-distinct-elements-in-every-window
title: Count distinct elements in every window
sidebar_label: 0101-Count distinct elements in every window
tags:
  - sliding-window
  - Hash
  - Data Structures
  - Algorithms
description: "This is a solution to the problem of determining the count of distinct element in every window of size k."

---

In this page, we will solve the problem of determining the count of distinct element in every window of size k.

## Problem Description

Given an array of integers and a number K. Find the count of distinct elements in every window of size K in the array.

### Examples

**Example 1:**

```plaintext
Input:
N = 7, K = 4
A[] = {1,2,1,3,4,2,3}

Output: 3 4 4 3

Explanation: Window 1 of size k = 4 is
1 2 1 3. Number of distinct elements in
this window are 3. 
Window 2 of size k = 4 is 2 1 3 4. Number
of distinct elements in this window are 4.
Window 3 of size k = 4 is 1 3 4 2. Number
of distinct elements in this window are 4.
Window 4 of size k = 4 is 3 4 2 3. Number
of distinct elements in this window are 3.
```

**Example 2:**

```plaintext
Input:
N = 3, K = 2
A[] = {4,1,1}

Output: 2 1
```

### Constraints

- `1 <= K <= N <= 105`
- `1 <= A[i] <= 105 , for each valid i`

---

## Solution

### Intuition and Approach

The problem can be solved using sliding window approach combined with a hash map (dictionary) to efficiently track the frequency of elements within the current window. 
By maintaining the counts of elements and adjusting the window dynamically, the algorithm ensures that it only needs to process each element a limited number of times, resulting in a time complexity of O(n), where n is the length of the array. 
This approach is efficient for counting distinct elements in overlapping subarrays of a fixed size.
<Tabs>
 <tabItem value="Sliding Window" label="Sliding Window">

### Approach: Sliding Window

1. First, we initialize the data structures and variables. ans is an empty list to store the count of distinct elements for each window. freq is an empty dictionary to keep track of the frequency of elements within the current window.
   j is a pointer representing the current end of the window, initialized to 0, and i is a pointer representing the current start of the window, also initialized to 0.
2. Next, we use a while loop to iterate over the array. The loop continues until j reaches the end of the array (n).
3. For each element A[j], we update its count in the freq dictionary. If A[j] is already in freq, we increment its count. If A[j] is not in freq, we add it with a count of 1.
4. We then check if the current window size is equal to k (j - i + 1 == k). If the condition is met, it means the window has reached the desired size.
   At this point, we append the number of distinct elements in the current window to the ans list. The number of distinct elements is the size of the freq dictionary.
5. Next, we slide the window. We decrement the count of the element at the start of the window (A[i]) in the freq dictionary. If the count of A[i] becomes zero, we remove it from the freq dictionary, as it is no longer in the current window. We then move the start of the window forward by incrementing i.
   We then move the end of the window forward by incrementing j.
6. After processing all windows, we return the ans list containing the counts of distinct elements for each window.   

#### Code in Python
```python
def countDistinct(self, A, N, K):
  # Code here
  ans = []
  freq = {}
  j = 0
  i = 0
  
  while j < n:
      if A[j] in freq:
          freq[A[j]] += 1
      else:
          freq[A[j]] = 1
  
      if j - i + 1 == k:
          ans.append(len(freq))
          freq[A[i]] -= 1
          if freq[A[i]] == 0:
              del freq[A[i]]
          i += 1
      j += 1
  
return ans
```

#### Complexity Analysis

- Time Complexity: **O(N)**
- Space Complexity: **O(N)**

---
