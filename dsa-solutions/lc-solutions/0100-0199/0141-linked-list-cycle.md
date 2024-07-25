---
id: linked-list-cycle
title: Linked List Cycle
sidebar_label: 0141- Linked List Cycle
tags:
  - DSA
  - Leetcode
  - Linked List

description: "This is a solution to the Linked List cycle  on LeetCode."
---

## Problem Statement

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

### Examples

**Example 1:**

```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

**Example 2:**

```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```

**Example 3:**

```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

### Constraints:

- The number of the nodes in the list is in the range $[0, 10^4].$
- $-105 <= Node.val <= 105$
- $pos is -1 or a valid index in the linked-list.$

## Algorithm

1. **Initialization**:

   - Initialize two pointers, `slow` and `fast`, both pointing to the head of the linked list.

2. **Traversal**:

   - Move the `slow` pointer one step at a time.
   - Move the `fast` pointer two steps at a time.

3. **Cycle Detection**:

   - If there is a cycle, the `fast` pointer will eventually meet the `slow` pointer within the cycle.
   - If there is no cycle, the `fast` pointer will reach the end of the list (NULL).

4. **Return Result**:
   - If the `fast` pointer meets the `slow` pointer, return `true` indicating a cycle is detected.
   - If the `fast` pointer reaches the end of the list, return `false` indicating no cycle is detected.

## Code Implementation

### C++

```cpp
class Solution {
public:
    bool hasCycle(ListNode *head) {
        ListNode* fast = head;
        ListNode* slow = head;

        while (fast != NULL && fast->next != NULL) {
            fast = fast->next->next;
            slow = slow->next;
            if (fast == slow) {
                return true;
            }
        }

        return false;
    }
};
```

### Python

```python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        fast = head
        slow = head

        while fast is not None and fast.next is not None:
            fast = fast.next.next
            slow = slow.next
            if fast == slow:
                return True

        return False
```

### Java

```java
public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;

        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast == slow) {
                return true;
            }
        }

        return false;
    }
}
```

### JavaScript

```javascript
var hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }

  return false;
};
```

