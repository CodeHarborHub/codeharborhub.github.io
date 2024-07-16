---
id: count-pairs-whose-sum-is-equal-to-x
title: Count Pairs whose sum is equal to X
sidebar_label: 0109-Count Pairs whose sum is equal to X
tags:
  - Linked List
  - Data Structures
description: "A solution to the problem of finding the count of pairs which sum up to target x"
---

In this page, we will solve the problem of finding the count of pairs which sum up to target x.

## Problem Description

Given two linked list head1 and head2 with distinct elements, determine the count of all distinct pairs from both lists whose sum is equal to the given value x.

Note: A valid pair would be in the form (x, y) where x is from first linked list and y is from second linked list.
### Examples

**Example 1:**

```plaintext
Input:
head1 = 1->2->3->4->5->6
head2 = 11->12->13
x = 15
Output: 3
Explanation: There are total 3 pairs whose sum is 15 : (4,11) , (3,12) and (2,13)
```

**Example 2:**

```plaintext
Input:
head1 = 7->5->1->3
head2 = 3->5->2->8
x = 10
Output: 2
Explanation: There are total 2 pairs whose sum is 10 : (7,3) and (5,5)
```

### Constraints

- $1 \leq$ length(head1), lenght(head2) $\leq10^5$
- $1 \leq$ Value of elements of  linked lists $\leq 10^9$
- $1 \leq$ x $\leq 10^9$
- Note : All elements in each linked list are unique.

## Solution

### Intuition and Approach

This problem can be solved by using simple iterations over the both the linked list and usnig a hashmap. 

### Approach: 

1. We will first initialize
   - a hashmap 'Map' is an empty dictionary that will store the difference between x and each element from the first linked list (head1).
   - cnt is a counter initialized to 0, which will keep track of the number of valid pairs that sum up to x.
2. Next we will run a while loop by which we traverse the First Linked List (head1).For each node, the difference between x and the node's data (x - head1.data) is calculated and stored in the Map dictionary with the node's data as the value.This effectively maps each required complement value (x - head1.data) to its corresponding data value in the first linked list.
3. The second while loop iterates through each node in the linked list head2.For each node, it checks if the node's data exists in the Map dictionary.If it exists, it means there is a node in the first linked list whose value, when added to the current node's data from the second linked list, equals x.
4. Then we increase the counter cnt is incremented for each such valid pair found.
5. Return the count of valid pairs.

#### Code in Python
```python
class Solution:
  def countPair(self, head1, head2, n1, n2, x):
    '''
    head1:  head of linkedList 1
    head2:  head of linkedList 2
    n1:  len of  linkedList 1
    n2:  len of linkedList 1
    x:   given sum
    '''
    Map={}
    cnt = 0
    while(head1):
        Map[x-head1.data]=head1.data
        head1=head1.next
    while(head2):
        if head2.data in Map:
            cnt+=1
        head2=head2.next
    return cnt
```

#### Complexity Analysis

- **Time Complexity:** $O(length(head1)+lenght(head2))$
- **Space Complexity:** $O(length(head1))$ or $O(length(head2))$
