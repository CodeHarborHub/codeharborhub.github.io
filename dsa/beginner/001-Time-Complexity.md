---
id: 001-time-complexity
title: Time Complexity 
sidebar_label: Time Complexity
tags:
  - dsa
  - data-structures
  - algorithms
  - introduction
  - basics
  - beginner
  - programming
  - time-complexity
  - data structure
  - algorithm
sidebar_position: 2
---
# Introduction to Time Complexity

## What is Time Complexity?
Time complexity is a way to measure how the runtime of an algorithm changes as the size of the input changes. It helps us understand and compare the efficiency of different algorithms.

## Big O Notation
Big O notation is a mathematical notation used to describe the upper bound of an algorithm's runtime. It provides a worst-case scenario for the time complexity of an algorithm.

## Example 

Q. Imagine a classroom of 100 students in which you gave your pen to one person. You have to find that pen without knowing to whom you gave it. 

Here are some ways to find the pen and what the $O$ order is.

1. $O(n2)$: You go and ask the first person in the class if he has the pen. Also, you ask this person about the other 99 people in the classroom if they have that pen and so on, 
This is what we call $O(n2)$. 
2. $O(n)$: Going and asking each student individually is $O(N)$. 
3. $O(log n)$: Now I divide the class into two groups, then ask: “Is it on the left side, or the right side of the classroom?” Then I take that group and divide it into two and ask again, and so on. Repeat the process till you are left with one student who has your pen. This is what you mean by $O(log n)$

- The $O(n2)$ searches if only one student knows on which student the pen is hidden. 
- The $O(n)$ if one student had the pen and only they knew it. 
- The $O(log n)$ search if all the students knew, but would only tell me if I guessed the right side. 

## Use Cases

| Input Length | Worst Accepted Time Complexity | Usually Type of Solutions                   |
|--------------|--------------------------------|---------------------------------------------|
| 10-12        | O(N!)                          | Recursion and backtracking                  |
| 15-18        | O(2^N * N)                     | Recursion, backtracking, and bit manipulation|
| 18-22        | O(2^N * N)                     | Recursion, backtracking, and bit manipulation|
| 30-40        | O(2^(N/2) * N)                 | Meet in the middle, Divide and Conquer      |
| 100          | O(N^4)                         | Dynamic programming, Constructive           |
| 400          | O(N^3)                         | Dynamic programming, Constructive           |
| 2K           | O(N^2 * log N)                 | Dynamic programming, Binary Search, Sorting, Divide and Conquer |
| 10K          | O(N^2)                         | Dynamic programming, Graph, Trees, Constructive |
| 1M           | O(N * log N)                   | Sorting, Binary Search, Divide and Conquer  |
| 100M         | O(N), O(log N), O(1)           | Constructive, Mathematical, Greedy Algorithms|


### Common Time Complexities

#### a) O(1) - Constant Time Complexity
The runtime does not change with the input size.

```python
def get_first_element(arr):
    return arr[0]
```
The time it takes to get the first element is constant, regardless of the size of the array.

#### b) O(log n) - Logarithmic Time Complexity
The runtime grows logarithmically with the input size.

```python
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```
The time it takes to find the target grows logarithmically with the size of the array.

#### c) O(n) - Linear Time Complexity
The runtime grows linearly with the input size.

```python
def print_elements(arr):
    for element in arr:
        print(element)
```
The time it takes to print all elements grows linearly with the size of the array.

#### d) O(n^2) - Quadratic Time Complexity
The runtime grows quadratically with the input size.

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
```
The time it takes to sort the array grows quadratically with the size of the array.

#### e) O(2^n) - Exponential Time Complexity
The runtime doubles with each additional element in the input.

```python
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```
The time it takes to calculate the nth Fibonacci number doubles with each additional element.

#### f) O(n!) - Factorial Time Complexity
The runtime grows factorially with the input size.

```python
def permutations(arr, l, r):
    if l == r:
        print(''.join(arr))
    else:
        for i in range(l, r+1):
            arr[l], arr[i] = arr[i], arr[l]
            permutations(arr, l+1, r)
            arr[l], arr[i] = arr[i], arr[l]
```
The time it takes to generate all permutations of the array grows factorially with the size of the array.

## How to Calculate Time Complexity?

1. **Identify the basic operations** in your algorithm (e.g., comparisons, assignments).
2. **Count the number of times these operations are executed** in terms of the input size $N$.
3. **Express this count using Big O notation** to simplify and generalize the complexity.

## Time Complexity of Different Data Structures

- **Array**:
  - Access: $O(1)$
  - Search: $O(N)$
  - Insertion: $O(N)$
  - Deletion: $O(N)$

- **Linked List**:
  - Access: $O(N)$
  - Search: $O(N)$
  - Insertion: $O(1)$
  - Deletion: $O(1)$

- **Hash Table**:
  - Access: $O(1)$
  - Search: $O(1)$
  - Insertion: $O(1)$
  - Deletion: $O(1)$

- **Binary Search Tree**:
  - Access: $O(log N)$
  - Search: $O(log N)$
  - Insertion: $O(log N)$
  - Deletion: $O(log N)$

## Analyzing Algorithms with Time Complexity

1. **Linear Search**:
   ```python
   def linear_search(arr, target):
       for i in range(len(arr)):
           if arr[i] == target:
               return i
       return -1
   ```
   Time Complexity: $O(N)$

2. **Binary Search**:
   ```python
   def binary_search(arr, target):
       low = 0
       high = len(arr) - 1
       while low <= high:
           mid = (low + high) // 2
           if arr[mid] == target:
               return mid
           elif arr[mid] < target:
               low = mid + 1
           else:
               high = mid - 1
       return -1
   ```
   Time Complexity: $O(log N)$

3. **Bubble Sort**:
   ```python
   def bubble_sort(arr):
       n = len(arr)
       for i in range(n):
           for j in range(0, n-i-1):
               if arr[j] > arr[j+1]:
                   arr[j], arr[j+1] = arr[j+1], arr[j]
   ```
   Time Complexity: $O(N^2)$

4. **Merge Sort**:
   ```python
   def merge_sort(arr):
       if len(arr) > 1:
           mid = len(arr) // 2
           left_half = arr[:mid]
           right_half = arr[mid:]

           merge_sort(left_half)
           merge_sort(right_half)

           i = j = k = 0

           while i < len(left_half) and j < len(right_half):
               if left_half[i] < right_half[j]:
                   arr[k] = left_half[i]
                   i += 1
               else:
                   arr[k] = right_half[j]
                   j += 1
               k += 1

           while i < len(left_half):
               arr[k] = left_half[i]
               i += 1
               k += 1

           while j < len(right_half):
               arr[k] = right_half[j]
               j += 1
               k += 1
   ```
   Time Complexity: $O(N log N)$

5. **Fibonacci (Recursive)**:
   ```python
   def fibonacci(n):
       if n <= 1:
           return n
       else:
           return fibonacci(n-1) + fibonacci(n-2)
   ```
   Time Complexity: $O(2^N)$

## Practical Tips

- **Optimize Your Code**: Aim to reduce the time complexity for better performance, especially for large inputs.
- **Consider Both Time and Space Complexity**: While time complexity is important, space complexity (the amount of memory used) is also crucial.
- **Know Your Problem Domain**: Some problems inherently require higher time complexity. Understanding the problem domain helps in choosing the right algorithm.

## Resources to Learn More

1. **Books**:
    - *Introduction to Algorithms* by Cormen, Leiserson, Rivest, and Stein
    - *Algorithm Design Manual* by Steven S. Skiena

2. **Online Courses**:
    - [Coursera Algorithms Specialization](https://www.coursera.org/specializations/algorithms)
    - [edX Data Structures and Algorithm](https://www.edx.org/course/data-structures-and-algorithms)

3. **Websites**:
    - [GeeksforGeeks Time Complexity](https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/)
    - [Khan Academy Algorithms](https://www.khanacademy.org/computing/computer-science/algorithms)

4. **Interactive Tools**:
    - [VisuAlgo](https://visualgo.net/en)
    - [Big O Cheat Sheet](https://www.bigocheatsheet.com/)

Understanding time complexity is essential for writing efficient algorithms and is a fundamental skill in computer science and software development. By analyzing and optimizing time complexity, you can ensure your programs run efficiently, even with large inputs.
