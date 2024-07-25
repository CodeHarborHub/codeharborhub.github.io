---
id: sort-list
title: Sort List
sidebar_label: 0148- Sort List
tags:
  - DSA
  - Leetcode
  - Linked List

description: "This is a solution to the Sort List on LeetCode."
---

## Problem Statement

Given the head of a linked list, return the list after sorting it in ascending order.

**Example 1:**

```
Input: head = [4,2,1,3]
Output: [1,2,3,4]
```

**Example 2:**

```
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
```

**Example 3:**

```
Input: head = []
Output: []
```

### Constraints:

- The number of nodes in the list is in the range $[0, 5 * 10^4].$
- $-10^5 <= Node.val <= 10^5$

## Algorithm

The algorithm uses the merge sort technique to sort a singly linked list. The steps involved are as follows:

1. **Base Case**:

   - If the list is empty or contains only one element, it is already sorted. Return the head.

2. **Splitting the List**:

   - Use two pointers, `slow` and `fast`, to find the middle of the list.
   - Move `slow` one step at a time and `fast` two steps at a time.
   - When `fast` reaches the end of the list, `slow` will be at the middle.
   - Split the list into two halves at the middle.

3. **Recursive Sorting**:

   - Recursively sort the two halves.

4. **Merging**:
   - Merge the two sorted halves into a single sorted list.

## C++ Implementation

```cpp
class Solution {
public:
    ListNode* sortList(ListNode* head) {
        if (head == NULL || head->next == NULL)
            return head;

        ListNode *temp = NULL;
        ListNode *slow = head;
        ListNode *fast = head;

        while (fast != NULL && fast->next != NULL) {
            temp = slow;
            slow = slow->next;
            fast = fast->next->next;
        }
        temp->next = NULL;

        ListNode* l1 = sortList(head);
        ListNode* l2 = sortList(slow);

        return merge(l1, l2);
    }

    ListNode* merge(ListNode *l1, ListNode *l2) {
        ListNode *ptr = new ListNode(0);
        ListNode *curr = ptr;

        while (l1 != NULL && l2 != NULL) {
            if (l1->val <= l2->val) {
                curr->next = l1;
                l1 = l1->next;
            } else {
                curr->next = l2;
                l2 = l2->next;
            }
            curr = curr->next;
        }
        if (l1 != NULL) {
            curr->next = l1;
        }
        if (l2 != NULL) {
            curr->next = l2;
        }
        return ptr->next;
    }
};
```

## Python Implementation

```python
class ListNode:
    def __init__(self, x=0, next=None):
        self.val = x
        self.next = next

class Solution:
    def sortList(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head

        # Find the middle point
        slow, fast = head, head
        prev = None
        while fast and fast.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next

        # Split the list into two halves
        prev.next = None

        # Recursively sort the two halves
        l1 = self.sortList(head)
        l2 = self.sortList(slow)

        # Merge the sorted halves
        return self.merge(l1, l2)

    def merge(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = ListNode()
        curr = dummy

        while l1 and l2:
            if l1.val <= l2.val:
                curr.next = l1
                l1 = l1.next
            else:
                curr.next = l2
                l2 = l2.next
            curr = curr.next

        if l1:
            curr.next = l1
        if l2:
            curr.next = l2

        return dummy.next
```

## Java Implementation

```java
class Solution {
    public ListNode sortList(ListNode head) {
        if (head == null || head.next == null)
            return head;

        ListNode slow = head, fast = head, temp = null;

        while (fast != null && fast.next != null) {
            temp = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        temp.next = null;

        ListNode l1 = sortList(head);
        ListNode l2 = sortList(slow);

        return merge(l1, l2);
    }

    private ListNode merge(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;

        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }
        if (l1 != null) {
            curr.next = l1;
        }
        if (l2 != null) {
            curr.next = l2;
        }
        return dummy.next;
    }
}
```

## JavaScript Implementation

```javascript
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

var sortList = function (head) {
  if (!head || !head.next) return head;

  let slow = head,
    fast = head,
    temp = null;

  while (fast && fast.next) {
    temp = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  temp.next = null;

  const l1 = sortList(head);
  const l2 = sortList(slow);

  return merge(l1, l2);
};

function merge(l1, l2) {
  const dummy = new ListNode(0);
  let curr = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (l1) {
    curr.next = l1;
  }
  if (l2) {
    curr.next = l2;
  }
  return dummy.next;
}
```
