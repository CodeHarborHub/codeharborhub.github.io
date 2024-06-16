---
id: 82-remove-duplicates-from-sorted-list-2
title: Remove Duplicates from Sorted List II (Leetcode)
sidebar_label: 0082-RemoveDuplicatesFromSortedListII
description: Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
sidebar_position: 82
---

## Problem Description

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

### Examples

#### Example 1

- **Input:** $head = [1,2,3,3,4,4,5]$
- **Output:** $[1,2,5]$


#### Example 2

- **Input:** $head = [1,1,1,2,3]$
- **Output:** $[2,3]$



### Constraints

- The number of nodes in the list is in the range [0, 300].
- $-100 <= Node.val <= 100$
- The list is guaranteed to be sorted in ascending order.


### Intuition


The goal is to remove all elements from a sorted linked list that have duplicate values, ensuring that each element appears only once. We use a dummy node to simplify handling edge cases and traverse the list, removing duplicates as we encounter them.


### Approach

1. **Initialization:**

    - Create a dummy node to handle edge cases where the head itself might be a duplicate.
    - Initialize two pointers, prev (starting at dummy) and curr (starting at head).

2. **Traversal and Duplicate Removal:**

    - Traverse the linked list using the curr pointer.
    - For each node, check if the current value matches the next node's value.
    - If duplicates are detected, use a loop to skip all nodes with that value, deleting them.
    - Update the prev pointer's next to point to the first non-duplicate node after the series of duplicates.
    - If no duplicates are found, move both prev and curr pointers forward.

3. **Completion:**

    - After the loop, update the head to point to the node after the dummy.
    - Delete the dummy node to free memory.
    Return the updated head of the linked list.

### Solution Code

#### Python

```py
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head

        dummy = ListNode(0)  # Dummy node to handle the case when head is a duplicate
        dummy.next = head

        prev = dummy
        curr = head

        while curr and curr.next:
            if prev.next.val == curr.next.val:
                val = curr.next.val
                while curr and curr.val == val:
                    temp = curr
                    curr = curr.next
                    del temp  # Marking the node for garbage collection
                prev.next = curr
            else:
                prev = prev.next
                curr = curr.next

        head = dummy.next  # Update head in case it has changed
        del dummy  # Marking the dummy node for garbage collection
        return head
```

#### Java

```java
class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }

        ListNode dummy = new ListNode(0);  // Dummy node to handle the case when head is a duplicate
        dummy.next = head;

        ListNode prev = dummy;
        ListNode curr = head;

        while (curr != null && curr.next != null) {
            if (prev.next.val == curr.next.val) {
                int val = curr.next.val;
                while (curr != null && curr.val == val) {
                    ListNode temp = curr;
                    curr = curr.next;
                    temp = null;  // Marking the node for garbage collection
                }
                prev.next = curr;
            } else {
                prev = prev.next;
                curr = curr.next;
            }
        }

        head = dummy.next;  // Update head in case it has changed
        dummy = null;  // Marking the dummy node for garbage collection
        return head;
    }
}
```

#### C++

```cpp
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        if (head == nullptr || head->next == nullptr) {
            return head;
        }

        ListNode* dummy = new ListNode(0);  // Dummy node to handle the case when head is a duplicate
        dummy->next = head;

        ListNode* prev = dummy;
        ListNode* curr = head;

        while (curr != nullptr && curr->next != nullptr) 
        {
            if (prev->next->val == curr->next->val) 
            {
                int val = curr->next->val;
                while (curr != nullptr && curr->val == val) 
                {
                    ListNode* temp = curr;
                    curr = curr->next;
                    delete temp;
                }
                prev->next = curr;
            } else {
                prev = prev->next;
                curr = curr->next;
            }
        }

        head = dummy->next;  // Update head in case it has changed
        delete dummy;  // Delete the dummy node
        return head;
    }
};
```

### Conclusion

The provided code effectively removes duplicates from a sorted linked list by iterating through the list and adjusting the pointers accordingly to skip duplicate nodes. It uses a dummy node to handle cases where the head itself is a duplicate and performs the deletion in place without modifying the values within the nodes. The solution has a time complexity of $O(n)$, where n is the number of nodes in the linked list, due to the linear traversal required to identify and remove duplicates. The space complexity is $O(1)$ since the algorithm operates in constant space, only using a few pointers and temporary variables regardless of the input size. Overall, this solution offers an efficient and straightforward approach to handling duplicate removal in a sorted linked list.
