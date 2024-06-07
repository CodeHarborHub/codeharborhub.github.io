---
id: reverse-linked-list
title: Reverse a Linked List
sidebar_label: 1 Reverse a Linked List
tags:
- Linked List
- Python
- Java
- C++
- JavaScript
- TypeScript
description: "This document explores different approaches to reversing a linked list, including solutions in Python, Java, C++, JavaScript, and TypeScript."
---

## Problem

Given a linked list of N nodes, the task is to reverse this list.

### Examples

**Example 1:**

```
Input:
LinkedList: 1->2->3->4->5->6
Output:
6 5 4 3 2 1

Explanation:
After reversing the list, elements are 6->5->4->3->2->1.
```

**Example 2:**

```
Input:
LinkedList: 2->7->8->9->10
Output:
10 9 8 7 2

Explanation:
After reversing the list, elements are 10->9->8->7->2.
```

### Your Task
The task is to complete the function `reverseList()` with head reference as the only argument and should return the new head after reversing the list.

**Expected Time Complexity:** $ O(N) $ 
**Expected Auxiliary Space:** $ O(1) $

### Constraints
- $ 1 ≤ N ≤ 10^4 $

## Solution

### Approach

To reverse a linked list, we can follow these steps:

1. Initialize three pointers: `prev` (previous node), `curr` (current node), and `nextNode` (next node).
2. Start with `prev = None` and `curr = head`, where `head` is the head of the original linked list.
3. Traverse the linked list:
   - Store `nextNode` as `curr.next`.
   - Reverse the link by pointing `curr.next` to `prev`.
   - Move `prev` to `curr` and `curr` to `nextNode`.
4. After traversing, update the new head to `prev`.
5. Return the new head.

### Implementation

<Tabs>
  <TabItem value="python" label="Python">

```python
class Solution:
    # Function to reverse a linked list.
    def reverseList(self, head):
        prev = None
        curr = head
        
        while curr:
            nextNode = curr.next
            curr.next = prev
            prev = curr
            curr = nextNode
            
        head = prev
        return head
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        
        while (curr != null) {
            ListNode nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }
        
        head = prev;
        return head;
    }
}
```

  </TabItem>
  <TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        
        while (curr != nullptr) {
            ListNode* nextNode = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextNode;
        }
        
        head = prev;
        return head;
    }
};
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    head = prev;
    return head;
}
```

  </TabItem>
  <TabItem value="typescript" label="TypeScript">

```typescript
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    while (curr !== null) {
        let nextNode: ListNode | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    head = prev;
    return head;
}
```

  </TabItem>
</Tabs>

### Complexity Analysis

- **Time Complexity:** $O(N)$, where N is the number of nodes in the linked list. We traverse the entire list once.
- **Space Complexity:** $O(1)$, as we only use a constant amount of extra space for pointers.

---

## References

- **GeeksforGeeks Problem:** [Reverse a Linked List](https://www.geeksforgeeks.org/reverse-a-linked-list/)
- **Author GeeksforGeeks Profile:** [GeeksforGeeks](https://www.geeksforgeeks.org/user/GeeksforGeeks/)
