---
id: reverse-doubly-linked-list
title: Reverse a Doubly Linked List
sidebar_label: 2 Reverse a Doubly Linked List
tags:
- Doubly Linked List
- Python
- Java
- C++
- JavaScript
- TypeScript
description: "This document explores different approaches to reversing a doubly linked list in-place, including solutions in Python, Java, C++, JavaScript, and TypeScript."
---

## Problem

Given a doubly linked list of n elements, the task is to reverse this list in-place.

### Examples

**Example 1:**

```
Input:
LinkedList: 3 <--> 4 <--> 5
Output:
5 4 3

Explanation:
After reversing the list, elements are 5 <--> 4 <--> 3.
```

**Example 2:**

```
Input:
LinkedList: 75 <--> 122 <--> 59 <--> 196
Output:
196 59 122 75

Explanation:
After reversing the list, elements are 196 <--> 59 <--> 122 <--> 75.
```

### Your Task
Your task is to complete the given function `reverseDLL()`, which takes head reference as an argument and reverses the elements in-place such that the tail becomes the new head and all pointers are pointing in the right order. You need to return the new head of the reversed list.

**Expected Time Complexity:** $O(N)$  
**Expected Auxiliary Space:** $O(1)$

### Constraints
- $1 ≤ number of nodes ≤ 10^4$
- $0 ≤ value of nodes ≤ 10^4$

## Solution

### Approach

To reverse a doubly linked list in-place, we can use three pointers: `previous_node`, `current_node`, and `next_node`. The algorithm traverses the list, updating the pointers at each step until the entire list is reversed.

### Python Code

<Tabs>
  <TabItem value="python" label="Python">

```python
class Solution:
    def reverseDLL(self, head):
        while head:
            head.next, head.prev = head.prev, head.next
            if not head.prev:
                return head
            head = head.prev
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
class Solution {
    public Node reverseDLL(Node head) {
        while (head != null) {
            Node temp = head.prev;
            head.prev = head.next;
            head.next = temp;
            if (head.prev == null) {
                return head;
            }
            head = head.prev;
        }
        return null;
    }
}
```

  </TabItem>
  <TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    Node* reverseDLL(Node* head) {
        while (head != nullptr) {
            Node* temp = head->prev;
            head->prev = head->next;
            head->next = temp;
            if (head->prev == nullptr) {
                return head;
            }
            head = head->prev;
        }
        return nullptr;
    }
};
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
class Solution {
    reverseDLL(head) {
        while (head) {
            [head.next, head.prev] = [head.prev, head.next];
            if (!head.prev) {
                return head;
            }
            head = head.prev;
        }
        return null;
    }
}
```

  </TabItem>
  <TabItem value="typescript" label="TypeScript">

```typescript
class Solution {
    reverseDLL(head: Node): Node | null {
        while (head) {
            [head.next, head.prev] = [head.prev, head.next];
            if (!head.prev) {
                return head;
            }
            head = head.prev;
        }
        return null;
    }
}
```

  </TabItem>
</Tabs>

### Complexity Analysis

- **Time Complexity:** $O(N),$ where N is the number of elements in the doubly linked list. We traverse the entire list once.
- **Space Complexity:** $O(1)$, as we only use a constant amount of extra space for pointers.

---

## References

- **GeeksforGeeks Problem:** [Reverse a Doubly Linked List](https://www.geeksforgeeks.org/reverse-a-doubly-linked-list/)
- **Author GeeksforGeeks Profile:** [GeeksforGeeks](https://www.geeksforgeeks.org/user/GeeksforGeeks/)
