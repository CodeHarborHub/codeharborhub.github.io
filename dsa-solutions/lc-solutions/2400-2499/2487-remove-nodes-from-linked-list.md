---
id: remove-nodes-from-linked-list
title: Remove Nodes from Linked List
level: medium
sidebar_label: Remove Nodes from Linked List
tags:
  - Linked List
  - Data Structures
  - Java
description: "This document provides solutions for the Remove Nodes from Linked List problem."
---

## Problem Statement

You are given the head of a linked list.

Remove every node which has a node with a greater value anywhere to the right side of it.

Return the head of the modified linked list.

**Example 1:**

Input: `head = [5,2,13,3,8]`

Output: `[13,8]`

Explanation:
- The nodes that should be removed are 5, 2 and 3.
- Node 13 is to the right of node 5.
- Node 13 is to the right of node 2.
- Node 8 is to the right of node 3.

**Example 2:**

Input: `head = [1,1,1,1]`

Output: `[1,1,1,1]`

Explanation: Every node has value 1, so no nodes are removed.

**Constraints:**

- The number of nodes in the given list is in the range `[1, 10^5]`.
- `1 <= Node.val <= 10^5`

## Solutions

### Approach

To solve the problem, the idea is to traverse the linked list, reverse it, and then keep the nodes in non-increasing order. Here are the detailed steps:

1. **Reverse the Linked List**:
   - Start by reversing the given linked list.

2. **Filter the Nodes**:
   - Traverse the reversed linked list and build a new linked list consisting only of nodes which are greater than or equal to the previously added nodes.

3. **Reverse the Linked List Again**:
   - Reverse the filtered linked list to restore the original order with the required nodes removed.

### Java 

```java
class Solution {
    public ListNode removeNodes(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }

        head = reverse(head);

        ListNode head2 = new ListNode(0);
        ListNode temp2 = head2;
        ListNode temp = head;

        while (temp != null) {
            if (temp.val >= temp2.val) {
                temp2.next = new ListNode(temp.val);
                temp2 = temp2.next;
            }
            temp = temp.next;
        }

        return reverse(head2.next);
    }

    private ListNode reverse(ListNode head) {
        ListNode prev = null;
        while (head != null) {
            ListNode next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }

    public class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }
}
```


### Python

```Python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeNodes(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head
        
        head = self.reverse(head)
        head2 = ListNode(0)
        temp2 = head2
        temp = head
        
        while temp:
            if temp.val >= temp2.val:
                temp2.next = ListNode(temp.val)
                temp2 = temp2.next
            temp = temp.next
        
        return self.reverse(head2.next)
    
    def reverse(self, head: ListNode) -> ListNode:
        temp = None
        while head.next:
            temp2 = head.next
            head.next = temp
            temp = head
            head = temp2
        head.next = temp
        return head

def print_list(node):
    while node:
        print(node.val, end=" -> ")
        node = node.next
    print("None")

head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)

sol = Solution()
new_head = sol.removeNodes(head)

print_list(new_head)

```
