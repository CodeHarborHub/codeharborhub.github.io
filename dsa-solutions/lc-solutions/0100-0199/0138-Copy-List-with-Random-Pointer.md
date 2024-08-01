---
id: copy-list-with-random-pointer
title: Copy List with Random Pointer
sidebar_label: 0138 Copy List with Random Pointer
tags:
  - Java
  - Python
  - C++
  - JavaScript  
description: "This is a solution to the Copy List with Random Pointer problem on LeetCode."
---

## Problem Description

A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`.

Construct a deep copy of the list. The deep copy should consist of exactly `n` brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the `next` and `random` pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes `X` and `Y` in the original list, where `X.random --> Y`, then for the corresponding two nodes `x` and `y` in the copied list, `x.random --> y`.

### Examples

**Example 1:**

![e1](https://github.com/user-attachments/assets/af16a7ff-3439-4683-8f77-9fdbb3332bef)

```
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
```

**Example 2:**

![e2](https://github.com/user-attachments/assets/f805c77f-c6cd-4b92-9f9a-c17665bfa317)

```
Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
```

### Constraints:

- The number of nodes in the list is in the range [0, 1000].
- `-10000 <= Node.val <= 10000`
- Node.random is null or is pointing to some node in the linked list.
---

##  Approach to Solve the Copy List with Random Pointer Problem

### Understand the Problem:

Create a deep copy of a linked list where each node has a `next` and a `random` pointer. The new list should be identical in structure to the original, but with all new nodes. Ensure the `random` pointers in the new list accurately reflect the original's `random` pointer relationships.

### Approach

1. **Interweaving Nodes**: Create and insert new nodes immediately after each original node, forming an interwoven list.
2. **Assigning Random Pointers**: Set the `random` pointers of the new nodes based on the `random` pointers of the original nodes.
3. **Separating Lists**: Restore the original list and extract the copied list by adjusting the `next` pointers of both original and new nodes.

#### Code in Different Languages

<Tabs>
  
    
<TabItem value="Python" label="Python" default>

  <SolutionAuthor name="sivaprasath2004"/>

  ```python

class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = x
        self.next = next
        self.random = random

def copyRandomList(head: 'Node') -> 'Node':
    if not head:
        return None
     
    current = head
    while current:
        new_node = Node(current.val, current.next, None)
        current.next = new_node
        current = new_node.next
     
    current = head
    while current:
        if current.random:
            current.next.random = current.random.next
        current = current.next.next
     
    original = head
    copy = head.next
    copy_head = copy
    
    while original:
        original.next = original.next.next
        if copy.next:
            copy.next = copy.next.next
        original = original.next
        copy = copy.next
    
    return copy_head

  ```
  </TabItem>

 <TabItem value="Js" label="JavaScript" default>

  <SolutionAuthor name="sivaprasath2004"/>

   ```JS
class Node {
    constructor(val, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

function copyRandomList(head) {
    if (!head) return null;
 
    let current = head;
    while (current) {
        const newNode = new Node(current.val);
        newNode.next = current.next;
        current.next = newNode;
        current = newNode.next;
    }
 
    current = head;
    while (current) {
        if (current.random) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    } 
    current = head;
    const newHead = head.next;
    let copyCurrent = newHead;

    while (current) {
        current.next = current.next.next;
        if (copyCurrent.next) {
            copyCurrent.next = copyCurrent.next.next;
        }
        current = current.next;
        copyCurrent = copyCurrent.next;
    }

    return newHead;
}

```
   </TabItem>
   
 </Tabs>
 

### Output

![Screenshot from 2024-07-19 21-11-44](https://github.com/user-attachments/assets/2c2a7efb-711d-4f6e-aebd-8f540de015c3)

### Complexity

- **Time Complexity:** O(n), where `n` is the number of nodes in the linked list. The algorithm iterates through the list three times: once for interweaving nodes, once for setting random pointers, and once for separating the lists.

- **Space Complexity:** O(1), since the algorithm uses a constant amount of extra space beyond the input list itself (e.g., pointers for traversal and temporary variables).

