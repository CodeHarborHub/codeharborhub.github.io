---
id: remove-duplicates-from-sorted-list
title: Remove Duplicates from Sorted List (LeetCode)
difficulty: Easy
sidebar_label: 0083-RemoveDuplicatesFromSortedList
topics:
  - Linked List
companies: []
description: Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
---

## Problem Description


| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

## Problem Description

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

### Examples

#### Example 1

- **Input:** `head = [1,1,2]`
- **Output:** `[1,2]`
- **Explanation:** After removing the duplicates, the linked list becomes `1 -> 2`.

#### Example 2

- **Input:** `head = [1,1,2,3,3]`
- **Output:** `[1,2,3]`
- **Explanation:** After removing the duplicates, the linked list becomes `1 -> 2 -> 3`.

### Constraints

- The number of nodes in the list is in the range [0, 300].
- `-100 <= Node.val <= 100`
- The list is guaranteed to be sorted in ascending order.

### Approach

To solve the problem, we can use a simple iterative approach. We traverse the linked list and whenever we encounter consecutive nodes with the same value, we skip one of them.

1. **Iterative Traversal:**
   - Start traversing the linked list from the head node.
   - At each step, compare the current node's value with the next node's value.
   - If they are the same, skip the next node by adjusting the pointers.

### Solution Code

#### Python

```
class Solution(object):
    def deleteDuplicates(self, head):
        if not head or not head.next:
            return head
        prev = head
        curr = head.next
        while curr:
            if prev.val == curr.val:
                prev.next = curr.next
                curr = curr.next
            else:
                prev = curr
                curr = curr.next
        return head
```

#### Java

```
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null || head.next == null)
            return head;
        ListNode prev = head;
        ListNode curr = head.next;
        while (curr != null) {
            if (prev.val == curr.val) {
                prev.next = curr.next;
                curr = curr.next;
            } else {
                prev = curr;
                curr = curr.next;
            }
        }
        return head;
    }
}
```

#### C++

```
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        if (!head || !head->next)
            return head;
        ListNode* prev = head;
        ListNode* curr = head->next;
        while (curr) {
            if (prev->val == curr->val) {
                prev->next = curr->next;
                curr = curr->next;
            } else {
                prev = curr;
                curr = curr->next;
            }
        }
        return head;
    }
};
```

### Conclusion

The above solution effectively removes duplicates from a sorted linked list while maintaining its sorted order. It employs a simple iterative approach, traversing the linked list and skipping duplicate nodes. This solution has a time complexity of O(n) and a space complexity of O(1), making it efficient for handling the given constraints.
