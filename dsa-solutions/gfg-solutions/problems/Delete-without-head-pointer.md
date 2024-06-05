---
id: Delete-without-head-pointer
title: Delete without Head Pointer (Geeks for Geeks)
sidebar_label: Delete without Head Pointer 
tags:
  - Beginner
  - Linked List
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Delete without head pointer problem on Geeks for Geeks."
---

## Problem Description

You are given a pointer/reference to a node to be deleted in a singly linked list. The task is to delete the node. Given you don't have access to the head of the linked list, you only have access to that node directly. 

Note: The solution should not be tail and it should be done in constant time.

## Examples

**Example 1:**
```
Input:
LinkedList: 1 -> 2 -> 3 -> 4
Node to be deleted: 3
Output: 1 2 4
```

**Example 2:**
```
Input:
LinkedList: 10 -> 20 -> 4 -> 30
Node to be deleted: 20
Output: 10 4 30
```

## Your Task

Your task is to complete the function `deleteNode()`, which takes a reference to the node to be deleted and modifies the linked list directly. You should not return anything from the function.

Expected Time Complexity: $O(1)$.
Expected Auxiliary Space: $O(1)$.

## Constraints

- $2 <= number of nodes <= 10^3$
- $1 <= value of nodes <= 10^3$

## Problem Explanation

Here's the step-by-step breakdown of the deletion process:

1. **Copy data**: Copy the data from the next node to the current node to be deleted.
2. **Skip next node**: Change the next pointer of the current node to point to the next of the next node.
3. **Effectively delete**: The next node is effectively deleted as its data is copied to the current node and it is skipped in the list.

### Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```py
  def deleteNode(node):
    if node.next:
        node.data = node.next.data
        node.next = node.next.next
  ```
  </TabItem>

  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  void deleteNode(Node *node) {
    if (node->next) {
        Node* temp = node->next;
        node->data = temp->data;
        node->next = temp->next;
        delete temp;
    }
  }
  ```
  </TabItem>
</Tabs>

## Solution Logic

1. **Copy data from next node**: The data of the node to be deleted is replaced with the data of the next node.
2. **Skip the next node**: The next pointer of the current node is updated to point to the node after the next node.
3. **Delete next node**: The next node is effectively removed from the list.

## Time Complexity

$O(1)$, since the node is deleted in constant time by copying the data and updating pointers.

## Space Complexity

$O(1)$, constant space complexity, as no extra space is used beyond a few pointers.

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/delete-without-head-pointer/)
- **HackerRank Problem:** [HackerRank](https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem)
- **Author's LeetCode Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)

This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.