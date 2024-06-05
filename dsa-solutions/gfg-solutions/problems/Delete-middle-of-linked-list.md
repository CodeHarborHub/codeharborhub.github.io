---
id: Delete-middle-of-linked-list
title: Delete Middle of Linked List (Geeks for Geeks)
sidebar_label: Delete Middle of Linked List 
tags:
  - Intermediate
  - Linked List
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Delete Middle of Linked List problem on Geeks for Geeks."
---

## Problem Description

Given a singly linked list, delete the middle node of the linked list. If the list has an even number of nodes, delete the second middle node.

## Examples

**Example 1:**
```
Input:
LinkedList: 1 -> 2 -> 3 -> 4 -> 5
Output: 1 -> 2 -> 4 -> 5
```

**Example 2:**
```
Input:
LinkedList: 1 -> 2 -> 3 -> 4
Output: 1 -> 2 -> 4
```

## Your Task

Your task is to complete the function `deleteMid()`, which takes the head of the linked list as its argument and returns the head of the modified list after the middle node has been deleted.

Expected Time Complexity: $O(N)$.
Expected Auxiliary Space: $O(1)$.

## Constraints

- $1 <= number of nodes <= 10^3$
- $1 <= value of nodes <= 10^3$

## Problem Explanation

Here's the step-by-step breakdown of the deletion process:

1. **Find middle node**: Use two pointers (slow and fast) to find the middle node of the linked list.
2. **Update pointers**: Update the next pointer of the node just before the middle node to skip the middle node.
3. **Delete middle node**: Remove the middle node by updating pointers.

### Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```py
  class ListNode:
      def __init__(self, val=0, next=None):
          self.val = val
          self.next = next

  def deleteMid(head):
      if not head or not head.next:
          return None
      
      slow = head
      fast = head
      prev = None

      while fast and fast.next:
          prev = slow
          slow = slow.next
          fast = fast.next.next
      
      if prev:
          prev.next = slow.next
      
      return head
  ```
  </TabItem>

  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  struct ListNode {
      int val;
      ListNode *next;
      ListNode(int x) : val(x), next(NULL) {}
  };

  ListNode* deleteMid(ListNode* head) {
      if (!head || !head->next) return NULL;

      ListNode* slow = head;
      ListNode* fast = head;
      ListNode* prev = NULL;

      while (fast && fast->next) {
          prev = slow;
          slow = slow->next;
          fast = fast->next->next;
      }

      if (prev) {
          prev->next = slow->next;
      }

      delete slow;
      return head;
  }
  ```
  </TabItem>
</Tabs>

## Solution Logic

1. **Find middle node**: Initialize two pointers, slow and fast. Move the slow pointer one step at a time and the fast pointer two steps at a time.
2. **Update pointers**: When the fast pointer reaches the end, the slow pointer will be at the middle node. Keep track of the node just before the middle node using a previous pointer.
3. **Delete middle node**: Update the next pointer of the previous node to skip the middle node, effectively deleting it from the list.

## Time Complexity

$O(N)$, where N is the number of nodes in the list. The function traverses the list once to find the middle node.

## Space Complexity

$O(1)$, constant space complexity. The algorithm uses only a few additional pointers for traversal and modification, which does not depend on the input size.

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/delete-middle-of-linked-list/)
- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)

This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.