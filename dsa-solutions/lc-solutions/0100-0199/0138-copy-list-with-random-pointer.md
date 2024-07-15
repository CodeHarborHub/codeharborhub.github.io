---

id: copy-list-with-random-pointer
title: Copy List With Random Pointer
level: medium
sidebar_label: Copy List With Random Pointer
tags:
  - Hash Table 
  - Linked List
  - Java
  - Python
  - C++
description: "This document provides solutions for the Copy List With Random Pointer problem on LeetCode."

---

## Problem Description

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Construct a deep copy of the list.

### Examples

**Example 1:**
```
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
```

**Example 2:**
```
Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
```

**Example 3:**
```
Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]
```

### Constraints:

- The number of nodes in the list is in the range [0, 1000].
- -10000 <= Node.val <= 10000
- Node.random is null or is pointing to a node in the linked list.

---

## Approach to Solve the Copy List with Random Pointer Problem

To create a deep copy of a linked list with an additional random pointer, follow these steps:

### Approach

1. **Create Clones Adjacent to Original Nodes:**
   - Iterate through the original list and create a new node for each original node. Insert this new node right next to the original node. This way, each original node will have its clone right next to it.

2. **Assign Random Pointers to Cloned Nodes:**
   - Iterate through the list again. For each original node, if it has a random pointer, set the random pointer of the clone node to point to the clone of the node that the original node’s random pointer is pointing to. This can be achieved because the clone of any node `A` is next to `A`.

3. **Restore the Original List and Extract the Cloned List:**
   - Iterate through the list once more to restore the original list by separating the original nodes from their clones. Extract the cloned list by linking the cloned nodes together.

#### Code in Different Languages

### C++
```cpp
class Node {
public:
    int val;
    Node* next;
    Node* random;

    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};

class Solution {
public:
    Node* copyRandomList(Node* head) {
        if (!head) return nullptr;

        // Step 1: Create a new node for each original node and insert it next to the original node.
        Node* curr = head;
        while (curr) {
            Node* newNode = new Node(curr->val);
            newNode->next = curr->next;
            curr->next = newNode;
            curr = newNode->next;
        }

        // Step 2: Assign random pointers for the new nodes.
        curr = head;
        while (curr) {
            if (curr->random) {
                curr->next->random = curr->random->next;
            }
            curr = curr->next->next;
        }

        // Step 3: Restore the original list and extract the copied list.
        curr = head;
        Node* copiedHead = head->next;
        Node* copiedCurr = copiedHead;
        while (curr) {
            curr->next = curr->next->next;
            if (copiedCurr->next) {
                copiedCurr->next = copiedCurr->next->next;
            }
            curr = curr->next;
            copiedCurr = copiedCurr->next;
        }

        return copiedHead;
    }
};
```

### Java
```java
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}

class Solution {
    public Node copyRandomList(Node head) {
        if (head == null) return null;

        // Step 1: Create a new node for each original node and insert it next to the original node.
        Node curr = head;
        while (curr != null) {
            Node newNode = new Node(curr.val);
            newNode.next = curr.next;
            curr.next = newNode;
            curr = newNode.next;
        }

        // Step 2: Assign random pointers for the new nodes.
        curr = head;
        while (curr != null) {
            if (curr.random != null) {
                curr.next.random = curr.random.next;
            }
            curr = curr.next.next;
        }

        // Step 3: Restore the original list and extract the copied list.
        curr = head;
        Node copiedHead = head.next;
        Node copiedCurr = copiedHead;
        while (curr != null) {
            curr.next = curr.next.next;
            if (copiedCurr.next != null) {
                copiedCurr.next = copiedCurr.next.next;
            }
            curr = curr.next;
            copiedCurr = copiedCurr.next;
        }

        return copiedHead;
    }
}
```

### Python
```python
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = x
        self.next = next
        self.random = random

class Solution:
    def copyRandomList(self, head: 'Node') -> 'Node':
        if not head:
            return None

        # Step 1: Create a new node for each original node and insert it next to the original node.
        curr = head
        while curr:
            newNode = Node(curr.val)
            newNode.next = curr.next
            curr.next = newNode
            curr = newNode.next

        # Step 2: Assign random pointers for the new nodes.
        curr = head
        while curr:
            if curr.random:
                curr.next.random = curr.random.next
            curr = curr.next.next

        # Step 3: Restore the original list and extract the copied list.
        curr = head
        copiedHead = head.next
        copiedCurr = copiedHead
        while curr:
            curr.next = curr.next.next
            if copiedCurr.next:
                copiedCurr.next = copiedCurr.next.next
            curr = curr.next
            copiedCurr = copiedCurr.next

        return copiedHead
```

### Complexity

- **Time Complexity:** $O(n)$ - Each of the three steps involves a single pass through the list.
- **Space Complexity:** $O(1)$ - The space complexity is constant as we are not using any additional data structures for storage.

### Summary

This approach efficiently creates a deep copy of a linked list with random pointers by leveraging the existing structure of the list and ensuring that each node and its clone are linked adjacently.