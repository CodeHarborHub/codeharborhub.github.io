---
id: linked-list-cycle
title: Linked List Cycle(LeetCode)
sidebar_label: 0141-Linked List Cycle
tags:
  - Linked list
  - Hash Table
  - Two pointer
description: Given head, the head of a linked list, determine if the linked list has a cycle in it.
---

## Problem Statement

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. Note that `pos` is not passed as a parameter.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

### Examples

**Example 1:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/7da67d86-c090-49ad-9ed1-7e342a0e650a)

```plaintext
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

**Example 2:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/9d7aa2ed-77b7-4f92-b6da-2360bb1c6cd1)

```plaintext
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```

**Example 3:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/b0f0c2aa-747e-4c74-975b-a68cc61cafb7)

```plaintext
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

### Constraints

- The number of the nodes in the list is in the range `[0, 104]`.
- `-105 <= Node.val <= 105`
- `pos` is `-1` or a valid index in the linked-list.

## Solution

This algorithm, also known as Floyd's Cycle-Finding Algorithm or the "tortoise and the hare algorithm," is used to detect cycles in a linked list. It uses two pointers, one moving at twice the speed of the other, to detect if the linked list contains a cycle.

### Approach 

#### Algorithm

1. Initialize two pointers, `slow` and `fast`, pointing to the head of the linked list.
2. Move `slow` one step at a time and `fast` two steps at a time.
3. If `fast` reaches the end of the list (i.e., `fast` or `fast->next` is `NULL`), then there is no cycle, so return false.
4. If `fast` meets `slow` at any point during traversal, then there is a cycle in the linked list, so return true.

#### Implementation

```C++
class Solution {
public:
    bool hasCycle(ListNode *head) {
        ListNode *fast = head;
        ListNode *slow = head;
        
        // Traverse the linked list
        while (fast != NULL && fast->next != NULL) {
            fast = fast->next->next; // Move fast pointer two steps
            slow = slow->next;       // Move slow pointer one step
            
            // Check if fast and slow pointers meet
            if (fast == slow) {
                return true; // Cycle detected
            }
        }
        
        return false; // No cycle found
    }
};
```

### Complexity Analysis

- **Time complexity**: The slow pointer traverses the list once, and the fast pointer traverses it twice. Therefore, the time complexity is O(N), where N is the number of nodes in the linked list.
- **Space complexity**: The algorithm uses only two pointers (`slow` and `fast`) and has a constant space complexity of O(1).

### Conclusion

The Floyd's Cycle-Finding Algorithm is an efficient way to detect cycles in a linked list using only two pointers and constant space. It is a popular algorithm due to its simplicity and effectiveness in solving this problem.
