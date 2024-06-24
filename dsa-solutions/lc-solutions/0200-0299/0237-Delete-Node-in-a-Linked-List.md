---
id: delete-node-in-a-linked-list
title: Delete Node in a Linked List
sidebar_label: 0237-Delete-Node-in-a-Linked-List
tags:
 - Linked List
 - C++
 - Java
 - Python
description: "This document provides a solution to the Delete Node in a Linked List problem, where we need to delete a given node from a singly linked list."
---

## Problem

Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.

All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

- The value of the given node should not exist in the linked list.
- The number of nodes in the linked list should decrease by one.
- All the values before node should be in the same order.
- All the values after node should be in the same order.

### Custom testing:

- For the input, you should provide the entire linked list head and the node to be given node. node should not  be the last node of the list and should be an actual node in the list.
- We will build the linked list and pass the node to your function.
- The output will be the entire list after calling your function.

### Examples

**Example 1:**

Input: head = [4,5,1,9], node = 5  
Output: [4,1,9]  
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

**Example 2:**

Input: head = [4,5,1,9], node = 1  
Output: [4,5,9]  
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

### Constraints

- The number of nodes in the list is in the range `[2, 1000]`.
- `-1000 <= Node.val <= 1000`
- The value of each node in the list is unique.
- The `node` to be deleted is in the list and is not a tail node.

### Approach

Since we do not have access to the head of the list, we cannot use the standard deletion method. Instead, we can solve the problem by copying the value of the next node to the current node and then deleting the next node. This effectively removes the node from the list.

### Solution

#### Code in Different Languages

### C++ Solution
```cpp
#include <iostream>

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

void deleteNode(ListNode* node) {
    if (node == nullptr || node->next == nullptr) return;
    ListNode* next_node = node->next;
    node->val = next_node->val;
    node->next = next_node->next;
    delete next_node;
}

int main() {
    ListNode* head = new ListNode(4);
    head->next = new ListNode(5);
    head->next->next = new ListNode(1);
    head->next->next->next = new ListNode(9);
    
    deleteNode(head->next); // Deletes node with value 5

    ListNode* current = head;
    while (current) {
        std::cout << current->val << " ";
        current = current->next;
    }
    std::cout << std::endl;
}
```
### Java Solution

```java
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}

public class DeleteNode {
    public void deleteNode(ListNode node) {
        if (node == null || node.next == null) return;
        node.val = node.next.val;
        node.next = node.next.next;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(4);
        head.next = new ListNode(5);
        head.next.next = new ListNode(1);
        head.next.next.next = new ListNode(9);

        new DeleteNode().deleteNode(head.next); // Deletes node with value 5

        ListNode current = head;
        while (current != null) {
            System.out.print(current.val + " ");
            current = current.next;
        }
        System.out.println();
    }
}
```
### Python Solution

```python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def deleteNode(node):
    if not node or not node.next:
        return
    node.val = node.next.val
    node.next = node.next.next

# Test
head = ListNode(4)
head.next = ListNode(5)
head.next.next = ListNode(1)
head.next.next.next = ListNode(9)

deleteNode(head.next)  # Deletes node with value 5

current = head
while current:
    print(current.val, end=" ")
    current = current.next
print()
```
### Complexity Analysis
**Time Complexity:** O(1)

>Reason: The operation involves copying the value and changing pointers, which are constant time operations.

**Space Complexity:** O(1)

>Reason: We use a constant amount of extra space.

This solution deletes a node in a singly-linked list by copying the value of the next node to the current node and adjusting the pointers accordingly, achieving the desired result with constant time and space complexity.

### References
**LeetCode Problem:** Delete Node in a Linked List