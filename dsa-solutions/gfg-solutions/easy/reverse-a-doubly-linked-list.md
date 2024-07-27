---
id: reverse-a-doubly-linked-list
title: Reverse a Doubly Linked List
sidebar_label: 0105-Reverse a Doubly Linked List

tags:
  - doubly-linked-list
  - Linked List
  - Data Structures
description: "A solution to the problem of reversing a doubly linked list "
---

In this page, we will solve the problem of reversing a doubly linked list.

## Problem Description

Given a doubly linked list of n elements. Your task is to reverse the doubly linked list in-place.

### Examples

**Example 1:**

```plaintext
Input:
LinkedList: 3 <--> 4 <--> 5
Output: 5 4 3
```

**Example 2:**

```plaintext
Input:
LinkedList: 75 <--> 122 <--> 59 <--> 196
Output: 196 59 122 75
```

### Constraints

- $1 \leq$ number of nodes $\leq10^4$
- $0 \leq$ value of nodes $\leq 10^4$

## Solution

### Intuition and Approach

This problem can be solved by iterating over the doubly linked list and interchanging the prev and the next pointer and then return the last node 


### Approach: Inorder Traversal

1. Base Case: we first checks if the head of the list is None, which means the list is empty and so we  returns None.
2. Base Case: we then checks if the head.next is None, which means there is only one node in the list. If so, it returns the head itself, as reversing a single node doesn't change anything.
3. we next initializes two pointers: curr which is set to head, and prev which is set to None. curr will be used to traverse the list, and prev will eventually point to the new head of the reversed list.
4. Then we run a while loop until curr becomes None, meaning it has traversed the entire list. Inside the loop:
   - prev is updated to curr, keeping track of the last processed node.
   - then current node's next and prev pointers are swapped to reverse the direction of the list.
   - curr is then moved to the original prev node, which is now curr.next after the swap.
5. Once the loop finishes, prev will be pointing to the new head of the reversed list and so we returned prev.
#### Code in Python
```python
class Solution:
  def reverseDLL(self, head):
    if head==None:return None
    if head.next==None:
        return head
    curr=head
    prev=None
    while curr!=None:
        prev=curr
        curr.next,curr.prev=curr.prev,curr.next
        curr=curr.prev
    return prev
```

#### Complexity Analysis

- **Time Complexity:** $O(N)$
- **Space Complexity:** $O(1)$
