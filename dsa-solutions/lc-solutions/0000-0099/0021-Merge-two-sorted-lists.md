---
id: merge-two-sorted-lists
title: Merge Two Sorted Lists (LeetCode)
sidebar_label: 0021-MergeTwoSortedLists
tags:
  - Linked List
  - Two Pointers
description: Given two sorted linked lists, merge them into a single sorted linked list.
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

### Problem Description

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

### Examples

#### Example 1

- **Input:** list1 = [1,2,4], list2 = [1,3,4]
- **Output:** [1,1,2,3,4,4]

#### Example 2

- **Input:** list1 = [], list2 = []
- **Output:** []

#### Example 3

- **Input:** list1 = [], list2 = [0]
- **Output:** [0]

### Constraints

- The number of nodes in both lists is in the range [0, 50].
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in non-decreasing order.

### Approach

To solve the problem, we can use the following approach:

1. **Initialize Pointers:**
   - Use a dummy node to form the new list and a tail pointer to keep track of the end of the merged list.

2. **Iterate Through the Lists:**
   - Compare the values of the current nodes in both lists and attach the smaller node to the merged list.
   - Move the pointer forward in the list from which the node was taken.

3. **Attach Remaining Nodes:**
   - Once one of the lists is exhausted, attach the remaining nodes of the other list to the merged list.

4. **Return Result:**
   - The merged list is pointed to by the dummy node's next pointer.

### Solution Code

#### Python

```python
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1, list2):
        # Dummy node to form the new list
        dummy = ListNode(0)
        # Tail pointer for the new list
        tail = dummy

        # While both lists are non-empty, compare the values and attach the smaller node to the new list
        while list1 is not None and list2 is not None:
            if list1.val <= list2.val:
                tail.next = list1
                list1 = list1.next
            else:
                tail.next = list2
                list2 = list2.next
            tail = tail.next

        # If either list is not empty, attach the remainder to the new list
        if list1 is not None:
            tail.next = list1
        else:
            tail.next = list2

        # The dummy node's next pointer points to the head of the merged list
        return dummy.next
```

#### C++

```cpp
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        // Dummy node to form the new list
        ListNode dummy(0);
        // Tail pointer for the new list
        ListNode* tail = &dummy;

        // While both lists are non-empty, compare the values and attach the smaller node to the new list
        while (list1 != nullptr && list2 != nullptr) {
            if (list1->val <= list2->val) {
                tail->next = list1;
                list1 = list1->next;
            } else {
                tail->next = list2;
                list2 = list2->next;
            }
            tail = tail->next;
        }

        // If either list is not empty, attach the remainder to the new list
        if (list1 != nullptr) {
            tail->next = list1;
        } else {
            tail->next = list2;
        }

        // The dummy node's next pointer points to the head of the merged list
        return dummy.next;
    }
};
```

#### Java

```java
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Dummy node to form the new list
        ListNode dummy = new ListNode(0);
        // Tail pointer for the new list
        ListNode tail = dummy;

        // While both lists are non-empty, compare the values and attach the smaller node to the new list
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }

        // If either list is not empty, attach the remainder to the new list
        if (list1 != null) {
            tail.next = list1;
        } else {
            tail.next = list2;
        }

        // The dummy node's next pointer points to the head of the merged list
        return dummy.next;
    }
}
```

### Conclusion

The above solution efficiently merges two sorted linked lists into a single sorted linked list. It employs a straightforward approach to compare the elements from both lists and attach the smaller element to the merged list. This ensures that the merged list maintains the sorted order of the input lists, providing a simple yet effective approach to solving the problem of merging two sorted linked lists.


