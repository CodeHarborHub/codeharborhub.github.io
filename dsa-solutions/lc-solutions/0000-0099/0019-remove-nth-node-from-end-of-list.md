---
id: remove-nth-node-from-end-of-list
title: Remove nth node from end of list (LeetCode)
sidebar_label: 0019-remove-nth-node-from-end-of-list
tags:
  - Two Pointers
  - Linked List
description: "Given the head of a linked list, remove the nth node from the end of the list and return its head."
sidebar_position: 19
---

## Problem Description

Given the head of a linked list, remove the nth node from the end of the list and return its head.

### Example 1

- **Input:** `head = [1,2,3,4,5], n = 2`
- **Output:** `[1,2,3,5]`

### Example 2

- **Input:** `head = [1], n = 1`
- **Output:** `[]`

### Example 3

- **Input:** `head = [1,2], n = 1`
- **Output:** `[1]`

### Constraints

- The number of nodes in the list is sz.
- $1 <= sz <= 30$
- $0 <= Node.val <= 100$
- $1 <= n <= sz$

## Approach

1. Calculate the size of the Single Linked List. We need to travel to the prev node of the node to be removed thus we perform reduce size by n
2. If the node to be removed is the first node (size == 0) then we can simply return the next node of head since it will be null if the list has only one node.
3. Traverse till the prev node using a loop again
4. Skip the next node by linking the prev node to the next of next node. If not present, assign null.
5. Finally return the head.

## Solution Code

#### Python

```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def removeNthFromEnd(self, head, n):
        length = self.findLength(head)
        i, traverseTill = 0, length - n - 1
        if traverseTill == -1:
            return head.next
        curr = head
        while i < traverseTill:
            curr = curr.next
            i += 1
        curr.next = curr.next.next
        return head

    def findLength(self, head):
        count = 0
        if head is None:
            return count
        curr = head
        while curr is not None:
            count += 1
            curr = curr.next
        return count
```

#### Java

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        int length = findLength(head);
        int i = 0, traverseTill = length - n - 1;
        if(traverseTill == -1) return head.next;
        ListNode curr = head;
        while(i < traverseTill){
            curr = curr.next;
            i++;
        }
        curr.next = curr.next.next;
        return head;
    }
    public int findLength(ListNode head){
        int count = 0;
        if(head == null) return count;
        ListNode curr = head;
        while(curr != null){
            count++;
            curr = curr.next;
        }
        return count;
    }
}
```

#### C++

```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        int length = 0;
        ListNode* curr = head;

        // Calculate the length of the linked list
        while (curr != nullptr) {
            length++;
            curr = curr->next;
        }

        // Find the position to remove
        int traverseTill = length - n - 1;
        int i = 0;
        curr = head;

        // If the head needs to be removed
        if (traverseTill == -1) {
            head = head->next;
            delete curr;
            return head;
        }

        // Traverse to the node before the one to be removed
        while (i < traverseTill) {
            curr = curr->next;
            i++;
        }

        // Remove the nth node from the end
        ListNode* temp = curr->next;
        curr->next = curr->next->next;
        delete temp;

        return head;
    }
};
```
