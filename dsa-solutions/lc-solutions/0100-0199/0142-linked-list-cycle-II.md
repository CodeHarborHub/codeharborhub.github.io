---
id: linked-list-cycle--II
title: Linked List Cycle II
sidebar_label: 0142- Linked List Cycle II
tags:
  - DSA
  - Leetcode
  - Linked List

description: "This is a solution to the Linked List cycle II on LeetCode."
---

## Problem Statement

Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

### Examples

**Example 1:**

```
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

**Example 2:**

```
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

**Example 3:**

```
Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
```

### Constraints:

- The number of the nodes in the list is in the range $[0, 10^4].$
- $-10^5 <= Node.val <= 10^5$
- pos is `-1` or a valid index in the linked-list.

## Algorithm for Detecting the Start of a Cycle in a Linked List

1. **Initialization**:

   - Initialize two pointers, `slow` and `fast`, both pointing to the head of the linked list.

2. **Cycle Detection**:

   - Move the `slow` pointer one step at a time.
   - Move the `fast` pointer two steps at a time.
   - If there is a cycle, the `fast` pointer will eventually meet the `slow` pointer within the cycle.

3. **Finding the Cycle Start**:

   - If the `fast` pointer meets the `slow` pointer, reset the `slow` pointer to the head of the list.
   - Move both pointers one step at a time until they meet again.
   - The node where they meet is the start of the cycle.

4. **Return Result**:
   - If the `fast` pointer meets the `slow` pointer, return the meeting node.
   - If there is no cycle, return `NULL`.

## Code Implementations

### C++

```cpp
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        ListNode* fast = head;
        ListNode* slow = head;

        while (fast != NULL && fast->next != NULL) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) {
                slow = head;
                while (slow != fast) {
                    slow = slow->next;
                    fast = fast->next;
                }
                return slow;
            }
        }
        return NULL;
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
    def detectCycle(self, head: ListNode) -> ListNode:
        fast = head
        slow = head

        while fast is not None and fast.next is not None:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                slow = head
                while slow != fast:
                    slow = slow.next
                    fast = fast.next
                return slow
        return None
```

### Java

```java
public class Solution {
    public ListNode detectCycle(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                slow = head;
                while (slow != fast) {
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow;
            }
        }
        return null;
    }
}
```

### JavaScript

```javascript
var detectCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};
```
