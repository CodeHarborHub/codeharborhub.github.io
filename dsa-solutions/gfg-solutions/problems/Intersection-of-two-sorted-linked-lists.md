---
id: Intersection-of-two-sorted-linked-lists
title: Intersection of Two Sorted Linked Lists (Geeks for Geeks)
sidebar_label: Intersection of Two Sorted Linked Lists 
tags:
  - Intermediate
  - Linked List
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Intersection of Two Sorted Linked Lists problem on Geeks for Geeks."
---

## Problem Description

Given two linked lists sorted in increasing order, create a new linked list representing the intersection of the two linked lists. The new linked list should be made with its own memory and be sorted in increasing order.

## Examples

**Example 1:**
```
Input:
List1: 1 -> 2 -> 3 -> 4 -> 6
List2: 2 -> 4 -> 6 -> 8
Output: 2 -> 4 -> 6
```

**Example 2:**
```
Input:
List1: 1 -> 2 -> 3 -> 4
List2: 6 -> 7 -> 8 -> 9
Output: Empty List
```

## Your Task

Your task is to complete the function `findIntersection()`, which takes the heads of both linked lists as arguments and returns the head of the new linked list representing their intersection.

Expected Time Complexity: $O(N + M)$, where N and M are the lengths of the two linked lists.
Expected Auxiliary Space: $O(1)$.

## Constraints

- $1 <= number of nodes <= 10^5$
- $1 <= value of nodes <= 10^5$

## Problem Explanation

Here's the step-by-step breakdown of finding the intersection:

1. **Initialize pointers**: Start with two pointers, each pointing to the head of one linked list.
2. **Traverse both lists**: Move through both linked lists simultaneously.
3. **Compare nodes**: At each step, compare the current nodes of both lists.
4. **Add common nodes**: If the nodes are the same, add it to the result list.
5. **Advance pointers**: Move the pointer(s) accordingly based on the comparison.

### Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```py
  class ListNode:
      def __init__(self, val=0, next=None):
          self.val = val
          self.next = next

  def findIntersection(head1, head2):
      dummy = ListNode(0)
      tail = dummy
      while head1 and head2:
          if head1.val == head2.val:
              tail.next = ListNode(head1.val)
              tail = tail.next
              head1 = head1.next
              head2 = head2.next
          elif head1.val < head2.val:
              head1 = head1.next
          else:
              head2 = head2.next
      return dummy.next
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

  ListNode* findIntersection(ListNode* head1, ListNode* head2) {
      ListNode dummy(0);
      ListNode* tail = &dummy;
      
      while (head1 && head2) {
          if (head1->val == head2->val) {
              tail->next = new ListNode(head1->val);
              tail = tail->next;
              head1 = head1->next;
              head2 = head2->next;
          } else if (head1->val < head2->val) {
              head1 = head1->next;
          } else {
              head2 = head2->next;
          }
      }
      return dummy.next;
  }
  ```
  </TabItem>
</Tabs>

## Solution Logic

1. **Initialize pointers**: Start with two pointers, each pointing to the head of one linked list.
2. **Traverse both lists**: Use a while loop to move through both linked lists simultaneously.
3. **Compare nodes**: At each step, compare the current nodes of both lists.
4. **Add common nodes**: If the nodes are the same, add the node value to the new linked list.
5. **Advance pointers**: Move the pointer(s) accordingly based on the comparison of node values.
6. **Return result**: Return the head of the new linked list representing the intersection.

## Time Complexity

$O(N + M)$, where N and M are the lengths of the two linked lists. The function visits each node in both linked lists once.

## Space Complexity

$O(1)$, constant space complexity. The algorithm uses only a few additional pointers for traversal and modification, which does not depend on the input size.

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/intersection-of-two-sorted-linked-lists/)
- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/intersection-of-two-linked-lists/)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)

This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.