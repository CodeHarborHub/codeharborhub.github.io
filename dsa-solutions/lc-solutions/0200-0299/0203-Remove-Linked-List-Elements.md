---
id: remove-linked-list-elements
title: Remove Linked List Elements
sidebar_label: 203-Remove-Linked-List-Elements
tags:
- Linked List
- Java
- C++
- Python
- Data Structures
description: "This document provides solutions for removing all nodes from a linked list that have a specific value."
---

## Problem

Given the head of a linked list and an integer `val`, remove all the nodes of the linked list that have `Node.val == val`, and return the new head.

### Examples

**Example 1:**

**Input:** head = [1,2,6,3,4,5,6], val = 6

**Output:** [1,2,3,4,5]

**Example 2:**

**Input:** head = [], val = 1

**Output:** []

**Example 3:**

**Input:** head = [7,7,7,7], val = 7

**Output:** []

### Constraints

- The number of nodes in the list is in the range `[0, 10^4]`.
- `1 <= Node.val <= 50`
- `0 <= val <= 50`

---

## Approach

The approach involves iterating through the linked list and removing nodes that have the specified value. This can be achieved using a dummy node to handle edge cases where the head itself needs to be removed.

### Steps:

1. **Dummy Node:**
   - Create a dummy node that points to the head of the list. This helps to easily handle the case where the head node itself needs to be removed.
  
2. **Iterate and Remove:**
   - Use a pointer to iterate through the list, checking each node's value.
   - If a node's value equals `val`, adjust the pointers to bypass this node.

3. **Return New Head:**
   - Return the next node of the dummy node as the new head of the list.

## Solution for Remove Linked List Elements

### Java Solution

```java
class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public ListNode removeElements(ListNode head, int val) {
        // Create a dummy node to handle edge cases
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        
        // Use a pointer to iterate through the list
        ListNode current = dummy;
        
        while (current.next != null) {
            if (current.next.val == val) {
                // Bypass the node with the value equal to val
                current.next = current.next.next;
            } else {
                // Move to the next node
                current = current.next;
            }
        }
        
        // Return the new head
        return dummy.next;
    }
}
```
### C++ solution

```cpp
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        // Create a dummy node to handle edge cases
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        
        // Use a pointer to iterate through the list
        ListNode* current = dummy;
        
        while (current->next != nullptr) {
            if (current->next->val == val) {
                // Bypass the node with the value equal to val
                current->next = current->next->next;
            } else {
                // Move to the next node
                current = current->next;
            }
        }
        
        // Return the new head
        return dummy->next;
    }
};
```
### Python Solution

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        # Create a dummy node to handle edge cases
        dummy = ListNode(0)
        dummy.next = head
        
        # Use a pointer to iterate through the list
        current = dummy
        
        while current.next is not None:
            if current.next.val == val:
                # Bypass the node with the value equal to val
                current.next = current.next.next
            else:
                # Move to the next node
                current = current.next
        
        # Return the new head
        return dummy.next
```
### Complexity Analysis
**Time Complexity:** O(n)

>Reason: The algorithm involves a single pass through the linked list, resulting in a time complexity of $O(n)$, where $n$ is the number of nodes in the list.

**Space Complexity:** O(1)
>Reason: The space complexity is $O(1)$ because the algorithm uses a constant amount of extra space.

### References
**LeetCode Problem:** Remove Linked List Elements

**Solution Link:** Remove Linked List Elements Solution on LeetCode


