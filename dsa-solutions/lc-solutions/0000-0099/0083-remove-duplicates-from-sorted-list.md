---
id: remove-duplicates-from-sorted-list
title: Remove Duplicates from Sorted List Solution
sidebar_label: 0083 Remove Duplicates from Sorted List
tags:
  - Linked List
  - Two Pointers
  - LeetCode
  - Python
  - Java
  - C++
description: "This is a solution to the Remove Duplicates from Sorted List problem on LeetCode."
---

## Problem Description

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

### Examples

**Example 1:**
```
Input: head = [1,1,2]
Output: [1,2]
```

**Example 2:**

```
Input: head = [1,1,2,3,3]
Output: [1,2,3]
```

### Approach for Removing Duplicates from Sorted List

**Intuition:**
The problem requires removing duplicates from a sorted singly-linked list. The approach involves iterating through the list and removing duplicates while maintaining the sorted order.

**Approach:**
- Initialize a pointer `current` to the head of the linked list to traverse the list.
- Start a `while` loop that continues until `current` reaches the end of the list or `current.next` reaches null.
- Inside the loop, compare the value of the current node `current.val` with the value of the next node `current.next.val`.
- If the values are equal, it indicates a duplicate node. In this case, update the next pointer of the current node `current.next` to skip the next node (remove the duplicate).
- If the values are not equal, move the `current` pointer to the next node, continuing the traversal.
- Repeat the loop until the end of the list is reached, ensuring that all duplicates are removed while maintaining the sorted order of the remaining nodes.
- After the loop, return the modified linked list, which contains no duplicates.


### Code in Different Languages

#### Java (code):

```java
class Solution {
   public ListNode deleteDuplicates(ListNode head) {
        ListNode current = head;

        while (current != null && current.next != null) {
            if (current.val == current.next.val) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }

        return head;
    }
}
```

#### Python (code) 

```python
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        current = head

        while current and current.next:
            if current.val == current.next.val:
                current.next = current.next.next
            else:
                current = current.next

        return head
```

#### CPP (code) ;

```cpp
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode* current = head;

        while (current && current->next) {
            if (current->val == current->next->val) {
                current->next = current->next->next;
            } else {
                current = current->next;
            }
        }

        return head;
    }
};
```

#### Complexity Analysis

- **Time Complexity:** O(n)

  - The algorithm iterates through the linked list once, where n is the number of nodes in the list. Each node is examined once to identify and remove duplicates.

- **Space Complexity:** O(1)
  - The algorithm uses a constant amount of additional memory space for variables, regardless of the size of the input linked list, making its space complexity constant.

## References

- **LeetCode Problem**: [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/balanced-binary-tree/solution/)
- **Authors GeeksforGeeks Profile:** [Vipul lakum](https://leetcode.com/u/vipul_lakum_02/)