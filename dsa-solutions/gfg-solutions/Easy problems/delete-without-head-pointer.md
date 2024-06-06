---
id: delete-without-head-pointer
title: Delete without Head Pointer
sidebar_label: 3 Delete without Head Pointer
tags:
- Linked List
- Python
- Java
- C++
- JavaScript
- TypeScript
description: "This document provides solutions to the problem of deleting a node from a singly linked list without having a reference to the head pointer in various programming languages."
---

## Problem

You are given a node `del_node` of a Singly Linked List where you have to delete a value of the given node from the linked list, but you are not given the head of the list.

By deleting the node value, we mean that:
- The value of the given node should not exist in the linked list.
- The number of nodes in the linked list should decrease by one.
- All the values before and after the `del_node` node should be in the same order.

Note:
- Multiple nodes can have the same values as the `del_node`, but you must only remove the node whose pointer `del_node` is given to you.
- It is guaranteed that there exists a node with a value equal to the `del_node` value, and it will not be the last node of the linked list.

### Examples

**Example 1:**

```
Input:
Linked List = 1 -> 2
del_node = 1
Output: 
2

Explanation: 
After deleting 1 from the linked list, 
we have remaining nodes as 2.
```

**Example 2:**

```
Input:
Linked List = 10 -> 20 -> 4 -> 30
del_node = 20
Output: 
10 4 30

Explanation: 
After deleting 20 from the linked list, 
we have remaining nodes as 10, 4, 30.
```

### Your Task
You don't need to read or print anything. You only need to complete the function `deleteNode()` which takes a reference of the deleting node value and your task is to delete the given node value.

**Expected Time Complexity:** $O(1)$  
**Expected Auxiliary Space:** $O(1)$

### Constraints
- $2 ≤ n ≤ 10^3$  
- $1 ≤ elements of the linked list ≤ 10^9$

## Solution

### Approach

To delete a node without a reference to the head pointer, we can mimic the effect of deleting the node by copying the value of the next node to the given node (`del_node`) and then deleting the next node.

### Implementation

<Tabs>
  <TabItem value="python" label="Python">

```python
class Solution:
    
    def reverseDLL(self, head):
        while head:
            head.next, head.prev = head.prev, head.next
            if not head.prev:return head
            head=head.prev
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
class Node {
    int data;
    Node next;
    Node prev;

    Node(int data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Solution {
    public Node reverseDLL(Node head) {
        while (head != null) {
            Node temp = head.next;
            head.next = head.prev;
            head.prev = temp;
            if (head.prev == null) {
                return head;
            }
            head = head.prev;
        }
        return head;
    }
}
```

  </TabItem>
  <TabItem value="cpp" label="C++">

```cpp
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;
    Node* prev;
    Node(int data) {
        this->data = data;
        this->next = nullptr;
        this->prev = nullptr;
    }
};

class Solution {
public:
    Node* reverseDLL(Node* head) {
        while (head != nullptr) {
            swap(head->next, head->prev);
            if (head->prev == nullptr) {
                return head;
            }
            head = head->prev;
        }
        return head;
    }
};
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Solution {
    reverseDLL(head) {
        while (head !== null) {
            [head.next, head.prev] = [head.prev, head.next];
            if (head.prev === null) {
                return head;
            }
            head = head.prev;
        }
        return head;
    }
}
```

  </TabItem>
  <TabItem value="typescript" label="TypeScript">

```typescript
class Node {
    data: number;
    next: Node | null;
    prev: Node | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Solution {
    reverseDLL(head: Node | null): Node | null {
        while (head !== null) {
            [head.next, head.prev] = [head.prev, head.next];
            if (head.prev === null) {
                return head;
            }
            head = head.prev;
        }
        return head;
    }
}
```

  </TabItem>
</Tabs>

### Complexity Analysis

- **Time Complexity:** $O(1)$, as the deletion operation requires constant time regardless of the size of the linked list.
- **Space Complexity:** $O(1)$, as the algorithm uses only a constant amount of extra space regardless of the input size.

---

## References

- **GeeksforGeeks Problem:** [Delete without head pointer](https://www.geeksforgeeks.org/problems/delete-without-head-pointer/0)
- **Author GeeksforGeeks Profile:** [GeeksforGeeks](https://www.geeksforgeeks.org/user/GeeksforGeeks/)
