---
id: delete-middle-of-linked-list
title: Delete Middle of Linked List
sidebar_label: 5 Delete Middle of Linked List
tags:
- Linked List
- Python
- Java
- C++
- JavaScript
- TypeScript
description: "This document provides solutions to the problem of deleting the middle node from a singly linked list in various programming languages."
---

## Problem

Given a singly linked list, delete the middle of the linked list. For example, if given linked list is 1->2->3->4->5 then linked list should be modified to 1->2->4->5.
If there are even nodes, then there would be two middle nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.
If the input linked list has a single node, then it should return NULL.

### Examples

**Example 1:**

```
Input:
LinkedList: 1->2->3->4->5
Output: 
1 2 4 5
```

**Example 2:**

```
Input:
LinkedList: 2->4->6->7->5->1
Output: 
2 4 6 5 1
```

### Your Task
The task is to complete the function `deleteMid()` which takes head of the linked list and returns head of the linked list with the middle element deleted. If the linked list is empty or contains a single element, then it should return NULL.

**Expected Time Complexity:** $O(n)$  
**Expected Auxiliary Space:** $O(1)$

### Constraints
- $1 ≤ n ≤ 10^5$  
- $1 ≤ value[i] ≤ 10^9$

## Solution

### Intuition & Approach

The simplest idea is to make two pointers, `fast` and `slow`. Increment the `fast` pointer by two steps and the `slow` pointer by one step until the `fast` pointer reaches the end of the linked list. By then, the `slow` pointer will have reached the exact middle of the list.

To delete the middle node, ensure that the `slow` pointer is at the node just before the middle. This can be done by starting the `fast` pointer from the second node instead of the first. Then, skip the middle node by changing the `next` pointer of the `slow` node to `slow->next->next` or `slow.next.next`.

**Edge Case:** If there is only one node in the linked list, return NULL or None.

### Complexity
- **Time Complexity:** $O(n)$- **Space Complexity:** O(1)

### Implementation

<Tabs>
  <TabItem value="python" label="Python">

```python
class Solution:
    def deleteMid(self, head):
        if not head.next:
            return None
        slow, fast = head, head.next
        while fast and fast.next and fast.next.next:
            fast = fast.next.next
            slow = slow.next
        slow.next = slow.next.next
        return head
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
class Solution {
    public ListNode deleteMid(ListNode head) {
        if (head == null || head.next == null) {
            return null;
        }
        ListNode slow = head, fast = head.next;
        while (fast != null && fast.next != null && fast.next.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
        return head;
    }
}
```

  </TabItem>
  <TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    ListNode* deleteMid(ListNode* head) {
        if (head->next == nullptr) {
            return nullptr;
        }
        ListNode* slow = head;
        ListNode* fast = head->next;
        while (fast != nullptr && fast->next != nullptr && fast->next->next != nullptr) {
            fast = fast->next->next;
            slow = slow->next;
        }
        slow->next = slow->next->next;
        return head;
    }
};
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
function deleteMid(head) {
    if (!head.next) {
        return null;
    }
    let slow = head, fast = head.next;
    while (fast !== null && fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
}
```

  </TabItem>
  <TabItem value="typescript" label="TypeScript">

```typescript
function deleteMid(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return null;
    }
    let slow: ListNode | null = head, fast: ListNode | null = head.next;
    while (fast !== null && fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if (slow && slow.next) {
        slow.next = slow.next.next;
    }
    return head;
}
```

  </TabItem>
</Tabs>

### Complexity
- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$

---

## References

- **GeeksforGeeks Problem:** [Delete Middle of Linked List](https://www.geeksforgeeks.org/problems/delete-middle-of-linked-list/0)
- **Author GeeksforGeeks Profile:** [GeeksforGeeks](https://www.geeksforgeeks.org/user/GeeksforGeeks/)

