---
id: Reverse-a-doubly-linked-list
title: Reverse a Doubly Linked List (Geeks for Geeks)
sidebar_label: Reverse a Doubly LinkedList 
tags:
  - Beginner
  - Doubly Linked List
  - Array
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Reverse a Doubly linked list problem on Geeks for Geeks."
---

## Problem Description

Reverse a given doubly linked list in-place. This means modifying the existing list's pointers (prev and next) to achieve the reversed order without creating a new list.

## Examples
**Example 1:**
```
Input:
LinkedList: 3 <--> 4 <--> 5
Output: 5 4 3
```
**Example 2:**
```
Input:
LinkedList: 75 <--> 122 <--> 59 <--> 196
Output: 196 59 122 75
```

## Your Task

Your task is to complete the given function reverseDLL(), which takes head reference as argument and this function should reverse the elements such that the tail becomes the new head and all pointers are pointing in the right order. You need to return the new head of the reversed list. The printing and verification is done by the driver code.

Expected Time Complexity: $O(n)$.
Expected Auxiliary Space: $O(1)$.

## Constraints

- $1 <= number of nodes <= 10^4$
- $0 <= value of nodes <= 10^4$

## Problem Explanation

Here's the step-by-step breakdown of the reversal process:

Initialization:

Create two pointers: current (initially pointing to the head) and prev (initially None).
Iteration:

While current is not None:
Store the next pointer of the current node in a temporary variable next_node.
Reverse the pointers of the current node:
Set the current.next pointer to prev.
Set the current.prev pointer to next_node.
Update the prev pointer to the current node (prev = current).
Move the current pointer to the previously stored next_node (current = next_node).
Update Head:

After the loop, the prev pointer will be pointing to the new head of the reversed list. Return prev.
This process effectively reverses the direction of the linked list by swapping the next and prev pointers of each node.

6. Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```py
def reverse_doubly_linked_list(head):
  current = head
  prev = None
  while current:
    next_node = current.next
    current.next = prev
    current.prev = next_node
    prev = current
    current = next_node
  return prev
```
</TabItem>

<TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp

    Node* reverse_doubly_linked_list(Node* head) {

    Node* current = head;
    Node* prev = nullptr;
    while (current) {
      Node* next_node = current->next;
      current->next = prev;
      current->prev = next_node;
      prev = current;
      current = next_node;
    }
    return prev;
    }
    ```
</TabItem>
</Tabs>

## Solution Logic

1. The code iterates through the list using current.
2. For each node, it stores the next pointer for later use and then:
3. Reverses the next and prev pointers of the current node.
4. Updates prev to point to the current node, preparing for the next iteration.
5. Moves current to the previously stored next_node.
6. After the loop, prev points to the new head of the reversed list.


## Time Complexity

$O(n)$, where n is the number of nodes in the list. This is because the loop iterates through each node once.

## Space Complexity

$O(1)$, constant space complexity. The algorithm uses only a few additional pointers for temporary storage, which does not depend on the input size.

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1)
- **HackerRank Problem:**[HackerRank](https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem)
- **Authors LeetCode Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)