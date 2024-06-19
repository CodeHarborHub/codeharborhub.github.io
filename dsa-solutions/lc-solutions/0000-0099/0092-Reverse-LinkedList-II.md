---
id: reverse-linked-list-II
title: Reverse Linked List II
sidebar_label: 0092 - Reverse Linked List II
tags:
  - Linked List
  - Leetcode
description: "This is a solution to the Reverse Linked List II problem on LeetCode."
---

## Problem Statement

Given the head of a singly linked list and two integers left and right where `left <= right`, reverse the nodes of the list from position left to position right, and return the reversed list.

### Examples

**Example 1:**

```
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
```

**Example 2:**

```
Input: head = [5], left = 1, right = 1
Output: [5]
```

### Constraints:

- The number of nodes in the list is `n`.
- $1 <= n <= 500$
- $-500 <= Node.val <= 500$
- $1 <= left <= right <= n$

### Algorithm

1. Create a dummy node pointing to the head of the list to handle edge cases easily.
2. Find the node just before the `left` position (`leftNode`) and the node at the `left` position (`curr`).
3. Reverse the sublist from `left` to `right`.
4. Reconnect the reversed sublist back to the list.
5. Return the new head of the list (`dummy.next`).

### Pseudocode

```
function reverseLinkedList(head, left, right):
    if head is null:
        return null

    dummy = new ListNode(0)
    dummy.next = head
    leftNode = dummy
    curr = head

    for i from 0 to left-2:
        leftNode = leftNode.next
        curr = curr.next

    subhead = curr
    preNode = null

    for i from 0 to right-left:
        nextNode = curr.next
        curr.next = preNode
        preNode = curr
        curr = nextNode

    leftNode.next = preNode
    subhead.next = curr

    return dummy.next
```

### Python

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseLinkedList(self, head: ListNode, left: int, right: int) -> ListNode:
        if not head:
            return None

        dummy = ListNode(0)
        dummy.next = head
        leftNode = dummy
        curr = head

        for i in range(left - 1):
            leftNode = leftNode.next
            curr = curr.next

        subhead = curr
        preNode = None

        for i in range(right - left + 1):
            nextNode = curr.next
            curr.next = preNode
            preNode = curr
            curr = nextNode

        leftNode.next = preNode
        subhead.next = curr

        return dummy.next
```

### Java

```java
class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public ListNode reverseLinkedList(ListNode head, int left, int right) {
        if (head == null) return null;

        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode leftNode = dummy;
        ListNode curr = head;

        for (int i = 0; i < left - 1; i++) {
            leftNode = leftNode.next;
            curr = curr.next;
        }

        ListNode subhead = curr;
        ListNode preNode = null;

        for (int i = 0; i <= right - left; i++) {
            ListNode nextNode = curr.next;
            curr.next = preNode;
            preNode = curr;
            curr = nextNode;
        }

        leftNode.next = preNode;
        subhead.next = curr;

        return dummy.next;
    }
}
```

### C++

```cpp
class ListNode {
public:
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    ListNode* reverseLinkedList(ListNode* head, int left, int right) {
        if (!head) return nullptr;

        ListNode* dummy = new ListNode(0);
        dummy->next = head;

        ListNode* leftNode = dummy;
        ListNode* curr = head;

        for (int i = 0; i < left - 1; i++) {
            leftNode = leftNode->next;
            curr = curr->next;
        }

        ListNode* subhead = curr;
        ListNode* preNode = nullptr;

        for (int i = 0; i <= right - left; i++) {
            ListNode* nextNode = curr->next;
            curr->next = preNode;
            preNode = curr;
            curr = nextNode;
        }

        leftNode->next = preNode;
        subhead->next = curr;

        return dummy->next;
    }
};
```

### JavaScript

```javascript
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var reverseLinkedList = function (head, left, right) {
  if (!head) return null;

  let dummy = new ListNode(0);
  dummy.next = head;
  let leftNode = dummy;
  let curr = head;

  for (let i = 0; i < left - 1; i++) {
    leftNode = leftNode.next;
    curr = curr.next;
  }

  let subhead = curr;
  let preNode = null;

  for (let i = 0; i <= right - left; i++) {
    let nextNode = curr.next;
    curr.next = preNode;
    preNode = curr;
    curr = nextNode;
  }

  leftNode.next = preNode;
  subhead.next = curr;

  return dummy.next;
};
```
